var acc = document.getElementsByClassName("faqs");
var i;
for (i = 0; i < acc.length; i++){
    const info = document.getElementsByClassName("plus");
    const hide = document.getElementsByClassName("minus");
    const information = info[i];
    const negligence = hide[i];
    acc[i].addEventListener("click",function() {
    var panel = this.nextElementSibling;
    if(panel.style.display === "none"){
        panel.style.display = "block";
    } else {
        panel.style.display = "none";    
    }
    if(information.style.display === "inline"){
        information.style.display = "none";
        negligence.style.display = "inline";
    } else {
        information.style.display = "inline";
        negligence.style.display = "none";
    }
    })
}



