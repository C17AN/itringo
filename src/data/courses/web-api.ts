import type { Course } from '../../types';

export const webApiCourse: Course = {
  id: 'web-api',
  role: 'frontend',
  title: 'Web APIs',
  icon: 'Globe',
  chapters: [
    {
      id: 'api-ch1',
      title: 'Chapter 1: The Essentials',
      units: [
        {
          id: 'api-dom',
          title: 'DOM Fundamentals',
          description: 'Master the Document Object Model structure and manipulation.',
          questions: [
            {
              id: 'q-dom-1',
              type: 'multiple-choice',
              question: 'Which method returns the first element that matches a specified CSS selector?',
              codeSnippet: `const btn = document.____('.submit-btn');`,
              options: [
                { id: 'opt1', text: 'getElementById' },
                { id: 'opt2', text: 'querySelector' },
                { id: 'opt3', text: 'querySelectorAll' },
                { id: 'opt4', text: 'getElementsByClassName' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector'
            },
            {
              id: 'q-dom-2',
              type: 'multiple-choice',
              question: 'How do you create a new HTML element via JavaScript?',
              codeSnippet: `const div = document.____('div');`,
              options: [
                { id: 'opt1', text: 'createElement' },
                { id: 'opt2', text: 'newElement' },
                { id: 'opt3', text: 'appendChild' },
                { id: 'opt4', text: 'makeNode' },
              ],
              correctAnswerId: 'opt1',
              explanation: "In an HTML document, the document.createElement() method creates the HTML element specified by tagName.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement'
            }
          ]
        },
        {
          id: 'api-bom',
          title: 'Browser BOM',
          description: 'Window, Navigator, Location, and History APIs.',
          questions: [
            {
              id: 'q-bom-1',
              type: 'multiple-choice',
              question: 'Which object represents the current URL of the document?',
              options: [
                { id: 'opt1', text: 'window.navigator' },
                { id: 'opt2', text: 'window.location' },
                { id: 'opt3', text: 'document.path' },
                { id: 'opt4', text: 'window.history' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The Window.location read-only property returns a Location object with information about the current location of the document.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/location'
            }
          ]
        },
        {
          id: 'api-events',
          title: 'Events System',
          description: 'Handling user interactions and custom events.',
          questions: [
            {
              id: 'q-evt-1',
              type: 'multiple-choice',
              question: 'How do you prevent the default action of an event (e.g., form submission)?',
              codeSnippet: `form.addEventListener('submit', (e) => {\n  e.____();\n});`,
              options: [
                { id: 'opt1', text: 'stopPropagation' },
                { id: 'opt2', text: 'stopImmediatePropagation' },
                { id: 'opt3', text: 'preventDefault' },
                { id: 'opt4', text: 'cancel' },
              ],
              correctAnswerId: 'opt3',
              explanation: "The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault'
            }
          ]
        },
        {
          id: 'api-timers',
          title: 'Timers & Scheduling',
          description: 'setTimeout, setInterval, and requestAnimationFrame.',
          questions: [
            {
              id: 'q-timer-1',
              type: 'multiple-choice',
              question: 'Which function is best for smooth animations?',
              options: [
                { id: 'opt1', text: 'setTimeout' },
                { id: 'opt2', text: 'setInterval' },
                { id: 'opt3', text: 'requestAnimationFrame' },
                { id: 'opt4', text: 'setImmediate' },
              ],
              correctAnswerId: 'opt3',
              explanation: "The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame'
            }
          ]
        },
        {
          id: 'api-console',
          title: 'Console API',
          description: 'Beyond console.log: table, group, and time.',
          questions: [
            {
              id: 'q-console-1',
              type: 'multiple-choice',
              question: 'Which method displays tabular data as a table?',
              codeSnippet: `const users = [{name: 'A'}, {name: 'B'}];\nconsole.____(users);`,
              options: [
                { id: 'opt1', text: 'log' },
                { id: 'opt2', text: 'dir' },
                { id: 'opt3', text: 'table' },
                { id: 'opt4', text: 'chart' },
              ],
              correctAnswerId: 'opt3',
              explanation: "console.table() displays tabular data as a table.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/console/table'
            }
          ]
        }
      ]
    },
    {
      id: 'api-ch2',
      title: 'Chapter 2: Data & Networking',
      units: [
        {
          id: 'api-fetch',
          title: 'Modern Fetching',
          description: 'Making network requests with the Fetch API.',
          questions: [
            {
              id: 'q-fetch-1',
              type: 'multiple-choice',
              question: 'What does the fetch() function return?',
              options: [
                { id: 'opt1', text: 'The JSON data directly' },
                { id: 'opt2', text: 'A Promise resolving to the Response' },
                { id: 'opt3', text: 'XMLString' },
                { id: 'opt4', text: 'void' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The fetch() method returns a Promise that resolves to the Response to that request, whether it is successful or not.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'
            }
          ]
        },
        {
          id: 'api-url',
          title: 'URL & Parameters',
          description: 'Parsing and modifying URLs easily.',
          questions: [
            {
              id: 'q-url-1',
              type: 'multiple-choice',
              question: 'How do you easily get query parameters from a URL string?',
              codeSnippet: `const params = new ____(window.location.search);`,
              options: [
                { id: 'opt1', text: 'URLDecoder' },
                { id: 'opt2', text: 'QueryString' },
                { id: 'opt3', text: 'URLSearchParams' },
                { id: 'opt4', text: 'Map' },
              ],
              correctAnswerId: 'opt3',
              explanation: "The URLSearchParams interface defines utility methods to work with the query string of a URL.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams'
            }
          ]
        },
        {
          id: 'api-storage',
          title: 'Client Storage',
          description: 'Persisting data with LocalStorage and SessionStorage.',
          questions: [
            {
              id: 'q-store-1',
              type: 'multiple-choice',
              question: 'Which storage persists even after the browser window is closed?',
              options: [
                { id: 'opt1', text: 'sessionStorage' },
                { id: 'opt2', text: 'localStorage' },
                { id: 'opt3', text: 'tempStorage' },
                { id: 'opt4', text: 'cookie' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage'
            }
          ]
        },
        {
          id: 'api-forms',
          title: 'Forms & Files',
          description: 'Handling file uploads and form data.',
          questions: [
            {
              id: 'q-form-1',
              type: 'multiple-choice',
              question: 'Which API is used to construct a set of key/value pairs representing form fields?',
              options: [
                { id: 'opt1', text: 'FormBuilder' },
                { id: 'opt2', text: 'FormData' },
                { id: 'opt3', text: 'MultipartForm' },
                { id: 'opt4', text: 'SubmitEvent' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The FormData interface provides a way to easily construct a set of key/value pairs representing form fields and their values.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/FormData'
            }
          ]
        },
        {
          id: 'api-socket',
          title: 'Real-time Comms',
          description: 'WebSockets and Server-sent Events.',
          questions: [
            {
              id: 'q-sock-1',
              type: 'multiple-choice',
              question: 'Which API enables two-way interactive communication sessions between the user\'s browser and a server?',
              options: [
                { id: 'opt1', text: 'Fetch' },
                { id: 'opt2', text: 'WebSocket' },
                { id: 'opt3', text: 'ServerSentEvents' },
                { id: 'opt4', text: 'Beacon' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket'
            }
          ]
        }
      ]
    },
    {
      id: 'api-ch3',
      title: 'Chapter 3: UI & Interaction',
      units: [
        {
          id: 'api-observer',
          title: 'Viewport Observers',
          description: 'Detecting visibility and resizing efficiently.',
          questions: [
            {
              id: 'q-obs-1',
              type: 'multiple-choice',
              question: 'Which API would you use to implement "Infinite Scroll"?',
              options: [
                { id: 'opt1', text: 'ScrollListener' },
                { id: 'opt2', text: 'MutationObserver' },
                { id: 'opt3', text: 'IntersectionObserver' },
                { id: 'opt4', text: 'ResizeObserver' },
              ],
              correctAnswerId: 'opt3',
              explanation: "The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API'
            }
          ]
        },
        {
          id: 'api-clip',
          title: 'Clipboard & Input',
          description: 'Reading and writing to the system clipboard.',
          questions: [
            {
              id: 'q-clip-1',
              type: 'multiple-choice',
              question: 'How do you write text to the clipboard asynchronously?',
              codeSnippet: `navigator.____.writeText('Hello');`,
              options: [
                { id: 'opt1', text: 'clipboard' },
                { id: 'opt2', text: 'copy' },
                { id: 'opt3', text: 'paste' },
                { id: 'opt4', text: 'data' },
              ],
              correctAnswerId: 'opt1',
              explanation: "The Clipboard API adds the navigator.clipboard property, which returns the Clipboard object used to read and write the clipboard's contents.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API'
            }
          ]
        },
        {
          id: 'api-dnd',
          title: 'Drag & Drop',
          description: 'Native drag and drop interactions.',
          questions: [
            {
              id: 'q-dnd-1',
              type: 'multiple-choice',
              question: 'Which object holds the data being dragged during a drag-and-drop operation?',
              options: [
                { id: 'opt1', text: 'DragObject' },
                { id: 'opt2', text: 'DataTransfer' },
                { id: 'opt3', text: 'TransferData' },
                { id: 'opt4', text: 'Clipboard' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The DataTransfer object is used to hold the data that is being dragged during a drag and drop operation.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer'
            }
          ]
        },
        {
          id: 'api-screen',
          title: 'Screen Control',
          description: 'Fullscreen, PiP, and Wake Lock.',
          questions: [
            {
              id: 'q-scr-1',
              type: 'multiple-choice',
              question: 'Which method requests that the element be displayed in full-screen mode?',
              options: [
                { id: 'opt1', text: 'maximize()' },
                { id: 'opt2', text: 'requestFullscreen()' },
                { id: 'opt3', text: 'enterFullscreen()' },
                { id: 'opt4', text: 'displayFull()' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The Element.requestFullscreen() method issues an asynchronous request to make the element be displayed in full-screen mode.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen'
            }
          ]
        },
        {
          id: 'api-notify',
          title: 'Notifications',
          description: 'System-level notifications and badging.',
          questions: [
            {
              id: 'q-not-1',
              type: 'multiple-choice',
              question: 'Before showing a notification, what must you check?',
              codeSnippet: `if (Notification.____ === 'granted') { ... }`,
              options: [
                { id: 'opt1', text: 'status' },
                { id: 'opt2', text: 'permission' },
                { id: 'opt3', text: 'allowed' },
                { id: 'opt4', text: 'state' },
              ],
              correctAnswerId: 'opt2',
              explanation: "Notifications can only be displayed if the user has granted permission. This is checked via Notification.permission.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Notification/permission'
            }
          ]
        }
      ]
    },
    {
      id: 'api-ch4',
      title: 'Chapter 4: Device & Sensors',
      units: [
        {
          id: 'api-geo',
          title: 'Geolocation',
          description: 'Accessing user location.',
          questions: [
            {
              id: 'q-geo-1',
              type: 'multiple-choice',
              question: 'Which method retrieves the current position of the device?',
              codeSnippet: `navigator.geolocation.____(success, error);`,
              options: [
                { id: 'opt1', text: 'getPosition' },
                { id: 'opt2', text: 'getCurrentPosition' },
                { id: 'opt3', text: 'locate' },
                { id: 'opt4', text: 'fetchPosition' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The Geolocation.getCurrentPosition() method is used to get the current position of the device.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition'
            }
          ]
        },
        {
          id: 'api-vibrate',
          title: 'Hardware Feedback',
          description: 'Vibration API for haptic feedback.',
          questions: [
            {
              id: 'q-vib-1',
              type: 'multiple-choice',
              question: 'How do you trigger a 200ms vibration?',
              codeSnippet: `navigator.____(200);`,
              options: [
                { id: 'opt1', text: 'shake' },
                { id: 'opt2', text: 'haptics' },
                { id: 'opt3', text: 'vibrate' },
                { id: 'opt4', text: 'buzz' },
              ],
              correctAnswerId: 'opt3',
              explanation: "The Navigator.vibrate() method pulses the vibration hardware on the device, if such hardware exists.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate'
            }
          ]
        },
        {
          id: 'api-batt',
          title: 'System Status',
          description: 'Battery Status and Network Information.',
          questions: [
            {
              id: 'q-batt-1',
              type: 'multiple-choice',
              question: 'Which method returns a promise resolving to the BatteryManager?',
              options: [
                { id: 'opt1', text: 'navigator.getBattery()' },
                { id: 'opt2', text: 'navigator.battery' },
                { id: 'opt3', text: 'window.power' },
                { id: 'opt4', text: 'navigator.power' },
              ],
              correctAnswerId: 'opt1',
              explanation: "The getBattery() method provides information about the system's battery charge level and charging status.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getBattery'
            }
          ]
        },
        {
          id: 'api-media',
          title: 'Media Capture',
          description: 'Accessing Camera and Microphone.',
          questions: [
            {
              id: 'q-media-1',
              type: 'multiple-choice',
              question: 'Which API prompts the user for permission to use a media input?',
              options: [
                { id: 'opt1', text: 'navigator.getUserMedia' },
                { id: 'opt2', text: 'navigator.mediaDevices.getUserMedia' },
                { id: 'opt3', text: 'window.camera' },
                { id: 'opt4', text: 'navigator.media' },
              ],
              correctAnswerId: 'opt2',
              explanation: "MediaDevices.getUserMedia() prompts the user for permission to use a media input which produces a MediaStream with tracks containing the requested types of media.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia'
            }
          ]
        },
        {
          id: 'api-sensor',
          title: 'Device Sensors',
          description: 'Orientation and Motion.',
          questions: [
            {
              id: 'q-sens-1',
              type: 'multiple-choice',
              question: 'Which event detects the physical orientation of the device?',
              options: [
                { id: 'opt1', text: 'deviceorientation' },
                { id: 'opt2', text: 'devicemotion' },
                { id: 'opt3', text: 'gyroscope' },
                { id: 'opt4', text: 'rotate' },
              ],
              correctAnswerId: 'opt1',
              explanation: "The deviceorientation event is fired when fresh data is available from an orientation sensor about the current orientation of the device.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/deviceorientation_event'
            }
          ]
        }
      ]
    },
    {
      id: 'api-ch5',
      title: 'Chapter 5: Background & Perf.',
      units: [
        {
          id: 'api-worker',
          title: 'Multithreading',
          description: 'Offloading tasks with Web Workers.',
          questions: [
            {
              id: 'q-work-1',
              type: 'multiple-choice',
              question: 'How do you send a message to a Worker?',
              codeSnippet: `myWorker.____('Hello');`,
              options: [
                { id: 'opt1', text: 'send' },
                { id: 'opt2', text: 'postMessage' },
                { id: 'opt3', text: 'dispatch' },
                { id: 'opt4', text: 'emit' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The postMessage() method of the Worker interface sends a message to the worker's inner scope.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage'
            }
          ]
        },
        {
          id: 'api-service',
          title: 'Offline Web',
          description: 'Service Workers and Cache API.',
          questions: [
            {
              id: 'q-sw-1',
              type: 'multiple-choice',
              question: 'Where do Service Workers act as a proxy?',
              options: [
                { id: 'opt1', text: 'Between browser and network' },
                { id: 'opt2', text: 'Between DOM and JS' },
                { id: 'opt3', text: 'Between server and DB' },
                { id: 'opt4', text: 'Between CPU and GPU' },
              ],
              correctAnswerId: 'opt1',
              explanation: "Service workers essentially act as proxy servers that sit between web applications, the browser, and the network (when available).",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API'
            }
          ]
        },
        {
          id: 'api-perf',
          title: 'Performance',
          description: 'Measuring web performance.',
          questions: [
            {
              id: 'q-perf-1',
              type: 'multiple-choice',
              question: 'Which API provides high-resolution timestamps?',
              options: [
                { id: 'opt1', text: 'Date.now()' },
                { id: 'opt2', text: 'performance.now()' },
                { id: 'opt3', text: 'timestamp()' },
                { id: 'opt4', text: 'clock()' },
              ],
              correctAnswerId: 'opt2',
              explanation: "performance.now() returns a high resolution timestamp in milliseconds. It is more precise than Date.now().",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance/now'
            }
          ]
        },
        {
          id: 'api-vis',
          title: 'Page Lifecycle',
          description: 'Detecting when a page is hidden.',
          questions: [
            {
              id: 'q-vis-1',
              type: 'multiple-choice',
              question: 'Which property tells you if the page is currently visible to the user?',
              options: [
                { id: 'opt1', text: 'document.hidden' },
                { id: 'opt2', text: 'window.visible' },
                { id: 'opt3', text: 'document.visibilityState' },
                { id: 'opt4', text: 'Both A and C' },
              ],
              correctAnswerId: 'opt4',
              explanation: "The Page Visibility API provides events you can watch for to know when a document becomes visible or hidden. document.hidden and visibilityState are key properties.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API'
            }
          ]
        }
      ]
    },
    {
      id: 'api-ch6',
      title: 'Chapter 6: The Cutting Edge',
      units: [
        {
          id: 'api-speech',
          title: 'Web Audio & Speech',
          description: 'Speech Synthesis (TTS) and Audio Context.',
          questions: [
            {
              id: 'q-speech-1',
              type: 'multiple-choice',
              question: 'Which interface is used to make the browser "speak"?',
              options: [
                { id: 'opt1', text: 'SpeechRecognition' },
                { id: 'opt2', text: 'SpeechSynthesis' },
                { id: 'opt3', text: 'VoiceOver' },
                { id: 'opt4', text: 'AudioSpeaker' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The SpeechSynthesis interface of the Web Speech API is the controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis'
            }
          ]
        },
        {
          id: 'api-share',
          title: 'Experimental Gems',
          description: 'Web Share, EyeDropper, and more.',
          questions: [
            {
              id: 'q-share-1',
              type: 'multiple-choice',
              question: 'Which method invokes the native sharing mechanism of the device?',
              options: [
                { id: 'opt1', text: 'navigator.share()' },
                { id: 'opt2', text: 'window.share()' },
                { id: 'opt3', text: 'document.send()' },
                { id: 'opt4', text: 'navigator.send()' },
              ],
              correctAnswerId: 'opt1',
              explanation: "The navigator.share() method invokes the native sharing mechanism of the device.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share'
            },
            {
              id: 'q-eye-1',
              type: 'multiple-choice',
              question: 'Which API allows users to sample colors from their screen?',
              options: [
                { id: 'opt1', text: 'ColorPicker' },
                { id: 'opt2', text: 'EyeDropper' },
                { id: 'opt3', text: 'ScreenColor' },
                { id: 'opt4', text: 'Palette' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The EyeDropper interface provides a mechanism for creating an eyedropper tool. Using this tool, users can sample colors from their screens.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper'
            }
          ]
        },
        {
          id: 'api-comp',
          title: 'Web Components',
          description: 'Custom Elements and Shadow DOM.',
          questions: [
            {
              id: 'q-comp-1',
              type: 'multiple-choice',
              question: 'Which method attaches a shadow DOM tree to the specified element?',
              options: [
                { id: 'opt1', text: 'createShadowRoot()' },
                { id: 'opt2', text: 'attachShadow()' },
                { id: 'opt3', text: 'makeShadow()' },
                { id: 'opt4', text: 'addShadow()' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The Element.attachShadow() method attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow'
            }
          ]
        }
      ]
    }
  ]
};
