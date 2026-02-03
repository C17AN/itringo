import { jsCourse } from './courses/javascript';
import { htmlCourse } from './courses/html';
import { cssCourse } from './courses/css';
import { webApiCourse } from './courses/web-api';
import { linuxCourse } from './courses/linux';
import { networkCourse } from './courses/network-infra';
import { osCourse } from './courses/os';
import { javaCourse } from './courses/java';
import { springCourse } from './courses/spring';
import { sqlCourse } from './courses/sql';
import { mybatisCourse } from './courses/mybatis';
import type { Course } from '../types';

export const courses: Course[] = [
  // Frontend
  jsCourse,
  webApiCourse,
  htmlCourse,
  cssCourse,
  // Backend
  javaCourse,
  springCourse,
  sqlCourse,
  mybatisCourse,
  // Infra
  linuxCourse,
  networkCourse,
  osCourse
];

// Helper to find a specific unit across all courses
export const findUnit = (unitId: string) => {
  for (const course of courses) {
    for (const chapter of course.chapters) {
      const unit = chapter.units.find(u => u.id === unitId);
      if (unit) return { unit, chapter, course };
    }
  }
  return null;
};

export const getRandomQuestions = (count: number, role?: 'frontend' | 'backend' | 'infra') => {
  const targetCourses = role 
    ? courses.filter(c => c.role === role)
    : courses;

  const allQuestions = targetCourses.flatMap(course => 
    course.chapters.flatMap(chapter => 
      chapter.units.flatMap(unit => unit.questions)
    )
  );
  
  // Shuffle
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
