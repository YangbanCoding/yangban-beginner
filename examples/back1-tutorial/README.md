# 입문 백엔드 1강 - 시작하기

## 예제 실행하기

빈 폴더에서
```bash
npx create-yangban-app --example back1-tutorial
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

## 빠른 시작
[heroku에 hasura 서버 만들기](https://heroku.com/deploy?template=https://github.com/hasura/graphql-engine-heroku)

## 일반 시작
### Docker DeskTop 설치
[Docker Desktop 다운 받기](https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe)

[WSL2 오류 메시지가 나오면 다운 받기](https://aka.ms/wsl2kernelmsix64)

### docker-compose.yaml 다운 받고 만들기
```bash
curl https://raw.githubusercontent.com/hasura/graphql-engine/master/install-manifests/docker-compose/docker-compose.yaml > docker-compose.yaml
docker-compose up -d
```

## 프론트엔드
### 프로젝트 시작
```bash
npx create-next-app --example with-apollo .
```

### 서버 주소를 직접 입력
```javascript
// lib/apolloClient.js
function createApolloClient() {
  return new ApolloClient({
    ...,
    link: new HttpLink({
      uri: [여기에 서버 주소를 입력], // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    }),
    ...
  })
}
```

### 환경 변수 사용
```javascript
// lib/apolloClient.js
function createApolloClient() {
  return new ApolloClient({
    ...,
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_ENDPOINT, // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    }),
    ...
  })
}
```

```javascript
// .env
NEXT_PUBLIC_API_ENDPOINT=[여기에 서버 주소를 입력]
```
