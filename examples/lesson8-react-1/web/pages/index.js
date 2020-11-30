function Box (props) {
  return (
    <div className='container'>
      {props.title} {props.number}
      <div>{props.children}</div>
      <style jsx>{`
        .container {
          width: 200px;
          height: 200px;
          border: 1px solid black;
        }
      `}</style>
    </div>
  )
}

function Index () {
  return (
    <div className='container'>
      <Box title='git' number='1' />
      <Box title='html' number='2'/>
      <Box title='css' number='3'/>
      <Box title='js' number='4'>내용은 무시가 됨</Box>
      <Box title='react' number='5'>내용은 무시가 됨</Box>
      <style jsx>{`
        .container {
          display: flex;
        }
      `}</style>
    </div>
  )
}

export default Index
