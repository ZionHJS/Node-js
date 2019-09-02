import _ from 'lodash';

function createDomElement(){
    let dom = document.createElement('div');
    dom.innerHTML = _.join(['google.com', 'well', 'internship'], '');
    return dom;
}

let divDom = createDomElement();

document.body.appendChild(divDom);



