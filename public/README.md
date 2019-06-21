
## 💻 Home

## Rex

- [Rex accounts](./md/rex/rex_accounts.md)
- [Wings Admin](./md/rex/wings_admin.md)

### [WIP] Leads Paywall Screen

> [PR #1183](https://github.com/rexlabsio/rex-app/pull/1183)  
[Clubhouse #27854](https://app.clubhouse.io/rexlabs/story/27854/create-paywall-ux)  
[Rex feature upgrade prompt (Google Doc)](https://docs.google.com/document/d/1lmPypYx8PVb_Qdg5NWpmaXwMjf45_gpMrr5Hgb-3hFM/edit#heading=h.vgu80vvtz7qj)  
[Sketch](https://api.clubhouse.io/api/attachments/files/clubhouse-assets/59b49fbb-ad90-4628-b335-19807d8ed4d4/5ccb9b57-8a83-41b7-ba28-6d078e9ba2b3/R_Generic-Paywall_UX%20(Generic%20Feature%20Paywall)%20copy.sketch)  
[Sparkle SVG](https://api.clubhouse.io/api/attachments/files/clubhouse-assets/59b49fbb-ad90-4628-b335-19807d8ed4d4/5ccb99c5-f2f0-446a-9b05-add04ba9895b/sparkle-group.svg)


### Gherkin (Experimental)
```gherkin
Feature: Docsify React

    As a user I should be prompted to upgrade when encountering features 
    my account does not have access to

    Scenario: Advanced Settings, Leads
        Given I have turned off the Leads feature for "Brisbane Realty" 
        And I am logged in as "Brisbane Realty" 
        And I and navigate to "Advanced -> Settings"
        Then I should see the menu option "Leads"
```

## Other
- [Emojis :collision:](./md/emojis.md)