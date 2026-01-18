"use client";

// import lessons from "@/data/lessons.json";
import LessonCard from "@/components/lesson-card";
import { getCompletedLessons } from "@/lib/storage";
import { useEffect, useState } from "react";

import "./styles.css";

const lessons = await fetch("/first-byte/api/lessons").then((res) => res.json()) || [];

export default function LessonsPage() {
  const [completed, setCompleted] = useState<string[]>([]);
  useEffect(() => {
    setCompleted(getCompletedLessons());
  }, []);
  return (
    <div>
      <h1>Lessons</h1>
      <div className="card-wrapper">
        {lessons.map((lesson) => (
          <div key={lesson.slug} className="card-container">
            <LessonCard
              key={lesson.slug}
              title={lesson.title}
              slug={lesson.slug}
              completed={completed.includes(lesson.slug)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
