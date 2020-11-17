const finishMessage = (example) => `
  양반코딩 예제 설치 완료
  웹:
  cd web
  npm run dev

  앱:
  cd app
  npx react-native run-android // 안드로이드
  npx react-native run-ios // 아이폰

  hasura:
  cd hasura
  hasura migrate apply
  hasura metadata apply
  
  이 예제에 대한 자세한 설명은 
  https://github.com/YangbanCoding/yangban-beginner/tree/main/examples/${example} 
  에서 확인해 주세요
`

module.exports = finishMessage