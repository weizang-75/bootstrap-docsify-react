const initialState = {
    updated: Date.now(),
    restrictions: null,
};

export default function docsify (state = initialState, action ) {
    switch (action.type) {

        case 'DOCSIFY/RESTRICTIOINS/UPDATE':
            // console.log('DOCSIFY/RESTRICTIOINS/UPDATE', action);
            return {
                ...state,
                updated: Date.now(),
                restrictions: action.restrictions,
            };

        case 'STARTOVER':
            return initialState;

        default:
            return state;
    }
}
