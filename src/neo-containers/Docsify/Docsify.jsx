
import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiTheme from '../../theme/mui';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './Docsify.Style';
// import cn from 'classnames';
import { withRouter } from "react-router";
import { 
    MuiThemeProvider, 
    createMuiTheme 
} from '@material-ui/core/styles';
// import ScreenFirebaseUI from './ScreenFirebaseUI';

class Docsify extends Component {

    componentDidMount () {
        this.runDocsify ();
        console.log (this.props.history.location.hash);
    }

    runDocsify = () => {
        const docsifyScript = document.createElement(`script`);
        docsifyScript.src = `//unpkg.com/docsify/lib/docsify.min.js`;
        docsifyScript['data-name'] = `docsifyScript`;
        docsifyScript.async = true;
        document.body.appendChild(docsifyScript);
    }

    stopDocsify = () => {
        console.log('stopDocsify');
    }

    render (){
        const theme = createMuiTheme( muiTheme );
        const { classes } = this.props;
        // console.log('script', document.currentScript);
        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.app}>
                    {this.props.history.location.hash}
                </div>
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
	connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(withRouter(Docsify)))
);