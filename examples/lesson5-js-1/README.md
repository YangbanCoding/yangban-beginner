# 입문 5강 - Javascript : 데이터 타입

## 예제 실행하기
빈 폴더에서
```
npx create-yangban-app --example lesson5-js-1
cd web
npm run dev
```

## 영상
[![5강 - JS-1](http://img.youtube.com/vi/ZbFJc8AkWPA/0.jpg)](http://www.youtube.com/watch?v=ZbFJc8AkWPA "5강 JS-1")

## 공부 자료
- [Javascript: The Definitve Guide](https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/)
- [모질라 자바스크립트 가이드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide)

## 변수
변수의 선언
```javascript
let number = 500 // 숫자
let text1 = '문자열1' 
let text2 = "문자열2"
let text3 = `문자열3 ${number}` // 변수 삽입 가능
```
값이 바뀌지 않는 경우는 const를 사용
```javascript
// let으로 선언
let number = 50
number = 100
number = 200 // 얼마든지 다시 대입 가능
// const로 선언
const number2 = 50
number2 = 500 // 에러 발생! const는 다시 대입이 불가능
```
변수 읽기
```jsx
<div>{number}</div>
<div>{text1}</div>
<div>{text2}</div>
<div>{text3}</div>
```
## 함수
함수의 선언
```javascript
// 10을 곱하는 함수
let mul10 = (a) => {
  return a * 10
}
// 두 개의 값을 더하는 함수
let sum = (a, b) => {
  return a + b
}
```
함수의 호출
```jsx
<div>{mul10(100)}</div> // 결과 : 1000
<div>{sum(100, 200)}</div> // 결과 : 300
```
## 객체
객체의 선언
```javascript
let me = {
  name: '양반코딩',
  cash: 500,
  balance: 5000
}
```
객체 읽기
```javascript
<div>내 이름 {me.name}</div>
<div>내 현금 {me.cash}</div>
<div>내 잔고 {me.balance}</div>
```
## 배열
배열의 선언
```javascript
let arr1 = [1,2,3,4,5]
```
배열 읽기
```javascript
// 하나씩 읽기
<div>{arr1[0]} {arr1[1]}</div> 
// 전체 읽기
{arr1.map(num => {
  return <div>{num}</div>
})}
```
