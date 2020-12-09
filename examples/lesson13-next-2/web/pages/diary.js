import Link from 'next/link'

function Diary () {
  return (
    <div>
      다이나믹라우팅 1
      <Link href='/diary/0101'><div>1월 1일</div></Link>
      <Link href='/diary/0102'><div>1월 2일</div></Link>
      <Link href='/diary/0103'><div>1월 3일</div></Link>  
      다이나믹라우팅 2
      <Link href='diary2/dailyDiary?date=0101&weather=맑음'><div>1월 1일</div></Link>
      <Link href='diary2/dailyDiary?date=0102&weather=흐림'><div>1월 2일</div></Link>
      <Link href='diary2/dailyDiary?date=0103&weather=비옴'><div>1월 3일</div></Link>        
    </div>
  )
}

export default Diary