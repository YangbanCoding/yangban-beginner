function Index () {
  return (
    <div>
      <div><div>다른 요소인 경우</div></div>
      <div>텍스트인 경우</div>
      <div></div>
      <div />
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/JPhLOCwlEQI" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
      <button onClick={() => alert('hi')}>버튼</button>
    </div>
  )
}

export default Index
