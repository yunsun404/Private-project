import React from 'react';
import ErrorSearch from "../components/TagPage/ErrorSearch.jsx"; 
import TopErrors from "../components/TagPage/TopErrors.jsx"; // import한 이름
import "./TagPage.css";

// 파일 역할에 맞게 함수 이름을 TagPage로 변경했습니다.
export default function TagPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>에러 태그 검색</h1>
      
      <div style={{ display: "flex", gap: "20px" }}>
        {/* 왼쪽: 에러 검색 */}
        <div style={{ flex: 1 }}>
          <ErrorSearch />
        </div>
        
        {/* 오른쪽: 많이 틀린 에러 TOP */}
        <div style={{ flex: 1 }}>
          {/* ▼ 오류 수정: import한 이름(TopErrors)과 통일시켰습니다 */}
          <TopErrors /> 
        </div>
      </div>
    </div>
  );
}