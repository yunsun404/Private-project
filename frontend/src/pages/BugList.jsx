import { useState } from "react";
import { dummyBugs } from "../data/dummyBugs"; // 데이터 가져오기
import "./BugList.css"; // CSS 파일 연결

// 작성 페이지에 있는 카테고리 목록과 동일하게 구성
const categories = [
  "전체",
  "널 값 참조 오류 (NullPointerException)",
  "배열/리스트 범위 초과 오류",
  "문법 오류",
  "타입 오류",
  "서버 통신 오류",
  "실행 중 오류",
  "기타"
];

function ErrorList() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  // 선택된 카테고리에 따라 게시물 필터링
  const filteredBugs = selectedCategory === "전체"
    ? dummyBugs
    : dummyBugs.filter((bug) => bug.type === selectedCategory);

  return (
    <div className="error-list-page">
      
      {/* 제목 영역 */}
      <div className="list-header">
        <h1>에러 기록 목록</h1>
        <p>유형별로 내가 겪은 에러를 모아보세요.</p>
      </div>

      {/* 1. 카테고리 필터 (탭 버튼) */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 2. 에러 리스트 표시 영역 */}
      <div className="bug-list">
        {filteredBugs.length > 0 ? (
          filteredBugs.map((bug) => (
            <div key={bug.id} className="bug-card">
              <div className="bug-header">
                <span className="bug-type">{bug.type}</span>
                <span className={`bug-status ${bug.solved ? "solved" : "unsolved"}`}>
                  {bug.solved ? "해결됨" : "미해결"}
                </span>
              </div>
              <h3 className="bug-title">{bug.title}</h3>
              <p className="bug-content">{bug.content}</p>
              <span className="bug-date">{bug.date}</span>
            </div>
          ))
        ) : (
          <div className="empty-message">
            <p>등록된 에러 기록이 없습니다. 🐞</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ErrorList;
//목록 페이지