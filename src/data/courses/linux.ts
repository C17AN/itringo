import type { Course } from '../../types';

export const linuxCourse: Course = {
  id: 'linux',
  role: 'infra',
  title: 'Linux Pro',
  title_ko: '리눅스 실무',
  icon: 'Terminal',
  chapters: [
    {
      id: 'linux-ch1',
      title: 'File Operations',
      title_ko: '파일 조작 마스터',
      units: [
        {
          id: 'linux-file-1',
          title: 'Basic Operations',
          title_ko: '기본 파일 작업',
          description: 'Copy, Move, Remove, and Create.',
          description_ko: '복사, 이동, 삭제, 생성의 모든 것.',
          questions: [
            {
              id: 'q-cp-1',
              type: 'multiple-choice',
              question: 'Which flag allows `cp` to copy directories recursively?',
              question_ko: '디렉토리를 재귀적으로 복사할 때 `cp` 명령어에 사용하는 옵션은?',
              options: [
                { id: 'opt1', text: '-d' },
                { id: 'opt2', text: '-r' },
                { id: 'opt3', text: '-f' },
                { id: 'opt4', text: '-all' },
              ],
              correctAnswerId: 'opt2',
              explanation: "-r (recursive) is required to copy directories and their contents.",
              explanation_ko: "-r (recursive) 옵션은 디렉토리와 그 안의 모든 내용을 복사할 때 필수입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/cp.1.html'
            },
            {
              id: 'q-rm-1',
              type: 'multiple-choice',
              question: 'How do you force remove a file without prompting?',
              question_ko: '확인 메시지 없이 파일을 강제로 삭제하려면?',
              codeSnippet: 'rm ____ file.txt',
              options: [
                { id: 'opt1', text: '-y' },
                { id: 'opt2', text: '-f' },
                { id: 'opt3', text: '--no-confirm' },
                { id: 'opt4', text: '-s' },
              ],
              correctAnswerId: 'opt2',
              explanation: "-f (force) ignores nonexistent files and arguments, never prompts.",
              explanation_ko: "-f (force) 옵션은 존재하지 않는 파일을 무시하고 삭제 시 확인 메시지를 띄우지 않습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/rm.1.html'
            },
            {
              id: 'q-mkdir-1',
              type: 'multiple-choice',
              question: 'Which flag creates parent directories as needed?',
              question_ko: '상위 디렉토리가 없으면 자동으로 생성해주는 `mkdir` 옵션은?',
              codeSnippet: 'mkdir ____ /path/to/deep/dir',
              options: [
                { id: 'opt1', text: '-p' },
                { id: 'opt2', text: '-r' },
                { id: 'opt3', text: '-f' },
                { id: 'opt4', text: '-all' },
              ],
              correctAnswerId: 'opt1',
              explanation: "-p (parents) no error if existing, make parent directories as needed.",
              explanation_ko: "-p (parents) 옵션은 경로상의 중간 디렉토리가 없으면 에러 없이 생성해줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/mkdir.1.html'
            },
            {
              id: 'q-mv-1',
              type: 'multiple-choice',
              question: 'Does `mv` move directories by default without extra flags?',
              question_ko: '`mv` 명령어는 별도 옵션 없이 디렉토리를 이동시킬 수 있나요?',
              options: [
                { id: 'opt1', text: 'Yes' },
                { id: 'opt2', text: 'No, needs -r' },
                { id: 'opt3', text: 'No, needs -d' },
                { id: 'opt4', text: 'Only if empty' },
              ],
              correctAnswerId: 'opt1',
              explanation: "mv moves files and directories naturally without recursion flags.",
              explanation_ko: "`mv`는 파일과 디렉토리 모두 별도 옵션 없이 이동(또는 이름 변경)할 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/mv.1.html'
            },
            {
              id: 'q-touch-1',
              type: 'multiple-choice',
              question: 'What happens if you `touch` an existing file?',
              question_ko: '이미 존재하는 파일에 `touch` 명령어를 사용하면 어떻게 되나요?',
              options: [
                { id: 'opt1', text: 'File is deleted' },
                { id: 'opt2', text: 'File content is cleared' },
                { id: 'opt3', text: 'Timestamps are updated' },
                { id: 'opt4', text: 'Error occurs' },
              ],
              correctAnswerId: 'opt3',
              explanation: "touch updates the access and modification times of the file. Content remains unchanged.",
              explanation_ko: "`touch`는 파일의 접근 및 수정 시간을 현재 시간으로 업데이트합니다. 내용은 변하지 않습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/touch.1.html'
            },
            {
              id: 'q-ln-1',
              type: 'multiple-choice',
              question: 'Which command creates a symbolic (soft) link?',
              question_ko: '심볼릭 링크(Soft Link)를 생성하는 명령어는?',
              codeSnippet: 'ln ____ target linkname',
              options: [
                { id: 'opt1', text: '-s' },
                { id: 'opt2', text: '-h' },
                { id: 'opt3', text: '-soft' },
                { id: 'opt4', text: '-l' },
              ],
              correctAnswerId: 'opt1',
              explanation: "-s creates a symbolic link. Without it, a hard link is created.",
              explanation_ko: "-s 옵션은 심볼릭 링크를 생성합니다. 옵션이 없으면 하드 링크가 생성됩니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/ln.1.html'
            }
          ]
        },
        {
          id: 'linux-find',
          title: 'Advanced Search',
          title_ko: '고급 검색',
          description: 'Finding files by name, size, time.',
          description_ko: '이름, 크기, 시간으로 파일 찾기.',
          questions: [
            {
              id: 'q-find-name',
              type: 'multiple-choice',
              question: 'How do you find files ending with .log in /var?',
              question_ko: '/var 디렉토리에서 .log로 끝나는 파일을 찾으려면?',
              codeSnippet: 'find /var ____ "*.log"',
              options: [
                { id: 'opt1', text: '-file' },
                { id: 'opt2', text: '-name' },
                { id: 'opt3', text: '-search' },
                { id: 'opt4', text: '-match' },
              ],
              correctAnswerId: 'opt2',
              explanation: "-name matches file names using shell pattern matching.",
              explanation_ko: "-name 옵션은 파일 이름 패턴을 기반으로 검색합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/find.1.html'
            },
            {
              id: 'q-find-size',
              type: 'multiple-choice',
              question: 'How do you find files larger than 100MB?',
              question_ko: '100MB보다 큰 파일을 찾으려면?',
              codeSnippet: 'find . -size ____',
              options: [
                { id: 'opt1', text: '>100M' },
                { id: 'opt2', text: '+100M' },
                { id: 'opt3', text: '100M' },
                { id: 'opt4', text: 'larger 100M' },
              ],
              correctAnswerId: 'opt2',
              explanation: "+100M means larger than 100MB. -100M means smaller.",
              explanation_ko: "+100M은 100MB 초과, -100M은 미만을 의미합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/find.1.html'
            },
            {
              id: 'q-find-mtime',
              type: 'multiple-choice',
              question: 'Find files modified in the last 7 days.',
              question_ko: '최근 7일 이내에 수정된 파일을 찾으려면?',
              codeSnippet: 'find . -mtime ____',
              options: [
                { id: 'opt1', text: '7' },
                { id: 'opt2', text: '+7' },
                { id: 'opt3', text: '-7' },
                { id: 'opt4', text: '<7' },
              ],
              correctAnswerId: 'opt3',
              explanation: "-7 means less than 7 days ago (younger). +7 is older than 7 days.",
              explanation_ko: "-7은 7일 이내(미만)를 의미합니다. +7은 7일보다 오래된 파일을 찾습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/find.1.html'
            },
            {
              id: 'q-find-type',
              type: 'multiple-choice',
              question: 'How do you search ONLY for directories?',
              question_ko: '파일 말고 오직 디렉토리만 검색하려면?',
              codeSnippet: 'find . -type ____',
              options: [
                { id: 'opt1', text: 'd' },
                { id: 'opt2', text: 'f' },
                { id: 'opt3', text: 'dir' },
                { id: 'opt4', text: 'l' },
              ],
              correctAnswerId: 'opt1',
              explanation: "-type d searches for directories. -type f for files.",
              explanation_ko: "-type d는 디렉토리, -type f는 일반 파일을 검색합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/find.1.html'
            },
            {
              id: 'q-find-exec',
              type: 'multiple-choice',
              question: 'Which flag executes a command on each found file?',
              question_ko: '검색된 각 파일에 대해 명령어를 실행하는 옵션은?',
              codeSnippet: 'find . -name "*.tmp" ____ rm {} \\;',
              options: [
                { id: 'opt1', text: '-do' },
                { id: 'opt2', text: '-run' },
                { id: 'opt3', text: '-exec' },
                { id: 'opt4', text: '-action' },
              ],
              correctAnswerId: 'opt3',
              explanation: "-exec executes command; {} is replaced by current file name.",
              explanation_ko: "-exec 옵션은 찾은 파일마다 지정된 명령어를 실행합니다. {}는 파일명으로 치환됩니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/find.1.html'
            }
          ]
        }
      ]
    },
    {
      id: 'linux-ch2',
      title: 'Text Processing',
      title_ko: '텍스트 처리의 신',
      units: [
        {
          id: 'linux-grep',
          title: 'Grep Mastery',
          title_ko: 'Grep 마스터',
          description: 'Searching text efficiently.',
          description_ko: '텍스트 효율적으로 검색하기.',
          questions: [
            {
              id: 'q-grep-i',
              type: 'multiple-choice',
              question: 'Case-insensitive search with grep?',
              question_ko: '대소문자 구분 없이 검색하려면?',
              options: [{ id: 'opt1', text: '-v' }, { id: 'opt2', text: '-i' }, { id: 'opt3', text: '-n' }, { id: 'opt4', text: '-c' }],
              correctAnswerId: 'opt2',
              explanation: "-i (ignore-case) performs case-insensitive matching.",
              explanation_ko: "-i 옵션은 대소문자를 무시하고 매칭합니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Grep'
            },
            {
              id: 'q-grep-v',
              type: 'multiple-choice',
              question: 'Invert match (select non-matching lines)?',
              question_ko: '매칭되지 않는 줄만 선택하려면(반전 검색)?',
              options: [{ id: 'opt1', text: '-v' }, { id: 'opt2', text: '-x' }, { id: 'opt3', text: '-r' }, { id: 'opt4', text: '-i' }],
              correctAnswerId: 'opt1',
              explanation: "-v (invert-match) selects lines that do NOT match.",
              explanation_ko: "-v 옵션은 패턴과 일치하지 않는 줄을 출력합니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Grep'
            },
            {
              id: 'q-grep-r',
              type: 'multiple-choice',
              question: 'Search recursively in all files in a directory?',
              question_ko: '디렉토리 내 모든 파일에서 재귀적으로 검색하려면?',
              options: [{ id: 'opt1', text: '-d' }, { id: 'opt2', text: '-r' }, { id: 'opt3', text: '-a' }, { id: 'opt4', text: '-f' }],
              correctAnswerId: 'opt2',
              explanation: "-r (recursive) searches all files under each directory.",
              explanation_ko: "-r 옵션은 하위 디렉토리를 포함한 모든 파일을 검색합니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Grep'
            },
            {
              id: 'q-grep-count',
              type: 'multiple-choice',
              question: 'Count the number of matching lines?',
              question_ko: '매칭되는 줄의 개수만 세려면?',
              options: [{ id: 'opt1', text: '-c' }, { id: 'opt2', text: '-n' }, { id: 'opt3', text: '-l' }, { id: 'opt4', text: '-count' }],
              correctAnswerId: 'opt1',
              explanation: "-c (count) prints only a count of selected lines per file.",
              explanation_ko: "-c 옵션은 매칭된 줄의 내용을 보여주지 않고 개수만 출력합니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Grep'
            },
            {
              id: 'q-grep-regex',
              type: 'multiple-choice',
              question: 'Which flag enables Extended Regular Expressions (ERE)?',
              question_ko: '확장 정규 표현식(ERE)을 사용하려면?',
              options: [{ id: 'opt1', text: '-e' }, { id: 'opt2', text: '-E' }, { id: 'opt3', text: '-x' }, { id: 'opt4', text: '-P' }],
              correctAnswerId: 'opt2',
              explanation: "-E enables Extended Regex (like egrep).",
              explanation_ko: "-E 옵션은 확장 정규식(+, ?, | 등)을 사용할 수 있게 해줍니다. (egrep과 동일)",
              mdnUrl: 'https://en.wikipedia.org/wiki/Grep'
            }
          ]
        },
        {
          id: 'linux-stream',
          title: 'Stream Editing',
          title_ko: '스트림 편집',
          description: 'Sed, Awk, Cut, Sort, Uniq.',
          description_ko: 'Sed, Awk, Cut, Sort, Uniq 활용.',
          questions: [
            {
              id: 'q-sed-sub',
              type: 'multiple-choice',
              question: 'Replace "foo" with "bar" in input stream?',
              question_ko: '입력 스트림에서 "foo"를 "bar"로 치환하려면?',
              codeSnippet: `sed 's/foo/bar/____'`,
              options: [{ id: 'opt1', text: 'g' }, { id: 'opt2', text: 'a' }, { id: 'opt3', text: 'r' }, { id: 'opt4', text: '1' }],
              correctAnswerId: 'opt1',
              explanation: "'g' flag stands for global replacement (all occurrences in line).",
              explanation_ko: "'g' 플래그가 없으면 줄의 첫 번째 일치 항목만 바뀝니다. 'g'는 전체를 바꿉니다.",
              mdnUrl: 'https://www.gnu.org/software/sed/manual/sed.html'
            },
            {
              id: 'q-awk-col',
              type: 'multiple-choice',
              question: 'Print the last column of each line?',
              question_ko: '각 줄의 마지막 열(column)을 출력하려면?',
              codeSnippet: `awk '{print ____}'`,
              options: [{ id: 'opt1', text: '$0' }, { id: 'opt2', text: '$NF' }, { id: 'opt3', text: '$L' }, { id: 'opt4', text: '$END' }],
              correctAnswerId: 'opt2',
              explanation: "$NF represents the Number of Fields, so $NF is the value of the last field.",
              explanation_ko: "$NF는 필드(열)의 개수를 나타내는 변수이며, 이를 인덱스로 쓰면 마지막 열의 값을 의미합니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/AWK'
            },
            {
              id: 'q-cut-delim',
              type: 'multiple-choice',
              question: 'Cut command: Use a specific delimiter?',
              question_ko: 'cut 명령어에서 구분자(delimiter)를 지정하는 옵션은?',
              options: [{ id: 'opt1', text: '-d' }, { id: 'opt2', text: '-f' }, { id: 'opt3', text: '-s' }, { id: 'opt4', text: '-c' }],
              correctAnswerId: 'opt1',
              explanation: "-d allows specifying a delimiter (default is tab).",
              explanation_ko: "-d 옵션으로 구분자를 지정합니다. (예: -d ':')",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/cut.1.html'
            },
            {
              id: 'q-sort-num',
              type: 'multiple-choice',
              question: 'Sort lines numerically instead of alphabetically?',
              question_ko: '알파벳 순서가 아닌 숫자 크기대로 정렬하려면?',
              options: [{ id: 'opt1', text: '-n' }, { id: 'opt2', text: '-r' }, { id: 'opt3', text: '-num' }, { id: 'opt4', text: '-d' }],
              correctAnswerId: 'opt1',
              explanation: "-n (numeric-sort) compares according to string numerical value.",
              explanation_ko: "-n 옵션은 문자열이 아닌 숫자의 크기로 정렬합니다. (예: 10이 2보다 뒤에 옴)",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/sort.1.html'
            },
            {
              id: 'q-uniq-count',
              type: 'multiple-choice',
              question: 'Count occurrences of duplicate lines?',
              question_ko: '중복된 줄의 개수를 세려면?',
              codeSnippet: 'sort file.txt | uniq ____',
              options: [{ id: 'opt1', text: '-d' }, { id: 'opt2', text: '-c' }, { id: 'opt3', text: '-u' }, { id: 'opt4', text: '-n' }],
              correctAnswerId: 'opt2',
              explanation: "-c prefixes lines by the number of occurrences.",
              explanation_ko: "-c (count) 옵션은 각 줄이 몇 번 등장했는지 숫자를 앞에 붙여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/uniq.1.html'
            }
          ]
        }
      ]
    },
    {
      id: 'linux-ch3',
      title: 'System & Process',
      title_ko: '시스템 & 프로세스',
      units: [
        {
          id: 'linux-sysinfo',
          title: 'System Info',
          title_ko: '시스템 정보',
          description: 'CPU, Memory, Disk info.',
          description_ko: 'CPU, 메모리, 디스크 정보 확인.',
          questions: [
            {
              id: 'q-uname',
              type: 'multiple-choice',
              question: 'Print kernel name and system information?',
              question_ko: '커널 이름과 시스템 정보를 출력하는 명령어는?',
              codeSnippet: 'uname -a',
              options: [{ id: 'opt1', text: 'kernel' }, { id: 'opt2', text: 'uname' }, { id: 'opt3', text: 'sysinfo' }, { id: 'opt4', text: 'ver' }],
              correctAnswerId: 'opt2',
              explanation: "uname prints system information. -a prints all info.",
              explanation_ko: "uname -a는 커널 버전, 아키텍처 등 모든 시스템 정보를 출력합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/uname.1.html'
            },
            {
              id: 'q-free',
              type: 'multiple-choice',
              question: 'Show memory usage in human-readable format?',
              question_ko: '메모리 사용량을 읽기 쉬운 단위(MB, GB)로 보려면?',
              codeSnippet: 'free ____',
              options: [{ id: 'opt1', text: '-h' }, { id: 'opt2', text: '-m' }, { id: 'opt3', text: '-g' }, { id: 'opt4', text: '-a' }],
              correctAnswerId: 'opt1',
              explanation: "-h stands for human-readable (e.g., 1K 234M 2G).",
              explanation_ko: "-h 옵션은 바이트 단위 대신 사람이 읽기 쉬운 단위로 변환해줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/free.1.html'
            },
            {
              id: 'q-df',
              type: 'multiple-choice',
              question: 'Show disk space usage of filesystems?',
              question_ko: '파일 시스템별 디스크 사용량을 확인하는 명령어는?',
              options: [{ id: 'opt1', text: 'du' }, { id: 'opt2', text: 'df' }, { id: 'opt3', text: 'lsblk' }, { id: 'opt4', text: 'fdisk' }],
              correctAnswerId: 'opt2',
              explanation: "df (disk free) reports file system disk space usage.",
              explanation_ko: "df는 마운트된 파일 시스템들의 남은 용량과 사용량을 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/df.1.html'
            },
            {
              id: 'q-du',
              type: 'multiple-choice',
              question: 'Estimate file space usage of a specific directory?',
              question_ko: '특정 디렉토리나 파일이 차지하는 용량을 계산하려면?',
              options: [{ id: 'opt1', text: 'df' }, { id: 'opt2', text: 'du' }, { id: 'opt3', text: 'ls' }, { id: 'opt4', text: 'size' }],
              correctAnswerId: 'opt2',
              explanation: "du (disk usage) estimates file space usage.",
              explanation_ko: "du는 디렉토리를 순회하며 실제 사용 중인 디스크 용량을 합산합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/du.1.html'
            },
            {
              id: 'q-uptime',
              type: 'multiple-choice',
              question: 'Show how long the system has been running?',
              question_ko: '시스템이 부팅 후 얼마나 지났는지(가동 시간) 확인하려면?',
              options: [{ id: 'opt1', text: 'time' }, { id: 'opt2', text: 'uptime' }, { id: 'opt3', text: 'top' }, { id: 'opt4', text: 'w' }],
              correctAnswerId: 'opt2',
              explanation: "uptime tells how long the system has been running, along with load averages.",
              explanation_ko: "uptime은 시스템 가동 시간과 현재 시간, 로드 에버리지를 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/uptime.1.html'
            }
          ]
        },
        {
          id: 'linux-proc-ctrl',
          title: 'Process Control',
          title_ko: '프로세스 제어',
          description: 'Jobs, BG, FG, Nice.',
          description_ko: '백그라운드 작업 및 우선순위.',
          questions: [
            {
              id: 'q-bg',
              type: 'multiple-choice',
              question: 'Send a stopped job to the background?',
              question_ko: '중지된(Stopped) 작업을 백그라운드에서 계속 실행하게 하려면?',
              options: [{ id: 'opt1', text: 'fg' }, { id: 'opt2', text: 'bg' }, { id: 'opt3', text: 'jobs' }, { id: 'opt4', text: 'start' }],
              correctAnswerId: 'opt2',
              explanation: "bg resumes suspended jobs in the background.",
              explanation_ko: "bg 명령어는 Ctrl+Z로 멈춘 작업을 백그라운드 상태로 전환하여 계속 실행합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/bg.1p.html'
            },
            {
              id: 'q-fg',
              type: 'multiple-choice',
              question: 'Bring a background job to the foreground?',
              question_ko: '백그라운드 작업을 포그라운드로 가져오려면?',
              options: [{ id: 'opt1', text: 'bg' }, { id: 'opt2', text: 'fg' }, { id: 'opt3', text: 'top' }, { id: 'opt4', text: 'front' }],
              correctAnswerId: 'opt2',
              explanation: "fg moves a background job to the foreground.",
              explanation_ko: "fg 명령어는 백그라운드에 있는 작업을 다시 터미널 제어권을 가진 포그라운드로 가져옵니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/fg.1p.html'
            },
            {
              id: 'q-nice',
              type: 'multiple-choice',
              question: 'Run a program with modified scheduling priority?',
              question_ko: '프로그램의 스케줄링 우선순위를 조정하여 실행하려면?',
              options: [{ id: 'opt1', text: 'nice' }, { id: 'opt2', text: 'prio' }, { id: 'opt3', text: 'sched' }, { id: 'opt4', text: 'run' }],
              correctAnswerId: 'opt1',
              explanation: "nice runs a program with modified scheduling priority (niceness).",
              explanation_ko: "nice 명령어를 앞에 붙여 실행하면 CPU 우선순위(NI 값)를 조정할 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/nice.1.html'
            },
            {
              id: 'q-nohup',
              type: 'multiple-choice',
              question: 'Run a command immune to hangups (logout)?',
              question_ko: '로그아웃해도 프로세스가 종료되지 않게 하려면?',
              options: [{ id: 'opt1', text: 'keep' }, { id: 'opt2', text: 'nohup' }, { id: 'opt3', text: 'stay' }, { id: 'opt4', text: 'bg' }],
              correctAnswerId: 'opt2',
              explanation: "nohup runs a command immune to hangups, allowing it to run after logout.",
              explanation_ko: "nohup은 터미널 세션이 끊겨도(SIGHUP 시그널 무시) 프로세스가 계속 돌게 합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/nohup.1.html'
            },
            {
              id: 'q-pgrep',
              type: 'multiple-choice',
              question: 'Look up process IDs based on name?',
              question_ko: '이름으로 프로세스 ID(PID)를 검색하려면?',
              options: [{ id: 'opt1', text: 'ps' }, { id: 'opt2', text: 'pgrep' }, { id: 'opt3', text: 'findpid' }, { id: 'opt4', text: 'id' }],
              correctAnswerId: 'opt2',
              explanation: "pgrep looks through the currently running processes and lists the process IDs which match the selection criteria.",
              explanation_ko: "pgrep은 프로세스 이름이나 속성으로 PID를 찾아줍니다. `ps | grep`보다 효율적입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/pgrep.1.html'
            }
          ]
        }
      ]
    },
    {
      id: 'linux-ch4',
      title: 'Networking & Security',
      title_ko: '네트워크 & 보안',
      units: [
        {
          id: 'linux-net',
          title: 'Network Commands',
          title_ko: '네트워크 명령어',
          description: 'Ping, IP, SSH, SCP.',
          description_ko: 'Ping, IP, SSH, SCP 활용.',
          questions: [
            {
              id: 'q-ping-c',
              type: 'multiple-choice',
              question: 'Send only 4 ping packets?',
              question_ko: '핑 패킷을 딱 4번만 보내려면?',
              codeSnippet: 'ping ____ 4 google.com',
              options: [{ id: 'opt1', text: '-c' }, { id: 'opt2', text: '-n' }, { id: 'opt3', text: '-t' }, { id: 'opt4', text: '-p' }],
              correctAnswerId: 'opt1',
              explanation: "-c (count) stops after sending count ECHO_REQUEST packets.",
              explanation_ko: "-c 옵션은 지정된 횟수만큼만 패킷을 보내고 종료합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/ping.8.html'
            },
            {
              id: 'q-ip-addr',
              type: 'multiple-choice',
              question: 'Modern replacement for `ifconfig` to show addresses?',
              question_ko: '`ifconfig`를 대체하는 최신 IP 주소 확인 명령어는?',
              codeSnippet: 'ip ____',
              options: [{ id: 'opt1', text: 'addr' }, { id: 'opt2', text: 'config' }, { id: 'opt3', text: 'show' }, { id: 'opt4', text: 'list' }],
              correctAnswerId: 'opt1',
              explanation: "`ip addr` shows IP addresses on all interfaces.",
              explanation_ko: "`ip addr` (또는 `ip a`)는 인터페이스의 IP 주소를 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/ip-address.8.html'
            },
            {
              id: 'q-ssh-p',
              type: 'multiple-choice',
              question: 'Connect to SSH on a custom port?',
              question_ko: '기본 포트가 아닌 다른 포트로 SSH 접속하려면?',
              codeSnippet: 'ssh ____ 2222 user@host',
              options: [{ id: 'opt1', text: '-P' }, { id: 'opt2', text: '-p' }, { id: 'opt3', text: '-port' }, { id: 'opt4', text: ':2222' }],
              correctAnswerId: 'opt2',
              explanation: "-p specifies the port to connect to on the remote host.",
              explanation_ko: "-p (소문자) 옵션으로 포트 번호를 지정합니다. SCP는 대문자 -P를 씁니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/ssh.1.html'
            },
            {
              id: 'q-scp-r',
              type: 'multiple-choice',
              question: 'Copy a directory recursively using SCP?',
              question_ko: 'SCP로 디렉토리를 통째로 복사하려면?',
              options: [{ id: 'opt1', text: '-r' }, { id: 'opt2', text: '-d' }, { id: 'opt3', text: '-a' }, { id: 'opt4', text: '-R' }],
              correctAnswerId: 'opt1',
              explanation: "-r recursively copies entire directories.",
              explanation_ko: "-r 옵션을 사용하면 디렉토리 내부 파일까지 모두 전송합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/scp.1.html'
            },
            {
              id: 'q-ss-l',
              type: 'multiple-choice',
              question: 'Show listening sockets with `ss`?',
              question_ko: '`ss` 명령어로 리스닝(대기) 중인 소켓만 보려면?',
              codeSnippet: 'ss -t____',
              options: [{ id: 'opt1', text: 'l' }, { id: 'opt2', text: 'a' }, { id: 'opt3', text: 'n' }, { id: 'opt4', text: 's' }],
              correctAnswerId: 'opt1',
              explanation: "-l displays only listening sockets.",
              explanation_ko: "-l 옵션은 현재 연결 대기 중인(Listening) 포트만 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/ss.8.html'
            }
          ]
        },
        {
          id: 'linux-sec',
          title: 'Security Basics',
          title_ko: '보안 기초',
          description: 'Sudo, Passwd, Su.',
          description_ko: 'Sudo, Passwd, Su 사용법.',
          questions: [
            {
              id: 'q-sudo',
              type: 'multiple-choice',
              question: 'Execute a command with superuser privileges?',
              question_ko: '관리자(root) 권한으로 명령어를 실행하려면?',
              options: [{ id: 'opt1', text: 'admin' }, { id: 'opt2', text: 'sudo' }, { id: 'opt3', text: 'root' }, { id: 'opt4', text: 'do' }],
              correctAnswerId: 'opt2',
              explanation: "sudo allows a permitted user to execute a command as the superuser.",
              explanation_ko: "sudo는 일반 사용자가 잠시 관리자 권한을 빌려 명령을 실행하게 해줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/sudo.8.html'
            },
            {
              id: 'q-passwd',
              type: 'multiple-choice',
              question: 'Change user password?',
              question_ko: '사용자 비밀번호를 변경하는 명령어는?',
              options: [{ id: 'opt1', text: 'pwd' }, { id: 'opt2', text: 'passwd' }, { id: 'opt3', text: 'changepass' }, { id: 'opt4', text: 'pass' }],
              correctAnswerId: 'opt2',
              explanation: "passwd updates the user's authentication token(s).",
              explanation_ko: "passwd 명령어는 자신의 비밀번호를 변경하거나, root인 경우 타인의 비밀번호를 변경합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/passwd.1.html'
            },
            {
              id: 'q-su',
              type: 'multiple-choice',
              question: 'Switch to another user account?',
              question_ko: '다른 사용자 계정으로 전환하려면?',
              options: [{ id: 'opt1', text: 'sw' }, { id: 'opt2', text: 'su' }, { id: 'opt3', text: 'switch' }, { id: 'opt4', text: 'login' }],
              correctAnswerId: 'opt2',
              explanation: "su allows you to run commands with a substitute user and group ID.",
              explanation_ko: "su (substitute user)는 다른 사용자로 로그인 쉘을 전환합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/su.1.html'
            }
          ]
        }
      ]
    },
    {
      id: 'linux-ch5',
      title: 'User & Packages',
      title_ko: '사용자 & 패키지',
      units: [
        {
          id: 'linux-user',
          title: 'User Management',
          title_ko: '사용자 관리',
          description: 'Creating and modifying users.',
          description_ko: '사용자 생성 및 수정.',
          questions: [
            {
              id: 'q-useradd',
              type: 'multiple-choice',
              question: 'Create a new user?',
              question_ko: '새로운 사용자를 생성하는 명령어는?',
              options: [{ id: 'opt1', text: 'newuser' }, { id: 'opt2', text: 'useradd' }, { id: 'opt3', text: 'mkuser' }, { id: 'opt4', text: 'add' }],
              correctAnswerId: 'opt2',
              explanation: "useradd creates a new user or updates default new user information.",
              explanation_ko: "useradd(또는 adduser)는 새 사용자 계정을 시스템에 추가합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/useradd.8.html'
            },
            {
              id: 'q-usermod-g',
              type: 'multiple-choice',
              question: 'Add a user to a supplementary group?',
              question_ko: '사용자를 보조 그룹에 추가하려면?',
              codeSnippet: 'usermod -a____ group user',
              options: [{ id: 'opt1', text: 'G' }, { id: 'opt2', text: 'g' }, { id: 'opt3', text: 's' }, { id: 'opt4', text: 'A' }],
              correctAnswerId: 'opt1',
              explanation: "-G specifies supplementary groups. -a appends the user to the groups.",
              explanation_ko: "-G 옵션은 보조 그룹을 지정하며, -a와 함께 써야 기존 그룹에서 빠지지 않고 추가됩니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/usermod.8.html'
            },
            {
              id: 'q-id',
              type: 'multiple-choice',
              question: 'Print user and group IDs?',
              question_ko: '사용자와 그룹 ID 정보를 출력하려면?',
              options: [{ id: 'opt1', text: 'whoami' }, { id: 'opt2', text: 'id' }, { id: 'opt3', text: 'groups' }, { id: 'opt4', text: 'finger' }],
              correctAnswerId: 'opt2',
              explanation: "id prints real and effective user and group IDs.",
              explanation_ko: "id 명령어는 현재 사용자의 UID, GID, 소속 그룹 정보를 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/id.1.html'
            }
          ]
        },
        {
          id: 'linux-pkg',
          title: 'Package Management',
          title_ko: '패키지 관리',
          description: 'Apt and Yum basics.',
          description_ko: 'Apt와 Yum 기초.',
          questions: [
            {
              id: 'q-apt-update',
              type: 'multiple-choice',
              question: 'Update the list of available packages (Debian/Ubuntu)?',
              question_ko: '사용 가능한 패키지 목록을 최신으로 갱신하려면 (Debian/Ubuntu)?',
              codeSnippet: 'apt ____',
              options: [{ id: 'opt1', text: 'upgrade' }, { id: 'opt2', text: 'update' }, { id: 'opt3', text: 'install' }, { id: 'opt4', text: 'refresh' }],
              correctAnswerId: 'opt2',
              explanation: "apt update downloads package information from all configured sources.",
              explanation_ko: "update는 저장소로부터 패키지 목록을 새로 받아옵니다. 실제 설치/업그레이드는 upgrade입니다.",
              mdnUrl: 'https://manpages.debian.org/unstable/apt/apt.8.en.html'
            },
            {
              id: 'q-apt-install',
              type: 'multiple-choice',
              question: 'Install a new package?',
              question_ko: '새 패키지를 설치하려면?',
              codeSnippet: 'apt ____ nginx',
              options: [{ id: 'opt1', text: 'get' }, { id: 'opt2', text: 'add' }, { id: 'opt3', text: 'install' }, { id: 'opt4', text: 'create' }],
              correctAnswerId: 'opt3',
              explanation: "apt install installs the package.",
              explanation_ko: "install 명령어로 패키지를 설치합니다.",
              mdnUrl: 'https://manpages.debian.org/unstable/apt/apt.8.en.html'
            },
            {
              id: 'q-yum-install',
              type: 'multiple-choice',
              question: 'Install a package on RHEL/CentOS?',
              question_ko: 'RHEL/CentOS에서 패키지를 설치하려면?',
              codeSnippet: 'yum ____ httpd',
              options: [{ id: 'opt1', text: 'install' }, { id: 'opt2', text: 'get' }, { id: 'opt3', text: 'add' }, { id: 'opt4', text: 'start' }],
              correctAnswerId: 'opt1',
              explanation: "yum install installs the package.",
              explanation_ko: "yum(또는 dnf) install 명령어로 패키지를 설치합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/yum.8.html'
            }
          ]
        },
        {
          id: 'linux-archive',
          title: 'Archiving',
          title_ko: '아카이빙',
          description: 'Tar, Gzip, Zip.',
          description_ko: 'Tar, Gzip, Zip 압축 관리.',
          questions: [
            {
              id: 'q-tar-x',
              type: 'multiple-choice',
              question: 'Extract a .tar.gz file?',
              question_ko: '.tar.gz 파일을 압축 해제하려면?',
              codeSnippet: 'tar ____ file.tar.gz',
              options: [{ id: 'opt1', text: '-cvf' }, { id: 'opt2', text: '-xvf' }, { id: 'opt3', text: '-tvf' }, { id: 'opt4', text: '-rvf' }],
              correctAnswerId: 'opt2',
              explanation: "-x (extract), -v (verbose), -f (file). -z is often auto-detected or explicit for gzip.",
              explanation_ko: "-x(해제) -v(상세) -f(파일) 옵션을 사용합니다. 보통 tar -xzvf 처럼 z(gzip)옵션을 함께 씁니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/tar.1.html'
            },
            {
              id: 'q-tar-c',
              type: 'multiple-choice',
              question: 'Create a new archive?',
              question_ko: '새로운 아카이브(압축파일)를 생성하려면?',
              codeSnippet: 'tar ____ archive.tar files/',
              options: [{ id: 'opt1', text: '-xvf' }, { id: 'opt2', text: '-cvf' }, { id: 'opt3', text: '-ls' }, { id: 'opt4', text: '-mk' }],
              correctAnswerId: 'opt2',
              explanation: "-c (create) creates a new archive.",
              explanation_ko: "-c(생성) 옵션으로 아카이브를 만듭니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/tar.1.html'
            },
            {
              id: 'q-zip',
              type: 'multiple-choice',
              question: 'Compress directory recursively to zip?',
              question_ko: '디렉토리를 zip으로 재귀적으로 압축하려면?',
              codeSnippet: 'zip ____ archive.zip dir/',
              options: [{ id: 'opt1', text: '-r' }, { id: 'opt2', text: '-d' }, { id: 'opt3', text: '-a' }, { id: 'opt4', text: '-c' }],
              correctAnswerId: 'opt1',
              explanation: "-r recurses into directories.",
              explanation_ko: "-r 옵션을 사용해야 디렉토리 내부 파일까지 포함됩니다.",
              mdnUrl: 'https://linux.die.net/man/1/zip'
            }
          ]
        }
      ]
    }
  ]
};