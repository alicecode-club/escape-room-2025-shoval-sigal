let item1 = false;
let item2 = false;
let item3 =false;

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

function showPopup1() {
    document.getElementById("popup1").style.display = "block";
    item1 =true;   
}

function hidePopup1() {
    document.getElementById("popup1").style.display = "none";
}

function showPopup2() {
    document.getElementById("popup2").style.display = "block";
    item2 = true;
}

function hidePopup2() {
    document.getElementById("popup2").style.display = "none";
}

function showPopup3() {
    document.getElementById("popup3").style.display = "block";
    item3 = true;
}

function hidePopup3() {
    document.getElementById("popup3").style.display = "none";
}

if (item1==true && item2==true && item3==true){
    alert("Congrargulation! You Finished The First Room!!!")
    //ניווט לחדר של נועה ואופיר
}