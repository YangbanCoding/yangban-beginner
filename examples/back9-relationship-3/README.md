# 입문 백엔드 9강 - Table relationship : many to many 관계

## 예제 실행하기

빈 폴더에서
```bash
npx create-yangban-app --example back9-relationship-3
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

## many to many 관계 설정하기
1. 양 쪽의 테이블의 primary key를 참조하는 foreign key를 각각 가지는 테이블을 생성
- youtube_channel 테이블

id(primary key)| channel_name
--|--
1| 유저1
2| 유저2

- video 테이블

id | title
-- | --
1 | 코딩 강의 영상
2 | 헬스 영상
3 | 요리 영상
4 | 먹방 영상

- like_video 테이블

id | youtube_channel_id | video_id
-- | -- | --
1 | 1 | 1
2 | 1 | 2
3 | 2 | 2
4 | 2 | 3

  2. 1 like_video 테이블의 relationship

    1. Relation type을 Object Relationship으로 설정
 
    2. Relation name에 원하는 이름을 설정
 
    3. Reference Table을 youtube_channel 테이블로 설정
 
    4. from을 foreign key(youtube_channel_id)로 설정
 
    5. to를 primary key(id)로 설정
    
  2. 2 like_video 테이블의 relationship

    1. Relation type을 Object Relationship으로 설정
 
    2. Relation name에 원하는 이름을 설정
 
    3. Reference Table을 video 테이블로 설정
 
    4. from을 foreign key(video_id)로 설정
 
    5. to를 primary key(id)로 설정
    
3. youtube_channel의 relationship 

    1. Relation type을 Array Relationship으로 설정
 
    2. Relation name에 원하는 이름을 설정
 
    3. Reference Table을 like_video 테이블로 설정
 
    4. from을 primary key(id)로 설정
 
    5. to를 foreign key(youtube_channel_id)로 설정

4. video의 relationship

    1. Relation type을 Array Relationship으로 설정
 
    2. Relation name에 원하는 이름을 설정
 
    3. Reference Table을 like_video 테이블로 설정
 
    4. from을 primary key(id)로 설정
 
    5. to를 foreign key(video_id)로 설정

## GraphQL
- youtube_channel -> video 테이블
  - 요청
```graphql
query {
  youtube_channel {
    id
    channel_name
    like_videos {
      video {
        id
        title
      }
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
        "channel_name": "유저1",
        "like_videos": [
          {
            "video": {
              "id": 1,
              "title": "코딩 강의 영상"
            }
          },
          {
            "video": {
              "id": 2,
              "title": "헬스 영상"
            }
          }
        ]
      }
    ]
  }
}
```

- video 테이블 -> youtube_channel 테이블
  - 요청
```graphql
query {
  video {
    id
    title
    like_videos {
      youtube_channel {
        id
        channel_name
      }
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
        "id": 2,
        "title": "헬스 영상",
        "like_videos": [
          {
            "youtube_channel": {
              "id": 1,
              "channel_name": "유저1"
            }
          },
          {
            "youtube_channel": {
              "id": 2,
              "channel_name": "유저2"
            }
          }
        ]
      }
    ]
  }
}
```

