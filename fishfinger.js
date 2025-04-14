// FISHFINGER MEDIA BASE WEBFLOW JS

// COPYRIGHT DATE 
const ffcurrentYear = new Date().getFullYear();
document.querySelectorAll('[data-copyright]').forEach(element => element.innerHTML = ffcurrentYear);
