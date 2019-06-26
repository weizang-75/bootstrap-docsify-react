const initialState = {
    updated: Date.now(),
    user: null,
    restrictAccess: null,
    location: {
        
    },
};

export default function docsify (state = initialState, action ) {
    switch (action.type) {

        case 'DOCSIFY/USER/UPDATE':
            console.log('DOCSIFY/USER/UPDATE', state);
            return {
                ...state,
                updated: Date.now(),
                user: action.user,
            };

        case 'STARTOVER':
            return initialState;

        default:
            return state;
    }
}
