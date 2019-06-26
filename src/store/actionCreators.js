


export function docsifyUpdateRestrictions(restrictions) {
    // console.log ('restrictions', restrictions, Date.now());
    return { 
        type: 'DOCSIFY/RESTRICTIOINS/UPDATE',
        restrictions
    };
}

export function docsifyChangePage(newPage) {
    return { 
        type: 'DOCSIFY/PAGE/CHANGE',
        newPage
    };
}
