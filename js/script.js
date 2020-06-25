// Bind only query element like Jquery style
$ = el =>{
    let multiple = document.querySelectorAll(el);
    return multiple && multiple.length > 1 ? multiple : document.querySelector(el);
}

window.onload = ()=>{
    // init portfolio class
    portfolio = new Portfolio;
}