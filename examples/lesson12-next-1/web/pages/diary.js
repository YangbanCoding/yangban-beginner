import Link from 'next/link'

function Diary () {
  return (
    <div>
      <Link href='/diary/0101'><div>1월 1일</div></Link>
      <Link href='/diary/0102'><div>1월 2일</div></Link>
      <Link href='/diary/0103'><div>1월 3일</div></Link>
    </div>
  )
}

export default Diary