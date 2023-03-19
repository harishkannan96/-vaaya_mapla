let var1=document.getElementById("input-text");
let var2=document.getElementById("button");
let response=document.getElementById("response");

var2.addEventListener('click' ,()=>{
    (response.innerHTML=var1.value)
})



