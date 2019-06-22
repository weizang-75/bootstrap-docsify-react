
import React, { Component } from 'react';
import muiTheme from '../../theme/mui';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './Docsify.Style';
import cn from 'classnames';
import { 
    MuiThemeProvider, 
    createMuiTheme 
} from '@material-ui/core/styles';
import {
    Button,
} from '@material-ui/core/';

class Docsify extends Component {

    componentDidMount () {
        // this.runDocsify({});
    }

    runDocsify = (e) => {
        const script = document.createElement(`script`);
        script.src = `//unpkg.com/docsify/lib/docsify.min.js`;
        script.async = true;
        document.body.appendChild(script);
    }

    render (){
        const theme = createMuiTheme( muiTheme );
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <div className={cn(classes.docsify)}>
                    <Button
                        variant={`outlined`}
                        color={`primary`}
                        onClick={(e) => {
                            e.preventDefault();
                            this.runDocsify (e);
                        }}>
                        Run Docsify
                    </Button>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Docsify);
