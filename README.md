# 침팬치0호 자기소개 페이지

React + JavaScript + Vite로 만든 한국어 자기소개 웹사이트입니다.
게임 화면을 닮은 어두운 배경과 라임색 포인트를 사용하며 휴대전화와 컴퓨터 화면에 대응합니다.
한 페이지 안에서 자기소개, 관심사, 성장 기록, 활동과 작품, 앞으로의 목표 순으로 이동합니다.
`#about`, `#interests`, `#skills`, `#works`, `#goals` 주소로 각 구역을 바로 열 수 있습니다.
이전 `#/about` 주소는 소개로, `#/portfolio` 및 이전 상세 주소는 활동 구역으로 연결됩니다.
별명과 게임·디지털 활동에 대한 관심만 확인된 상태이며, 미정인 정보는 준비 중으로 표시합니다.

## 내 프로젝트로 시작하기

1. GitHub의 **Use this template → Create a new repository**로 자신의 저장소를 만듭니다.
2. 새로 만든 저장소를 컴퓨터로 복제하고 Visual Studio Code에서 엽니다.
3. 아래 실행 방법에 따라 사이트를 실행합니다.
4. GitHub Copilot과 함께 자기소개, 프로젝트 설명, 색상과 이미지를 자신의 내용으로 바꿉니다.

사진이나 작품은 나중에 `public/`에 추가하고 `src/App.jsx`에서 소개할 수 있습니다.
실명·전화번호·주소·생년월일 등 개인정보를 넣지 않습니다.

## 실행하기

1. Node.js 24 LTS를 설치합니다.
2. Visual Studio Code에서 복제한 프로젝트 폴더를 엽니다.
3. 터미널에서 다음 명령을 실행합니다.

```sh
npm install
npm run dev
```

터미널에 표시되는 주소를 브라우저에서 엽니다. 개발 서버는 `Ctrl + C`로 종료합니다.

## 수정할 파일

- `src/App.jsx`: 화면 내용과 React 컴포넌트
- `src/App.css`: 화면 스타일
- `src/index.css`: 전체 공통 스타일
- `public/`: 직접 사용할 이미지 등 정적 파일

파일을 수정하고 저장하면 실행 중인 브라우저에 반영됩니다.

## 확인 명령

```sh
npm run lint
npm run build
```

`npm run build`는 배포용 파일을 `dist` 폴더에 만듭니다.
