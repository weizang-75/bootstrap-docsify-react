
import React, { Component } from 'react';
// import moment from 'moment';

import {
    Button,
    // Tooltip,
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
                {/* {`Docsify Docsify Docsify `}
                React: {moment(Date.now()).format("dddd, MMMM Do YYYY, h:mm:ss a")} */}

                <Button
                    variant={`contained`}
                    color={`secondary`}
                    onClick={(e) => {
                        e.preventDefault();
                        this.runDocsify (e);
                    }}
                >
                    Run Docs
                </Button>
            </React.Fragment>
        );
    }
}

export default Docsify;