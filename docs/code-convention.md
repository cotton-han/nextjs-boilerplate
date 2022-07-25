# 코드 컨벤션

## 네이밍

- 폴더, 파일 이름은 `kebab-case` 사용
  - pages 내의 파일명은 곧 url이 될 이름
  - 다만, 컴포넌트 폴더 이름은 컴포넌트 네이밍 규칙에 따라 `PascalCase` 사용
- 컴포넌트 이름: `PascalCase`
- 함수, 변수: `camelCase`
- 상수: `SNAKE_CASE`
- 이벤트 함수
  - props prefix: `on~`
  - function depth prefix: `handle~` (반드시 lambda function로 사용해야하는 경우 제외)
- styled-components
  ```jsx
  /* 
   * Layout에서 Container, Header, Main, Footer 모두 스타일링
   * pages에서는 Section 사용 내부는 컴포넌트들로 이루어짐
   * components에서는 Container, Wrapper 2단계의 div와 태그이름을 활용한 스타일드 컴포넌트 활용 
   * div를 제외한 태그는 태그이름을 활용(태그의 속성을 빨리 알 수 있도록)
  **/
  // Layout의 예시
  <S.Container>
    <Head>
      {/* meta, link, title 등 각 페이지별 head 정의 */}
    </Head>
    <S.Header></S.Header>
    <S.Main>{children}</S.Main>
    <S.Footer></S.Footer>
  </S.Container>
  
  // pages의 예시
  <Layout>
    <S.ASection></S.ASection>
    <S.BSection></S.BSection>
  </Layout>
  
  // components의 예시
  <S.Container>
    <S.TitleWrapper>
      <S.TitleSpan></S.TitleSpan>
    </S.TitleWrapper>
    <S.ContentWrapper>
      <S.ContentSpan></S.ContentSpan>
    </S.ContentWrapper>
  </S.Container>
  ```

## 폴더 구조

```text
|--- components
    |--- PascalCaseComponent1
        |--- index.tsx
        |--- style.ts
        |--- types.ts (필요한 경우 생성)
    |--- PascalCaseComponent2
        |--- index.tsx
        |--- style.ts
|--- pages
    |--- index.tsx
    |--- kebab-case-page.tsx
    |--- kebab-case-folder
         |--- [id].tsx
|--- docs (프로젝트 문서)
|--- apis (API 연동)
|--- styles (스타일 설정)
    |--- global.tsx
    |--- theme.ts
|--- public (정적 파일)
|--- types (공통 타입 정의)
|--- utils (유틸 함수)
|--- stories (Storybook)
```

## 컴포넌트 선언

- `Arrow Function` 사용
- pages 하위 파일은 `NextPage`를 활용하여 선언

## 컴포넌트 디렉터리
 
- index.ts를 작성(pages에서 사용할 때 import를 줄이기 위해)
  ```javascript
  // components/index.ts
  export { default as Component1 } from "./Component1";
  export { default as Component2 } from "./Component2";
  
  // pages/index.tsx
  import { Component1, Component2 } from "components";
  ```

## Import & Export

### Import

- `eslint-plugin-import` 설치
- `import/order` 규칙 사용
  ```json
  // .eslintrc.json
  ...
  "rules": {
    ...
    "import/order": [
      "error",
      {
        "newlines-between": "always", // 각 그룹 사이에 공백 한 줄 추가
        "groups": [["builtin", "external"], "internal", ["parent", "sibling", "index"], "type"], // 그룹 지정
        "alphabetize": { "order": "asc", "caseInsensitive": true } // 알파벳 순으로 정렬(대소문자 구분 X)
      }
    ]
  },
  ```

### Export

- `export default`는 최하단
- `export`는 선언부

## ESLint & Prettier

### ESLint 

- Prettier 충돌 방지 설정
- Import 관련 규칙 추가

### Prettier

```json
{
  "printWidth": 120,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "arrowParens": "always" // 타입 정의를 위해 괄호가 계속 있는게 용이
}
```

### IDE 설정

- (선택) ESLint, Prettier가 저장 시에 동작하도록 설정 
  - 굳이 하지 않아도 husky 설정을 통해 커밋 시 자동으로 수행
- (필수) Import 정렬이 저장 시에 동작하도록 설정
  - ESLint에서 잡아주지 않는 사용하지 않는 최적화 수행(예: 사용하지 않는 Import 제거) 

## Typing 작성 

- interface를 기본으로 사용
- 최상단에 types 폴더를 생성해 공통으로 사용되는 타입 정의 (주로 로직과 관련된 타입)
- 타입에 i, I를 붙이지 않는 방식으로 사용
- 컴포넌트에서 사용되는 경우 style.ts와 같이 types.ts를 만들어서 사용
  - 공통적으로 사용되는 경우가 생기면 types 하위로 분리

## Props 타입 정의

- Props 타입은 컴포넌트 파일 내에서 정의
- `children`을 포함할 경우 `PropsWithChildren<[컴포넌트명]Props>` 활용
  ```typescript
  interface ComponentProps {
    text: string;
  }
  
  const Component = ({ text, children }: PropsWithChildren<ComponentProps>) => {};
  ```
- [컴포넌트명]Props
  ```typescript
  interface Component1Props {}
  interface Component2Props {} 
  ```
