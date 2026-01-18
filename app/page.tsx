import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Welcome to First-Byte 🚀</h1>
      <p>Learn coding in small bite-sized lessons.</p>
      <Link href="/lessons">Start Learning</Link>
    </div>
  );
}
