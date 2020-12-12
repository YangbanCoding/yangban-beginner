# 입문 앱 1강 - 시작하기

## 예제 내 컴퓨터에서 실행하기
빈 폴더에서
```bash
npx create-yangban-app --example app1-tutorial
cd app
npx react-native run-android # 안드로이드
npx react-native run-ios # 아이폰
```

## 영상

## Windows

### 설치하기
- Chocolatey : cmd에서
```cmd
@powershell -NoProfile -ExecutionPolicy Bypass -Command "[System.Net.WebRequest]::DefaultWebProxy.Credentials = [System.Net.CredentialCache]::DefaultCredentials; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH="%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

```
- JDK(Java Development Kit)
```bash
choco install -y openjdk8
```
- [Android Studio](https://developer.android.com/studio/index.html)
- Android SDK 10 
- 경로 설정

## Mac
----
----

## 앱 개발 해보기
빈 폴더를 만들고 오른쪽 클릭 Git Bash Here
```
npx react-native init [앱 이름]
```
작업이 끝나면 안드로이드 에뮬레이터를 열고
```bash
npx react-native start
npx react-native run-android # 안드로이드
npx react-native run-ios # 아이폰
```
다른 Git Bash를 열고
```
code .
```
visual studio code에서 App.js를 아래와 같이 수정한다
```javascript
import React from 'react'
import { View, Text } from 'react-native'

function App () {
  return (
    <View>
      <Text>안녕하세요 양반코딩입니다</Text>
    </View>
  )
 }
 
 export default App
```
