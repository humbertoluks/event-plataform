import { Lesson } from "./Lesson";
import { useEffect } from "react";
import { client } from "../lib/apollo";
import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    lessonType: "live" | "class";
    availableAt: string;
    title: string;
    slug: string;
  }[];
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <div>
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
          Cronograma de aulas
        </span>

        <ul>
          {data?.lessons.map((lessons) => {
            return <li key={lessons.id}>{lessons.title}</li>;
          })}
        </ul>

        <div className="flex flex-col gap-8">
          {data?.lessons.map((lesson) => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
}
