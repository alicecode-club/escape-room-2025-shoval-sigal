function moveOn(){
    window.location.href = "../room1.html";
}

function showPopup0() {
    document.getElementById("popup").style.display = "block";
    const board = document.getElementById('popup'); //הגדרת משתנה לדיב של הלוח משחק
    const positions = [
        [0, 0], [100, 0], [200, 0],
        [0, 100], [100, 100], [200, 100],
        [0, 200], [100, 200], [200, 200]
    ].sort(() => Math.random() - 0.5);

    let selected = null;

    for (let i = 0; i < positions.length; i++) {
        const pos = positions[i];
        const div = document.createElement('div');
        div.className = 'piece';
        div.style.backgroundPosition = `-${pos[0]}px -${pos[1]}px`;
        div.dataset.bg = `${pos[0]},${pos[1]}`;

        div.addEventListener('click', () => {
            if (!selected) {
                selected = div;
                div.style.border = '2px solid red';
            } else {
                const temp = div.style.backgroundPosition;
                div.style.backgroundPosition = selected.style.backgroundPosition;
                selected.style.backgroundPosition = temp;
                selected.style.border = '1px solid #ccc';
                selected = null;
            }
        });

        board.appendChild(div);
    }
}


function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

function showPopup1() {
    document.getElementById("popup1").style.display = "block";
}

function hidePopup1() {
    document.getElementById("popup1").style.display = "none";
}

function showPopup2() {
    document.getElementById("popup2").style.display = "block";
}

function hidePopup2() {
    document.getElementById("popup2").style.display = "none";
}

