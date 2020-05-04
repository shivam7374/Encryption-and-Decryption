let inpCode = document.getElementById('inpCode')
let btnEncode = document.getElementById('btnEncode')
let btnEncrypt = document.getElementById('btnEncrypt')

let code = document.getElementById('code')

btnEncode.onclick = function () {
    let data = inpCode.value 
    data = btoa(data)
    code.value = data
}

btnEncrypt.onclick = function () {
    let data = code.value
    data = encryptData(data)
    code.value = data
}

function encryptData(str) {
    /*
        TODO: actually encrypt data
        logic: turn lowercase chars to uppercase and viceversa 
     */
    swapcase = function swapcase(str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
            return chr ? match.toUpperCase() : match.toLowerCase();
        });
    }
    return (swapcase(str))
}