import { text1, text2, text3 } from '../lib/constants'
import text4 from '../lib/constants2'
import s from '../styles/Index.module.css'
import MyTag from '../components/MyTag'

function Index () {
  return (
    <div>
      파일 분리 후 끝
      <div className={s.text1}>{text1}</div>
      <div className={s.text2}>{text2}</div>
      <div className={s.text3}>{text3}</div>
      <div className={s.text4}>{text4}</div>
      <MyTag />
    </div>
  )
}

export default Index
