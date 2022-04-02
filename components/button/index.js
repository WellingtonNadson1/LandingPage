import './style.css';

function Button(classe, content){
    return /*html*/`
        <button class="${classe}">
            ${content}
        </button>
    `
}

export default Button