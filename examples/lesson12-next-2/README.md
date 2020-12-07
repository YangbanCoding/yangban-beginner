# 입문 12강 - Nextjs : 라우팅 심화

## 예제 바로 실행하기
[https://codesandbox.io/s/lesson11-next-2-0ctgg](https://codesandbox.io/s/lesson11-next-2-0ctgg)

## 예제 내 컴퓨터에서 실행하기
빈 폴더에서
```
npx create-yangban-app --example lesson12-next-2
cd web
npm run dev
```

## 영상
[![12강 - Nextjs-2](http://img.youtube.com/vi/mw9BXilyEOo/0.jpg)](http://www.youtube.com/watch?v=mw9BXilyEOo "12강 Nextjs-2")

## 다이나믹 라우팅 1
```
https://yang.ban/diary/0101 
https://yang.ban/diary/0102
https://yang.ban/diary/0103
```

```javascript
// pages/diary/[date].js
import { useRouter } from 'next/router'

function DailyDiary () {
  const router = useRouter()
  const date = router.query.date
  return (
    <div>
      <div>{date} 일기</div>
    </div>
  )
}
```

## 다이나믹 라우팅 2
```
https://yang.ban/diary?date=0101
https://yang.ban/diary?date=0102
https://yang.ban/diary?date=0103
```

```javascript
// pages/diary.js
import { useRouter } from 'next/router'

function DailyDiary () {
  const router = useRouter()
  const date = router.query.date
  return (
    <div>
      <div>{date} 일기</div>
    </div>
  )
}
```
