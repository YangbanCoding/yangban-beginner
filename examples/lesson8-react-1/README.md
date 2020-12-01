# 입문 8강 - React : props

## 예제 실행하기
빈 폴더에서
```
npx create-yangban-app --example lesson8-react-1
cd web
npm run dev
```

## 영상
[![8강 - React-1](http://img.youtube.com/vi/P44rGWbP4pA/0.jpg)](http://www.youtube.com/watch?v=P44rGWbP4pA "8강 React-1")

## 공부하기
[리액트 공식 문서 링크](https://ko.reactjs.org/)

## props 사용법
```javascript
function Box (props) {
  return (
    <div>{props.title}</div>
  )
}

function Index () {
  return (
    <div>
      <Box title='git' />
      <Box title='html' />
    </div>
  )
}
```

## props.children 사용법
```javascript
function Box (props) {
  return (
    <div>{props.children}</div>
  )
}

function Index () {
  return (
    <div>
      <Box>이 문장이 표시됩니다</Box>
    </div>
  )
}
```
