## Paywall Leads 

> [PR #1183](https://github.com/rexlabsio/rex-app/pull/1183)  
[Clubhouse #27854](https://app.clubhouse.io/rexlabs/story/27854/create-paywall-ux)

![leads_example](https://user-images.githubusercontent.com/370513/59730902-730d4300-9287-11e9-9ba2-d00ac94f4e11.png)

### Proposed changes

#### r2.u.app.menu

The Advanced Settings Menu Item for Leads is defined in `public/assets/js/r2.u.app.menu.js`. There is an array which contains Objects that look a like this:  

```javascript
leads: {
    title: 'Leads',
    adminGroup: 'appSettings',
    href: '/admin/settings/leads/',
    accessRights: 'addon.leads && admin_application.access_section'
},
```
The array gets passed to __self.getModulesIterative__ which checks the user has correct accessRights for each module. If not, _module.locked_ gets set to true and that module is not shown in the menu. If we add an attribute called paywallKey to that Menu object;

```javascript
leads: {
    ...,
    paywallKey: 'leads'
},
```
Then we can stop the module being locked and the Menu item is now shown

```javascript
if (module.paywallKey) {
    module.locked = false;
}
```

#### Knockout

The __paywallKey__ attribute is also present in the data that the knockout view `application/views/templates/admin-shell.html` uses to actually render the menu, so we create a condition in that knockout code which adds the upgrade icon to the link and sets the href property to a new paywall view, passing the value of paywallKey so we can present the right copy for that feature.

```html
<!-- ko if: $data.paywallKey -->
```

### QA

#### e2e (Experimental)
```
Feature: Paywall UX; Leads

    As a user I should be prompted to upgrade when encountering features 
    my account does not have access to

    Scenario: Advanced Settings, Leads
        Given I have turned off the Leads feature for "Brisbane Realty" 
        And I am logged in as "Brisbane Realty" 
        And I and navigate to "Advanced -> Settings"
        Then I should see the menu option "Leads"
        And I should see the upgrade icon
        When I click menu item "Leads"
        Then I should see the upgrade prompt in full screen mode
```

To test this requires being able to turn features on and off for an Agency Level account. 
[Learn more](./md/rex_accounts.md) about dealing with accounts in Rex world. 


#### Using Wings Admin

How to toggle the Leads feature in Wings Admin.

### UX Doc link

[Rex feature upgrade prompt](https://docs.google.com/document/d/1lmPypYx8PVb_Qdg5NWpmaXwMjf45_gpMrr5Hgb-3hFM/edit#heading=h.vgu80vvtz7qj)


### Types of changes

- [x] Breaking change (fix or feature that would cause existing functionality to not work as expected)

### Checklist

- [ ] I have squashed irrelevant commits
- [ ] ESLint tests pass locally with my changes
- [ ] I have added necessary documentation (if appropriate)
- [ ] I have rebased onto develop
- [ ] I have tested all relevant workflows locally

### Further comments

If this is a relatively large or complex change, kick off the discussion by explaining why you chose the solution you did and what alternatives you considered, etc...