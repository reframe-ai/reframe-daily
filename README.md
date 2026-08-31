# 오늘의 AI — Re:Frame Daily

AI 최신 소식과 활용 포인트를 쉽게 전하는 데일리 브리핑 사이트입니다.

- 사이트: https://reframe-daily.vercel.app
- 메인 사이트: https://reframe-ai.github.io (푸터에서 링크)

## 발행 방법

`src/content/daily/YYYY-MM-DD.json` 파일을 main 브랜치에 추가하면
Vercel이 자동으로 빌드·배포합니다.

### 콘텐츠 구조 (JSON)

| 필드 | 설명 |
| --- | --- |
| `issue` | 호수 (Vol. 번호, 정수) |
| `date` | 발행일 `YYYY-MM-DD` (파일명과 동일) |
| `keywords` | 해시태그 키워드 배열 |
| `tools` | 🔧 AI 도구·서비스 뉴스 (약 4건) |
| `policy` | ⚖️ 사회·교육 뉴스 (약 2건) |
| `practice` | ✏️ 오늘의 실습 (프롬프트 + 활용 팁) |

각 뉴스 항목: `title`, `source`, `url`, `threeLines`(핵심 3줄), `simpleExplain`(쉽게 말하면), `whyItMatters`(왜 중요하냐면)

## 개발

| Command | Action |
| --- | --- |
| `npm install` | 의존성 설치 |
| `npm run dev` | 로컬 개발 서버 (localhost:4321) |
| `npm run build` | 프로덕션 빌드 (./dist/) |
