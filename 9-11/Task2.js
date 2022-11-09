document.getElementById("card").style.border="1px solid black"
document.getElementById("card").style.width="500px"
document.getElementById("card").style.height="500px"
document.getElementById("card").style.backgroundColor="gray";
function Info()
{   
     var subject =document.getElementById("subject").value;
     var description=document.getElementById("description").value;
     var users=document.getElementById("users").value;
     var HTML=document.getElementById("HTMLCss").checked;
     var MVC=document.getElementById("MVC").checked;
     var sql=document.getElementById("MySql").checked;
     sessionStorage.setItem("subject",subject);
     sessionStorage.setItem("description",description);
     sessionStorage.setItem("users",users);
     sessionStorage.setItem("HTML","HTML&Css");
     sessionStorage.setItem("MVC","MVC");
     sessionStorage.setItem("sql","MySQL");
     document.getElementById("textSubject").innerHTML= sessionStorage.getItem("subject");
    document.getElementById("textDes").innerHTML= sessionStorage.getItem("description");
    document.getElementById("textUsers").innerHTML= sessionStorage.getItem("users");
    if(HTML){
        document.getElementById("tech1").innerHTML=sessionStorage.getItem("HTML");
    }
    else  document.getElementById("tech1").innerHTML="";
    if(MVC){
        document.getElementById("tech2").innerHTML=sessionStorage.getItem("MVC");
    }
    else  document.getElementById("tech2").innerHTML="";
    if(sql){
        document.getElementById("tech3").innerHTML=sessionStorage.getItem("sql");
    }
    else  document.getElementById("tech3").innerHTML="";
}

document.getElementById("textSubject").innerHTML= sessionStorage.getItem("subject");
    document.getElementById("textDes").innerHTML= sessionStorage.getItem("description");
    document.getElementById("textUsers").innerHTML= sessionStorage.getItem("users");
    document.getElementById("tech1").innerHTML=sessionStorage.getItem("HTML");
    document.getElementById("tech2").innerHTML=sessionStorage.getItem("MVC");
    document.getElementById("tech3").innerHTML=sessionStorage.getItem("sql");

