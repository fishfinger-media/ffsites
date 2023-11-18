// FISHFINGER MEDIA BASE WEBFLOW JS

document.addEventListener('DOMContentLoaded', function() {
    var ffcomment = document.createComment("Made by Fishfinger Media - https://fishfinger.me");
    var ffdoctype = document.doctype;
    ffdoctype.parentNode.insertBefore(ffcomment, ffdoctype.nextSibling);
});

// COPYRIGHT DATE 
const ffcurrentYear = new Date().getFullYear();
document.querySelectorAll('[data-copyright]').forEach(element => element.innerHTML = ffcurrentYear);