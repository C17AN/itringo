import type { Course } from '../../types';

export const javaCourse: Course = {
  id: 'java',
  role: 'backend',
  title: 'Java',
  title_ko: '자바',
  icon: 'Coffee',
  chapters: [
    {
      id: 'java-basics-syntax',
      title: 'Java Basics & Syntax',
      title_ko: '자바 기초 및 문법',
      units: [
        {
          id: 'java-basics-fundamentals',
          title: 'Core Fundamentals',
          title_ko: '핵심 기초',
          description: 'Basic syntax, data types, and core concepts.',
          description_ko: '기본 문법, 데이터 타입 및 핵심 개념',
          questions: [
            {
              id: 'java-basics-1',
              type: 'multiple-choice',
              question: 'Which of the following is NOT a primitive data type in Java?',
              question_ko: '다음 중 자바의 원시(primitive) 데이터 타입이 아닌 것은?',
              options: [
                { id: '1', text: 'int' },
                { id: '2', text: 'boolean' },
                { id: '3', text: 'String' },
                { id: '4', text: 'char' }
              ],
              correctAnswerId: '3',
              explanation: 'String is a reference type (a class), whereas int, boolean, and char are primitive types.',
              explanation_ko: 'String은 참조 타입(클래스)이며, int, boolean, char는 원시 타입입니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html'
            },
            {
              id: 'java-basics-2',
              type: 'multiple-choice',
              question: 'Where is the String Pool located in Java 8 and later?',
              question_ko: '자바 8 이후 버전에서 String Pool은 어디에 위치합니까?',
              options: [
                { id: '1', text: 'PermGen space' },
                { id: '2', text: 'Heap space' },
                { id: '3', text: 'Stack memory' },
                { id: '4', text: 'Metaspace' }
              ],
              correctAnswerId: '2',
              explanation: 'In Java 7 and later, the String Pool was moved from PermGen to the Heap to avoid memory issues.',
              explanation_ko: '자바 7부터 String Pool은 메모리 문제를 방지하기 위해 PermGen에서 Heap 영역으로 이동되었습니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/index.html'
            },
            {
              id: 'java-basics-3',
              type: 'multiple-choice',
              question: 'What is the purpose of the "final" keyword when applied to a class?',
              question_ko: '클래스에 "final" 키워드를 사용하면 어떤 효과가 있습니까?',
              options: [
                { id: '1', text: 'The class cannot be instantiated', text_ko: '클래스를 인스턴스화할 수 없음' },
                { id: '2', text: 'The class cannot be inherited', text_ko: '클래스를 상속할 수 없음' },
                { id: '3', text: 'The class methods cannot be overloaded', text_ko: '클래스 메서드를 오버로딩할 수 없음' },
                { id: '4', text: 'The class fields must be constants', text_ko: '클래스 필드가 반드시 상수여야 함' }
              ],
              correctAnswerId: '2',
              explanation: 'A final class cannot be extended (subclassed).',
              explanation_ko: 'final 클래스는 상속(서브클래싱)이 불가능합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/IandI/final.html'
            },
            {
              id: 'java-basics-4',
              type: 'multiple-choice',
              question: 'Which process automatically converts a primitive type into its corresponding wrapper class?',
              question_ko: '원시 타입을 대응하는 래퍼 클래스로 자동 변환하는 과정은?',
              options: [
                { id: '1', text: 'Unboxing' },
                { id: '2', text: 'Casting' },
                { id: '3', text: 'Autoboxing' },
                { id: '4', text: 'Wrapping' }
              ],
              correctAnswerId: '3',
              explanation: 'Autoboxing is the automatic conversion that the Java compiler makes between the primitive types and their corresponding object wrapper classes.',
              explanation_ko: 'Autoboxing은 자바 컴파일러가 원시 타입과 그에 대응하는 객체 래퍼 클래스 사이에서 수행하는 자동 변환입니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html'
            },
            {
              id: 'java-basics-5',
              type: 'multiple-choice',
              question: 'Which keyword is used to access the parent class constructor?',
              question_ko: '부모 클래스의 생성자에 접근하기 위해 사용하는 키워드는?',
              options: [
                { id: '1', text: 'this' },
                { id: '2', text: 'parent' },
                { id: '3', text: 'super' },
                { id: '4', text: 'base' }
              ],
              correctAnswerId: '3',
              explanation: 'The "super" keyword is used to refer to parent class members and constructors.',
              explanation_ko: '"super" 키워드는 부모 클래스의 멤버나 생성자를 참조할 때 사용됩니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/IandI/super.html'
            },
            {
              id: 'java-basics-6',
              type: 'multiple-choice',
              question: 'What is the result of 10 / 3 in Java if both are integers?',
              question_ko: '자바에서 10 / 3 (둘 다 정수)의 결과는 무엇입니까?',
              options: [
                { id: '1', text: '3.333...' },
                { id: '2', text: '3' },
                { id: '3', text: '4' },
                { id: '4', text: 'ArithmeticException' }
              ],
              correctAnswerId: '2',
              explanation: 'Integer division in Java truncates the decimal part, resulting in 3.',
              explanation_ko: '자바의 정수 나눗셈은 소수점 이하를 버리고 정수 몫인 3을 반환합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op1.html'
            },
            {
              id: 'java-basics-7',
              type: 'multiple-choice',
              question: 'Which of the following is a valid main method signature?',
              question_ko: '다음 중 유효한 main 메서드 시그니처는?',
              options: [
                { id: '1', text: 'public void main(String[] args)' },
                { id: '2', text: 'public static void main(String args)' },
                { id: '3', text: 'public static int main(String[] args)' },
                { id: '4', text: 'public static void main(String[] args)' }
              ],
              correctAnswerId: '4',
              explanation: 'The standard entry point is public static void main(String[] args).',
              explanation_ko: '표준 진입점은 public static void main(String[] args)입니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/getStarted/application/index.html'
            },
            {
              id: 'java-basics-8',
              type: 'multiple-choice',
              question: 'Which operator checks if an object is an instance of a specific class?',
              question_ko: '객체가 특정 클래스의 인스턴스인지 확인하는 연산자는?',
              options: [
                { id: '1', text: 'typeof' },
                { id: '2', text: 'instanceof' },
                { id: '3', text: 'isInstance' },
                { id: '4', text: 'isa' }
              ],
              correctAnswerId: '2',
              explanation: 'The "instanceof" operator compares an object to a specified type.',
              explanation_ko: '"instanceof" 연산자는 객체를 특정 타입과 비교합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op2.html'
            },
            {
              id: 'java-basics-9',
              type: 'multiple-choice',
              question: 'What is the default value of a boolean variable defined as a class field?',
              question_ko: '클래스 필드로 정의된 boolean 변수의 기본값은?',
              options: [
                { id: '1', text: 'true' },
                { id: '2', text: 'false' },
                { id: '3', text: 'null' },
                { id: '4', text: '0' }
              ],
              correctAnswerId: '2',
              explanation: 'The default value for boolean fields in a class is false.',
              explanation_ko: '클래스의 boolean 타입 필드 기본값은 false입니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html'
            },
            {
              id: 'java-basics-10',
              type: 'multiple-choice',
              question: 'Which class is thread-safe for string manipulation?',
              question_ko: '문자열 조작 시 스레드 안전(thread-safe)을 보장하는 클래스는?',
              options: [
                { id: '1', text: 'String' },
                { id: '2', text: 'StringBuilder' },
                { id: '3', text: 'StringBuffer' },
                { id: '4', text: 'StringTokenizer' }
              ],
              correctAnswerId: '3',
              explanation: 'StringBuffer is synchronized and thus thread-safe, unlike StringBuilder.',
              explanation_ko: 'StringBuffer는 동기화되어 있어 StringBuilder와 달리 스레드 안전합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/lang/StringBuffer.html'
            }
          ]
        }
      ]
    },
    {
      id: 'java-oop',
      title: 'Object-Oriented Programming',
      title_ko: '객체 지향 프로그래밍',
      units: [
        {
          id: 'java-oop-core',
          title: 'OOP Concepts',
          title_ko: 'OOP 개념',
          description: 'Inheritance, Polymorphism, Abstraction, and Encapsulation.',
          description_ko: '상속, 다형성, 추상화, 캡슐화',
          questions: [
            {
              id: 'java-oop-1',
              type: 'multiple-choice',
              question: 'Which of the following is NOT a pillar of OOP?',
              question_ko: '다음 중 OOP의 4대 원칙이 아닌 것은?',
              options: [
                { id: '1', text: 'Inheritance', text_ko: '상속' },
                { id: '2', text: 'Polymorphism', text_ko: '다형성' },
                { id: '3', text: 'Compilation', text_ko: '컴파일' },
                { id: '4', text: 'Encapsulation', text_ko: '캡슐화' }
              ],
              correctAnswerId: '3',
              explanation: 'The four pillars of OOP are Abstraction, Encapsulation, Inheritance, and Polymorphism.',
              explanation_ko: 'OOP의 4대 원칙은 추상화, 캡슐화, 상속, 다형성입니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/concepts/index.html'
            },
            {
              id: 'java-oop-2',
              type: 'multiple-choice',
              question: 'In Java, what is it called when a subclass provides a specific implementation for a method already defined in its superclass?',
              question_ko: '자바에서 서브클래스가 이미 부모 클래스에 정의된 메서드에 대해 구체적인 구현을 제공하는 것을 무엇이라 합니까?',
              options: [
                { id: '1', text: 'Method Overloading', text_ko: '메서드 오버로딩' },
                { id: '2', text: 'Method Overriding', text_ko: '메서드 오버라이딩' },
                { id: '3', text: 'Method Hiding', text_ko: '메서드 숨기기 (Method Hiding)' },
                { id: '4', text: 'Method Shadowing', text_ko: '메서드 섀도잉 (Method Shadowing)' }
              ],
              correctAnswerId: '2',
              explanation: 'Method overriding occurs when a subclass has the same method signature as the superclass.',
              explanation_ko: '메서드 오버라이딩은 서브클래스가 부모 클래스와 동일한 메서드 시그니처를 가질 때 발생합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/IandI/override.html'
            },
            {
              id: 'java-oop-3',
              type: 'multiple-choice',
              question: 'Which access modifier allows visibility only within the same package and its subclasses in other packages?',
              question_ko: '동일한 패키지 내에서와 다른 패키지의 서브클래스에서만 접근을 허용하는 접근 제어자는?',
              options: [
                { id: '1', text: 'public' },
                { id: '2', text: 'private' },
                { id: '3', text: 'protected' },
                { id: '4', text: 'default (package-private)' }
              ],
              correctAnswerId: '3',
              explanation: 'Protected members are accessible within the same package and by subclasses in other packages.',
              explanation_ko: 'protected 멤버는 동일 패키지 및 다른 패키지의 상속받은 클래스에서 접근 가능합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html'
            },
            {
              id: 'java-oop-4',
              type: 'multiple-choice',
              question: 'Can an interface have concrete methods in Java 8?',
              question_ko: '자바 8에서 인터페이스가 구체적인 메서드를 가질 수 있습니까?',
              options: [
                { id: '1', text: 'No, interfaces only have abstract methods', text_ko: '아니요, 인터페이스는 추상 메서드만 가질 수 있음' },
                { id: '2', text: 'Yes, using the "static" or "default" keywords', text_ko: '네, "static" 또는 "default" 키워드를 사용하여 가능함' },
                { id: '3', text: 'Yes, but only if the interface is marked "final"', text_ko: '네, 하지만 인터페이스가 "final"로 표시된 경우에만' },
                { id: '4', text: 'No, only abstract classes can have concrete methods', text_ko: '아니요, 추상 클래스만 구체적인 메서드를 가질 수 있음' }
              ],
              correctAnswerId: '2',
              explanation: 'Java 8 introduced default and static methods in interfaces to allow concrete implementations.',
              explanation_ko: '자바 8부터는 default와 static 키워드를 사용하여 인터페이스에서도 구체적인 메서드를 가질 수 있습니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html'
            },
            {
              id: 'java-oop-5',
              type: 'multiple-choice',
              question: 'What is the "Diamond Problem" related to?',
              question_ko: '"다이아몬드 문제"는 무엇과 관련이 있습니까?',
              options: [
                { id: '1', text: 'Memory leaks', text_ko: '메모리 누수' },
                { id: '2', text: 'Garbage collection', text_ko: '가비지 컬렉션' },
                { id: '3', text: 'Multiple inheritance', text_ko: '다중 상속' },
                { id: '4', text: 'Exception handling', text_ko: '예외 처리' }
              ],
              correctAnswerId: '3',
              explanation: 'The Diamond Problem is an ambiguity that arises from multiple inheritance of state, which Java avoids by not allowing classes to extend more than one class.',
              explanation_ko: '다이아몬드 문제는 다중 상속 시 발생하는 모호성 문제로, 자바는 클래스의 다중 상속을 금지하여 이를 방지합니다.',
              mdnUrl: 'https://en.wikipedia.org/wiki/Multiple_inheritance#The_diamond_problem'
            },
            {
              id: 'java-oop-6',
              type: 'multiple-choice',
              question: 'Which of the following is true about abstract classes?',
              question_ko: '추상 클래스에 대한 설명 중 옳은 것은?',
              options: [
                { id: '1', text: 'They cannot have any constructors', text_ko: '생성자를 가질 수 없음' },
                { id: '2', text: 'They cannot be instantiated', text_ko: '인스턴스화할 수 없음' },
                { id: '3', text: 'All methods must be abstract', text_ko: '모든 메서드가 추상 메서드여야 함' },
                { id: '4', text: 'They must have at least one abstract method', text_ko: '최소 하나 이상의 추상 메서드를 가져야 함' }
              ],
              correctAnswerId: '2',
              explanation: 'Abstract classes cannot be instantiated using the "new" keyword. They may or may not have abstract methods.',
              explanation_ko: '추상 클래스는 "new" 키워드로 인스턴스화할 수 없습니다. 추상 메서드가 없어도 추상 클래스로 선언될 수 있습니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html'
            },
            {
              id: 'java-oop-7',
              type: 'multiple-choice',
              question: 'Which design principle suggests using "has-a" relationships over "is-a" relationships?',
              question_ko: '"is-a" 관계보다 "has-a" 관계를 사용할 것을 권장하는 설계 원칙은?',
              options: [
                { id: '1', text: 'Inheritance', text_ko: '상속' },
                { id: '2', text: 'Composition', text_ko: '컴포지션 (합성)' },
                { id: '3', text: 'Polymorphism', text_ko: '다형성' },
                { id: '4', text: 'Encapsulation', text_ko: '캡슐화' }
              ],
              correctAnswerId: '2',
              explanation: 'Composition (has-a) is often preferred over inheritance (is-a) because it is more flexible and reduces tight coupling.',
              explanation_ko: '컴포지션(has-a)은 상속(is-a)보다 유연하고 결합도를 낮추기 때문에 더 권장되는 경우가 많습니다.',
              mdnUrl: 'https://en.wikipedia.org/wiki/Composition_over_inheritance'
            },
            {
              id: 'java-oop-8',
              type: 'multiple-choice',
              question: 'In Java 14+, what is the purpose of a "Record"?',
              question_ko: '자바 14 이상에서 "Record"의 목적은 무엇입니까?',
              options: [
                { id: '1', text: 'To create mutable data objects', text_ko: '가변(mutable) 데이터 객체를 만들기 위해' },
                { id: '2', text: 'To replace all regular classes', text_ko: '모든 일반 클래스를 대체하기 위해' },
                { id: '3', text: 'To provide a concise way to create immutable data carriers', text_ko: '불변(immutable) 데이터 전달자를 만드는 간결한 방법을 제공하기 위해' },
                { id: '4', text: 'To improve database connection speed', text_ko: '데이터베이스 연결 속도를 향상시키기 위해' }
              ],
              correctAnswerId: '3',
              explanation: 'Records provide a compact syntax for declaring classes that are transparent holders for shallowly immutable data.',
              explanation_ko: 'Record는 불변 데이터를 전달하는 클래스를 간결하게 정의하기 위한 목적으로 도입되었습니다.',
              mdnUrl: 'https://docs.oracle.com/en/java/javase/14/language/records.html'
            },
            {
              id: 'java-oop-9',
              type: 'multiple-choice',
              question: 'What does "Polymorphism" mean in the context of Java?',
              question_ko: '자바에서 "다형성(Polymorphism)"의 의미는?',
              options: [
                { id: '1', text: 'Having multiple variables with the same name', text_ko: '동일한 이름의 변수를 여러 개 갖는 것' },
                { id: '2', text: 'The ability of an object to take on many forms', text_ko: '객체가 여러 형태를 취할 수 있는 능력' },
                { id: '3', text: 'Converting one data type to another', text_ko: '하나의 데이터 타입을 다른 타입으로 변환하는 것' },
                { id: '4', text: 'Hiding the internal state of an object', text_ko: '객체의 내부 상태를 숨기는 것' }
              ],
              correctAnswerId: '2',
              explanation: 'Polymorphism allows objects of different classes to be treated as objects of a common superclass, or a single interface to represent different underlying forms.',
              explanation_ko: '다형성은 하나의 객체가 여러 가지 형태를 가질 수 있는 능력을 의미하며, 주로 상속과 인터페이스를 통해 구현됩니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html'
            },
            {
              id: 'java-oop-10',
              type: 'multiple-choice',
              question: 'Which keyword prevents a method from being overridden?',
              question_ko: '메서드가 오버라이딩되는 것을 방지하는 키워드는?',
              options: [
                { id: '1', text: 'static' },
                { id: '2', text: 'abstract' },
                { id: '3', text: 'final' },
                { id: '4', text: 'volatile' }
              ],
              correctAnswerId: '3',
              explanation: 'A final method cannot be overridden by subclasses.',
              explanation_ko: 'final로 선언된 메서드는 서브클래스에서 재정의할 수 없습니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/IandI/final.html'
            },
            {
              id: 'java-oop-11',
              type: 'multiple-choice',
              question: 'What is "Static Binding" (or early binding)?',
              question_ko: '"정적 바인딩(Static Binding)" 또는 초기 바인딩이란 무엇입니까?',
              options: [
                { id: '1', text: 'Binding resolved at runtime', text_ko: '런타임에 결정되는 바인딩' },
                { id: '2', text: 'Binding resolved at compile time', text_ko: '컴파일 타임에 결정되는 바인딩' },
                { id: '3', text: 'Binding used for instance methods', text_ko: '인스턴스 메서드에 사용되는 바인딩' },
                { id: '4', text: 'Binding for abstract methods', text_ko: '추상 메서드에 대한 바인딩' }
              ],
              correctAnswerId: '2',
              explanation: 'Static binding occurs at compile time for static, private, and final methods.',
              explanation_ko: '정적 바인딩은 컴파일 시점에 결정되며 static, private, final 메서드 등이 이에 해당합니다.',
              mdnUrl: 'https://www.geeksforgeeks.org/static-vs-dynamic-binding-in-java/'
            },
            {
              id: 'java-oop-12',
              type: 'multiple-choice',
              question: 'Which feature in Java 17 allows you to restrict which classes can extend or implement a class/interface?',
              question_ko: '자바 17에서 어떤 클래스가 상속 또는 구현할 수 있는지 제한하는 기능은?',
              options: [
                { id: '1', text: 'Locked Classes', text_ko: '잠긴 클래스' },
                { id: '2', text: 'Restricted Interfaces', text_ko: '제한된 인터페이스' },
                { id: '3', text: 'Sealed Classes', text_ko: 'Sealed 클래스' },
                { id: '4', text: 'Private Classes', text_ko: '프라이빗 클래스' }
              ],
              correctAnswerId: '3',
              explanation: 'Sealed classes and interfaces restrict which other classes or interfaces may extend or implement them.',
              explanation_ko: 'Sealed 클래스와 인터페이스는 상속 또는 구현 가능한 하위 클래스/인터페이스를 명시적으로 제한합니다.',
              mdnUrl: 'https://docs.oracle.com/en/java/javase/17/language/sealed-classes-and-interfaces.html'
            },
            {
              id: 'java-oop-13',
              type: 'multiple-choice',
              question: 'Can a constructor be inherited in Java?',
              question_ko: '자바에서 생성자는 상속될 수 있습니까?',
              options: [
                { id: '1', text: 'Yes, if it is public', text_ko: '네, public인 경우 가능함' },
                { id: '2', text: 'Yes, all constructors are inherited', text_ko: '네, 모든 생성자는 상속됨' },
                { id: '3', text: 'No, constructors are not inherited', text_ko: '아니요, 생성자는 상속되지 않음' },
                { id: '4', text: 'Yes, if it is protected', text_ko: '네, protected인 경우 가능함' }
              ],
              correctAnswerId: '3',
              explanation: 'Constructors are not members and thus are not inherited, although a subclass constructor can call a superclass constructor.',
              explanation_ko: '생성자는 클래스의 멤버가 아니므로 상속되지 않습니다. 다만 서브클래스에서 부모의 생성자를 호출할 수는 있습니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html'
            },
            {
              id: 'java-oop-14',
              type: 'multiple-choice',
              question: 'What is the purpose of an "Inner Class"?',
              question_ko: '"내부 클래스(Inner Class)"의 주요 목적은?',
              options: [
                { id: '1', text: 'To increase the size of the JAR file', text_ko: 'JAR 파일의 크기를 키우기 위해' },
                { id: '2', text: 'To provide better encapsulation and grouping of classes used in one place', text_ko: '한 곳에서 사용되는 클래스들의 캡슐화와 그룹화를 개선하기 위해' },
                { id: '3', text: 'To allow multiple inheritance of classes', text_ko: '클래스의 다중 상속을 허용하기 위해' },
                { id: '4', text: 'To bypass access modifiers', text_ko: '접근 제어자를 우회하기 위해' }
              ],
              correctAnswerId: '2',
              explanation: 'Inner classes logically group classes that are only used in one place and increase encapsulation.',
              explanation_ko: '내부 클래스는 한 곳에서만 사용되는 클래스들을 논리적으로 그룹화하고 캡슐화를 강화하기 위해 사용됩니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/javaOO/innerclasses.html'
            },
            {
              id: 'java-oop-15',
              type: 'multiple-choice',
              question: 'Which SOLID principle states that objects of a superclass should be replaceable with objects of its subclasses without affecting correctness?',
              question_ko: '부모 클래스의 객체를 자식 클래스의 객체로 교체해도 프로그램의 정확성이 변하지 않아야 한다는 SOLID 원칙은?',
              options: [
                { id: '1', text: 'Single Responsibility', text_ko: '단일 책임 원칙' },
                { id: '2', text: 'Open/Closed Principle', text_ko: '개방-폐쇄 원칙' },
                { id: '3', text: 'Liskov Substitution Principle', text_ko: '리스코프 치환 원칙' },
                { id: '4', text: 'Interface Segregation', text_ko: '인터페이스 분리 원칙' }
              ],
              correctAnswerId: '3',
              explanation: 'The Liskov Substitution Principle (LSP) ensures that a subclass can stand in for its parent class.',
              explanation_ko: '리스코프 치환 원칙(LSP)은 서브클래스가 부모 클래스의 역할을 완전히 대체할 수 있어야 함을 의미합니다.',
              mdnUrl: 'https://en.wikipedia.org/wiki/Liskov_substitution_principle'
            }
          ]
        }
      ]
    },
    {
      id: 'java-collections',
      title: 'Java Collections Framework',
      title_ko: '자바 컬렉션 프레임워크',
      units: [
        {
          id: 'java-collections-core',
          title: 'Collections & Maps',
          title_ko: '컬렉션 및 맵',
          description: 'Lists, Sets, and Maps implementations and behavior.',
          description_ko: 'List, Set, Map 구현체와 동작 방식',
          questions: [
            {
              id: 'java-col-1',
              type: 'multiple-choice',
              question: 'Which of the following does NOT implement the Collection interface?',
              question_ko: '다음 중 Collection 인터페이스를 구현하지 않는 것은?',
              options: [
                { id: '1', text: 'List' },
                { id: '2', text: 'Set' },
                { id: '3', text: 'Map' },
                { id: '4', text: 'Queue' }
              ],
              correctAnswerId: '3',
              explanation: 'Map is a separate hierarchy and does not extend the Collection interface.',
              explanation_ko: 'Map은 별도의 계층 구조를 가지며 Collection 인터페이스를 상속하지 않습니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/collections/interfaces/index.html'
            },
            {
              id: 'java-col-2',
              type: 'multiple-choice',
              question: 'What is the default initial capacity of an ArrayList?',
              question_ko: 'ArrayList의 기본 초기 용량은 얼마입니까?',
              options: [
                { id: '1', text: '0' },
                { id: '2', text: '10' },
                { id: '3', text: '16' },
                { id: '4', text: '100' }
              ],
              correctAnswerId: '2',
              explanation: 'By default, an ArrayList is initialized with a capacity of 10 in most JDK implementations.',
              explanation_ko: '대부분의 JDK 구현에서 ArrayList의 기본 초기 용량은 10입니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html'
            },
            {
              id: 'java-col-3',
              type: 'multiple-choice',
              question: 'Which Map implementation allows null keys and null values?',
              question_ko: 'null 키와 null 값을 모두 허용하는 Map 구현체는?',
              options: [
                { id: '1', text: 'Hashtable' },
                { id: '2', text: 'TreeMap' },
                { id: '3', text: 'HashMap' },
                { id: '4', text: 'ConcurrentHashMap' }
              ],
              correctAnswerId: '3',
              explanation: 'HashMap allows one null key and multiple null values, unlike Hashtable or ConcurrentHashMap.',
              explanation_ko: 'HashMap은 하나의 null 키와 여러 null 값을 허용하지만, Hashtable이나 ConcurrentHashMap은 허용하지 않습니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html'
            },
            {
              id: 'java-col-4',
              type: 'multiple-choice',
              question: 'What happens in a HashMap when a collision occurs (two different keys have the same hash)?',
              question_ko: 'HashMap에서 해시 충돌(서로 다른 키가 같은 해시를 가짐)이 발생하면 어떤 일이 일어납니까?',
              options: [
                { id: '1', text: 'The old value is overwritten', text_ko: '기존 값이 덮어씌워짐' },
                { id: '2', text: 'An exception is thrown', text_ko: '예외가 발생함' },
                { id: '3', text: 'The entry is stored in a linked list or tree at that bucket', text_ko: '해당 버킷의 연결 리스트 또는 트리에 항목이 저장됨' },
                { id: '4', text: 'The second key is ignored', text_ko: '두 번째 키가 무시됨' }
              ],
              correctAnswerId: '3',
              explanation: 'Collisions are handled using separate chaining with linked lists, which may be converted to balanced trees in Java 8+ if the bucket grows too large.',
              explanation_ko: '해시 충돌은 연결 리스트를 사용한 체이닝 방식으로 처리되며, 자바 8부터는 버킷이 커지면 균형 이진 트리로 변환됩니다.',
              mdnUrl: 'https://en.wikipedia.org/wiki/Hash_table#Separate_chaining'
            },
            {
              id: 'java-col-5',
              type: 'multiple-choice',
              question: 'Which Set implementation maintains the insertion order of elements?',
              question_ko: '요소의 삽입 순서를 유지하는 Set 구현체는?',
              options: [
                { id: '1', text: 'HashSet' },
                { id: '2', text: 'TreeSet' },
                { id: '3', text: 'LinkedHashSet' },
                { id: '4', text: 'EnumSet' }
              ],
              correctAnswerId: '3',
              explanation: 'LinkedHashSet uses a doubly-linked list to maintain the insertion order of elements.',
              explanation_ko: 'LinkedHashSet은 이중 연결 리스트를 사용하여 요소가 삽입된 순서를 유지합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/LinkedHashSet.html'
            },
            {
              id: 'java-col-6',
              type: 'multiple-choice',
              question: 'Which iterator throws ConcurrentModificationException if the collection is modified while iterating?',
              question_ko: '반복 중 컬렉션이 수정될 때 ConcurrentModificationException을 발생시키는 반복자는?',
              options: [
                { id: '1', text: 'Fail-safe', text_ko: 'Fail-safe (장애 안심)' },
                { id: '2', text: 'Fail-fast', text_ko: 'Fail-fast (장애 우선)' },
                { id: '3', text: 'Snapshot', text_ko: '스냅샷' },
                { id: '4', text: 'Weakly consistent', text_ko: '약한 일관성' }
              ],
              correctAnswerId: '2',
              explanation: 'Fail-fast iterators (like those for ArrayList) throw ConcurrentModificationException on modification.',
              explanation_ko: 'Fail-fast 반복자(ArrayList 등)는 반복 중 구조적 변경이 발생하면 예외를 발생시킵니다.',
              mdnUrl: 'https://www.geeksforgeeks.org/fail-fast-fail-safe-iterators-java/'
            },
            {
              id: 'java-col-7',
              type: 'multiple-choice',
              question: 'Which class provides synchronized, thread-safe alternatives for common collections like List or Map?',
              question_ko: 'List나 Map 같은 일반 컬렉션에 대해 동기화된 스레드 안전 대안을 제공하는 클래스는?',
              options: [
                { id: '1', text: 'Arrays' },
                { id: '2', text: 'Collections' },
                { id: '3', text: 'System' },
                { id: '4', text: 'Objects' }
              ],
              correctAnswerId: '2',
              explanation: 'The Collections class provides methods like synchronizedList() and synchronizedMap().',
              explanation_ko: 'Collections 클래스는 synchronizedList(), synchronizedMap() 등의 정적 메서드를 제공합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html'
            },
            {
              id: 'java-col-8',
              type: 'multiple-choice',
              question: 'Which collection should be used for LIFO (Last-In-First-Out) operations?',
              question_ko: 'LIFO(후입선출) 작업을 위해 사용해야 하는 컬렉션은?',
              options: [
                { id: '1', text: 'ArrayList' },
                { id: '2', text: 'PriorityQueue' },
                { id: '3', text: 'Deque' },
                { id: '4', text: 'HashSet' }
              ],
              correctAnswerId: '3',
              explanation: 'A Deque (Double Ended Queue) can be used as a stack (LIFO). ArrayDeque is a common implementation.',
              explanation_ko: 'Deque(양방향 큐)는 스택(LIFO)으로 사용될 수 있으며, ArrayDeque가 대표적입니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/Deque.html'
            },
            {
              id: 'java-col-9',
              type: 'multiple-choice',
              question: 'How does ConcurrentHashMap achieve thread safety without locking the entire map?',
              question_ko: 'ConcurrentHashMap은 맵 전체를 잠그지 않고 어떻게 스레드 안전을 달성합니까?',
              options: [
                { id: '1', text: 'By using the synchronized keyword on every method', text_ko: '모든 메서드에 synchronized 키워드를 사용함' },
                { id: '2', text: 'By using segmentation (buckets/nodes) locking', text_ko: '세분화된(버킷/노드 단위) 잠금을 사용함' },
                { id: '3', text: 'By making the map immutable', text_ko: '맵을 불변으로 만듦' },
                { id: '4', text: 'By running on a single thread', text_ko: '단일 스레드에서 실행함' }
              ],
              correctAnswerId: '2',
              explanation: 'ConcurrentHashMap uses fine-grained locking at the bucket (node) level (and CAS in modern versions) to allow concurrent access.',
              explanation_ko: 'ConcurrentHashMap은 버킷(노드) 단위의 세밀한 잠금(및 CAS)을 사용하여 여러 스레드의 동시 접근을 허용합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentHashMap.html'
            },
            {
              id: 'java-col-10',
              type: 'multiple-choice',
              question: 'Which interface should a class implement to define its natural ordering?',
              question_ko: '클래스의 자연스러운 정렬 순서를 정의하기 위해 구현해야 하는 인터페이스는?',
              options: [
                { id: '1', text: 'Comparator' },
                { id: '2', text: 'Sortable', text_ko: '정렬 가능 (Sortable)' },
                { id: '3', text: 'Comparable' },
                { id: '4', text: 'Ordered', text_ko: '순서 지정 (Ordered)' }
              ],
              correctAnswerId: '3',
              explanation: 'The Comparable interface is used to define the natural ordering of objects via the compareTo method.',
              explanation_ko: 'Comparable 인터페이스는 compareTo 메서드를 통해 객체의 자연 정렬 순서를 정의합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/lang/Comparable.html'
            },
            {
              id: 'java-col-11',
              type: 'multiple-choice',
              question: 'What is the time complexity of getting an element by index in an ArrayList?',
              question_ko: 'ArrayList에서 인덱스로 요소를 조회할 때의 시간 복잡도는?',
              options: [
                { id: '1', text: 'O(1)' },
                { id: '2', text: 'O(n)' },
                { id: '3', text: 'O(log n)' },
                { id: '4', text: 'O(n^2)' }
              ],
              correctAnswerId: '1',
              explanation: 'ArrayList provides constant time O(1) access to elements by index because it is backed by an array.',
              explanation_ko: 'ArrayList는 내부적으로 배열을 사용하므로 인덱스를 통한 조회 시 O(1)의 시간 복잡도를 가집니다.',
              mdnUrl: 'https://en.wikipedia.org/wiki/Dynamic_array'
            },
            {
              id: 'java-col-12',
              type: 'multiple-choice',
              question: 'Which collection implementation uses a Red-Black tree?',
              question_ko: '레드-블랙 트리를 사용하는 컬렉션 구현체는?',
              options: [
                { id: '1', text: 'HashMap' },
                { id: '2', text: 'TreeSet' },
                { id: '3', text: 'LinkedList' },
                { id: '4', text: 'PriorityQueue' }
              ],
              correctAnswerId: '2',
              explanation: 'TreeSet (and TreeMap) are based on a Red-Black tree implementation to keep elements sorted.',
              explanation_ko: 'TreeSet(과 TreeMap)은 요소를 정렬된 상태로 유지하기 위해 레드-블랙 트리 구조를 사용합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/TreeSet.html'
            },
            {
              id: 'java-col-13',
              type: 'multiple-choice',
              question: 'Which of the following creates an unmodifiable list in Java 11+?',
              question_ko: '자바 11 이상에서 수정 불가능한 리스트를 생성하는 방법은?',
              options: [
                { id: '1', text: 'new ArrayList<>()' },
                { id: '2', text: 'List.of()' },
                { id: '3', text: 'Arrays.asList()' },
                { id: '4', text: 'Collections.emptyList()' }
              ],
              correctAnswerId: '2',
              explanation: 'List.of() creates an unmodifiable list containing zero or more elements.',
              explanation_ko: 'List.of()는 요소를 수정할 수 없는 불변 리스트를 생성합니다.',
              mdnUrl: 'https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html#of()'
            },
            {
              id: 'java-col-14',
              type: 'multiple-choice',
              question: 'What is the main difference between Vector and ArrayList?',
              question_ko: 'Vector와 ArrayList의 주요 차이점은?',
              options: [
                { id: '1', text: 'Vector is thread-safe, ArrayList is not', text_ko: 'Vector는 스레드 안전하며, ArrayList는 그렇지 않음' },
                { id: '2', text: 'ArrayList is legacy, Vector is modern', text_ko: 'ArrayList는 레거시이며, Vector는 최신임' },
                { id: '3', text: 'Vector is faster than ArrayList', text_ko: 'Vector가 ArrayList보다 빠름' },
                { id: '4', text: 'There is no difference', text_ko: '차이가 없음' }
              ],
              correctAnswerId: '1',
              explanation: 'Vector is synchronized and thread-safe, whereas ArrayList is not synchronized.',
              explanation_ko: 'Vector는 모든 메서드가 동기화되어 스레드 안전하지만, ArrayList는 그렇지 않습니다.',
              mdnUrl: 'https://www.geeksforgeeks.org/vector-vs-arraylist-java/'
            },
            {
              id: 'java-col-15',
              type: 'multiple-choice',
              question: 'Which Map implementation uses == instead of equals() for key comparison?',
              question_ko: '키 비교 시 equals() 대신 == 연산자를 사용하는 Map 구현체는?',
              options: [
                { id: '1', text: 'EnumMap' },
                { id: '2', text: 'IdentityHashMap' },
                { id: '3', text: 'WeakHashMap' },
                { id: '4', text: 'LinkedHashMap' }
              ],
              correctAnswerId: '2',
              explanation: 'IdentityHashMap uses reference-equality (==) in place of object-equality (equals()) when comparing keys.',
              explanation_ko: 'IdentityHashMap은 키를 비교할 때 객체의 동등성(equals)이 아닌 참조 동일성(==)을 사용합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/IdentityHashMap.html'
            }
          ]
        }
      ]
    },
    {
      id: 'java-generics',
      title: 'Generics',
      title_ko: '제네릭',
      units: [
        {
          id: 'java-generics-concepts',
          title: 'Generics Concepts',
          title_ko: '제네릭 개념',
          description: 'Type erasure, wildcards, and PECS.',
          description_ko: '타입 이레이저, 와일드카드, PECS',
          questions: [
            {
              id: 'java-gen-1',
              type: 'multiple-choice',
              question: 'What is "Type Erasure" in Java Generics?',
              question_ko: '자바 제네릭에서 "타입 이레이저(Type Erasure)"란 무엇입니까?',
              options: [
                { id: '1', text: 'The removal of generic type information at compile time', text_ko: '컴파일 타임에 제네릭 타입 정보가 제거되는 것' },
                { id: '2', text: 'The automatic conversion of types at runtime', text_ko: '런타임에 타입이 자동 변환되는 것' },
                { id: '3', text: 'A way to delete generic classes', text_ko: '제네릭 클래스를 삭제하는 방법' },
                { id: '4', text: 'The ability to use any type in a collection', text_ko: '컬렉션에서 모든 타입을 사용할 수 있는 능력' }
              ],
              correctAnswerId: '1',
              explanation: 'Type erasure is the process by which the compiler replaces generic types with their bounds or Object to ensure backward compatibility.',
              explanation_ko: '타입 이레이저는 컴파일 시점에 제네릭 타입을 제거하고 실제 타입이나 Object로 교체하여 하위 호환성을 유지하는 과정입니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/generics/erasure.html'
            },
            {
              id: 'java-gen-2',
              type: 'multiple-choice',
              question: 'What does the wildcard "? extends T" represent?',
              question_ko: '와일드카드 "? extends T"는 무엇을 의미합니까?',
              options: [
                { id: '1', text: 'A type that is T or a superclass of T', text_ko: 'T 또는 T의 부모 클래스인 타입' },
                { id: '2', text: 'A type that is T or a subclass of T', text_ko: 'T 또는 T의 자식 클래스인 타입' },
                { id: '3', text: 'Only the type T itself', text_ko: '오직 T 타입 자체' },
                { id: '4', text: 'Any type except T', text_ko: 'T를 제외한 모든 타입' }
              ],
              correctAnswerId: '2',
              explanation: '"? extends T" defines an upper bound, meaning any type that is T or inherits from T.',
              explanation_ko: '"? extends T"는 상한 경계를 의미하며, T 또는 T를 상속받은 모든 타입을 나타냅니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/generics/upperBounded.html'
            },
            {
              id: 'java-gen-3',
              type: 'multiple-choice',
              question: 'What does "PECS" stand for in the context of Java Generics?',
              question_ko: '자바 제네릭에서 "PECS"는 무엇의 약자입니까?',
              options: [
                { id: '1', text: 'Producer Extends, Consumer Super' },
                { id: '2', text: 'Parent Extends, Child Super' },
                { id: '3', text: 'Private Extends, Constant Super' },
                { id: '4', text: 'Provider Extends, Caller Super' }
              ],
              correctAnswerId: '1',
              explanation: 'PECS stands for Producer Extends, Consumer Super, a guideline for using wildcards in collections.',
              explanation_ko: 'PECS는 "Producer Extends, Consumer Super"의 약자로, 컬렉션에서 와일드카드를 사용하는 가이드라인입니다.',
              mdnUrl: 'https://stackoverflow.com/questions/2723397/what-is-pecs-producer-extends-consumer-super'
            },
            {
              id: 'java-gen-4',
              type: 'multiple-choice',
              question: 'Can you create an array of a generic type like new T[10]?',
              question_ko: 'new T[10]과 같이 제네릭 타입의 배열을 생성할 수 있습니까?',
              options: [
                { id: '1', text: 'Yes, if T is known', text_ko: '네, T를 아는 경우 가능함' },
                { id: '2', text: 'No, because of type erasure', text_ko: '아니요, 타입 이레이저 때문에 불가능함' },
                { id: '3', text: 'Yes, always', text_ko: '네, 항상 가능함' },
                { id: '4', text: 'Only for primitive types', text_ko: '원시 타입인 경우에만 가능함' }
              ],
              correctAnswerId: '2',
              explanation: 'You cannot create an array of a non-reifiable type (like a type parameter T) because the type information is not available at runtime.',
              explanation_ko: '타입 이레이저로 인해 실행 시점에 타입 정보가 없어 제네릭 타입 파라미터로 배열을 생성할 수 없습니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/generics/restrictions.html#createArrays'
            },
            {
              id: 'java-gen-5',
              type: 'multiple-choice',
              question: 'Which of the following is a "Raw Type"?',
              question_ko: '다음 중 "Raw Type"은 무엇입니까?',
              options: [
                { id: '1', text: 'List<String>' },
                { id: '2', text: 'List<?>' },
                { id: '3', text: 'List' },
                { id: '4', text: 'ArrayList<Integer>' }
              ],
              correctAnswerId: '3',
              explanation: 'A raw type is the name of a generic class or interface without any type arguments (e.g., just List).',
              explanation_ko: 'Raw Type은 List<T>와 같은 제네릭 타입에서 타입 인자를 생략하고 이름만 사용하는 경우를 말합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/generics/rawTypes.html'
            },
            {
              id: 'java-gen-6',
              type: 'multiple-choice',
              question: 'What is a "Bridge Method" in Java Generics?',
              question_ko: '자바 제네릭에서 "브릿지 메서드(Bridge Method)"란 무엇입니까?',
              options: [
                { id: '1', text: 'A method that connects two classes', text_ko: '두 클래스를 연결하는 메서드' },
                { id: '2', text: 'A method generated by the compiler to maintain polymorphism with type erasure', text_ko: '타입 이레이저 환경에서 다형성을 유지하기 위해 컴파일러가 생성한 메서드' },
                { id: '3', text: 'A static method in an interface', text_ko: '인터페이스의 정적 메서드' },
                { id: '4', text: 'A native method', text_ko: '네이티브 메서드' }
              ],
              correctAnswerId: '2',
              explanation: 'Bridge methods are synthetic methods generated by the compiler to preserve polymorphism when a class implements a generic interface or extends a generic class.',
              explanation_ko: '브릿지 메서드는 타입 이레이저 환경에서 다형성을 유지하기 위해 컴파일러가 자동으로 생성하는 메서드입니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/generics/bridgeMethods.html'
            },
            {
              id: 'java-gen-7',
              type: 'multiple-choice',
              question: 'Can you use primitive types as generic type arguments?',
              question_ko: '원시 타입을 제네릭 타입 인자로 사용할 수 있습니까?',
              options: [
                { id: '1', text: 'Yes, since Java 8', text_ko: '네, 자바 8부터 가능함' },
                { id: '2', text: 'No, you must use wrapper classes', text_ko: '아니요, 래퍼 클래스를 사용해야 함' },
                { id: '3', text: 'Only for int and double', text_ko: 'int와 double만 가능함' },
                { id: '4', text: 'Yes, always', text_ko: '네, 항상 가능함' }
              ],
              correctAnswerId: '2',
              explanation: 'Generics work only with reference types. For primitives, you must use their corresponding wrapper classes (e.g., Integer instead of int).',
              explanation_ko: '제네릭은 참조 타입만 허용하므로, 원시 타입 대신 래퍼 클래스를 사용해야 합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/generics/restrictions.html#primitive'
            },
            {
              id: 'java-gen-8',
              type: 'multiple-choice',
              question: 'What is an "Intersection Type" in Java Generics?',
              question_ko: '자바 제네릭에서 "교차 타입(Intersection Type)"이란 무엇입니까?',
              options: [
                { id: '1', text: 'A type that implements multiple interfaces using &', text_ko: '&를 사용하여 여러 인터페이스를 구현하는 타입' },
                { id: '2', text: 'The intersection of two sets', text_ko: '두 집합의 교집합' },
                { id: '3', text: 'A type that inherits from two classes', text_ko: '두 클래스로부터 상속받는 타입' },
                { id: '4', text: 'A type that is both a class and an interface', text_ko: '클래스이자 인터페이스인 타입' }
              ],
              correctAnswerId: '1',
              explanation: 'Intersection types use the & operator to specify that a type must implement multiple bounds (e.g., T extends A & B).',
              explanation_ko: '교차 타입은 & 연산자를 사용하여 여러 경계를 동시에 만족해야 하는 타입을 정의할 때 사용됩니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/generics/bounded.html#multiple-bounds'
            },
            {
              id: 'java-gen-9',
              type: 'multiple-choice',
              question: 'Why can you NOT catch an instance of a generic type (e.g., catch (T e))?',
              question_ko: '왜 제네릭 타입의 인스턴스를 catch할 수 없습니까(예: catch (T e))?',
              options: [
                { id: '1', text: 'Exceptions cannot be generic', text_ko: '예외는 제네릭이 될 수 없음' },
                { id: '2', text: 'Because of type erasure, the specific type information is lost at runtime', text_ko: '타입 이레이저 때문에 런타임에 특정 타입 정보가 손실됨' },
                { id: '3', text: 'Exception classes are final', text_ko: '예외 클래스는 final임' },
                { id: '4', text: 'Generic types don\'t inherit from Throwable', text_ko: '제네릭 타입은 Throwable을 상속받지 않음' }
              ],
              correctAnswerId: '2',
              explanation: 'You cannot catch an instance of a type parameter because the JVM needs to know the exact type of exception at runtime, which is erased in generics.',
              explanation_ko: '실행 시점에 타입 정보가 지워지기 때문에 JVM은 어떤 타입의 예외인지 알 수 없어 제네릭 타입을 catch 블록에서 사용할 수 없습니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/generics/restrictions.html#exceptions'
            },
            {
              id: 'java-gen-10',
              type: 'multiple-choice',
              question: 'Which of the following is the lower bounded wildcard?',
              question_ko: '다음 중 하한 경계 와일드카드는?',
              options: [
                { id: '1', text: '? extends T' },
                { id: '2', text: 'T' },
                { id: '3', text: '? super T' },
                { id: '4', text: '?' }
              ],
              correctAnswerId: '3',
              explanation: '"? super T" defines a lower bound, restricting the type to be T or a superclass of T.',
              explanation_ko: '"? super T"는 하한 경계를 의미하며, T 또는 T의 부모 타입들을 나타냅니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/generics/lowerBounded.html'
            }
          ]
        }
      ]
    },
    {
      id: 'java-jvm-memory',
      title: 'JVM & Memory Management',
      title_ko: 'JVM 및 메모리 관리',
      units: [
        {
          id: 'java-jvm-arch',
          title: 'JVM Architecture',
          title_ko: 'JVM 아키텍처',
          description: 'Heap, Stack, Metaspace, and Garbage Collection.',
          description_ko: 'Heap, Stack, Metaspace 및 가비지 컬렉션',
          questions: [
            {
              id: 'java-jvm-1',
              type: 'multiple-choice',
              question: 'Which memory area stores local variables and method call frames?',
              question_ko: '지역 변수와 메서드 호출 프레임이 저장되는 메모리 영역은?',
              options: [
                { id: '1', text: 'Heap' },
                { id: '2', text: 'Stack' },
                { id: '3', text: 'Metaspace' },
                { id: '4', text: 'Native Method Stack' }
              ],
              correctAnswerId: '2',
              explanation: 'The Stack memory is used for method execution and storing local variables.',
              explanation_ko: 'Stack 영역은 메서드 실행 시 호출 프레임과 지역 변수를 저장하는 데 사용됩니다.',
              mdnUrl: 'https://www.baeldung.com/java-stack-heap'
            },
            {
              id: 'java-jvm-2',
              type: 'multiple-choice',
              question: 'Where are objects (instances of classes) stored in memory?',
              question_ko: '클래스의 인스턴스인 객체들은 메모리의 어디에 저장됩니까?',
              options: [
                { id: '1', text: 'Stack' },
                { id: '2', text: 'PC Register' },
                { id: '3', text: 'Heap' },
                { id: '4', text: 'Metaspace' }
              ],
              correctAnswerId: '3',
              explanation: 'All object instances and their associated arrays are allocated on the Heap.',
              explanation_ko: '모든 객체 인스턴스와 배열은 Heap 영역에 할당됩니다.',
              mdnUrl: 'https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html#jvms-2.5.3'
            },
            {
              id: 'java-jvm-3',
              type: 'multiple-choice',
              question: 'In Java 8+, what replaced the "Permanent Generation" (PermGen)?',
              question_ko: '자바 8 이상에서 "Permanent Generation"(PermGen)을 대체한 것은?',
              options: [
                { id: '1', text: 'Code Cache' },
                { id: '2', text: 'Native Memory' },
                { id: '3', text: 'Metaspace' },
                { id: '4', text: 'Young Generation' }
              ],
              correctAnswerId: '3',
              explanation: 'Metaspace replaced PermGen in Java 8 and uses native memory instead of the JVM heap.',
              explanation_ko: '자바 8부터 PermGen이 제거되고 대신 네이티브 메모리를 사용하는 Metaspace가 도입되었습니다.',
              mdnUrl: 'https://www.baeldung.com/java-permgen-metaspace'
            },
            {
              id: 'java-jvm-4',
              type: 'multiple-choice',
              question: 'Which garbage collector is the default in Java 17 for most server configurations?',
              question_ko: '대부분의 서버 설정에서 자바 17의 기본 가비지 컬렉터는 무엇입니까?',
              options: [
                { id: '1', text: 'Serial GC' },
                { id: '2', text: 'Parallel GC' },
                { id: '3', text: 'G1 GC' },
                { id: '4', text: 'ZGC' }
              ],
              correctAnswerId: '3',
              explanation: 'G1 (Garbage First) GC is the default garbage collector since Java 9.',
              explanation_ko: 'G1(Garbage First) GC는 자바 9부터 기본 가비지 컬렉터로 설정되어 있습니다.',
              mdnUrl: 'https://docs.oracle.com/en/java/javase/17/gctuning/garbage-first-garbage-collector.html'
            },
            {
              id: 'java-jvm-5',
              type: 'multiple-choice',
              question: 'What is the "Mark and Sweep" algorithm related to?',
              question_ko: '"Mark and Sweep" 알고리즘은 무엇과 관련이 있습니까?',
              options: [
                { id: '1', text: 'Class loading', text_ko: '클래스 로딩' },
                { id: '2', text: 'Garbage collection', text_ko: '가비지 컬렉션' },
                { id: '3', text: 'JIT compilation', text_ko: 'JIT 컴파일' },
                { id: '4', text: 'Thread scheduling', text_ko: '스레드 스케줄링' }
              ],
              correctAnswerId: '2',
              explanation: 'Mark and Sweep is a fundamental garbage collection algorithm that marks reachable objects and sweeps the unreachable ones.',
              explanation_ko: 'Mark and Sweep은 사용 중인 객체를 식별(Mark)하고 사용하지 않는 객체를 제거(Sweep)하는 기본적인 GC 알고리즘입니다.',
              mdnUrl: 'https://en.wikipedia.org/wiki/Tracing_garbage_collection#Basic_algorithm'
            },
            {
              id: 'java-jvm-6',
              type: 'multiple-choice',
              question: 'What does "Stop-the-World" (STW) mean in GC?',
              question_ko: '가비지 컬렉션에서 "Stop-the-World"(STW)란 무엇을 의미합니까?',
              options: [
                { id: '1', text: 'The program finishes execution', text_ko: '프로그램 실행이 종료됨' },
                { id: '2', text: 'All application threads are paused while GC runs', text_ko: 'GC가 실행되는 동안 모든 애플리케이션 스레드가 일시 중지됨' },
                { id: '3', text: 'The computer enters sleep mode', text_ko: '컴퓨터가 절전 모드에 진입함' },
                { id: '4', text: 'Only the main thread is stopped', text_ko: '메인 스레드만 중지됨' }
              ],
              correctAnswerId: '2',
              explanation: 'STW events pause all application threads to allow the garbage collector to safely perform its tasks.',
              explanation_ko: 'STW는 가비지 컬렉터가 작업을 안전하게 수행할 수 있도록 모든 애플리케이션 스레드를 일시 중지시키는 현상입니다.',
              mdnUrl: 'https://www.baeldung.com/jvm-stop-the-world-events'
            },
            {
              id: 'java-jvm-7',
              type: 'multiple-choice',
              question: 'Which reference type allows an object to be collected if it is only reachable through this reference?',
              question_ko: '해당 참조를 통해서만 접근 가능한 경우 객체가 가비지 컬렉션의 대상이 되도록 허용하는 참조 타입은?',
              options: [
                { id: '1', text: 'Strong Reference', text_ko: '강한 참조 (Strong Reference)' },
                { id: '2', text: 'Weak Reference', text_ko: '약한 참조 (Weak Reference)' },
                { id: '3', text: 'Static Reference', text_ko: '정적 참조' },
                { id: '4', text: 'Final Reference', text_ko: '최종 참조' }
              ],
              correctAnswerId: '2',
              explanation: 'Weak references do not prevent an object from being garbage collected when no strong references exist.',
              explanation_ko: 'Weak Reference(약한 참조)는 강한 참조가 없을 경우 해당 객체를 GC가 수거하는 것을 막지 않습니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/lang/ref/WeakReference.html'
            },
            {
              id: 'java-jvm-8',
              type: 'multiple-choice',
              question: 'What are the two survivor spaces (S0 and S1) used for in the Young Generation?',
              question_ko: 'Young Generation에서 두 개의 Survivor 영역(S0, S1)은 무엇을 위해 사용됩니까?',
              options: [
                { id: '1', text: 'To store static variables', text_ko: '정적 변수를 저장하기 위해' },
                { id: '2', text: 'To copy surviving objects back and forth during Minor GC', text_ko: 'Minor GC 동안 살아남은 객체들을 주고받으며 복사하기 위해' },
                { id: '3', text: 'To store objects larger than 1MB', text_ko: '1MB보다 큰 객체들을 저장하기 위해' },
                { id: '4', text: 'To buffer database connections', text_ko: '데이터베이스 연결을 버퍼링하기 위해' }
              ],
              correctAnswerId: '2',
              explanation: 'Minor GC copies surviving objects from Eden to a survivor space, and between survivor spaces, until they are old enough to be promoted.',
              explanation_ko: 'Minor GC 시 Eden에서 살아남은 객체들은 Survivor 영역으로 이동하며, 일정 횟수 이상 살아남으면 Old 영역으로 승격됩니다.',
              mdnUrl: 'https://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html'
            },
            {
              id: 'java-jvm-9',
              type: 'multiple-choice',
              question: 'What is the purpose of the "JIT Compiler"?',
              question_ko: '"JIT 컴파일러"의 목적은 무엇입니까?',
              options: [
                { id: '1', text: 'To compile Java code to Bytecode', text_ko: '자바 코드를 바이트코드로 컴파일하기 위해' },
                { id: '2', text: 'To translate Bytecode to Native Machine Code at runtime', text_ko: '런타임에 바이트코드를 네이티브 기계어로 번역하기 위해' },
                { id: '3', text: 'To interpret Java source files', text_ko: '자바 소스 파일을 해석(interpret)하기 위해' },
                { id: '4', text: 'To scan for memory leaks', text_ko: '메모리 누수를 스캔하기 위해' }
              ],
              correctAnswerId: '2',
              explanation: 'The Just-In-Time (JIT) compiler improves performance by compiling frequently executed bytecode into native machine code.',
              explanation_ko: 'JIT 컴파일러는 자주 실행되는 바이트코드를 실행 시점에 네이티브 기계어로 컴파일하여 성능을 향상시킵니다.',
              mdnUrl: 'https://en.wikipedia.org/wiki/Just-in-time_compilation'
            },
            {
              id: 'java-jvm-10',
              type: 'multiple-choice',
              question: 'Which JVM flag is used to set the maximum heap size?',
              question_ko: '최대 힙 크기를 설정하기 위해 사용하는 JVM 플래그는?',
              options: [
                { id: '1', text: '-Xms' },
                { id: '2', text: '-Xmx' },
                { id: '3', text: '-Xss' },
                { id: '4', text: '-Xmn' }
              ],
              correctAnswerId: '2',
              explanation: '-Xmx sets the maximum memory allocation pool for the JVM.',
              explanation_ko: '-Xmx 플래그는 JVM이 사용할 수 있는 최대 메모리 풀(힙 크기)을 설정합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html'
            },
            {
              id: 'java-jvm-11',
              type: 'multiple-choice',
              question: 'Which of the following can cause an OutOfMemoryError: Metaspace?',
              question_ko: '다음 중 OutOfMemoryError: Metaspace를 유발할 수 있는 것은?',
              options: [
                { id: '1', text: 'Too many local variables', text_ko: '너무 많은 지역 변수' },
                { id: '2', text: 'Too many large arrays', text_ko: '너무 많은 대형 배열' },
                { id: '3', text: 'Loading too many classes dynamically', text_ko: '동적으로 너무 많은 클래스를 로드함' },
                { id: '4', text: 'Infinite recursion', text_ko: '무한 재귀' }
              ],
              correctAnswerId: '3',
              explanation: 'Metaspace stores class metadata. Loading many classes (e.g., via dynamic proxies) can exhaust this area.',
              explanation_ko: 'Metaspace는 클래스 메타데이터를 저장하므로, 동적으로 너무 많은 클래스를 로드하면 이 영역이 고갈될 수 있습니다.',
              mdnUrl: 'https://www.baeldung.com/java-permgen-metaspace'
            },
            {
              id: 'java-jvm-12',
              type: 'multiple-choice',
              question: 'What is a "Memory Leak" in Java?',
              question_ko: '자바에서 "메모리 누수(Memory Leak)"란 무엇입니까?',
              options: [
                { id: '1', text: 'When the JVM runs out of RAM', text_ko: 'JVM의 RAM이 부족할 때' },
                { id: '2', text: 'When objects are no longer needed but are still reachable from GC roots', text_ko: '객체가 더 이상 필요하지 않지만 GC Root로부터 여전히 도달 가능한 상태일 때' },
                { id: '3', text: 'When the stack overflows', text_ko: '스택 오버플로우가 발생할 때' },
                { id: '4', text: 'When a hard drive failure occurs', text_ko: '하드 드라이브 결함이 발생할 때' }
              ],
              correctAnswerId: '2',
              explanation: 'A memory leak occurs when objects are held in memory by references that are no longer needed, preventing the GC from collecting them.',
              explanation_ko: '메모리 누수는 더 이상 필요하지 않은 객체가 참조되어 가비지 컬렉터가 이를 수거하지 못해 메모리가 낭비되는 현상입니다.',
              mdnUrl: 'https://www.baeldung.com/java-memory-leaks'
            },
            {
              id: 'java-jvm-13',
              type: 'multiple-choice',
              question: 'Which tool included in the JDK is used for monitoring JVM performance and memory in real-time?',
              question_ko: 'JDK에 포함되어 실시간 JVM 성능 및 메모리를 모니터링하는 도구는?',
              options: [
                { id: '1', text: 'javac' },
                { id: '2', text: 'jdb' },
                { id: '3', text: 'VisualVM or JConsole' },
                { id: '4', text: 'javap' }
              ],
              correctAnswerId: '3',
              explanation: 'JConsole and VisualVM are standard monitoring tools provided with the JDK for analyzing JVM metrics.',
              explanation_ko: 'JConsole과 VisualVM은 JVM의 상태와 지표를 분석하기 위해 JDK에서 제공하는 표준 모니터링 도구입니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/technotes/guides/management/jconsole.html'
            },
            {
              id: 'java-jvm-14',
              type: 'multiple-choice',
              question: 'What is the "Parent Delegation Model" in class loading?',
              question_ko: '클래스 로딩에서 "부모 위임 모델(Parent Delegation Model)"이란?',
              options: [
                { id: '1', text: 'Classes are loaded by parents first', text_ko: '클래스는 부모에 의해 먼저 로드됨' },
                { id: '2', text: 'Child loaders ask their parent loader before loading a class themselves', text_ko: '자식 로더는 직접 로드하기 전에 부모 로더에게 먼저 요청함' },
                { id: '3', text: 'A class can only be loaded by one loader', text_ko: '클래스는 오직 하나의 로더에 의해서만 로드될 수 있음' },
                { id: '4', text: 'Parents can override child classes', text_ko: '부모가 자식 클래스를 재정의할 수 있음' }
              ],
              correctAnswerId: '2',
              explanation: 'The delegation model ensures that a class is loaded by the highest possible loader in the hierarchy to avoid conflicts.',
              explanation_ko: '위임 모델은 클래스 로더가 직접 로딩하기 전 부모 로더에게 먼저 확인을 요청하여 시스템 클래스의 중복 로딩을 방지하는 구조입니다.',
              mdnUrl: 'https://www.baeldung.com/java-classloaders'
            },
            {
              id: 'java-jvm-15',
              type: 'multiple-choice',
              question: 'Which GC is designed for extremely low pause times (less than 10ms) even for very large heaps?',
              question_ko: '매우 큰 힙에서도 극도로 낮은 중지 시간(10ms 미만)을 보장하도록 설계된 GC는?',
              options: [
                { id: '1', text: 'G1 GC' },
                { id: '2', text: 'CMS' },
                { id: '3', text: 'ZGC' },
                { id: '4', text: 'Parallel GC' }
              ],
              correctAnswerId: '3',
              explanation: 'ZGC (Z Garbage Collector) is a scalable, low-latency garbage collector introduced in recent Java versions.',
              explanation_ko: 'ZGC는 수 밀리초 이하의 낮은 지연 시간을 목표로 설계된 현대적인 가비지 컬렉터입니다.',
              mdnUrl: 'https://openjdk.org/projects/zgc/'
            }
          ]
        }
      ]
    },
    {
      id: 'java-exceptions',
      title: 'Exception Handling',
      title_ko: '예외 처리',
      units: [
        {
          id: 'java-exceptions-core',
          title: 'Error & Exception',
          title_ko: '에러와 예외',
          description: 'Checked vs Unchecked exceptions and handling patterns.',
          description_ko: 'Checked vs Unchecked 예외와 처리 패턴',
          questions: [
            {
              id: 'java-exc-1',
              type: 'multiple-choice',
              question: 'Which of the following is a "Checked Exception"?',
              question_ko: '다음 중 "Checked Exception"은 무엇입니까?',
              options: [
                { id: '1', text: 'NullPointerException' },
                { id: '2', text: 'IOException' },
                { id: '3', text: 'ArrayIndexOutOfBoundsException' },
                { id: '4', text: 'IllegalArgumentException' }
              ],
              correctAnswerId: '2',
              explanation: 'Checked exceptions like IOException must be handled or declared in the method signature.',
              explanation_ko: 'IOException과 같은 Checked Exception은 반드시 try-catch로 처리하거나 throws로 선언해야 합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/essential/exceptions/index.html'
            },
            {
              id: 'java-exc-2',
              type: 'multiple-choice',
              question: 'From which class do all exceptions and errors inherit?',
              question_ko: '모든 예외와 에러가 상속받는 최상위 클래스는?',
              options: [
                { id: '1', text: 'Exception' },
                { id: '2', text: 'Error' },
                { id: '3', text: 'Throwable' },
                { id: '4', text: 'Object' }
              ],
              correctAnswerId: '3',
              explanation: 'Throwable is the superclass of all errors and exceptions in Java.',
              explanation_ko: 'Throwable은 자바에서 발생하는 모든 에러와 예외의 최상위 클래스입니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/lang/Throwable.html'
            },
            {
              id: 'java-exc-3',
              type: 'multiple-choice',
              question: 'What is the "try-with-resources" statement used for?',
              question_ko: '"try-with-resources" 문장은 무엇을 위해 사용됩니까?',
              options: [
                { id: '1', text: 'To handle multiple exceptions in one catch block', text_ko: '하나의 catch 블록에서 여러 예외를 처리하기 위해' },
                { id: '2', text: 'To automatically close resources that implement AutoCloseable', text_ko: 'AutoCloseable을 구현한 리소스를 자동으로 닫기 위해' },
                { id: '3', text: 'To retry a failed operation', text_ko: '실패한 작업을 재시도하기 위해' },
                { id: '4', text: 'To catch errors', text_ko: '에러를 캐치하기 위해' }
              ],
              correctAnswerId: '2',
              explanation: 'Try-with-resources ensures that each resource is closed at the end of the statement.',
              explanation_ko: 'try-with-resources는 AutoCloseable을 구현한 리소스를 문장이 끝날 때 자동으로 닫아줍니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html'
            },
            {
              id: 'java-exc-4',
              type: 'multiple-choice',
              question: 'What happens if a method returns a value inside the finally block?',
              question_ko: 'finally 블록 내부에서 값을 반환(return)하면 어떻게 됩니까?',
              options: [
                { id: '1', text: 'The return value from the try block is ignored', text_ko: 'try 블록의 반환값이 무시됨' },
                { id: '2', text: 'It causes a compile-time error', text_ko: '컴파일 타임 에러를 발생시킴' },
                { id: '3', text: 'The return in finally is ignored', text_ko: 'finally의 반환값이 무시됨' },
                { id: '4', text: 'Both return values are combined', text_ko: '두 반환값이 결합됨' }
              ],
              correctAnswerId: '1',
              explanation: 'A return in finally will override any return value or exception from the try/catch blocks.',
              explanation_ko: 'finally 블록에서의 return은 try 또는 catch 블록에서의 반환값이나 발생한 예외를 덮어씁니다.',
              mdnUrl: 'https://docs.oracle.com/javase/specs/jls/se8/html/jls-14.html#jls-14.20.2'
            },
            {
              id: 'java-exc-5',
              type: 'multiple-choice',
              question: 'Which of the following is true about "Unchecked Exceptions"?',
              question_ko: '"Unchecked Exception"에 대해 옳은 설명은?',
              options: [
                { id: '1', text: 'They must be caught at compile time', text_ko: '컴파일 타임에 반드시 캐치해야 함' },
                { id: '2', text: 'They inherit from RuntimeException', text_ko: 'RuntimeException을 상속함' },
                { id: '3', text: 'They are for recoverable errors', text_ko: '복구 가능한 에러를 위한 것임' },
                { id: '4', text: 'They must be declared using the "throws" keyword', text_ko: '반드시 "throws" 키워드를 사용해 선언해야 함' }
              ],
              correctAnswerId: '2',
              explanation: 'Unchecked exceptions inherit from RuntimeException and do not require explicit handling.',
              explanation_ko: 'Unchecked Exception은 RuntimeException을 상속하며, 컴파일 시점에 처리를 강제하지 않습니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/essential/exceptions/runtime.html'
            },
            {
              id: 'java-exc-6',
              type: 'multiple-choice',
              question: 'What is the purpose of the "multi-catch" block introduced in Java 7?',
              question_ko: '자바 7에서 도입된 "multi-catch" 블록의 목적은?',
              options: [
                { id: '1', text: 'To catch the same exception multiple times', text_ko: '동일한 예외를 여러 번 캐치하기 위해' },
                { id: '2', text: 'To handle different exceptions in a single catch block', text_ko: '단일 catch 블록에서 서로 다른 예외들을 처리하기 위해' },
                { id: '3', text: 'To catch errors and exceptions together', text_ko: '에러와 예외를 함께 캐치하기 위해' },
                { id: '4', text: 'To rethrow exceptions', text_ko: '예외를 다시 던지기 위해' }
              ],
              correctAnswerId: '2',
              explanation: 'Multi-catch allows catching multiple unrelated exceptions in a single catch block using the | operator.',
              explanation_ko: 'multi-catch를 사용하면 여러 예외 타입을 하나의 catch 블록에서 | 연산자로 묶어서 처리할 수 있습니다.',
              mdnUrl: 'https://docs.oracle.com/javase/7/docs/technotes/guides/language/catch-multiple.html'
            },
            {
              id: 'java-exc-7',
              type: 'multiple-choice',
              question: 'Can you have a try block without a catch block?',
              question_ko: 'catch 블록 없이 try 블록만 가질 수 있습니까?',
              options: [
                { id: '1', text: 'No', text_ko: '아니요' },
                { id: '2', text: 'Yes, if there is a finally block', text_ko: '네, finally 블록이 있다면 가능함' },
                { id: '3', text: 'Yes, if the method throws the exception', text_ko: '네, 메서드가 예외를 던진다면 가능함' },
                { id: '4', text: 'Yes, always', text_ko: '네, 항상 가능함' }
              ],
              correctAnswerId: '2',
              explanation: 'A try block must be followed by either a catch block or a finally block (or both).',
              explanation_ko: 'try 블록은 하나 이상의 catch 블록 또는 최소 하나의 finally 블록이 동반되어야 합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/essential/exceptions/try.html'
            },
            {
              id: 'java-exc-8',
              type: 'multiple-choice',
              question: 'Which of the following describes an "Error" in Java?',
              question_ko: '자바에서 "Error"를 가장 잘 설명한 것은?',
              options: [
                { id: '1', text: 'An exception that can be caught and recovered from', text_ko: '캐치하여 복구할 수 있는 예외' },
                { id: '2', text: 'A serious problem that a reasonable application should not try to catch', text_ko: '일반적인 애플리케이션에서 캐치하려고 시도해서는 안 되는 심각한 문제' },
                { id: '3', text: 'A syntax error in the code', text_ko: '코드의 구문 에러' },
                { id: '4', text: 'A validation failure', text_ko: '검증 실패' }
              ],
              correctAnswerId: '2',
              explanation: 'Errors represent serious conditions (like OutOfMemoryError) that typically should not be caught by applications.',
              explanation_ko: 'Error는 하드웨어 결함이나 메모리 고갈 등 애플리케이션에서 복구하기 힘든 심각한 상황을 나타냅니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/lang/Error.html'
            },
            {
              id: 'java-exc-9',
              type: 'multiple-choice',
              question: 'What is "Exception Masking"?',
              question_ko: '"예외 마스킹(Exception Masking)"이란 무엇입니까?',
              options: [
                { id: '1', text: 'Hiding an exception with another one thrown from the finally block', text_ko: 'finally 블록에서 던져진 다른 예외로 기존 예외를 숨기는 것' },
                { id: '2', text: 'Wrapping an exception in a custom exception', text_ko: '사용자 정의 예외로 예외를 감싸는 것' },
                { id: '3', text: 'Printing only the message without the stack trace', text_ko: '스택 트레이스 없이 메시지만 출력하는 것' },
                { id: '4', text: 'Catching Throwable', text_ko: 'Throwable을 캐치하는 것' }
              ],
              correctAnswerId: '1',
              explanation: 'If the finally block throws an exception, it suppresses (masks) any exception thrown in the try block unless special handling is used.',
              explanation_ko: 'try 블록에서 예외가 발생한 상황에서 finally 블록에서도 예외가 던져지면, 앞선 예외가 묻히는 현상을 말합니다.',
              mdnUrl: 'https://www.baeldung.com/java-exception-masking'
            },
            {
              id: 'java-exc-10',
              type: 'multiple-choice',
              question: 'Which keyword is used to explicitly throw an exception instance?',
              question_ko: '예외 인스턴스를 명시적으로 발생시킬 때 사용하는 키워드는?',
              options: [
                { id: '1', text: 'throws' },
                { id: '2', text: 'throw' },
                { id: '3', text: 'catch' },
                { id: '4', text: 'finally' }
              ],
              correctAnswerId: '2',
              explanation: 'The "throw" keyword is used to throw an exception object.',
              explanation_ko: '"throw" 키워드는 생성된 예외 객체를 던질 때 사용합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/essential/exceptions/throwing.html'
            }
          ]
        }
      ]
    },
    {
      id: 'java-concurrency',
      title: 'Multithreading & Concurrency',
      title_ko: '멀티스레딩 및 동시성',
      units: [
        {
          id: 'java-concurrency-core',
          title: 'Threads & Synchronization',
          title_ko: '스레드와 동기화',
          description: 'Thread states, locking, and atomic variables.',
          description_ko: '스레드 상태, 락, 원자적 변수',
          questions: [
            {
              id: 'java-con-1',
              type: 'multiple-choice',
              question: 'Which method is used to start a new thread in Java?',
              question_ko: '자바에서 새로운 스레드를 시작하기 위해 호출하는 메서드는?',
              options: [
                { id: '1', text: 'run()' },
                { id: '2', text: 'start()' },
                { id: '3', text: 'execute()' },
                { id: '4', text: 'begin()' }
              ],
              correctAnswerId: '2',
              explanation: 'Calling start() allocates resources and creates a new thread that executes the run() method.',
              explanation_ko: 'start() 메서드를 호출해야만 실제 새로운 스레드가 생성되어 run() 메서드를 실행합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/lang/Thread.html#start--'
            },
            {
              id: 'java-con-2',
              type: 'multiple-choice',
              question: 'What is the "volatile" keyword used for?',
              question_ko: '"volatile" 키워드의 용도는 무엇입니까?',
              options: [
                { id: '1', text: 'To lock a block of code', text_ko: '코드 블록을 잠그기 위해' },
                { id: '2', text: 'To ensure visibility of variable changes across threads', text_ko: '스레드 간 변수 변경 사항의 가시성을 보장하기 위해' },
                { id: '3', text: 'To prevent garbage collection', text_ko: '가비지 컬렉션을 방지하기 위해' },
                { id: '4', text: 'To make a variable constant', text_ko: '변수를 상수로 만들기 위해' }
              ],
              correctAnswerId: '2',
              explanation: 'Volatile ensures that changes to a variable are always read from main memory, not from a thread\'s local cache.',
              explanation_ko: 'volatile은 변수값이 변경되었을 때 다른 스레드에서 즉시 그 변화를 볼 수 있도록(가시성) 보장합니다.',
              mdnUrl: 'https://www.baeldung.com/java-volatile'
            },
            {
              id: 'java-con-3',
              type: 'multiple-choice',
              question: 'Which of the following is NOT a thread state in Java?',
              question_ko: '다음 중 자바의 스레드 상태가 아닌 것은?',
              options: [
                { id: '1', text: 'NEW' },
                { id: '2', text: 'RUNNABLE' },
                { id: '3', text: 'WAITING' },
                { id: '4', text: 'PENDING' }
              ],
              correctAnswerId: '4',
              explanation: 'The standard thread states are NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, and TERMINATED.',
              explanation_ko: '자바의 스레드 상태는 NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED 총 6가지입니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/lang/Thread.State.html'
            },
            {
              id: 'java-con-4',
              type: 'multiple-choice',
              question: 'What is a "Deadlock"?',
              question_ko: '"데드락(Deadlock)"이란 무엇입니까?',
              options: [
                { id: '1', text: 'When a thread finishes execution', text_ko: '스레드 실행이 끝났을 때' },
                { id: '2', text: 'When two or more threads are waiting for each other to release locks forever', text_ko: '둘 이상의 스레드가 서로의 락이 해제되기를 영원히 기다릴 때' },
                { id: '3', text: 'When memory is full', text_ko: '메모리가 가득 찼을 때' },
                { id: '4', text: 'When the CPU usage is 100%', text_ko: 'CPU 사용률이 100%일 때' }
              ],
              correctAnswerId: '2',
              explanation: 'A deadlock occurs when two threads hold locks the other needs, causing both to wait indefinitely.',
              explanation_ko: '데드락은 두 개 이상의 스레드가 서로가 가진 락이 해제되기를 무한히 기다리는 상태를 말합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/essential/concurrency/deadlock.html'
            },
            {
              id: 'java-con-5',
              type: 'multiple-choice',
              question: 'Which class provides atomic operations for integers without using locks?',
              question_ko: '락을 사용하지 않고 정수에 대해 원자적 연산을 제공하는 클래스는?',
              options: [
                { id: '1', text: 'Integer' },
                { id: '2', text: 'VolatileInteger' },
                { id: '3', text: 'AtomicInteger' },
                { id: '4', text: 'SynchronizedInteger' }
              ],
              correctAnswerId: '3',
              explanation: 'AtomicInteger uses CAS (Compare-And-Swap) instructions for lock-free thread safety.',
              explanation_ko: 'AtomicInteger는 CAS(Compare-And-Swap) 방식을 사용하여 별도의 락 없이도 스레드 안전한 연산을 지원합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/atomic/AtomicInteger.html'
            },
            {
              id: 'java-con-6',
              type: 'multiple-choice',
              question: 'What is the purpose of "synchronized" block?',
              question_ko: '"synchronized" 블록의 목적은?',
              options: [
                { id: '1', text: 'To make the code run faster', text_ko: '코드를 더 빠르게 실행하기 위해' },
                { id: '2', text: 'To prevent multiple threads from entering a critical section simultaneously', text_ko: '여러 스레드가 동시에 임계 영역에 진입하는 것을 방지하기 위해' },
                { id: '3', text: 'To handle exceptions', text_ko: '예외를 처리하기 위해' },
                { id: '4', text: 'To schedule thread execution', text_ko: '스레드 실행을 스케줄링하기 위해' }
              ],
              correctAnswerId: '2',
              explanation: 'Synchronization ensures that only one thread can access a resource or block of code at a time.',
              explanation_ko: 'synchronized는 임계 영역에 한 번에 하나의 스레드만 접근할 수 있도록 상호 배제를 보장합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/essential/concurrency/syncmeth.html'
            },
            {
              id: 'java-con-7',
              type: 'multiple-choice',
              question: 'Which method should be used to make a thread wait for another thread to finish?',
              question_ko: '한 스레드가 다른 스레드가 끝날 때까지 기다리게 하려면 어떤 메서드를 호출해야 합니까?',
              options: [
                { id: '1', text: 'wait()' },
                { id: '2', text: 'join()' },
                { id: '3', text: 'sleep()' },
                { id: '4', text: 'yield()' }
              ],
              correctAnswerId: '2',
              explanation: 'The join() method allows one thread to wait for the completion of another.',
              explanation_ko: 'join() 메서드는 대상 스레드가 종료될 때까지 호출한 스레드를 기다리게 합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/essential/concurrency/join.html'
            },
            {
              id: 'java-con-8',
              type: 'multiple-choice',
              question: 'What is an "ExecutorService"?',
              question_ko: '"ExecutorService"란 무엇입니까?',
              options: [
                { id: '1', text: 'A tool for managing a pool of threads', text_ko: '스레드 풀을 관리하기 위한 도구' },
                { id: '2', text: 'A class to run database queries', text_ko: '데이터베이스 쿼리를 실행하기 위한 클래스' },
                { id: '3', text: 'A service that executes shell commands', text_ko: '쉘 명령을 실행하는 서비스' },
                { id: '4', text: 'A garbage collection optimizer', text_ko: '가비지 컬렉션 최적화 도구' }
              ],
              correctAnswerId: '1',
              explanation: 'ExecutorService manages task execution and thread recycling via thread pools.',
              explanation_ko: 'ExecutorService는 스레드 풀을 관리하며 비동기 작업의 실행과 스레드 재사용을 담당합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ExecutorService.html'
            },
            {
              id: 'java-con-9',
              type: 'multiple-choice',
              question: 'How do you notify a waiting thread to resume execution?',
              question_ko: '대기 중인 스레드에게 실행을 재개하도록 알리는 방법은?',
              options: [
                { id: '1', text: 'interrupt()' },
                { id: '2', text: 'resume()' },
                { id: '3', text: 'notify() or notifyAll()' },
                { id: '4', text: 'signal()' }
              ],
              correctAnswerId: '3',
              explanation: 'notify() wakes up a single thread waiting on the object\'s monitor.',
              explanation_ko: 'notify()나 notifyAll()은 객체의 모니터에 대해 대기 중인 스레드를 깨우는 데 사용됩니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--'
            },
            {
              id: 'java-con-10',
              type: 'multiple-choice',
              question: 'Which lock implementation provides more flexibility than the "synchronized" keyword, such as tryLock()?',
              question_ko: '"synchronized"보다 유연한 기능(예: tryLock)을 제공하는 락 구현체는?',
              options: [
                { id: '1', text: 'AtomicLock' },
                { id: '2', text: 'ReentrantLock' },
                { id: '3', text: 'VolatileLock' },
                { id: '4', text: 'StaticLock' }
              ],
              correctAnswerId: '2',
              explanation: 'ReentrantLock from java.util.concurrent.locks provides advanced features like timeout and fair locking.',
              explanation_ko: 'ReentrantLock은 대기 중단, 공정성 설정 등 synchronized보다 정교한 제어가 가능합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/locks/ReentrantLock.html'
            },
            {
              id: 'java-con-11',
              type: 'multiple-choice',
              question: 'What is a "ThreadLocal" variable?',
              question_ko: '"ThreadLocal" 변수란 무엇입니까?',
              options: [
                { id: '1', text: 'A variable shared by all threads', text_ko: '모든 스레드에 의해 공유되는 변수' },
                { id: '2', text: 'A variable that provides a separate copy for each thread', text_ko: '각 스레드에 대해 별도의 복사본을 제공하는 변수' },
                { id: '3', text: 'A constant variable', text_ko: '상수 변수' },
                { id: '4', text: 'A variable stored on the heap', text_ko: '힙에 저장되는 변수' }
              ],
              correctAnswerId: '2',
              explanation: 'ThreadLocal provides thread-local variables, where each thread has its own independently initialized copy of the variable.',
              explanation_ko: 'ThreadLocal은 각 스레드마다 독립적인 변수 복사본을 가질 수 있게 하여 스레드 간 데이터 공유를 방지합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/lang/ThreadLocal.html'
            },
            {
              id: 'java-con-12',
              type: 'multiple-choice',
              question: 'Which synchronization aid allows one or more threads to wait until a set of operations being performed in other threads completes?',
              question_ko: '다른 스레드들의 작업이 완료될 때까지 기다리게 하는 동기화 보조 도구는?',
              options: [
                { id: '1', text: 'Semaphore' },
                { id: '2', text: 'CountDownLatch' },
                { id: '3', text: 'CyclicBarrier' },
                { id: '4', text: 'Exchanger' }
              ],
              correctAnswerId: '2',
              explanation: 'CountDownLatch is initialized with a count and threads wait until others call countDown() the required number of times.',
              explanation_ko: 'CountDownLatch는 설정된 카운트가 0이 될 때까지 스레드를 대기시키며, 주로 작업의 완료를 기다릴 때 사용합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CountDownLatch.html'
            },
            {
              id: 'java-con-13',
              type: 'multiple-choice',
              question: 'What is a "Race Condition"?',
              question_ko: '"경쟁 상태(Race Condition)"란 무엇입니까?',
              options: [
                { id: '1', text: 'When the fastest thread wins', text_ko: '가장 빠른 스레드가 이길 때' },
                { id: '2', text: 'When the output depends on the timing/ordering of thread execution', text_ko: '출력이 스레드 실행 타이밍이나 순서에 의존할 때' },
                { id: '3', text: 'When threads run in parallel', text_ko: '스레드가 병렬로 실행될 때' },
                { id: '4', text: 'When a thread is interrupted', text_ko: '스레드가 중단(interrupted)되었을 때' }
              ],
              correctAnswerId: '2',
              explanation: 'A race condition occurs when multiple threads access and manipulate shared data concurrently and the result depends on the order of execution.',
              explanation_ko: '경쟁 상태는 여러 스레드가 공유 자원에 동시에 접근하여 그 실행 순서에 따라 결과가 달라지는 비정상적인 상태를 말합니다.',
              mdnUrl: 'https://en.wikipedia.org/wiki/Race_condition#Software'
            },
            {
              id: 'java-con-14',
              type: 'multiple-choice',
              question: 'Which feature introduced in Java 21 provides lightweight threads managed by the JVM?',
              question_ko: '자바 21에서 도입된 JVM이 관리하는 경량 스레드 기능은?',
              options: [
                { id: '1', text: 'Green Threads' },
                { id: '2', text: 'Virtual Threads' },
                { id: '3', text: 'Fibered Threads' },
                { id: '4', text: 'Coroutine Threads' }
              ],
              correctAnswerId: '2',
              explanation: 'Virtual threads (Project Loom) are lightweight threads that significantly reduce the effort of writing, maintaining, and observing high-throughput concurrent applications.',
              explanation_ko: '가상 스레드(Virtual Threads)는 적은 리소스로 수백만 개의 스레드를 생성할 수 있게 해주는 경량 스레드 모델입니다.',
              mdnUrl: 'https://openjdk.org/jeps/444'
            },
            {
              id: 'java-con-15',
              type: 'multiple-choice',
              question: 'What is the purpose of the "ForkJoinPool"?',
              question_ko: '"ForkJoinPool"의 목적은?',
              options: [
                { id: '1', text: 'To fork the JVM into multiple processes', text_ko: 'JVM을 여러 프로세스로 포크하기 위해' },
                { id: '2', text: 'To handle divide-and-conquer tasks using work-stealing', text_ko: '작업 훔치기(work-stealing)를 사용하여 분할 정복 작업을 처리하기 위해' },
                { id: '3', text: 'To manage HTTP connections', text_ko: 'HTTP 연결을 관리하기 위해' },
                { id: '4', text: 'To join strings together', text_ko: '문자열을 결합하기 위해' }
              ],
              correctAnswerId: '2',
              explanation: 'ForkJoinPool uses a work-stealing algorithm to efficiently execute tasks that can be broken down into smaller sub-tasks.',
              explanation_ko: 'ForkJoinPool은 작업을 작은 단위로 쪼개고(Fork), 유휴 스레드가 다른 스레드의 작업을 훔쳐와 실행(Work-stealing)하여 효율을 높입니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ForkJoinPool.html'
            }
          ]
        }
      ]
    },
    {
      id: 'java-modern-features',
      title: 'Java 8+ Features',
      title_ko: '자바 8+ 최신 기능',
      units: [
        {
          id: 'java-modern-core',
          title: 'Lambdas & Streams',
          title_ko: '람다와 스트림',
          description: 'Functional programming and modern API enhancements.',
          description_ko: '함수형 프로그래밍과 최신 API 개선 사항',
          questions: [
            {
              id: 'java-modern-1',
              type: 'multiple-choice',
              question: 'What is a "Functional Interface"?',
              question_ko: '"함수형 인터페이스"란 무엇입니까?',
              options: [
                { id: '1', text: 'An interface with many methods', text_ko: '많은 메서드를 가진 인터페이스' },
                { id: '2', text: 'An interface with exactly one abstract method', text_ko: '정확히 하나의 추상 메서드를 가진 인터페이스' },
                { id: '3', text: 'An interface that only has static methods', text_ko: '정적 메서드만 가진 인터페이스' },
                { id: '4', text: 'An interface that cannot be implemented', text_ko: '구현될 수 없는 인터페이스' }
              ],
              correctAnswerId: '2',
              explanation: 'A functional interface has exactly one abstract method and can be used as the assignment target for a lambda expression.',
              explanation_ko: '함수형 인터페이스는 단 하나의 추상 메서드를 가지며, 람다식의 타겟 타입으로 사용됩니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/lang/FunctionalInterface.html'
            },
            {
              id: 'java-modern-2',
              type: 'multiple-choice',
              question: 'Which Stream operation is "terminal" (triggers processing)?',
              question_ko: '스트림 연산 중 "최종(terminal)" 연산(실제 처리를 시작)은?',
              options: [
                { id: '1', text: 'filter' },
                { id: '2', text: 'map' },
                { id: '3', text: 'collect' },
                { id: '4', text: 'sorted' }
              ],
              correctAnswerId: '3',
              explanation: 'Intermediate operations (filter, map) are lazy, while terminal operations (collect, forEach) trigger the stream pipeline execution.',
              explanation_ko: 'filter, map 등은 중간 연산이며, collect, forEach 등이 호출되어야 스트림이 실제로 처리됩니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html#StreamOps'
            },
            {
              id: 'java-modern-3',
              type: 'multiple-choice',
              question: 'What is the purpose of the "Optional" class?',
              question_ko: '"Optional" 클래스의 목적은?',
              options: [
                { id: '1', text: 'To make every variable nullable', text_ko: '모든 변수를 nullable로 만들기 위해' },
                { id: '2', text: 'To represent a value that may or may not be present, avoiding NullPointerException', text_ko: '값이 존재할 수도 있고 아닐 수도 있는 상태를 나타내어 NullPointerException을 방지하기 위해' },
                { id: '3', text: 'To speed up execution', text_ko: '실행 속도를 높이기 위해' },
                { id: '4', text: 'To store multiple values', text_ko: '여러 값을 저장하기 위해' }
              ],
              correctAnswerId: '2',
              explanation: 'Optional is a container object used to represent the absence of a value instead of using null.',
              explanation_ko: 'Optional은 값이 존재할 수도 있고 아닐 수도 있는 상황을 객체로 감싸 NullPointerException을 방지하도록 돕습니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html'
            },
            {
              id: 'java-modern-4',
              type: 'multiple-choice',
              question: 'What is a "Method Reference" in Java 8?',
              question_ko: '자바 8에서 "메서드 참조"란 무엇입니까?',
              options: [
                { id: '1', text: 'A way to call a method by its name only', text_ko: '이름만으로 메서드를 호출하는 방법' },
                { id: '2', text: 'A shorthand syntax for a lambda expression that only calls an existing method', text_ko: '기존 메서드를 호출하기만 하는 람다식을 위한 축약 문법' },
                { id: '3', text: 'A tool for reflection', text_ko: '리플렉션을 위한 도구' },
                { id: '4', text: 'A new way to define methods', text_ko: '메서드를 정의하는 새로운 방법' }
              ],
              correctAnswerId: '2',
              explanation: 'Method references (e.g., System.out::println) are a more readable way to express lambdas that call a specific method.',
              explanation_ko: '메서드 참조는 기존 메서드를 단순히 호출하기만 하는 람다식을 더 간결하게 표현하는 문법입니다.',
              mdnUrl: 'https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html'
            },
            {
              id: 'java-modern-5',
              type: 'multiple-choice',
              question: 'Which collector is used to group stream elements into a Map based on a key?',
              question_ko: '스트림 요소를 키에 따라 그룹화하여 Map으로 반환하는 Collector는?',
              options: [
                { id: '1', text: 'Collectors.toList()' },
                { id: '2', text: 'Collectors.toMap()' },
                { id: '3', text: 'Collectors.groupingBy()' },
                { id: '4', text: 'Collectors.partitioningBy()' }
              ],
              correctAnswerId: '3',
              explanation: 'groupingBy is used for cascading classification of elements into a Map.',
              explanation_ko: 'groupingBy는 특정 기준에 따라 요소를 그룹화하여 Map 형태로 수집할 때 사용합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/stream/Collectors.html#groupingBy-java.util.function.Function-'
            },
            {
              id: 'java-modern-6',
              type: 'multiple-choice',
              question: 'What is "Pattern Matching for instanceof" introduced as a final feature in Java 16?',
              question_ko: '자바 16에서 정식 도입된 "instanceof를 위한 패턴 매칭"이란?',
              options: [
                { id: '1', text: 'Checking types using regex', text_ko: '정규식을 사용하여 타입 확인' },
                { id: '2', text: 'Automatic casting after a successful instanceof check', text_ko: 'instanceof 확인 성공 후 자동 캐스팅' },
                { id: '3', text: 'Comparing strings using patterns', text_ko: '패턴을 사용하여 문자열 비교' },
                { id: '4', text: 'A new way to use switch statements', text_ko: 'switch 문을 사용하는 새로운 방법' }
              ],
              correctAnswerId: '2',
              explanation: 'It allows you to declare a binding variable in an instanceof check, removing the need for explicit casting.',
              explanation_ko: 'instanceof로 타입을 확인한 뒤, 별도의 캐스팅 없이 바로 변수로 사용할 수 있게 해주는 기능입니다.',
              mdnUrl: 'https://openjdk.org/jeps/394'
            },
            {
              id: 'java-modern-7',
              type: 'multiple-choice',
              question: 'How do "Switch Expressions" differ from traditional switch statements?',
              question_ko: '"Switch 표현식"은 기존 switch 문과 어떻게 다릅니까?',
              options: [
                { id: '1', text: 'They can return a value', text_ko: '값을 반환할 수 있음' },
                { id: '2', text: 'They don\'t require break statements (using arrow syntax)', text_ko: 'break 문이 필요 없음 (화살표 문법 사용)' },
                { id: '3', text: 'They are more exhaustive', text_ko: '더 철저하게 모든 경우를 확인(exhaustive)함' },
                { id: '4', text: 'All of the above', text_ko: '위의 모든 사항' }
              ],
              correctAnswerId: '4',
              explanation: 'Switch expressions can evaluate to a value, use the arrow (->) syntax to avoid fall-through, and are checked for exhaustiveness by the compiler.',
              explanation_ko: 'Switch 표현식은 값을 반환할 수 있고, 화살표 문법으로 break를 생략하며, 모든 경우의 수를 처리했는지 컴파일러가 확인합니다.',
              mdnUrl: 'https://docs.oracle.com/en/java/javase/14/language/switch-expressions.html'
            },
            {
              id: 'java-modern-8',
              type: 'multiple-choice',
              question: 'Which new Time API was introduced in Java 8 to replace java.util.Date?',
              question_ko: 'java.util.Date를 대체하기 위해 자바 8에서 도입된 새로운 날짜/시간 API는?',
              options: [
                { id: '1', text: 'java.time (JSR-310)' },
                { id: '2', text: 'java.calendar' },
                { id: '3', text: 'java.clock' },
                { id: '4', text: 'java.joda' }
              ],
              correctAnswerId: '1',
              explanation: 'The java.time package provides a modern, immutable, and thread-safe date and time API.',
              explanation_ko: 'java.time 패키지는 불변성과 스레드 안전성을 갖춘 현대적인 날짜 및 시간 처리 기능을 제공합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/time/package-summary.html'
            },
            {
              id: 'java-modern-9',
              type: 'multiple-choice',
              question: 'What does Stream.flatMap() do?',
              question_ko: 'Stream.flatMap()은 무엇을 합니까?',
              options: [
                { id: '1', text: 'It maps each element to a value and returns a list', text_ko: '각 요소를 값에 매핑하고 리스트를 반환함' },
                { id: '2', text: 'It transforms each element into a stream and flattens the resulting streams into one', text_ko: '각 요소를 스트림으로 변환하고 결과 스트림들을 하나로 합침(flatten)' },
                { id: '3', text: 'It removes duplicates from the stream', text_ko: '스트림에서 중복을 제거함' },
                { id: '4', text: 'It sorts the elements in descending order', text_ko: '요소들을 내림차순으로 정렬함' }
              ],
              correctAnswerId: '2',
              explanation: 'flatMap is used to flatten a stream of collections (or streams) into a single stream of elements.',
              explanation_ko: 'flatMap은 각 요소를 스트림으로 변환한 뒤, 그 결과 스트림들을 하나의 스트림으로 병합(평탄화)합니다.',
              mdnUrl: 'https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#flatMap-java.util.function.Function-'
            },
            {
              id: 'java-modern-10',
              type: 'multiple-choice',
              question: 'What is the "var" keyword used for (introduced in Java 10)?',
              question_ko: '자바 10에서 도입된 "var" 키워드의 용도는?',
              options: [
                { id: '1', text: 'To create a dynamic variable like in JavaScript' },
                { id: '2', text: 'To perform local variable type inference' },
                { id: '3', text: 'To declare a global variable' },
                { id: '4', text: 'To define a variable that can change its type later' }
              ],
              correctAnswerId: '2',
              explanation: 'var allows the compiler to infer the type of a local variable based on its initializer.',
              explanation_ko: 'var는 대입되는 값을 바탕으로 컴파일러가 지역 변수의 타입을 자동으로 추론하게 해줍니다.',
              mdnUrl: 'https://openjdk.org/jeps/286'
            }
          ]
        }
      ]
    }
  ]
};
