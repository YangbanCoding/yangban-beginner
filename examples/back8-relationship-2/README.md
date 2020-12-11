# 입문 백엔드 8강 - Table relationship : one to many 관계

## 예제 실행하기

빈 폴더에서
```bash
npx create-yangban-app --example back8-relationship-2
```
백엔드
```bash
cd hasura
hasura migrate apply
hasura metadata apply
hasura seeds apply
```
프론트엔드
```
없음
```
[예제 실행 방법 자세히 보기](https://github.com/YangbanCoding/yangban-beginner/blob/main/docs/back-practice.MD)

## 영상

## one to many 관계 설정하기
1. video에서 youtube_channel 테이블의 primary key를 참조하는 foreign key를 추가
- youtube_channel 테이블

id(primary key)| channel_name
--|--
1| 양반코딩 
2| 양반먹방

- video 테이블

id | title | youtube_channel_id(foreign key)
-- | -- | --
1 | html 강의 | 1
2 | css 강의 | 1
3 | javascript 강의 | 1
4 | 치킨 먹방 | 2
5 | 국밥 먹방 | 2

2. video의 relationship 

    1. Relation type을 Object Relationship으로 설정
 
    2. Relation name에 원하는 이름을 설정
 
    3. Reference Table을 youtube_channel 테이블로 설정
 
    4. from을 foreign key(youtube_channel_id)로 설정
 
    5. to를 primary key(id)로 설정

3. youtube_channel의 relationship

    1. Relation type을 Array Relationship으로 설정
 
    2. Relation name에 원하는 이름을 설정
 
    3. Reference Table을 video 테이블로 설정
 
    4. from을 primary key(id)로 설정
 
    5. to를 foreign key(youtube_channel_id)로 설정

## GraphQL
- 원래 테이블 -> foreign key를 설정한 테이블
  - 요청
```graphql
query {
  youtube_channel {
    id
    channel_name 
    videos {
      id
      title
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
        "channel_name": "양반코딩",
        "videos": [
          {
            "id": 1,
            "title": "html 강의"
          },
          {
            "id": 2,
            "title": "css 강의"
          },
          {
            "id": 3,
            "title": "javascript 강의"
          }
        ]
      }
    ]
  }
}
```

- foreign key를 설정한 테이블 -> 원래 테이블
  - 요청
```graphql
query {
  video {
    id
    title
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
    "video": [
      {
        "id": 1,
        "title": "html 강의",
        "youtube_channel": {
          "id": 1,
          "channel_name": "양반코딩"
        }
      }
    ]
  }
}
```
