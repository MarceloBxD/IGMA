## IGMA Challenge 🔥

> It was asked to write a costumer registration API with the following values:
* Name
* CPF
* Birth

### Important note ⚠️
#### Validate the CPF before recording the customer in the database

> Endpoints
* Create an user ( if the CPF isn't validated, show the 422 error )
* Search the user by CPF number
* List all the users in database ( using pagination )

### It was asked to do the CPF validation manually
### Other important observation ⚠️

* The CPF can be passed with or without dots and hyphens

> It was used the https://www.macoratti.net/alg_cpf.htm#:~:text=O url to do the validation as requested

#### Database used: ✨ Mysql 

## Which tecnologies were used in this application ? ☺️

* Nodemon ( Don't need to restart the server all the times that I change something in project )
* Mysql ( Database )
* Express ( To create the routes )
* Body-Parser ( Use to convert the body of the request to various formats, including json )
* Cors ( to allow a web application to run in one origin and access resources from a different origin )

## How to upload the application ?

1. git clone on some file in your system
2. open w/ terminal
3. code . ( if you use Visual Studio Code as IDE) to open the project inside VScode.

## Was asked to do some documentation too, and here it is

#### Project structure

![Structure](https://raw.githubusercontent.com/MarceloBxD/IGMA/master/src/images/Igma-content.png?token=GHSAT0AAAAAAB5KLEV7GS3I532FEROA5PO2Y7MFFCA)

> First of all, the necessary imports were made, including the function created to validate the CPF called validateCpf

![RegisterRoute](https://raw.githubusercontent.com/MarceloBxD/IGMA/master/src/images/MainRequests%20-%20Register.png?token=GHSAT0AAAAAAB5KLEV6PCCXUEUPIM6EX4M6Y7MFI6Q)

> I used a condition to see if the cpf was sent with or without the dots and hyphens, and if it was without, use the substring to put them correctly

![FinalRegister](https://raw.githubusercontent.com/MarceloBxD/IGMA/master/src/images/finalRegister.png?token=GHSAT0AAAAAAB5KLEV6DKMZ5JT7G6UUHAU2Y7MFYDA)

> After that, the route to register a user was created. If all values were not passed as expected, it returns a "Missing data" error

> It was created the routes to get all users and get users based on his/her CPF

![GetRoute](https://raw.githubusercontent.com/MarceloBxD/IGMA/master/src/images/finalGets.png?token=GHSAT0AAAAAAB5KLEV7SN5MI4LQQ7A7ZGA4Y7MFPYA)

Feito por ★ Marcelo Bracet ★
