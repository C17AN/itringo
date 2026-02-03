import type { Course } from '../../types';

export const javaCourse: Course = {
  id: 'java',
  role: 'backend',
  title: 'Java',
  title_ko: '자바',
  icon: 'Coffee', 
  chapters: [
    {
      id: 'java-basics',
      title: 'Java Basics',
      title_ko: '자바 기초',
      units: [
        {
          id: 'java-oop',
          title: 'OOP Concepts',
          title_ko: '객체 지향 개념',
          description: 'Classes, Objects, Inheritance, and Polymorphism.',
          description_ko: '클래스, 객체, 상속, 다형성.',
          questions: [
            {
              id: 'q-java-1',
              type: 'multiple-choice',
              question: 'Which keyword is used to inherit a class in Java?',
              question_ko: '자바에서 클래스를 상속받을 때 사용하는 키워드는?',
              options: [
                { id: 'opt1', text: 'implements' },
                { id: 'opt2', text: 'extends' },
                { id: 'opt3', text: 'inherits' },
                { id: 'opt4', text: 'super' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The 'extends' keyword is used to inherit from a class.",
              explanation_ko: "'extends' 키워드는 클래스를 상속받을 때 사용합니다. 인터페이스 구현은 'implements'를 사용합니다.",
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html'
            }
          ]
        },
        {
          id: 'java-collections',
          title: 'Collections',
          title_ko: '컬렉션',
          description: 'List, Set, Map interfaces and implementations.',
          description_ko: 'List, Set, Map 인터페이스와 구현체.',
          questions: [
            {
              id: 'q-java-col-1',
              type: 'multiple-choice',
              question: 'Which collection implementation does NOT allow duplicate elements?',
              question_ko: '중복 요소를 허용하지 않는 컬렉션 구현체는?',
              options: [
                { id: 'opt1', text: 'ArrayList' },
                { id: 'opt2', text: 'LinkedList' },
                { id: 'opt3', text: 'HashSet' },
                { id: 'opt4', text: 'Vector' },
              ],
              correctAnswerId: 'opt3',
              explanation: "A Set is a Collection that cannot contain duplicate elements. HashSet is a common implementation.",
              explanation_ko: "Set 인터페이스는 중복 요소를 허용하지 않습니다. HashSet이 대표적인 구현체입니다.",
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/collections/interfaces/set.html'
            }
          ]
        }
      ]
    }
  ]
};
