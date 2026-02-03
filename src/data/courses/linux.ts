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
    }
  ]
};