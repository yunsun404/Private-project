import { Link } from "react-router-dom"
import "./Header.css" // CSS 파일 연결 필수!

function Header() {
  return (
    // 1. 바깥쪽 틀 (하얀 배경, 회색 줄)
    <header className="header">
      
      {/* 2. 안쪽 박스 (이게 있어야 양쪽 끝으로 벌어집니다!) */}
      <div className="header-inner">
        
        {/* 왼쪽: 로고 */}
        <div className="logo">
          🐞 BugNote
        </div>

        {/* 오른쪽: 메뉴 */}
        <nav className="nav">
          <Link to="/">홈</Link>
          <Link to="/list">에러 기록</Link>
          <Link to="/write">작성</Link>
          <Link to="/tags">태그</Link>
          <Link to="/mypage">마이페이지</Link>
        </nav>
        
      </div>
    </header>
  )
}

export default Header




