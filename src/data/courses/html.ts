import type { Course } from '../../types';

export const htmlCourse: Course = {
  id: 'html',
  role: 'frontend',
  title: 'HTML',
  icon: 'Layout',
  chapters: [
    {
      id: 'html-semantics',
      title: 'Semantics & Structure',
      units: [
        {
          id: 'html-text',
          title: 'Text Fundamentals',
          description: 'Headings, Paragraphs, and Lists.',
          questions: [
            {
              id: 'q-html-1',
              type: 'multiple-choice',
              question: 'Which tag represents the main content of the <body> of a document?',
              options: [
                { id: 'opt1', text: '<content>' },
                { id: 'opt2', text: '<main>' },
                { id: 'opt3', text: '<section>' },
                { id: 'opt4', text: '<div>' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The <main> HTML element represents the dominant content of the <body> of a document.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main'
            }
          ]
        },
        {
            id: 'html-forms',
            title: 'Forms',
            description: 'Input types and attributes.',
            questions: [
              {
                id: 'q-html-2',
                type: 'multiple-choice',
                question: 'Which input type allows the user to select a date?',
                codeSnippet: `<input type="____">`,
                options: [
                  { id: 'opt1', text: 'datetime' },
                  { id: 'opt2', text: 'calendar' },
                  { id: 'opt3', text: 'date' },
                  { id: 'opt4', text: 'day' },
                ],
                correctAnswerId: 'opt3',
                explanation: "The <input type='date'> defines a date picker or control field.",
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date'
              }
            ]
          }
      ]
    }
  ]
};
