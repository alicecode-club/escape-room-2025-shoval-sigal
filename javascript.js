var has_keys = false;
var has_rope = false;

function open_popup(id) {
    var popup = document.getElementById(id);
    popup.style.display = "block";
}

function pick_keys(){
    if (!has_keys) {
        has_keys = true;
        alert("לקחת את המפתח!");
        document.getElementById("key-item").style.display = "none"; // להעלים את המפתח
    }
}

function close_popup(id) {
    var popup = document.getElementById(id);
    popup.style.display = "none";
}

function open_drawer(){
    if(!has_keys){
        alert("המגירה נעולה! אתה צריך מפתח...");
    }
    else{
        alert("המגירה נפתחה! מצאת חבל!");
        has_rope = true; // יש לנו חבל
        open_popup('popup_drawer_content'); // פותח פופאפ שמראה שמצאנו את החבל
    }
}

function click_window(){
    if (has_rope) {
        alert("השתמשת בחבל כדי לברוח מהחלון! ניצחת!");
        // כאן אפשר להוסיף קוד למעבר לשלב הבא או סיום המשחק
    } else {
        alert("החלון גבוה מדי... אתה לא יכול לרדת בלי משהו שיעזור לך!");
    }
}