# 입문 백엔드 4강 - Graphql Query 심화 - 데이터 읽기 (조건, 정렬, 갯수, 변수)

## 예제 실행하기

빈 폴더에서
```bash
npx create-yangban-app --example back4-query-2
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
[![4강 - Query-2](http://img.youtube.com/vi/nGJJ3Ybx56A/0.jpg)](http://www.youtube.com/watch?v=nGJJ3Ybx56A "4강 Query-2")

## 변수 사용하기
```graphql
query user_one($id: Int!){
  user_by_pk(id: $id) {
    id
    name
  }
}
```

변수 선언
```json
{
  "id": 1
}
```

## 갯수 제한하기
- limit: 데이터 갯수

- offset: 건너뛰기
```graphql
{
  user(
    limit: 10
    offset: 10
  ) {
    id
    name
  }
}
```

## 정렬
- order_by

  - asc : 오름차순 정렬(1,2,3... ㄱ,ㄴ,ㄷ.. a,b,c...) 
 
  - desc: 내림차순 정렬(10,9,8... ㅎ,ㅍ,ㅌ... z,x,y...)

```graphql
{
  user(
    order_by: {
      height: desc
    }
  ) {
    id
    name
    height
  }
}
```

## 조건 검색
- where

  - 숫자
    - _eq : 같다
    - _lt : 작다
    _ _lte: 작거나 같다
    - _gt : 크다
    _ _gte : 크거나 같다

  - 문자
    - _eq: 같다
    - _like: postgres의 LIKE 패턴과 일치한다
    
  - _and : 모든 조건을 만족하는 데이터를 검색한다
  
  - _or : 조건 중 하나 이상을 만족하는 데이터를 검색한다

- 키가 180이상이거나 이름에 민준이 들어가는 유저를 검색
```graphql
{
  user(
    where: {
      _or: {
        height: {
          _gte: 180
        }
        name: {
          _like: "%민준%"
        }
      }
    }
  ) {
    id
    name
    height
  }
}
```
