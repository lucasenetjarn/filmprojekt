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