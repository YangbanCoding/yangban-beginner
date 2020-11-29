function Index () {
  let text
  let text2
  let text3 = '기본값' 
  let friend = 'japanese'
  let friend2 = 'korean'

  if (friend === 'korean') {
    text = '안녕하세요'
  } else if (friend === 'chinese') {
    text = 'ni hao'
  } else if (friend === 'japanese') {
    text = 'konnichiwa'
  } else {
    text = 'hello'
  }

  switch(friend2) {
    case 'korean': {
      text2 = '안녕하세요'
      break
    }
    case 'chinese': {
      text2 = 'ni hao'
      break
    }
    case 'japanese': {
      text2 = 'konnichiwa'
      break
    }
    default: {
      text2 = 'hello'
    }
  }

  for (let i = 0; i < 5; i = i + 1) {
    text3 = text3 + ' 추가'
  }

  return (
    <div>
      <div>if else의 경우 : {text}</div>
      <div>switch case의 경우 : {text2}</div>
      <div>5번 추가 : {text3}</div>
    </div>
  )
}

export default Index
