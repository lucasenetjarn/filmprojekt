const ratingStars = [...document.getElementsByClassName("rating__star")];

var rating = 0;

function executeRating(stars) {
  const starClassActive = "rating__star fas fa-star";
  const starClassInactive = "rating__star far fa-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) {
          if (i != stars.indexOf(star)) {
            stars[i].className = starClassInactive;
          } else {
            stars[i].className = starClassActive;
          }
        }
      }
      rating = stars.indexOf(star) + 1;
    };
  });
}
executeRating(ratingStars);

function search() {
    
  //Skapar 4 variabler, name som är det man skriver in i form rutan
  //pattern som är det som koden nedan sedan söker efter i texten. targetId och senasteId som får innehåll sen
  var name = document.getElementById("searchForm").elements["searchItem"].value;
  var pattern = name.toLowerCase();
  var targetId = "";
  var senasteId = "";

  //Skapar en variabel som tar ut all text som har klassnamnet text i HTML-filen
  var divs = document.getElementsByClassName("card-title");
  var index;
  //Kollar om ordet som man har sökt finns i divs som innehåller all text
  for (var i = 0; i < divs.length; i++) {
       var para = divs[i].innerText;
       senasteId = divs[i].id;
       index = para.toLowerCase().indexOf(pattern);
       console.log(index);
       if(index != -1)
       break;
    }
     //Om det finns en match så körs det här
     if (index != -1) {
          console.log(index);
          //Skriver ut i konsollen att det finns en match. Lägger innehåll i targetId 
          console.log('Found match');
          targetId = divs[i].parentNode.id;
          console.log(targetId);
          //Skapar en variabel som vet vilket id man ska gå till
          var place = document.getElementById(senasteId);

          //Om ordet man sökt finns i en text och inte titel så ska den fokusera skrollningen på
          //titeln istället för texten 
          if(place.className = "artikel"){
              place = place.parentElement;
          }

          //Allt detta är för att den ska 1. automatiskt skrolla till rätt id och 
          //2. skrolla 64 pixlar mindre för att så hög är navbaren
          pos = place.style.position;
          top = place.style.top;
          place.style.position = 'relative';
          place.style.top = '-64px';
          place.scrollIntoView({behavior: 'smooth', block: 'start'});
          place.style.top = top;
          place.style.position = pos;
           
          
       }
       else if(index== -1){
          window.alert("Finns ej");
          document.getElementById("searchItem").value = "";
          
       }
       
      
}
