import type { Course } from '../../types';

export const webApiCourse: Course = {
  id: 'web-api',
  role: 'frontend',
  title: 'Web APIs',
  title_ko: '웹 API',
  icon: 'Globe',
  chapters: [
    {
      id: 'api-ch1',
      title: 'Chapter 1: The Essentials',
      title_ko: '챕터 1: 필수 요소',
      units: [
        {
          id: 'api-dom',
          title: 'DOM Fundamentals',
          title_ko: 'DOM 기초',
          description: 'Master the Document Object Model structure and manipulation.',
          description_ko: '문서 객체 모델(DOM) 구조와 조작법 마스터하기',
          questions: [
            {
              id: 'q-dom-1',
              type: 'multiple-choice',
              question: 'Which method returns the first element that matches a specified CSS selector?',
              question_ko: '지정된 CSS 선택자와 일치하는 첫 번째 요소를 반환하는 메서드는?',
              codeSnippet: `const btn = document.____('.submit-btn');`,
              options: [
                { id: 'opt1', text: 'getElementById' },
                { id: 'opt2', text: 'querySelector' },
                { id: 'opt3', text: 'querySelectorAll' },
                { id: 'opt4', text: 'getElementsByClassName' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors.",
              explanation_ko: "querySelector() 메서드는 지정된 선택자와 일치하는 문서 내 첫 번째 Element를 반환합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector'
            },
            {
              id: 'q-dom-2',
              type: 'multiple-choice',
              question: 'How do you create a new HTML element via JavaScript?',
              question_ko: '자바스크립트로 새로운 HTML 요소를 생성하는 방법은?',
              codeSnippet: `const div = document.____('div');`,
              options: [
                { id: 'opt1', text: 'createElement' },
                { id: 'opt2', text: 'newElement' },
                { id: 'opt3', text: 'appendChild' },
                { id: 'opt4', text: 'makeNode' },
              ],
              correctAnswerId: 'opt1',
              explanation: "In an HTML document, the document.createElement() method creates the HTML element specified by tagName.",
              explanation_ko: "document.createElement() 메서드는 지정된 태그 이름을 가진 HTML 요소를 생성합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement'
            }
          ]
        },
        {
          id: 'api-bom',
          title: 'Browser BOM',
          title_ko: '브라우저 객체 모델(BOM)',
          description: 'Window, Navigator, Location, and History APIs.',
          description_ko: 'Window, Navigator, Location, History API 이해하기',
          questions: [
            {
              id: 'q-bom-1',
              type: 'multiple-choice',
              question: 'Which object represents the current URL of the document?',
              question_ko: '현재 문서의 URL 정보를 담고 있는 객체는?',
              options: [
                { id: 'opt1', text: 'window.navigator' },
                { id: 'opt2', text: 'window.location' },
                { id: 'opt3', text: 'document.path' },
                { id: 'opt4', text: 'window.history' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The Window.location read-only property returns a Location object with information about the current location of the document.",
              explanation_ko: "window.location 객체는 현재 문서의 주소(URL) 정보를 포함하고 있습니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/location'
            }
          ]
        },
        {
          id: 'api-events',
          title: 'Events System',
          title_ko: '이벤트 시스템',
          description: 'Handling user interactions and custom events.',
          description_ko: '사용자 상호작용 및 커스텀 이벤트 처리',
          questions: [
            {
              id: 'q-evt-1',
              type: 'multiple-choice',
              question: 'How do you prevent the default action of an event (e.g., form submission)?',
              question_ko: '이벤트의 기본 동작(예: 폼 제출)을 막으려면 어떻게 해야 하나요?',
              codeSnippet: `form.addEventListener('submit', (e) => {\n  e.____();\n});`,
              options: [
                { id: 'opt1', text: 'stopPropagation' },
                { id: 'opt2', text: 'stopImmediatePropagation' },
                { id: 'opt3', text: 'preventDefault' },
                { id: 'opt4', text: 'cancel' },
              ],
              correctAnswerId: 'opt3',
              explanation: "The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would.",
              explanation_ko: "preventDefault() 메서드는 브라우저가 해당 이벤트에 대해 수행하는 기본 동작을 실행하지 않도록 합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault'
            }
          ]
        },
        {
          id: 'api-timers',
          title: 'Timers & Scheduling',
          title_ko: '타이머 & 스케줄링',
          description: 'setTimeout, setInterval, and requestAnimationFrame.',
          description_ko: 'setTimeout, setInterval, requestAnimationFrame 활용',
          questions: [
            {
              id: 'q-timer-1',
              type: 'multiple-choice',
              question: 'Which function is best for smooth animations?',
              question_ko: '부드러운 애니메이션 구현에 가장 적합한 함수는?',
              options: [
                { id: 'opt1', text: 'setTimeout' },
                { id: 'opt2', text: 'setInterval' },
                { id: 'opt3', text: 'requestAnimationFrame' },
                { id: 'opt4', text: 'setImmediate' },
              ],
              correctAnswerId: 'opt3',
              explanation: "The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint.",
              explanation_ko: "requestAnimationFrame()은 브라우저의 리페인트 주기에 맞춰 함수를 실행하므로 애니메이션 최적화에 필수적입니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame'
            }
          ]
        },
        {
          id: 'api-console',
          title: 'Console API',
          title_ko: '콘솔 API',
          description: 'Beyond console.log: table, group, and time.',
          description_ko: 'log 외에 table, group, time 등 다양한 기능',
          questions: [
            {
              id: 'q-console-1',
              type: 'multiple-choice',
              question: 'Which method displays tabular data as a table?',
              question_ko: '데이터를 표(Table) 형태로 출력하는 메서드는?',
              codeSnippet: `const users = [{name: 'A'}, {name: 'B'}];\nconsole.____(users);`,
              options: [
                { id: 'opt1', text: 'log' },
                { id: 'opt2', text: 'dir' },
                { id: 'opt3', text: 'table' },
                { id: 'opt4', text: 'chart' },
              ],
              correctAnswerId: 'opt3',
              explanation: "console.table() displays tabular data as a table.",
              explanation_ko: "console.table()은 배열이나 객체 데이터를 보기 좋은 표 형식으로 출력합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/console/table'
            }
          ]
        }
      ]
    },
    {
      id: 'api-ch2',
      title: 'Chapter 2: Data & Networking',
      title_ko: '챕터 2: 데이터 & 네트워킹',
      units: [
        {
          id: 'api-fetch',
          title: 'Modern Fetching',
          title_ko: '최신 데이터 요청',
          description: 'Making network requests with the Fetch API.',
          description_ko: 'Fetch API로 네트워크 요청 보내기',
          questions: [
            {
              id: 'q-fetch-1',
              type: 'multiple-choice',
              question: 'What does the fetch() function return?',
              question_ko: 'fetch() 함수는 무엇을 반환하나요?',
              options: [
                { id: 'opt1', text: 'JSON 데이터' },
                { id: 'opt2', text: 'Response를 담은 Promise' },
                { id: 'opt3', text: 'XML 문자열' },
                { id: 'opt4', text: 'void (반환값 없음)' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The fetch() method returns a Promise that resolves to the Response to that request, whether it is successful or not.",
              explanation_ko: "fetch()는 요청에 대한 응답(Response) 객체로 이행되는 Promise를 반환합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'
            }
          ]
        },
        {
          id: 'api-url',
          title: 'URL & Parameters',
          title_ko: 'URL & 파라미터',
          description: 'Parsing and modifying URLs easily.',
          description_ko: 'URL 파싱 및 수정하기',
          questions: [
            {
              id: 'q-url-1',
              type: 'multiple-choice',
              question: 'How do you easily get query parameters from a URL string?',
              question_ko: 'URL 쿼리 파라미터를 쉽게 파싱하려면?',
              codeSnippet: `const params = new ____(window.location.search);`,
              options: [
                { id: 'opt1', text: 'URLDecoder' },
                { id: 'opt2', text: 'QueryString' },
                { id: 'opt3', text: 'URLSearchParams' },
                { id: 'opt4', text: 'Map' },
              ],
              correctAnswerId: 'opt3',
              explanation: "The URLSearchParams interface defines utility methods to work with the query string of a URL.",
              explanation_ko: "URLSearchParams 인터페이스를 사용하면 쿼리 문자열을 쉽게 다룰 수 있습니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams'
            }
          ]
        },
        {
          id: 'api-storage',
          title: 'Client Storage',
          title_ko: '클라이언트 저장소',
          description: 'Persisting data with LocalStorage and SessionStorage.',
          description_ko: 'LocalStorage와 SessionStorage로 데이터 저장하기',
          questions: [
            {
              id: 'q-store-1',
              type: 'multiple-choice',
              question: 'Which storage persists even after the browser window is closed?',
              question_ko: '브라우저 창을 닫아도 데이터가 유지되는 저장소는?',
              options: [
                { id: 'opt1', text: 'sessionStorage' },
                { id: 'opt2', text: 'localStorage' },
                { id: 'opt3', text: 'tempStorage' },
                { id: 'opt4', text: 'cookie' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.",
              explanation_ko: "localStorage에 저장된 데이터는 만료 기한이 없으며 브라우저를 닫았다 열어도 유지됩니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage'
            }
          ]
        },
        {
          id: 'api-forms',
          title: 'Forms & Files',
          title_ko: '폼 & 파일',
          description: 'Handling file uploads and form data.',
          description_ko: '파일 업로드 및 폼 데이터 처리',
          questions: [
            {
              id: 'q-form-1',
              type: 'multiple-choice',
              question: 'Which API is used to construct a set of key/value pairs representing form fields?',
              question_ko: '폼 필드의 키/값 쌍을 쉽게 구성할 수 있는 API는?',
              options: [
                { id: 'opt1', text: 'FormBuilder' },
                { id: 'opt2', text: 'FormData' },
                { id: 'opt3', text: 'MultipartForm' },
                { id: 'opt4', text: 'SubmitEvent' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values.",
              explanation_ko: "FormData 인터페이스를 사용하면 폼 데이터를 쉽게 구성하여 전송할 수 있습니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/FormData'
            }
          ]
        },
        {
          id: 'api-socket',
          title: 'Real-time Comms',
          title_ko: '실시간 통신',
          description: 'WebSockets and Server-sent Events.',
          description_ko: '웹소켓과 서버 전송 이벤트',
          questions: [
            {
              id: 'q-sock-1',
              type: 'multiple-choice',
              question: 'Which API enables two-way interactive communication sessions between the user\'s browser and a server?',
              question_ko: '브라우저와 서버 간 양방향 대화형 통신을 가능하게 하는 API는?',
              options: [
                { id: 'opt1', text: 'Fetch' },
                { id: 'opt2', text: 'WebSocket' },
                { id: 'opt3', text: 'ServerSentEvents' },
                { id: 'opt4', text: 'Beacon' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server.",
              explanation_ko: "WebSocket API는 서버와 브라우저 간의 지속적인 양방향 연결을 제공합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket'
            }
          ]
        }
      ]
    },
    {
      id: 'api-ch3',
      title: 'Chapter 3: UI & Interaction',
      title_ko: '챕터 3: UI & 인터랙션',
      units: [
        {
          id: 'api-observer',
          title: 'Viewport Observers',
          title_ko: '뷰포트 관찰자',
          description: 'Detecting visibility and resizing efficiently.',
          description_ko: '화면 가시성 및 크기 변경 감지',
          questions: [
            {
              id: 'q-obs-1',
              type: 'multiple-choice',
              question: 'Which API would you use to implement "Infinite Scroll"?',
              question_ko: '"무한 스크롤"을 구현할 때 가장 적합한 API는?',
              options: [
                { id: 'opt1', text: 'ScrollListener' },
                { id: 'opt2', text: 'MutationObserver' },
                { id: 'opt3', text: 'IntersectionObserver' },
                { id: 'opt4', text: 'ResizeObserver' },
              ],
              correctAnswerId: 'opt3',
              explanation: "The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.",
              explanation_ko: "Intersection Observer API는 요소가 뷰포트에 들어오거나 나가는 것을 효율적으로 감지할 수 있어 무한 스크롤 구현에 최적입니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API'
            }
          ]
        },
        {
          id: 'api-clip',
          title: 'Clipboard & Input',
          title_ko: '클립보드 & 입력',
          description: 'Reading and writing to the system clipboard.',
          description_ko: '시스템 클립보드 읽기/쓰기',
          questions: [
            {
              id: 'q-clip-1',
              type: 'multiple-choice',
              question: 'How do you write text to the clipboard asynchronously?',
              question_ko: '비동기적으로 클립보드에 텍스트를 복사하려면?',
              codeSnippet: `navigator.____.writeText('Hello');`,
              options: [
                { id: 'opt1', text: 'clipboard' },
                { id: 'opt2', text: 'copy' },
                { id: 'opt3', text: 'paste' },
                { id: 'opt4', text: 'data' },
              ],
              correctAnswerId: 'opt1',
              explanation: "The Clipboard API adds the navigator.clipboard property, which returns the Clipboard object used to read and write the clipboard's contents.",
              explanation_ko: "navigator.clipboard API를 사용하면 클립보드 내용을 읽거나 쓸 수 있습니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API'
            }
          ]
        },
        {
          id: 'api-dnd',
          title: 'Drag & Drop',
          title_ko: '드래그 앤 드롭',
          description: 'Native drag and drop interactions.',
          description_ko: '네이티브 드래그 앤 드롭 구현',
          questions: [
            {
              id: 'q-dnd-1',
              type: 'multiple-choice',
              question: 'Which object holds the data being dragged during a drag-and-drop operation?',
              question_ko: '드래그 앤 드롭 중 드래그되는 데이터를 담는 객체는?',
              options: [
                { id: 'opt1', text: 'DragObject' },
                { id: 'opt2', text: 'DataTransfer' },
                { id: 'opt3', text: 'TransferData' },
                { id: 'opt4', text: 'Clipboard' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The DataTransfer object is used to hold the data that is being dragged during a drag and drop operation.",
              explanation_ko: "DataTransfer 객체는 드래그 앤 드롭 작업 중에 전송되는 데이터를 보관합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer'
            }
          ]
        },
        {
          id: 'api-screen',
          title: 'Screen Control',
          title_ko: '화면 제어',
          description: 'Fullscreen, PiP, and Wake Lock.',
          description_ko: '전체화면, PiP, 화면 꺼짐 방지',
          questions: [
            {
              id: 'q-scr-1',
              type: 'multiple-choice',
              question: 'Which method requests that the element be displayed in full-screen mode?',
              question_ko: '특정 요소를 전체 화면 모드로 보여달라고 요청하는 메서드는?',
              options: [
                { id: 'opt1', text: 'maximize()' },
                { id: 'opt2', text: 'requestFullscreen()' },
                { id: 'opt3', text: 'enterFullscreen()' },
                { id: 'opt4', text: 'displayFull()' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The Element.requestFullscreen() method issues an asynchronous request to make the element be displayed in full-screen mode.",
              explanation_ko: "requestFullscreen() 메서드는 비동기적으로 전체 화면 모드를 요청합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen'
            }
          ]
        },
        {
          id: 'api-notify',
          title: 'Notifications',
          title_ko: '알림',
          description: 'System-level notifications and badging.',
          description_ko: '시스템 알림 및 배지',
          questions: [
            {
              id: 'q-not-1',
              type: 'multiple-choice',
              question: 'Before showing a notification, what must you check?',
              question_ko: '알림을 표시하기 전에 반드시 확인해야 하는 것은?',
              codeSnippet: `if (Notification.____ === 'granted') { ... }`,
              options: [
                { id: 'opt1', text: 'status' },
                { id: 'opt2', text: 'permission' },
                { id: 'opt3', text: 'allowed' },
                { id: 'opt4', text: 'state' },
              ],
              correctAnswerId: 'opt2',
              explanation: "Notifications can only be displayed if the user has granted permission. This is checked via Notification.permission.",
              explanation_ko: "Notification.permission 속성을 통해 사용자가 알림 권한을 허용했는지 확인해야 합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission'
            }
          ]
        }
      ]
    },
    {
      id: 'api-ch4',
      title: 'Chapter 4: Device & Sensors',
      title_ko: '챕터 4: 기기 & 센서',
      units: [
        {
          id: 'api-geo',
          title: 'Geolocation',
          title_ko: '위치 정보',
          description: 'Accessing user location.',
          description_ko: '사용자 위치 접근하기',
          questions: [
            {
              id: 'q-geo-1',
              type: 'multiple-choice',
              question: 'Which method retrieves the current position of the device?',
              question_ko: '기기의 현재 위치를 가져오는 메서드는?',
              codeSnippet: `navigator.geolocation.____(success, error);`,
              options: [
                { id: 'opt1', text: 'getPosition' },
                { id: 'opt2', text: 'getCurrentPosition' },
                { id: 'opt3', text: 'locate' },
                { id: 'opt4', text: 'fetchPosition' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The Geolocation.getCurrentPosition() method is used to get the current position of the device.",
              explanation_ko: "getCurrentPosition() 메서드를 사용하여 일회성 위치 정보를 가져옵니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition'
            }
          ]
        },
        {
          id: 'api-vibrate',
          title: 'Hardware Feedback',
          title_ko: '하드웨어 피드백',
          description: 'Vibration API for haptic feedback.',
          description_ko: '진동(햅틱) 피드백',
          questions: [
            {
              id: 'q-vib-1',
              type: 'multiple-choice',
              question: 'How do you trigger a 200ms vibration?',
              question_ko: '200ms 동안 진동을 울리게 하려면?',
              codeSnippet: `navigator.____(200);`,
              options: [
                { id: 'opt1', text: 'shake' },
                { id: 'opt2', text: 'haptics' },
                { id: 'opt3', text: 'vibrate' },
                { id: 'opt4', text: 'buzz' },
              ],
              correctAnswerId: 'opt3',
              explanation: "The Navigator.vibrate() method pulses the vibration hardware on the device, if such hardware exists.",
              explanation_ko: "navigator.vibrate() 메서드는 기기의 진동 하드웨어를 작동시킵니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate'
            }
          ]
        },
        {
          id: 'api-batt',
          title: 'System Status',
          title_ko: '시스템 상태',
          description: 'Battery Status and Network Information.',
          description_ko: '배터리 상태 및 네트워크 정보',
          questions: [
            {
              id: 'q-batt-1',
              type: 'multiple-choice',
              question: 'Which method returns a promise resolving to the BatteryManager?',
              question_ko: 'BatteryManager를 반환하는 메서드는?',
              options: [
                { id: 'opt1', text: 'navigator.getBattery()' },
                { id: 'opt2', text: 'navigator.battery' },
                { id: 'opt3', text: 'window.power' },
                { id: 'opt4', text: 'navigator.power' },
              ],
              correctAnswerId: 'opt1',
              explanation: "The getBattery() method provides information about the system's battery charge level and charging status.",
              explanation_ko: "getBattery()는 배터리 충전 레벨과 충전 상태 정보를 제공합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery'
            }
          ]
        },
        {
          id: 'api-media',
          title: 'Media Capture',
          title_ko: '미디어 캡처',
          description: 'Accessing Camera and Microphone.',
          description_ko: '카메라 및 마이크 접근',
          questions: [
            {
              id: 'q-media-1',
              type: 'multiple-choice',
              question: 'Which API prompts the user for permission to use a media input?',
              question_ko: '사용자에게 미디어 입력 장치 사용 권한을 요청하는 API는?',
              options: [
                { id: 'opt1', text: 'navigator.getUserMedia' },
                { id: 'opt2', text: 'navigator.mediaDevices.getUserMedia' },
                { id: 'opt3', text: 'window.camera' },
                { id: 'opt4', text: 'navigator.media' },
              ],
              correctAnswerId: 'opt2',
              explanation: "MediaDevices.getUserMedia() prompts the user for permission to use a media input which produces a MediaStream with tracks containing the requested types of media.",
              explanation_ko: "navigator.mediaDevices.getUserMedia()는 사용자의 권한을 요청하고 미디어 스트림을 반환합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia'
            }
          ]
        },
        {
          id: 'api-sensor',
          title: 'Device Sensors',
          title_ko: '기기 센서',
          description: 'Orientation and Motion.',
          description_ko: '방향 및 동작 감지',
          questions: [
            {
              id: 'q-sens-1',
              type: 'multiple-choice',
              question: 'Which event detects the physical orientation of the device?',
              question_ko: '기기의 물리적 방향을 감지하는 이벤트는?',
              options: [
                { id: 'opt1', text: 'deviceorientation' },
                { id: 'opt2', text: 'devicemotion' },
                { id: 'opt3', text: 'gyroscope' },
                { id: 'opt4', text: 'rotate' },
              ],
              correctAnswerId: 'opt1',
              explanation: "The deviceorientation event is fired when fresh data is available from an orientation sensor about the current orientation of the device.",
              explanation_ko: "deviceorientation 이벤트는 기기의 현재 방향에 대한 센서 데이터가 있을 때 발생합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/deviceorientation_event'
            }
          ]
        }
      ]
    },
    {
      id: 'api-ch5',
      title: 'Chapter 5: Background & Perf.',
      title_ko: '챕터 5: 백그라운드 & 성능',
      units: [
        {
          id: 'api-worker',
          title: 'Multithreading',
          title_ko: '멀티스레딩',
          description: 'Offloading tasks with Web Workers.',
          description_ko: 'Web Worker로 작업 분산하기',
          questions: [
            {
              id: 'q-work-1',
              type: 'multiple-choice',
              question: 'How do you send a message to a Worker?',
              question_ko: '워커(Worker)에게 메시지를 보내는 메서드는?',
              codeSnippet: `myWorker.____('Hello');`,
              options: [
                { id: 'opt1', text: 'send' },
                { id: 'opt2', text: 'postMessage' },
                { id: 'opt3', text: 'dispatch' },
                { id: 'opt4', text: 'emit' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The postMessage() method of the Worker interface sends a message to the worker's inner scope.",
              explanation_ko: "postMessage() 메서드를 사용하여 워커의 내부 스코프로 메시지를 전송합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage'
            }
          ]
        },
        {
          id: 'api-service',
          title: 'Offline Web',
          title_ko: '오프라인 웹',
          description: 'Service Workers and Cache API.',
          description_ko: '서비스 워커와 캐시 API',
          questions: [
            {
              id: 'q-sw-1',
              type: 'multiple-choice',
              question: 'Where do Service Workers act as a proxy?',
              question_ko: '서비스 워커는 어디 사이에서 프록시 역할을 하나요?',
              options: [
                { id: 'opt1', text: '브라우저와 네트워크 사이' },
                { id: 'opt2', text: 'DOM과 JS 사이' },
                { id: 'opt3', text: '서버와 DB 사이' },
                { id: 'opt4', text: 'CPU와 GPU 사이' },
              ],
              correctAnswerId: 'opt1',
              explanation: "Service workers essentially act as proxy servers that sit between web applications, the browser, and the network (when available).",
              explanation_ko: "서비스 워커는 웹 앱, 브라우저, 네트워크 사이에서 프록시 서버 역할을 하여 오프라인 기능을 지원합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API'
            }
          ]
        },
        {
          id: 'api-perf',
          title: 'Performance',
          title_ko: '성능',
          description: 'Measuring web performance.',
          description_ko: '웹 성능 측정하기',
          questions: [
            {
              id: 'q-perf-1',
              type: 'multiple-choice',
              question: 'Which API provides high-resolution timestamps?',
              question_ko: '고해상도 타임스탬프를 제공하는 API는?',
              options: [
                { id: 'opt1', text: 'Date.now()' },
                { id: 'opt2', text: 'performance.now()' },
                { id: 'opt3', text: 'timestamp()' },
                { id: 'opt4', text: 'clock()' },
              ],
              correctAnswerId: 'opt2',
              explanation: "performance.now() returns a high resolution timestamp in milliseconds. It is more precise than Date.now().",
              explanation_ko: "performance.now()는 Date.now()보다 훨씬 정밀한 고해상도 시간을 반환합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance/now'
            }
          ]
        },
        {
          id: 'api-vis',
          title: 'Page Lifecycle',
          title_ko: '페이지 생명주기',
          description: 'Detecting when a page is hidden.',
          description_ko: '페이지 가시성 감지',
          questions: [
            {
              id: 'q-vis-1',
              type: 'multiple-choice',
              question: 'Which property tells you if the page is currently visible to the user?',
              question_ko: '현재 페이지가 사용자에게 보이는지 여부를 알려주는 속성은?',
              options: [
                { id: 'opt1', text: 'document.hidden' },
                { id: 'opt2', text: 'window.visible' },
                { id: 'opt3', text: 'document.visibilityState' },
                { id: 'opt4', text: 'A와 C 둘 다' },
              ],
              correctAnswerId: 'opt4',
              explanation: "The Page Visibility API provides events you can watch for to know when a document becomes visible or hidden. document.hidden and visibilityState are key properties.",
              explanation_ko: "document.hidden(boolean)과 document.visibilityState('visible', 'hidden' 등)를 통해 페이지 가시성을 확인할 수 있습니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API'
            }
          ]
        }
      ]
    },
    {
      id: 'api-ch6',
      title: 'Chapter 6: The Cutting Edge',
      title_ko: '챕터 6: 최신 기술',
      units: [
        {
          id: 'api-speech',
          title: 'Web Audio & Speech',
          title_ko: '웹 오디오 & 음성',
          description: 'Speech Synthesis (TTS) and Audio Context.',
          description_ko: '음성 합성(TTS)과 오디오 컨텍스트',
          questions: [
            {
              id: 'q-speech-1',
              type: 'multiple-choice',
              question: 'Which interface is used to make the browser "speak"?',
              question_ko: '브라우저가 텍스트를 읽게(말하게) 만드는 인터페이스는?',
              options: [
                { id: 'opt1', text: 'SpeechRecognition' },
                { id: 'opt2', text: 'SpeechSynthesis' },
                { id: 'opt3', text: 'VoiceOver' },
                { id: 'opt4', text: 'AudioSpeaker' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The SpeechSynthesis interface of the Web Speech API is the controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands.",
              explanation_ko: "SpeechSynthesis 인터페이스를 통해 브라우저의 음성 합성 서비스를 제어할 수 있습니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis'
            }
          ]
        },
        {
          id: 'api-share',
          title: 'Experimental Gems',
          title_ko: '실험적 기능',
          description: 'Web Share, EyeDropper, and more.',
          description_ko: '웹 공유, 스포이드 등',
          questions: [
            {
              id: 'q-share-1',
              type: 'multiple-choice',
              question: 'Which method invokes the native sharing mechanism of the device?',
              question_ko: '기기의 네이티브 공유 창을 띄우는 메서드는?',
              options: [
                { id: 'opt1', text: 'navigator.share()' },
                { id: 'opt2', text: 'window.share()' },
                { id: 'opt3', text: 'document.send()' },
                { id: 'opt4', text: 'navigator.send()' },
              ],
              correctAnswerId: 'opt1',
              explanation: "The navigator.share() method invokes the native sharing mechanism of the device.",
              explanation_ko: "navigator.share() 메서드는 모바일 등에서 네이티브 공유 기능을 호출합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share'
            },
            {
              id: 'q-eye-1',
              type: 'multiple-choice',
              question: 'Which API allows users to sample colors from their screen?',
              question_ko: '사용자가 화면에서 색상을 추출할 수 있게 해주는 API는?',
              options: [
                { id: 'opt1', text: 'ColorPicker' },
                { id: 'opt2', text: 'EyeDropper' },
                { id: 'opt3', text: 'ScreenColor' },
                { id: 'opt4', text: 'Palette' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The EyeDropper interface provides a mechanism for creating an eyedropper tool. Using this tool, users can sample colors from their screens.",
              explanation_ko: "EyeDropper API를 사용하면 브라우저 내장 스포이드 도구를 사용할 수 있습니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper'
            }
          ]
        },
        {
          id: 'api-comp',
          title: 'Web Components',
          title_ko: '웹 컴포넌트',
          description: 'Custom Elements and Shadow DOM.',
          description_ko: '커스텀 엘리먼트와 섀도우 돔',
          questions: [
            {
              id: 'q-comp-1',
              type: 'multiple-choice',
              question: 'Which method attaches a shadow DOM tree to the specified element?',
              question_ko: '지정된 요소에 Shadow DOM 트리를 부착하는 메서드는?',
              options: [
                { id: 'opt1', text: 'createShadowRoot()' },
                { id: 'opt2', text: 'attachShadow()' },
                { id: 'opt3', text: 'makeShadow()' },
                { id: 'opt4', text: 'addShadow()' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The Element.attachShadow() method attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.",
              explanation_ko: "attachShadow() 메서드는 요소에 캡슐화된 섀도우 돔을 생성하고 부착합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow'
            }
          ]
        }
      ]
    }
  ]
};
