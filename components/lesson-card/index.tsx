import Link from 'next/link';

interface LessonCardProps {
  title: string;
  slug: string;
  completed: boolean;
}

export default function LessonCard({ title, slug, completed }: LessonCardProps) {
  return (
    <Link
      href={`/lessons/${slug}`}
    >
      <h2>{title}</h2>
      {completed && <p>✅ Completed</p>}
    </Link>
  );
}
