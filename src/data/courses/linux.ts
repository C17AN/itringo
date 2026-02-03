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
        },
        {
          id: 'linux-permissions',
          title: 'Permissions & Ownership',
          title_ko: '권한 및 소유권',
          description: 'Chmod, Chown, Umask.',
          description_ko: '파일 권한과 소유권 관리.',
          questions: [
            {
              id: 'q-chmod-num',
              type: 'multiple-choice',
              question: 'Which permission set is represented by 755?',
              question_ko: '숫자 755가 나타내는 권한은?',
              options: [
                { id: 'opt1', text: 'rwxr-xr-x' },
                { id: 'opt2', text: 'rwxrwxrwx' },
                { id: 'opt3', text: 'rw-r--r--' },
                { id: 'opt4', text: 'r-xr-x---' },
              ],
              correctAnswerId: 'opt1',
              explanation: "7 (rwx) for owner, 5 (r-x) for group, 5 (r-x) for others.",
              explanation_ko: "7(rwx) 소유자, 5(r-x) 그룹, 5(r-x) 기타 사용자 권한을 의미합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/chmod.1.html'
            },
            {
              id: 'q-chmod-sym',
              type: 'multiple-choice',
              question: 'Add execute permission for the owner?',
              question_ko: '소유자에게 실행(execute) 권한을 추가하려면?',
              codeSnippet: 'chmod ____ file.sh',
              options: [
                { id: 'opt1', text: 'u+x' },
                { id: 'opt2', text: 'g+x' },
                { id: 'opt3', text: 'o+x' },
                { id: 'opt4', text: 'a+x' },
              ],
              correctAnswerId: 'opt1',
              explanation: "u stands for user (owner), + adds permission, x is execute.",
              explanation_ko: "u는 소유자(user), +는 권한 추가, x는 실행 권한을 의미합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/chmod.1.html'
            },
            {
              id: 'q-chown',
              type: 'multiple-choice',
              question: 'Change file owner to "dave"?',
              question_ko: '파일 소유자를 "dave"로 변경하려면?',
              codeSnippet: '____ dave file.txt',
              options: [
                { id: 'opt1', text: 'chmod' },
                { id: 'opt2', text: 'chown' },
                { id: 'opt3', text: 'chgrp' },
                { id: 'opt4', text: 'passwd' },
              ],
              correctAnswerId: 'opt2',
              explanation: "chown changes file owner and group.",
              explanation_ko: "chown (change owner) 명령어로 파일의 소유자를 변경합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/chown.1.html'
            },
            {
              id: 'q-chown-recursive',
              type: 'multiple-choice',
              question: 'Change owner of directory and contents recursively?',
              question_ko: '디렉토리와 그 안의 모든 파일 소유자를 변경하려면?',
              codeSnippet: 'chown ____ dave:dev /var/www',
              options: [
                { id: 'opt1', text: '-a' },
                { id: 'opt2', text: '-p' },
                { id: 'opt3', text: '-R' },
                { id: 'opt4', text: '-r' },
              ],
              correctAnswerId: 'opt3',
              explanation: "-R (capital) operates on files and directories recursively.",
              explanation_ko: "-R (대문자) 옵션은 하위 디렉토리와 파일까지 모두 변경합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/chown.1.html'
            },
            {
              id: 'q-umask-def',
              type: 'multiple-choice',
              question: 'What does `umask` determine?',
              question_ko: '`umask`는 무엇을 결정하나요?',
              options: [
                { id: 'opt1', text: 'Default file permissions' },
                { id: 'opt2', text: 'File size limit' },
                { id: 'opt3', text: 'User password expiry' },
                { id: 'opt4', text: 'Process priority' },
              ],
              correctAnswerId: 'opt1',
              explanation: "umask sets the default permissions for newly created files and directories.",
              explanation_ko: "umask는 새로 생성되는 파일과 디렉토리의 기본 권한을 결정(제한)합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/umask.1p.html'
            },
            {
              id: 'q-sticky-bit',
              type: 'multiple-choice',
              question: 'Which directory typically uses the Sticky Bit?',
              question_ko: 'Sticky Bit가 주로 사용되는 디렉토리는?',
              options: [
                { id: 'opt1', text: '/etc' },
                { id: 'opt2', text: '/tmp' },
                { id: 'opt3', text: '/bin' },
                { id: 'opt4', text: '/home' },
              ],
              correctAnswerId: 'opt2',
              explanation: "Sticky bit on /tmp allows users to create files but only delete their own.",
              explanation_ko: "/tmp 디렉토리는 누구나 파일을 만들 수 있지만, 자신의 파일만 삭제할 수 있도록 Sticky Bit가 설정됩니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Sticky_bit'
            },
            {
              id: 'q-setuid',
              type: 'multiple-choice',
              question: 'What does SetUID do on an executable?',
              question_ko: '실행 파일에 SetUID가 설정되면 어떤 효과가 있나요?',
              options: [
                { id: 'opt1', text: 'Runs as the user who executed it' },
                { id: 'opt2', text: 'Runs with the privileges of the file owner' },
                { id: 'opt3', text: 'Runs faster' },
                { id: 'opt4', text: 'Runs in background' },
              ],
              correctAnswerId: 'opt2',
              explanation: "SetUID executes the file with the permissions of the file owner (e.g., passwd).",
              explanation_ko: "SetUID가 설정된 파일은 실행 시 실행한 사람이 아닌 파일 소유자의 권한으로 실행됩니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Setuid'
            },
             {
              id: 'q-ls-perm-str',
              type: 'multiple-choice',
              question: 'What does "d" indicate in "drwxr-xr-x"?',
              question_ko: '"drwxr-xr-x"에서 맨 앞의 "d"는 무엇을 의미하나요?',
              options: [
                { id: 'opt1', text: 'Delete' },
                { id: 'opt2', text: 'Directory' },
                { id: 'opt3', text: 'Data' },
                { id: 'opt4', text: 'Default' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The first character indicates file type. 'd' is directory, '-' is file.",
              explanation_ko: "맨 앞자리는 파일 타입을 나타냅니다. 'd'는 디렉토리, '-'는 일반 파일입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/ls.1.html'
            },
             {
              id: 'q-chmod-remove',
              type: 'multiple-choice',
              question: 'Remove write permission for group and others?',
              question_ko: '그룹과 기타 사용자의 쓰기(write) 권한을 제거하려면?',
              codeSnippet: 'chmod ____ file',
              options: [
                { id: 'opt1', text: 'go-w' },
                { id: 'opt2', text: 'u-w' },
                { id: 'opt3', text: 'a-w' },
                { id: 'opt4', text: 'go+w' },
              ],
              correctAnswerId: 'opt1',
              explanation: "go (group, others) -w (remove write).",
              explanation_ko: "g(그룹)와 o(기타)에서 w(쓰기) 권한을 뺍니다(-).",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/chmod.1.html'
            },
            {
              id: 'q-file-type',
              type: 'multiple-choice',
              question: 'Determine file type regardless of extension?',
              question_ko: '확장자와 관계없이 파일의 종류를 확인하는 명령어는?',
              options: [
                { id: 'opt1', text: 'type' },
                { id: 'opt2', text: 'check' },
                { id: 'opt3', text: 'file' },
                { id: 'opt4', text: 'ls' },
              ],
              correctAnswerId: 'opt3',
              explanation: "file command determines file type by examining magic numbers/content.",
              explanation_ko: "file 명령어는 파일의 내용을 분석하여 종류를 알려줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/file.1.html'
            },
             {
              id: 'q-stat',
              type: 'multiple-choice',
              question: 'Show detailed file status (inode, timestamps)?',
              question_ko: '파일의 Inode, 상세 시간 정보 등을 확인하려면?',
              options: [
                { id: 'opt1', text: 'ls -l' },
                { id: 'opt2', text: 'stat' },
                { id: 'opt3', text: 'info' },
                { id: 'opt4', text: 'attr' },
              ],
              correctAnswerId: 'opt2',
              explanation: "stat displays detailed status of file system objects.",
              explanation_ko: "stat 명령어는 파일 크기, 권한, 시간(Access, Modify, Change) 등 상세 정보를 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/stat.1.html'
            },
            {
              id: 'q-chgrp',
              type: 'multiple-choice',
              question: 'Change group ownership of a file?',
              question_ko: '파일의 소유 그룹을 변경하는 명령어는?',
              options: [
                { id: 'opt1', text: 'groupmod' },
                { id: 'opt2', text: 'chgrp' },
                { id: 'opt3', text: 'chown -g' },
                { id: 'opt4', text: 'newgrp' },
              ],
              correctAnswerId: 'opt2',
              explanation: "chgrp changes the group ownership of files.",
              explanation_ko: "chgrp 명령어로 파일의 그룹 소유권을 변경할 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/chgrp.1.html'
            },
            {
              id: 'q-chmod-all',
              type: 'multiple-choice',
              question: 'Give read/write/execute to everyone (dangerous)?',
              question_ko: '모든 사용자에게 읽기/쓰기/실행 권한을 부여하는(위험한) 숫자는?',
              options: [
                { id: 'opt1', text: '755' },
                { id: 'opt2', text: '777' },
                { id: 'opt3', text: '666' },
                { id: 'opt4', text: '700' },
              ],
              correctAnswerId: 'opt2',
              explanation: "777 gives rwx permission to user, group, and others.",
              explanation_ko: "777은 소유자, 그룹, 기타 모든 사용자에게 모든 권한을 부여합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/chmod.1.html'
            },
             {
              id: 'q-umask-calc',
              type: 'multiple-choice',
              question: 'If umask is 022, what is the default permission for a file?',
              question_ko: 'umask가 022일 때, 생성되는 파일의 기본 권한은?',
              options: [
                { id: 'opt1', text: '777 (rwxrwxrwx)' },
                { id: 'opt2', text: '644 (rw-r--r--)' },
                { id: 'opt3', text: '755 (rwxr-xr-x)' },
                { id: 'opt4', text: '666 (rw-rw-rw-)' },
              ],
              correctAnswerId: 'opt2',
              explanation: "Base 666 - 022 = 644 (rw-r--r--). Files don't get execute by default.",
              explanation_ko: "파일 기본값 666에서 022를 빼면 644가 됩니다. (파일은 기본적으로 실행 권한 없음)",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/umask.1p.html'
            },
            {
              id: 'q-ls-hidden',
              type: 'multiple-choice',
              question: 'List hidden files (starting with dot)?',
              question_ko: '숨김 파일(점으로 시작하는)을 포함하여 목록을 보려면?',
              codeSnippet: 'ls ____',
              options: [
                { id: 'opt1', text: '-h' },
                { id: 'opt2', text: '-a' },
                { id: 'opt3', text: '-l' },
                { id: 'opt4', text: '-d' },
              ],
              correctAnswerId: 'opt2',
              explanation: "-a (all) do not ignore entries starting with .",
              explanation_ko: "-a 옵션은 숨김 파일을 포함한 모든 파일을 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/ls.1.html'
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
        },
        {
          id: 'linux-text-view',
          title: 'Text Viewing & Manipulation',
          title_ko: '텍스트 보기 및 조작',
          description: 'Head, Tail, Less, Wc, Diff.',
          description_ko: '파일 내용 확인 및 간단한 조작.',
          questions: [
            {
              id: 'q-cat',
              type: 'multiple-choice',
              question: 'Concatenate and print files to standard output?',
              question_ko: '파일 내용을 순서대로 출력(연결)하는 명령어는?',
              options: [
                { id: 'opt1', text: 'dog' },
                { id: 'opt2', text: 'cat' },
                { id: 'opt3', text: 'print' },
                { id: 'opt4', text: 'echo' },
              ],
              correctAnswerId: 'opt2',
              explanation: "cat (concatenate) reads files and writes them to standard output.",
              explanation_ko: "cat은 파일을 연결하여 표준 출력으로 내보냅니다. 내용을 볼 때 가장 많이 씁니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/cat.1.html'
            },
            {
              id: 'q-tac',
              type: 'multiple-choice',
              question: 'Print files in reverse order (last line first)?',
              question_ko: '파일 내용을 마지막 줄부터 거꾸로 출력하려면?',
              options: [
                { id: 'opt1', text: 'rev' },
                { id: 'opt2', text: 'tac' },
                { id: 'opt3', text: 'back' },
                { id: 'opt4', text: 'reverse' },
              ],
              correctAnswerId: 'opt2',
              explanation: "tac is the reverse of cat.",
              explanation_ko: "tac은 cat을 거꾸로 뒤집은 명령어로, 마지막 줄부터 첫 줄 순서로 출력합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/tac.1.html'
            },
            {
              id: 'q-head-default',
              type: 'multiple-choice',
              question: 'How many lines does `head` show by default?',
              question_ko: '`head` 명령어는 기본적으로 몇 줄을 보여주나요?',
              options: [
                { id: 'opt1', text: '5' },
                { id: 'opt2', text: '10' },
                { id: 'opt3', text: '20' },
                { id: 'opt4', text: '15' },
              ],
              correctAnswerId: 'opt2',
              explanation: "head prints the first 10 lines of each file to standard output.",
              explanation_ko: "head는 기본적으로 파일의 첫 10줄을 출력합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/head.1.html'
            },
            {
              id: 'q-head-n',
              type: 'multiple-choice',
              question: 'Show the first 20 lines of a file?',
              question_ko: '파일의 첫 20줄을 보려면?',
              codeSnippet: 'head ____ 20 file.txt',
              options: [
                { id: 'opt1', text: '-l' },
                { id: 'opt2', text: '-n' },
                { id: 'opt3', text: '-c' },
                { id: 'opt4', text: '-x' },
              ],
              correctAnswerId: 'opt2',
              explanation: "-n specifies the number of lines to print.",
              explanation_ko: "-n 옵션 뒤에 줄 수를 지정합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/head.1.html'
            },
            {
              id: 'q-tail-f',
              type: 'multiple-choice',
              question: 'Follow the growth of a log file in real-time?',
              question_ko: '로그 파일이 갱신되는 것을 실시간으로 지켜보려면?',
              codeSnippet: 'tail ____ access.log',
              options: [
                { id: 'opt1', text: '-r' },
                { id: 'opt2', text: '-f' },
                { id: 'opt3', text: '-live' },
                { id: 'opt4', text: '-w' },
              ],
              correctAnswerId: 'opt2',
              explanation: "-f (follow) outputs appended data as the file grows.",
              explanation_ko: "-f 옵션은 파일에 내용이 추가될 때마다 실시간으로 출력해줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/tail.1.html'
            },
            {
              id: 'q-less-nav',
              type: 'multiple-choice',
              question: 'Which key exits `less`?',
              question_ko: '`less` 명령어로 파일을 보다가 빠져나오려면 누르는 키는?',
              options: [
                { id: 'opt1', text: 'ESC' },
                { id: 'opt2', text: 'q' },
                { id: 'opt3', text: 'Ctrl+C' },
                { id: 'opt4', text: 'exit' },
              ],
              correctAnswerId: 'opt2',
              explanation: "q (quit) exits less.",
              explanation_ko: "q 키를 누르면 less 뷰어에서 빠져나옵니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/less.1.html'
            },
            {
              id: 'q-wc-l',
              type: 'multiple-choice',
              question: 'Count the number of lines in a file?',
              question_ko: '파일의 줄(line) 수를 세려면?',
              codeSnippet: 'wc ____ file.txt',
              options: [
                { id: 'opt1', text: '-c' },
                { id: 'opt2', text: '-l' },
                { id: 'opt3', text: '-w' },
                { id: 'opt4', text: '-n' },
              ],
              correctAnswerId: 'opt2',
              explanation: "-l prints the newline counts.",
              explanation_ko: "-l (lines) 옵션은 줄 바꿈 문자의 개수를 셉니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/wc.1.html'
            },
             {
              id: 'q-tr-d',
              type: 'multiple-choice',
              question: 'Delete specific characters from input?',
              question_ko: '입력에서 특정 문자를 삭제하려면?',
              codeSnippet: 'cat file | tr ____ "a"',
              options: [
                { id: 'opt1', text: '-d' },
                { id: 'opt2', text: '-r' },
                { id: 'opt3', text: '-x' },
                { id: 'opt4', text: '-del' },
              ],
              correctAnswerId: 'opt1',
              explanation: "-d (delete) deletes characters in set1 from input.",
              explanation_ko: "-d 옵션은 지정한 문자 집합을 입력에서 삭제합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/tr.1.html'
            },
            {
              id: 'q-tr-upper',
              type: 'multiple-choice',
              question: 'Convert lowercase to uppercase?',
              question_ko: '소문자를 대문자로 변환하려면?',
              codeSnippet: 'tr "a-z" ____',
              options: [
                { id: 'opt1', text: '"A-Z"' },
                { id: 'opt2', text: '"upper"' },
                { id: 'opt3', text: '-u' },
                { id: 'opt4', text: '"0-9"' },
              ],
              correctAnswerId: 'opt1',
              explanation: "tr replaces characters in set1 with set2. a-z to A-Z converts case.",
              explanation_ko: "tr 'a-z' 'A-Z'는 소문자를 매칭되는 대문자로 치환합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/tr.1.html'
            },
             {
              id: 'q-paste',
              type: 'multiple-choice',
              question: 'Merge lines of files side-by-side?',
              question_ko: '두 파일의 내용을 옆으로(열 방향으로) 합치려면?',
              options: [
                { id: 'opt1', text: 'cat' },
                { id: 'opt2', text: 'join' },
                { id: 'opt3', text: 'paste' },
                { id: 'opt4', text: 'merge' },
              ],
              correctAnswerId: 'opt3',
              explanation: "paste writes lines consisting of the sequentially corresponding lines from each file.",
              explanation_ko: "paste 명령어는 파일들의 내용을 탭(기본값)으로 구분하여 옆으로 붙입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/paste.1.html'
            },
             {
              id: 'q-split',
              type: 'multiple-choice',
              question: 'Split a large file into smaller pieces?',
              question_ko: '대용량 파일을 작은 조각 파일들로 나누려면?',
              options: [
                { id: 'opt1', text: 'cut' },
                { id: 'opt2', text: 'split' },
                { id: 'opt3', text: 'break' },
                { id: 'opt4', text: 'dd' },
              ],
              correctAnswerId: 'opt2',
              explanation: "split splits a file into pieces.",
              explanation_ko: "split 명령어는 파일을 지정된 크기나 줄 수 단위로 쪼갭니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/split.1.html'
            },
             {
              id: 'q-nl',
              type: 'multiple-choice',
              question: 'Number lines of files?',
              question_ko: '파일 내용에 줄 번호를 붙여서 출력하려면?',
              options: [
                { id: 'opt1', text: 'cat -n' },
                { id: 'opt2', text: 'nl' },
                { id: 'opt3', text: 'wc -l' },
                { id: 'opt4', text: 'num' },
              ],
              correctAnswerId: 'opt2',
              explanation: "nl numbers lines of files. cat -n also works, but nl has more formatting options.",
              explanation_ko: "nl 명령어는 줄 번호를 붙여 출력합니다. (cat -n과 유사하지만 더 많은 옵션 제공)",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/nl.1.html'
            },
            {
              id: 'q-diff',
              type: 'multiple-choice',
              question: 'Compare files line by line?',
              question_ko: '두 파일의 차이점을 줄 단위로 비교하려면?',
              options: [
                { id: 'opt1', text: 'cmp' },
                { id: 'opt2', text: 'comm' },
                { id: 'opt3', text: 'diff' },
                { id: 'opt4', text: 'ls' },
              ],
              correctAnswerId: 'opt3',
              explanation: "diff compares files line by line.",
              explanation_ko: "diff 명령어는 두 파일의 차이점을 분석하여 출력합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/diff.1.html'
            },
            {
              id: 'q-wc-c',
              type: 'multiple-choice',
              question: 'Count the number of bytes?',
              question_ko: '파일의 바이트 수를 세려면?',
              codeSnippet: 'wc ____ file',
              options: [
                { id: 'opt1', text: '-b' },
                { id: 'opt2', text: '-c' },
                { id: 'opt3', text: '-n' },
                { id: 'opt4', text: '-z' },
              ],
              correctAnswerId: 'opt2',
              explanation: "-c counts bytes.",
              explanation_ko: "-c 옵션은 바이트 수를 셉니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/wc.1.html'
            },
             {
              id: 'q-less-search',
              type: 'multiple-choice',
              question: 'Search forward in `less`?',
              question_ko: '`less`에서 내용을 검색하려면 어떤 키를 누르나요?',
              options: [
                { id: 'opt1', text: '/' },
                { id: 'opt2', text: '?' },
                { id: 'opt3', text: 's' },
                { id: 'opt4', text: 'f' },
              ],
              correctAnswerId: 'opt1',
              explanation: "/ starts a forward search. ? starts a backward search.",
              explanation_ko: "/ 키를 누르고 검색어를 입력하면 아래 방향으로 검색합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/less.1.html'
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
        },
        {
          id: 'linux-sys-mon',
          title: 'System Monitoring',
          title_ko: '시스템 모니터링',
          description: 'Top, Ps, Kill, Watch.',
          description_ko: '시스템 상태 및 프로세스 감시.',
          questions: [
            {
              id: 'q-top',
              type: 'multiple-choice',
              question: 'Display Linux processes in real-time?',
              question_ko: '실시간으로 시스템 프로세스 상태를 모니터링하는 명령어는?',
              options: [
                { id: 'opt1', text: 'ps' },
                { id: 'opt2', text: 'top' },
                { id: 'opt3', text: 'show' },
                { id: 'opt4', text: 'mon' },
              ],
              correctAnswerId: 'opt2',
              explanation: "top displays Linux processes.",
              explanation_ko: "top은 시스템의 CPU, 메모리 사용량과 프로세스 목록을 실시간으로 갱신하며 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/top.1.html'
            },
            {
              id: 'q-ps-aux',
              type: 'multiple-choice',
              question: 'List all running processes with user info (BSD style)?',
              question_ko: '현재 실행 중인 모든 프로세스를 사용자 정보와 함께 보려면?',
              codeSnippet: 'ps ____',
              options: [
                { id: 'opt1', text: '-all' },
                { id: 'opt2', text: 'aux' },
                { id: 'opt3', text: '-lx' },
                { id: 'opt4', text: 'list' },
              ],
              correctAnswerId: 'opt2',
              explanation: "aux lists all processes for all users. a=all terminals, u=user oriented, x=non-terminal.",
              explanation_ko: "aux 옵션은 모든 사용자의 프로세스를 상세하게 보여줍니다. (관습적으로 많이 사용)",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/ps.1.html'
            },
            {
              id: 'q-kill-sigkill',
              type: 'multiple-choice',
              question: 'Force kill a process (SIGKILL)?',
              question_ko: '프로세스를 강제로 즉시 종료(SIGKILL)하려면 어떤 시그널 번호를 쓰나요?',
              codeSnippet: 'kill -____ PID',
              options: [
                { id: 'opt1', text: '15' },
                { id: 'opt2', text: '9' },
                { id: 'opt3', text: '1' },
                { id: 'opt4', text: '2' },
              ],
              correctAnswerId: 'opt2',
              explanation: "-9 (SIGKILL) forces process termination immediately. Cannot be ignored.",
              explanation_ko: "-9번 시그널(SIGKILL)은 프로세스가 정리할 틈도 주지 않고 강제 종료시킵니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/kill.1.html'
            },
            {
              id: 'q-kill-sigterm',
              type: 'multiple-choice',
              question: 'Default signal sent by `kill`?',
              question_ko: '`kill` 명령어가 기본적으로 보내는 종료 시그널은?',
              options: [
                { id: 'opt1', text: 'SIGKILL (9)' },
                { id: 'opt2', text: 'SIGTERM (15)' },
                { id: 'opt3', text: 'SIGINT (2)' },
                { id: 'opt4', text: 'SIGHUP (1)' },
              ],
              correctAnswerId: 'opt2',
              explanation: "SIGTERM (15) asks the process to stop nicely. It gives the process a chance to clean up.",
              explanation_ko: "옵션 없이 kill을 쓰면 SIGTERM(15)을 보내 정상 종료를 요청합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/kill.1.html'
            },
            {
              id: 'q-lsof',
              type: 'multiple-choice',
              question: 'List open files by processes?',
              question_ko: '프로세스가 열고 있는 파일(네트워크 포트 포함) 목록을 보려면?',
              options: [
                { id: 'opt1', text: 'open' },
                { id: 'opt2', text: 'lsof' },
                { id: 'opt3', text: 'lsfile' },
                { id: 'opt4', text: 'files' },
              ],
              correctAnswerId: 'opt2',
              explanation: "lsof stands for List Open Files.",
              explanation_ko: "lsof 명령어는 현재 시스템에서 열려 있는 모든 파일의 목록을 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/lsof.8.html'
            },
            {
              id: 'q-watch',
              type: 'multiple-choice',
              question: 'Execute a command periodically?',
              question_ko: '명령어를 주기적으로 반복 실행하여 결과를 지켜보려면?',
              options: [
                { id: 'opt1', text: 'repeat' },
                { id: 'opt2', text: 'loop' },
                { id: 'opt3', text: 'watch' },
                { id: 'opt4', text: 'cron' },
              ],
              correctAnswerId: 'opt3',
              explanation: "watch executes a program periodically, showing output fullscreen.",
              explanation_ko: "watch 명령어는 지정된 간격(기본 2초)으로 명령어를 실행하고 결과를 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/watch.1.html'
            },
            {
              id: 'q-killall',
              type: 'multiple-choice',
              question: 'Kill processes by name?',
              question_ko: 'PID가 아닌 프로세스 이름으로 종료하려면?',
              options: [
                { id: 'opt1', text: 'pkill' },
                { id: 'opt2', text: 'killall' },
                { id: 'opt3', text: 'killname' },
                { id: 'opt4', text: 'Both 1 and 2' },
              ],
              correctAnswerId: 'opt4',
              explanation: "Both killall and pkill can kill processes by name.",
              explanation_ko: "killall과 pkill 모두 이름을 기반으로 프로세스를 종료할 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/killall.1.html'
            },
            {
              id: 'q-pstree',
              type: 'multiple-choice',
              question: 'Display processes as a tree structure?',
              question_ko: '프로세스들의 부모-자식 관계를 트리 형태로 보려면?',
              options: [
                { id: 'opt1', text: 'ps --tree' },
                { id: 'opt2', text: 'pstree' },
                { id: 'opt3', text: 'tree' },
                { id: 'opt4', text: 'top -t' },
              ],
              correctAnswerId: 'opt2',
              explanation: "pstree displays a tree of processes.",
              explanation_ko: "pstree는 실행 중인 프로세스들을 계층적 트리 구조로 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/pstree.1.html'
            },
            {
              id: 'q-vmstat',
              type: 'multiple-choice',
              question: 'Report virtual memory statistics?',
              question_ko: '가상 메모리, 페이징, CPU 활동 통계를 보려면?',
              options: [
                { id: 'opt1', text: 'memstat' },
                { id: 'opt2', text: 'vmstat' },
                { id: 'opt3', text: 'freestat' },
                { id: 'opt4', text: 'procstat' },
              ],
              correctAnswerId: 'opt2',
              explanation: "vmstat reports information about processes, memory, paging, block IO, traps, and cpu activity.",
              explanation_ko: "vmstat은 시스템 전반의 성능 지표(메모리, 스왑, IO, CPU 등)를 요약해 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/vmstat.8.html'
            },
            {
              id: 'q-htop',
              type: 'multiple-choice',
              question: 'Interactive process viewer (colorful top)?',
              question_ko: 'top보다 더 직관적이고 다채로운 인터페이스를 제공하는 도구는?',
              options: [
                { id: 'opt1', text: 'itop' },
                { id: 'opt2', text: 'htop' },
                { id: 'opt3', text: 'ctop' },
                { id: 'opt4', text: 'gtop' },
              ],
              correctAnswerId: 'opt2',
              explanation: "htop is an interactive process viewer for Unix systems.",
              explanation_ko: "htop은 상하 스크롤, 마우스 지원 등 사용자 편의성이 강화된 top의 대안입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/htop.1.html'
            },
             {
              id: 'q-ps-ef',
              type: 'multiple-choice',
              question: 'What format does `ps -ef` use?',
              question_ko: '`ps -ef` 명령어는 어떤 스타일의 문법인가요?',
              options: [
                { id: 'opt1', text: 'BSD' },
                { id: 'opt2', text: 'System V (Standard)' },
                { id: 'opt3', text: 'GNU' },
                { id: 'opt4', text: 'POSIX' },
              ],
              correctAnswerId: 'opt2',
              explanation: "-ef options are standard syntax (System V). aux is BSD style.",
              explanation_ko: "-e (every), -f (full) 옵션은 표준 유닉스(System V) 스타일입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/ps.1.html'
            },
            {
              id: 'q-proc-fs',
              type: 'multiple-choice',
              question: 'Virtual filesystem containing system/process info?',
              question_ko: '커널 및 프로세스 정보가 파일 형태로 매핑된 가상 파일 시스템은?',
              options: [
                { id: 'opt1', text: '/sys' },
                { id: 'opt2', text: '/dev' },
                { id: 'opt3', text: '/proc' },
                { id: 'opt4', text: '/run' },
              ],
              correctAnswerId: 'opt3',
              explanation: "/proc is a pseudo-filesystem which provides an interface to kernel data structures.",
              explanation_ko: "/proc 디렉토리에는 시스템 실행 상태 정보가 파일처럼 존재합니다. (예: /proc/cpuinfo)",
              mdnUrl: 'https://man7.org/linux/man-pages/man5/proc.5.html'
            },
            {
              id: 'q-iostat',
              type: 'multiple-choice',
              question: 'Report CPU and I/O statistics?',
              question_ko: '디스크 입출력(I/O) 부하와 CPU 통계를 확인하려면?',
              options: [
                { id: 'opt1', text: 'vmstat' },
                { id: 'opt2', text: 'iostat' },
                { id: 'opt3', text: 'diskstats' },
                { id: 'opt4', text: 'iotop' },
              ],
              correctAnswerId: 'opt2',
              explanation: "iostat is used for monitoring system input/output device loading.",
              explanation_ko: "iostat은 디스크 장치의 입출력 성능을 모니터링할 때 유용합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/iostat.1.html'
            },
            {
              id: 'q-free-swap',
              type: 'multiple-choice',
              question: 'Which column in `free` shows swap usage?',
              question_ko: '`free` 명령 결과에서 스왑 메모리 사용량을 보여주는 행은?',
              options: [
                { id: 'opt1', text: 'Mem' },
                { id: 'opt2', text: 'Swap' },
                { id: 'opt3', text: 'Buff/Cache' },
                { id: 'opt4', text: 'Available' },
              ],
              correctAnswerId: 'opt2',
              explanation: "The Swap row shows swap memory statistics.",
              explanation_ko: "Swap 행에 스왑 메모리의 전체, 사용량, 남은 용량이 표시됩니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/free.1.html'
            },
            {
              id: 'q-pid',
              type: 'multiple-choice',
              question: 'What allows unique identification of a process?',
              question_ko: '프로세스를 유일하게 식별하는 번호는?',
              options: [
                { id: 'opt1', text: 'UID' },
                { id: 'opt2', text: 'GID' },
                { id: 'opt3', text: 'PID' },
                { id: 'opt4', text: 'PPID' },
              ],
              correctAnswerId: 'opt3',
              explanation: "PID (Process ID) uniquely identifies a process.",
              explanation_ko: "PID (Process ID)는 운영체제가 프로세스를 식별하는 고유 번호입니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Process_identifier'
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
        },
        {
          id: 'linux-net-trouble',
          title: 'Network Troubleshooting',
          title_ko: '네트워크 트러블슈팅',
          description: 'Netstat, Dig, Curl, Nc.',
          description_ko: '네트워크 상태 진단 및 디버깅.',
          questions: [
            {
              id: 'q-netstat-listen',
              type: 'multiple-choice',
              question: 'Show all listening ports (TCP/UDP) numerically?',
              question_ko: '현재 열려 있는(Listening) TCP/UDP 포트를 숫자로 확인하려면?',
              codeSnippet: 'netstat -____',
              options: [
                { id: 'opt1', text: 'a' },
                { id: 'opt2', text: 'tuln' },
                { id: 'opt3', text: 'r' },
                { id: 'opt4', text: 'i' },
              ],
              correctAnswerId: 'opt2',
              explanation: "-t (TCP) -u (UDP) -l (listening) -n (numeric).",
              explanation_ko: "-tuln 옵션은 TCP, UDP 중 리스닝 상태인 것을 호스트명 대신 포트 번호로 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/netstat.8.html'
            },
            {
              id: 'q-dig',
              type: 'multiple-choice',
              question: 'Perform DNS lookup for domain info?',
              question_ko: '도메인의 DNS 레코드 정보를 자세히 조회하려면?',
              options: [
                { id: 'opt1', text: 'ping' },
                { id: 'opt2', text: 'dig' },
                { id: 'opt3', text: 'dns' },
                { id: 'opt4', text: 'whois' },
              ],
              correctAnswerId: 'opt2',
              explanation: "dig (domain information groper) performs DNS lookups.",
              explanation_ko: "dig 명령어는 DNS 서버에 질의하여 상세한 응답 정보를 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/dig.1.html'
            },
            {
              id: 'q-curl-head',
              type: 'multiple-choice',
              question: 'Fetch only HTTP headers?',
              question_ko: '웹 서버의 응답 헤더(Header)만 확인하려면?',
              codeSnippet: 'curl ____ http://example.com',
              options: [
                { id: 'opt1', text: '-H' },
                { id: 'opt2', text: '-I' },
                { id: 'opt3', text: '-v' },
                { id: 'opt4', text: '-O' },
              ],
              correctAnswerId: 'opt2',
              explanation: "-I (head) fetches the HTTP-header only.",
              explanation_ko: "-I (대문자 i) 옵션은 HEAD 요청을 보내 헤더 정보만 받아옵니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/curl.1.html'
            },
            {
              id: 'q-wget',
              type: 'multiple-choice',
              question: 'Download a file from URL?',
              question_ko: 'URL에서 파일을 다운로드하는 명령어는?',
              options: [
                { id: 'opt1', text: 'get' },
                { id: 'opt2', text: 'wget' },
                { id: 'opt3', text: 'download' },
                { id: 'opt4', text: 'fetch' },
              ],
              correctAnswerId: 'opt2',
              explanation: "wget retrieves files using HTTP, HTTPS, FTP.",
              explanation_ko: "wget은 비대화형 네트워크 다운로더입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/wget.1.html'
            },
            {
              id: 'q-traceroute',
              type: 'multiple-choice',
              question: 'Trace the path packets take to a host?',
              question_ko: '목적지까지 패킷이 거쳐가는 경로(라우터)를 추적하려면?',
              options: [
                { id: 'opt1', text: 'ping' },
                { id: 'opt2', text: 'traceroute' },
                { id: 'opt3', text: 'route' },
                { id: 'opt4', text: 'path' },
              ],
              correctAnswerId: 'opt2',
              explanation: "traceroute prints the route packets take to the network host.",
              explanation_ko: "traceroute는 목적지까지 가는 경로상의 홉(Hop)들을 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/traceroute.8.html'
            },
            {
              id: 'q-nc-listen',
              type: 'multiple-choice',
              question: 'Listen on a specific port using Netcat?',
              question_ko: 'Netcat(nc)으로 특정 포트를 열고 대기하려면?',
              codeSnippet: 'nc ____ 1234',
              options: [
                { id: 'opt1', text: '-l' },
                { id: 'opt2', text: '-p' },
                { id: 'opt3', text: '-s' },
                { id: 'opt4', text: '-w' },
              ],
              correctAnswerId: 'opt1',
              explanation: "-l is used to listen for incoming connections.",
              explanation_ko: "-l (listen) 옵션은 서버 모드로 동작하여 연결을 기다립니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/nc.1.html'
            },
            {
              id: 'q-nslookup',
              type: 'multiple-choice',
              question: 'Interactive tool for querying DNS servers?',
              question_ko: 'DNS 서버에 질의하기 위한 대화형 도구는?',
              options: [
                { id: 'opt1', text: 'dnsquery' },
                { id: 'opt2', text: 'nslookup' },
                { id: 'opt3', text: 'host' },
                { id: 'opt4', text: 'ip' },
              ],
              correctAnswerId: 'opt2',
              explanation: "nslookup is a program to query Internet name servers interactively.",
              explanation_ko: "nslookup은 전통적인 DNS 질의 도구입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/nslookup.1.html'
            },
            {
              id: 'q-ss-compare',
              type: 'multiple-choice',
              question: 'Which tool is the modern replacement for netstat?',
              question_ko: 'netstat을 대체하는 최신 소켓 분석 도구는?',
              options: [
                { id: 'opt1', text: 'ip' },
                { id: 'opt2', text: 'ss' },
                { id: 'opt3', text: 'sock' },
                { id: 'opt4', text: 'tcpdump' },
              ],
              correctAnswerId: 'opt2',
              explanation: "ss is used to dump socket statistics and is faster/more informative than netstat.",
              explanation_ko: "ss(Socket Statistics)는 netstat보다 빠르고 더 많은 정보를 제공합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/ss.8.html'
            },
            {
              id: 'q-hostname-i',
              type: 'multiple-choice',
              question: 'Display all network addresses of the host?',
              question_ko: '호스트의 모든 IP 주소를 확인하려면?',
              codeSnippet: 'hostname ____',
              options: [
                { id: 'opt1', text: '-a' },
                { id: 'opt2', text: '-I' },
                { id: 'opt3', text: '-ip' },
                { id: 'opt4', text: '-d' },
              ],
              correctAnswerId: 'opt2',
              explanation: "-I displays all network addresses of the host.",
              explanation_ko: "-I (대문자) 옵션은 호스트에 할당된 IP 주소들을 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/hostname.1.html'
            },
            {
              id: 'q-ip-route',
              type: 'multiple-choice',
              question: 'Show routing table using `ip` command?',
              question_ko: '`ip` 명령어로 라우팅 테이블을 확인하려면?',
              codeSnippet: 'ip ____',
              options: [
                { id: 'opt1', text: 'route' },
                { id: 'opt2', text: 'r' },
                { id: 'opt3', text: 'table' },
                { id: 'opt4', text: 'net' },
              ],
              correctAnswerId: 'opt1',
              explanation: "ip route shows the routing table.",
              explanation_ko: "ip route (또는 ip r) 명령어로 라우팅 테이블을 볼 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/ip-route.8.html'
            },
             {
              id: 'q-curl-output',
              type: 'multiple-choice',
              question: 'Save curl output to a file?',
              question_ko: 'curl 결과를 파일로 저장하려면?',
              codeSnippet: 'curl ____ file.txt url',
              options: [
                { id: 'opt1', text: '-s' },
                { id: 'opt2', text: '-o' },
                { id: 'opt3', text: '-f' },
                { id: 'opt4', text: '-w' },
              ],
              correctAnswerId: 'opt2',
              explanation: "-o (output) writes output to <file>.",
              explanation_ko: "-o 옵션 뒤에 저장할 파일명을 지정합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/curl.1.html'
            },
            {
              id: 'q-tracepath',
              type: 'multiple-choice',
              question: 'Trace path without requiring superuser privileges?',
              question_ko: '관리자 권한 없이 경로 추적(MTU 탐색)을 할 수 있는 도구는?',
              options: [
                { id: 'opt1', text: 'traceroute' },
                { id: 'opt2', text: 'tracepath' },
                { id: 'opt3', text: 'ping' },
                { id: 'opt4', text: 'route' },
              ],
              correctAnswerId: 'opt2',
              explanation: "tracepath traces path to destination discovering MTU along this path.",
              explanation_ko: "tracepath는 traceroute와 비슷하지만 권한이 필요 없고 MTU도 확인합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/tracepath.8.html'
            },
             {
              id: 'q-ping-flood',
              type: 'multiple-choice',
              question: 'Send packets as fast as possible (Flood ping)?',
              question_ko: '가능한 빨리 패킷을 보내는(Flood) 핑 옵션은? (Root 필요)',
              codeSnippet: 'ping ____',
              options: [
                { id: 'opt1', text: '-f' },
                { id: 'opt2', text: '-fast' },
                { id: 'opt3', text: '-s' },
                { id: 'opt4', text: '-A' },
              ],
              correctAnswerId: 'opt1',
              explanation: "-f (flood) sends packets as fast as they come back or 100 times per second.",
              explanation_ko: "-f 옵션은 네트워크 부하 테스트 등에 사용되는 플러드 핑을 보냅니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/ping.8.html'
            },
            {
              id: 'q-route-gateway',
              type: 'multiple-choice',
              question: 'Add a default gateway?',
              question_ko: '기본 게이트웨이를 추가하는 명령어는?',
              codeSnippet: 'ip route add default ____ 192.168.1.1',
              options: [
                { id: 'opt1', text: 'via' },
                { id: 'opt2', text: 'gw' },
                { id: 'opt3', text: 'to' },
                { id: 'opt4', text: 'at' },
              ],
              correctAnswerId: 'opt1',
              explanation: "ip route add default via <IP>.",
              explanation_ko: "ip route 명령어에서는 'via' 키워드를 사용하여 게이트웨이를 지정합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/ip-route.8.html'
            },
            {
              id: 'q-tcpdump',
              type: 'multiple-choice',
              question: 'Capture packets from a network interface?',
              question_ko: '네트워크 인터페이스의 패킷을 캡처하는 도구는?',
              options: [
                { id: 'opt1', text: 'cap' },
                { id: 'opt2', text: 'tcpdump' },
                { id: 'opt3', text: 'shark' },
                { id: 'opt4', text: 'sniff' },
              ],
              correctAnswerId: 'opt2',
              explanation: "tcpdump dumps traffic on a network.",
              explanation_ko: "tcpdump는 커맨드라인 패킷 분석 도구입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/tcpdump.1.html'
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
        },
        {
          id: 'linux-shell-env',
          title: 'Shell & Environment',
          title_ko: '쉘 및 환경변수',
          description: 'Env, Export, Alias, Redirection.',
          description_ko: '환경변수 설정 및 입출력 재지정.',
          questions: [
            {
              id: 'q-env',
              type: 'multiple-choice',
              question: 'List all environment variables?',
              question_ko: '현재 설정된 모든 환경변수를 출력하려면?',
              options: [
                { id: 'opt1', text: 'lsenv' },
                { id: 'opt2', text: 'env' },
                { id: 'opt3', text: 'vars' },
                { id: 'opt4', text: 'show' },
              ],
              correctAnswerId: 'opt2',
              explanation: "env runs a program in a modified environment or displays current environment variables.",
              explanation_ko: "env(또는 printenv)는 현재 쉘의 환경변수 목록을 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/env.1.html'
            },
            {
              id: 'q-export',
              type: 'multiple-choice',
              question: 'Make a shell variable available to child processes?',
              question_ko: '쉘 변수를 자식 프로세스에서도 사용할 수 있게 하려면?',
              codeSnippet: '____ MYVAR="value"',
              options: [
                { id: 'opt1', text: 'set' },
                { id: 'opt2', text: 'export' },
                { id: 'opt3', text: 'global' },
                { id: 'opt4', text: 'expose' },
              ],
              correctAnswerId: 'opt2',
              explanation: "export makes the variable available to sub-shells and child processes.",
              explanation_ko: "export 명령어는 변수를 환경변수로 만들어 자식 프로세스에 상속되게 합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/export.1p.html'
            },
            {
              id: 'q-echo-var',
              type: 'multiple-choice',
              question: 'Print the value of a variable named PATH?',
              question_ko: 'PATH 변수의 값을 출력하려면?',
              codeSnippet: 'echo ____',
              options: [
                { id: 'opt1', text: 'PATH' },
                { id: 'opt2', text: '$PATH' },
                { id: 'opt3', text: '%PATH%' },
                { id: 'opt4', text: '@PATH' },
              ],
              correctAnswerId: 'opt2',
              explanation: "$ is used to access the value of a variable.",
              explanation_ko: "리눅스 쉘에서 변수 값에 접근할 때는 앞에 $를 붙입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/echo.1.html'
            },
            {
              id: 'q-alias',
              type: 'multiple-choice',
              question: 'Create a shortcut command?',
              question_ko: '긴 명령어에 대한 단축어(별명)를 만드려면?',
              codeSnippet: '____ ll="ls -l"',
              options: [
                { id: 'opt1', text: 'short' },
                { id: 'opt2', text: 'alias' },
                { id: 'opt3', text: 'link' },
                { id: 'opt4', text: 'name' },
              ],
              correctAnswerId: 'opt2',
              explanation: "alias creates a name for another command or set of commands.",
              explanation_ko: "alias 명령어로 자주 쓰는 명령어 조합을 짧은 단어로 정의할 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/alias.1p.html'
            },
            {
              id: 'q-history',
              type: 'multiple-choice',
              question: 'Show list of previously executed commands?',
              question_ko: '이전에 실행했던 명령어 목록을 보려면?',
              options: [
                { id: 'opt1', text: 'past' },
                { id: 'opt2', text: 'history' },
                { id: 'opt3', text: 'log' },
                { id: 'opt4', text: 'mem' },
              ],
              correctAnswerId: 'opt2',
              explanation: "history displays the command history list.",
              explanation_ko: "history 명령어는 사용자가 입력했던 명령어 기록을 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/history.1.html'
            },
            {
              id: 'q-source',
              type: 'multiple-choice',
              question: 'Execute a script in the current shell environment?',
              question_ko: '스크립트를 현재 쉘 환경에서 바로 실행(변수 적용 등)하려면?',
              options: [
                { id: 'opt1', text: 'run' },
                { id: 'opt2', text: 'source' },
                { id: 'opt3', text: 'exec' },
                { id: 'opt4', text: 'call' },
              ],
              correctAnswerId: 'opt2',
              explanation: "source (or .) reads and executes commands from file in the current shell.",
              explanation_ko: "source(또는 점 .) 명령어는 스크립트 내용을 현재 쉘에서 실행하여 환경변수 변경 등이 바로 반영됩니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/source.1.html'
            },
             {
              id: 'q-exit-status',
              type: 'multiple-choice',
              question: 'Check the exit status of the last command?',
              question_ko: '마지막으로 실행된 명령어의 성공/실패 여부(종료 코드)를 확인하려면?',
              codeSnippet: 'echo ____',
              options: [
                { id: 'opt1', text: '$#' },
                { id: 'opt2', text: '$?' },
                { id: 'opt3', text: '$$' },
                { id: 'opt4', text: '$!' },
              ],
              correctAnswerId: 'opt2',
              explanation: "$? holds the exit status of the most recently executed pipeline.",
              explanation_ko: "$? 변수에는 바로 전 명령어의 종료 코드(0이면 성공, 그 외는 에러)가 저장됩니다.",
              mdnUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Special-Parameters'
            },
            {
              id: 'q-redirect-out',
              type: 'multiple-choice',
              question: 'Save command output to a file (overwrite)?',
              question_ko: '명령어 실행 결과를 파일로 저장(덮어쓰기)하려면?',
              codeSnippet: 'ls ____ file.txt',
              options: [
                { id: 'opt1', text: '>' },
                { id: 'opt2', text: '>>' },
                { id: 'opt3', text: '<' },
                { id: 'opt4', text: '|' },
              ],
              correctAnswerId: 'opt1',
              explanation: "> redirects standard output to a file, overwriting existing content.",
              explanation_ko: "> 기호는 표준 출력을 파일로 리다이렉션하며, 기존 내용을 덮어씁니다.",
              mdnUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Redirections'
            },
             {
              id: 'q-redirect-append',
              type: 'multiple-choice',
              question: 'Append command output to a file?',
              question_ko: '명령어 실행 결과를 파일 끝에 추가(Append)하려면?',
              codeSnippet: 'date ____ log.txt',
              options: [
                { id: 'opt1', text: '>' },
                { id: 'opt2', text: '>>' },
                { id: 'opt3', text: '2>' },
                { id: 'opt4', text: '&>' },
              ],
              correctAnswerId: 'opt2',
              explanation: ">> appends standard output to a file.",
              explanation_ko: ">> 기호는 기존 내용을 유지하고 파일 끝에 결과를 추가합니다.",
              mdnUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Redirections'
            },
            {
              id: 'q-pipe',
              type: 'multiple-choice',
              question: 'Pass output of one command as input to another?',
              question_ko: '한 명령어의 출력을 다른 명령어의 입력으로 연결하려면?',
              codeSnippet: 'ls | grep "txt"',
              options: [
                { id: 'opt1', text: '>' },
                { id: 'opt2', text: '&' },
                { id: 'opt3', text: '|' },
                { id: 'opt4', text: ';' },
              ],
              correctAnswerId: 'opt3',
              explanation: "| (pipe) connects stdout of command1 to stdin of command2.",
              explanation_ko: "| (파이프)는 앞 명령어의 결과를 뒤 명령어에게 전달합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man7/pipe.7.html'
            },
             {
              id: 'q-redirect-err',
              type: 'multiple-choice',
              question: 'Redirect only error messages to a file?',
              question_ko: '에러 메시지(표준 에러)만 파일로 저장하려면?',
              codeSnippet: 'command ____ error.log',
              options: [
                { id: 'opt1', text: '>' },
                { id: 'opt2', text: '2>' },
                { id: 'opt3', text: '&>' },
                { id: 'opt4', text: '1>' },
              ],
              correctAnswerId: 'opt2',
              explanation: "2> redirects file descriptor 2 (stderr).",
              explanation_ko: "2>는 표준 에러(2번) 스트림을 리다이렉션합니다.",
              mdnUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Redirections'
            },
            {
              id: 'q-tilde',
              type: 'multiple-choice',
              question: 'Shortcut for user home directory?',
              question_ko: '사용자 홈 디렉토리를 나타내는 특수 문자는?',
              options: [
                { id: 'opt1', text: '.' },
                { id: 'opt2', text: '~' },
                { id: 'opt3', text: '/' },
                { id: 'opt4', text: '@' },
              ],
              correctAnswerId: 'opt2',
              explanation: "~ (tilde) expands to the value of $HOME.",
              explanation_ko: "~ (물결표)는 현재 사용자의 홈 디렉토리 경로로 확장됩니다.",
              mdnUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Tilde-Expansion'
            },
            {
              id: 'q-ctrl-c',
              type: 'multiple-choice',
              question: 'Interrupt (terminate) the current foreground process?',
              question_ko: '실행 중인 프로세스를 취소(인터럽트)하려면?',
              options: [
                { id: 'opt1', text: 'Ctrl+Z' },
                { id: 'opt2', text: 'Ctrl+C' },
                { id: 'opt3', text: 'Ctrl+D' },
                { id: 'opt4', text: 'Ctrl+L' },
              ],
              correctAnswerId: 'opt2',
              explanation: "Ctrl+C sends SIGINT to the foreground process.",
              explanation_ko: "Ctrl+C는 현재 실행 중인 작업에 종료 시그널(SIGINT)을 보냅니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Control-C'
            },
             {
              id: 'q-echo-e',
              type: 'multiple-choice',
              question: 'Interpret backslash escapes (like \\n) in echo?',
              question_ko: 'echo 명령에서 줄바꿈(\\n) 등 특수문자를 해석하게 하려면?',
              codeSnippet: 'echo ____ "Hello\\nWorld"',
              options: [
                { id: 'opt1', text: '-n' },
                { id: 'opt2', text: '-e' },
                { id: 'opt3', text: '-E' },
                { id: 'opt4', text: '-r' },
              ],
              correctAnswerId: 'opt2',
              explanation: "-e enable interpretation of backslash escapes.",
              explanation_ko: "-e 옵션을 써야 \\n(줄바꿈), \\t(탭) 등이 제대로 작동합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/echo.1.html'
            },
            {
              id: 'q-dev-null',
              type: 'multiple-choice',
              question: 'Where to send unwanted output (bit bucket)?',
              question_ko: '출력을 버리고 싶을 때 어디로 보내나요?',
              codeSnippet: 'command > ____',
              options: [
                { id: 'opt1', text: '/tmp/null' },
                { id: 'opt2', text: '/dev/null' },
                { id: 'opt3', text: '/dev/void' },
                { id: 'opt4', text: '/var/null' },
              ],
              correctAnswerId: 'opt2',
              explanation: "/dev/null is the null device; it discards everything written to it.",
              explanation_ko: "/dev/null은 들어오는 데이터를 모두 버리는 특수 장치 파일입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man4/null.4.html'
            }
          ]
        }
      ]
    },
    {
      id: 'linux-ch6',
      title: 'Disk & Hardware',
      title_ko: '디스크 및 하드웨어',
      units: [
        {
          id: 'linux-disk',
          title: 'Disk Management',
          title_ko: '디스크 관리',
          description: 'Mount, Fdisk, Mkfs, Lsblk.',
          description_ko: '파티션, 포맷, 마운트 관리.',
          questions: [
            {
              id: 'q-lsblk',
              type: 'multiple-choice',
              question: 'List block devices (disks and partitions)?',
              question_ko: '블록 장치(디스크 및 파티션) 목록을 트리 형태로 보려면?',
              options: [
                { id: 'opt1', text: 'lsdisk' },
                { id: 'opt2', text: 'lsblk' },
                { id: 'opt3', text: 'blkid' },
                { id: 'opt4', text: 'df' },
              ],
              correctAnswerId: 'opt2',
              explanation: "lsblk lists information about all available or the specified block devices.",
              explanation_ko: "lsblk는 디스크와 파티션의 관계를 알기 쉽게 트리 구조로 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/lsblk.8.html'
            },
            {
              id: 'q-mount',
              type: 'multiple-choice',
              question: 'Attach a filesystem to the directory tree?',
              question_ko: '파일 시스템을 디렉토리 트리에 연결(마운트)하려면?',
              codeSnippet: 'mount /dev/sdb1 ____',
              options: [
                { id: 'opt1', text: '/mnt/data' },
                { id: 'opt2', text: 'attach' },
                { id: 'opt3', text: '-a' },
                { id: 'opt4', text: 'on' },
              ],
              correctAnswerId: 'opt1',
              explanation: "mount attaches the filesystem found on some device to the big file tree.",
              explanation_ko: "mount 명령어로 장치를 특정 디렉토리에 연결하여 사용합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/mount.8.html'
            },
            {
              id: 'q-umount',
              type: 'multiple-choice',
              question: 'Detach a filesystem?',
              question_ko: '마운트된 파일 시스템을 해제하려면?',
              options: [
                { id: 'opt1', text: 'unmount' },
                { id: 'opt2', text: 'dismount' },
                { id: 'opt3', text: 'umount' },
                { id: 'opt4', text: 'detach' },
              ],
              correctAnswerId: 'opt3',
              explanation: "umount (note: no 'n' after 'u') detaches filesystems.",
              explanation_ko: "철자에 주의하세요. unmount가 아니라 umount입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/umount.8.html'
            },
            {
              id: 'q-fdisk-l',
              type: 'multiple-choice',
              question: 'List partition tables?',
              question_ko: '디스크 파티션 테이블 정보를 확인하려면?',
              codeSnippet: 'fdisk ____',
              options: [
                { id: 'opt1', text: '-a' },
                { id: 'opt2', text: '-l' },
                { id: 'opt3', text: '-p' },
                { id: 'opt4', text: '-s' },
              ],
              correctAnswerId: 'opt2',
              explanation: "-l lists the partition tables for the specified devices.",
              explanation_ko: "-l (list) 옵션은 파티션 정보를 나열합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/fdisk.8.html'
            },
            {
              id: 'q-mkfs',
              type: 'multiple-choice',
              question: 'Format a partition with ext4 filesystem?',
              question_ko: '파티션을 ext4 파일 시스템으로 포맷하려면?',
              options: [
                { id: 'opt1', text: 'fmt -t ext4' },
                { id: 'opt2', text: 'mkfs.ext4' },
                { id: 'opt3', text: 'format ext4' },
                { id: 'opt4', text: 'makefs ext4' },
              ],
              correctAnswerId: 'opt2',
              explanation: "mkfs (make filesystem) is used to build a Linux filesystem.",
              explanation_ko: "mkfs.ext4 또는 mkfs -t ext4 명령어로 포맷합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/mkfs.8.html'
            },
            {
              id: 'q-blkid',
              type: 'multiple-choice',
              question: 'View UUID of block devices?',
              question_ko: '장치의 고유 식별자(UUID)를 확인하려면?',
              options: [
                { id: 'opt1', text: 'uuidgen' },
                { id: 'opt2', text: 'blkid' },
                { id: 'opt3', text: 'ls -u' },
                { id: 'opt4', text: 'id' },
              ],
              correctAnswerId: 'opt2',
              explanation: "blkid locates/prints block device attributes like UUID.",
              explanation_ko: "blkid는 파티션의 UUID와 파일 시스템 타입을 보여줍니다. fstab 설정 시 유용합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/blkid.8.html'
            },
            {
              id: 'q-du-sh',
              type: 'multiple-choice',
              question: 'Check size of current directory summary?',
              question_ko: '현재 디렉토리의 전체 크기(요약)를 사람이 읽기 쉽게 보려면?',
              codeSnippet: 'du ____ .',
              options: [
                { id: 'opt1', text: '-sh' },
                { id: 'opt2', text: '-ah' },
                { id: 'opt3', text: '-l' },
                { id: 'opt4', text: '-f' },
              ],
              correctAnswerId: 'opt1',
              explanation: "-s (summarize) total size, -h (human readable).",
              explanation_ko: "-s는 하위 항목을 나열하지 않고 합계만 보여주며, -h는 단위를 변환합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/du.1.html'
            },
             {
              id: 'q-df-h',
              type: 'multiple-choice',
              question: 'Check available disk space?',
              question_ko: '남은 디스크 공간을 확인하려면?',
              options: [
                { id: 'opt1', text: 'du -h' },
                { id: 'opt2', text: 'df -h' },
                { id: 'opt3', text: 'free -h' },
                { id: 'opt4', text: 'ls -h' },
              ],
              correctAnswerId: 'opt2',
              explanation: "df (disk free) displays amount of available disk space.",
              explanation_ko: "df 명령어는 파일 시스템 전체의 여유 공간을 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/df.1.html'
            },
            {
              id: 'q-fstab',
              type: 'multiple-choice',
              question: 'File that configures static filesystem info?',
              question_ko: '부팅 시 자동으로 마운트할 파일 시스템 정보를 담고 있는 설정 파일은?',
              options: [
                { id: 'opt1', text: '/etc/mount' },
                { id: 'opt2', text: '/etc/fstab' },
                { id: 'opt3', text: '/etc/filesystems' },
                { id: 'opt4', text: '/proc/mounts' },
              ],
              correctAnswerId: 'opt2',
              explanation: "/etc/fstab contains static information about the filesystem.",
              explanation_ko: "/etc/fstab 파일에 등록해야 재부팅 후에도 마운트가 유지됩니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man5/fstab.5.html'
            },
            {
              id: 'q-fsck',
              type: 'multiple-choice',
              question: 'Check and repair a Linux filesystem?',
              question_ko: '손상된 파일 시스템을 점검하고 복구하는 명령어는?',
              options: [
                { id: 'opt1', text: 'chkds' },
                { id: 'opt2', text: 'fsck' },
                { id: 'opt3', text: 'repair' },
                { id: 'opt4', text: 'fixfs' },
              ],
              correctAnswerId: 'opt2',
              explanation: "fsck (file system check) checks and repairs inconsistencies.",
              explanation_ko: "fsck는 파일 시스템의 무결성을 검사하고 오류를 수정합니다. (마운트 해제 후 실행 권장)",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/fsck.8.html'
            },
            {
              id: 'q-sync',
              type: 'multiple-choice',
              question: 'Force changed blocks to disk?',
              question_ko: '메모리 버퍼에 있는 데이터를 강제로 디스크에 기록(동기화)하려면?',
              options: [
                { id: 'opt1', text: 'write' },
                { id: 'opt2', text: 'sync' },
                { id: 'opt3', text: 'flush' },
                { id: 'opt4', text: 'save' },
              ],
              correctAnswerId: 'opt2',
              explanation: "sync flushes file system buffers to persistent storage.",
              explanation_ko: "sync 명령은 데이터 유실을 막기 위해 메모리 버퍼를 디스크에 씁니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/sync.1.html'
            },
            {
              id: 'q-mount-a',
              type: 'multiple-choice',
              question: 'Mount all filesystems mentioned in fstab?',
              question_ko: 'fstab에 정의된 모든 파일 시스템을 지금 즉시 마운트하려면?',
              codeSnippet: 'mount ____',
              options: [
                { id: 'opt1', text: '-all' },
                { id: 'opt2', text: '-a' },
                { id: 'opt3', text: '-f' },
                { id: 'opt4', text: '-auto' },
              ],
              correctAnswerId: 'opt2',
              explanation: "mount -a mounts all filesystems mentioned in /etc/fstab.",
              explanation_ko: "mount -a는 /etc/fstab 파일을 읽어 마운트되지 않은 항목들을 마운트합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/mount.8.html'
            },
             {
              id: 'q-badblocks',
              type: 'multiple-choice',
              question: 'Search a device for bad blocks?',
              question_ko: '디스크의 배드 섹터(불량 블록)를 검사하는 명령어는?',
              options: [
                { id: 'opt1', text: 'scandisk' },
                { id: 'opt2', text: 'badblocks' },
                { id: 'opt3', text: 'checkdisk' },
                { id: 'opt4', text: 'testdisk' },
              ],
              correctAnswerId: 'opt2',
              explanation: "badblocks checks for damaged sectors on a drive.",
              explanation_ko: "badblocks 명령어로 디스크의 물리적 손상 여부를 확인할 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/badblocks.8.html'
            },
            {
              id: 'q-parted',
              type: 'multiple-choice',
              question: 'A modern partition manipulation tool (supports GPT)?',
              question_ko: '2TB 이상 디스크(GPT)를 지원하는 파티션 관리 도구는?',
              options: [
                { id: 'opt1', text: 'fdisk' },
                { id: 'opt2', text: 'parted' },
                { id: 'opt3', text: 'gdisk' },
                { id: 'opt4', text: 'Both 2 and 3' },
              ],
              correctAnswerId: 'opt4',
              explanation: "parted and gdisk support GPT partition tables (fdisk is traditionally MBR, though newer versions support GPT).",
              explanation_ko: "parted와 gdisk는 GPT 파티션 테이블을 잘 지원합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/parted.8.html'
            },
            {
              id: 'q-resize2fs',
              type: 'multiple-choice',
              question: 'Resize an ext4 filesystem?',
              question_ko: '파티션 크기 변경 후 ext4 파일 시스템 크기를 조정하려면?',
              options: [
                { id: 'opt1', text: 'expand' },
                { id: 'opt2', text: 'resize2fs' },
                { id: 'opt3', text: 'extendfs' },
                { id: 'opt4', text: 'gparted' },
              ],
              correctAnswerId: 'opt2',
              explanation: "resize2fs resizes an ext2/ext3/ext4 file system.",
              explanation_ko: "파티션을 늘린 후에는 resize2fs로 파일 시스템도 늘려줘야 용량을 쓸 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/resize2fs.8.html'
            }
          ]
        },
        {
          id: 'linux-hardware',
          title: 'Hardware Info',
          title_ko: '하드웨어 정보',
          description: 'Lscpu, Lspci, Dmesg, Dmidecode.',
          description_ko: 'CPU, 메모리, 장치 정보 확인.',
          questions: [
            {
              id: 'q-lscpu',
              type: 'multiple-choice',
              question: 'Display CPU architecture information?',
              question_ko: 'CPU 코어 수, 아키텍처 등 정보를 확인하려면?',
              options: [
                { id: 'opt1', text: 'cpuinfo' },
                { id: 'opt2', text: 'lscpu' },
                { id: 'opt3', text: 'showcpu' },
                { id: 'opt4', text: 'arch' },
              ],
              correctAnswerId: 'opt2',
              explanation: "lscpu gathers CPU architecture information from sysfs and /proc/cpuinfo.",
              explanation_ko: "lscpu는 CPU 관련 정보를 보기 좋게 요약해줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/lscpu.1.html'
            },
            {
              id: 'q-lspci',
              type: 'multiple-choice',
              question: 'List all PCI devices?',
              question_ko: '시스템에 연결된 PCI 장치(그래픽카드, 랜카드 등) 목록을 보려면?',
              options: [
                { id: 'opt1', text: 'lsdev' },
                { id: 'opt2', text: 'lspci' },
                { id: 'opt3', text: 'pcistat' },
                { id: 'opt4', text: 'scanpci' },
              ],
              correctAnswerId: 'opt2',
              explanation: "lspci lists all PCI devices.",
              explanation_ko: "lspci는 메인보드에 연결된 PCI 장치들을 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/lspci.8.html'
            },
            {
              id: 'q-lsusb',
              type: 'multiple-choice',
              question: 'List USB devices?',
              question_ko: '연결된 USB 장치 목록을 보려면?',
              options: [
                { id: 'opt1', text: 'usbview' },
                { id: 'opt2', text: 'lsusb' },
                { id: 'opt3', text: 'showusb' },
                { id: 'opt4', text: 'ucheck' },
              ],
              correctAnswerId: 'opt2',
              explanation: "lsusb is a utility for displaying information about USB buses in the system and the devices connected to them.",
              explanation_ko: "lsusb는 USB 포트에 연결된 장치들을 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/lsusb.8.html'
            },
            {
              id: 'q-dmesg',
              type: 'multiple-choice',
              question: 'Print or control the kernel ring buffer?',
              question_ko: '커널 부팅 메시지나 하드웨어 인식 로그를 확인하려면?',
              options: [
                { id: 'opt1', text: 'klog' },
                { id: 'opt2', text: 'dmesg' },
                { id: 'opt3', text: 'syslog' },
                { id: 'opt4', text: 'bootlog' },
              ],
              correctAnswerId: 'opt2',
              explanation: "dmesg is used to examine or control the kernel ring buffer.",
              explanation_ko: "dmesg는 시스템 부팅 시 하드웨어 감지 메시지 등을 확인할 때 유용합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/dmesg.1.html'
            },
            {
              id: 'q-dmidecode',
              type: 'multiple-choice',
              question: 'Dump Desktop Management Interface data?',
              question_ko: '하드웨어(바이오스, 시리얼 넘버, RAM 슬롯 등) 상세 정보를 보려면?',
              options: [
                { id: 'opt1', text: 'hwinfo' },
                { id: 'opt2', text: 'dmidecode' },
                { id: 'opt3', text: 'biosdecode' },
                { id: 'opt4', text: 'sysinfo' },
              ],
              correctAnswerId: 'opt2',
              explanation: "dmidecode reports information about your system's hardware as described in the system BIOS.",
              explanation_ko: "dmidecode는 메인보드, BIOS, 메모리 슬롯 등 하드웨어의 로우레벨 정보를 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/dmidecode.8.html'
            },
            {
              id: 'q-proc-cpuinfo',
              type: 'multiple-choice',
              question: 'File containing CPU details?',
              question_ko: 'CPU의 상세 정보가 담겨 있는 파일 경로는?',
              options: [
                { id: 'opt1', text: '/etc/cpu' },
                { id: 'opt2', text: '/proc/cpuinfo' },
                { id: 'opt3', text: '/sys/cpu' },
                { id: 'opt4', text: '/dev/cpu' },
              ],
              correctAnswerId: 'opt2',
              explanation: "/proc/cpuinfo contains details about individual CPU cores.",
              explanation_ko: "/proc/cpuinfo 파일을 cat으로 보면 CPU 정보를 알 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man5/proc.5.html'
            },
            {
              id: 'q-proc-meminfo',
              type: 'multiple-choice',
              question: 'File containing memory usage details?',
              question_ko: '메모리 사용량의 아주 상세한 정보가 담긴 파일은?',
              options: [
                { id: 'opt1', text: '/etc/memory' },
                { id: 'opt2', text: '/proc/meminfo' },
                { id: 'opt3', text: '/var/mem' },
                { id: 'opt4', text: '/sys/mem' },
              ],
              correctAnswerId: 'opt2',
              explanation: "/proc/meminfo reports statistics about memory usage on the system.",
              explanation_ko: "free 명령어보다 훨씬 더 자세한 메모리 통계를 제공하는 파일입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man5/proc.5.html'
            },
            {
              id: 'q-hdparm',
              type: 'multiple-choice',
              question: 'Get/set SATA/IDE device parameters?',
              question_ko: '하드 디스크의 파라미터를 설정하거나 읽기 속도를 테스트하는 도구는?',
              options: [
                { id: 'opt1', text: 'sdparm' },
                { id: 'opt2', text: 'hdparm' },
                { id: 'opt3', text: 'diskparm' },
                { id: 'opt4', text: 'setdisk' },
              ],
              correctAnswerId: 'opt2',
              explanation: "hdparm provides a command line interface to various kernel interfaces supported by the Linux SATA/PATA/SAS libata subsystem.",
              explanation_ko: "hdparm -tT /dev/sda 등으로 디스크 읽기 속도를 측정할 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/hdparm.8.html'
            },
            {
              id: 'q-lsmem',
              type: 'multiple-choice',
              question: 'List ranges of available memory?',
              question_ko: '사용 가능한 메모리 블록의 범위와 상태를 보려면?',
              options: [
                { id: 'opt1', text: 'lsram' },
                { id: 'opt2', text: 'lsmem' },
                { id: 'opt3', text: 'showmem' },
                { id: 'opt4', text: 'memmap' },
              ],
              correctAnswerId: 'opt2',
              explanation: "lsmem lists the ranges of available memory with their online status.",
              explanation_ko: "lsmem은 시스템 메모리의 블록 상태를 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/lsmem.1.html'
            },
            {
              id: 'q-free-m',
              type: 'multiple-choice',
              question: 'Show memory usage in Megabytes?',
              question_ko: '메모리 사용량을 메가바이트(MB) 단위로 보려면?',
              codeSnippet: 'free ____',
              options: [
                { id: 'opt1', text: '-m' },
                { id: 'opt2', text: '-g' },
                { id: 'opt3', text: '-k' },
                { id: 'opt4', text: '-b' },
              ],
              correctAnswerId: 'opt1',
              explanation: "-m displays statistics in mebibytes.",
              explanation_ko: "-m 옵션은 MB 단위로 출력합니다. (-g는 GB)",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/free.1.html'
            }
          ]
        }
      ]
    },
    {
      id: 'linux-ch7',
      title: 'Advanced Operations',
      title_ko: '고급 리눅스 운영',
      units: [
        {
          id: 'linux-adv-shell',
          title: 'Advanced Shell',
          title_ko: '고급 쉘 스크립팅',
          description: 'Regex, Arrays, Traps, Debugging.',
          description_ko: '정규식, 배열, 트랩, 디버깅.',
          questions: [
            {
              id: 'q-bash-array',
              type: 'multiple-choice',
              question: 'How to declare an array in Bash?',
              question_ko: 'Bash에서 배열을 선언하는 올바른 방법은?',
              codeSnippet: 'arr=____',
              options: [
                { id: 'opt1', text: '(1 2 3)' },
                { id: 'opt2', text: '[1, 2, 3]' },
                { id: 'opt3', text: '{1, 2, 3}' },
                { id: 'opt4', text: '1 2 3' }
              ],
              correctAnswerId: 'opt1',
              explanation: "Bash arrays are defined using parentheses: arr=(value1 value2).",
              explanation_ko: "Bash 배열은 소괄호를 사용하여 선언합니다. 예: arr=(1 2 3)",
              mdnUrl: 'https://www.gnu.org/software/bash/manual/html_node/Arrays.html'
            },
            {
              id: 'q-bash-len',
              type: 'multiple-choice',
              question: 'Get the length of a string variable?',
              question_ko: '문자열 변수의 길이를 구하는 문법은?',
              codeSnippet: 'echo ${____var}',
              options: [
                { id: 'opt1', text: '#' },
                { id: 'opt2', text: '@' },
                { id: 'opt3', text: '*' },
                { id: 'opt4', text: '%' }
              ],
              correctAnswerId: 'opt1',
              explanation: "${#var} returns the length of the string in variable var.",
              explanation_ko: "${#변수명}은 변수 값(문자열)의 길이를 반환합니다.",
              mdnUrl: 'https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html'
            },
            {
              id: 'q-bash-trap',
              type: 'multiple-choice',
              question: 'Catch signals in a script?',
              question_ko: '스크립트 실행 중 시그널(예: Ctrl+C)을 잡아내려면?',
              options: [
                { id: 'opt1', text: 'catch' },
                { id: 'opt2', text: 'trap' },
                { id: 'opt3', text: 'signal' },
                { id: 'opt4', text: 'on' }
              ],
              correctAnswerId: 'opt2',
              explanation: "trap command allows you to execute code when a signal is received.",
              explanation_ko: "trap 명령어를 사용하면 종료 시그널 등을 감지하여 정리 작업을 수행할 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/trap.1p.html'
            },
            {
              id: 'q-bash-debug',
              type: 'multiple-choice',
              question: 'Enable debugging mode in a script?',
              question_ko: '스크립트 디버깅 모드(실행 과정 출력)를 켜려면?',
              codeSnippet: 'set ____',
              options: [
                { id: 'opt1', text: '-x' },
                { id: 'opt2', text: '-d' },
                { id: 'opt3', text: '-v' },
                { id: 'opt4', text: '-g' }
              ],
              correctAnswerId: 'opt1',
              explanation: "set -x enables a mode of the shell where all executed commands are printed to the terminal.",
              explanation_ko: "set -x를 설정하면 실행되는 모든 명령어가 화면에 출력되어 디버깅에 유용합니다.",
              mdnUrl: 'https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html'
            },
            {
              id: 'q-bash-default',
              type: 'multiple-choice',
              question: 'Set default value if variable is unset?',
              question_ko: '변수가 설정되지 않았을 때 기본값을 사용하려면?',
              codeSnippet: '${var____default}',
              options: [
                { id: 'opt1', text: ':-' },
                { id: 'opt2', text: ':=' },
                { id: 'opt3', text: ':?' },
                { id: 'opt4', text: ':+' }
              ],
              correctAnswerId: 'opt1',
              explanation: "${var:-default} evaluates to default if var is unset or null.",
              explanation_ko: "${변수:-기본값}은 변수가 비어있을 때 기본값을 반환합니다.",
              mdnUrl: 'https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html'
            },
            {
              id: 'q-bash-math',
              type: 'multiple-choice',
              question: 'Perform arithmetic expansion?',
              question_ko: 'Bash에서 산술 연산을 수행하는 괄호는?',
              codeSnippet: 'echo ____1 + 1____',
              options: [
                { id: 'opt1', text: '$(( ... ))' },
                { id: 'opt2', text: '${ ... }' },
                { id: 'opt3', text: '$[ ... ]' },
                { id: 'opt4', text: '( ... )' }
              ],
              correctAnswerId: 'opt1',
              explanation: "$(( expression )) is the standard syntax for arithmetic expansion.",
              explanation_ko: "$(( 식 )) 구문을 사용하여 덧셈, 뺄셈 등 산술 연산을 할 수 있습니다.",
              mdnUrl: 'https://www.gnu.org/software/bash/manual/html_node/Arithmetic-Expansion.html'
            },
            {
              id: 'q-sed-inplace',
              type: 'multiple-choice',
              question: 'Edit file in-place with sed?',
              question_ko: 'sed 명령어로 파일을 직접 수정(덮어쓰기)하려면?',
              options: [
                { id: 'opt1', text: '-i' },
                { id: 'opt2', text: '-e' },
                { id: 'opt3', text: '-f' },
                { id: 'opt4', text: '-w' }
              ],
              correctAnswerId: 'opt1',
              explanation: "-i (in-place) edits the file directly.",
              explanation_ko: "-i 옵션은 결과를 화면에 출력하는 대신 파일에 바로 저장합니다.",
              mdnUrl: 'https://www.gnu.org/software/sed/manual/sed.html'
            },
            {
              id: 'q-awk-delim',
              type: 'multiple-choice',
              question: 'Specify input field separator in awk?',
              question_ko: 'awk에서 입력 필드 구분자를 지정하려면?',
              options: [
                { id: 'opt1', text: '-F' },
                { id: 'opt2', text: '-d' },
                { id: 'opt3', text: '-s' },
                { id: 'opt4', text: '-f' }
              ],
              correctAnswerId: 'opt1',
              explanation: "-F sets the field separator (FS).",
              explanation_ko: "-F 옵션으로 공백이 아닌 다른 문자(예: :)를 구분자로 지정할 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/awk.1p.html'
            },
            {
              id: 'q-xargs',
              type: 'multiple-choice',
              question: 'Build and execute command lines from standard input?',
              question_ko: '표준 입력으로 받은 인자들을 사용하여 명령어를 실행해주는 도구는?',
              options: [
                { id: 'opt1', text: 'exec' },
                { id: 'opt2', text: 'xargs' },
                { id: 'opt3', text: 'run' },
                { id: 'opt4', text: 'args' }
              ],
              correctAnswerId: 'opt2',
              explanation: "xargs reads items from standard input and executes a command with them.",
              explanation_ko: "xargs는 파이프로 넘어온 결과들을 인자로 받아 다른 명령어를 실행해줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/xargs.1.html'
            },
            {
              id: 'q-grep-context',
              type: 'multiple-choice',
              question: 'Show 2 lines of context around the match?',
              question_ko: '검색된 라인의 앞뒤 2줄을 함께 보려면?',
              codeSnippet: 'grep ____ 2 "error" log',
              options: [
                { id: 'opt1', text: '-C' },
                { id: 'opt2', text: '-A' },
                { id: 'opt3', text: '-B' },
                { id: 'opt4', text: '-X' }
              ],
              correctAnswerId: 'opt1',
              explanation: "-C (Context) shows lines before and after the match.",
              explanation_ko: "-C 2는 매칭된 라인의 위아래 2줄씩을 같이 보여줍니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Grep'
            },
            {
              id: 'q-find-perm',
              type: 'multiple-choice',
              question: 'Find files with specific permissions?',
              question_ko: '특정 권한을 가진 파일을 찾으려면?',
              codeSnippet: 'find . -____ 777',
              options: [
                { id: 'opt1', text: 'perm' },
                { id: 'opt2', text: 'mode' },
                { id: 'opt3', text: 'access' },
                { id: 'opt4', text: 'chmod' }
              ],
              correctAnswerId: 'opt1',
              explanation: "-perm searches for files with specific permission bits.",
              explanation_ko: "-perm 옵션으로 권한 비트를 조건으로 검색할 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/find.1.html'
            },
            {
              id: 'q-tee',
              type: 'multiple-choice',
              question: 'Read from stdin and write to stdout AND files?',
              question_ko: '화면 출력과 파일 저장을 동시에 하려면?',
              codeSnippet: 'ls | ____ file.txt',
              options: [
                { id: 'opt1', text: 'cat' },
                { id: 'opt2', text: 'tee' },
                { id: 'opt3', text: 'save' },
                { id: 'opt4', text: 'dump' }
              ],
              correctAnswerId: 'opt2',
              explanation: "tee reads from standard input and writes to standard output and files.",
              explanation_ko: "tee 명령어는 T자 배관처럼 입력을 화면과 파일 두 곳으로 보냅니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/tee.1.html'
            },
            {
              id: 'q-brace-exp',
              type: 'multiple-choice',
              question: 'Create files file1, file2, file3?',
              question_ko: 'file1, file2, file3을 한 번에 생성하는 브레이스 확장은?',
              codeSnippet: 'touch file{____}',
              options: [
                { id: 'opt1', text: '1-3' },
                { id: 'opt2', text: '1..3' },
                { id: 'opt3', text: '1,3' },
                { id: 'opt4', text: '1 to 3' }
              ],
              correctAnswerId: 'opt2',
              explanation: "{1..3} expands to 1 2 3.",
              explanation_ko: "{시작..끝} 문법으로 연속된 숫자를 생성할 수 있습니다.",
              mdnUrl: 'https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html'
            },
            {
              id: 'q-here-doc',
              type: 'multiple-choice',
              question: 'Redirect multiple lines of input to a command?',
              question_ko: '여러 줄의 텍스트를 명령어로 리다이렉션하는(Here Document) 기호는?',
              codeSnippet: 'cat ____ END',
              options: [
                { id: 'opt1', text: '<<' },
                { id: 'opt2', text: '>>' },
                { id: 'opt3', text: '<' },
                { id: 'opt4', text: '<<<' }
              ],
              correctAnswerId: 'opt1',
              explanation: "<< allows you to pass multi-line string to a command.",
              explanation_ko: "<< END ... END 구문으로 여러 줄의 입력을 전달할 수 있습니다.",
              mdnUrl: 'https://www.gnu.org/software/bash/manual/bash.html#Redirections'
            },
            {
              id: 'q-cut-fields',
              type: 'multiple-choice',
              question: 'Select the 1st and 3rd field?',
              question_ko: '1번째와 3번째 필드만 잘라내려면?',
              codeSnippet: 'cut -f____',
              options: [
                { id: 'opt1', text: '1-3' },
                { id: 'opt2', text: '1,3' },
                { id: 'opt3', text: '1..3' },
                { id: 'opt4', text: '1:3' }
              ],
              correctAnswerId: 'opt2',
              explanation: "-f 1,3 selects fields 1 and 3.",
              explanation_ko: "쉼표(,)로 구분하여 불연속적인 필드를 선택할 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/cut.1.html'
            },
            {
              id: 'q-tr-squeeze',
              type: 'multiple-choice',
              question: 'Squeeze repeating characters (e.g. spaces)?',
              question_ko: '반복되는 문자(예: 공백)를 하나로 줄이려면?',
              options: [
                { id: 'opt1', text: '-s' },
                { id: 'opt2', text: '-d' },
                { id: 'opt3', text: '-c' },
                { id: 'opt4', text: '-u' }
              ],
              correctAnswerId: 'opt1',
              explanation: "-s (squeeze-repeats) replaces each sequence of a repeated character with a single occurrence.",
              explanation_ko: "-s 옵션은 중복된 문자를 하나로 압축합니다. 공백 정리에 유용합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/tr.1.html'
            },
            {
              id: 'q-rev',
              type: 'multiple-choice',
              question: 'Reverse lines characterwise?',
              question_ko: '각 줄의 문자 순서를 거꾸로(좌우 반전) 출력하려면?',
              options: [
                { id: 'opt1', text: 'tac' },
                { id: 'opt2', text: 'rev' },
                { id: 'opt3', text: 'inv' },
                { id: 'opt4', text: 'back' }
              ],
              correctAnswerId: 'opt2',
              explanation: "rev reverses lines characterwise. tac reverses order of lines.",
              explanation_ko: "rev는 문자의 좌우를 뒤집고, tac은 줄의 상하를 뒤집습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/rev.1.html'
            },
            {
              id: 'q-shuf',
              type: 'multiple-choice',
              question: 'Generate random permutations (shuffle)?',
              question_ko: '입력된 줄들을 무작위로 섞으려면?',
              options: [
                { id: 'opt1', text: 'rand' },
                { id: 'opt2', text: 'shuf' },
                { id: 'opt3', text: 'mix' },
                { id: 'opt4', text: 'sort -r' }
              ],
              correctAnswerId: 'opt2',
              explanation: "shuf generates random permutations.",
              explanation_ko: "shuf 명령어는 입력을 랜덤하게 섞어서 출력합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/shuf.1.html'
            },
            {
              id: 'q-seq',
              type: 'multiple-choice',
              question: 'Print a sequence of numbers?',
              question_ko: '1부터 10까지 숫자를 출력하려면?',
              codeSnippet: 'seq 1 10',
              options: [
                { id: 'opt1', text: 'count' },
                { id: 'opt2', text: 'num' },
                { id: 'opt3', text: 'seq' },
                { id: 'opt4', text: 'list' }
              ],
              correctAnswerId: 'opt3',
              explanation: "seq prints a sequence of numbers.",
              explanation_ko: "seq 명령어는 지정된 범위의 숫자를 순서대로 출력합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/seq.1.html'
            },
            {
              id: 'q-bc',
              type: 'multiple-choice',
              question: 'Command line calculator?',
              question_ko: '터미널에서 사용할 수 있는 임의 정밀도 계산기 언어는?',
              options: [
                { id: 'opt1', text: 'calc' },
                { id: 'opt2', text: 'bc' },
                { id: 'opt3', text: 'math' },
                { id: 'opt4', text: 'expr' }
              ],
              correctAnswerId: 'opt2',
              explanation: "bc is an arbitrary precision calculator language.",
              explanation_ko: "bc (basic calculator)는 정밀한 수학 계산을 수행할 수 있는 도구입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/bc.1p.html'
            }
          ]
        },
        {
          id: 'linux-adv-net',
          title: 'Advanced Networking',
          title_ko: '고급 네트워크',
          description: 'Tunneling, Firewall, DNS.',
          description_ko: '터널링, 방화벽, DNS 심화.',
          questions: [
            {
              id: 'q-ssh-L',
              type: 'multiple-choice',
              question: 'Local port forwarding with SSH?',
              question_ko: 'SSH 로컬 포트 포워딩(터널링) 옵션은?',
              codeSnippet: 'ssh -____ 8080:localhost:80 user@host',
              options: [
                { id: 'opt1', text: 'L' },
                { id: 'opt2', text: 'R' },
                { id: 'opt3', text: 'D' },
                { id: 'opt4', text: 'f' }
              ],
              correctAnswerId: 'opt1',
              explanation: "-L (Local) forwards a local port to a remote address.",
              explanation_ko: "-L 옵션은 로컬 포트를 원격지 서버를 통해 특정 주소로 연결해줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/ssh.1.html'
            },
            {
              id: 'q-ssh-keygen',
              type: 'multiple-choice',
              question: 'Generate SSH public/private key pair?',
              question_ko: 'SSH 공개키/비공개키 쌍을 생성하는 명령어는?',
              options: [
                { id: 'opt1', text: 'ssh-add' },
                { id: 'opt2', text: 'ssh-keygen' },
                { id: 'opt3', text: 'ssh-copy-id' },
                { id: 'opt4', text: 'ssh-init' }
              ],
              correctAnswerId: 'opt2',
              explanation: "ssh-keygen generates, manages and converts authentication keys for ssh.",
              explanation_ko: "ssh-keygen 명령어로 접속 인증에 사용할 키 파일을 생성합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/ssh-keygen.1.html'
            },
            {
              id: 'q-ssh-copy-id',
              type: 'multiple-choice',
              question: 'Install your public key on a remote server?',
              question_ko: '내 공개키를 원격 서버에 간편하게 등록해주는 명령어는?',
              options: [
                { id: 'opt1', text: 'ssh-install' },
                { id: 'opt2', text: 'ssh-copy-id' },
                { id: 'opt3', text: 'ssh-push' },
                { id: 'opt4', text: 'scp' }
              ],
              correctAnswerId: 'opt2',
              explanation: "ssh-copy-id uses ssh to log into a remote machine and append the indicated identity file to that machine's authorized_keys file.",
              explanation_ko: "ssh-copy-id는 authorized_keys 파일에 자동으로 키를 추가해줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/ssh-copy-id.1.html'
            },
            {
              id: 'q-rsync-avz',
              type: 'multiple-choice',
              question: 'Common flags for archive, verbose, compressed rsync?',
              question_ko: 'rsync 사용 시 아카이브(속성유지), 상세출력, 압축전송을 위한 국민 옵션은?',
              codeSnippet: 'rsync -____ src dest',
              options: [
                { id: 'opt1', text: 'avz' },
                { id: 'opt2', text: 'rwx' },
                { id: 'opt3', text: 'abc' },
                { id: 'opt4', text: 'all' }
              ],
              correctAnswerId: 'opt1',
              explanation: "-a (archive), -v (verbose), -z (compress).",
              explanation_ko: "-avz 옵션은 가장 많이 사용되는 rsync 옵션 조합입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/rsync.1.html'
            },
            {
              id: 'q-iptables-list',
              type: 'multiple-choice',
              question: 'List current firewall rules?',
              question_ko: '현재 iptables 방화벽 규칙 목록을 보려면?',
              codeSnippet: 'iptables -____',
              options: [
                { id: 'opt1', text: 'L' },
                { id: 'opt2', text: 'S' },
                { id: 'opt3', text: 'l' },
                { id: 'opt4', text: 'show' }
              ],
              correctAnswerId: 'opt1',
              explanation: "-L lists all rules in the selected chain.",
              explanation_ko: "-L (대문자) 옵션은 현재 설정된 규칙들을 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/iptables.8.html'
            },
            {
              id: 'q-ufw-enable',
              type: 'multiple-choice',
              question: 'Enable UFW (Uncomplicated Firewall)?',
              question_ko: 'UFW 방화벽을 활성화하려면?',
              codeSnippet: 'ufw ____',
              options: [
                { id: 'opt1', text: 'start' },
                { id: 'opt2', text: 'on' },
                { id: 'opt3', text: 'enable' },
                { id: 'opt4', text: 'up' }
              ],
              correctAnswerId: 'opt3',
              explanation: "ufw enable activates the firewall.",
              explanation_ko: "ufw enable 명령어로 방화벽을 켭니다.",
              mdnUrl: 'https://manpages.ubuntu.com/manpages/xenial/man8/ufw.8.html'
            },
            {
              id: 'q-nc-portscan',
              type: 'multiple-choice',
              question: 'Scan open ports with netcat?',
              question_ko: 'Netcat으로 특정 범위의 포트가 열려있는지 스캔하려면?',
              codeSnippet: 'nc -z -v host 20-80',
              options: [
                { id: 'opt1', text: '-s' },
                { id: 'opt2', text: '-z' },
                { id: 'opt3', text: '-p' },
                { id: 'opt4', text: '-S' }
              ],
              correctAnswerId: 'opt2',
              explanation: "-z specifies to scan for listening daemons, without sending any data.",
              explanation_ko: "-z (Zero-I/O mode) 옵션은 데이터를 보내지 않고 연결 가능 여부만 확인합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/nc.1.html'
            },
            {
              id: 'q-ethtool',
              type: 'multiple-choice',
              question: 'Display or change ethernet card settings?',
              question_ko: '이더넷 카드의 속도, 듀플렉스 모드 등을 확인하거나 변경하는 도구는?',
              options: [
                { id: 'opt1', text: 'ifconfig' },
                { id: 'opt2', text: 'ethtool' },
                { id: 'opt3', text: 'ip link' },
                { id: 'opt4', text: 'nettool' }
              ],
              correctAnswerId: 'opt2',
              explanation: "ethtool queries and controls network driver and hardware settings.",
              explanation_ko: "ethtool은 네트워크 인터페이스의 물리적 설정을 제어합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/ethtool.8.html'
            },
            {
              id: 'q-resolvectl',
              type: 'multiple-choice',
              question: 'Check DNS settings on systemd systems?',
              question_ko: 'systemd 기반 시스템에서 DNS 리졸버 설정을 확인하는 최신 명령어는?',
              options: [
                { id: 'opt1', text: 'dnsctl' },
                { id: 'opt2', text: 'resolvectl' },
                { id: 'opt3', text: 'systemd-dns' },
                { id: 'opt4', text: 'named' }
              ],
              correctAnswerId: 'opt2',
              explanation: "resolvectl queries or controls the systemd-resolved service.",
              explanation_ko: "resolvectl status로 현재 DNS 서버 설정 등을 확인할 수 있습니다.",
              mdnUrl: 'https://www.freedesktop.org/software/systemd/man/resolvectl.html'
            },
            {
              id: 'q-hostnamectl',
              type: 'multiple-choice',
              question: 'Change the system hostname?',
              question_ko: '시스템의 호스트 이름을 영구적으로 변경하는 systemd 명령어는?',
              codeSnippet: '____ set-hostname new-name',
              options: [
                { id: 'opt1', text: 'hostname' },
                { id: 'opt2', text: 'hostnamectl' },
                { id: 'opt3', text: 'sysctl' },
                { id: 'opt4', text: 'namectl' }
              ],
              correctAnswerId: 'opt2',
              explanation: "hostnamectl may be used to query and change the system hostname.",
              explanation_ko: "hostnamectl set-hostname 명령으로 호스트명을 변경하면 설정 파일에도 반영됩니다.",
              mdnUrl: 'https://www.freedesktop.org/software/systemd/man/hostnamectl.html'
            },
            {
              id: 'q-arp-a',
              type: 'multiple-choice',
              question: 'Display ARP table?',
              question_ko: 'ARP(주소 결정 프로토콜) 테이블(IP-MAC 매핑)을 확인하려면?',
              options: [
                { id: 'opt1', text: 'arp -a' },
                { id: 'opt2', text: 'mac -a' },
                { id: 'opt3', text: 'ip mac' },
                { id: 'opt4', text: 'showarp' }
              ],
              correctAnswerId: 'opt1',
              explanation: "arp -a displays the current ARP cache.",
              explanation_ko: "arp -a 또는 ip neigh 명령어로 ARP 캐시 테이블을 확인합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/arp.8.html'
            },
            {
              id: 'q-tcpdump-file',
              type: 'multiple-choice',
              question: 'Save captured packets to a pcap file?',
              question_ko: 'tcpdump로 캡처한 내용을 나중에 분석할 수 있게 파일로 저장하려면?',
              codeSnippet: 'tcpdump -____ capture.pcap',
              options: [
                { id: 'opt1', text: 's' },
                { id: 'opt2', text: 'w' },
                { id: 'opt3', text: 'f' },
                { id: 'opt4', text: 'o' }
              ],
              correctAnswerId: 'opt2',
              explanation: "-w (write) writes the raw packets to a file.",
              explanation_ko: "-w 옵션을 사용하여 바이너리(pcap) 포맷으로 저장해야 Wireshark 등에서 열 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/tcpdump.1.html'
            },
            {
              id: 'q-nmap',
              type: 'multiple-choice',
              question: 'Network exploration and security auditing tool?',
              question_ko: '네트워크 스캔 및 보안 취약점 점검을 위한 강력한 도구는?',
              options: [
                { id: 'opt1', text: 'scan' },
                { id: 'opt2', text: 'nmap' },
                { id: 'opt3', text: 'netscan' },
                { id: 'opt4', text: 'audit' }
              ],
              correctAnswerId: 'opt2',
              explanation: "nmap is a utility for network exploration or security auditing.",
              explanation_ko: "nmap은 포트 스캔, OS 탐지 등 네트워크 분석의 표준 도구입니다.",
              mdnUrl: 'https://nmap.org/book/man.html'
            },
            {
              id: 'q-ip-link-up',
              type: 'multiple-choice',
              question: 'Bring a network interface up?',
              question_ko: '네트워크 인터페이스(예: eth0)를 활성화하려면?',
              codeSnippet: 'ip link set eth0 ____',
              options: [
                { id: 'opt1', text: 'on' },
                { id: 'opt2', text: 'enable' },
                { id: 'opt3', text: 'up' },
                { id: 'opt4', text: 'start' }
              ],
              correctAnswerId: 'opt3',
              explanation: "ip link set device up enables the interface.",
              explanation_ko: "up 키워드로 인터페이스를 활성화합니다. (반대는 down)",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/ip-link.8.html'
            },
            {
              id: 'q-route-del',
              type: 'multiple-choice',
              question: 'Delete a routing entry?',
              question_ko: '라우팅 테이블에서 특정 경로를 삭제하려면?',
              codeSnippet: 'ip route ____ default',
              options: [
                { id: 'opt1', text: 'rm' },
                { id: 'opt2', text: 'del' },
                { id: 'opt3', text: 'remove' },
                { id: 'opt4', text: 'drop' }
              ],
              correctAnswerId: 'opt2',
              explanation: "ip route del deletes a route.",
              explanation_ko: "ip route del 명령으로 경로를 삭제합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/ip-route.8.html'
            },
            {
              id: 'q-mtr',
              type: 'multiple-choice',
              question: 'Combine ping and traceroute?',
              question_ko: 'ping과 traceroute 기능을 합쳐서 실시간으로 경로 품질을 보여주는 도구는?',
              options: [
                { id: 'opt1', text: 'ptrace' },
                { id: 'opt2', text: 'mtr' },
                { id: 'opt3', text: 'pathping' },
                { id: 'opt4', text: 'tracert' }
              ],
              correctAnswerId: 'opt2',
              explanation: "mtr combines the functionality of the traceroute and ping programs.",
              explanation_ko: "mtr(My Traceroute)은 경로상의 패킷 손실률과 대기 시간을 실시간으로 갱신해줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/mtr.8.html'
            },
            {
              id: 'q-whois',
              type: 'multiple-choice',
              question: 'Query domain registration info?',
              question_ko: '도메인 소유자, 등록일, 만료일 정보를 조회하려면?',
              options: [
                { id: 'opt1', text: 'domain' },
                { id: 'opt2', text: 'whois' },
                { id: 'opt3', text: 'reg' },
                { id: 'opt4', text: 'info' }
              ],
              correctAnswerId: 'opt2',
              explanation: "whois searches for an object in a RFC 3912 database.",
              explanation_ko: "whois 데이터베이스에서 도메인 등록 정보를 조회합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/whois.1.html'
            },
            {
              id: 'q-iptables-flush',
              type: 'multiple-choice',
              question: 'Delete all firewall rules?',
              question_ko: '모든 iptables 규칙을 삭제(초기화)하려면?',
              codeSnippet: 'iptables -____',
              options: [
                { id: 'opt1', text: 'D' },
                { id: 'opt2', text: 'F' },
                { id: 'opt3', text: 'C' },
                { id: 'opt4', text: 'R' }
              ],
              correctAnswerId: 'opt2',
              explanation: "-F (flush) deletes all rules.",
              explanation_ko: "-F (Flush) 옵션은 체인의 모든 규칙을 삭제합니다. 주의해서 사용해야 합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/iptables.8.html'
            },
            {
              id: 'q-curl-post',
              type: 'multiple-choice',
              question: 'Send a POST request with data?',
              question_ko: 'curl로 POST 요청을 보내면서 데이터를 전송하려면?',
              codeSnippet: 'curl -X POST -____ "data" url',
              options: [
                { id: 'opt1', text: 'p' },
                { id: 'opt2', text: 'd' },
                { id: 'opt3', text: 's' },
                { id: 'opt4', text: 'b' }
              ],
              correctAnswerId: 'opt2',
              explanation: "-d (data) sends data in a POST request.",
              explanation_ko: "-d 옵션으로 HTTP POST 바디 데이터를 전송합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/curl.1.html'
            },
            {
              id: 'q-ss-process',
              type: 'multiple-choice',
              question: 'Show process using the socket in ss?',
              question_ko: 'ss 명령어에서 소켓을 사용하는 프로세스 정보를 함께 보려면?',
              options: [
                { id: 'opt1', text: '-p' },
                { id: 'opt2', text: '-u' },
                { id: 'opt3', text: '-proc' },
                { id: 'opt4', text: '-pid' }
              ],
              correctAnswerId: 'opt1',
              explanation: "-p shows process using socket.",
              explanation_ko: "-p 옵션을 사용하면 PID와 프로세스 이름을 보여줍니다 (sudo 필요).",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/ss.8.html'
            }
          ]
        },
        {
          id: 'linux-sys-admin',
          title: 'System Admin',
          title_ko: '시스템 관리',
          description: 'Systemd, Logs, Users.',
          description_ko: 'Systemd, 로그, 사용자 관리 심화.',
          questions: [
            {
              id: 'q-systemctl-start',
              type: 'multiple-choice',
              question: 'Start a service immediately?',
              question_ko: '서비스를 즉시 시작하려면?',
              codeSnippet: 'systemctl ____ nginx',
              options: [
                { id: 'opt1', text: 'enable' },
                { id: 'opt2', text: 'start' },
                { id: 'opt3', text: 'run' },
                { id: 'opt4', text: 'up' }
              ],
              correctAnswerId: 'opt2',
              explanation: "start activates the service immediately.",
              explanation_ko: "start는 서비스를 지금 바로 실행합니다. 부팅 시 실행은 enable입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/systemctl.1.html'
            },
            {
              id: 'q-systemctl-enable',
              type: 'multiple-choice',
              question: 'Start service on boot?',
              question_ko: '부팅 시 서비스가 자동으로 시작되게 하려면?',
              codeSnippet: 'systemctl ____ nginx',
              options: [
                { id: 'opt1', text: 'start' },
                { id: 'opt2', text: 'enable' },
                { id: 'opt3', text: 'boot' },
                { id: 'opt4', text: 'auto' }
              ],
              correctAnswerId: 'opt2',
              explanation: "enable creates symlinks to start the service on boot.",
              explanation_ko: "enable은 재부팅 후에도 서비스가 실행되도록 설정합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/systemctl.1.html'
            },
            {
              id: 'q-journalctl',
              type: 'multiple-choice',
              question: 'View systemd logs?',
              question_ko: 'Systemd 서비스들의 로그를 확인하는 명령어는?',
              options: [
                { id: 'opt1', text: 'syslog' },
                { id: 'opt2', text: 'journalctl' },
                { id: 'opt3', text: 'logview' },
                { id: 'opt4', text: 'showlog' }
              ],
              correctAnswerId: 'opt2',
              explanation: "journalctl query the systemd journal.",
              explanation_ko: "journalctl은 systemd-journald가 수집한 로그를 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/journalctl.1.html'
            },
            {
              id: 'q-journalctl-follow',
              type: 'multiple-choice',
              question: 'Follow log output in real-time?',
              question_ko: '로그가 쌓이는 것을 실시간으로 보려면 (tail -f 처럼)?',
              codeSnippet: 'journalctl -____',
              options: [
                { id: 'opt1', text: 'f' },
                { id: 'opt2', text: 'r' },
                { id: 'opt3', text: 'live' },
                { id: 'opt4', text: 'n' }
              ],
              correctAnswerId: 'opt1',
              explanation: "-f (follow) follows the journal.",
              explanation_ko: "-f 옵션은 실시간으로 추가되는 로그를 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/journalctl.1.html'
            },
            {
              id: 'q-visudo',
              type: 'multiple-choice',
              question: 'Safely edit the sudoers file?',
              question_ko: '/etc/sudoers 파일을 안전하게(문법체크 포함) 수정하려면?',
              options: [
                { id: 'opt1', text: 'vi /etc/sudoers' },
                { id: 'opt2', text: 'visudo' },
                { id: 'opt3', text: 'editsudo' },
                { id: 'opt4', text: 'sudoedit' }
              ],
              correctAnswerId: 'opt2',
              explanation: "visudo edits the sudoers file in a safe fashion.",
              explanation_ko: "visudo는 저장 시 문법 오류를 검사하여 설정 실수로 인한 sudo 불능 사태를 막아줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/visudo.8.html'
            },
            {
              id: 'q-last',
              type: 'multiple-choice',
              question: 'Show listing of last logged in users?',
              question_ko: '최근에 로그인한 사용자 기록을 확인하려면?',
              options: [
                { id: 'opt1', text: 'who' },
                { id: 'opt2', text: 'last' },
                { id: 'opt3', text: 'history' },
                { id: 'opt4', text: 'logins' }
              ],
              correctAnswerId: 'opt2',
              explanation: "last shows a listing of last logged in users.",
              explanation_ko: "last 명령어는 /var/log/wtmp 파일을 읽어 로그인 기록을 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/last.1.html'
            },
            {
              id: 'q-w',
              type: 'multiple-choice',
              question: 'Show who is logged in and what they are doing?',
              question_ko: '현재 로그인한 사용자와 그들이 실행 중인 작업을 보려면?',
              options: [
                { id: 'opt1', text: 'who' },
                { id: 'opt2', text: 'w' },
                { id: 'opt3', text: 'users' },
                { id: 'opt4', text: 'where' }
              ],
              correctAnswerId: 'opt2',
              explanation: "w shows who is logged in and what they are doing.",
              explanation_ko: "w 명령어는 who보다 더 상세한 정보(현재 실행 중인 명령어 등)를 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/w.1.html'
            },
            {
              id: 'q-shutdown',
              type: 'multiple-choice',
              question: 'Shutdown the system immediately?',
              question_ko: '시스템을 즉시 종료하려면?',
              codeSnippet: 'shutdown -h ____',
              options: [
                { id: 'opt1', text: '0' },
                { id: 'opt2', text: 'now' },
                { id: 'opt3', text: 'force' },
                { id: 'opt4', text: 'yes' }
              ],
              correctAnswerId: 'opt2',
              explanation: "shutdown -h now halts the system immediately.",
              explanation_ko: "now는 즉시를 의미합니다. 시간(분)을 지정할 수도 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/shutdown.8.html'
            },
            {
              id: 'q-groupadd',
              type: 'multiple-choice',
              question: 'Create a new user group?',
              question_ko: '새로운 그룹을 생성하는 명령어는?',
              options: [
                { id: 'opt1', text: 'newgroup' },
                { id: 'opt2', text: 'groupadd' },
                { id: 'opt3', text: 'mkgroup' },
                { id: 'opt4', text: 'addgroup' }
              ],
              correctAnswerId: 'opt2',
              explanation: "groupadd creates a new group definition on the system.",
              explanation_ko: "groupadd 명령어로 /etc/group 파일에 새 그룹을 추가합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/groupadd.8.html'
            },
            {
              id: 'q-crontab-e',
              type: 'multiple-choice',
              question: 'Edit the current user\'s cron jobs?',
              question_ko: '사용자의 크론(예약 작업) 테이블을 수정하려면?',
              codeSnippet: 'crontab -____',
              options: [
                { id: 'opt1', text: 'e' },
                { id: 'opt2', text: 'l' },
                { id: 'opt3', text: 'r' },
                { id: 'opt4', text: 'w' }
              ],
              correctAnswerId: 'opt1',
              explanation: "-e (edit) allows editing the crontab file.",
              explanation_ko: "-e 옵션은 기본 에디터를 열어 크론 작업을 수정하게 해줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/crontab.1.html'
            },
            {
              id: 'q-at',
              type: 'multiple-choice',
              question: 'Schedule a command to run once in the future?',
              question_ko: '특정 시간에 명령어가 한 번만 실행되도록 예약하려면?',
              options: [
                { id: 'opt1', text: 'cron' },
                { id: 'opt2', text: 'at' },
                { id: 'opt3', text: 'schedule' },
                { id: 'opt4', text: 'plan' }
              ],
              correctAnswerId: 'opt2',
              explanation: "at executes commands at a specified time.",
              explanation_ko: "cron은 주기적 실행이고, at은 일회성 예약 실행입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/at.1.html'
            },
            {
              id: 'q-wall',
              type: 'multiple-choice',
              question: 'Send a message to everyone logged in?',
              question_ko: '로그인한 모든 사용자에게 메시지를 띄우려면?',
              options: [
                { id: 'opt1', text: 'talk' },
                { id: 'opt2', text: 'wall' },
                { id: 'opt3', text: 'broadcast' },
                { id: 'opt4', text: 'say' }
              ],
              correctAnswerId: 'opt2',
              explanation: "wall (write all) sends a message to everybody logged in.",
              explanation_ko: "wall 명령어로 긴급 공지 등을 모든 터미널에 보낼 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/wall.1.html'
            },
            {
              id: 'q-logrotate',
              type: 'multiple-choice',
              question: 'Tool to manage log file rotation/compression?',
              question_ko: '로그 파일이 너무 커지지 않게 주기적으로 교체/압축하는 도구는?',
              options: [
                { id: 'opt1', text: 'logrotate' },
                { id: 'opt2', text: 'logman' },
                { id: 'opt3', text: 'rotatelog' },
                { id: 'opt4', text: 'logcycle' }
              ],
              correctAnswerId: 'opt1',
              explanation: "logrotate is designed to ease administration of systems that generate large numbers of log files.",
              explanation_ko: "logrotate는 설정에 따라 오래된 로그를 압축하거나 삭제하여 디스크 공간을 관리합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/logrotate.8.html'
            },
            {
              id: 'q-sysctl',
              type: 'multiple-choice',
              question: 'Modify kernel parameters at runtime?',
              question_ko: '런타임에 커널 파라미터 값을 확인하거나 변경하려면?',
              options: [
                { id: 'opt1', text: 'kernelctl' },
                { id: 'opt2', text: 'sysctl' },
                { id: 'opt3', text: 'modprobe' },
                { id: 'opt4', text: 'kparam' }
              ],
              correctAnswerId: 'opt2',
              explanation: "sysctl is used to modify kernel parameters at runtime.",
              explanation_ko: "sysctl -w net.ipv4.ip_forward=1 처럼 커널 설정을 즉시 변경할 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/sysctl.8.html'
            },
            {
              id: 'q-ulimit',
              type: 'multiple-choice',
              question: 'Set user resource limits?',
              question_ko: '사용자 프로세스의 자원(파일 크기, 프로세스 수 등) 제한을 설정하려면?',
              options: [
                { id: 'opt1', text: 'quota' },
                { id: 'opt2', text: 'ulimit' },
                { id: 'opt3', text: 'limit' },
                { id: 'opt4', text: 'resctl' }
              ],
              correctAnswerId: 'opt2',
              explanation: "ulimit gets and sets user resource limits.",
              explanation_ko: "ulimit -a로 현재 제한을 확인하고 설정할 수 있습니다.",
              mdnUrl: 'https://www.gnu.org/software/bash/manual/html_node/The-Shopt-Builtin.html'
            },
            {
              id: 'q-modprobe',
              type: 'multiple-choice',
              question: 'Add/remove modules from the Linux kernel?',
              question_ko: '리눅스 커널 모듈을 추가하거나 제거할 때 사용하는 명령어는?',
              options: [
                { id: 'opt1', text: 'insmod' },
                { id: 'opt2', text: 'modprobe' },
                { id: 'opt3', text: 'lsmod' },
                { id: 'opt4', text: 'rmmod' }
              ],
              correctAnswerId: 'opt2',
              explanation: "modprobe intelligently adds or removes a module from the Linux kernel (handling dependencies).",
              explanation_ko: "modprobe는 의존성을 고려하여 모듈을 로드하므로 insmod보다 권장됩니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/modprobe.8.html'
            },
            {
              id: 'q-runlevel',
              type: 'multiple-choice',
              question: 'Check current runlevel?',
              question_ko: '현재 시스템의 런레벨(실행 모드)을 확인하려면?',
              options: [
                { id: 'opt1', text: 'rl' },
                { id: 'opt2', text: 'runlevel' },
                { id: 'opt3', text: 'mode' },
                { id: 'opt4', text: 'level' }
              ],
              correctAnswerId: 'opt2',
              explanation: "runlevel prints the previous and current SysV runlevel.",
              explanation_ko: "runlevel 또는 who -r 명령어로 확인합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/runlevel.8.html'
            },
            {
              id: 'q-init',
              type: 'multiple-choice',
              question: 'Change system runlevel (e.g. reboot)?',
              question_ko: '시스템 런레벨을 변경(예: 6으로 재부팅)하는 명령어는?',
              codeSnippet: 'init ____',
              options: [
                { id: 'opt1', text: '6' },
                { id: 'opt2', text: '0' },
                { id: 'opt3', text: '1' },
                { id: 'opt4', text: '3' }
              ],
              correctAnswerId: 'opt1',
              explanation: "init 6 reboots the system.",
              explanation_ko: "init 0은 종료, init 6은 재부팅을 의미합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/init.8.html'
            },
            {
              id: 'q-uptime-load',
              type: 'multiple-choice',
              question: 'What do the 3 numbers at the end of `uptime` represent?',
              question_ko: '`uptime` 결과 끝에 나오는 3개의 숫자는 무엇을 의미하나요?',
              options: [
                { id: 'opt1', text: 'Memory usage' },
                { id: 'opt2', text: 'Load average (1, 5, 15 min)' },
                { id: 'opt3', text: 'Process count' },
                { id: 'opt4', text: 'Disk IO' }
              ],
              correctAnswerId: 'opt2',
              explanation: "Load average for the past 1, 5, and 15 minutes.",
              explanation_ko: "최근 1분, 5분, 15분 간의 평균 시스템 부하(Load Average)를 나타냅니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/uptime.1.html'
            },
            {
              id: 'q-chage',
              type: 'multiple-choice',
              question: 'Change user password expiry info?',
              question_ko: '사용자 패스워드 만료일 등을 설정하는 명령어는?',
              options: [
                { id: 'opt1', text: 'usermod' },
                { id: 'opt2', text: 'chage' },
                { id: 'opt3', text: 'passwd' },
                { id: 'opt4', text: 'expiry' }
              ],
              correctAnswerId: 'opt2',
              explanation: "chage changes the number of days between password changes and last password change date.",
              explanation_ko: "chage 명령어로 패스워드 만료일, 경고일 등을 상세히 설정할 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/chage.1.html'
            }
          ]
        },
        {
          id: 'linux-adv-sec',
          title: 'Security Hardening',
          title_ko: '보안 강화',
          description: 'SELinux, Permissions, ACL.',
          description_ko: 'SELinux, 특수권한, ACL.',
          questions: [
            {
              id: 'q-sestatus',
              type: 'multiple-choice',
              question: 'Check SELinux status?',
              question_ko: 'SELinux의 현재 상태를 확인하는 명령어는?',
              options: [
                { id: 'opt1', text: 'selinux' },
                { id: 'opt2', text: 'sestatus' },
                { id: 'opt3', text: 'check-se' },
                { id: 'opt4', text: 'seinfo' }
              ],
              correctAnswerId: 'opt2',
              explanation: "sestatus displays the status of SELinux.",
              explanation_ko: "sestatus는 SELinux가 Enforcing 모드인지 등을 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/sestatus.8.html'
            },
            {
              id: 'q-chcon',
              type: 'multiple-choice',
              question: 'Change SELinux context of a file?',
              question_ko: '파일의 SELinux 보안 컨텍스트를 변경하려면?',
              options: [
                { id: 'opt1', text: 'chmod' },
                { id: 'opt2', text: 'chcon' },
                { id: 'opt3', text: 'setse' },
                { id: 'opt4', text: 'semanage' }
              ],
              correctAnswerId: 'opt2',
              explanation: "chcon changes the SELinux security context of a file.",
              explanation_ko: "chcon 명령어로 파일의 타입 등 컨텍스트를 수정할 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/chcon.1.html'
            },
            {
              id: 'q-getfacl',
              type: 'multiple-choice',
              question: 'View file Access Control Lists (ACL)?',
              question_ko: '파일에 설정된 ACL(접근 제어 목록)을 확인하려면?',
              options: [
                { id: 'opt1', text: 'ls -acl' },
                { id: 'opt2', text: 'getfacl' },
                { id: 'opt3', text: 'showacl' },
                { id: 'opt4', text: 'aclview' }
              ],
              correctAnswerId: 'opt2',
              explanation: "getfacl gets file access control lists.",
              explanation_ko: "getfacl은 기본 권한(rwx) 외에 추가된 사용자별 권한을 보여줍니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/getfacl.1.html'
            },
            {
              id: 'q-setfacl',
              type: 'multiple-choice',
              question: 'Modify file ACL?',
              question_ko: '특정 사용자에게만 파일 권한을 추가(ACL 설정)하려면?',
              codeSnippet: '____ -m u:user:rwx file',
              options: [
                { id: 'opt1', text: 'chmod' },
                { id: 'opt2', text: 'setfacl' },
                { id: 'opt3', text: 'addacl' },
                { id: 'opt4', text: 'modacl' }
              ],
              correctAnswerId: 'opt2',
              explanation: "setfacl sets file access control lists.",
              explanation_ko: "setfacl -m u:사용자:권한 형식으로 상세 권한을 제어합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/setfacl.1.html'
            },
            {
              id: 'q-chattr-i',
              type: 'multiple-choice',
              question: 'Make a file immutable (cannot be changed/deleted)?',
              question_ko: '파일을 수정하거나 삭제할 수 없게(불변) 설정하려면?',
              codeSnippet: 'chattr ____ file',
              options: [
                { id: 'opt1', text: '+i' },
                { id: 'opt2', text: '+a' },
                { id: 'opt3', text: '+r' },
                { id: 'opt4', text: '+l' }
              ],
              correctAnswerId: 'opt1',
              explanation: "+i (immutable) prevents changes to the file (even by root).",
              explanation_ko: "+i 속성이 설정되면 root도 파일을 삭제하거나 수정할 수 없습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/chattr.1.html'
            },
            {
              id: 'q-lsattr',
              type: 'multiple-choice',
              question: 'List file attributes (like immutable)?',
              question_ko: '파일에 설정된 chattr 속성들을 확인하려면?',
              options: [
                { id: 'opt1', text: 'ls -attr' },
                { id: 'opt2', text: 'lsattr' },
                { id: 'opt3', text: 'showattr' },
                { id: 'opt4', text: 'attrlist' }
              ],
              correctAnswerId: 'opt2',
              explanation: "lsattr lists file attributes on a Linux second extended file system.",
              explanation_ko: "lsattr 명령어로 i(불변), a(추가만 가능) 등의 속성을 확인합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/lsattr.1.html'
            },
            {
              id: 'q-umask-secure',
              type: 'multiple-choice',
              question: 'Most secure umask for private files?',
              question_ko: '나만 읽고 쓸 수 있는 파일이 생성되도록 하는 umask 값은?',
              options: [
                { id: 'opt1', text: '022' },
                { id: 'opt2', text: '077' },
                { id: 'opt3', text: '002' },
                { id: 'opt4', text: '000' }
              ],
              correctAnswerId: 'opt2',
              explanation: "077 results in 600 (rw-------) permissions for files.",
              explanation_ko: "077은 그룹과 기타 사용자의 모든 권한을 제거하여 소유자만 접근하게 합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/umask.1p.html'
            },
            {
              id: 'q-fail2ban',
              type: 'multiple-choice',
              question: 'Tool to ban IPs that show malicious signs?',
              question_ko: '반복적인 로그인 실패 등 악의적 징후를 보인 IP를 자동 차단하는 도구는?',
              options: [
                { id: 'opt1', text: 'iptables' },
                { id: 'opt2', text: 'fail2ban' },
                { id: 'opt3', text: 'denyhosts' },
                { id: 'opt4', text: 'blockip' }
              ],
              correctAnswerId: 'opt2',
              explanation: "fail2ban scans log files and bans IPs that show the malicious signs.",
              explanation_ko: "fail2ban은 로그를 분석하여 공격자를 방화벽으로 차단합니다.",
              mdnUrl: 'https://www.fail2ban.org/'
            },
            {
              id: 'q-ssh-config',
              type: 'multiple-choice',
              question: 'Main configuration file for SSH server?',
              question_ko: 'SSH 서버의 설정(포트, 루트 로그인 허용 여부 등)을 담은 파일은?',
              options: [
                { id: 'opt1', text: '/etc/ssh/ssh_config' },
                { id: 'opt2', text: '/etc/ssh/sshd_config' },
                { id: 'opt3', text: '/etc/sshd_config' },
                { id: 'opt4', text: '/etc/ssh_server' }
              ],
              correctAnswerId: 'opt2',
              explanation: "sshd_config is the configuration file for the SSH daemon (server). ssh_config is for client.",
              explanation_ko: "d가 붙은 sshd_config가 서버 데몬 설정 파일입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man5/sshd_config.5.html'
            },
            {
              id: 'q-ssh-root',
              type: 'multiple-choice',
              question: 'Directive to disable root login in sshd_config?',
              question_ko: 'SSH 루트 로그인을 막기 위한 설정 항목은?',
              codeSnippet: '____ no',
              options: [
                { id: 'opt1', text: 'AllowRoot' },
                { id: 'opt2', text: 'PermitRootLogin' },
                { id: 'opt3', text: 'RootLogin' },
                { id: 'opt4', text: 'BlockRoot' }
              ],
              correctAnswerId: 'opt2',
              explanation: "PermitRootLogin no disables root login via SSH.",
              explanation_ko: "PermitRootLogin no로 설정하면 보안상 안전합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man5/sshd_config.5.html'
            },
            {
              id: 'q-suid-find',
              type: 'multiple-choice',
              question: 'Find all SetUID files (security check)?',
              question_ko: '시스템 내의 모든 SetUID 파일(잠재적 위험)을 찾으려면?',
              codeSnippet: 'find / -perm ____ -type f',
              options: [
                { id: 'opt1', text: '4000' },
                { id: 'opt2', text: '2000' },
                { id: 'opt3', text: '1000' },
                { id: 'opt4', text: '6000' }
              ],
              correctAnswerId: 'opt1',
              explanation: "-perm 4000 searches for SUID bit.",
              explanation_ko: "4000은 SetUID 비트를 의미합니다. (SetGID는 2000)",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/find.1.html'
            },
            {
              id: 'q-sha256sum',
              type: 'multiple-choice',
              question: 'Calculate SHA-256 hash of a file?',
              question_ko: '파일의 무결성을 확인하기 위해 SHA-256 해시를 계산하려면?',
              options: [
                { id: 'opt1', text: 'hash' },
                { id: 'opt2', text: 'sha256sum' },
                { id: 'opt3', text: 'md5sum' },
                { id: 'opt4', text: 'cksum' }
              ],
              correctAnswerId: 'opt2',
              explanation: "sha256sum computes and checks SHA256 message digest.",
              explanation_ko: "sha256sum으로 파일의 고유 해시값을 구할 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/sha256sum.1.html'
            },
            {
              id: 'q-gpg',
              type: 'multiple-choice',
              question: 'Encrypt a file using GPG?',
              question_ko: 'GPG를 사용하여 파일을 암호화하려면?',
              codeSnippet: 'gpg -____ file',
              options: [
                { id: 'opt1', text: 'c' },
                { id: 'opt2', text: 'e' },
                { id: 'opt3', text: 'x' },
                { id: 'opt4', text: 'h' }
              ],
              correctAnswerId: 'opt1',
              explanation: "-c (symmetric) encrypts with a passphrase.",
              explanation_ko: "-c 옵션은 대칭키(비밀번호) 방식으로 파일을 암호화합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/gpg.1.html'
            },
            {
              id: 'q-auditd',
              type: 'multiple-choice',
              question: 'Daemon for writing audit records to disk?',
              question_ko: '시스템의 보안 감사를 위해 이벤트를 기록하는 데몬은?',
              options: [
                { id: 'opt1', text: 'syslogd' },
                { id: 'opt2', text: 'auditd' },
                { id: 'opt3', text: 'secd' },
                { id: 'opt4', text: 'logd' }
              ],
              correctAnswerId: 'opt2',
              explanation: "auditd is the userspace component to the Linux Auditing System.",
              explanation_ko: "auditd는 파일 접근, 시스템 콜 등 보안 관련 이벤트를 상세히 기록합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/auditd.8.html'
            },
            {
              id: 'q-ausearch',
              type: 'multiple-choice',
              question: 'Query audit daemon logs?',
              question_ko: 'auditd가 기록한 감사 로그를 검색하는 명령어는?',
              options: [
                { id: 'opt1', text: 'auditgrep' },
                { id: 'opt2', text: 'ausearch' },
                { id: 'opt3', text: 'logquery' },
                { id: 'opt4', text: 'findaudit' }
              ],
              correctAnswerId: 'opt2',
              explanation: "ausearch queries the audit daemon logs.",
              explanation_ko: "ausearch 명령어로 특정 파일 접근 기록 등을 찾을 수 있습니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/ausearch.8.html'
            },
            {
              id: 'q-apparmor',
              type: 'multiple-choice',
              question: 'Debian/Ubuntu alternative to SELinux?',
              question_ko: 'Debian/Ubuntu 계열에서 주로 사용하는 SELinux의 대안 보안 모듈은?',
              options: [
                { id: 'opt1', text: 'Defender' },
                { id: 'opt2', text: 'AppArmor' },
                { id: 'opt3', text: 'NetArmor' },
                { id: 'opt4', text: 'SecMod' }
              ],
              correctAnswerId: 'opt2',
              explanation: "AppArmor proactively protects the operating system and applications from external or internal threats.",
              explanation_ko: "AppArmor는 프로필 기반으로 프로그램의 권한을 제한합니다.",
              mdnUrl: 'https://manpages.ubuntu.com/manpages/xenial/man7/apparmor.7.html'
            },
            {
              id: 'q-visudo-syntax',
              type: 'multiple-choice',
              question: 'Check syntax of sudoers file without editing?',
              question_ko: 'sudoers 파일의 문법만 검사하려면?',
              options: [
                { id: 'opt1', text: 'visudo -c' },
                { id: 'opt2', text: 'sudo -t' },
                { id: 'opt3', text: 'checksudo' },
                { id: 'opt4', text: 'syntax' }
              ],
              correctAnswerId: 'opt1',
              explanation: "-c (check) check mode.",
              explanation_ko: "visudo -c 명령은 편집 없이 문법 오류만 검사합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man8/visudo.8.html'
            },
            {
              id: 'q-passwd-lock',
              type: 'multiple-choice',
              question: 'Lock a user account?',
              question_ko: '사용자 계정을 잠궈서 로그인을 막으려면?',
              codeSnippet: 'passwd ____ user',
              options: [
                { id: 'opt1', text: '-d' },
                { id: 'opt2', text: '-l' },
                { id: 'opt3', text: '-u' },
                { id: 'opt4', text: '-x' }
              ],
              correctAnswerId: 'opt2',
              explanation: "-l (lock) locks the password of the named account.",
              explanation_ko: "-l 옵션은 비밀번호 앞에 !를 붙여 잠급니다. 풀 때는 -u (unlock)를 씁니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/passwd.1.html'
            },
            {
              id: 'q-su-login',
              type: 'multiple-choice',
              question: 'Switch user and load their environment (login shell)?',
              question_ko: '사용자 전환 시 그 사용자의 환경변수까지 모두 로드하려면?',
              codeSnippet: 'su ____ user',
              options: [
                { id: 'opt1', text: '-' },
                { id: 'opt2', text: '-e' },
                { id: 'opt3', text: '-f' },
                { id: 'opt4', text: '-s' }
              ],
              correctAnswerId: 'opt1',
              explanation: "- (or -l) starts the shell as a login shell with an environment similar to a real login.",
              explanation_ko: "하이픈(-)을 붙여야 해당 사용자의 홈 디렉토리, PATH 등이 제대로 로드됩니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/su.1.html'
            },
            {
              id: 'q-openssl',
              type: 'multiple-choice',
              question: 'General purpose cryptography toolkit?',
              question_ko: '인증서 생성, 암호화 등 다양한 암호화 작업을 수행하는 도구는?',
              options: [
                { id: 'opt1', text: 'crypttool' },
                { id: 'opt2', text: 'openssl' },
                { id: 'opt3', text: 'certbot' },
                { id: 'opt4', text: 'keytool' }
              ],
              correctAnswerId: 'opt2',
              explanation: "OpenSSL is a robust, commercial-grade, and full-featured toolkit for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols.",
              explanation_ko: "OpenSSL은 SSL/TLS 인증서 관리 및 암호화의 사실상 표준 도구입니다.",
              mdnUrl: 'https://www.openssl.org/docs/man1.1.1/man1/openssl.html'
            }
          ]
        },
        {
          id: 'linux-container',
          title: 'Containers & Virt',
          title_ko: '컨테이너 & 가상화',
          description: 'Docker, Podman, KVM.',
          description_ko: '도커, 포드맨, 가상화 기초.',
          questions: [
            {
              id: 'q-docker-run',
              type: 'multiple-choice',
              question: 'Run a command in a new container?',
              question_ko: '새 컨테이너를 생성하고 실행하는 도커 명령어는?',
              codeSnippet: 'docker ____ nginx',
              options: [
                { id: 'opt1', text: 'start' },
                { id: 'opt2', text: 'run' },
                { id: 'opt3', text: 'create' },
                { id: 'opt4', text: 'exec' }
              ],
              correctAnswerId: 'opt2',
              explanation: "docker run creates and starts a container in one go.",
              explanation_ko: "docker run은 이미지를 내려받고 컨테이너를 생성 및 실행합니다. start는 이미 생성된 컨테이너를 켭니다.",
              mdnUrl: 'https://docs.docker.com/engine/reference/commandline/run/'
            },
            {
              id: 'q-docker-ps',
              type: 'multiple-choice',
              question: 'List running containers?',
              question_ko: '현재 실행 중인 컨테이너 목록을 보려면?',
              options: [
                { id: 'opt1', text: 'docker ls' },
                { id: 'opt2', text: 'docker ps' },
                { id: 'opt3', text: 'docker list' },
                { id: 'opt4', text: 'docker show' }
              ],
              correctAnswerId: 'opt2',
              explanation: "docker ps lists containers.",
              explanation_ko: "docker ps는 실행 중인 컨테이너만 보여줍니다. -a를 붙이면 정지된 것도 보여줍니다.",
              mdnUrl: 'https://docs.docker.com/engine/reference/commandline/ps/'
            },
            {
              id: 'q-docker-exec',
              type: 'multiple-choice',
              question: 'Run a command in a running container?',
              question_ko: '이미 실행 중인 컨테이너 내부에 명령어를 실행(접속)하려면?',
              codeSnippet: 'docker ____ -it container bash',
              options: [
                { id: 'opt1', text: 'run' },
                { id: 'opt2', text: 'exec' },
                { id: 'opt3', text: 'enter' },
                { id: 'opt4', text: 'attach' }
              ],
              correctAnswerId: 'opt2',
              explanation: "docker exec runs a new command in a running container.",
              explanation_ko: "docker exec -it ... bash 명령으로 컨테이너 쉘에 접속할 수 있습니다.",
              mdnUrl: 'https://docs.docker.com/engine/reference/commandline/exec/'
            },
            {
              id: 'q-docker-build',
              type: 'multiple-choice',
              question: 'Build an image from a Dockerfile?',
              question_ko: 'Dockerfile을 기반으로 이미지를 빌드하려면?',
              options: [
                { id: 'opt1', text: 'docker make' },
                { id: 'opt2', text: 'docker build' },
                { id: 'opt3', text: 'docker create' },
                { id: 'opt4', text: 'docker compile' }
              ],
              correctAnswerId: 'opt2',
              explanation: "docker build builds an image from a Dockerfile.",
              explanation_ko: "docker build -t 이름 . 형태로 현재 디렉토리의 Dockerfile을 빌드합니다.",
              mdnUrl: 'https://docs.docker.com/engine/reference/commandline/build/'
            },
            {
              id: 'q-podman',
              type: 'multiple-choice',
              question: 'Daemonless alternative to Docker?',
              question_ko: '도커와 호환되지만 데몬 없이 작동하는 컨테이너 도구는?',
              options: [
                { id: 'opt1', text: 'kubernetes' },
                { id: 'opt2', text: 'podman' },
                { id: 'opt3', text: 'lxc' },
                { id: 'opt4', text: 'rkt' }
              ],
              correctAnswerId: 'opt2',
              explanation: "Podman is a daemonless container engine.",
              explanation_ko: "Podman은 도커 명령어와 거의 동일하지만 root 권한 없이도 실행 가능합니다.",
              mdnUrl: 'https://podman.io/'
            },
            {
              id: 'q-docker-images',
              type: 'multiple-choice',
              question: 'List locally stored images?',
              question_ko: '로컬에 다운로드된 이미지 목록을 보려면?',
              options: [
                { id: 'opt1', text: 'docker list' },
                { id: 'opt2', text: 'docker images' },
                { id: 'opt3', text: 'docker show' },
                { id: 'opt4', text: 'docker ls' }
              ],
              correctAnswerId: 'opt2',
              explanation: "docker images lists images.",
              explanation_ko: "docker images 명령어로 로컬 저장소의 이미지들을 확인합니다.",
              mdnUrl: 'https://docs.docker.com/engine/reference/commandline/images/'
            },
            {
              id: 'q-docker-rm',
              type: 'multiple-choice',
              question: 'Remove a container?',
              question_ko: '컨테이너를 삭제하려면?',
              options: [
                { id: 'opt1', text: 'docker del' },
                { id: 'opt2', text: 'docker rm' },
                { id: 'opt3', text: 'docker rmi' },
                { id: 'opt4', text: 'docker kill' }
              ],
              correctAnswerId: 'opt2',
              explanation: "docker rm removes one or more containers.",
              explanation_ko: "docker rm은 컨테이너를 삭제하고, docker rmi는 이미지를 삭제합니다.",
              mdnUrl: 'https://docs.docker.com/engine/reference/commandline/rm/'
            },
            {
              id: 'q-docker-rmi',
              type: 'multiple-choice',
              question: 'Remove an image?',
              question_ko: '이미지를 삭제하려면?',
              options: [
                { id: 'opt1', text: 'docker rm' },
                { id: 'opt2', text: 'docker rmi' },
                { id: 'opt3', text: 'docker del' },
                { id: 'opt4', text: 'docker purge' }
              ],
              correctAnswerId: 'opt2',
              explanation: "docker rmi removes one or more images.",
              explanation_ko: "rmi (remove image) 명령어를 사용합니다.",
              mdnUrl: 'https://docs.docker.com/engine/reference/commandline/rmi/'
            },
            {
              id: 'q-virsh',
              type: 'multiple-choice',
              question: 'Command line interface for managing virtual machines (libvirt)?',
              question_ko: 'KVM/QEMU 가상머신을 관리하는 커맨드라인 도구는?',
              options: [
                { id: 'opt1', text: 'vmctl' },
                { id: 'opt2', text: 'virsh' },
                { id: 'opt3', text: 'kvmctl' },
                { id: 'opt4', text: 'virt' }
              ],
              correctAnswerId: 'opt2',
              explanation: "virsh is a management user interface for virdomains.",
              explanation_ko: "virsh list, virsh start 등으로 가상머신을 제어합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man1/virsh.1.html'
            },
            {
              id: 'q-docker-logs',
              type: 'multiple-choice',
              question: 'Fetch logs of a container?',
              question_ko: '컨테이너의 로그(표준 출력)를 확인하려면?',
              options: [
                { id: 'opt1', text: 'docker tail' },
                { id: 'opt2', text: 'docker logs' },
                { id: 'opt3', text: 'docker cat' },
                { id: 'opt4', text: 'docker show' }
              ],
              correctAnswerId: 'opt2',
              explanation: "docker logs fetches the logs of a container.",
              explanation_ko: "docker logs -f 컨테이너명으로 로그를 실시간 확인합니다.",
              mdnUrl: 'https://docs.docker.com/engine/reference/commandline/logs/'
            },
            {
              id: 'q-docker-compose',
              type: 'multiple-choice',
              question: 'Tool for defining and running multi-container applications?',
              question_ko: '여러 컨테이너를 정의하고 실행하기 위한 도구는?',
              options: [
                { id: 'opt1', text: 'docker-swarm' },
                { id: 'opt2', text: 'docker-compose' },
                { id: 'opt3', text: 'docker-multi' },
                { id: 'opt4', text: 'docker-stack' }
              ],
              correctAnswerId: 'opt2',
              explanation: "docker-compose is a tool for defining and running multi-container Docker applications.",
              explanation_ko: "docker-compose.yml 파일에 서비스를 정의하고 docker-compose up으로 실행합니다.",
              mdnUrl: 'https://docs.docker.com/compose/'
            },
            {
              id: 'q-cgroup',
              type: 'multiple-choice',
              question: 'Linux kernel feature to limit resource usage?',
              question_ko: '프로세스 그룹의 자원(CPU, 메모리) 사용을 제한하는 리눅스 커널 기능은?',
              options: [
                { id: 'opt1', text: 'namespace' },
                { id: 'opt2', text: 'cgroups' },
                { id: 'opt3', text: 'capabilities' },
                { id: 'opt4', text: 'seccomp' }
              ],
              correctAnswerId: 'opt2',
              explanation: "Control Groups (cgroups) limit, account for, and isolate the resource usage.",
              explanation_ko: "cgroups(Control Groups)는 컨테이너 기술의 핵심 중 하나로 자원 격리를 담당합니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man7/cgroups.7.html'
            },
            {
              id: 'q-namespace',
              type: 'multiple-choice',
              question: 'Feature to isolate system resources like PID, Network?',
              question_ko: '프로세스, 네트워크, 마운트 포인트 등을 격리하여 독립된 환경을 만드는 기술은?',
              options: [
                { id: 'opt1', text: 'chroot' },
                { id: 'opt2', text: 'namespaces' },
                { id: 'opt3', text: 'jail' },
                { id: 'opt4', text: 'zones' }
              ],
              correctAnswerId: 'opt2',
              explanation: "Namespaces wrap a global system resource in an abstraction that makes it appear to the processes within the namespace that they have their own isolated instance.",
              explanation_ko: "Namespace는 컨테이너가 별도의 시스템인 것처럼 보이게 하는 격리 기술입니다.",
              mdnUrl: 'https://man7.org/linux/man-pages/man7/namespaces.7.html'
            },
            {
              id: 'q-lxc',
              type: 'multiple-choice',
              question: 'Linux Containers (userspace interface)?',
              question_ko: '도커 이전에 사용되던 리눅스 컨테이너 기술(OS 레벨 가상화)은?',
              options: [
                { id: 'opt1', text: 'xen' },
                { id: 'opt2', text: 'lxc' },
                { id: 'opt3', text: 'kvm' },
                { id: 'opt4', text: 'qemu' }
              ],
              correctAnswerId: 'opt2',
              explanation: "LXC (Linux Containers) is an operating-system-level virtualization method.",
              explanation_ko: "LXC는 시스템 컨테이너를 제공하며, 도커 초기 버전의 실행 드라이버로 사용되었습니다.",
              mdnUrl: 'https://linuxcontainers.org/'
            },
            {
              id: 'q-docker-stop',
              type: 'multiple-choice',
              question: 'Stop a running container gracefully?',
              question_ko: '컨테이너를 정상적으로 종료(SIGTERM)하려면?',
              options: [
                { id: 'opt1', text: 'docker kill' },
                { id: 'opt2', text: 'docker stop' },
                { id: 'opt3', text: 'docker down' },
                { id: 'opt4', text: 'docker halt' }
              ],
              correctAnswerId: 'opt2',
              explanation: "docker stop stops a running container.",
              explanation_ko: "docker stop은 먼저 SIGTERM을 보내고, 반응이 없으면 SIGKILL을 보냅니다.",
              mdnUrl: 'https://docs.docker.com/engine/reference/commandline/stop/'
            },
            {
              id: 'q-docker-pull',
              type: 'multiple-choice',
              question: 'Download an image from a registry?',
              question_ko: '레지스트리(Docker Hub)에서 이미지를 다운로드하려면?',
              options: [
                { id: 'opt1', text: 'docker get' },
                { id: 'opt2', text: 'docker pull' },
                { id: 'opt3', text: 'docker fetch' },
                { id: 'opt4', text: 'docker download' }
              ],
              correctAnswerId: 'opt2',
              explanation: "docker pull pulls an image or a repository from a registry.",
              explanation_ko: "docker pull ubuntu 처럼 이미지를 미리 받아올 수 있습니다.",
              mdnUrl: 'https://docs.docker.com/engine/reference/commandline/pull/'
            },
            {
              id: 'q-overlayfs',
              type: 'multiple-choice',
              question: 'Filesystem commonly used by Docker?',
              question_ko: '도커가 레이어(Layer) 이미지를 구현하기 위해 주로 사용하는 유니온 파일 시스템은?',
              options: [
                { id: 'opt1', text: 'ntfs' },
                { id: 'opt2', text: 'overlay2' },
                { id: 'opt3', text: 'ext4' },
                { id: 'opt4', text: 'xfs' }
              ],
              correctAnswerId: 'opt2',
              explanation: "OverlayFS (overlay2) is a union mount filesystem implementation for Linux.",
              explanation_ko: "overlay2는 효율적인 레이어 관리를 위해 도커에서 기본으로 사용합니다.",
              mdnUrl: 'https://docs.docker.com/storage/storagedriver/overlayfs-driver/'
            },
            {
              id: 'q-docker-inspect',
              type: 'multiple-choice',
              question: 'Return low-level information on Docker objects?',
              question_ko: '컨테이너나 이미지의 상세 정보(IP, 마운트 정보 등 JSON 형태)를 보려면?',
              options: [
                { id: 'opt1', text: 'docker info' },
                { id: 'opt2', text: 'docker inspect' },
                { id: 'opt3', text: 'docker detail' },
                { id: 'opt4', text: 'docker status' }
              ],
              correctAnswerId: 'opt2',
              explanation: "docker inspect returns low-level information on Docker objects.",
              explanation_ko: "docker inspect는 매우 상세한 설정 정보를 JSON 형식으로 출력합니다.",
              mdnUrl: 'https://docs.docker.com/engine/reference/commandline/inspect/'
            },
            {
              id: 'q-kubectl',
              type: 'multiple-choice',
              question: 'Command line tool for controlling Kubernetes clusters?',
              question_ko: '쿠버네티스 클러스터를 제어하는 커맨드라인 도구는?',
              options: [
                { id: 'opt1', text: 'kubeadm' },
                { id: 'opt2', text: 'kubectl' },
                { id: 'opt3', text: 'kubectrl' },
                { id: 'opt4', text: 'k8s' }
              ],
              correctAnswerId: 'opt2',
              explanation: "kubectl controls the Kubernetes cluster manager.",
              explanation_ko: "kubectl get pods 처럼 k8s 리소스를 관리합니다.",
              mdnUrl: 'https://kubernetes.io/docs/reference/kubectl/'
            },
            {
              id: 'q-docker-prune',
              type: 'multiple-choice',
              question: 'Remove unused data (containers, images, networks)?',
              question_ko: '사용하지 않는 모든 데이터(컨테이너, 이미지 등)를 정리하여 공간을 확보하려면?',
              codeSnippet: 'docker system ____',
              options: [
                { id: 'opt1', text: 'clean' },
                { id: 'opt2', text: 'prune' },
                { id: 'opt3', text: 'gc' },
                { id: 'opt4', text: 'purge' }
              ],
              correctAnswerId: 'opt2',
              explanation: "docker system prune removes unused data.",
              explanation_ko: "prune 명령은 중지된 컨테이너, 미사용 네트워크, 댕글링 이미지를 모두 삭제합니다.",
              mdnUrl: 'https://docs.docker.com/engine/reference/commandline/system_prune/'
            }
          ]
        }
      ]
    },

  ]
};
