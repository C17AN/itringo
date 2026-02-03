import type { Course } from '../../types';

export const sqlCourse: Course = {
  id: 'sql',
  role: 'backend',
  title: 'SQL',
  title_ko: 'SQL',
  icon: 'Database', 
  chapters: [
    {
      id: 'sql-basics',
      title: 'Basic Queries',
      title_ko: '기초 쿼리',
      units: [
        {
          id: 'sql-select',
          title: 'Retrieving Data',
          title_ko: '데이터 조회',
          description: 'SELECT statement and filtering.',
          description_ko: 'SELECT 문과 필터링.',
          questions: [
            {
              id: 'q-sql-1',
              type: 'multiple-choice',
              question: 'Which clause is used to filter records?',
              question_ko: '레코드를 필터링하기 위해 사용하는 절은?',
              codeSnippet: `SELECT * FROM users ____ age > 18;`,
              options: [
                { id: 'opt1', text: 'FILTER' },
                { id: 'opt2', text: 'HAVING' },
                { id: 'opt3', text: 'WHERE' },
                { id: 'opt4', text: 'LIKE' },
              ],
              correctAnswerId: 'opt3',
              explanation: "The WHERE clause is used to filter records.",
              explanation_ko: "WHERE 절은 특정 조건을 충족하는 레코드만 추출할 때 사용합니다.",
              mdnUrl: 'https://www.w3schools.com/sql/sql_where.asp'
            }
          ]
        },
        {
          id: 'sql-join',
          title: 'Joins',
          title_ko: '조인',
          description: 'Combining rows from two or more tables.',
          description_ko: '두 개 이상의 테이블 결합하기.',
          questions: [
            {
              id: 'q-sql-join-1',
              type: 'multiple-choice',
              question: 'Which JOIN returns all records when there is a match in either left or right table?',
              question_ko: '왼쪽 또는 오른쪽 테이블에 일치하는 항목이 있을 때 모든 레코드를 반환하는 JOIN은?',
              options: [
                { id: 'opt1', text: 'INNER JOIN' },
                { id: 'opt2', text: 'LEFT JOIN' },
                { id: 'opt3', text: 'RIGHT JOIN' },
                { id: 'opt4', text: 'FULL OUTER JOIN' },
              ],
              correctAnswerId: 'opt4',
              explanation: "FULL OUTER JOIN returns all records when there is a match in left (table1) or right (table2) table records.",
              explanation_ko: "FULL OUTER JOIN은 왼쪽이나 오른쪽 테이블 중 하나라도 일치하는 것이 있으면 모든 레코드를 반환합니다.",
              mdnUrl: 'https://www.w3schools.com/sql/sql_join_full.asp'
            }
          ]
        }
      ]
    }
  ]
};
