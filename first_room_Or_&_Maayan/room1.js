function moveOn(){
    window.location.href = "../room1.html";
}
<<<<<<< HEAD
=======

let keysCollected = 0;

    function handleWindow(num) {
        if (num === 1) {
            alert("נסיך עצוב מופיע… אולי כדאי לחפש מפתח?");
        } else if (num === 2) {
            if (keysCollected === 0) {
                alert("מצאת מפתח! 🔑");
                keysCollected = 1;
            } else {
                alert("כבר לקחת את המפתח 😊");
            }
        } else if (num === 3) {
            if (keysCollected === 1) {
                alert("מצאת את הורד! 🌹 סיימת את המשימה!");
            } else {
                alert("הדלת נעולה… אולי כדאי למצוא מפתח קודם?");
            }
        }
    }


    function open_popup(POPUP_IMG) {
    	var popup = document.getElementById(POPUP_IMG);
    	popup.style.display = "block";
	}
	function close_popup(POPUP_IMG) {
    	var popup = document.getElementById(POPUP_IMG);;
    	popup.style.display = "none";
	}


>>>>>>> c707073c9521a6ec51f3b0337d20d1e12fa50925
