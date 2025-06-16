const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// הגדרת משתנים גלובליים לתמונות
const playerImage = new Image();
const wolfImage = new Image();
const followerImage = new Image();

// הגדרת נתיבי התמונות (ודאי שהם נכונים ושהתמונות קיימות בתיקייה 'mdia')
playerImage.src = './mdia/player.png'; // שנה את הנתיב לשל השחקן שלך
wolfImage.src = './mdia/wolf.png';     // שנה את הנתיב לשל הזאב שלך
followerImage.src = './mdia/follower.jpeg'; // שנה את הנתיב לשל העוקב שלך

// פונקציה לטעינת כל התמונות ורק לאחר מכן להתחיל את המשחק
let imagesLoaded = 0;
const totalImages = 3; // מספר התמונות שאת טוענת

function onImageLoad() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        // כל התמונות נטענו, עכשיו אפשר להתחיל את המשחק
        update(); // מתחיל את לולאת המשחק
        setTimeout(nextpage, 60000); // מתחיל את הטיימר לעמוד הבא
    }
}

// קריאה לפונקציית הטעינה עבור כל תמונה
playerImage.onload = onImageLoad;
wolfImage.onload = onImageLoad;
followerImage.onload = onImageLoad;

// טיפול בשגיאות טעינה (מומלץ)
playerImage.onerror = () => console.error("Failed to load player image: " + playerImage.src);
wolfImage.onerror = () => console.error("Failed to load wolf image: " + wolfImage.src);
followerImage.onerror = () => console.error("Failed to load follower image: " + followerImage.src);


// דמות השחקן
const player = {
    x: 50,
    y: canvas.height / 2,
    radius: 15, // הרדיוס עדיין שימושי לבדיקת התנגשות ומיקום מרכז התמונה
    speed: 5,
};

// זאבים
const wolves = [];
let wolfSpawnInterval = 100; // מרווח הופעת זאבים
let wolfSpawnTimer = 0;

// נקודות כחולות שעוקבות
const followers = [];
const numFollowers = 5; // מספר הנקודות הכחולות
const followerDistance = 30; // המרחק הרצוי בין הנקודות

// קלט מקלדת
const keys = {};

// --- פונקציות ציור חדשות המשתמשות בתמונות ---

function drawPlayer() {
    // מצייר את התמונה ממורכזת סביב נקודת השחקן (x, y)
    // רוחב וגובה התמונה יהיו פי 2 מהרדיוס
    ctx.drawImage(playerImage, player.x - player.radius, player.y - player.radius, player.radius * 2, player.radius * 2);
}

function drawWolves() {
    wolves.forEach(wolf => {
        // הזאב היה בגודל 20x20
        ctx.drawImage(wolfImage, wolf.x, wolf.y, 20, 20);
    });
}

function drawFollowers() {
    followers.forEach(follower => {
        // העוקב היה ברדיוס 10, כלומר 20x20
        // מצייר את התמונה ממורכזת סביב נקודת העוקב
        ctx.drawImage(followerImage, follower.x - 10, follower.y - 10, 20, 20);
    });
}

// --- לוגיקת משחק ---
function update() {
    // תנועת שחקן
    if (keys.ArrowUp && player.y - player.radius > 0) player.y -= player.speed;
    if (keys.ArrowDown && player.y + player.radius < canvas.height) player.y += player.speed;
    if (keys.ArrowLeft && player.x - player.radius > 0) player.x -= player.speed;
    if (keys.ArrowRight && player.x + player.radius < canvas.width) player.x += player.speed;

    // יצירת זאבים
    wolfSpawnTimer++;
    if (wolfSpawnTimer >= wolfSpawnInterval) {
        wolves.push({
            x: canvas.width,
            y: Math.random() * (canvas.height - 20),
            speed: Math.random() * 3 + 2,
        });
        wolfSpawnTimer = 0;
    }

    // תנועת זאבים
    wolves.forEach((wolf, index) => {
        wolf.x -= wolf.speed;
        // הסר זאבים שיצאו מהמסך
        if (wolf.x + 20 < 0) { // 20 הוא רוחב תמונת הזאב
            wolves.splice(index, 1);
        }
    });

    // עדכון מיקום העוקבים
    let targetX = player.x;
    let targetY = player.y;

    // וודא שיש מספיק עוקבים בהתחלה
    if (followers.length === 0) {
        for (let i = 0; i < numFollowers; i++) {
            followers.push({ x: player.x, y: player.y });
        }
    }

    for (let i = 0; i < followers.length; i++) {
        const follower = followers[i];
        const dx = targetX - follower.x;
        const dy = targetY - follower.y;
        const angle = Math.atan2(dy, dx);

        follower.x = targetX - Math.cos(angle) * followerDistance;
        follower.y = targetY - Math.sin(angle) * followerDistance;

        targetX = follower.x;
        targetY = follower.y;
    }

    // בדיקת התנגשות עם זאבים
    wolves.forEach(wolf => {
        // השתמש במימדי התמונה לבדיקת התנגשות
        const playerHalfWidth = player.radius;
        const playerHalfHeight = player.radius; // בהנחה שהתמונה עגולה או מרובעת עם אותו רדיוס
        const wolfHalfWidth = 10; // חצי מרוחב תמונת הזאב (20/2)
        const wolfHalfHeight = 10; // חצי מגובה תמונת הזאב (20/2)

        // חישוב המרחק בין מרכזי האובייקטים
        const dx = (player.x) - (wolf.x + wolfHalfWidth);
        const dy = (player.y) - (wolf.y + wolfHalfHeight);
        const distance = Math.sqrt(dx * dx + dy * dy);

        // אם המרחק קטן מסכום חצאי הרוחב שלהם (בקירוב), יש התנגשות
        if (distance < player.radius + wolfHalfWidth) {
            alert("נתפסת על ידי זאב!");
            location.reload();
        }
    });

    // ניקוי קנבס וציור מחדש
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawWolves();
    drawFollowers();

    requestAnimationFrame(update);
}

// פונקציה למעבר לעמוד הבא
function nextpage() {
    alert("עבר דקה! כל הכבוד!");
    // כאן תוכל להוסיף לוגיקה למעבר לעמוד הבא, לדוגמה:
    // window.location.href = "next_level.html";
}

// מאזיני אירועים לקלט מקלדת
document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

// שימו לב: המשחק יתחיל רק לאחר שכל התמונות נטענו,
// לכן קריאות ל-update() ול-setTimeout() הועברו לפונקציה onImageLoad.