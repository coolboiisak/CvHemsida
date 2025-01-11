
document.getElementById('hamburger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
  });
  
  // Funktion för att visa eller dölja information om en kurs
function visaInfo(kursId) {
  const infoElement = document.getElementById(kursId);

  if (infoElement.style.display === "none" || infoElement.style.display === "") {
      // Visa kursinfo
      infoElement.style.display = "block";
  } else {
      // Dölj kursinfo
      infoElement.style.display = "none";
  }
}


