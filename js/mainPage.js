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
    if (picture_checking == "picture" || picture_checking == "Picture" || picture_checking == "PICTURE"){
      alert("Correct!")
      document.getElementById('picture-question').style.display = 'none';
      document.getElementById('crown1').style.boxShadow = "0 10px 25px white";
      document.getElementById('picture_img').style.display = 'block';
    }
    else{
      alert ("False, try again!")
    }
  }

  function rose_check(){
    const rose_checking = document.getElementById('rose_answer').value
    if (rose_checking == "rose" || rose_checking == "Rose" || rose_checking == "ROSE"){
      alert("Correct!")
      document.getElementById('rose-question').style.display = 'none';
      document.getElementById('crown2').style.boxShadow = "0 10px 25px white";
      document.getElementById('rose_img').style.display = 'block';
    }
    else{
      alert ("False, try again!")
    }
  }

  function ice_check(){
    const ice_checking = document.getElementById('ice_answer').value
    if (ice_checking == "ice" || ice_checking == "Ice" || ice_checking == "ICE"){
      alert("Correct!")
      document.getElementById('ice-question').style.display = 'none';
      document.getElementById('crown3').style.boxShadow = "0 10px 25px white";
      document.getElementById('ice_img').style.display = 'block';
    }
    else{
      alert ("False, try again!")
    }
  }

  function necklace_check(){
    const necklace_checking = document.getElementById('necklace_answer').value
    if (necklace_checking == "necklace" || necklace_checking == "Necklace" || necklace_checking == "NECKLACE"){
      alert("Correct!")
      document.getElementById('necklace-question').style.display = 'none';
      document.getElementById('crown4').style.boxShadow = "0 10px 25px white";
      document.getElementById('necklace_img').style.display = 'block';
    }
    else{
      alert ("False, try again!")
    }
  }

  function castle_check(){
    const castle_checking = document.getElementById('castle_answer').value
    if (castle_checking == "castle" || castle_checking == "Castle" || castle_checking == "CASTLE"){
      alert("Correct!")
      document.getElementById('castle-question').style.display = 'none';
      document.getElementById('crown5').style.boxShadow = "0 10px 25px white";
      document.getElementById('castle_img').style.display = 'block';
    }
    else{
      alert ("False, try again!")
    }
  }

  function earrings_check(){
    const earrings_checking = document.getElementById('earrings_answer').value
    if (earrings_checking == "earrings" || earrings_checking == "Earrings" || earrings_checking == "EARRINGS"){
      alert("Correct!")
      document.getElementById('earrings-question').style.display = 'none';
      document.getElementById('crown6').style.boxShadow = "0 10px 25px white";
      document.getElementById('earrings_img').style.display = 'block';
    }
    else{
      alert ("False, try again!")
    }
  }

function final(){
  document.getElementById('final-question').style.display = 'block';

}

  function final_answer_check(){
    const final_checking = document.getElementById('final-answer').value
    if (final_checking == "Prince" || final_checking == "prince" || final_checking == "prince"){
      alert("WELL DONE, You found who the crown belongs to! 👑")
      document.getElementById('final-question').style.display = 'none';
    }
    else{
      alert ("False, try again!")
    }
  }



  
