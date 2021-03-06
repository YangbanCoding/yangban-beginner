# 입문 7강 - Javascript : 파일 분리

## 예제 바로 실행하기
[https://codesandbox.io/s/lesson7-js-3-k7bez](https://codesandbox.io/s/lesson7-js-3-k7bez)

## 예제 내 컴퓨터에서 실행하기
빈 폴더에서
```
npx create-yangban-app --example lesson7-js-3
cd web
npm run dev
```

## 영상
[![7강 - JS-3](http://img.youtube.com/vi/Mjdtjm1-8qY/0.jpg)](http://www.youtube.com/watch?v=Mjdtjm1-8qY "7강 JS-3")

## 변수 분리하기
변수가 여러 개인 경우
```javascript
// lib/constants.js
export const text1 = '텍스트1'
export const text2 = '텍스트1'
export const text3 = '텍스트1'
```
```javascript
// pages/index.js
import { text1, text2, text3 } from '../lib/constants.js'
```

변수가 한 개인 경우
```javascript
// lib/constants2.js
const text4 = '텍스트4'
export default text4
```
```javascript
// pages/index.js
import text4 from '../lib/constants2.js
```

## CSS 분리하기
```scss
// styles/Index.module.css
.text1 {
  color: blue;
}
```
```javascript
import s from '../styles/Index.module.css'

<div className={s.text1}>텍스트</div>
```

## HTML 분리하기
```javascript
// components/MyTag.js
function MyTag () {
  return (
    <div>
      <div>HTML 분리할거예요</div>
      <div>HTML 분리할거예요</div>
      <div>HTML 분리할거예요</div>
    </div>
  )
}

export default MyTag
```
```javascript
// pages/Index.js
import MyTag from '../components/MyTag'

function Index () {
  return (
    <div>
      <MyTag />
    </div>
  )
}
```
