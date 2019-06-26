
## QA

### Branches

?> __/rexlabsio/wings-api/tree__ `feature/land-registry`  
[PR wings-api/gh_724](https://github.com/rexlabsio/wings-api/pull/724)

?> __/rexlabsio/rex-app/tree/__ `feature/ch30932/land-registry-integration-settings`

### Steps

1. **Verify Land Registry Exists**  

Load the new Land Registry Application/Integration into the classic screen.

!> [WHEN] you navigate to: [admin/integrations/discover](/admin/integrations/discover)

![SCREEN_admin-integrations-discover](https://firebasestorage.googleapis.com/v0/b/docsify-react.appspot.com/o/Land%20Registry%2FSCREEN_admin-integrations-discover.png?alt=media&token=15cc0633-c891-42c5-83b4-025d7d4656bf)

> [THEN] you should see an integration card for Land Registry  
[AND] the Land Registry registry app should be searchable

![HM Land Registry Sales History Data](https://firebasestorage.googleapis.com/v0/b/docsify-react.appspot.com/o/Land%20Registry%2FHM%20Land%20Registry%20Sales%20History%20Data.png?alt=media&token=98ef4d9b-ff61-41d3-aa99-d2fccbbbcf4a)

2. **Verify something else** 


!> __[THEN]__ Administrators will be able to turn on the HM Land Registry integration in order to access the Sales History data.