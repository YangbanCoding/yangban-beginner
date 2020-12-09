# 입문 백엔드 3강 - GraphQL Query 기초 : 데이터 읽기

## 예제 실행하기

빈 폴더에서
```bash
npx create-yangban-app --example back3-query-1
```
백엔드
```bash
cd hasura
hasura migrate apply
hasura metadata apply
hasura seeds apply
```
프론트엔드
```bash
cd web
npm run dev
```
[예제 실행 방법 자세히 보기](https://github.com/YangbanCoding/yangban-beginner/blob/main/docs/back-practice.MD)

## 영상

## 모든 데이터 읽기
```graphql
query {
  [테이블이름] {
    [칼럼 이름]
    [칼럼 이름]
    [칼럼 이름]
  }
}
```

## 데이터 하나 읽기
```graphql
query {
  [테이블이름]_by_pk(id: 1) {
    [칼럼 이름]
    [칼럼 이름]
    [칼럼 이름]
  }
}
```

## 프론트 엔드 코드 
```javascript
import { useQuery, gql } from '@apollo/client'

const FRIEND_QUERY = gql`
query {
  friend {
    id
    name
  }
}
`

function Index () {
  const { data, loading, error } = useQuery(FRIEND_QUERY)
  
  if (loading) {
    return <div>로딩중</div>
  }
  
  if (error) {
    return <div>에러 발생</div>
  }
  
  return (
    <div>
      {data.friend.map(obj => {
        return (
          <div key={obj.id}>
            {obj.id} {obj.name}
          </div>
        )
      })}
    </div>
  )
}
```
