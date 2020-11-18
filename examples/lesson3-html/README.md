# 입문 3강 - HTML

## 예제 실행하기
빈 폴더에서
```
npx create-yangban-app --example lesson3-html
cd web
npm run dev
```

## 영상
[![3강 - HTML](http://img.youtube.com/vi/56kYkrgEyTI/0.jpg)](http://www.youtube.com/watch?v=56kYkrgEyTI "3강 HTML")

## 웹 페이지를 만드는 재료
- HTML - 구조를 정의
- CSS - 시각적 효과(위치, 크기, 색 등)를 정의
- Javascript - 동작을 정의

## HTML의 요소(element)
- <태그이름>내용</태그이름>
- <태그이름 속성1=값 속성2=값>내용</태그이름>

1. 시작태그 + 내용 + 종료태그
2. 내용에 따른 분류
- 내용이 다른 요소인 경우
```html
<div><div>ㅎㅎ</div></div>
```
- 내용이 텍스트인 경우
```html
<div>ㅎㅎ</div>
```
- 내용이 없는 경우
```html
<div></div>
<div />
```
3. 한 요소는 상위 요소에 완전히 포함되어야 한다
```html
<div><a>좋아요</a></div>
<div><a>안돼요</div></a>
```
4.최상위 요소는 하나만 존재할 수 있다
```html
<div><div>좋아요</div></div>
<div>안돼요</div><div>안돼요</div>
```

## div가 아닌 태그의 예시
- 유튜브 링크를 삽입하는 태그

태그이름 : iframe

속성 : width, height, src, frameborder, allow, allowfullscreen

내용 : 없음
```jsx
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/JPhLOCwlEQI" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen
></iframe>
```

- 누르면 팝업창이 나타나는 버튼을 만드는 태그

태그이름 : button

속성 : onClick

내용 : 버튼
```jsx
<button onClick={() => alert('hi')}>버튼</button>
```

## 더 공부하고 싶을 때 
- [w3schools - HTML](https://www.w3schools.com/html/default.asp)
