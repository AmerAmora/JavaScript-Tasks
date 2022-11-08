function font() {
    var x = document.getElementById("font").value;
    switch (x)
    {
        case "arial":
        document.getElementById("text").style.fontFamily="Arial, Helvetica, sans-serif"
        break;
        case "Times":
        document.getElementById("text").style.fontFamily="'Times New Roman', Times, serif"
        break;
        case "Lucida":
            document.getElementById("text").style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
            break;
       
    }
  }
  function size1() {
    var x = document.getElementById("size").value;
    switch (x)
    {
        case "small":
        document.getElementById("text").style.fontSize="12px"
        break;
        case "med":
        document.getElementById("text").style.fontSize="20px"
        break;
        case "big":
            document.getElementById("text").style.fontSize="30px"
            break;
       
    }
  }

  function boldcheck(){
    var x = document.getElementById("boldcheck").checked;
    if(x)
    document.getElementById("text").style.fontWeight="bold";
    else if(!x)
    document.getElementById("text").style.fontWeight="normal";
}
function italiccheck(){
    var x = document.getElementById("italiccheck").checked;
    if(x)
    document.getElementById("text").style.fontStyle="italic";
    else if(!x)
    document.getElementById("text").style.fontStyle="normal";
}
function underlinecheck(){
    var x = document.getElementById("underlinecheck").checked;
    if(x)
    document.getElementById("text").style.textDecoration="underline";
    else if(!x)
    document.getElementById("text").style.textDecoration="none";
}