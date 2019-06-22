const initialState = {
    updated: Date.now(),
    docsifyObj: {
        authed: false,
        authTitle: `Restricted Content`,
        authInstruction: `Sign in with any syndicated provider`,
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
