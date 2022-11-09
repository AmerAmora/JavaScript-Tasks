
document.getElementById("card").style.border="1px solid black"
document.getElementById("card").style.width="500px"
document.getElementById("card").style.height="500px"
document.getElementById("card").style.backgroundColor="gray";
var name  ;
var age   ;
var gender;
var brief ;
var uni   ;
var major ;
var c   ;
var java  ;
var python;

function Info()
{ 
     var name    =document.getElementById("fname").value;
     console.log(name);
     var age=document.getElementById("age").value;
     var gender=document.querySelector('input[name="gender"]:checked').value;
     var brief=document.getElementById("description").value;
     var uni=document.getElementById("uni").value;
     var major=document.getElementById("major").value;
     var c=document.getElementById("C").checked;
     var java=document.getElementById("Java").checked;
     var python=document.getElementById("Python").checked;
     localStorage.setItem("fullname",name);
     localStorage.setItem("age",age);
     localStorage.setItem("textGender",gender);
     localStorage.setItem("brief",brief);
     localStorage.setItem("uni",uni);
     localStorage.setItem("major",major);
     localStorage.setItem("C","C++")
     localStorage.setItem("java","java")

     localStorage.setItem("python","python")

     document.getElementById("textName").innerHTML= localStorage.getItem("fullname");
    document.getElementById("textAge").innerHTML= localStorage.getItem("age");
    document.getElementById("textGender").innerHTML= localStorage.getItem("textGender");
    document.getElementById("descrip").innerHTML= localStorage.getItem("brief");
    document.getElementById("textUni").innerHTML=localStorage.getItem("uni");   
    document.getElementById("textMajor").innerHTML=localStorage.getItem("major");
    if(c){
        document.getElementById("c++").innerHTML=localStorage.getItem("C");
    }
    else  document.getElementById("c++").innerHTML="";
    if(java){
        document.getElementById("java").innerHTML=localStorage.getItem("java");
    }
    else  document.getElementById("java").innerHTML="";
    if(python){
        document.getElementById("python").innerHTML=localStorage.getItem("python");
    }
    else  document.getElementById("python").innerHTML="";


}
document.getElementById("textName").innerHTML= localStorage.getItem("fullname");
document.getElementById("textAge").innerHTML= localStorage.getItem("age");
document.getElementById("textGender").innerHTML= localStorage.getItem("textGender");
document.getElementById("descrip").innerHTML= localStorage.getItem("brief");
document.getElementById("textUni").innerHTML=localStorage.getItem("uni")
document.getElementById("textMajor").innerHTML=localStorage.getItem("major")
document.getElementById("c++").innerHTML=localStorage.getItem("C");
document.getElementById("java").innerHTML=localStorage.getItem("java");
document.getElementById("python").innerHTML=localStorage.getItem("python");
