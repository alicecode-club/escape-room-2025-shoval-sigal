document.addEventListener('DOMContentLoaded', () => {
    const shapes = document.querySelectorAll('.shape');
    const messageDisplay = document.getElementById('message');
    const resetButton = document.getElementById('resetButton');

    // הגדר את הסיסמה שלך כאן (לדוגמה: עיגול, ריבוע, משולש)
    const correctPattern = ['candle', 'rose', 'mirror'];

    let enteredPattern = [];

    // פונקציה לבדיקת הסיסמה
    function checkPattern() {
        if (enteredPattern.length === correctPattern.length) {
            const isCorrect = enteredPattern.every((shape, index) => shape === correctPattern[index]);

            if (isCorrect) {
                messageDisplay.textContent = 'מנעול נפתח בהצלחה!';
                messageDisplay.classList.remove('error');
                messageDisplay.classList.add('success');
                disableShapes(); // נטרל לחיצות נוספות אחרי פתיחה
            } else {
                messageDisplay.textContent = 'סיסמה שגויה. נסה שוב.';
                messageDisplay.classList.remove('success');
                messageDisplay.classList.add('error');
                setTimeout(resetLock, 1000); // איפוס אוטומטי לאחר שגיאה
            }
        }
    }

    // פונקציה לאיפוס המנעול
    function resetLock() {
        enteredPattern = [];
        shapes.forEach(shape => {
            shape.classList.remove('selected');
            shape.removeEventListener('click', handleShapeClick); // הסר מאזין זמני כדי למנוע כפילויות
            shape.addEventListener('click', handleShapeClick); // הוסף מאזין מחדש
        });
        messageDisplay.textContent = '';
        messageDisplay.classList.remove('success', 'error');
        enableShapes(); // הפעל מחדש את הצורות
    }

    // פונקציה לטיפול בלחיצה על צורה
    function handleShapeClick(event) {
        const clickedShape = event.target;
        const shapeType = clickedShape.dataset.shape;

        if (!clickedShape.classList.contains('selected')) {
            clickedShape.classList.add('selected');
            enteredPattern.push(shapeType);
            checkPattern();
        }
    }

    // פונקציה לנטרול לחיצות על צורות
    function disableShapes() {
        shapes.forEach(shape => {
            shape.removeEventListener('click', handleShapeClick);
        });
    }

    // פונקציה להפעלת לחיצות על צורות
    function enableShapes() {
        shapes.forEach(shape => {
            shape.addEventListener('click', handleShapeClick);
        });
    }

    // איפוס המנעול וקישור אירועים בהתחלה
    resetLock();
    resetButton.addEventListener('click', resetLock);
});
