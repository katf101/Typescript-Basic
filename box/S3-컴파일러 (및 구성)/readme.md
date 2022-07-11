## 시계(관찰) 모드

ts파일에서 코드를 변경할 때마다 웹페이지에서 변경사항을 반영하고 싶을 때
tsc --watch or tsc -w

## 전체 컴파일

1. index.html 에서 script 작성
   ex) <script src="analyticss" defer></script>
2. tsc -init (특정 파일 지정안함)
3. tsconfig.json 생성 확인
4. tsc -> 컴파일

## 원하는 파일 제외 후 컴파일

tsconfig.json 에서 exclude 추가

1. ex) "exclude": ["ananlytics.ts"] // ananlytics.ts 제외
2. ex) "exclude": ["*.dev.ts"] // dev.ts가 포함된 모든 파일 제외
3. ex) "exclude": ["**/*.dev.ts"] // 이와 같은 패턴의 파일 제외
   [참고] exclude 사용 시 node_modules는 꼭 제외 해야한다.
   "exclude": ["node_modules"] // node_modules는 무조건 제외
   하지만 exclude를 사용하지 않는다면 기본 값으로 node_modules는 제외 함

exclude의 반대 개념인 include 그리고 files
include는 제외하고자 하는 항목으로 전체 폴더를 지정
files는 컴파일하고자 하는 개별 파일만 지정 ( 작은규모에 적절함 )

1. ex) "include": ["app.ts"] // app.ts 빼고 모두 제외
2. ex) "files": ["app.ts"] // app.ts만 컴파일

## 옵션 몇가지 살펴보기

1. compilerOptions: 타입스크립트 코드가 컴파일되는 방식을 관리한다.
   어떤 파일을 컴파일할지, 컴파일되는 파일이 ts로 어떻게 처리 되어야 하는지를 설정
2. target: ts에 js의 몇 버전으로 컴파일 할 것인지 알려줌
3. lib: dom으로 작업을 수행하는 항목들, 즉 기본 객체,기능,타입스크립트 노드를 지정하게 해주는 옵션

   ### 설정이 안되었을 경우 (주석처리)

   기본 값은 target 값에 따라 달라진다.
   그리고 기본적인 domAPI도 적용되기 때문에 주석을 해제한다면 domAPI의 기본 값이 적용되지 않아 컴파일할 때 에러남
   target: es6에 대한 기본값
   "lib": [
   "dom",
   "es6",
   "DOM.Iterable",
   "ScriptHost"
   ]

4. allowJs: 컴파일시 checkJS와 함께 js파일에 포함시킬 수 있다.
5. sourceMap: 디버깅 작업과 개발에 유용함
6. outDir: 컴파일 시 생성되는 js파일의 위치를 지정할 수있음 ex) "outDir": "./dist"
7. rootDir: outDir의 루트 폴더 지정가능
8. removeComments: 컴파일 시 ts의 모든 주석은 js에서 제거됨, js파일을 생성하지 않으려면 noEmit설정
9. noEmitOnError: 컴파일 오류 시 js 파일 생성을 중지함, 기본값 false
10. strict: stric 유형의 검사 옵션을 사용한다. strict 관련 옵션을 개별적으로 사용하고싶으면 false
11. noImplicitAny: 코드에서 작업하고 있는 매개변수와 값을 명확히 할 수 있도록 해준다.
12. strictNullCheck: null 값을 잠재적으로 가질 수 있는 값에 접근하고 작업하는 방식을 엄격하게 ts에 알려줌
13. StrictBindCallApply: bind, call, apply를 사용하는 작업에서 엄격하게 체크한다.
14. noUnusedLocals,nounusedParameters, noImplicitReturns: 코드의 품질을 향상시켜주는 옵션
