import type { Course } from '../../types';

export const mybatisCourse: Course = {
  id: 'mybatis',
  role: 'backend',
  title: 'MyBatis',
  title_ko: '마이바티스',
  icon: 'ScrollText', // Lucide icon substitute for mapper xml
  chapters: [
    {
      id: 'mybatis-core',
      title: 'Core Concepts',
      title_ko: '핵심 개념',
      units: [
        {
          id: 'mybatis-xml',
          title: 'XML Mapping',
          title_ko: 'XML 매핑',
          description: 'Configuring SQL maps in XML.',
          description_ko: 'XML에서 SQL 맵 설정하기',
          questions: [
            {
              id: 'q-mybatis-1',
              type: 'multiple-choice',
              question: 'Which tag is used to map a SELECT query in MyBatis XML?',
              question_ko: 'MyBatis XML에서 SELECT 쿼리를 매핑할 때 사용하는 태그는?',
              codeSnippet: `<____ id="selectUser">SELECT * FROM users</____>`,
              options: [
                { id: 'opt1', text: 'query' },
                { id: 'opt2', text: 'select' },
                { id: 'opt3', text: 'get' },
                { id: 'opt4', text: 'statement' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The <select> element maps a SQL SELECT statement to an ID.",
              explanation_ko: "<select> 요소는 SQL SELECT 문을 특정 ID에 매핑합니다.",
              mdnUrl: 'https://mybatis.org/mybatis-3/sqlmap-xml.html#select'
            }
          ]
        },
        {
          id: 'mybatis-dynamic',
          title: 'Dynamic SQL',
          title_ko: '동적 SQL',
          description: 'Using if, choose, when, otherwise.',
          description_ko: 'if, choose, when, otherwise 사용법',
          questions: [
            {
              id: 'q-mybatis-dyn-1',
              type: 'multiple-choice',
              question: 'Which tag allows conditional inclusion of SQL fragments?',
              question_ko: '조건에 따라 SQL 조각을 포함시킬 수 있는 태그는?',
              codeSnippet: `<____ test="title != null">AND title like #{title}</____>`,
              options: [
                { id: 'opt1', text: 'condition' },
                { id: 'opt2', text: 'check' },
                { id: 'opt3', text: 'if' },
                { id: 'opt4', text: 'when' },
              ],
              correctAnswerId: 'opt3',
              explanation: "The <if> element allows you to conditionally include a part of the SQL query.",
              explanation_ko: "<if> 요소는 조건이 참일 때만 SQL의 일부를 쿼리에 포함시킵니다.",
              mdnUrl: 'https://mybatis.org/mybatis-3/dynamic-sql.html#if'
            }
          ]
        }
      ]
    }
  ]
};
