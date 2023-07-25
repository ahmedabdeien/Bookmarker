var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var submit = document.getElementById("submit")
var tableContent = document.getElementById("tbody");
var seeWebsite;
arrayProdctar = [];
var boxModal = document.getElementById("boxModal");
var boxClose = document.getElementById("boxClose");
var cartona = ``

if (localStorage.getItem("localProdctar") != null) {
    arrayProdctar = JSON.parse(localStorage.getItem("localProdctar"))
    display()
}

function addProdctar() {
    if (boxalidtion() & boxalidtionUrl()) {
        var objprodctar = {
            site: siteName.value,
            url: siteURL.value,
        };
        if (check(siteName.value) && checkken(siteURL.value)) {
            arrayProdctar.push(objprodctar);
            localStorage.setItem("localProdctar", JSON.stringify(arrayProdctar))
            boxalidtion()
            clear()
            siteName.classList.remove("is-valid")
            siteURL.classList.remove("is-valid")
            display()
        }
    }
}
function display(indexURL){
    var cartona = ``
    for (var i = 0; i < arrayProdctar.length; i++) {
        cartona += `
        <tr>
        <td><span class="badge rounded-pill text-bg-dark">${i + 1}</span></td>
        <td><span class="badge rounded-pill text-bg-primary fs-7">${arrayProdctar[i].site}</span></td>
        <td><button onclick="seeMore(${i})" child-1="button" class="seeWebsite border-0 border-success bg-success rounded-1 text-white"><a class="text-decoration-none text-white" href="http://${arrayProdctar[i].url}" target="_blank"><i class="bi bi-eye-fill"></i> See Website</button></a></td>
        <td><button onclick="deleteItem(${i})" child-2="button" class="deleteBtn border-0 border-danger bg-danger rounded-1 text-white"><i class="bi bi-trash2-fill"></i> Delete</button></td>
    </tr>`;
        document.getElementById("tbody").innerHTML = cartona
    }
    seeWebsite = document.querySelectorAll(".seeWebsite");
    if(seeWebsite){
        for(var c = 0; c < seeWebsite.length; c++){
            seeWebsite[c].addEventListener("click",function (e){
                seeMore(e)
            })
        }
    }
}
function clear() {
    siteName.value = "";
    siteURL.value = "";
}
function deleteItem(index) {
    arrayProdctar.splice(index, 1)
    localStorage.setItem("localProdctar", JSON.stringify(arrayProdctar))
    display()
}
// ================================================
var nameRegex = /^[A-Za-z0-9 ]{3,}$/;
var urlRegex = /^(https:\/\/)?(w{3}\.)?[\.A-Za-z0-9\/]{3,}\.com([\/+=%$#-@?A-Za-z0-9]{1,})?$/;
//===============================================

function check(str) {
    nameRegex
    return nameRegex.test(str)
}
function checkken(strr) {
    urlRegex
    return urlRegex.test(strr)
}
// ================================================
function boxalidtion() {
    if (
        siteName.value === ""
    ) {
        boxModal.classList.replace("d-none", "d-block");
        return false;
    } else {
        boxModal.classList.replace("d-block", "d-none");
        return true;
    }
}

function boxalidtionUrl() {
    if (
        siteURL.value === ""
    ) {
        boxModal.classList.replace("d-none", "d-block");
        return false;
    } else {
        boxModal.classList.replace("d-block", "d-none");
        return true;
    }
}
function closeModal() {
    boxModal.classList.add("d-none");
}
boxClose.addEventListener("click", closeModal)

//============================================================================
siteName.addEventListener("input", function () {
    validate(siteName, nameRegex);
});
siteURL.addEventListener("input", function () {
    validate(siteURL, urlRegex);
});
function validate(element, regex) {
    var testRegex = regex;
    if (testRegex.test(element.value)) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
    } else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
    }
}