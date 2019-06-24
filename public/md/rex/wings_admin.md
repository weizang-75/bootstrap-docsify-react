### [README.md](../../README.md)

## Wings Admin

### Toggle Account Features

As a developer you may need to manage an agency level account with the ability 
to turn Rex features off & on. To do this we use [Wings Admin](http://localhost:20002)

- ### Step 1: Make sure you're local
Make sure you are using the local api  
If you have Rex running, stop it with `ctrl+a k`. Then...
```bash
yarn api:local && yarn start
```
to switch to local and restart.

- ### Step 2: Login to wings

__Login__ to [Rex Admin](http://localhost:20002) (Wings) as the local superuser;  
```
email: alex.babkov@realevo.com
password: password
```  
![Wings Login](../png/rex/wings_login.png)  

You will see the account list  

![Wings Admin](../png/rex/wings_admin.png)

Select `Brisbane Realty`. This is the account you will log into Rex with to see changes.

![Wings Admin](../png/rex/wings_account.png)  

- ### Step 3: Re-Auth Rex

After making account changes in Wings, you will need to properly log out of 
[Rex](http://localhost:3000) and log in to the correct account for the change 
to take effect. 