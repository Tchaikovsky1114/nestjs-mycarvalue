## Hello Nest.js!

### @nestjs/common

- 사용하는 대다수의 함수, 클래스

### @nestjs/platform-express

- HTTP 요청을 처리하기 위해 NEST가 Express를 사용할 수 있게 한다.

- 내부적으로 Nest 자체는 Http Request를 처리하지 않음.

- 그 대신 외부 구현에 의존해 요청을 처리하는데
일종의 서버를 구현해야 하는데, Express를 선택하는 모듈

- 사용할 수 있는 또 다른 모듈로 `Fastify`가 있음.



### reflect-metadata
- 데코레이터가 기능을 하기 위한 모듈


### 통신 Process

Request - 데이터의 유효성 검사 - 유저 신분(authenticated) 확인 - 처리하는 특정 함수로 라우팅 - 비지니스 로직 수행 - 데이터 베이스 접근 - Response


### Nest의 기본 구성

**Controllers: 들어오는 요청을 처리한다.** - 최소 1개 이상 존재
Services: 데이터에 접근하고 비지니스 로직을 담당한다.
**Modules: 코드를 그루핑한다**  - 최소 1개 이상 존재
Pipes: 들어오는 데이터에 대한 유효성 검사
Filters: 들어오는 요청을 처리할 때 발생되는 에러를 처리한다
Guards: 인증 및 보안을 담당한다
Interceptors: 들어오는 요청이나 나가는 응답에 논리를 추가합니다
Repositories: DB에 저장되어 있는 데이터를 담당한다.


### Conventions

1. 하나의 클래스는 하나의 파일에 담는다 (특수한 상황 제외)
2. 클래스명은 무엇을 만들려고 하는지 의도를 분명하게 담아야한다.
3. 클래스명과 파일명은 항상 같아야한다.
4. 파일명은 `name.type_of_thing.ts` 형식으로 통일한다.

`class AppController`
=> `app.controller.ts`

`class AppModule`
=> `app.module.ts`

### generate with cli

- generate project
\$ nest new [projectname]

- generate module

\$ nest generate module [modulename]

- generate controller
\$ nest generate controller [folder]/[controllerName] --flat

--flat : controller 폴더를 만들고 싶지 않을 때 사용


### kind of Decorator

- Class Decorator
\@Controller
\@Module
\@Service

- Argument Decorator
\@Body
\@Param
\@Headers
\@Query

- Method Decorator
\@Get
\@Post


### Setting Up Automatic Validation

1. 글로벌 발리데이션 사용
2. DTO(Data Transfer Object) Class 생성하고 유효성 검사에 필요한 속성을 정의.
3. 유효성 검사의 룰을 데코레이터로 정의
4. 요청핸들러에 해당 DTO Class를 Apply한다.


### DTO의 사용 목적

- 통신하는 정보, 데이터의 형태가 어떤지 자세히 설명하는 객체이며 네트워크 요청-응답의 형태로 주고받기 위한 목적이다.



