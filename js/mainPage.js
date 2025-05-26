//הקוד שדואג שהכתרים יזוזו באקראיות
window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("crown-container");
    const crowns = document.querySelectorAll(".crowns");
    const crownSize = 75;
    const placed = [];
  
    function isOverlapping(x, y) {
      return placed.some(pos => {
        return (
          x < pos.x + crownSize &&
          x + crownSize > pos.x &&
          y < pos.y + crownSize &&
          y + crownSize > pos.y
        );
      });
    }
  
    crowns.forEach(crown => {
      let x, y, tries = 0;
      do {
        x = Math.floor(Math.random() * (container.clientWidth - crownSize));
        y = Math.floor(Math.random() * (container.clientHeight - crownSize));
        tries++;
        if (tries > 1000) break;
      } while (isOverlapping(x, y));
  
      placed.push({ x, y });
      crown.style.left = `${x}px`;
      crown.style.top = `${y}px`;
    });
  });

  //הקוד שאחראי להקפצת השאלות אחרי שלוחצים על הכתרים
  function picture(){
    document.getElementById('picture-question').style.display = 'block';
  }

  function rose(){
    document.getElementById('rose-question').style.display = 'block';
  }

  function ice(){
    document.getElementById('ice-question').style.display = 'block';
  }

  function necklace(){
    document.getElementById('necklace-question').style.display = 'block';
  }

  function castle(){
    document.getElementById('castle-question').style.display = 'block';
  }

  function earrings(){
    document.getElementById('earrings-question').style.display = 'block';
  }

  //הקוד שאחראי לבדוק את התשובות לשאלותם
  function picture_check(){
    const picture_checking = document.getElementById('picture_answer').value
    document.getElementById('picture-question').style.display = 'none';
  }

  function rose_check(){
    document.getElementById('rose-question').style.display = 'none';
  }

  function ice_check(){
    document.getElementById('ice-question').style.display = 'none';
  }

  function necklace_check(){
    document.getElementById('necklace-question').style.display = 'none';
  }

  function castle_check(){
    document.getElementById('castle-question').style.display = 'none';
  }

  function earrings_check(){
    document.getElementById('earrings-question').style.display = 'none';
  }

  



  
