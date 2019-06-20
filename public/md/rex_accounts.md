## Rex Accounts

It's important to know there are 2 levels of account in Rex; 
[Agents](./md/rex/rex_accounts?id=agents) & [Agencies](./md/rex/rex_accounts?id=agencies).

### Agents

Think of users as Real Estate agents. They are individual employees 
of the agency and use Rex software in their day to day job. Their accounts 
are managed from within the Rex software. 

`Home -> Settings -> Users & Security`

![Manage Agents](../png/rex/manage_agents.png)

The Agency can assign specific privileges on an agent by agent basis, 
create groups of users, manage agent profiles and more

![Rex Agent Permissions](../png/rex/agent_permissions.png)

### Agencies

The Agency is a real estate business. Our customer. 
According to the customer's level of subscription, certain features 
of Rex are enabled or disabled across that entire account.

## New Agency

As a developer you may need to manage an agency level account with the ability 
to turn Rex features off & on. To do this we use [Wings Admin](http://localhost:20002)

- ### Step 1: Stop Rex
Make sure you are using the __local api__  
If you have Rex running, stop it with `ctrl+a k`.  
Now run this command to switch to local and restart.
```
yarn api:local && yarn start
```

- ### Step 2: Login to wings
__Login__ to [Rex Admin](http://localhost:20002) (Wings) as the local superuser;  
```
email: alex.babkov@realevo.com
password: password
```  
![Wings Login](../png/rex/wings_login.png)  

You should see the account list  

![Wings Admin](../png/rex/wings_admin.png)

- ### Step 3: Create New Account
__Create New Account__ by selecting `Create Account` 
and using the following details, changing the account 
name to something meaningful to the account's purpose. 

![Wings Admin](../png/rex/wings_new_account.png)  

If successful you have now created a new account from which you 
can enable/disable Rex features  

![Wings Admin](../png/rex/wings_account.png)  

- ### Step 4: Login to Rex

Return to [Rex](http://localhost:3000) and if you are not already, log out 
