"use client";
import AnimatedContent from "app/components/ui/AnimatedContent";
import { BackButton } from "app/components/back-button";
import { useEffect, useState } from "react";
import { supabase } from "supabaseClient";
import SectionHeader from "app/components/SectionHeader";
import { GeistMono } from "geist/font/mono";

interface Message {
  id: number;
  username: string;
  content: string;
  created_at: Date;
}

export default function Guestbook() {
  const [username, setUsername] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
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
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase
      .from("Guestbook")
      .insert([{ username, content, created_at: new Date() }]);

    if (error) {
      console.error("Error inserting message:", error);
      setError("Failed to submit message. Please try again.");
    } else {
      setUsername("");
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
          Place to leave your thoughts, messages, or feedback.
        </p>
      </AnimatedContent>

      <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 mb-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Display name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full border-none px-3 py-2 focus:outline-none"
            />
          </div>
          <hr className="border-t border-neutral-200 dark:border-neutral-800 my-2" />
          <div className="mb-4">
            <textarea
              placeholder="Leave a message"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full border-none px-3 py-2 focus:outline-none resize-none"
              rows={3}
            />
          </div>
          <hr className="border-t border-neutral-200 dark:border-neutral-800 my-2" />
          <button
            type="submit"
            className="w-full text-sm font-semibold text-neutral-400 cursor-pointer hover:translate-x-1 transition-all duration-200 ease-in-out hover:text-neutral-800 dark:hover:text-neutral-200 py-2"
          >
            Submit
          </button>
        </form>
      </div>

      <SectionHeader title="Messages" />

      <div className="space-y-4">
        {error && <p className="text-red-500 text-center">{error}</p>}

        {messages.map((msg) => (
          <div key={msg.id} className="py-4">
            <div className="flex justify-between items-baseline">
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-[#111] dark:text-[#f5f5f5]">
                  {msg.username}
                </span>
                <span
                  className={`text-neutral-500 text-xs ${GeistMono.className} font-semibold`}
                >
                  {new Date(msg.created_at).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 mt-1 text-lg md:text-xl leading-relaxed">
              {msg.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
