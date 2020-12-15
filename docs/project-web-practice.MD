# 웹 프로젝트 예제 실행하기

## 영상

## 1. 예제 다운받기
빈 폴더에서
```bash
git clone http://github.com/yangbancoding/[예제 이름]
cd [예제 이름]
```

## 2. 내 컴퓨터에서 실행하기
### 2-1. 백엔드 설정하기
- 기존 도커 컨테이너 삭제
```bash
docker rm -f $(docker ps -a -q)
docker volume rm $(docker volume ls -q)
```
- 새로운 도커 컨테이너 생성
```bash
docker-compose up -d
```

- API 서버 주소
```
http://localhost:8080
```
### 2-2. 백엔드 설정
- hasura/config.yaml 의 endpoint를 2-1에서 만든 서버 주소로 변경
```yaml
version: 2
endpoint: [여기에 서버 주소를 입력]
...생략
```
- 데이터베이스 변경하기
```bash
cd hasura
hasura migrate apply
hasura metadata apply
hasura seeds apply # 시드 파일이 있는 경우
```

### 2-3. 프론트엔드 설정
- web폴더에 .env.local 파일을 만든 후 API 주소 입력
```
NEXT_PUBLIC_API_ENDPOINT=[여기에 서버 주소를 입력]
```
- 필요한 패키지 설치 후 localhost:3000 에 웹 표시 
```bash
cd web
yarn install
yarn dev
```

## 3. 인터넷에 배포하기
### 3-1. 백엔드 서버 heroku에 만들기
- [heroku에 hasura 서버 만들기](https://heroku.com/deploy?template=https://github.com/hasura/graphql-engine-heroku)

- API 서버 주소
```
https://[만들 때 지정한 이름].herokuapp.com/
```
### 3-2. 백엔드 데이터베이스 변경하기
- hasura/config.yaml 의 endpoint를 3-1에서 만든 서버 주소로 변경
```yaml
version: 2
endpoint: [여기에 서버 주소를 입력]
...생략
```
- 데이터베이스 변경하기
```bash
cd hasura
hasura migrate apply
hasura metadata apply
hasura seeds apply # 시드 파일이 있는 경우
```
### 3-3. 프론트엔드 github에 올리기
- [repository 만들기](https://github.com/new)
- remote 변경 후 코드 push 하기
```
git remote set-url origin https://github.com/[github이름]/[repository이름]
git push 
```

### 3-4. github repository를 vercel과 연동하기
- [Vercel](https://vercel.com)
