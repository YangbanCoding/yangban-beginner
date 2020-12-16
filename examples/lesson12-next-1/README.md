# 입문 12강 - Nextjs : 라우팅 기초

## 예제 바로 실행하기
[https://codesandbox.io/s/lesson11-next-1-5pfo1](https://codesandbox.io/s/lesson11-next-1-5pfo1)

## 예제 내 컴퓨터에서 실행하기
빈 폴더에서
```
npx create-yangban-app --example lesson12-next-1
cd web
npm run dev
```

## 영상
[![12강 - Nextjs-1](http://img.youtube.com/vi/nqrpCXLDWYA/0.jpg)](http://www.youtube.com/watch?v=nqrpCXLDWYA "12강 - Nextjs-1")

## 기본 라우팅
pages폴더 안의 파일이 웹 사이트의 주소가 됨

```
URL - https://yang.ban/
코드 - pages/index.js
```

```
URL - https://yang.ban/profile
코드 - pages/profile.js
```

## 중첩 라우팅
pages폴더 안에 폴더를 만든 후 파일을 넣으면 라우팅이 중첩됨
```
URL - https://yang.ban/diary/0101
코드 - pages/diary/0101.js
```

```
URL - https://yang.ban.diary/01/01
코드 - pages/diary/01/01.js
```

## 링크 만들기
```javascript
import Link from 'next/link'

function Index () {
  return (
    <div>
      <Link href='/'>
        <div>홈으로</div>
      </Link>
      <Link href='/profile'>
        <div>프로필</div>
      </Link>
      <Link href='/diary/0101'>
        <div>1월 1일 일기</div>
      </Link>
      <Link href='/guestbook'>
        <div>방명록</div>
      </Link>      
    </div>
  )
}
```
