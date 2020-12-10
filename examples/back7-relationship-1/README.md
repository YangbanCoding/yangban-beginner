# 입문 백엔드 7강 - Table relationship : one to one 관계

## 예제 실행하기

빈 폴더에서
```bash
npx create-yangban-app --example back7-relationship-1
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

## one to one 관계 설정하기
1. 한 테이블에서 다른 테이블의 primary key를 참조하는 foreign key를 생성
- google_account 테이블

id(primary key)| email | birthday | sex | phone_number
--|--|--|--|--
1| yangbancoding@gmail.com | 19200505 | male | 01112341234

- youtube_channel 테이블

id | channel_name | subscribers | google_account_id(foreign key)
-- | -- | -- | --
1 | 양반코딩 | 11 | 1

2. foreign key를 unique로 설정

3. foreign key를 설정한 테이블 relationship에서 from(foreign key) to(참조하고 싶은 테이블의 primary key)로 설정

4. 참조 하고 싶은 테이블 relationship에서 from(primary key) to(foreign key를 설정한 테이블의 foreign key)로 설정

## GraphQL
- 원래 테이블 -> foreign key를 설정한 테이블
  - 요청
```graphql
query {
  google_account {
    id
    email
    youtube_channel {
      id
      channel_name
    }
  }
}
```
  - 응답
```json
{
  "data": {
    "google_account": [
      {
        "id": 1,
        "email": "yangbancoding@gmail.com",
        "youtube_channel": {
          "id": 1,
          "channel_name": "양반코딩 YangbanCoding"
        }
      }
    ]
  }
}
```

- foreign key를 설정한 테이블 -> 원래 테이블
  - 요청
```graphql
query {
  youtube_channel {
    id
    channel_name
    google_account {
      id
      email
    }
  }
}
```

  - 응답
```json
{
  "data": {
    "youtube_channel": [
      {
        "id": 1,
        "channel_name": "양반코딩 YangbanCoding",
        "google_account": {
          "id": 1,
          "email": "yangbancoding@gmail.com"
        }
      }
    ]
  }
}
```
