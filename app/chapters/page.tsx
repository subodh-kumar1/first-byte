import Link from "next/link";
import course from "@/data/course.json";

export default function ChaptersPage() {
  return (
    <div>
      <h2>{course.courseTitle}</h2>
      <p>{course.description}</p>

      {course.chapters.map((chapter) => (
        <section key={chapter.chapterId} style={{ marginBottom: 24 }}>
          <h3>{chapter.title}</h3>
          <p>{chapter.description}</p>

          <ul>
            {chapter.lessons.map((lesson) => (
              <li key={lesson.lessonId}>
                <Link href={`/lessons/${lesson.lessonId}`}>
                  {lesson.title} ({lesson.duration})
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
