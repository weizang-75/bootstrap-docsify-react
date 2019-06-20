## Rex Accounts

It's important to know there are 2 levels of account in Rex; 
[Agents](./md/rex/rex_accounts?id=agents) & [Agencies](./md/rex/rex_accounts?id=agencies).

## Agencies

The Agency is a real estate business. Our customer. 
According to the customer's level of subscription, certain features 
of Rex are enabled or disabled across that entire account.

### Toggling Features

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

You now need to properly log out of [Rex](http://localhost:3000) 
and re-login as `Brisbane Realty`. 

## Agents

Think of users as Real Estate agents. They are individual employees 
of the agency and use Rex software in their day to day job. Their accounts 
are managed from within the Rex software. 

`Home -> Settings -> Users & Security`

![Manage Agents](../png/rex/manage_agents.png)

The Agency can assign specific privileges on an agent by agent basis, 
create groups of users, manage agent profiles and more

![Rex Agent Permissions](../png/rex/agent_permissions.png)