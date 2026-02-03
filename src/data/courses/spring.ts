import type { Course } from '../../types';

export const springCourse: Course = {
  "id": "spring",
  "role": "backend",
  "title": "Spring",
  "title_ko": "스프링",
  "icon": "Leaf",
  "chapters": [
    {
      "id": "spring-core",
      "title": "Spring Core",
      "title_ko": "스프링 코어",
      "units": [
        {
          "id": "spring-di",
          "title": "Dependency Injection",
          "title_ko": "의존성 주입",
          "description": "IoC Container and DI patterns.",
          "description_ko": "IoC 컨테이너와 DI 패턴",
          "questions": [
            {
              "id": "di-1",
              "type": "multiple-choice",
              "question": "Which annotation is generic and can be used for any Spring-managed component?",
              "question_ko": "스프링이 관리하는 모든 컴포넌트에 사용할 수 있는 일반적인 어노테이션은 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "@Service"
                },
                {
                  "id": "2",
                  "text": "@Repository"
                },
                {
                  "id": "3",
                  "text": "@Controller"
                },
                {
                  "id": "4",
                  "text": "All of the above",
                  "text_ko": "위의 모든 사항"
                }
              ],
              "correctAnswerId": "4",
              "explanation": "@Component is the generic stereotype for any Spring-managed component. @Service, @Repository, and @Controller are specializations of @Component.",
              "explanation_ko": "@Component는 스프링이 관리하는 컴포넌트를 위한 일반적인 스테레오타입입니다. @Service, @Repository, @Controller는 @Component의 구체화된 형태입니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/beans/classpath-scanning.html"
            },
            {
              "id": "di-2",
              "type": "multiple-choice",
              "question": "What is the default scope of a Spring Bean?",
              "question_ko": "스프링 빈의 기본 스코프는 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "prototype"
                },
                {
                  "id": "2",
                  "text": "singleton"
                },
                {
                  "id": "3",
                  "text": "request"
                },
                {
                  "id": "4",
                  "text": "session"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "The default scope is 'singleton', meaning only one instance of the bean is created per Spring IoC container.",
              "explanation_ko": "기본 스코프는 'singleton'이며, 이는 스프링 IoC 컨테이너당 하나의 빈 인스턴스만 생성됨을 의미합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html"
            },
            {
              "id": "di-3",
              "type": "multiple-choice",
              "question": "Which injection method is recommended for required dependencies?",
              "question_ko": "필수 의존성에 대해 권장되는 주입 방식은 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Field Injection",
                  "text_ko": "필드 주입 (Field Injection)"
                },
                {
                  "id": "2",
                  "text": "Setter Injection",
                  "text_ko": "세터 주입 (Setter Injection)"
                },
                {
                  "id": "3",
                  "text": "Constructor Injection",
                  "text_ko": "생성자 주입 (Constructor Injection)"
                },
                {
                  "id": "4",
                  "text": "Method Injection",
                  "text_ko": "메서드 주입 (Method Injection)"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "Constructor injection is recommended for required dependencies because it ensures the bean is immutable and fully initialized.",
              "explanation_ko": "생성자 주입은 빈의 불변성을 보장하고 완전히 초기화된 상태로 만들어주기 때문에 필수 의존성에 권장됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html"
            },
            {
              "id": "di-4",
              "type": "multiple-choice",
              "question": "Which annotation resolves ambiguity when multiple beans of the same type exist?",
              "question_ko": "동일한 타입의 빈이 여러 개 존재할 때 모호성을 해결하는 어노테이션은 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "@Primary"
                },
                {
                  "id": "2",
                  "text": "@Priority"
                },
                {
                  "id": "3",
                  "text": "@Qualifier"
                },
                {
                  "id": "4",
                  "text": "All of the above",
                  "text_ko": "위의 모든 사항"
                }
              ],
              "correctAnswerId": "4",
              "explanation": "@Primary, @Priority, and @Qualifier can all be used to resolve ambiguity, though they work in different ways.",
              "explanation_ko": "@Primary, @Priority, @Qualifier 모두 모호성을 해결하는 데 사용할 수 있지만, 작동 방식은 서로 다릅니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/beans/autowired-ambiguity.html"
            },
            {
              "id": "di-5",
              "type": "multiple-choice",
              "question": "What happens if you have a circular dependency between two beans using constructor injection?",
              "question_ko": "생성자 주입을 사용하는 두 빈 사이에 순환 의존성이 있으면 어떻게 됩니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Application starts normally",
                  "text_ko": "애플리케이션이 정상적으로 시작됨"
                },
                {
                  "id": "2",
                  "text": "BeanCurrentlyInCreationException is thrown"
                },
                {
                  "id": "3",
                  "text": "One bean is null",
                  "text_ko": "하나의 빈이 null임"
                },
                {
                  "id": "4",
                  "text": "Infinite loop at runtime",
                  "text_ko": "런타임 시 무한 루프 발생"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "Circular dependencies with constructor injection result in a BeanCurrentlyInCreationException because neither bean can be fully instantiated.",
              "explanation_ko": "생성자 주입을 사용한 순환 의존성은 두 빈 모두 완전히 인스턴스화될 수 없기 때문에 BeanCurrentlyInCreationException을 발생시킵니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html#beans-dependency-resolution"
            },
            {
              "id": "di-6",
              "type": "multiple-choice",
              "question": "Which annotation is used to define a bean in a configuration class?",
              "question_ko": "설정 클래스에서 빈을 정의하기 위해 사용하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@Component"
                },
                {
                  "id": "2",
                  "text": "@Bean"
                },
                {
                  "id": "3",
                  "text": "@Inject"
                },
                {
                  "id": "4",
                  "text": "@Service"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@Bean is used on methods in @Configuration classes to define beans.",
              "explanation_ko": "@Bean은 @Configuration 클래스 내의 메서드에서 빈을 정의할 때 사용됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/beans/java/bean-annotation.html"
            },
            {
              "id": "di-7",
              "type": "multiple-choice",
              "question": "How do you lazily initialize a bean?",
              "question_ko": "빈을 지연 초기화하려면 어떻게 합니까?",
              "options": [
                {
                  "id": "1",
                  "text": "@Lazy"
                },
                {
                  "id": "2",
                  "text": "@Delayed"
                },
                {
                  "id": "3",
                  "text": "@Later"
                },
                {
                  "id": "4",
                  "text": "@Defer"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "@Lazy prevents the bean from being initialized until it is first requested.",
              "explanation_ko": "@Lazy는 빈이 처음 요청될 때까지 초기화되지 않도록 합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-lazy-init.html"
            },
            {
              "id": "di-8",
              "type": "multiple-choice",
              "question": "Which interface represents the Spring IoC container?",
              "question_ko": "스프링 IoC 컨테이너를 나타내는 인터페이스는 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "BeanManager"
                },
                {
                  "id": "2",
                  "text": "ContainerContext"
                },
                {
                  "id": "3",
                  "text": "ApplicationContext"
                },
                {
                  "id": "4",
                  "text": "SpringContainer"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "ApplicationContext is the central interface for providing configuration for an application.",
              "explanation_ko": "ApplicationContext는 애플리케이션의 설정을 제공하는 중앙 인터페이스입니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/beans/basics.html"
            }
          ]
        },
        {
          "id": "spring-bean",
          "title": "Bean Lifecycle",
          "title_ko": "빈 생명주기",
          "description": "Bean scopes and lifecycle callbacks.",
          "description_ko": "빈 스코프와 생명주기 콜백",
          "questions": [
            {
              "id": "bean-1",
              "type": "multiple-choice",
              "question": "Which annotation is used for post-initialization logic?",
              "question_ko": "초기화 후 로직을 위해 사용되는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@PostInitialize"
                },
                {
                  "id": "2",
                  "text": "@PostConstruct"
                },
                {
                  "id": "3",
                  "text": "@AfterInit"
                },
                {
                  "id": "4",
                  "text": "@Start"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@PostConstruct is called after the bean has been constructed and dependencies injected.",
              "explanation_ko": "@PostConstruct는 빈이 생성되고 의존성이 주입된 후에 호출됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/beans/annotation-config/postconstruct-and-predestroy-annotations.html"
            },
            {
              "id": "bean-2",
              "type": "multiple-choice",
              "question": "Which interface allows custom modification of new bean instances?",
              "question_ko": "새로운 빈 인스턴스의 커스텀 수정을 허용하는 인터페이스는?",
              "options": [
                {
                  "id": "1",
                  "text": "BeanModifier"
                },
                {
                  "id": "2",
                  "text": "BeanPostProcessor"
                },
                {
                  "id": "3",
                  "text": "BeanInterceptor"
                },
                {
                  "id": "4",
                  "text": "BeanFilter"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "BeanPostProcessor allows you to modify beans after instantiation and before/after initialization.",
              "explanation_ko": "BeanPostProcessor는 인스턴스화 후, 초기화 전후에 빈을 수정할 수 있게 해줍니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/beans/factory-extension.html#beans-factory-extension-bpp"
            },
            {
              "id": "bean-3",
              "type": "multiple-choice",
              "question": "Which annotation is the counterpart to @PostConstruct for destruction?",
              "question_ko": "@PostConstruct의 소멸 대응 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@PreDestroy"
                },
                {
                  "id": "2",
                  "text": "@BeforeDestroy"
                },
                {
                  "id": "3",
                  "text": "@Cleanup"
                },
                {
                  "id": "4",
                  "text": "@End"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "@PreDestroy is called before the bean is removed from the container.",
              "explanation_ko": "@PreDestroy는 빈이 컨테이너에서 제거되기 전에 호출됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/beans/annotation-config/postconstruct-and-predestroy-annotations.html"
            },
            {
              "id": "bean-4",
              "type": "multiple-choice",
              "question": "Which scope creates a new instance for every HTTP request?",
              "question_ko": "모든 HTTP 요청마다 새로운 인스턴스를 생성하는 스코프는?",
              "options": [
                {
                  "id": "1",
                  "text": "session"
                },
                {
                  "id": "2",
                  "text": "prototype"
                },
                {
                  "id": "3",
                  "text": "request"
                },
                {
                  "id": "4",
                  "text": "application"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "The 'request' scope creates a new bean instance for each single HTTP request.",
              "explanation_ko": "'request' 스코프는 각각의 HTTP 요청마다 새로운 빈 인스턴스를 생성합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html#beans-factory-scopes-request"
            },
            {
              "id": "bean-5",
              "type": "multiple-choice",
              "question": "What is the order of execution for init methods?",
              "question_ko": "초기화 메서드의 실행 순서는?",
              "options": [
                {
                  "id": "1",
                  "text": "@PostConstruct -> InitializingBean -> init-method"
                },
                {
                  "id": "2",
                  "text": "InitializingBean -> @PostConstruct -> init-method"
                },
                {
                  "id": "3",
                  "text": "init-method -> @PostConstruct -> InitializingBean"
                },
                {
                  "id": "4",
                  "text": "@PostConstruct -> init-method -> InitializingBean"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "@PostConstruct is executed first, followed by InitializingBean.afterPropertiesSet(), and finally the custom init-method.",
              "explanation_ko": "@PostConstruct가 먼저 실행되고, 그 다음 InitializingBean.afterPropertiesSet(), 마지막으로 커스텀 init-method가 실행됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/beans/factory-nature.html#beans-factory-lifecycle-combined-effects"
            }
          ]
        },
        {
          "id": "spring-aop",
          "title": "AOP",
          "title_ko": "AOP",
          "description": "Aspect Oriented Programming concepts.",
          "description_ko": "관점 지향 프로그래밍 개념",
          "questions": [
            {
              "id": "aop-1",
              "type": "multiple-choice",
              "question": "What is a 'Pointcut' in Spring AOP?",
              "question_ko": "스프링 AOP에서 'Pointcut'이란 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "The action taken at a join point",
                  "text_ko": "조인 포인트에서 취해지는 동작"
                },
                {
                  "id": "2",
                  "text": "A predicate that matches join points",
                  "text_ko": "조인 포인트와 매칭되는 조건자(predicate)"
                },
                {
                  "id": "3",
                  "text": "The object being proxied",
                  "text_ko": "프록시되는 객체"
                },
                {
                  "id": "4",
                  "text": "A module encapsulating a cross-cutting concern",
                  "text_ko": "횡단 관심사를 캡슐화하는 모듈"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "A Pointcut defines which Join Points (methods) get advised.",
              "explanation_ko": "Pointcut은 어떤 Join Point(메서드)에 어드바이스를 적용할지 정의합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/aop/introduction-defn.html"
            },
            {
              "id": "aop-2",
              "type": "multiple-choice",
              "question": "Which advice runs around a method execution?",
              "question_ko": "메서드 실행 전후를 감싸는 어드바이스는?",
              "options": [
                {
                  "id": "1",
                  "text": "@Before"
                },
                {
                  "id": "2",
                  "text": "@AfterReturning"
                },
                {
                  "id": "3",
                  "text": "@Around"
                },
                {
                  "id": "4",
                  "text": "@AfterThrowing"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "@Around advice runs 'around' a matched method execution. It can proceed to the join point or bypass it.",
              "explanation_ko": "@Around 어드바이스는 매칭된 메서드 실행 '주변'에서 실행됩니다. 조인 포인트로 진행하거나 건너뛸 수 있습니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/aop/ataspectj/advice.html#aop-at-aspectj-around-advice"
            },
            {
              "id": "aop-3",
              "type": "multiple-choice",
              "question": "What is the default proxy mechanism in Spring AOP if interfaces are available?",
              "question_ko": "인터페이스가 있는 경우 스프링 AOP의 기본 프록시 메커니즘은 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "CGLIB"
                },
                {
                  "id": "2",
                  "text": "JDK Dynamic Proxy"
                },
                {
                  "id": "3",
                  "text": "AspectJ"
                },
                {
                  "id": "4",
                  "text": "ByteBuddy"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "Spring AOP uses JDK dynamic proxies for AOP proxies by default if the target object implements at least one interface.",
              "explanation_ko": "스프링 AOP는 타겟 객체가 하나 이상의 인터페이스를 구현하는 경우 기본적으로 JDK 동적 프록시를 사용합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/aop/proxying.html"
            },
            {
              "id": "aop-4",
              "type": "multiple-choice",
              "question": "Which annotation enables AspectJ support in Spring?",
              "question_ko": "스프링에서 AspectJ 지원을 활성화하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@EnableAOP"
                },
                {
                  "id": "2",
                  "text": "@EnableAspectJAutoProxy"
                },
                {
                  "id": "3",
                  "text": "@EnableAspectJ"
                },
                {
                  "id": "4",
                  "text": "@UseAspectJ"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@EnableAspectJAutoProxy enables support for handling components marked with AspectJ's @Aspect annotation.",
              "explanation_ko": "@EnableAspectJAutoProxy는 AspectJ의 @Aspect 어노테이션이 붙은 컴포넌트 처리를 활성화합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/aop/ataspectj/configuration.html"
            },
            {
              "id": "aop-5",
              "type": "multiple-choice",
              "question": "What does the expression 'execution(* com.example.service.*.*(..))' match?",
              "question_ko": "'execution(* com.example.service.*.*(..))' 표현식은 무엇과 매칭됩니까?",
              "options": [
                {
                  "id": "1",
                  "text": "All methods in com.example.service package",
                  "text_ko": "com.example.service 패키지의 모든 메서드"
                },
                {
                  "id": "2",
                  "text": "Only void methods in com.example.service",
                  "text_ko": "com.example.service 패키지의 void 메서드만"
                },
                {
                  "id": "3",
                  "text": "Only public methods in com.example.service",
                  "text_ko": "com.example.service 패키지의 public 메서드만"
                },
                {
                  "id": "4",
                  "text": "All classes in com.example.service",
                  "text_ko": "com.example.service 패키지의 모든 클래스"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "It matches the execution of any method defined in the com.example.service package.",
              "explanation_ko": "com.example.service 패키지에 정의된 모든 메서드의 실행과 매칭됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/aop/ataspectj/pointcuts.html"
            }
          ]
        }
      ]
    },
    {
      "id": "spring-boot",
      "title": "Spring Boot",
      "title_ko": "스프링 부트",
      "units": [
        {
          "id": "boot-config",
          "title": "Configuration",
          "title_ko": "설정",
          "description": "Auto-configuration and properties.",
          "description_ko": "자동 설정과 프로퍼티",
          "questions": [
            {
              "id": "boot-config-1",
              "type": "multiple-choice",
              "question": "Which annotation is NOT part of @SpringBootApplication?",
              "question_ko": "@SpringBootApplication에 포함되지 않는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@EnableAutoConfiguration"
                },
                {
                  "id": "2",
                  "text": "@ComponentScan"
                },
                {
                  "id": "3",
                  "text": "@Configuration"
                },
                {
                  "id": "4",
                  "text": "@EnableWebMvc"
                }
              ],
              "correctAnswerId": "4",
              "explanation": "@SpringBootApplication consists of @Configuration, @EnableAutoConfiguration, and @ComponentScan. @EnableWebMvc is not included by default.",
              "explanation_ko": "@SpringBootApplication은 @Configuration, @EnableAutoConfiguration, @ComponentScan으로 구성됩니다. @EnableWebMvc는 기본적으로 포함되지 않습니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.springbootapplication-annotation"
            },
            {
              "id": "boot-config-2",
              "type": "multiple-choice",
              "question": "Which property file has higher precedence?",
              "question_ko": "어떤 프로퍼티 파일이 더 높은 우선순위를 가집니까?",
              "options": [
                {
                  "id": "1",
                  "text": "application.properties in jar",
                  "text_ko": "jar 내부의 application.properties"
                },
                {
                  "id": "2",
                  "text": "application.properties in config directory",
                  "text_ko": "config 디렉토리의 application.properties"
                },
                {
                  "id": "3",
                  "text": "application.yml in classpath root",
                  "text_ko": "클래스패스 루트의 application.yml"
                },
                {
                  "id": "4",
                  "text": "application.properties in classpath root",
                  "text_ko": "클래스패스 루트의 application.properties"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "Config files in a /config subdirectory of the current directory have higher precedence than those in the classpath.",
              "explanation_ko": "현재 디렉토리의 /config 하위 디렉토리에 있는 설정 파일은 클래스패스에 있는 파일보다 우선순위가 높습니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config"
            },
            {
              "id": "boot-config-3",
              "type": "multiple-choice",
              "question": "Which annotation is used to bind external properties to a Java Bean?",
              "question_ko": "외부 프로퍼티를 자바 빈에 바인딩하기 위해 사용하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@Value"
                },
                {
                  "id": "2",
                  "text": "@ConfigurationProperties"
                },
                {
                  "id": "3",
                  "text": "@PropertySource"
                },
                {
                  "id": "4",
                  "text": "@Bind"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@ConfigurationProperties is used for type-safe binding of external configurations to Java objects.",
              "explanation_ko": "@ConfigurationProperties는 외부 설정을 자바 객체에 타입 안전하게 바인딩하는 데 사용됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config.typesafe-configuration-properties"
            },
            {
              "id": "boot-config-4",
              "type": "multiple-choice",
              "question": "How do you activate a specific profile 'dev'?",
              "question_ko": "'dev'라는 특정 프로파일을 활성화하려면 어떻게 합니까?",
              "options": [
                {
                  "id": "1",
                  "text": "-Dspring.profiles.active=dev"
                },
                {
                  "id": "2",
                  "text": "-Dactive.profile=dev"
                },
                {
                  "id": "3",
                  "text": "--profile=dev"
                },
                {
                  "id": "4",
                  "text": "spring.profile=dev"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "You can set spring.profiles.active as a System property or command line argument.",
              "explanation_ko": "spring.profiles.active를 시스템 프로퍼티나 커맨드 라인 인수로 설정할 수 있습니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.profiles"
            },
            {
              "id": "boot-config-5",
              "type": "multiple-choice",
              "question": "Which annotation only loads a bean if a specific class is present on the classpath?",
              "question_ko": "특정 클래스가 클래스패스에 존재할 때만 빈을 로드하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@ConditionalOnBean"
                },
                {
                  "id": "2",
                  "text": "@ConditionalOnClass"
                },
                {
                  "id": "3",
                  "text": "@ConditionalOnMissingClass"
                },
                {
                  "id": "4",
                  "text": "@ConditionalOnProperty"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@ConditionalOnClass checks if the specified class is available on the classpath.",
              "explanation_ko": "@ConditionalOnClass는 지정된 클래스가 클래스패스에 있는지 확인합니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.developing-auto-configuration.condition-annotations"
            },
            {
              "id": "boot-config-6",
              "type": "multiple-choice",
              "question": "Which interface allows running code after the Spring Boot application starts?",
              "question_ko": "스프링 부트 애플리케이션 시작 후 코드를 실행할 수 있게 해주는 인터페이스는?",
              "options": [
                {
                  "id": "1",
                  "text": "CommandLineRunner"
                },
                {
                  "id": "2",
                  "text": "StartupRunner"
                },
                {
                  "id": "3",
                  "text": "BootRunner"
                },
                {
                  "id": "4",
                  "text": "ApplicationStarter"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "CommandLineRunner and ApplicationRunner are used to run code after the application starts.",
              "explanation_ko": "CommandLineRunner와 ApplicationRunner는 애플리케이션 시작 후 코드를 실행하는 데 사용됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.spring-application.command-line-runner"
            },
            {
              "id": "boot-config-7",
              "type": "multiple-choice",
              "question": "What is 'relaxed binding' in Spring Boot?",
              "question_ko": "스프링 부트에서 'relaxed binding'이란 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Ignoring type mismatches",
                  "text_ko": "타입 불일치 무시"
                },
                {
                  "id": "2",
                  "text": "Mapping environment variables like MY_PROP to myProp",
                  "text_ko": "MY_PROP 같은 환경 변수를 myProp으로 매핑"
                },
                {
                  "id": "3",
                  "text": "Skipping validation",
                  "text_ko": "검증 건너뛰기"
                },
                {
                  "id": "4",
                  "text": "Injecting null values",
                  "text_ko": "null 값 주입"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "Relaxed binding allows binding properties with different naming conventions (e.g., kebab-case, snake_case) to Java beans.",
              "explanation_ko": "Relaxed binding을 사용하면 다양한 명명 규칙(예: kebab-case, snake_case)을 가진 프로퍼티를 자바 빈에 바인딩할 수 있습니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding"
            },
            {
              "id": "boot-config-8",
              "type": "multiple-choice",
              "question": "How do you exclude a specific auto-configuration class?",
              "question_ko": "특정 자동 설정 클래스를 제외하려면 어떻게 합니까?",
              "options": [
                {
                  "id": "1",
                  "text": "@EnableAutoConfiguration(exclude={...})"
                },
                {
                  "id": "2",
                  "text": "@SpringBootApplication(exclude={...})"
                },
                {
                  "id": "3",
                  "text": "spring.autoconfigure.exclude property"
                },
                {
                  "id": "4",
                  "text": "All of the above",
                  "text_ko": "위의 모든 사항"
                }
              ],
              "correctAnswerId": "4",
              "explanation": "You can exclude auto-configuration via annotation attributes or the spring.autoconfigure.exclude property.",
              "explanation_ko": "어노테이션 속성이나 spring.autoconfigure.exclude 프로퍼티를 통해 자동 설정을 제외할 수 있습니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.auto-configuration.disabling-specific"
            },
            {
              "id": "boot-config-9",
              "type": "multiple-choice",
              "question": "Which annotation defines a property source for the application?",
              "question_ko": "애플리케이션의 프로퍼티 소스를 정의하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@PropertySource"
                },
                {
                  "id": "2",
                  "text": "@ConfigurationSource"
                },
                {
                  "id": "3",
                  "text": "@Resource"
                },
                {
                  "id": "4",
                  "text": "@ValueSource"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "@PropertySource adds a property file to Spring's Environment.",
              "explanation_ko": "@PropertySource는 스프링 Environment에 프로퍼티 파일을 추가합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/beans/environment.html#beans-property-source-abstraction"
            },
            {
              "id": "boot-config-10",
              "type": "multiple-choice",
              "question": "What is the default port for a Spring Boot web application?",
              "question_ko": "스프링 부트 웹 애플리케이션의 기본 포트는 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "80"
                },
                {
                  "id": "2",
                  "text": "8080"
                },
                {
                  "id": "3",
                  "text": "8000"
                },
                {
                  "id": "4",
                  "text": "3000"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "The default port is 8080, but it can be changed via server.port.",
              "explanation_ko": "기본 포트는 8080이지만 server.port를 통해 변경할 수 있습니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/howto.html#howto.webserver.change-port"
            }
          ]
        },
        {
          "id": "boot-actuator",
          "title": "Actuator",
          "title_ko": "액추에이터",
          "description": "Monitoring and managing your application.",
          "description_ko": "애플리케이션 모니터링 및 관리",
          "questions": [
            {
              "id": "actuator-1",
              "type": "multiple-choice",
              "question": "Which dependency is required to enable Spring Boot Actuator?",
              "question_ko": "스프링 부트 액추에이터를 활성화하기 위해 필요한 의존성은?",
              "options": [
                {
                  "id": "1",
                  "text": "spring-boot-starter-web"
                },
                {
                  "id": "2",
                  "text": "spring-boot-starter-actuator"
                },
                {
                  "id": "3",
                  "text": "spring-boot-actuator"
                },
                {
                  "id": "4",
                  "text": "spring-actuator"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "spring-boot-starter-actuator provides production-ready features like monitoring and metrics.",
              "explanation_ko": "spring-boot-starter-actuator는 모니터링, 메트릭과 같은 운영 준비 기능을 제공합니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html"
            },
            {
              "id": "actuator-2",
              "type": "multiple-choice",
              "question": "Which endpoint shows the health information of the application?",
              "question_ko": "애플리케이션의 상태 정보를 보여주는 엔드포인트는?",
              "options": [
                {
                  "id": "1",
                  "text": "/health"
                },
                {
                  "id": "2",
                  "text": "/status"
                },
                {
                  "id": "3",
                  "text": "/actuator/health"
                },
                {
                  "id": "4",
                  "text": "/actuator/status"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "By default, the health information is exposed at /actuator/health.",
              "explanation_ko": "기본적으로 상태 정보는 /actuator/health에서 노출됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html#actuator.endpoints.health"
            },
            {
              "id": "actuator-3",
              "type": "multiple-choice",
              "question": "How do you expose all Actuator endpoints over HTTP?",
              "question_ko": "HTTP를 통해 모든 액추에이터 엔드포인트를 노출하려면 어떻게 합니까?",
              "options": [
                {
                  "id": "1",
                  "text": "management.endpoints.web.exposure.include=*"
                },
                {
                  "id": "2",
                  "text": "management.endpoints.include=*"
                },
                {
                  "id": "3",
                  "text": "actuator.expose=*"
                },
                {
                  "id": "4",
                  "text": "endpoints.web.exposure.include=all"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "Setting management.endpoints.web.exposure.include=* exposes all endpoints.",
              "explanation_ko": "management.endpoints.web.exposure.include=*로 설정하면 모든 엔드포인트가 노출됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html#actuator.endpoints.exposing"
            },
            {
              "id": "actuator-4",
              "type": "multiple-choice",
              "question": "Which interface do you implement to create a custom health indicator?",
              "question_ko": "커스텀 헬스 인디케이터를 만들기 위해 구현해야 하는 인터페이스는?",
              "options": [
                {
                  "id": "1",
                  "text": "HealthCheck"
                },
                {
                  "id": "2",
                  "text": "HealthIndicator"
                },
                {
                  "id": "3",
                  "text": "StatusIndicator"
                },
                {
                  "id": "4",
                  "text": "ActuatorHealth"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "You can implement the HealthIndicator interface to provide custom health information.",
              "explanation_ko": "HealthIndicator 인터페이스를 구현하여 커스텀 상태 정보를 제공할 수 있습니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html#actuator.endpoints.health.writing-custom-health-indicators"
            },
            {
              "id": "actuator-5",
              "type": "multiple-choice",
              "question": "What is Micrometer used for in Spring Boot?",
              "question_ko": "스프링 부트에서 Micrometer는 무엇을 위해 사용됩니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Logging",
                  "text_ko": "로깅"
                },
                {
                  "id": "2",
                  "text": "Tracing",
                  "text_ko": "트레이싱"
                },
                {
                  "id": "3",
                  "text": "Metrics collection",
                  "text_ko": "메트릭 수집"
                },
                {
                  "id": "4",
                  "text": "Health checks",
                  "text_ko": "상태 확인"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "Micrometer is a metrics instrumentation library that Spring Boot uses to collect metrics.",
              "explanation_ko": "Micrometer는 스프링 부트가 메트릭을 수집하는 데 사용하는 메트릭 계측 라이브러리입니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html#actuator.metrics"
            }
          ]
        },
        {
          "id": "boot-test",
          "title": "Testing",
          "title_ko": "테스트",
          "description": "Testing Spring Boot applications.",
          "description_ko": "스프링 부트 애플리케이션 테스트",
          "questions": [
            {
              "id": "test-1",
              "type": "multiple-choice",
              "question": "Which annotation starts the full application context for testing?",
              "question_ko": "테스트를 위해 전체 애플리케이션 컨텍스트를 시작하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@ContextConfiguration"
                },
                {
                  "id": "2",
                  "text": "@SpringBootTest"
                },
                {
                  "id": "3",
                  "text": "@WebMvcTest"
                },
                {
                  "id": "4",
                  "text": "@DataJpaTest"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@SpringBootTest looks for the main configuration class and starts the full application context.",
              "explanation_ko": "@SpringBootTest는 메인 설정 클래스를 찾아 전체 애플리케이션 컨텍스트를 시작합니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.testing.spring-boot-applications"
            },
            {
              "id": "test-2",
              "type": "multiple-choice",
              "question": "Which annotation is used to mock a bean and inject it into the application context?",
              "question_ko": "빈을 모킹하고 애플리케이션 컨텍스트에 주입하기 위해 사용하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@Mock"
                },
                {
                  "id": "2",
                  "text": "@InjectMocks"
                },
                {
                  "id": "3",
                  "text": "@MockBean"
                },
                {
                  "id": "4",
                  "text": "@SpyBean"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "@MockBean defines a Mockito mock for a bean inside your ApplicationContext.",
              "explanation_ko": "@MockBean은 ApplicationContext 내부의 빈에 대한 Mockito 모의 객체를 정의합니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.testing.spring-boot-applications.mocking-beans"
            },
            {
              "id": "test-3",
              "type": "multiple-choice",
              "question": "Which annotation is used to test only the web layer?",
              "question_ko": "웹 계층만 테스트하기 위해 사용하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@SpringBootTest"
                },
                {
                  "id": "2",
                  "text": "@WebMvcTest"
                },
                {
                  "id": "3",
                  "text": "@ControllerTest"
                },
                {
                  "id": "4",
                  "text": "@RestTest"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@WebMvcTest focuses only on the Spring MVC components.",
              "explanation_ko": "@WebMvcTest는 스프링 MVC 컴포넌트에만 집중합니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.testing.spring-boot-applications.spring-mvc-tests"
            },
            {
              "id": "test-4",
              "type": "multiple-choice",
              "question": "Which annotation provides an in-memory database for testing JPA repositories?",
              "question_ko": "JPA 리포지토리 테스트를 위해 인메모리 데이터베이스를 제공하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@DataJpaTest"
                },
                {
                  "id": "2",
                  "text": "@JdbcTest"
                },
                {
                  "id": "3",
                  "text": "@PersistenceTest"
                },
                {
                  "id": "4",
                  "text": "@RepositoryTest"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "@DataJpaTest configures an in-memory embedded database and scans for @Entity classes.",
              "explanation_ko": "@DataJpaTest는 인메모리 임베디드 데이터베이스를 구성하고 @Entity 클래스를 스캔합니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.testing.spring-boot-applications.autoconfigured-spring-data-jpa"
            },
            {
              "id": "test-5",
              "type": "multiple-choice",
              "question": "Which client is recommended for testing web endpoints in Spring Boot?",
              "question_ko": "스프링 부트에서 웹 엔드포인트를 테스트하는 데 권장되는 클라이언트는?",
              "options": [
                {
                  "id": "1",
                  "text": "HttpClient"
                },
                {
                  "id": "2",
                  "text": "RestTemplate"
                },
                {
                  "id": "3",
                  "text": "TestRestTemplate"
                },
                {
                  "id": "4",
                  "text": "WebClient"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "TestRestTemplate or WebTestClient are recommended for integration tests.",
              "explanation_ko": "통합 테스트에는 TestRestTemplate 또는 WebTestClient가 권장됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.testing.spring-boot-applications.with-mock-environment"
            }
          ]
        }
      ]
    },
    {
      "id": "spring-mvc",
      "title": "Spring MVC",
      "title_ko": "스프링 MVC",
      "units": [
        {
          "id": "mvc-controller",
          "title": "Controller",
          "title_ko": "컨트롤러",
          "description": "Defining controllers and request mapping.",
          "description_ko": "컨트롤러 정의와 요청 매핑",
          "questions": [
            {
              "id": "mvc-1",
              "type": "multiple-choice",
              "question": "What is the difference between @Controller and @RestController?",
              "question_ko": "@Controller와 @RestController의 차이점은 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "@RestController includes @ResponseBody",
                  "text_ko": "@RestController가 @ResponseBody를 포함함"
                },
                {
                  "id": "2",
                  "text": "@Controller cannot return JSON",
                  "text_ko": "@Controller는 JSON을 반환할 수 없음"
                },
                {
                  "id": "3",
                  "text": "@RestController cannot return views",
                  "text_ko": "@RestController는 뷰를 반환할 수 없음"
                },
                {
                  "id": "4",
                  "text": "There is no difference",
                  "text_ko": "차이가 없음"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "@RestController is composed of @Controller and @ResponseBody, meaning methods return data rather than views.",
              "explanation_ko": "@RestController는 @Controller와 @ResponseBody로 구성되어 있으며, 메서드가 뷰 대신 데이터를 반환함을 의미합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-restcontroller.html"
            },
            {
              "id": "mvc-2",
              "type": "multiple-choice",
              "question": "Which annotation binds a URI template variable to a method parameter?",
              "question_ko": "URI 템플릿 변수를 메서드 파라미터에 바인딩하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@RequestParam"
                },
                {
                  "id": "2",
                  "text": "@PathVariable"
                },
                {
                  "id": "3",
                  "text": "@PathParam"
                },
                {
                  "id": "4",
                  "text": "@UriVariable"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@PathVariable binds a URI template variable to a method parameter.",
              "explanation_ko": "@PathVariable은 URI 템플릿 변수를 메서드 파라미터에 바인딩합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/pathvariable.html"
            },
            {
              "id": "mvc-3",
              "type": "multiple-choice",
              "question": "Which annotation binds the HTTP request body to a Java object?",
              "question_ko": "HTTP 요청 본문을 자바 객체에 바인딩하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@ResponseBody"
                },
                {
                  "id": "2",
                  "text": "@RequestBody"
                },
                {
                  "id": "3",
                  "text": "@RequestPart"
                },
                {
                  "id": "4",
                  "text": "@ModelAttribute"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@RequestBody indicates that a method parameter should be bound to the body of the web request.",
              "explanation_ko": "@RequestBody는 메서드 파라미터가 웹 요청의 본문에 바인딩되어야 함을 나타냅니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/requestbody.html"
            },
            {
              "id": "mvc-4",
              "type": "multiple-choice",
              "question": "How do you access query parameters in a controller method?",
              "question_ko": "컨트롤러 메서드에서 쿼리 파라미터에 접근하려면 어떻게 합니까?",
              "options": [
                {
                  "id": "1",
                  "text": "@QueryParam"
                },
                {
                  "id": "2",
                  "text": "@RequestParam"
                },
                {
                  "id": "3",
                  "text": "@PathVariable"
                },
                {
                  "id": "4",
                  "text": "@RequestAttribute"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@RequestParam is used to extract query parameters from the URL.",
              "explanation_ko": "@RequestParam은 URL에서 쿼리 파라미터를 추출하는 데 사용됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/requestparam.html"
            },
            {
              "id": "mvc-5",
              "type": "multiple-choice",
              "question": "Which class is commonly used to return both data and HTTP status code?",
              "question_ko": "데이터와 HTTP 상태 코드를 함께 반환하기 위해 일반적으로 사용되는 클래스는?",
              "options": [
                {
                  "id": "1",
                  "text": "Response"
                },
                {
                  "id": "2",
                  "text": "HttpEntity"
                },
                {
                  "id": "3",
                  "text": "ResponseEntity"
                },
                {
                  "id": "4",
                  "text": "StatusResponse"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "ResponseEntity<T> extends HttpEntity<T> and adds an HTTP status code.",
              "explanation_ko": "ResponseEntity<T>는 HttpEntity<T>를 확장하며 HTTP 상태 코드를 추가합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/responseentity.html"
            },
            {
              "id": "mvc-6",
              "type": "multiple-choice",
              "question": "What is @ModelAttribute used for?",
              "question_ko": "@ModelAttribute는 무엇을 위해 사용됩니까?",
              "options": [
                {
                  "id": "1",
                  "text": "To bind request parameters to a bean",
                  "text_ko": "요청 파라미터를 빈에 바인딩하기 위해"
                },
                {
                  "id": "2",
                  "text": "To expose a bean to the view",
                  "text_ko": "빈을 뷰에 노출하기 위해"
                },
                {
                  "id": "3",
                  "text": "Both 1 and 2",
                  "text_ko": "1과 2 모두"
                },
                {
                  "id": "4",
                  "text": "Neither",
                  "text_ko": "둘 다 아님"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "@ModelAttribute can be used to bind request parameters to an object and to expose that object to the web view.",
              "explanation_ko": "@ModelAttribute는 요청 파라미터를 객체에 바인딩하고 그 객체를 웹 뷰에 노출하는 데 사용할 수 있습니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/modelattribute.html"
            },
            {
              "id": "mvc-7",
              "type": "multiple-choice",
              "question": "Which annotation maps a specific HTTP GET request?",
              "question_ko": "특정 HTTP GET 요청을 매핑하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@RequestMapping(method=GET)"
                },
                {
                  "id": "2",
                  "text": "@GetMapping"
                },
                {
                  "id": "3",
                  "text": "Both 1 and 2",
                  "text_ko": "1과 2 모두"
                },
                {
                  "id": "4",
                  "text": "@GetRequest"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "@GetMapping is a composed annotation that acts as a shortcut for @RequestMapping(method = RequestMethod.GET).",
              "explanation_ko": "@GetMapping은 @RequestMapping(method = RequestMethod.GET)의 단축키 역할을 하는 조합된 어노테이션입니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-requestmapping.html"
            },
            {
              "id": "mvc-8",
              "type": "multiple-choice",
              "question": "How do you access a cookie value?",
              "question_ko": "쿠키 값에 접근하려면 어떻게 합니까?",
              "options": [
                {
                  "id": "1",
                  "text": "@CookieParam"
                },
                {
                  "id": "2",
                  "text": "@CookieValue"
                },
                {
                  "id": "3",
                  "text": "@RequestCookie"
                },
                {
                  "id": "4",
                  "text": "@HttpCookie"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@CookieValue allows you to bind the value of an HTTP cookie to a method argument.",
              "explanation_ko": "@CookieValue를 사용하면 HTTP 쿠키의 값을 메서드 인수에 바인딩할 수 있습니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/cookievalue.html"
            },
            {
              "id": "mvc-9",
              "type": "multiple-choice",
              "question": "Which annotation allows storing model attributes in the HTTP session?",
              "question_ko": "모델 속성을 HTTP 세션에 저장할 수 있게 하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@SessionAttribute"
                },
                {
                  "id": "2",
                  "text": "@SessionAttributes"
                },
                {
                  "id": "3",
                  "text": "@HttpSession"
                },
                {
                  "id": "4",
                  "text": "@StoreInSession"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@SessionAttributes is used to store model attributes in the HTTP session between requests.",
              "explanation_ko": "@SessionAttributes는 요청 간에 모델 속성을 HTTP 세션에 저장하는 데 사용됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-sessionattributes.html"
            },
            {
              "id": "mvc-10",
              "type": "multiple-choice",
              "question": "How do you return a redirect response?",
              "question_ko": "리다이렉트 응답을 반환하려면 어떻게 합니까?",
              "options": [
                {
                  "id": "1",
                  "text": "return \"redirect:/url\""
                },
                {
                  "id": "2",
                  "text": "return \"forward:/url\""
                },
                {
                  "id": "3",
                  "text": "return \"go:/url\""
                },
                {
                  "id": "4",
                  "text": "return new Redirect(\"/url\")"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "Returning a string starting with 'redirect:' triggers a redirect.",
              "explanation_ko": "'redirect:'로 시작하는 문자열을 반환하면 리다이렉트가 트리거됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/return-types.html"
            }
          ]
        },
        {
          "id": "mvc-rest",
          "title": "REST API",
          "title_ko": "REST API",
          "description": "Building RESTful services.",
          "description_ko": "RESTful 서비스 구축",
          "questions": [
            {
              "id": "rest-1",
              "type": "multiple-choice",
              "question": "Which HTTP status code indicates a successful resource creation?",
              "question_ko": "리소스 생성이 성공했음을 나타내는 HTTP 상태 코드는?",
              "options": [
                {
                  "id": "1",
                  "text": "200 OK"
                },
                {
                  "id": "2",
                  "text": "201 Created"
                },
                {
                  "id": "3",
                  "text": "202 Accepted"
                },
                {
                  "id": "4",
                  "text": "204 No Content"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "201 Created is the standard response for successful resource creation via POST.",
              "explanation_ko": "201 Created는 POST를 통한 리소스 생성 성공에 대한 표준 응답입니다.",
              "mdnUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201"
            },
            {
              "id": "rest-2",
              "type": "multiple-choice",
              "question": "Which annotation enables Cross-Origin Resource Sharing (CORS)?",
              "question_ko": "CORS(Cross-Origin Resource Sharing)를 활성화하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@EnableCors"
                },
                {
                  "id": "2",
                  "text": "@CrossOrigin"
                },
                {
                  "id": "3",
                  "text": "@AllowOrigin"
                },
                {
                  "id": "4",
                  "text": "@CorsMapping"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@CrossOrigin enables CORS on a controller or handler method.",
              "explanation_ko": "@CrossOrigin은 컨트롤러나 핸들러 메서드에서 CORS를 활성화합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc-cors.html#mvc-cors-controller"
            },
            {
              "id": "rest-3",
              "type": "multiple-choice",
              "question": "Which annotation is used to handle exceptions globally?",
              "question_ko": "예외를 전역적으로 처리하기 위해 사용하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@ExceptionHandler"
                },
                {
                  "id": "2",
                  "text": "@ControllerAdvice"
                },
                {
                  "id": "3",
                  "text": "@GlobalExceptionHandler"
                },
                {
                  "id": "4",
                  "text": "@Advice"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@ControllerAdvice (or @RestControllerAdvice) allows handling exceptions across the whole application.",
              "explanation_ko": "@ControllerAdvice(또는 @RestControllerAdvice)를 사용하면 애플리케이션 전체에서 예외를 처리할 수 있습니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-advice.html"
            },
            {
              "id": "rest-4",
              "type": "multiple-choice",
              "question": "Which object contains validation errors when using @Valid?",
              "question_ko": "@Valid 사용 시 유효성 검사 에러를 담고 있는 객체는?",
              "options": [
                {
                  "id": "1",
                  "text": "Errors"
                },
                {
                  "id": "2",
                  "text": "ValidationResult"
                },
                {
                  "id": "3",
                  "text": "BindingResult"
                },
                {
                  "id": "4",
                  "text": "ErrorResult"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "BindingResult holds the result of the validation and binding and contains any errors.",
              "explanation_ko": "BindingResult는 유효성 검사 및 바인딩 결과를 보유하며 에러 정보를 포함합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/validation.html"
            },
            {
              "id": "rest-5",
              "type": "multiple-choice",
              "question": "What is Content Negotiation?",
              "question_ko": "Content Negotiation이란 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Negotiating security protocols",
                  "text_ko": "보안 프로토콜 협상"
                },
                {
                  "id": "2",
                  "text": "Selecting the best representation for a response",
                  "text_ko": "응답을 위한 최적의 표현 선택"
                },
                {
                  "id": "3",
                  "text": "Negotiating database connections",
                  "text_ko": "데이터베이스 연결 협상"
                },
                {
                  "id": "4",
                  "text": "Selecting the server port",
                  "text_ko": "서버 포트 선택"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "Content Negotiation determines the format of the response (e.g., JSON vs XML) based on client preference.",
              "explanation_ko": "Content Negotiation은 클라이언트 선호도에 따라 응답 형식(예: JSON vs XML)을 결정합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-config/content-negotiation.html"
            },
            {
              "id": "rest-6",
              "type": "multiple-choice",
              "question": "Which annotation handles file uploads?",
              "question_ko": "파일 업로드를 처리하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@RequestParam(\"file\") MultipartFile file"
                },
                {
                  "id": "2",
                  "text": "@RequestBody File file"
                },
                {
                  "id": "3",
                  "text": "@FileUpload"
                },
                {
                  "id": "4",
                  "text": "@RequestPart File file"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "MultipartFile is the interface for handling uploaded files, typically bound via @RequestParam.",
              "explanation_ko": "MultipartFile은 업로드된 파일을 처리하기 위한 인터페이스이며, 일반적으로 @RequestParam을 통해 바인딩됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/multipart-forms.html"
            },
            {
              "id": "rest-7",
              "type": "multiple-choice",
              "question": "What does HATEOAS stand for?",
              "question_ko": "HATEOAS의 약자는 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Hypertext As The Engine Of Application State"
                },
                {
                  "id": "2",
                  "text": "Hyperlink And Text Engine Of Application System"
                },
                {
                  "id": "3",
                  "text": "HTTP As The Engine Of Application State"
                },
                {
                  "id": "4",
                  "text": "Hypertext Application Transfer Engine"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "HATEOAS means clients interact with the network application entirely through hypermedia provided dynamically by application servers.",
              "explanation_ko": "HATEOAS는 클라이언트가 애플리케이션 서버가 동적으로 제공하는 하이퍼미디어를 통해서만 네트워크 애플리케이션과 상호 작용한다는 것을 의미합니다.",
              "mdnUrl": "https://spring.io/projects/spring-hateoas"
            },
            {
              "id": "rest-8",
              "type": "multiple-choice",
              "question": "Which interface is used for asynchronous request processing?",
              "question_ko": "비동기 요청 처리에 사용되는 인터페이스는?",
              "options": [
                {
                  "id": "1",
                  "text": "Future"
                },
                {
                  "id": "2",
                  "text": "Callable"
                },
                {
                  "id": "3",
                  "text": "DeferredResult"
                },
                {
                  "id": "4",
                  "text": "Both 2 and 3",
                  "text_ko": "2와 3 모두"
                }
              ],
              "correctAnswerId": "4",
              "explanation": "Spring MVC supports Callable and DeferredResult for asynchronous request processing.",
              "explanation_ko": "스프링 MVC는 비동기 요청 처리를 위해 Callable과 DeferredResult를 지원합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-ann-async.html"
            },
            {
              "id": "rest-9",
              "type": "multiple-choice",
              "question": "Which HTTP method is idempotent?",
              "question_ko": "멱등성(Idempotent)을 가지는 HTTP 메서드는?",
              "options": [
                {
                  "id": "1",
                  "text": "POST"
                },
                {
                  "id": "2",
                  "text": "PUT"
                },
                {
                  "id": "3",
                  "text": "PATCH"
                },
                {
                  "id": "4",
                  "text": "CONNECT"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "PUT, GET, DELETE are idempotent, meaning multiple identical requests have the same effect as a single one. POST is not.",
              "explanation_ko": "PUT, GET, DELETE는 멱등성을 가지며, 이는 여러 번의 동일한 요청이 한 번의 요청과 같은 효과를 낸다는 의미입니다. POST는 그렇지 않습니다.",
              "mdnUrl": "https://developer.mozilla.org/en-US/docs/Glossary/Idempotent"
            },
            {
              "id": "rest-10",
              "type": "multiple-choice",
              "question": "How can you validate a request body automatically?",
              "question_ko": "요청 본문을 자동으로 유효성 검사하려면 어떻게 합니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Use @Valid on the @RequestBody parameter",
                  "text_ko": "@RequestBody 파라미터에 @Valid 사용"
                },
                {
                  "id": "2",
                  "text": "Use @Validate on the method",
                  "text_ko": "메서드에 @Validate 사용"
                },
                {
                  "id": "3",
                  "text": "Use @Check on the class",
                  "text_ko": "클래스에 @Check 사용"
                },
                {
                  "id": "4",
                  "text": "It is automatic by default",
                  "text_ko": "기본적으로 자동임"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "Annotating the @RequestBody parameter with @Valid (or @Validated) triggers validation.",
              "explanation_ko": "@RequestBody 파라미터에 @Valid(또는 @Validated)를 붙이면 유효성 검사가 트리거됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/validation.html"
            }
          ]
        }
      ]
    },
    {
      "id": "spring-data",
      "title": "Spring Data",
      "title_ko": "스프링 데이터",
      "units": [
        {
          "id": "data-jpa",
          "title": "Spring Data JPA",
          "title_ko": "스프링 데이터 JPA",
          "description": "JPA repositories and entities.",
          "description_ko": "JPA 리포지토리와 엔티티",
          "questions": [
            {
              "id": "jpa-1",
              "type": "multiple-choice",
              "question": "Which interface provides pagination and sorting capabilities?",
              "question_ko": "페이징 및 정렬 기능을 제공하는 인터페이스는?",
              "options": [
                {
                  "id": "1",
                  "text": "CrudRepository"
                },
                {
                  "id": "2",
                  "text": "JpaRepository"
                },
                {
                  "id": "3",
                  "text": "PagingAndSortingRepository"
                },
                {
                  "id": "4",
                  "text": "Repository"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "PagingAndSortingRepository extends CrudRepository to provide methods for pagination and sorting.",
              "explanation_ko": "PagingAndSortingRepository는 CrudRepository를 확장하여 페이징 및 정렬 메서드를 제공합니다.",
              "mdnUrl": "https://docs.spring.io/spring-data/jpa/reference/repositories/core-concepts.html"
            },
            {
              "id": "jpa-2",
              "type": "multiple-choice",
              "question": "How do you define a query method that finds a user by email?",
              "question_ko": "이메일로 사용자를 찾는 쿼리 메서드를 어떻게 정의합니까?",
              "options": [
                {
                  "id": "1",
                  "text": "getUser(String email)"
                },
                {
                  "id": "2",
                  "text": "findByEmail(String email)"
                },
                {
                  "id": "3",
                  "text": "queryEmail(String email)"
                },
                {
                  "id": "4",
                  "text": "searchByEmail(String email)"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "Spring Data derives the query from the method name 'findByEmail'.",
              "explanation_ko": "스프링 데이터는 'findByEmail'이라는 메서드 이름에서 쿼리를 유도해냅니다.",
              "mdnUrl": "https://docs.spring.io/spring-data/jpa/reference/repositories/query-methods-details.html"
            },
            {
              "id": "jpa-3",
              "type": "multiple-choice",
              "question": "Which annotation allows writing custom JPQL queries?",
              "question_ko": "커스텀 JPQL 쿼리를 작성할 수 있게 하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@SQL"
                },
                {
                  "id": "2",
                  "text": "@Query"
                },
                {
                  "id": "3",
                  "text": "@JPQL"
                },
                {
                  "id": "4",
                  "text": "@CustomQuery"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@Query is used to define custom JPQL or native SQL queries on repository methods.",
              "explanation_ko": "@Query는 리포지토리 메서드에 커스텀 JPQL 또는 네이티브 SQL 쿼리를 정의하는 데 사용됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-data/jpa/reference/repositories/query-methods-details.html#jpa.query-methods.at-query"
            },
            {
              "id": "jpa-4",
              "type": "multiple-choice",
              "question": "Which annotation marks a class as a JPA entity?",
              "question_ko": "클래스를 JPA 엔티티로 표시하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@Table"
                },
                {
                  "id": "2",
                  "text": "@Entity"
                },
                {
                  "id": "3",
                  "text": "@JPA"
                },
                {
                  "id": "4",
                  "text": "@Object"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@Entity marks a POJO as a persistent entity.",
              "explanation_ko": "@Entity는 POJO를 영속성 엔티티로 표시합니다.",
              "mdnUrl": "https://jakarta.ee/specifications/persistence/2.2/apidocs/javax/persistence/entity"
            },
            {
              "id": "jpa-5",
              "type": "multiple-choice",
              "question": "What is the default FetchType for @OneToMany?",
              "question_ko": "@OneToMany의 기본 FetchType은 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "EAGER"
                },
                {
                  "id": "2",
                  "text": "LAZY"
                },
                {
                  "id": "3",
                  "text": "IMMEDIATE"
                },
                {
                  "id": "4",
                  "text": "DELAYED"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "The default fetch type for collections (@OneToMany, @ManyToMany) is LAZY.",
              "explanation_ko": "컬렉션(@OneToMany, @ManyToMany)의 기본 페치 타입은 LAZY입니다.",
              "mdnUrl": "https://jakarta.ee/specifications/persistence/2.2/apidocs/javax/persistence/onetomany"
            },
            {
              "id": "jpa-6",
              "type": "multiple-choice",
              "question": "Which annotation is required for UPDATE or DELETE queries in @Query?",
              "question_ko": "@Query에서 UPDATE 또는 DELETE 쿼리를 수행할 때 필요한 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@Write"
                },
                {
                  "id": "2",
                  "text": "@Update"
                },
                {
                  "id": "3",
                  "text": "@Modifying"
                },
                {
                  "id": "4",
                  "text": "@Transactional"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "@Modifying indicates that the query is an update or delete query.",
              "explanation_ko": "@Modifying은 해당 쿼리가 업데이트 또는 삭제 쿼리임을 나타냅니다.",
              "mdnUrl": "https://docs.spring.io/spring-data/jpa/reference/repositories/query-methods-details.html#jpa.modifying-queries"
            },
            {
              "id": "jpa-7",
              "type": "multiple-choice",
              "question": "What is the purpose of JPA Auditing?",
              "question_ko": "JPA Auditing의 목적은 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "To check database integrity",
                  "text_ko": "데이터베이스 무결성 확인"
                },
                {
                  "id": "2",
                  "text": "To automatically populate createdDate and lastModifiedDate",
                  "text_ko": "createdDate와 lastModifiedDate를 자동으로 채움"
                },
                {
                  "id": "3",
                  "text": "To audit user logins",
                  "text_ko": "사용자 로그인 감사"
                },
                {
                  "id": "4",
                  "text": "To log SQL queries",
                  "text_ko": "SQL 쿼리 로깅"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "JPA Auditing automatically captures auditing information like createdBy, createdDate, lastModifiedBy, and lastModifiedDate.",
              "explanation_ko": "JPA Auditing은 createdBy, createdDate, lastModifiedBy, lastModifiedDate와 같은 감사 정보를 자동으로 캡처합니다.",
              "mdnUrl": "https://docs.spring.io/spring-data/jpa/reference/auditing.html"
            },
            {
              "id": "jpa-8",
              "type": "multiple-choice",
              "question": "Which interface allows using specifications for dynamic queries?",
              "question_ko": "동적 쿼리를 위해 Specification을 사용할 수 있게 하는 인터페이스는?",
              "options": [
                {
                  "id": "1",
                  "text": "JpaSpecificationExecutor"
                },
                {
                  "id": "2",
                  "text": "QueryDslPredicateExecutor"
                },
                {
                  "id": "3",
                  "text": "CriteriaExecutor"
                },
                {
                  "id": "4",
                  "text": "DynamicQueryExecutor"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "JpaSpecificationExecutor allows execution of Specifications based on the JPA Criteria API.",
              "explanation_ko": "JpaSpecificationExecutor는 JPA Criteria API 기반의 Specification 실행을 허용합니다.",
              "mdnUrl": "https://docs.spring.io/spring-data/jpa/reference/repositories/specifications.html"
            },
            {
              "id": "jpa-9",
              "type": "multiple-choice",
              "question": "What does @GeneratedValue(strategy = GenerationType.IDENTITY) do?",
              "question_ko": "@GeneratedValue(strategy = GenerationType.IDENTITY)는 무엇을 합니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Uses a sequence table",
                  "text_ko": "시퀀스 테이블 사용"
                },
                {
                  "id": "2",
                  "text": "Relies on an auto-increment column in the database",
                  "text_ko": "데이터베이스의 auto-increment 컬럼에 의존"
                },
                {
                  "id": "3",
                  "text": "Generates a UUID",
                  "text_ko": "UUID 생성"
                },
                {
                  "id": "4",
                  "text": "Uses a table for ID generation",
                  "text_ko": "ID 생성을 위해 테이블 사용"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "IDENTITY strategy relies on the database's auto-increment column to generate the primary key.",
              "explanation_ko": "IDENTITY 전략은 데이터베이스의 auto-increment 컬럼에 의존하여 기본 키를 생성합니다.",
              "mdnUrl": "https://jakarta.ee/specifications/persistence/2.2/apidocs/javax/persistence/generationtype#IDENTITY"
            },
            {
              "id": "jpa-10",
              "type": "multiple-choice",
              "question": "What is the N+1 problem in JPA?",
              "question_ko": "JPA에서 N+1 문제란 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Adding 1 to N records",
                  "text_ko": "1개에서 N개의 레코드 추가"
                },
                {
                  "id": "2",
                  "text": "Executing 1 query to fetch N entities, then N additional queries for related entities",
                  "text_ko": "N개의 엔티티를 가져오기 위해 1개의 쿼리를 실행한 후, 연관된 엔티티를 위해 N개의 추가 쿼리 실행"
                },
                {
                  "id": "3",
                  "text": "Having N+1 tables",
                  "text_ko": "N+1개의 테이블 존재"
                },
                {
                  "id": "4",
                  "text": "An off-by-one error",
                  "text_ko": "Off-by-one 에러"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "The N+1 problem occurs when fetching a list of entities and then lazily loading a related entity for each one, causing N additional queries.",
              "explanation_ko": "N+1 문제는 엔티티 목록을 가져온 후 각각에 대해 연관된 엔티티를 지연 로딩할 때 발생하며, 이로 인해 N번의 추가 쿼리가 발생합니다.",
              "mdnUrl": "https://vladmihalcea.com/n-plus-1-query-problem/"
            }
          ]
        },
        {
          "id": "data-tx",
          "title": "Transactions",
          "title_ko": "트랜잭션",
          "description": "Transaction management.",
          "description_ko": "트랜잭션 관리",
          "questions": [
            {
              "id": "tx-1",
              "type": "multiple-choice",
              "question": "Which annotation defines the scope of a single database transaction?",
              "question_ko": "단일 데이터베이스 트랜잭션의 범위를 정의하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@Transaction"
                },
                {
                  "id": "2",
                  "text": "@Transactional"
                },
                {
                  "id": "3",
                  "text": "@DbTx"
                },
                {
                  "id": "4",
                  "text": "@Atomic"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@Transactional marks a method or class as transactional.",
              "explanation_ko": "@Transactional은 메서드나 클래스를 트랜잭션으로 표시합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html"
            },
            {
              "id": "tx-2",
              "type": "multiple-choice",
              "question": "Which propagation type is the default for @Transactional?",
              "question_ko": "@Transactional의 기본 전파(Propagation) 타입은 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "REQUIRES_NEW"
                },
                {
                  "id": "2",
                  "text": "REQUIRED"
                },
                {
                  "id": "3",
                  "text": "SUPPORTS"
                },
                {
                  "id": "4",
                  "text": "MANDATORY"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "REQUIRED is the default propagation. It joins an existing transaction or creates a new one if none exists.",
              "explanation_ko": "REQUIRED가 기본 전파 타입입니다. 기존 트랜잭션에 참여하거나 없으면 새로 생성합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/tx-propagation.html"
            },
            {
              "id": "tx-3",
              "type": "multiple-choice",
              "question": "Which propagation type always creates a new transaction, suspending the current one?",
              "question_ko": "항상 새로운 트랜잭션을 생성하고 현재 트랜잭션을 일시 중단하는 전파 타입은?",
              "options": [
                {
                  "id": "1",
                  "text": "REQUIRED"
                },
                {
                  "id": "2",
                  "text": "REQUIRES_NEW"
                },
                {
                  "id": "3",
                  "text": "NESTED"
                },
                {
                  "id": "4",
                  "text": "NOT_SUPPORTED"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "REQUIRES_NEW suspends the current transaction and creates a new one.",
              "explanation_ko": "REQUIRES_NEW는 현재 트랜잭션을 일시 중단하고 새 트랜잭션을 생성합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/tx-propagation.html"
            },
            {
              "id": "tx-4",
              "type": "multiple-choice",
              "question": "By default, which exceptions trigger a rollback?",
              "question_ko": "기본적으로 어떤 예외가 롤백을 트리거합니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Checked exceptions",
                  "text_ko": "Checked 예외 (Checked Exceptions)"
                },
                {
                  "id": "2",
                  "text": "RuntimeException and Error"
                },
                {
                  "id": "3",
                  "text": "All exceptions",
                  "text_ko": "모든 예외"
                },
                {
                  "id": "4",
                  "text": "SQLException only"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "Spring's declarative transaction management rolls back on unchecked exceptions (RuntimeException and Error) by default.",
              "explanation_ko": "스프링의 선언적 트랜잭션 관리는 기본적으로 언체크 예외(RuntimeException 및 Error) 발생 시 롤백합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/rolling-back.html"
            },
            {
              "id": "tx-5",
              "type": "multiple-choice",
              "question": "What is the purpose of @Transactional(readOnly = true)?",
              "question_ko": "@Transactional(readOnly = true)의 목적은 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "To prevent data from being read",
                  "text_ko": "데이터가 읽히는 것을 방지"
                },
                {
                  "id": "2",
                  "text": "To optimize transaction for read operations",
                  "text_ko": "읽기 작업을 위해 트랜잭션 최적화"
                },
                {
                  "id": "3",
                  "text": "To make the database read-only globally",
                  "text_ko": "데이터베이스를 전역적으로 읽기 전용으로 설정"
                },
                {
                  "id": "4",
                  "text": "To disable transaction",
                  "text_ko": "트랜잭션 비활성화"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "It signals that the transaction is read-only, allowing optimizations like avoiding dirty checking in Hibernate.",
              "explanation_ko": "트랜잭션이 읽기 전용임을 알리며, 하이버네이트의 더티 체킹 회피와 같은 최적화를 가능하게 합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html#transaction-declarative-annotations-readonly"
            },
            {
              "id": "tx-6",
              "type": "multiple-choice",
              "question": "Which isolation level prevents dirty reads?",
              "question_ko": "Dirty Read를 방지하는 격리 수준(Isolation Level)은?",
              "options": [
                {
                  "id": "1",
                  "text": "READ_UNCOMMITTED"
                },
                {
                  "id": "2",
                  "text": "READ_COMMITTED"
                },
                {
                  "id": "3",
                  "text": "DEFAULT"
                },
                {
                  "id": "4",
                  "text": "NONE"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "READ_COMMITTED ensures that a transaction can only read data that has been committed by other transactions.",
              "explanation_ko": "READ_COMMITTED는 다른 트랜잭션에 의해 커밋된 데이터만 읽을 수 있도록 보장합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/tx-propagation.html"
            },
            {
              "id": "tx-7",
              "type": "multiple-choice",
              "question": "Does @Transactional work on private methods?",
              "question_ko": "@Transactional은 private 메서드에서 동작합니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Yes",
                  "text_ko": "네"
                },
                {
                  "id": "2",
                  "text": "No, usually not with default proxy mode",
                  "text_ko": "아니요, 보통 기본 프록시 모드에서는 안 됨"
                },
                {
                  "id": "3",
                  "text": "Only if marked with @Force",
                  "text_ko": "@Force가 붙은 경우에만"
                },
                {
                  "id": "4",
                  "text": "Yes, if using CGLIB",
                  "text_ko": "네, CGLIB를 사용하는 경우"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "With the default Spring AOP proxying, @Transactional only works on public methods called from outside the bean.",
              "explanation_ko": "기본 스프링 AOP 프록시를 사용할 때, @Transactional은 빈 외부에서 호출된 public 메서드에서만 동작합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html#transaction-declarative-annotations-method-visibility"
            },
            {
              "id": "tx-8",
              "type": "multiple-choice",
              "question": "What happens if a transactional method calls another transactional method within the same class (self-invocation)?",
              "question_ko": "트랜잭션 메서드가 같은 클래스 내의 다른 트랜잭션 메서드를 호출(자기 호출)하면 어떻게 됩니까?",
              "options": [
                {
                  "id": "1",
                  "text": "The second transaction starts normally",
                  "text_ko": "두 번째 트랜잭션이 정상적으로 시작됨"
                },
                {
                  "id": "2",
                  "text": "The second transaction annotation is ignored",
                  "text_ko": "두 번째 트랜잭션 어노테이션이 무시됨"
                },
                {
                  "id": "3",
                  "text": "A runtime exception is thrown",
                  "text_ko": "런타임 예외 발생"
                },
                {
                  "id": "4",
                  "text": "Deadlock occurs",
                  "text_ko": "데드락 발생"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "In default proxy mode, self-invocation bypasses the proxy, so the transaction advice on the second method is not executed.",
              "explanation_ko": "기본 프록시 모드에서 자기 호출은 프록시를 우회하므로, 두 번째 메서드의 트랜잭션 어드바이스는 실행되지 않습니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/core/aop/proxying.html#aop-understanding-aop-proxies"
            },
            {
              "id": "tx-9",
              "type": "multiple-choice",
              "question": "Which interface allows programmatic transaction management?",
              "question_ko": "프로그래밍 방식의 트랜잭션 관리를 허용하는 인터페이스는?",
              "options": [
                {
                  "id": "1",
                  "text": "TransactionManager"
                },
                {
                  "id": "2",
                  "text": "PlatformTransactionManager"
                },
                {
                  "id": "3",
                  "text": "TransactionTemplate"
                },
                {
                  "id": "4",
                  "text": "All of the above",
                  "text_ko": "위의 모든 사항"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "TransactionTemplate provides a template method pattern for programmatic transaction management, using the PlatformTransactionManager.",
              "explanation_ko": "TransactionTemplate은 PlatformTransactionManager를 사용하여 프로그래밍 방식 트랜잭션 관리를 위한 템플릿 메서드 패턴을 제공합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/data-access/transaction/programmatic.html"
            },
            {
              "id": "tx-10",
              "type": "multiple-choice",
              "question": "What is 'dirty read'?",
              "question_ko": "'Dirty Read'란 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Reading data that was never written",
                  "text_ko": "한 번도 기록되지 않은 데이터 읽기"
                },
                {
                  "id": "2",
                  "text": "Reading uncommitted changes from another transaction",
                  "text_ko": "다른 트랜잭션의 커밋되지 않은 변경 사항 읽기"
                },
                {
                  "id": "3",
                  "text": "Reading the same data twice getting different results",
                  "text_ko": "같은 데이터를 두 번 읽었을 때 서로 다른 결과가 나옴"
                },
                {
                  "id": "4",
                  "text": "Reading phantom rows",
                  "text_ko": "팬텀 로우(phantom rows) 읽기"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "A dirty read occurs when a transaction reads data that has been written but not yet committed by another transaction.",
              "explanation_ko": "Dirty Read는 한 트랜잭션이 아직 커밋되지 않은 다른 트랜잭션의 변경 데이터를 읽을 때 발생합니다.",
              "mdnUrl": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/tx-propagation.html"
            }
          ]
        }
      ]
    },
    {
      "id": "spring-security",
      "title": "Spring Security",
      "title_ko": "스프링 시큐리티",
      "units": [
        {
          "id": "sec-auth",
          "title": "Authentication",
          "title_ko": "인증",
          "description": "User authentication mechanisms.",
          "description_ko": "사용자 인증 메커니즘",
          "questions": [
            {
              "id": "sec-1",
              "type": "multiple-choice",
              "question": "What is the difference between Authentication and Authorization?",
              "question_ko": "인증(Authentication)과 인가(Authorization)의 차이점은 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Authentication verifies identity; Authorization checks permissions",
                  "text_ko": "인증은 신원을 확인하고, 인가는 권한을 확인함"
                },
                {
                  "id": "2",
                  "text": "Authentication checks permissions; Authorization verifies identity",
                  "text_ko": "인증은 권한을 확인하고, 인가는 신원을 확인함"
                },
                {
                  "id": "3",
                  "text": "They are the same thing",
                  "text_ko": "둘은 같은 것입니다"
                },
                {
                  "id": "4",
                  "text": "Authentication is for users; Authorization is for servers",
                  "text_ko": "인증은 사용자를 위한 것이고, 인가는 서버를 위한 것입니다"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "Authentication validates who you are; Authorization validates what you are allowed to do.",
              "explanation_ko": "인증은 당신이 누구인지 확인하는 것이고, 인가는 당신이 무엇을 할 수 있는지 확인하는 것입니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/features/authentication/index.html"
            },
            {
              "id": "sec-2",
              "type": "multiple-choice",
              "question": "Where is the security context of the current user stored?",
              "question_ko": "현재 사용자의 보안 컨텍스트는 어디에 저장됩니까?",
              "options": [
                {
                  "id": "1",
                  "text": "HttpSession"
                },
                {
                  "id": "2",
                  "text": "SecurityContextHolder"
                },
                {
                  "id": "3",
                  "text": "UserContext"
                },
                {
                  "id": "4",
                  "text": "AuthManager"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "SecurityContextHolder is the central place where Spring Security stores the details of the present security context.",
              "explanation_ko": "SecurityContextHolder는 스프링 시큐리티가 현재 보안 컨텍스트의 세부 정보를 저장하는 중앙 저장소입니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html#servlet-authentication-securitycontextholder"
            },
            {
              "id": "sec-3",
              "type": "multiple-choice",
              "question": "Which interface loads user-specific data?",
              "question_ko": "사용자별 데이터를 로드하는 인터페이스는?",
              "options": [
                {
                  "id": "1",
                  "text": "AuthenticationProvider"
                },
                {
                  "id": "2",
                  "text": "UserDataLoader"
                },
                {
                  "id": "3",
                  "text": "UserDetailsService"
                },
                {
                  "id": "4",
                  "text": "UserManager"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "UserDetailsService is a core interface used to retrieve user authentication data.",
              "explanation_ko": "UserDetailsService는 사용자 인증 데이터를 검색하는 데 사용되는 핵심 인터페이스입니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/user-details-service.html"
            },
            {
              "id": "sec-4",
              "type": "multiple-choice",
              "question": "Which interface is used to encode passwords?",
              "question_ko": "비밀번호를 인코딩하는 데 사용되는 인터페이스는?",
              "options": [
                {
                  "id": "1",
                  "text": "PasswordHasher"
                },
                {
                  "id": "2",
                  "text": "PasswordEncoder"
                },
                {
                  "id": "3",
                  "text": "CryptoEncoder"
                },
                {
                  "id": "4",
                  "text": "AuthEncoder"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "PasswordEncoder interface is used to encode passwords and matches them during authentication.",
              "explanation_ko": "PasswordEncoder 인터페이스는 비밀번호를 인코딩하고 인증 시 비밀번호를 일치시키는 데 사용됩니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html#authentication-password-storage-passwordencoder"
            },
            {
              "id": "sec-5",
              "type": "multiple-choice",
              "question": "What does 'Principal' represent in Spring Security?",
              "question_ko": "스프링 시큐리티에서 'Principal'은 무엇을 나타냅니까?",
              "options": [
                {
                  "id": "1",
                  "text": "The permission level",
                  "text_ko": "권한 수준"
                },
                {
                  "id": "2",
                  "text": "The currently logged in user",
                  "text_ko": "현재 로그인한 사용자"
                },
                {
                  "id": "3",
                  "text": "The password",
                  "text_ko": "비밀번호"
                },
                {
                  "id": "4",
                  "text": "The security configuration",
                  "text_ko": "보안 설정"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "The Principal is typically the currently authenticated user (e.g., UserDetails instance).",
              "explanation_ko": "Principal은 일반적으로 현재 인증된 사용자(예: UserDetails 인스턴스)를 나타냅니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html#servlet-authentication-authentication"
            },
            {
              "id": "sec-6",
              "type": "multiple-choice",
              "question": "Which component is responsible for processing an authentication request?",
              "question_ko": "인증 요청을 처리하는 책임이 있는 컴포넌트는?",
              "options": [
                {
                  "id": "1",
                  "text": "SecurityContext"
                },
                {
                  "id": "2",
                  "text": "AuthenticationManager"
                },
                {
                  "id": "3",
                  "text": "AccessDecisionManager"
                },
                {
                  "id": "4",
                  "text": "FilterSecurityInterceptor"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "AuthenticationManager is the main strategy interface for authentication.",
              "explanation_ko": "AuthenticationManager는 인증을 위한 주요 전략 인터페이스입니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html#servlet-authentication-authenticationmanager"
            },
            {
              "id": "sec-7",
              "type": "multiple-choice",
              "question": "What is the recommended hashing algorithm for passwords in Spring Security?",
              "question_ko": "스프링 시큐리티에서 비밀번호에 권장되는 해싱 알고리즘은 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "MD5"
                },
                {
                  "id": "2",
                  "text": "SHA-256"
                },
                {
                  "id": "3",
                  "text": "BCrypt"
                },
                {
                  "id": "4",
                  "text": "Plain Text"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "BCrypt is a recommended strong hashing function widely used in Spring Security.",
              "explanation_ko": "BCrypt는 스프링 시큐리티에서 널리 사용되는 권장되는 강력한 해싱 함수입니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html#authentication-password-storage-bcrypt"
            },
            {
              "id": "sec-8",
              "type": "multiple-choice",
              "question": "What is JWT?",
              "question_ko": "JWT란 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Java Web Thread"
                },
                {
                  "id": "2",
                  "text": "JSON Web Token"
                },
                {
                  "id": "3",
                  "text": "JavaScript Web Tool"
                },
                {
                  "id": "4",
                  "text": "Java Web Token"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties.",
              "explanation_ko": "JWT(JSON Web Token)는 당사자 간에 정보를 안전하게 전송하기 위한 간결하고 URL 안전한 방법입니다.",
              "mdnUrl": "https://jwt.io/introduction"
            },
            {
              "id": "sec-9",
              "type": "multiple-choice",
              "question": "Which annotation enables Spring Security's web security support?",
              "question_ko": "스프링 시큐리티의 웹 보안 지원을 활성화하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@EnableSecurity"
                },
                {
                  "id": "2",
                  "text": "@EnableSpringSecurity"
                },
                {
                  "id": "3",
                  "text": "@EnableWebSecurity"
                },
                {
                  "id": "4",
                  "text": "@SecurityConfig"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "@EnableWebSecurity enables Spring Security's web security support and provides the Spring MVC integration.",
              "explanation_ko": "@EnableWebSecurity는 스프링 시큐리티의 웹 보안 지원을 활성화하고 스프링 MVC 통합을 제공합니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/servlet/configuration/java.html"
            },
            {
              "id": "sec-10",
              "type": "multiple-choice",
              "question": "What is OAuth2 used for?",
              "question_ko": "OAuth2는 무엇을 위해 사용됩니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Database encryption",
                  "text_ko": "데이터베이스 암호화"
                },
                {
                  "id": "2",
                  "text": "Delegated authorization",
                  "text_ko": "위임된 인가"
                },
                {
                  "id": "3",
                  "text": "Session management",
                  "text_ko": "세션 관리"
                },
                {
                  "id": "4",
                  "text": "Password hashing",
                  "text_ko": "비밀번호 해싱"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "OAuth2 is an authorization framework that enables applications to obtain limited access to user accounts on an HTTP service.",
              "explanation_ko": "OAuth2는 애플리케이션이 HTTP 서비스의 사용자 계정에 제한적으로 접근할 수 있게 해주는 인가 프레임워크입니다.",
              "mdnUrl": "https://oauth.net/2/"
            }
          ]
        },
        {
          "id": "sec-config",
          "title": "Security Config",
          "title_ko": "보안 설정",
          "description": "Configuring Spring Security.",
          "description_ko": "스프링 시큐리티 설정",
          "questions": [
            {
              "id": "config-1",
              "type": "multiple-choice",
              "question": "What is SecurityFilterChain?",
              "question_ko": "SecurityFilterChain이란 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "A list of users",
                  "text_ko": "사용자 목록"
                },
                {
                  "id": "2",
                  "text": "A chain of filters that process the request for security",
                  "text_ko": "보안을 위해 요청을 처리하는 필터 체인"
                },
                {
                  "id": "3",
                  "text": "A database table",
                  "text_ko": "데이터베이스 테이블"
                },
                {
                  "id": "4",
                  "text": "A password algorithm",
                  "text_ko": "비밀번호 알고리즘"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "SecurityFilterChain defines a chain of Spring Security filters that match a specific request.",
              "explanation_ko": "SecurityFilterChain은 특정 요청과 매칭되는 스프링 시큐리티 필터 체인을 정의합니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/servlet/architecture.html#servlet-securityfilterchain"
            },
            {
              "id": "config-2",
              "type": "multiple-choice",
              "question": "Which annotation enables method-level security?",
              "question_ko": "메서드 수준 보안을 활성화하는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@EnableMethodSecurity"
                },
                {
                  "id": "2",
                  "text": "@EnableGlobalMethodSecurity"
                },
                {
                  "id": "3",
                  "text": "Both 1 and 2",
                  "text_ko": "1과 2 모두"
                },
                {
                  "id": "4",
                  "text": "@SecureMethods"
                }
              ],
              "correctAnswerId": "3",
              "explanation": "@EnableMethodSecurity is the new recommended annotation, replacing @EnableGlobalMethodSecurity.",
              "explanation_ko": "@EnableMethodSecurity는 @EnableGlobalMethodSecurity를 대체하는 새로운 권장 어노테이션입니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html"
            },
            {
              "id": "config-3",
              "type": "multiple-choice",
              "question": "What is CSRF?",
              "question_ko": "CSRF란 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Cross-Site Request Forgery"
                },
                {
                  "id": "2",
                  "text": "Cross-Site Resource Filter"
                },
                {
                  "id": "3",
                  "text": "Client-Side Request Filter"
                },
                {
                  "id": "4",
                  "text": "Cascading Style Resources Format"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "CSRF is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated.",
              "explanation_ko": "CSRF는 최종 사용자가 현재 인증된 웹 애플리케이션에서 원치 않는 작업을 실행하도록 강제하는 공격입니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/features/exploits/csrf.html"
            },
            {
              "id": "config-4",
              "type": "multiple-choice",
              "question": "Which annotation is used to restrict access to a method based on roles?",
              "question_ko": "역할에 따라 메서드 접근을 제한하는 데 사용되는 어노테이션은?",
              "options": [
                {
                  "id": "1",
                  "text": "@PreAuthorize(\"hasRole('ADMIN')\")"
                },
                {
                  "id": "2",
                  "text": "@Secured(\"ROLE_ADMIN\")"
                },
                {
                  "id": "3",
                  "text": "@RolesAllowed(\"ADMIN\")"
                },
                {
                  "id": "4",
                  "text": "All of the above",
                  "text_ko": "위의 모든 사항"
                }
              ],
              "correctAnswerId": "4",
              "explanation": "All these annotations can be used for role-based method security, depending on configuration.",
              "explanation_ko": "설정에 따라 이 모든 어노테이션을 역할 기반 메서드 보안에 사용할 수 있습니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html"
            },
            {
              "id": "config-5",
              "type": "multiple-choice",
              "question": "What happens if a user tries to access a protected resource without authentication?",
              "question_ko": "사용자가 인증 없이 보호된 리소스에 접근하려고 하면 어떻게 됩니까?",
              "options": [
                {
                  "id": "1",
                  "text": "404 Not Found"
                },
                {
                  "id": "2",
                  "text": "401 Unauthorized"
                },
                {
                  "id": "3",
                  "text": "403 Forbidden"
                },
                {
                  "id": "4",
                  "text": "500 Internal Server Error"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "Spring Security typically returns 401 Unauthorized or redirects to the login page.",
              "explanation_ko": "스프링 시큐리티는 일반적으로 401 Unauthorized를 반환하거나 로그인 페이지로 리다이렉트합니다.",
              "mdnUrl": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401"
            },
            {
              "id": "config-6",
              "type": "multiple-choice",
              "question": "What does @PostAuthorize do?",
              "question_ko": "@PostAuthorize는 무엇을 합니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Checks permission before method execution",
                  "text_ko": "메서드 실행 전 권한 확인"
                },
                {
                  "id": "2",
                  "text": "Checks permission after method execution",
                  "text_ko": "메서드 실행 후 권한 확인"
                },
                {
                  "id": "3",
                  "text": "Checks authentication only",
                  "text_ko": "인증만 확인"
                },
                {
                  "id": "4",
                  "text": "Logs the method execution",
                  "text_ko": "메서드 실행 기록"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "@PostAuthorize allows the method to execute and then checks if the return value or state is allowed.",
              "explanation_ko": "@PostAuthorize는 메서드를 실행한 다음 반환 값이나 상태가 허용되는지 확인합니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html#_postauthorize"
            },
            {
              "id": "config-7",
              "type": "multiple-choice",
              "question": "How do you disable CSRF protection?",
              "question_ko": "CSRF 보호를 비활성화하려면 어떻게 합니까?",
              "options": [
                {
                  "id": "1",
                  "text": "http.csrf().disable()"
                },
                {
                  "id": "2",
                  "text": "http.noCsrf()"
                },
                {
                  "id": "3",
                  "text": "@EnableCsrf(false)"
                },
                {
                  "id": "4",
                  "text": "security.csrf = false"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "In the SecurityFilterChain configuration, you can call http.csrf(csrf -> csrf.disable()) or http.csrf().disable() (deprecated style).",
              "explanation_ko": "SecurityFilterChain 설정에서 http.csrf(csrf -> csrf.disable()) 또는 http.csrf().disable() (구식 스타일)을 호출할 수 있습니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/servlet/exploits/csrf.html#servlet-csrf-configure-disable"
            },
            {
              "id": "config-8",
              "type": "multiple-choice",
              "question": "What is the purpose of the 'antMatchers' (or 'requestMatchers') method?",
              "question_ko": "'antMatchers'(또는 'requestMatchers') 메서드의 목적은 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "To match Ant build files",
                  "text_ko": "Ant 빌드 파일을 매칭하기 위해"
                },
                {
                  "id": "2",
                  "text": "To match URL patterns for security configuration",
                  "text_ko": "보안 설정을 위한 URL 패턴을 매칭하기 위해"
                },
                {
                  "id": "3",
                  "text": "To match user names",
                  "text_ko": "사용자 이름을 매칭하기 위해"
                },
                {
                  "id": "4",
                  "text": "To match HTTP headers",
                  "text_ko": "HTTP 헤더를 매칭하기 위해"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "It allows configuring security rules for specific URL patterns.",
              "explanation_ko": "특정 URL 패턴에 대한 보안 규칙을 설정할 수 있게 해줍니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/servlet/authorization/authorize-requests.html"
            },
            {
              "id": "config-9",
              "type": "multiple-choice",
              "question": "Which filter handles CORS requests in Spring Security?",
              "question_ko": "스프링 시큐리티에서 CORS 요청을 처리하는 필터는?",
              "options": [
                {
                  "id": "1",
                  "text": "CorsFilter"
                },
                {
                  "id": "2",
                  "text": "OriginFilter"
                },
                {
                  "id": "3",
                  "text": "HttpFilter"
                },
                {
                  "id": "4",
                  "text": "SecurityFilter"
                }
              ],
              "correctAnswerId": "1",
              "explanation": "CorsFilter processes CORS pre-flight requests and adds CORS headers.",
              "explanation_ko": "CorsFilter는 CORS 프리플라이트 요청을 처리하고 CORS 헤더를 추가합니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/servlet/integrations/cors.html"
            },
            {
              "id": "config-10",
              "type": "multiple-choice",
              "question": "What is 'Remember Me' functionality?",
              "question_ko": "'Remember Me' 기능이란 무엇입니까?",
              "options": [
                {
                  "id": "1",
                  "text": "Storing password in browser",
                  "text_ko": "브라우저에 비밀번호 저장"
                },
                {
                  "id": "2",
                  "text": "Remembering the user across sessions using a cookie",
                  "text_ko": "쿠키를 사용하여 세션 간에 사용자를 기억"
                },
                {
                  "id": "3",
                  "text": "Logging user activity",
                  "text_ko": "사용자 활동 기록"
                },
                {
                  "id": "4",
                  "text": "Reminding user to change password",
                  "text_ko": "사용자에게 비밀번호 변경 알림"
                }
              ],
              "correctAnswerId": "2",
              "explanation": "Remember Me authentication allows users to be remembered across sessions, typically via a token in a cookie.",
              "explanation_ko": "Remember Me 인증은 일반적으로 쿠키의 토큰을 통해 세션 간에 사용자를 기억할 수 있게 합니다.",
              "mdnUrl": "https://docs.spring.io/spring-security/reference/servlet/authentication/rememberme.html"
            }
          ]
        }
      ]
    }
  ]
};

