font.addEventListener('change',(event)=>{
    let value=event.target.value;
    textarea1.style.fontSize = value + "px";
})
bold.addEventListener('click',(event)=>{
    if(textarea1.style.fontWeight =="bold"){
        textarea1.style.fontWeight = "normal";
        event.target.classList.remove("active");
    }
    else{
        textarea1.style.fontWeight = "bold";
        event.target.classList.add("active")
    }
})
italic.addEventListener('click',(event)=>{
    if(textarea1.style.fontStyle =="italic"){
        textarea1.style.fontStyle = "normal";
        event.target.classList.remove("active");
    }
    else{
        textarea1.style.fontStyle = "italic";
        event.target.classList.add("active")
    }
})
