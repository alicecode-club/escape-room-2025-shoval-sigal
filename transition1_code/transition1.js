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
        });
        messageDisplay.textContent = '';
        messageDisplay.classList.remove('success', 'error');
        enableShapes(); // הפעל מחדש את הצורות
    }

    // פונקציה לטיפול בלחיצה על צורה
    function handleShapeClick(event) {
        // השתמש ב-closest כדי לוודא שאנחנו תמיד מקבלים את אלמנט ה-.shape, גם אם הקליק היה על התמונה הפנימית
        const clickedShape = event.target.closest('.shape');
        if (!clickedShape) return; // אם הקליק לא היה בתוך .shape, צא.

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
            // ודא שלא מוסיפים listener אם כבר קיים
            shape.removeEventListener('click', handleShapeClick); // הסר ודא שאין כפילות
            shape.addEventListener('click', handleShapeClick);
        });
    }

    // הוסף את ה-event listeners פעם אחת בטעינת הדף
    enableShapes();
    // אתחל את מצב המנעול
    resetLock();
    // קשר את כפתור האיפוס לפונקציית האיפוס
    resetButton.addEventListener('click', resetLock);
});