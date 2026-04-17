# 신호현 ❤️ 윤유진 모바일 청첩장

- **배포 URL**: 
- **결혼식 일시**: 
- **예식장**: 

## 기술 스택

- React + TypeScript + Vite
- SCSS
- 배포: Vercel

## 주요 기능

- 모바일 반응형 디자인
- 이미지 갤러리
- 네이버 지도 (웨딩홀 위치)
- 카카오톡 공유
- 카카오 내비 / 네이버 지도 / 티맵 연동
- 방명록 (백엔드 연동)
- 참석 의사 전달 (백엔드 연동)

## 환경변수 (.env)

| 변수 | 설명 |
|------|------|
| `VITE_NAVER_MAP_CLIENT_ID` | 네이버 지도 API Client ID |
| `VITE_KAKAO_SDK_JS_KEY` | 카카오 SDK JavaScript 키 |
| `VITE_SERVER_URL` | 백엔드 서버 URL + `/api` (예: `https://xxx.onrender.com/api`) |
| `VITE_STATIC_ONLY` | `true`로 설정 시 방명록/RSVP 비활성화 |

## 로컬 실행

```bash
git clone https://github.com/God-Hyun/wedding-invitation.git
cd wedding-invitation
npm install
npm run dev
# → http://localhost:3000
```

## Vercel 배포

- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `build`
- 환경변수: `.env` 내용을 Vercel 대시보드에 직접 입력

## 백엔드

- 저장소: https://github.com/God-Hyun/wedding-invitation-server
- 배포: Render (Free tier)
- 관리자 페이지: 
