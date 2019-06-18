# Redux

[![listingslab docs](../../img/listingslab/logo.png)](./listingslab/index.md)

React components that implement Google's [Material Design.](https://material-ui.com/)
Material-UI components work in isolation. They are self-supporting.

```javascript

const theme = createMuiTheme( muiTheme );
const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate
            loading={null}
            persistor={persistor}>
			<BrowserRouter>
				<MuiThemeProvider theme={theme}>
					<PWA />
				</MuiThemeProvider>
			</BrowserRouter>
		</PersistGate>
	</Provider>
	, document.getElementById('root')
);

  ```