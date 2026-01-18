import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>First Byte</h1>
      <p>
        Learn programming slowly.  
        No pressure. No comparison.
      </p>

      <Link href="/chapters">
        Start Learning →
      </Link>
    </div>
  );
}
