import lessons from "@/data/lessons.json";
import { notFound } from "next/navigation";
import Link from "next/link";

import './styles.css';

interface Lesson {
  id: number;
  slug: string;
  title: string;
  content: string;
}

/**
 * Required for static export
 */
export async function generateStaticParams() {
  return lessons.map((lesson: Lesson) => ({
    slug: lesson.slug,
  }));
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const lesson = lessons.find(
    (lesson: Lesson) => lesson.slug === slug
  );

  if (!lesson) {
    notFound();
  }

  return (
    <div>
      <h1 className="lesson-title">{lesson.title}</h1>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: lesson.content }}
      />

      <Link href="/lessons" className="link-back">
        ← Back to Lessons
      </Link>
    </div>
  );
}
