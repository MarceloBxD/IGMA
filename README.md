## IGMA Challenge 🔥

> It was asked to write a costumer registration API with the following values:

- Name
- CPF
- Birth

### Important note ⚠️

#### Validate the CPF before recording the customer in the database

> Endpoints

- Create an user ( if the CPF isn't validated, show the 422 error )
- Search the user by CPF number
- List all the users in database ( using pagination )

### It was asked to do the CPF validation manually

### Another observation ⚠️

- The CPF can be passed with or without dots and hyphens

> It was used the https://www.macoratti.net/alg_cpf.htm#:~:text=O url to do the validation as requested

#### Database used: ✨ Mysql

## Which tecnologies were used in this application ? ☺️

- Nodemon ( Don't need to restart the server when change in the project is made )
- Mysql ( Database )
- Express ( To create the routes )
- Dotenv ( To hide my database password )
- Body-Parser ( Use to convert the body of the request to various formats, including json )
- Cors ( to allow a web application to run in one origin and access resources from a different origin )

## How to upload the application ?

1. Create a file on Desktop
2. Open with terminal / CMD
3. Insert into CMD the following code: git clone https://github.com/MarceloBxD/IGMA.git
4. Open on VScode or another IDE
5. If you're Windows user press "Ctrl + j" to open the terminal and typewrite "npm install or npm i" to install the necessary dependencies with NPM package
6. After that, write "npm run dev" without the "..." to run the server with nodemon
7. Will appears a message saying "Server is running on port 3000"
8. Install Insomnia or another framework to test the API
9. it is important to create a database with the same values ​​to do the tests correctly. The fields are userId, name, cpf, nasc.
   💎

## Documentation

#### Project structure

![Structure](https://raw.githubusercontent.com/MarceloBxD/IGMA/master/src/images/Igma-content.png?token=GHSAT0AAAAAAB5KLEV7GS3I532FEROA5PO2Y7MFFCA)

> First of all, the necessary imports were made, including the function created to validate the CPF called validateCpf

![RegisterRoute](<https://raw.githubusercontent.com/MarceloBxD/IGMA/master/src/images/register(1).png>)

> I used a condition that, if the cpf was sent without the dots and hyphens, use the substring to put them correctly

> If the passed cpf was already in the database, it would not send and give's a error message

![FinalRegister](<https://raw.githubusercontent.com/MarceloBxD/IGMA/master/src/images/register(2).png>)

> After that, the route to register a user was created. If all values don’t pass as expected, it returns a "Missing data" error

> It was created the routes to get all users and get users based on his/her CPF

![GetRoute](https://raw.githubusercontent.com/MarceloBxD/IGMA/master/src/images/finalGets.png?token=GHSAT0AAAAAAB5KLEV7SN5MI4LQQ7A7ZGA4Y7MFPYA)

> Here are some pictures of the projects

![Structure](<https://raw.githubusercontent.com/MarceloBxD/IGMA/master/src/images/CreateUser(1).png>)

![Structure](<https://raw.githubusercontent.com/MarceloBxD/IGMA/master/src/images/CreateUser(2).png>)

![Structure](<https://raw.githubusercontent.com/MarceloBxD/IGMA/master/src/images/CreateUser(3).png>)

![Structure](https://raw.githubusercontent.com/MarceloBxD/IGMA/master/src/images/userByCpf.png)

Feito por ★ Marcelo Bracet ★
