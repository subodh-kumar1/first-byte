import course from "@/data/course.json";
import Link from "next/link";

export function generateStaticParams() {
  return course.chapters.flatMap((chapter) =>
    chapter.lessons.map((lesson) => ({
      lessonId: lesson.lessonId,
    })),
  );
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;
  const lesson = course.chapters
    .flatMap((ch) => ch.lessons)
    .find((l) => l.lessonId === lessonId);

  console.log(
    "Rendering lesson page for:",
    course.chapters.flatMap((ch) => ch.lessons),
    lessonId,
  );
  if (!lesson) {
    return <p>Lesson not found</p>;
  }

  return (
    <div>
      <h2>{lesson.title}</h2>
      <p>⏱ {lesson.duration}</p>

      {lesson.content.map((block, index) => {
        switch (block.type) {
          case "text":
            return <p key={index}>{block.value}</p>;

          case "note":
            return (
              <div
                key={index}
                style={{
                  background: "#f3f4f6",
                  padding: 12,
                  borderRadius: 8,
                }}
              >
                🌱 {block.value}
              </div>
            );

          case "example":
            return <blockquote key={index}>Example: {block.value}</blockquote>;

          case "code":
            return (
              <pre key={index}>
                <code>{block.value}</code>
              </pre>
            );

          default:
            return null;
        }
      })}
      <Link href={`/chapters`}>Back to Chapters</Link>
    </div>
  );
}
