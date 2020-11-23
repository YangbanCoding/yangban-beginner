function Index () {
  let greeting = '안녕하세요 내 친구를 소개합니다 '
  
  // 변수
  let n1 = '가렌'
  let h1 = 180
  let w1 = 70
  let n2 = '갈리오'
  let h2 = 200
  let w2 = 300
  let n3 = '갱플랭크'
  let h3 = 170
  let w3 = 80

  // 객체
  let garen = {
    name: '가렌',
    height: 180,
    weight: 70
  }
  let galio = {
    name: '갈리오',
    height: 200,
    weight: 300
  }
  let gangplank = {
    name: '갱플랭크',
    height: 170,
    weight: 80
  }

  // 배열
  let friends = [
    {
      name: '가렌',
      height: 180,
      weight: 70
    },
    {
      name: '갈리오',
      height: 200,
      weight: 300
    },
    {
      name: '갱플랭크',
      height: 170,
      weight: 80
    },
  ]

  let introductionForVariables = (name, height, weight) => {
    return `${greeting} 이름은 ${name} 
    키는 ${height}cm 몸무게는 ${weight}kg입니다`
  }

  let introductionForObject = (friend) => {
    return `${greeting} 이름은 ${friend.name} 
    키는 ${friend.height}cm 몸무게는 ${friend.weight}kg입니다`
  }

  return (
    <div>
      <div>그냥</div>
      <div>안녕하세요 내 친구를 소개합니다 이름은 가렌 키는 180cm 몸무게는 70kg입니다</div>
      <div>안녕하세요 내 친구를 소개합니다 이름은 갈리오 키는 200cm 몸무게는 300kg입니다</div>
      <div>안녕하세요 내 친구를 소개합니다 이름은 갱플랭크 키는 170cm 몸무게는 80kg입니다</div>
      <hr />
      <div>변수</div>
      <div>{greeting} 이름은 {n1} 키는 {h1}cm 몸무게는 {w1}kg입니다</div>
      <div>{greeting} 이름은 {n2} 키는 {h2}cm 몸무게는 {w2}kg입니다</div>
      <div>{greeting} 이름은 {n3} 키는 {h3}cm 몸무게는 {w3}kg입니다</div>
      <hr />
      <div>함수</div>
      <div>{introductionForVariables(n1, h1, w1)}</div>
      <div>{introductionForVariables(n2, h2, w2)}</div>
      <div>{introductionForVariables(n3, h3, w3)}</div>
      <hr />
      <div>객체</div>
      <div>{introductionForObject(garen)}</div>
      <div>{introductionForObject(galio)}</div>
      <div>{introductionForObject(gangplank)}</div>
      <hr />                  
      <div>배열</div>
      {friends.map(friend => {
        return <div>{introductionForObject(friend)}</div>
      })}
    </div>
  )
}

export default Index
