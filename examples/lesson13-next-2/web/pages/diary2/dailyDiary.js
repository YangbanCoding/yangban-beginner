import { useRouter } from 'next/router'

function DailyDiary () {
  const router = useRouter()

  const date = router.query.date
  const weather = router.query.weather

  return (
    <div>
      <div>다이나믹 라우팅2</div>
      {date && weather
      ? <div>{date} 일기 날씨 {weather}</div>
      : <div>날짜와 날씨가 잘못 지정되었습니다</div>
      }
    </div>
  )
}

export default DailyDiary