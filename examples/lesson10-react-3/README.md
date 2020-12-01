# 입문 10강 - React : hooks심화(useReducer, useContext)

## 예제 실행하기
빈 폴더에서
```
npx create-yangban-app --example lesson10-react-3
cd web
npm run dev
```

## 영상
[![10강 - React-3](http://img.youtube.com/vi/hLm9J09wiOI/0.jpg)](http://www.youtube.com/watch?v=hLm9J09wiOI "10강 React-3")

## useReducer
복잡한 state를 한 번에 관리할 떄 사용
```javascript
const initialState = {
  count: 0
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'minusCount': {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case 'plusCount': {
      return {
        ..state,
        count: state.count - 1
      }
    }
  }
}
```
```jsx
import { useReducer } from 'react'

function Index () {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <button onClick={() => dispatch({ type: 'minusCount' })>-</button>
      <button onClick={() => dispatch({ type: 'plusCount' })>+</button>
      <div>{state.count}</div>
    </div> 
  )
}
```
## useContext
모든 하위컴포넌트에서 값을 접근할 수 있게 함
```jsx
import { createContext, useContext } from 'react'

const IndexContext = createContext()

function Box2 () {
  const boxName = useContext(IndexContext)
  return (
    <div>{boxName}</box>
  )
}

function Box1 () {
  return (
    <div><Box2 /></div>
  )
}

function Index () {
  const boxName = '양반코딩'
  return (
    <div>
      <IndexContext.Provider value={boxName}>
        <Box1 />
      </IndexContext.Provider>
    </div>
  )
}
```
