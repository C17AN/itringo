import type { Course } from '../../types';

export const osCourse: Course = {
  id: 'os',
  role: 'infra',
  title: 'Operating System',
  title_ko: '운영체제',
  icon: 'Cpu', 
  chapters: [
    {
      id: 'os-monitoring',
      title: 'System Monitoring',
      title_ko: '시스템 모니터링',
      units: [
        {
          id: 'os-resources',
          title: 'Resources',
          title_ko: '리소스',
          description: 'Understanding CPU, Memory, and Disk usage.',
          description_ko: 'CPU, 메모리, 디스크 사용량 이해하기',
          questions: [
            {
              id: 'q-load-1',
              type: 'multiple-choice',
              question: 'What does "Load Average" represent in Linux?',
              question_ko: '리눅스에서 "Load Average"는 무엇을 나타내나요?',
              options: [
                { id: 'opt1', text: 'CPU 온도' },
                { id: 'opt2', text: '네트워크 지연' },
                { id: 'opt3', text: '평균 시스템 부하 (CPU/IO 대기 프로세스)' },
                { id: 'opt4', text: '메모리 사용률' },
              ],
              correctAnswerId: 'opt3',
              explanation: "Load average represents the average number of processes that are either in a runnable or uninterruptible state.",
              explanation_ko: "Load Average는 CPU 실행을 기다리거나(Runnable), I/O 대기 중인(Uninterruptible) 프로세스의 평균 개수입니다. 시스템 부하를 판단하는 핵심 지표입니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Load_(computing)'
            },
            {
              id: 'q-disk-1',
              type: 'multiple-choice',
              question: 'Which command shows disk space usage?',
              question_ko: '디스크 공간 사용량을 확인하는 명령어는?',
              codeSnippet: `____ -h`,
              options: [
                { id: 'opt1', text: 'du' },
                { id: 'opt2', text: 'df' },
                { id: 'opt3', text: 'ls' },
                { id: 'opt4', text: 'fdisk' },
              ],
              correctAnswerId: 'opt2',
              explanation: "df (disk free) displays the amount of disk space available on the file system containing each file name argument.",
              explanation_ko: "'df'는 파일 시스템의 남은 용량을 보여줍니다. 반면 'du'는 특정 디렉토리의 용량을 계산합니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Df_(Unix)'
            },
            {
              id: 'q-inode-1',
              type: 'multiple-choice',
              question: 'What happens if you run out of Inodes, even if there is disk space left?',
              question_ko: '디스크 공간이 남아있어도 Inode가 고갈되면 어떤 일이 발생하나요?',
              options: [
                { id: 'opt1', text: '시스템이 빨라짐' },
                { id: 'opt2', text: '새 파일을 생성할 수 없음' },
                { id: 'opt3', text: '오래된 파일이 자동 삭제됨' },
                { id: 'opt4', text: '아무 일도 없음' },
              ],
              correctAnswerId: 'opt2',
              explanation: "Every file requires an inode. If inodes are exhausted, no new files can be created even if disk space exists.",
              explanation_ko: "모든 파일은 하나의 Inode를 가집니다. 작은 파일이 너무 많아 Inode가 고갈되면, 용량이 남아있어도 새 파일을 생성할 수 없습니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Inode'
            }
          ]
        },
        {
          id: 'os-memory',
          title: 'Memory Management',
          title_ko: '메모리 관리',
          description: 'Swap, Buffers, and OOM.',
          description_ko: '스왑, 버퍼, OOM 이해하기',
          questions: [
            {
              id: 'q-swap-1',
              type: 'multiple-choice',
              question: 'What is Swap space used for?',
              question_ko: 'Swap 공간은 무엇을 위해 사용되나요?',
              options: [
                { id: 'opt1', text: 'BIOS 설정 저장' },
                { id: 'opt2', text: '하드 디스크를 이용해 RAM 확장' },
                { id: 'opt3', text: 'CPU 속도 향상' },
                { id: 'opt4', text: '네트워크 버퍼링' },
              ],
              correctAnswerId: 'opt2',
              explanation: "Swap is space on a disk that is used when the amount of physical RAM is full.",
              explanation_ko: "Swap은 물리 RAM이 가득 찼을 때 사용하는 디스크 공간입니다. 메모리가 부족할 때 시스템이 멈추지 않도록 도와줍니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Memory_paging#Unix_and_Unix-like_systems'
            },
            {
              id: 'q-oom-1',
              type: 'multiple-choice',
              question: 'What does the OOM Killer do when the system runs out of memory?',
              question_ko: '시스템 메모리가 완전히 고갈되면 OOM Killer는 무엇을 하나요?',
              options: [
                { id: 'opt1', text: 'RAM 추가' },
                { id: 'opt2', text: '메모리 확보를 위해 프로세스 강제 종료' },
                { id: 'opt3', text: '시스템 즉시 재부팅' },
                { id: 'opt4', text: '메모리 압축' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The Out of Memory (OOM) Killer sacrifices one or more processes to free up memory for the system to keep running.",
              explanation_ko: "OOM Killer는 시스템 전체가 멈추는 것을 막기 위해 메모리 점유율이 높은(또는 우선순위가 낮은) 프로세스를 강제로 종료합니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Out_of_memory'
            }
          ]
        }
      ]
    },
    {
      id: 'os-fs',
      title: 'File Systems',
      title_ko: '파일 시스템',
      units: [
        {
          id: 'os-link',
          title: 'Links',
          title_ko: '링크',
          description: 'Hard links vs Symbolic links.',
          description_ko: '하드 링크와 심볼릭 링크',
          questions: [
            {
              id: 'q-symlink-1',
              type: 'multiple-choice',
              question: 'Which type of link breaks if the original file is deleted?',
              question_ko: '원본 파일이 삭제되면 깨지는 링크 종류는?',
              options: [
                { id: 'opt1', text: 'Hard link', text_ko: '하드 링크' },
                { id: 'opt2', text: 'Symbolic link (Soft link)', text_ko: '심볼릭 링크 (소프트 링크)' },
                { id: 'opt3', text: 'Hyperlink', text_ko: '하이퍼링크' },
                { id: 'opt4', text: 'Deep link', text_ko: '딥 링크' },
              ],
              correctAnswerId: 'opt2',
              explanation: "A symbolic link points to the path of the original file. If the original is moved or deleted, the link becomes broken.",
              explanation_ko: "심볼릭 링크는 윈도우의 바로가기와 비슷하게 원본의 경로를 가리킵니다. 원본이 사라지면 링크는 무효화됩니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Symbolic_link'
            }
          ]
        }
      ]
    }
  ]
};
