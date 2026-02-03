import type { Unit } from '../types';

export const quizData: Unit[] = [
  {
    id: 'variables',
    title: 'Variables & Constants',
    description: 'Learn how to store data using var, let, and const.',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Which keyword should you use to declare a variable that cannot be reassigned?',
        codeSnippet: `______ pi = 3.14159;\npi = 3; // Error!`,
        options: [
          { id: 'opt1', text: 'var' },
          { id: 'opt2', text: 'let' },
          { id: 'opt3', text: 'const' },
          { id: 'opt4', text: 'static' },
        ],
        correctAnswerId: 'opt3',
        explanation: "The 'const' declaration creates block-scoped constants, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment.",
        mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const'
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'What is the scope of a variable declared with `let`?',
        codeSnippet: `if (true) {\n  let x = 5;\n}\nconsole.log(x); // ReferenceError`,
        options: [
          { id: 'opt1', text: 'Global scope', text_ko: '전역 스코프' },
          { id: 'opt2', text: 'Function scope', text_ko: '함수 스코프' },
          { id: 'opt3', text: 'Block scope', text_ko: '블록 스코프' },
          { id: 'opt4', text: 'Module scope', text_ko: '모듈 스코프' },
        ],
        correctAnswerId: 'opt3',
        explanation: "Variables declared by 'let' have their scope in the block for which they are defined, as well as in any contained sub-blocks.",
        mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'What happens when you access a `var` variable before its declaration?',
        codeSnippet: `console.log(myVar);\nvar myVar = 5;`,
        options: [
          { id: 'opt1', text: 'ReferenceError' },
          { id: 'opt2', text: 'undefined' },
          { id: 'opt3', text: 'null' },
          { id: 'opt4', text: '5' },
        ],
        correctAnswerId: 'opt2',
        explanation: "var declarations are processed before any code is executed. This is called 'hoisting'. However, only the declaration is hoisted, not the initialization, so it returns undefined.",
        mdnUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/Hoisting'
      }
    ]
  },
  {
    id: 'functions',
    title: 'Functions',
    description: 'Understand how to define and invoke functions.',
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
];
