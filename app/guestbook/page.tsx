"use client";

import { useEffect, useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import { User } from "@supabase/supabase-js";
import { GeistMono } from "geist/font/mono";
import { Loader2 } from "lucide-react";

import AnimatedContent from "app/components/ui/AnimatedContent";
import { BackButton } from "app/components/back-button";

// export const metadata = {
//   title: "Guestbook",
//   description:
//     "A guestbook where you can leave your thoughts, messages, or feedback.",
// };

export default function GuestBook() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const [content, setContent] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [messagesLoading, setMessagesLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
    checkUser();
  }, []);

  const checkUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);
    setLoading(false);
  };

  const signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/guestbook`,
      },
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/guestbook`,
      },
    });
  };

  const fetchMessages = async () => {
    setMessagesLoading(true);
    const { data, error } = await supabase
      .from("Guestbook")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching messages:", error);
      setError("Failed to fetch messages. Please try again later.");
    } else {
      setMessages(data || []);
      setError(null);
    }
    setMessagesLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;

    const { error } = await supabase.from("Guestbook").insert([
      {
        username: user.user_metadata.full_name || user.email,
        content,
        created_at: new Date(),
        user_id: user.id,
      },
    ]);

    if (error) {
      console.error("Error inserting message:", error);
      setError("Failed to submit message. Please try again.");
    } else {
      setContent("");
      fetchMessages();
      setError(null);
    }
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto py-8 md:py-16">
      <AnimatedContent
        distance={20}
        direction="horizontal"
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        scale={1.05}
        threshold={0.2}
      >
        <div className="flex items-center mb-8">
          <BackButton />
        </div>

        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium mb-12 max-w-2xl">
          A guestbook where you can leave your thoughts, messages, or feedback.{" "}
          <span className="font-bold">Be respectful.</span>
        </p>
      </AnimatedContent>

      {loading ? (
        <div className="flex items-center justify-center p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50 dark:bg-neutral-900/50">
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="w-8 h-8 text-neutral-500 animate-spin" />
            <p
              className={`text-sm text-neutral-600 dark:text-neutral-400 ${GeistMono.className}`}
            >
              Loading user data...
            </p>
          </div>
        </div>
      ) : !user ? (
        <div className="flex items-center justify-between mb-16 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Sign in to leave a message
          </p>
          <button
            onClick={signInWithGithub}
            className="px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 
                     border border-neutral-200 dark:border-neutral-800 rounded-md 
                     hover:bg-neutral-100 dark:hover:bg-neutral-900 
                     transition-colors duration-200 cursor-pointer"
          >
            Sign In
          </button>
        </div>
      ) : (
        <div className="space-y-4 mb-16">
          <div className="flex items-center justify-between">
            <p
              className={`text-sm text-neutral-600 dark:text-neutral-400 ${GeistMono.className}`}
            >
              {user.user_metadata.full_name || user.email}
            </p>
            <button
              onClick={signOut}
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer"
            >
              Sign out
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Your message..."
              className="w-full p-3 text-sm bg-transparent border border-neutral-200 
                       dark:border-neutral-800 rounded-lg focus:outline-none 
                       focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-700 
                       placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-neutral-600 
                       dark:text-neutral-400 border border-neutral-200 
                       dark:border-neutral-800 rounded-lg 
                       hover:bg-neutral-100 dark:hover:bg-neutral-900 
                       transition-colors duration-200 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="space-y-4 pt-4">
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold mr-4">Messages</h2>
          <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 mt-[5px]"></span>
        </div>

        {messagesLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 
                          bg-neutral-50 dark:bg-neutral-900/50"
              >
                <div className="h-4 w-32 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse mb-3"></div>
                <div className="h-3 w-full bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse mb-2"></div>
                <div className="h-3 w-2/3 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse mb-2"></div>
                <div className="h-2 w-24 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse mt-3"></div>
              </div>
            ))}
          </div>
        ) : messages.length > 0 ? (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 
                          bg-neutral-50 dark:bg-neutral-900/50"
              >
                <p
                  className={`text-sm font-medium mb-1 ${GeistMono.className}`}
                >
                  {message.username}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {message.content}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-2">
                  {new Date(message.created_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
            <p
              className={`text-neutral-600 dark:text-neutral-400 ${GeistMono.className}`}
            >
              No messages yet. Be the first to leave one!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
