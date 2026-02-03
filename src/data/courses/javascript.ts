import type { Course } from '../../types';

export const jsCourse: Course = {
  id: 'js',
  role: 'frontend',
  title: 'JavaScript',
  title_ko: '자바스크립트',
  icon: 'FileCode2', // Lucide icon
  chapters: [
    {
      id: 'js-basics',
      title: 'Basics',
      title_ko: '기초',
      units: [
        {
          id: 'js-vars',
          title: 'Variables',
          title_ko: '변수',
          description: 'var, let, and const declarations.',
          description_ko: 'var, let, const 선언에 대해 알아봅니다',
          questions: [
            {
              id: 'q1',
              type: 'multiple-choice',
              question: 'Which keyword should you use to declare a variable that cannot be reassigned?',
              question_ko: '재할당할 수 없는 변수를 선언할 때 사용하는 키워드는 무엇인가요?',
              codeSnippet: `______ pi = 3.14159;\npi = 3; // Error!`,
              options: [
                { id: 'opt1', text: 'var' },
                { id: 'opt2', text: 'let' },
                { id: 'opt3', text: 'const' },
                { id: 'opt4', text: 'static' },
              ],
              correctAnswerId: 'opt3',
              explanation: "The 'const' declaration creates block-scoped constants. The value of a constant can't be changed through reassignment.",
              explanation_ko: "'const' 선언은 블록 스코프 상수를 생성합니다. 상수의 값은 재할당을 통해 변경할 수 없습니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const'
            },
            {
              id: 'q2',
              type: 'multiple-choice',
              question: 'What is the scope of a variable declared with `let`?',
              question_ko: '`let`으로 선언된 변수의 스코프(유효 범위)는 무엇인가요?',
              codeSnippet: `if (true) {\n  let x = 5;\n}\nconsole.log(x); // ReferenceError`,
              options: [
                { id: 'opt1', text: 'Global scope', text_ko: '전역 스코프' },
                { id: 'opt2', text: 'Function scope', text_ko: '함수 스코프' },
                { id: 'opt3', text: 'Block scope', text_ko: '블록 스코프' },
                { id: 'opt4', text: 'Module scope', text_ko: '모듈 스코프' },
              ],
              correctAnswerId: 'opt3',
              explanation: "Variables declared by 'let' have their scope in the block for which they are defined.",
              explanation_ko: "'let'으로 선언된 변수는 해당 변수가 정의된 블록 내에서만 유효합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let'
            },
            {
              id: 'q3',
              type: 'multiple-choice',
              question: 'What happens when you access a `var` variable before its declaration?',
              question_ko: '`var` 변수를 선언하기 전에 접근하면 어떤 일이 발생하나요?',
              codeSnippet: `console.log(myVar);\nvar myVar = 5;`,
              options: [
                { id: 'opt1', text: 'ReferenceError' },
                { id: 'opt2', text: 'undefined' },
                { id: 'opt3', text: 'null' },
                { id: 'opt4', text: '5' },
              ],
              correctAnswerId: 'opt2',
              explanation: "var declarations are hoisted. However, only the declaration is hoisted, not the initialization, so it returns undefined.",
              explanation_ko: "var 선언은 호이스팅(끌어올림)됩니다. 하지만 선언만 호이스팅되고 초기화는 호이스팅되지 않으므로 undefined를 반환합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/Hoisting'
            }
          ]
        },
        {
          id: 'js-funcs',
          title: 'Functions',
          description: 'Function expressions and Arrow functions.',
          questions: [
            {
              id: 'q4',
              type: 'multiple-choice',
              question: 'Which syntax correctly defines an Arrow Function?',
              codeSnippet: `const add = ______`,
              options: [
                { id: 'opt1', text: '(a, b) => a + b' },
                { id: 'opt2', text: 'function(a, b) { return a + b }' },
                { id: 'opt3', text: '(a, b) -> a + b' },
                { id: 'opt4', text: '=> (a, b) { a + b }' },
              ],
              correctAnswerId: 'opt1',
              explanation: "An arrow function expression is a compact alternative to a traditional function expression.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions'
            }
          ]
        }
      ]
    },
    {
      id: 'js-advanced',
      title: 'Advanced Concepts',
      units: [
        {
          id: 'js-async',
          title: 'Async JavaScript',
          description: 'Promises and Async/Await.',
          questions: [
             {
              id: 'q-async-1',
              type: 'multiple-choice',
              question: 'What does an async function always return?',
              options: [
                { id: 'opt1', text: 'undefined' },
                { id: 'opt2', text: 'The return value directly', text_ko: '반환값 직접 반환' },
                { id: 'opt3', text: 'A Promise', text_ko: 'Promise 객체' },
                { id: 'opt4', text: 'null' },
              ],
              correctAnswerId: 'opt3',
              explanation: "Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function'
            }
          ]
        }
      ]
    }
  ]
};
