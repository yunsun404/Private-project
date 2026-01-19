// src/data/dummyBugs.js

export const dummyBugs = [
  {
    id: 1,
    title: "로그인 버튼이 안 눌려요",
    type: "실행 중 오류",
    content: "onClick 이벤트를 연결 안 했음...",
    date: "2024-05-01",
    solved: false,
  },
  {
    id: 2,
    title: "배열 범위 초과 에러",
    type: "배열/리스트 범위 초과 오류",
    content: "index가 -1이 나옵니다.",
    date: "2024-05-02",
    solved: true,
  },
  {
    id: 3,
    title: "NullPointerException 발생",
    type: "널 값 참조 오류 (NullPointerException)",
    content: "객체가 비어있는데 점을 찍었어요.",
    date: "2024-05-03",
    solved: true,
  },
  {
    id: 4,
    title: "서버 연결 실패",
    type: "서버 통신 오류",
    content: "API 주소가 틀렸습니다.",
    date: "2024-05-04",
    solved: false,
  },
];
