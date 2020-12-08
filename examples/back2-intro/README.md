# 입문 백엔드 2강 - Hasura 소개와 데이터 베이스 기초

## 영상
[![2강 - CRUD](http://img.youtube.com/vi/qcaOz4v1uEM/0.jpg)](http://www.youtube.com/watch?v=qcaOz4v1uEM "2강 CRUD")

## 입문 백엔드 강의 목표
 - GraphQL을 사용한 데이터베이스에 대한 CRUD 작업
 - CRUD : Create, Read, Update, Delete
 
## Hasura 소개
- [Hasura 공식 문서](https://hasura.io/)

## 데이터 베이스 기초
SQL을 사용하는 데이터 베이스는 테이터를 Table 형식으로 저장함
- 친구 테이블

id(Integer, Primary Key) |이름(Text) |키(Integer) |몸무게(Integer)
--|--|--|--
1|가렌|180|90
2|갈리오|200|300
3|갱플랭크|170|70

- Column(열)
  - id : 정수, Primary Key
  - 이름 : 문자열
  - 키 : 정수
  - 몸무게 : 정수
  
- Row(행)
  - { id: 1, name: '가렌', height: 180, weight: 90 }
  - { id: 2, name: '갈리오', height: 200, weight: 300 }
  - { id: 3, name: '갱플랭크', height: 170, weight: 70 }
