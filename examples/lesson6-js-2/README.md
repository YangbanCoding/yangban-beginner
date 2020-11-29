# 입문 6강 - Javascript : 조건문과 반복문

## 예제 실행하기
빈 폴더에서
```
npx create-yangban-app --example lesson6-js-2
cd web
npm run dev
```

## 영상

## 조건문 if
문장이 조건에 따라 실행되게 하고 싶을 때
```javascript
// if 안의 식이 true일 경우 실행한다
let text
if (10 > 1) {
  text = '참'
} else {
  text = '거짓'
}
// 10 > 1은 참이기 때문에 else 안의 문장은 실행되지 않음
```

## 조건문 switch case
여러 가지 문장 중 하나를 실행하고 싶을 때
```javascript
let friend = 'korean'
let text

switch(friend) {
  case 'korean': {
    text = '안녕하세요'
    break // 항상 break를 넣어줘야 함
  }
  case 'chinese': {
    text = 'ni hao'
    break
  }
  case 'japanese': {
    text = 'konnichiwa'
    break
  }
  default: {
    text = 'hello'
    break
}
// friend의 값이 'korean'이기 때문에 text는 '안녕하세요'가 된다
```

## 반복문 for
특정 문장을 여러번 반복해서 실행시키고 싶을 때

실행 순서
1. 시작식이 실행됨
2. 조건식이 true일 경우 반복문을 실행하고 false일 경우 빠져나감
3. 반복문을 실행함
4. 반복식을 실행함
```javascript
for (시작식;조건식;반복식) {
  반복문
}
```

```javascript
let text = '기본값'
for (let i = 0; i < 5; i = i + 1) {
  text = text + ' 추가'
}
// text에 ' 추가' 가 5번 추가됨
```
