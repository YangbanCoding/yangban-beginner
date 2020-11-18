function Index () {
  return (
    <div>
      <div className='text1'>텍스트1</div>
      <div className='text2'>텍스트2</div>
      <div className='text3'>텍스트3</div>
      <div className='size64 yellow'>텍스트4</div>

      <div className='flex start al-start'>
        <div className='box'>박스</div>
        <div className='box'>박스</div>
        <div className='box'>박스</div>
      </div>

      <div className='flex center al-center'>
        <div className='box'>박스</div>
        <div className='box'>박스</div>
        <div className='box'>박스</div>
      </div>

      <div className='flex end al-end'>
        <div className='box'>박스</div>
        <div className='box'>박스</div>
        <div className='box'>박스</div>
      </div>            

      <style jsx>{`
      .size64 {
        font-size: 64px;
      }
      .yellow {
        color: yellow;
      }
      .text1 {
        font-size: 48px;
        text-align: left;
        color: blue;
      }
      .text2 {
        font-size: 32px;
        text-align: center;
      }
      .text3 {
        color: pink;
      }
      .flex {
        display: flex;
        height: 200px;
        border: 1px solid black;
      }
      .box {
        border: 1px solid black;
        width: 100px;
        height: 100px;
      }
      .start {
        justify-content: flex-start;
      }
      .center {
        justify-content: center;
      }
      .end {
        justify-content: flex-end;
      }
      .al-start {
        align-items: flex-start;
      }
      .al-center {
        align-items: center;
      }
      .al-end {
        align-items: flex-end;
      }
      `}</style>
    </div>
  )
}

export default Index
