
function checkpass() {

    let pass= document.getElementById("password").value;
    if(pass.length<6)
    
        document.getElementsByClassName("Spans")[0].innerHTML="Password is less than 6 characters";
    

    else  { document.getElementsByClassName("Spans")[0].innerHTML="Password is ok";document.getElementById("confirm").removeAttribute("disabled"); }

}
function confirm(){
  let pass=document.getElementById("password").value;
  let con=document.getElementById("confirm").value;
  
  if(pass != con)  {document.getElementsByClassName("Spans")[1].innerHTML="Passwords doesn't match"; }
  else { 

    confirmflag=true; document.getElementsByClassName("Spans")[1].innerHTML="";  
    const button = document.createElement("button");
    button.innerText = "submit";
    
    // Append to body:
    document.body.appendChild(button);


} 

}

