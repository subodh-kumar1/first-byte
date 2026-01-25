import React from "react";
import './globals.css';

export const metadata = {
  title: "First Byte",
  description: "Learn gently. No pressure."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>{metadata.title}</h1>
          <p>{metadata.description}</p>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
