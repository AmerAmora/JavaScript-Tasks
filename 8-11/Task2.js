function flags() {
    var x = document.getElementById("mySelect").value;
    switch (x)
    {
        case "Jordan":
        document.getElementById("flag").src="Flags/Jordan.png"
        break;
        case "Germany":
        document.getElementById("flag").src="Flags/Germany.png"
        break;
        case "Russia":
            document.getElementById("flag").src="Flags/Russia.png"
            break;
            case "Palestine":
            document.getElementById("flag").src="Flags/Palestine.png"
            break;
            case "Norway":
                document.getElementById("flag").src="Flags/Norway.png"
                break;
    }
  }