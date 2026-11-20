import type { Metadata } from "next";
import { sitePath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Xianlin Lu",
  description: "Xianlin Lu’s design portfolio.",
  icons: { icon: sitePath("/brand/icon.svg") },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={sitePath("/styles/source.css")} />
        <link rel="stylesheet" href={sitePath("/styles/pages.css")} />
        <link rel="stylesheet" href={sitePath("/styles/interactions.css")} />
      </head>
      <body>{children}</body>
    </html>
  );
}
