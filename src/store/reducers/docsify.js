const initialState = {
    updated: Date.now(),
    docsifyObj: {
        authed: false,
        authTitle: `Content Restricted`,
        authInstruction: `Sign in with Google`,
        user: null,
    }
};

export default function docsify (state = initialState, action ) {
    switch (action.type) {

        case 'DOCSIFY/DOIT':
            let newDocsifyObj = {
                newThing: `DONE IT.`,
            }
            return {
                ...state,
                updated: Date.now(),
                docsifyObj: newDocsifyObj,
            };

        case 'STARTOVER':
            console.log('DOCSIFY STARTOVER', state);
            return initialState;

        default:
            return state;
    }
}
