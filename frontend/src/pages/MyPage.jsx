import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: "solh22",
    password: "1234",
    profile: "초보 개발자입니다!",
    email: "solh22@example.com",
    photo: "", // ✅ 사진(base64 문자열) 저장
  });

  // ✅ localStorage에 저장된 값 있으면 불러오기
  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  return (
    <div style={{ padding: 20, maxWidth: 520 }}>
      <h1>마이페이지</h1>

      <div
        style={{
          marginTop: 16,
          border: "1px solid #444",
          padding: 16,
          borderRadius: 12,
          display: "grid",
          gap: 12,
        }}
      >
        {/* ✅ 프로필 사진 */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid #666",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#222",
            }}
          >
            {user.photo ? (
              <img
                src={user.photo}
                alt="profile"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <span style={{ fontSize: 12, opacity: 0.8 }}>No Photo</span>
            )}
          </div>

          <div>
            <div style={{ fontWeight: 700 }}>{user.id}</div>
            <div style={{ fontSize: 13, opacity: 0.9 }}>{user.email}</div>
          </div>
        </div>

        <p>프로필: {user.profile}</p>

        {/* ⚠️ 실무에서는 비밀번호 화면에 표시 안 함 (일단 과제라면 OK) */}
        <p>비밀번호: {user.password}</p>
      </div>

      <button
        style={{ marginTop: 16, padding: "10px 14px", borderRadius: 10 }}
        onClick={() => navigate("/mypage/edit")}
      >
        수정하기
      </button>
    </div>
  );
}