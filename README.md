# Letters-React

You can write letters to your friends, family or you, anyone!

### Install Modules

```
npm install
```

---

### env setting

- **.env**

```
REACT_APP_MODE=production
GENERATE_SOURCEMAP=false
REACT_APP_API_URL=API_URL:port
REACT_APP_CHAT_URL=FRONT_URL:port
```

프로젝트 디렉토리에 위와 같이 **.env** 파일 작성

- REACT_APP_API_URL, REACT_APP_CHAT_URL에는 `http://`를 포함하여 작성

---

### 실행

```
docker-compose up -d
```

- 이미 컨테이너와 이미지가 떠있는 경우

```
docker-compose down --rmi all
```

를 실행해서 지워주고 다시 실행하자

- 로그 확인

```
docker-compose logs
```
