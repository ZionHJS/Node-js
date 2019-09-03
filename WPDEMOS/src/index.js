import _ from 'lodash';
import './style/index.css';//loader => css-loader   module, style-loader
import './style/a.scss'


function createDomElement(){
    let dom = document.createElement('div');
    dom.innerHTML = _.join(['google.com', 'well', 'internship'], '');
    dom.classList.add('box');
    return dom;
}

let divDom = createDomElement();

document.body.appendChild(divDom);



