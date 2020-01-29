
/**
 *determine if it is anumber
 *
 * @param {*} value
 * @returns boolean
 */
function isNumber(value) {
    if (isNaN(value) || value.replace(/(^\s*)|(\s*$)/g, "") == ""){
        return false; // not a number
    }
    return true; // a number
}
function showDialog(title,message) {
    x0p(title, message);
}

function showConfirm(text) {
    if(confirm(text)){

    }else{

    }
}