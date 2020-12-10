# 입문 백엔드 6강 - Graphql Subscription : 웹소켓과 실시간 데이터

## 예제 실행하기

빈 폴더에서
```bash
npx create-yangban-app --example back6-subscription
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

## Graphql Subscription
- Query와 같지만 실시간 데이터 처리 가능
```graphql
subscription {
  chat {
    id
    text
  }
}
```

## .env에 웹소켓 endpoint 추가하기
```env
NEXT_PUBLIC_API_ENDPOINT=http://localhost:8080/v1/graphql
NEXT_PUBLIC_WEBSOCKET_ENDPOINT=ws://localhost:8080/v1/graphql
```
