import Link from 'next/link'

function Header () {
  return (
    <div className='button_group'>
      <Link href='/'>
        <div className='button'>홈으로</div>
      </Link>
      <Link href='/profile'>
        <div className='button'>프로필</div>
      </Link>
      <Link href='/diary'>
        <div className='button'>다이어리</div>
      </Link>
      <Link href='/guestbook'>
        <div className='button'>방명록</div>
      </Link>
      <style jsx>{`
        .button_group {
          display: flex;
        }
        .button {
          border: 1px solid black;
          width: 100px;
          padding: 16px;
        }
      `}</style>      
    </div>
  )
}

export default Header
