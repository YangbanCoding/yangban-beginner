import { useState, useEffect } from 'react'

let count = 0

function Index () {
  let text = '변수 초기값'
  const [text2, setText2] = useState('state 초기값')

  useEffect(() => {
    count = count + 1
    console.log(count + '첫 번째 렌더링되었습니다')
  }, [])

  const changeToKor = () => {
    text = '안녕하세요'
    setText2('안녕하세요')
  }

  const changeToEng = () => {
    text = 'english'
    setText2('english')
  }

  return (
    <div>
      <button onClick={changeToKor}>한글</button>
      <button onClick={changeToEng}>english</button>
      <div>변수 {text}</div>
      <div>state {text2}</div>
    </div>
  )
}

export default Index
