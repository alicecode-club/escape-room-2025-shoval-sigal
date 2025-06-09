let item1 = false;
let item2 = false;
let item3 =false;

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

function showPopup1() {
    document.getElementById("popup1").style.display = "block";
    item1 =true;   
    console.log("1st");
}

function hidePopup1() {
    document.getElementById("popup1").style.display = "none";
    setTimeout(() => checkFounding(), 100);
}

function showPopup2() {
    document.getElementById("popup2").style.display = "block";
    item2 = true;
    console.log("2nd");
}

function hidePopup2() {
    document.getElementById("popup2").style.display = "none";
    setTimeout(() => checkFounding(), 100);
}

function showPopup3() {
    document.getElementById("popup3").style.display = "block";
    item3 = true;
    console.log("3rd");
}

function hidePopup3() {
    document.getElementById("popup3").style.display = "none";
    setTimeout(() => checkFounding(), 100);
}

/*function moveOn3() {
    window.location.replace("/////");
    console.log("hello");
}*/

function checkFounding(){
    if (item1==true && item2==true && item3==true){
        alert("Congratulations! You Finished The First Room!!!");
        console.log("wow");
        //moveOn3()
        //ניווט לחדר של נועה ואופיר
    }
}