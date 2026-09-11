# 통합급여 지원센터 홈페이지

이 폴더는 Supabase와 연결되는 정적 홈페이지입니다.

## 포함 기능
- 홈: GPS / 연차계산기 / 퇴직급여계산기 최신버전 + 최신 공지 4건
- 공지사항
- 업무지원 프로그램 최신버전
- 질의응답: 공개/비공개 선택, 기관명은 관리자 전용
- 비공개 질의: 확인코드로 조회
- 건의사항
- 센터안내: 업무내용 + 전화번호
- 관리자 로그인/대시보드
- 관리자에서 프로그램 엑셀 파일 업로드 및 버전/배포일/변경사항 관리

## Supabase 설정
Project URL:
https://jpsldnmwavzmrgqptidc.supabase.co

Publishable key는 assets/js/config.js에 설정되어 있습니다.
Secret key / service_role key는 절대 프런트엔드에 넣지 마세요.

## 첫 배포
GitHub 저장소에 이 폴더의 내용 전체를 업로드한 뒤 Cloudflare Pages와 GitHub 저장소를 연결합니다.
프레임워크 프리셋은 None, Build command는 비워두고, Output directory는 / 또는 비워두면 됩니다.

## 관리자
/admin/login.html 로 접속합니다.
Supabase Authentication에 만든 관리자 이메일/비밀번호로 로그인합니다.

## 권장 Supabase 추가 설정
Authentication > Sign In / Providers 또는 관련 설정에서 일반 사용자 회원가입을 비활성화하면 좋습니다.
이 사이트에는 회원가입 UI가 없습니다.
