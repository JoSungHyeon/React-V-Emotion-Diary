# React + Vite Emotion-Diary

---
프로젝트

home : 일기 리스트 렌더링(Header, DiaryList, DiaryItem)<br>
diary : 일기 상세 조회<br>
new : 새로운 일기 작성<br>
edit : 기존 일기 수정

---

페이지라우팅의 원리

1. 브라우저에서 서버에게 경로 요청
2. 서버는 브라우저에게 요청된 경로 반환
3. 브라우저는 반환된 경로 보여줌

---

Multi Page Application (MPA) -> 여러개의 페이지를 가지고 반환

MPA 단점 : 페이지 이동이 매끄럽지 않고 비효율적임, 다수 사용자 접속시 부하가 심해짐

Server Side Rendering -> 서버측에서 미리 완성된 페이지를 보내주는 것

---

React.js는 MPA 방식을 따르지 않음 ( 쾌적한 페이지 이동 제공이 어려움 )

Single Page Application (SPA) -> 페이지가 1개, 서버는 무조건 해당 페이지만 보내줌<br>
모든 자바스크립트 파일을 Bundling(묶다)해서 번들 파일을 브라우저로 보내줌<br>
번들링 과정은 VITE가 함 --> 비트를 통해 번들파일을 브라우저로 보냄

SPA 장점 : 페이지 이동이 매끄럽고 효율적임, 다수의 사용자가 접속해도 크게 상관 없음<br>

Client Side Rendering -> 브라우저에서 직접 자바스크립트 파일을 실행하여 화면을 렌더링함

---

MPA 방식 페이지 이동 -> 모든 요소 교체<br>
SPA 방식 페이지 이동 -> 필요한 요소만 교체

---

React Router 라이브러리 사용<br>
(npm i react-router-dom)

1. Link
클릭 시 바로 이동하는 로직 구현 시에 사용<br>
ex) 상품 리스트에서 상세 페이지 이동 시

2. useNavigate
페이지 전환 시 추가로 처리해야 하는 로직이 있을 경우 useNavigate 사용<br>
ex) 로그인 버튼 클릭 시<br>
회원가입 되어 있는 사용자 -> Main 페이지로 이동<br>
회원가입이 되어 있지 않은 사용자 -> SignUp 페이지로 이동

---

Vite가 내부적으로 진행하는 이미지 최적화 때문에 asset 안에 이미지파일을 넣음<br>
Public 폴더에 넣을 경우 url로 이미지를 불러올 수 있지만 최적화가 안됨

이미지가 굉장히 많을 경우엔 Public 폴더 사용<br>
이미지가 적을 경우 src폴더에 저장해서 사용

---

개발 순서<br>

개발 순서는 사람마다 다름<br>
1. 공통 컴포넌트 먼저 구현
2. 전체 페이지에 대한 공통 기능 구현