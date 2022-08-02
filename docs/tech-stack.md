# 기술 스택

## 웹 프레임워크: Next.js

- [공식 문서](https://nextjs.org/)
- 리액트 프레임워크
- pre-rendering 가능
  - CSR, SSR, SSG 모두 가능
  - 성능과 SEO에 이점
- 페이지 기반 라우팅
- Client-Side Navigation, Code Splitting, Image Optimization, API Routes 등 다양한 기능 지원

## 통신: Axios

- [공식 문서](https://axios-http.com/kr/)
- 브라우저 호환성
- JSON 데이터 자동 변환
- 요청 취소, 응답시간 초과 설정 등의 기능 제공
- 400, 500대 에러 발생 시 reject로 response를 전달, catch를 통한 에러 처리 가능 (fetch는 resolve로 전달, 별도의 에러 처리 필요)

## 클라이언트 상태 관리: Recoil

- [공식 문서](https://recoiljs.org/ko/)
- 간단한 get/set 인터페이스로 사용 (Boilerplate-free API)
- 동시성 모드(Concurrent Mode)를 비롯한 다른 새로운 React의 기능들과의 호환 가능성
- 상태 정의가 증분 및 분산되므로 코드분할이 가능
- 컴포넌트 내에서의 수정 없이 상태에서 파생된 데이터 사용 가능 (Selector)
  - 파생된 데이터는 동기/비동기 모두 가능
- 캐싱 지원

## 서버 상태 관리: React Query

- [공식 문서](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)
- Provider로 컴포넌트를 감싸는 작업 필요
- Devtools 지원
- Lagged Query Data
  - 다음 데이터를 불러오기까지 현재 데이터를 표시
- Offline Mutation
  - 오프라인 상태에서 뮤테이션을 시도했을 때, 해당 요청을 잠시 멈췄다가 온라인 상태가 되면 요청을 재시도
- Selectors
  - 데이터를 가공하는 것이 가능
- Auto Garbage Collection
  - 쿼리가 지정된 시간(설정하지 않을 경우 기본 5분) 동안 쿼리가 사용되지 않을 경우 자동으로 Garbage Collection을 지원

## API 모킹: MSW

- [공식 문서](https://mswjs.io/)
- 활용1. Storybook, 테스트에서 사용
- 활용2. 백엔드 API가 구현되기 전까지 사용

## 스타일링: Emotion

- [공식 문서](https://emotion.sh/docs/introduction)
- CSS in JS 라이브러리
- SSR에서 별도의 설정없이 동작
- [normalize.css](https://github.com/necolas/normalize.css)
  - 브라우저 스타일을 여러 브라우저에서 일관되어 보이도록 하는 게 목표

## UI 컴포넌트 탐색기: Storybook

- [공식 문서](https://storybook.js.org/)
- [Next.js Storybook](https://storybook.js.org/blog/get-started-with-storybook-and-next-js/)
- 컴포넌트 단위의 개발에 집중된 환경을 제공
- 컴포넌트 문서화
- UI 컴포넌트가 각각 독립적으로 어떻게 실제로 랜더링되는지 직접 시각적으로 테스트하면서 개발 진행

## 날짜 관리: Day.js

- [공식 문서](https://day.js.org/)
- `Moment.js`의 대체 Date 라이브러리
  - `Moment.js`와 똑같은 인터페이스
- 기본적인 기능만 포함하여 매우 작은 사이즈, 플러그인을 사용한 확장

## Form 관리: React Hook Form

- [공식 문서](https://react-hook-form.com/)
- validation이나 에러, 이벤트 같은 필요한 기능들을 넣어서 form을 만들 수 있게 도와주는 라이브러리
- 기본적으로 ref를 사용하는 uncontrolled 방식 -> 코드 깔끔
- 불필요한 리렌더링 최소화

## E2E 테스트: Cypress OR Playwright 고민

- [Next.js Test](https://nextjs.org/docs/testing)
- 프론트엔드 테스트로 E2E 테스트만 진행
- Playwright는 Cypress와 비교해 Webkit 기반 브라우저 테스트가 가능, 추가적으로 여러 브라우저와 장치 환경을 제공하려는 움직임

## 린팅 & 포맷팅: ESLint & Prettier

- 일정한 규칙에 맞는 코드 퀄리티 및 스타일을 유지할 수 있게 검사해주는 도구
- `husky`, `lint-staged`
  - 커밋할 때마다 자동으로 lint 검사
