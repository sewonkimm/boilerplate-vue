# 🍎개발환경구성

1. npm 사용을 위한 Node.js 설치 or yarn 설치

    yarn은 보안적인 성능이나 빌드 성능 등을 개선한 패키지 매니저입니다.
    설치 후 아래 명령어로 설치가 잘 되었는지 확인하세요.
    ```
    $ npm -v
    $ yarn -v
    ```

2. vue cli 설치

    ```
    $ yarn global add @vue/cli 
    ```

3. vue create [project-name] 으로 프로젝트 생성





# 🍊vue 설치방법

### 방법 1. script 태그에 CDN 직접 추가

### 방법 2. vue cli로 사전 빌드된 프로젝트 구성

vue 2로 설치 (공식문서가 2버전 기준으로 작성되어있기 때문에 vue 2로 설치했습니다.)




# 🍋vue router 설치

공식 지원되는 vue-router library를 사용합니다.

```
$ yarn add vue-router
$ vue add router
```

명령어로 vue-router를 설치하고, 프로젝트에 router를 적용합니다.
App.vue 내용이 덮어씌워집니다.



# 🍐vuetify 적용

## What is vuetify ?

vuetify는 vue 위에 구축된 UI framework입니다. Material design을 기반으로 설계되었습니다.
mobile first 설계되었습니다.

## 장점

1. Material design 명세를 따르기 때문에 Meterial design으로 설계된 프로젝트에 적합합니다. 
2. 개발주기가 일주일에 한 번으로 패치가 굉장히 활발합니다.
3. 공식문서도 굉장히 잘 정리되어있습니다.

## 단점

1. 커스터마이징 자유도가 떨어집니다.
2. 종종 예상을 벗어난 동작을 하게됩니다.
3. 불필요한 DOM 노드의 증가로 성능 이슈가 발생할 수 있습니다.

