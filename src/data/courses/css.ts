import type { Course } from '../../types';

export const cssCourse: Course = {
  id: 'css',
  role: 'frontend',
  title: 'CSS',
  icon: 'Palette',
  chapters: [
    {
      id: 'css-layout',
      title: 'Layout',
      units: [
        {
          id: 'css-flex',
          title: 'Flexbox',
          description: 'Aligning items with Flexible Box Layout.',
          questions: [
            {
              id: 'q-css-1',
              type: 'multiple-choice',
              question: 'Which property aligns items along the main axis?',
              options: [
                { id: 'opt1', text: 'align-items' },
                { id: 'opt2', text: 'justify-content' },
                { id: 'opt3', text: 'align-content' },
                { id: 'opt4', text: 'flex-direction' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content'
            }
          ]
        },
        {
            id: 'css-grid',
            title: 'Grid Layout',
            description: 'Two-dimensional layout system.',
            questions: [
              {
                id: 'q-css-2',
                type: 'multiple-choice',
                question: 'Which property creates a gap between grid rows and columns?',
                options: [
                  { id: 'opt1', text: 'margin' },
                  { id: 'opt2', text: 'padding' },
                  { id: 'opt3', text: 'gap' },
                  { id: 'opt4', text: 'space' },
                ],
                correctAnswerId: 'opt3',
                explanation: "The gap property (formerly grid-gap) defines the size of the gap (gutter) between rows and columns.",
                mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS/gap'
              }
            ]
          }
      ]
    }
  ]
};
