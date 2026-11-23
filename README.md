# Energy × Cloud 자기소개 웹앱

## 파일
- `index.html`: 원페이지 웹사이트 구조
- `style.css`: 디자인 및 반응형 스타일
- `script.js`: 방명록 임시 동작

## 실행
`index.html` 파일을 브라우저에서 열면 됩니다.

## 수정할 내용
- `index.html`의 `your-email@example.com`을 본인 이메일로 변경
- About Me 문구를 본인 소개에 맞게 수정

## 방명록 안내
현재 방명록은 브라우저의 localStorage에 임시 저장됩니다.
실제 여러 방문자가 함께 사용하는 방명록으로 만들려면 이후 AWS AppSync와 DynamoDB 연결이 필요합니다.

## AWS 배포
S3 버킷에 세 파일을 업로드하고, CloudFront 배포의 기본 루트 객체를 `index.html`로 설정하세요.
