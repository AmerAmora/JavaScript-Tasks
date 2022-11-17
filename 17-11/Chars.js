const select = document.querySelector('select');
var data
async function chars(){
var res= await fetch("https://thronesapi.com/api/v2/Characters");
data = await res.json();
document.getElementById("image").src=data[0].imageUrl;
for ( i=0;i<data.length;i++)
 { var newOption = new Option(data[i].fullName,i); 
    select.add(newOption);
}
}
chars();
function changeimg()
{   document.getElementById("image").src=data[select.value].imageUrl;
}