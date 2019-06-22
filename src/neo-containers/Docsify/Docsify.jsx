
import React, { Component } from 'react';

import {
    Button,
} from '@material-ui/core/';

class Docsify extends Component {

    runDocsify = (e) => {
        const script = document.createElement(`script`);
        script.src = `//unpkg.com/docsify/lib/docsify.min.js`;
        script.async = true;
        document.body.appendChild(script);
    }

    render (){
        return (
            <React.Fragment>
                <Button
                    variant={`contained`}
                    color={`secondary`}
                    onClick={(e) => {
                        e.preventDefault();
                        this.runDocsify (e);
                    }}>
                    Run Docs
                </Button>
            </React.Fragment>
        );
    }
}

export default Docsify;
