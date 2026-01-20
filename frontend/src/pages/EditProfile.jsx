import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: "solh22",
    password: "1234",
    profile: "초보 개발자입니다!",
    email: "solh22@example.com",
    photo: "", // ✅ base64
  });

  // ✅ 기존 저장값 불러오기
  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // ✅ 사진 선택하면 base64로 변환해서 저장(새로고침해도 유지 가능)
  function onPhotoChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setForm((prev) => ({ ...prev, photo: reader.result })); // reader.result = base64
    };
    reader.readAsDataURL(file);
  }

  function onSave() {
    localStorage.setItem("userProfile", JSON.stringify(form));
    navigate("/mypage");
  }

  return (
    <div style={{ padding: 20, maxWidth: 520 }}>
      <h1>프로필 수정</h1>

      <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
        {/* ✅ 사진 변경 영역 */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid #666",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#222",
            }}
          >
            {form.photo ? (
              <img
                src={form.photo}
                alt="preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <span style={{ fontSize: 12, opacity: 0.8 }}>No Photo</span>
            )}
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>프로필 사진</div>
            <input type="file" accept="image/*" onChange={onPhotoChange} />
          </div>
        </div>

        <label>
          아이디
          <input
            name="id"
            value={form.id}
            onChange={onChange}
            style={{ width: "100%", padding: 10, borderRadius: 10 }}
          />
        </label>

        <label>
          비밀번호
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
            style={{ width: "100%", padding: 10, borderRadius: 10 }}
          />
        </label>

        <label>
          프로필 소개
          <input
            name="profile"
            value={form.profile}
            onChange={onChange}
            style={{ width: "100%", padding: 10, borderRadius: 10 }}
          />
        </label>

        <label>
          이메일
          <input
            name="email"
            value={form.email}
            onChange={onChange}
            style={{ width: "100%", padding: 10, borderRadius: 10 }}
          />
        </label>

        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <button onClick={onSave} style={{ padding: "10px 14px", borderRadius: 10 }}>
            저장하기
          </button>

          <button
            onClick={() => navigate("/mypage")}
            style={{ padding: "10px 14px", borderRadius: 10 }}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
