import type { Course } from '../../types';

export const networkCourse: Course = {
  id: 'network-infra',
  role: 'infra',
  title: 'Network & Ops',
  title_ko: '네트워크 & 운영',
  icon: 'Network', 
  chapters: [
    {
      id: 'net-tools',
      title: 'Network Tools',
      title_ko: '네트워크 도구',
      units: [
        {
          id: 'net-conn',
          title: 'Connectivity',
          title_ko: '연결 확인',
          description: 'Testing connection and DNS.',
          description_ko: '연결 상태 및 DNS 테스트.',
          questions: [
            {
              id: 'q-curl-1',
              type: 'multiple-choice',
              question: 'Which tool is used to transfer data from or to a server, also useful for debugging HTTP?',
              question_ko: '서버와 데이터를 주고받거나 HTTP 요청을 디버깅할 때 사용하는 도구는?',
              codeSnippet: `____ -I https://google.com`,
              options: [
                { id: 'opt1', text: 'ping' },
                { id: 'opt2', text: 'ssh' },
                { id: 'opt3', text: 'curl' },
                { id: 'opt4', text: 'ftp' },
              ],
              correctAnswerId: 'opt3',
              explanation: "curl is a command line tool and library for transferring data with URLs.",
              explanation_ko: "curl은 URL을 통해 데이터를 전송하는 도구로, HTTP 헤더 확인(-I) 등 디버깅에 매우 유용합니다.",
              mdnUrl: 'https://curl.se/'
            },
            {
              id: 'q-port-1',
              type: 'multiple-choice',
              question: 'Which command displays network connections, routing tables, and interface statistics?',
              question_ko: '네트워크 연결, 라우팅 테이블, 인터페이스 통계를 보여주는 명령어는?',
              options: [
                { id: 'opt1', text: 'netstat' },
                { id: 'opt2', text: 'nslookup' },
                { id: 'opt3', text: 'traceroute' },
                { id: 'opt4', text: 'dig' },
              ],
              correctAnswerId: 'opt1',
              explanation: "netstat (network statistics) prints network connections, routing tables, interface statistics, masquerade connections, and multicast memberships.",
              explanation_ko: "netstat(또는 최신 ss)은 현재 열려있는 포트와 연결 상태를 확인할 때 필수적입니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Netstat'
            },
            {
              id: 'q-dns-1',
              type: 'multiple-choice',
              question: 'Which command performs a DNS lookup to find the IP address of a domain?',
              question_ko: '도메인의 IP 주소를 찾기 위해 DNS 조회를 수행하는 명령어는?',
              options: [
                { id: 'opt1', text: 'ip addr' },
                { id: 'opt2', text: 'dig' },
                { id: 'opt3', text: 'route' },
                { id: 'opt4', text: 'arp' },
              ],
              correctAnswerId: 'opt2',
              explanation: "dig (Domain Information Groper) queries DNS name servers for information.",
              explanation_ko: "dig 또는 nslookup을 사용하여 도메인 네임 서버에 질의할 수 있습니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Dig_(command)'
            }
          ]
        },
        {
          id: 'net-firewall',
          title: 'Firewall & Security',
          title_ko: '방화벽 & 보안',
          description: 'Basic firewall concepts and tools.',
          description_ko: '기초 방화벽 개념과 도구.',
          questions: [
            {
              id: 'q-iptables-1',
              type: 'multiple-choice',
              question: 'Which kernel framework is used to filter packets in Linux?',
              question_ko: '리눅스에서 패킷을 필터링하는 커널 프레임워크(도구)는?',
              options: [
                { id: 'opt1', text: 'nginx' },
                { id: 'opt2', text: 'iptables' },
                { id: 'opt3', text: 'wireshark' },
                { id: 'opt4', text: 'systemd' },
              ],
              correctAnswerId: 'opt2',
              explanation: "iptables is a user-space utility program that allows a system administrator to configure the IP packet filter rules of the Linux kernel firewall.",
              explanation_ko: "iptables는 리눅스 커널 방화벽의 규칙을 설정하는 도구입니다. 최근에는 nftables로 대체되고 있습니다.",
              mdnUrl: 'https://en.wikipedia.org/wiki/Iptables'
            }
          ]
        }
      ]
    },
    {
      id: 'net-concepts',
      title: 'Networking Concepts',
      title_ko: '네트워크 개념',
      units: [
        {
          id: 'net-http',
          title: 'HTTP for Infra',
          title_ko: '인프라를 위한 HTTP',
          description: 'Status codes and debugging.',
          description_ko: '상태 코드와 디버깅.',
          questions: [
            {
              id: 'q-http-502',
              type: 'multiple-choice',
              question: 'What does a 502 Bad Gateway error usually indicate?',
              question_ko: '502 Bad Gateway 에러는 보통 무엇을 의미하나요?',
              options: [
                { id: 'opt1', text: 'The server crashed' },
                { id: 'opt2', text: 'One server received an invalid response from an upstream server' },
                { id: 'opt3', text: 'The page was not found' },
                { id: 'opt4', text: 'Permission denied' },
              ],
              correctAnswerId: 'opt2',
              explanation: "A 502 error means that a server (acting as a gateway or proxy) received an invalid response from an upstream server.",
              explanation_ko: "502는 게이트웨이나 프록시 역할을 하는 서버가 업스트림 서버(예: WAS)로부터 잘못된 응답을 받았을 때 발생합니다. WAS가 죽었거나 응답이 없을 때 자주 봅니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502'
            },
            {
              id: 'q-http-504',
              type: 'multiple-choice',
              question: 'What defines a 504 Gateway Timeout?',
              question_ko: '504 Gateway Timeout은 언제 발생하나요?',
              options: [
                { id: 'opt1', text: 'Client lost connection' },
                { id: 'opt2', text: 'Upstream server failed to send a request in time' },
                { id: 'opt3', text: 'DNS lookup failed' },
                { id: 'opt4', text: 'Database is full' },
              ],
              correctAnswerId: 'opt2',
              explanation: "504 indicates that the server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.",
              explanation_ko: "504는 프록시 서버가 업스트림 서버로부터 제때 응답을 받지 못했을 때 발생합니다. 쿼리가 너무 오래 걸리거나 WAS가 행(hang) 걸렸을 때 발생합니다.",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504'
            }
          ]
        },
        {
          id: 'net-tcp',
          title: 'TCP/IP',
          title_ko: 'TCP/IP',
          description: 'Understanding connections.',
          description_ko: '연결 이해하기.',
          questions: [
            {
              id: 'q-tcp-1',
              type: 'multiple-choice',
              question: 'What is the first step of the TCP 3-way handshake?',
              question_ko: 'TCP 3-way handshake의 첫 번째 단계는?',
              options: [
                { id: 'opt1', text: 'SYN' },
                { id: 'opt2', text: 'ACK' },
                { id: 'opt3', text: 'SYN-ACK' },
                { id: 'opt4', text: 'FIN' },
              ],
              correctAnswerId: 'opt1',
              explanation: "The client sends a SYN (synchronize) packet to the server to initiate a connection.",
              explanation_ko: "클라이언트가 서버에 연결을 요청하기 위해 SYN 패킷을 보냅니다. (SYN -> SYN-ACK -> ACK)",
              mdnUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/TCP_handshake'
            }
          ]
        }
      ]
    }
  ]
};
