
import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiTheme from '../../theme/mui';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './Docsify.Style';
// import cn from 'classnames';
import { 
    MuiThemeProvider, 
    createMuiTheme 
} from '@material-ui/core/styles';
// import ScreenFirebaseUI from './ScreenFirebaseUI';

class Docsify extends Component {

    componentDidMount () {
        this.runDocsify ();
    }

    runDocsify = () => {
        const docsifyScript = document.createElement(`script`);
        docsifyScript.src = `//unpkg.com/docsify/lib/docsify.min.js`;
        docsifyScript['data-name'] = `docsifyScript`;
        docsifyScript.async = true;
        document.body.appendChild(docsifyScript);
    }

    render (){
        const theme = createMuiTheme( muiTheme );
        // console.log('script', document.currentScript);
        return (
            <MuiThemeProvider theme={theme}>
                hello
            </MuiThemeProvider>
        );
    }
}

/*
<ScreenFirebaseUI 
    runDocsify={this.runDocsify} 
    docsifyScript={this.docsifyScript}
/>
*/

const mapStateToProps = (store) => {
	return {
        docsifyObj: store.docsify.docsifyObj,
	};
};

export default (
	connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(Docsify))
);