# 입문 9강 - React : hooks기초(useState, useEffect)

## 예제 실행하기
빈 폴더에서
```
npx create-yangban-app --example lesson9-react-2
cd web
npm run dev
```

## 영상
[![9강 - React-2](http://img.youtube.com/vi/1wN95kI1r1Y/0.jpg)](http://www.youtube.com/watch?v=1wN95kI1r1Y "9강 React-2")

## 공식 문서 링크
[React hooks 문서](https://ko.reactjs.org/docs/hooks-intro.html)

## useState
변수와 같지만 state가 바뀌면 화면도 바뀜
```javascript
// 선언
let text = '기본값'
const [text2, setText2] = useState('기본값')
```

```javascript
// 값 대입
text = '새로운 값'
setText2('새로운 값')
```
