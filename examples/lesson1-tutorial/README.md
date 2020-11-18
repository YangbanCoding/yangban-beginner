# 입문 1강 - 시작하기

## 예제 실행하기
빈 폴더에서
```
npx create-yangban-app --example lesson1-tutorial
cd web
npm run dev
```

## 영상
[![1강 - 시작하기](http://img.youtube.com/vi/JPhLOCwlEQI/0.jpg)](http://www.youtube.com/watch?v=JPhLOCwlEQI "1강 시작하기")

## 준비물

### 설치하기
- [nodejs](https://nodejs.org/en/)
- [visual studio code](https://code.visualstudio.com/)
- [git](https://git-scm.com/)

### 가입하기
- [github](https://github.com)
- [vercel](https://vercel.com)

## 웹 개발 해보기
빈 폴더를 만들고 오른쪽 클릭 Git Bash Here
```
npx create-next-app .
```
작업이 끝나면
```
npm run dev
```
다른 Git Bash를 열고
```
code .
```
크롬에서 http://localhost:3000 에 접속하면 웹 페이지를 확인할 수 있다

visual studio code에서 pages 폴더에 있는 index.js를 아래와 같이 수정한다
```javascript
function Index () {
  return (
    <div>안녕하세요 [양반코딩]입니다</div>
  )
 }
 
 export default Index
```

저장하고 크롬을 다시 확인하면 바뀐 페이지를 확인할 수 있다
