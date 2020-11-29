# 입문 7강 - Javascript : 파일 분리

## 예제 실행하기
빈 폴더에서
```
npx create-yangban-app --example lesson7-js-3
cd web
npm run dev
```

## 영상

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
```
```javascript
// pages/Index.js
function Index () {
  return (
    <div>
      <MyTag />
    </div>
  )
}
```
