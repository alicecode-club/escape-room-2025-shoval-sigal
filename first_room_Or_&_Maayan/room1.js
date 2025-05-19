function moveOn(){
    window.location.href = "../room1.html";
}

function showPopup0() {
    document.getElementById("popup").style.display = "block";  
}function hidePopup() {
    document.getElementById("popup").style.display = "none";
}function showPopup1() {
    document.getElementById("popup1").style.display = "block";
}function hidePopup1() {
    document.getElementById("popup1").style.display = "none";
}function showPopup2() {
    document.getElementById("popup2").style.display = "block";
}function hidePopup2() {
    document.getElementById("popup2").style.display = "none";
}

function StartGame (){
    const board = document.getElementById('board'); //הגדרת משתנה לדיב של הלוח משחק
    board.innerHTML = ""; // מנקה תוכן קודם

    const positions = [ //מיקומים של החלקים
    [0, 0], [100, 0], [200, 0],
    [0, 100], [100, 100], [200, 100],
    [0, 200], [100, 200], [200, 200]
].sort(() => Math.random() - 0.5); //עירובוב של המקומות של החלקים

  let selected = null;//משתנה של החלק שנבחר

  for (let i = 0; i < positions.length; i++) { //לולאה שרצה על כל המקומות במערך
    const pos = positions[i]; //הגדרת משתנה למיקום הנוחכי בהרצה 
    const div = document.createElement('div'); //יצירת דיב לחלק מן הפאזל
    div.className = 'piece';
    div.style.backgroundPosition = `-${pos[0]}px -${pos[1]}px`; //מציג את החלק בתמונה
    div.dataset.bg = `${pos[0]},${pos[1]}`; //שומר את המיקום של החלק
    
    div.addEventListener('click', () => {//פונקצייה שרצה שנלחץ החלק 
        if (!selected) {//בדיקה אם כבר נבחר חלק
            selected = div; //מגידרים אותו כחלק שנבחר
            div.style.border = '2px solid red';
        } else { //אם נבחר כבר חלק
            const temp = div.style.backgroundPosition;
            div.style.backgroundPosition = selected.style.backgroundPosition; //החלפה ש הרקעים של החלקים
            selected.style.backgroundPosition = temp;
            selected.style.border = '1px solid #ccc';
            selected = null; // מאפס את משתנה הבחירה

        }
}
  );
  board.appendChild(div); //מוסיף את החלק ללוח
}
}

function move(){
    window.location.href = "../TESTGAME.html";
}