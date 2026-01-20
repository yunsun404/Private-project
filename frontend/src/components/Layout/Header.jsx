import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <header className="header">
      
      <div className="container">
        <div className="header-inner">
          <div className="logo">🐞 BugNote</div>

          <nav className="nav">
            <Link to="/">홈</Link>
            <Link to="/list">에러 기록</Link>
            <Link to="/write">작성</Link>
            <Link to="/tags">태그</Link>
            <Link to="/mypage">마이페이지</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header





