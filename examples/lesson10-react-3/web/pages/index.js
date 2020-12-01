import { useReducer, useContext } from 'react'
import { IndexContext, indexReducer, indexInitialState } from '../reducers/indexReducer'

function TextButton () {
  const [state, dispatch] = useContext(IndexContext)
  return (
    <div>
      <button onClick={() => dispatch({ type: 'changeToKor'})}>한글</button>
      <button onClick={() => dispatch({ type: 'changeToEng'})}>english</button>
      <div>{state.text}</div>
    </div>
  )
}

function CountButton () {
  const [state, dispatch] = useContext(IndexContext)
  return (
    <div>
      <button onClick={() => dispatch({ type: 'minusCount'})}>-</button>
      <button onClick={() => dispatch({ type: 'plusCount'})}>+</button>
      <div>{state.count}</div>    
    </div>
  )
}
function Box1 () {
  return (
    <div>
      <TextButton />
      <CountButton />
    </div>
  )
}

function Index () {
  return (
    <div>
      <IndexContext.Provider value={useReducer(indexReducer, indexInitialState)}>
        <Box1 />
      </IndexContext.Provider>
    </div>
  )
}

export default Index 
