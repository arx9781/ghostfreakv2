import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guestbook / Message",
  description: "Sign my guestbook and leave your thoughts. Connect with visitors and share your feedback.",
  openGraph: {
    title: "Guestbook / Message",
    description: "Sign my guestbook and leave your thoughts. Connect with visitors and share your feedback.",
  },
};

export default function GuestbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}