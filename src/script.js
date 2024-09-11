var settingsmenu = document.querySelector(".settings-menu");/*code for drop down menu*/
var darkBtn = document.getElementById("dark-btn");/*code for switch to darkkmode button*/
/*code for drop down menu*/
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
/*code for dark mode*/
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme");
/*check which mode the page is on first*/
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}

/*making sure the page stays on darkmode even after refreshing the page*/

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme","light");
}

