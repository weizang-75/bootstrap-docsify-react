
import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiTheme from '../../theme/mui';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './Docsify.Style';
import cn from 'classnames';
import { 
    MuiThemeProvider, 
    createMuiTheme 
} from '@material-ui/core/styles';
// import {
//     Button,
// } from '@material-ui/core/';
import ScreenFirebaseUI from './ScreenFirebaseUI';

class Docsify extends Component {

    componentDidMount () {
        // this.runDocsify(null);
    }

    runDocsify = (e) => {
        const script = document.createElement(`script`);
        script.src = `//unpkg.com/docsify/lib/docsify.min.js`;
        script.async = true;
        document.body.appendChild(script);
    }

    render (){
        const theme = createMuiTheme( muiTheme );
        const { 
            classes,
            docsifyObj
        } = this.props;
        const {
            authed,
            user,
        } = docsifyObj;
        return (
            <MuiThemeProvider theme={theme}>
                <div className={cn(classes.docsify)}>
                    {/* <Button
                        variant={`outlined`}
                        color={`primary`}
                        onClick={(e) => {
                            e.preventDefault();
                            this.runDocsify (e);
                        }}>
                        Run Docsify?
                    </Button> */}

                        {authed && user !== null ? 
                            <div>U R Authed.</div> 
                        : 
                            <ScreenFirebaseUI /> 
                        }
                    
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        docsifyObj: store.docsify.docsifyObj,
	};
};

export default (
	connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(Docsify))
);