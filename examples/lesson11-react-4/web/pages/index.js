import { useState } from 'react'

function Index () {
  const [text, setText] = useState('')
  const [textarea, setTextarea] = useState('')
  const [select, setSelect] = useState('짜장면')
  const [radio, setRadio] = useState('짜장면')
  const [checkbox, setCheckbox] = useState(false)

  const handleChangeText = (e) => {
    setText(e.nativeEvent.target.value)
  }

  const handleChangeTextArea = (e) => {
    setTextarea(e.nativeEvent.target.value)
  }

  const handleChangeSelect = (e) => {
    setSelect(e.nativeEvent.target.value)
  }

  const handleChangeRadio = (e) => {
    setRadio(e.nativeEvent.target.value)
  }

  const handleChangeCheckbox = (e) => {
    setCheckbox(!checkbox)
  }

  const handleClick = () => {
    alert(`
    input : ${text}
    textarea: ${textarea}
    select: ${select}
    radio: ${radio}
    checkbox: ${checkbox ? "true" : "false"}
    `)
  }

  return (
    <div>
      <div>
        <input onChange={handleChangeText} />
      </div>
      <div>
        <textarea onChange={handleChangeTextArea} />
      </div>
      <div>
        <select onChange={handleChangeSelect}>
          <option value='짜장면'>짜장면</option>
          <option value='짬뽕'>짬뽕</option>
          <option value='탕수육'>탕수육</option>
        </select>
      </div>
      <div>
        <input type='radio' name='food' value='짜장면' onChange={handleChangeRadio} />짜장면
        <input type='radio' name='food' value='짬뽕' onChange={handleChangeRadio} />짬뽕
        <input type='radio' name='food' value='탕수육' onChange={handleChangeRadio} />탕수육
      </div>
      <div>
        <input type='checkbox' checked={checkbox} onChange={handleChangeCheckbox} />체크
      </div>
      <div>
        <button onClick={handleClick}>확인</button>
      </div>
    </div>
  )
}

export default Index
