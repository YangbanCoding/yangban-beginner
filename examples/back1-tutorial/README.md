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
### hasura 서버 만들기
#### 내 컴퓨터에 만들기
기존 도커 컨테이너 삭제
```bash
docker rm -f $(docker ps -a -q)
docker volume rm $(docker volume ls -q)
```
새로운 도커 컨테이너 생성
```bash
docker-compose up -d
```
#### heroku에 만들기
[heroku에 hasura 서버 만들기](https://heroku.com/deploy?template=https://github.com/hasura/graphql-engine-heroku)

### 백엔드 설정
hasura/config.yaml 의 endpoint를 위에서 만든 서버 주소로 변경
```yaml
version: 2
endpoint: [여기에 서버 주소를 입력]
metadata_directory: metadata
actions:
  kind: synchronous
  handler_webhook_baseurl: http://localhost:3000
```
bash에서
```bash
cd hasura
hasura migrate apply
hasura metadata apply
hasura seeds apply
```
### 프론트엔드 설정
web/.env의 NEXT_PUBLIC_API_ENDPOINT를 위에서 만든 서버 주소로 변경
```
NEXT_PUBLIC_API_ENDPOINT=[여기에 서버 주소를 입력]
```
bash에서
```bash
cd web
npm run dev
```


## 영상
