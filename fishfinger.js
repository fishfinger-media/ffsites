// FISHFINGER MEDIA BASE WEBFLOW JS

document.addEventListener('DOMContentLoaded', function() {
    var ffcomment = document.createComment("Made by Fishfinger Media");
    var ffdoctype = document.doctype;
    ffdoctype.parentNode.insertBefore(ffcomment, doctype.nextSibling);
});

// COPYRIGHT DATE 
const ffcurrentYear = new Date().getFullYear();
document.querySelectorAll('[data-copyright]').forEach(element => element.innerHTML = ffcurrentYear);