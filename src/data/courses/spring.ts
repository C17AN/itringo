import type { Course } from '../../types';

export const springCourse: Course = {
  id: 'spring',
  role: 'backend',
  title: 'Spring',
  title_ko: '스프링',
  icon: 'Leaf', 
  chapters: [
    {
      id: 'spring-core',
      title: 'Spring Core',
      title_ko: '스프링 코어',
      units: [
        {
          id: 'spring-di',
          title: 'Dependency Injection',
          title_ko: '의존성 주입',
          description: 'IoC Container and DI patterns.',
          description_ko: 'IoC 컨테이너와 DI 패턴.',
          questions: [
            {
              id: 'q-spring-1',
              type: 'multiple-choice',
              question: 'Which annotation is used to mark a class as a Spring Bean component?',
              question_ko: '클래스를 스프링 빈 컴포넌트로 등록하기 위한 어노테이션은?',
              options: [
                { id: 'opt1', text: '@Bean' },
                { id: 'opt2', text: '@Component' },
                { id: 'opt3', text: '@Inject' },
                { id: 'opt4', text: '@Autowired' },
              ],
              correctAnswerId: 'opt2',
              explanation: "@Component is a generic stereotype for any Spring-managed component.",
              explanation_ko: "@Component는 스프링이 관리하는 컴포넌트임을 나타내는 가장 일반적인 어노테이션입니다. @Bean은 메소드 레벨에서 사용됩니다.",
              mdnUrl: 'https://docs.spring.io/spring-framework/reference/core/beans/classpath-scanning.html'
            }
          ]
        }
      ]
    },
    {
      id: 'spring-boot',
      title: 'Spring Boot',
      title_ko: '스프링 부트',
      units: [
        {
          id: 'boot-config',
          title: 'Configuration',
          title_ko: '설정',
          description: 'Auto-configuration and properties.',
          description_ko: '자동 설정과 프로퍼티.',
          questions: [
            {
              id: 'q-boot-1',
              type: 'multiple-choice',
              question: 'Which annotation triggers Spring Boot auto-configuration?',
              question_ko: '스프링 부트의 자동 설정을 활성화하는 어노테이션은?',
              options: [
                { id: 'opt1', text: '@SpringBootApplication' },
                { id: 'opt2', text: '@EnableAutoConfiguration' },
                { id: 'opt3', text: '@Configuration' },
                { id: 'opt4', text: '@ComponentScan' },
              ],
              correctAnswerId: 'opt2',
              explanation: "@EnableAutoConfiguration attempts to automatically configure your Spring application based on jar dependencies.",
              explanation_ko: "@EnableAutoConfiguration은 jar 의존성을 기반으로 스프링 애플리케이션을 자동으로 설정합니다. @SpringBootApplication에 포함되어 있습니다.",
              mdnUrl: 'https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.auto-configuration'
            }
          ]
        }
      ]
    }
  ]
};
