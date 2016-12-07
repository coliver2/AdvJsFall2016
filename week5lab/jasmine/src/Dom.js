
function getInputBox(selector) {
    var elem = document.querySelector(selector);
    if(isNaN(elem.value)){
        return false;
    }
    else{return true;};    
}

function getTextDecoration(selector){
    var elem = document.querySelector(selector);
    return elem.value.toString();
    
}
