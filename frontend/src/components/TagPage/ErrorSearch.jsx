import "./ErrorSearch.css";

const causes = [
  "null 참조",
  "인덱스 범위 초과",
  "SQL 문법 오류",
  "CORS",
  "포트/서버 꺼짐",
  "타입 불일치",
];

function ErrorSearch() {
  return (
    <div className="card">
      <div className="cardTitleRow">
        <h2 className="cardTitle">에러 검색</h2>
        <span className="badge">Search</span>
      </div>

      <div className="searchRow">
        <input
          className="input"
          type="text"
          placeholder="에러 코드 입력 (ex: NullPointerException)"
        />
        <button className="btn">검색</button>
      </div>

      {/* 👇 태그 영역 */}
      <div className="tags">
        {causes.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ErrorSearch;
