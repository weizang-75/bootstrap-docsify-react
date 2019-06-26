
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

    state = {
        hasMounted: false,
        hash: this.props.history.location.hash,
    }

    componentDidMount(){
        console.log ('[componentWillMount]');
        const { hash } = this.props.history.location;
        this.setState({ 
            hasMounted: true, 
            firstHash: hash,
            hash 
        });
        this.runDocsify();
    }

    componentDidUpdate () {
        const { 
            hasMounted 
        } = this.state;
        const { 
            hash
        } = this.props.history.location;
        if (hasMounted){
            console.log ('[OK, STOP.]', hash, this.state.hash);
            if ( this.state.hash !== hash){
                console.log ('[PAGE CHANGE]');
            };
            
        }        
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
                    {/* {this.props.history.location.hash} */}
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