let num = 0;
function moveOn() {
    window.location.href = "../room1.html";
}

function showPopup0() {
    document.getElementById("popup").style.display = "block";  
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

function StartGame() {
    const board = document.getElementById('board'); // תיקון! אל תשתמש ב-popup עצמו
    board.innerHTML = ""; // מנקה תוכן קודם

    const positions = [
        [0, 0], [100, 0], [200, 0],
        [0, 100], [100, 100], [200, 100],
        [0, 200], [100, 200], [200, 200]
    ];

    const shuffled = [...positions].sort(() => Math.random() - 0.5);

    let selected = null;

    for (let i = 0; i < shuffled.length; i++) {
        const pos = shuffled[i];
        const div = document.createElement('div');
        div.className = 'piece';
        div.style.backgroundPosition = `-${pos[0]}px -${pos[1]}px`;
        div.dataset.current = `${pos[0]},${pos[1]}`;
        div.dataset.correct = `${positions[i][0]},${positions[i][1]}`;

        div.addEventListener('click', () => {
            if (!selected) {
                selected = div;
                div.style.border = '2px solid red';
            } else {
                // החלפת מיקומים
                const tempPos = div.style.backgroundPosition;
                const tempData = div.dataset.current;

                div.style.backgroundPosition = selected.style.backgroundPosition;
                div.dataset.current = selected.dataset.current;

                selected.style.backgroundPosition = tempPos;
                selected.dataset.current = tempData;

                selected.style.border = 'none';
                selected = null;

                checkWin(); // בודק האם הצליחו
            }
        });

        board.appendChild(div);
    }
}

function checkWin() {
    const pieces = document.querySelectorAll('.piece');
    for (let piece of pieces) {
        if (piece.dataset.current !== piece.dataset.correct) {
            return; // עדיין לא סיים
        }
    }

    // הצלחה!
    setTimeout(() => alert("YOU GOT A KEY!!!🔑"), 100);
    num = 1;
}

function StartGame1() {
    if(num == 1){
        const board = document.getElementById('board1'); // תיקון! אל תשתמש ב-popup עצמו
        board.innerHTML = ""; // מנקה תוכן קודם

        const positions = [
            [0, 0], [100, 0], [200, 0],
            [0, 100], [100, 100], [200, 100],
            [0, 200], [100, 200], [200, 200]
        ];

        const shuffled = [...positions].sort(() => Math.random() - 0.5);

        let selected = null;

        for (let i = 0; i < shuffled.length; i++) {
            const pos = shuffled[i];
            const div = document.createElement('div');
            div.className = 'piece1';
            div.style.backgroundPosition = `-${pos[0]}px -${pos[1]}px`;
            div.dataset.current = `${pos[0]},${pos[1]}`;
            div.dataset.correct = `${positions[i][0]},${positions[i][1]}`;

            div.addEventListener('click', () => {
                if (!selected) {
                    selected = div;
                    div.style.border = '2px solid red';
                } else {
                    // החלפת מיקומים
                    const tempPos = div.style.backgroundPosition;
                    const tempData = div.dataset.current;

                    div.style.backgroundPosition = selected.style.backgroundPosition;
                    div.dataset.current = selected.dataset.current;

                    selected.style.backgroundPosition = tempPos;
                    selected.dataset.current = tempData;

                    selected.style.border = 'none';
                    selected = null;

                    checkWin1(); // בודק האם הצליחו
                }
            });

            board.appendChild(div);
        }
        } else {
            alert("you need a key")
        }
    }

function checkWin1() {
    const pieces = document.querySelectorAll('.piece1');
    for (let piece1 of pieces) {
        if (piece1.dataset.current !== piece1.dataset.correct) {
            return; // עדיין לא סיים
        }
    }

    // הצלחה!
    setTimeout(() => alert("YOU GOT A KEY!!!🔑"), 100);
    num = 2;
}

function StartGame1() {
    if(num == 2){
        const board = document.getElementById('board2'); // תיקון! אל תשתמש ב-popup עצמו
        board.innerHTML = ""; // מנקה תוכן קודם

        const positions = [
            [0, 0], [100, 0], [200, 0],
            [0, 100], [100, 100], [200, 100],
            [0, 200], [100, 200], [200, 200]
        ];

        const shuffled = [...positions].sort(() => Math.random() - 0.5);

        let selected = null;

        for (let i = 0; i < shuffled.length; i++) {
            const pos = shuffled[i];
            const div = document.createElement('div');
            div.className = 'piece2';
            div.style.backgroundPosition = `-${pos[0]}px -${pos[1]}px`;
            div.dataset.current = `${pos[0]},${pos[1]}`;
            div.dataset.correct = `${positions[i][0]},${positions[i][1]}`;

            div.addEventListener('click', () => {
                if (!selected) {
                    selected = div;
                    div.style.border = '2px solid red';
                } else {
                    // החלפת מיקומים
                    const tempPos = div.style.backgroundPosition;
                    const tempData = div.dataset.current;

                    div.style.backgroundPosition = selected.style.backgroundPosition;
                    div.dataset.current = selected.dataset.current;

                    selected.style.backgroundPosition = tempPos;
                    selected.dataset.current = tempData;

                    selected.style.border = 'none';
                    selected = null;

                    checkWin1(); // בודק האם הצליחו
                }
            });

            board.appendChild(div);
        }
        } else {
            alert("you need a key")
        }
    }

function checkWin1() {
    const pieces = document.querySelectorAll('.piece2');
    for (let piece1 of pieces) {
        if (piece1.dataset.current !== piece1.dataset.correct) {
            return; // עדיין לא סיים
        }
    }

    // הצלחה!
    setTimeout(() => alert("YOU GOT A KEY!!!🔑"), 100);
    num = 3;
}