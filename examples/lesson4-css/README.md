# 입문 4강 - CSS

## 예제 실행하기
빈 폴더에서
```
npx create-yangban-app --example lesson4-css
cd web
npm run dev
```

## 영상
[![4강 - CSS](http://img.youtube.com/vi/pqq4L7AXncY/0.jpg)](http://www.youtube.com/watch?v=pqq4L7AXncY "4강 CSS")

## CSS를 적용하는 방법
```jsx
<div>
  <div className='text1'>안녕하세요</div>
  <style jsx>{`
  .text1 {
    font-size: 48px;
    color: blue;
    text-align: center;
  }
  `}
</div>
```

## 글자에 적용할 수 있는 속성과 값
- color
  - blue yellow green red - 영어
  - #000000 #333333 #FFFFFF - 헥스코드
- font-size
  - 16px 24px 32px 48px
- text-align
  - left
  - center
  - right

## 박스에 적용할 수 있는 속성과 값
- width
  - 100px 200px 300px
  - 100% 50% 25% - 외부 박스에 대한 비율
  - 100vw 50vw 25vw - 화면 길이에 대한 비율
- height
  - 100px 200px 300px
  - 외부 박스의 100% 50% 25% - 외부 박스에 대한 비율
  - 100vh 50vh 25vh - 화면 높이에 대한 비율
- margin
  - 8px 16px 24px
- padding
  - 8px 16px 24px
- border
  - 1px solid black
- background-color
  - 글자 color랑 같음

## 박스 배치하기
외부 박스의 display 속성을 flex로 설정하기
```css
.container {
  display: flex;
}
```

- justify-content
  - flex-start
  - center
  - flex-end
  - space-between

- align-items
  - flex-start
  - center
  - flex-end

박스를 외부 박스의 정중앙에 위치시키기
```css
.box {
  justify-content: center;
  align-items: center;
}
```

## 더 공부하고 싶을 때 
- [w3schools - CSS](https://www.w3schools.com/css/default.asp)