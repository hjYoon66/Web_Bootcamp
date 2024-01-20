# 온라인 쇼핑몰 프로젝트 🛍️

- 지금까지 배운 모든 내용을 적용해보는 프로젝트

## 개발 언어 🔎

프론트 엔드

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=EJS&logoColor=white">


백엔드  
 <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white">
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">

## 데이터 엔티티 📚

### User

> email, password, isAdmin, name, address

### Product

> name, summary, price, image, description

### Cart

> items, total price, number of items

### Order

> user data, products /cart data, date, status

## 전체 화면 🖥️
### 회원 가입 및 로그인
![login](https://github.com/hjYoon66/Web_Bootcamp/assets/101798354/013dba8a-dc92-4def-9e1f-92dfe23bad2f)
![signup](https://github.com/hjYoon66/Web_Bootcamp/assets/101798354/6df26e10-3670-4d16-8944-0cb09d22f57c)  
> csrf 토큰과 mongodb 세션 등을 이용.
> isAdmin 필드를 통해 관리자와 사용자를 구분
<hr>

### 사용자
![customer product](https://github.com/hjYoon66/Web_Bootcamp/assets/101798354/66b2cfca-80d6-425f-b957-9f2fb4adfd16)
![customer cart](https://github.com/hjYoon66/Web_Bootcamp/assets/101798354/75eb4a2b-e042-4364-9a30-4d4f0a82a3f6)
![customer order](https://github.com/hjYoon66/Web_Bootcamp/assets/101798354/ff168ef4-bb32-4381-a96e-7f7ecbf2d60a)
> 사용자는 상품을 장바구니에 추가하여 주문 등록까지 할 수 있음
 <hr>

 ### 관리자
![admin p](https://github.com/hjYoon66/Web_Bootcamp/assets/101798354/bb5a45ce-29ca-4e6e-bd04-8a1a00c35745)
![admin product](https://github.com/hjYoon66/Web_Bootcamp/assets/101798354/255afec8-c090-4568-b486-23f328e93fc5)
![admin orders](https://github.com/hjYoon66/Web_Bootcamp/assets/101798354/3b7135e1-0da9-4d77-b32a-4ed56fbf8f23)
> 관리자는 상품을 등록하고 주문을 pending/fulfilled/cancelled를 통해 주문 관리를 할 수 있음
 <hr>

 ### 오류 페이지
![401](https://github.com/hjYoon66/Web_Bootcamp/assets/101798354/dcddf6fc-3b18-46f5-a5d9-a379a720cfc0)
![404](https://github.com/hjYoon66/Web_Bootcamp/assets/101798354/ec09c862-c612-4d19-9f7b-7652c50972cb)
> 오류들을 검증하여 404, 401, 403, 500 에러들을 처리
 <hr>
 

 ## 느낀점 🎤
 * 프론트와 백엔드 파트를 모두 경험할 수 있었던 프로젝트.
 * Node.js와 ejs를 경험.
 * 클론 코딩으로 진행했지만 csrf 토큰이나 세션에 대한 공부의 필요성을 절실히 느끼게됨
