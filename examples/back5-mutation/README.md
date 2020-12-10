# 입문 백엔드 5강 - Graphql Mutation : 데이터 생성, 수정, 삭제

## 예제 실행하기

빈 폴더에서
```bash
npx create-yangban-app --example back5-mutation
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

## 데이터 생성
- 데이터 하나를 생성하기
```graphql
mutation {
  insert_user_one(
    object: {
      name: "양반코딩"
    }
  ) {
    id
    name
  }
}
```
- 데이터 여러 개를 생성하기
```graphql
mutation {
  insert_user(
    objects: [
      {
        name: "양반코딩1"
      },
      {
        name: "양반코딩2"
      }
    ]
  ) {
    affected_rows
    returning {
      id
      name
    }
  }
}
```

## 데이터 수정
- 데이터 하나를 수정하기
```graphql
mutation {
  update_user_by_pk(
    pk_columns: {
      id: 1
    }
    _set: {
      name: "새로운 이름"
    }
  ) {
    id
    name
  }
}
```

- 데이터 여러 개를 수정하기 
  - 예 : state가 서울인 모든 데이터를 서울특별시로 수정
```graphql
mutation {
  update_user(
    where: {
      state: {
        _eq: "서울"
      }
    }
    _set: {
      state: "서울특별시"
    }
  ) {
    affected_rows
    returning {
      id
      state
    }
  }
}
```

## 데이터 삭제
- 데이터 하나를 삭제하기
```graphql
mutation {
  delete_user_by_pk(
    id: 1
  ) {
    id
  }
}
```

- 데이터 여러 개를 삭제하기
  - 예 : 키가 300이상인 데이터를 모두 삭제
```graphql
mutation {
  delete_user(
    where: {
      height: {
        _gte: 300
      }
    }
  ) {
    affected_rows
    returning {
      id
      height
    }
  }
}
```
