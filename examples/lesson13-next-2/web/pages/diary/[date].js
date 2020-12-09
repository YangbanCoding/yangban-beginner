import { useRouter} from 'next/router'

function DailyDiary () {
  const router = useRouter()

  const date = router.query.date
  let diary

  switch(date) {
    case '0101': {
      diary = '1월 1일 일기 날씨 맑음'
      break    
    }
    case '0102': {
      diary = '1월 2일 날씨 흐림'
      break
    }
    case '0103': {
      diary = '1월 3일 날씨 비옴'
      break
    }
    default: {
      diary = '일기가 없습니다'
    }
  }

  return (
    <div>
      <div>다이나믹 일기</div>
      <div>{diary}</div>
    </div>
  )
}

export default DailyDiary