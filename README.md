##

Додаток створений за допомогою бібліотеки React за допомогою команди 'npx
create-react-app my-app'.

Для запуску додатку необхідно склонувати репозиторій та встановити залежності за
допомогою команди 'npm install', а потім в терміналі виконати команду 'npm
start'.

Виконано деплой на сторінці "https://ivan-prystay.github.io/frontend-test/"
сервісу GitHub.

Бекенд частина розміщена на сервісі "https://render.com".


Під час запуску додатку виконується запит на бекенд за компанією по замовчуванню та рендериться список продуктів, при натисканні на кнопки інших комнпаній виконується інший запит та відповідно здійснюється перерендер. При натисканні на кнопку на карточці товару - цейтовар додається до списку покупок та відображається на другій сторінці. На сторінці покупок є форма з полями імені, телефону, ул. пошти та адреси, а також на карточці кожного товару можна вказати кількість. Після заповнення всіх полів та натискання кнопки 'Submit' формується замовлення та створюється відповідний об'єкт, який на даний час відображається у консолі. В подальшому його також можна відправляти на електронну пошту чи здійснювати POST запит до БД.


## GET

Приклади запитів:

### GET all protducts of MC-Donny ==> https://backendtest-fxbq.onrender.com/api/mcDonnyProducts

### GET all protducts of CFK ==> https://backendtest-fxbq.onrender.com/api/cfkProducts

### GET all protducts of ETC ==> https://backendtest-fxbq.onrender.com/api/etcProducts
