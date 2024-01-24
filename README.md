# user-page
Prequisites for Setup - Node, MySQL

Open Mysql and create database - "taskdata" with username - "root" and password - "password" 
or change credentials in userbackend - src/models/db.coonect.ts

1. Run npm install in user-backend and user-frontend
2. Run npm run live - user-backend.
3. Run npm start - user-frontend.
4. Hit http://localhost:8080/api/task/addusers - on browser/postman /**It will automatically create users in user table **/
5. Below will be the users - 
[{"userId": 1,"username": "admin","password": "password"},{"userId": 2,"username": "salman","password": "qwerty"},{"userId": 3,"username": "tom","password": "client"},"userId": 4,"username": "george","password": "lenovo"}];
6. Login with either of above username and password mentioned.
7. Create task in Task table for every user and perform the crud operations.
