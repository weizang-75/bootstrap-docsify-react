
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
import { FullscreenDialog } from '../index';
import dispatchAction from '../../store/dispatchAction';

class Docsify extends Component {

    state = {
        hasMounted: false,
        hash: this.props.history.location.hash,
        restrictionsChecked: false
    }

    componentDidMount(){
        // console.log ('[componentDidMount]');
        const { restrictions } = this.props;
        console.log ('restrictions', restrictions);
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
            hasMounted,
            restrictionsChecked,
        } = this.state;
        const { 
            hash
        } = this.props.history.location;
        // console.log ('[restrictionsChecked]', restrictionsChecked);
        if (hasMounted){
            if ( this.state.hash !== hash){
                let newLocation = this.props.history.location;
                dispatchAction ({ 
                    type: `DOCSIFY/PAGE/CHANGE`, 
                    newLocation
                });
            };
            if (!restrictionsChecked){
                dispatchAction ({ 
                    type: `DOCSIFY/CHECK/RESTRICTIONS`, 
                    hash: this.props.history.location.hash
                });
                this.setState({
                    restrictionsChecked: true,
                })
            }
        }
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
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.app}>
                    <FullscreenDialog />
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (store) => {
	return {
        restrictions: store.docsify.restrictions
	};
};

export default (
	connect(mapStateToProps, null)(withStyles(styles, { withTheme: true })(withRouter(Docsify)))
);