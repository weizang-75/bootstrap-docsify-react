

window.accessRestrictions = { 
    restricted: false,
};


window.restrictAccess = function (restrictions) {
    if (restrictions){
        console.log ('restrictAccess');
        const el = document.querySelector("#docsify");
        el.classList.add('restricted');
        window.accessRestrictions = { 
        restricted: true,
        restrictions,
        };
    }
}