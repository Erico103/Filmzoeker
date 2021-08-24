let movieCard = document.querySelector(".movie-card");

let radioButtons = document.querySelectorAll("input");
// get URL
const imdbURL = (id) => {
  return "http://www.imdb.com/title/" + id;
};


function showMovies() {
  movies.forEach(movie => {
    const list = document.createElement("div");
    list.classList.add("movie");

    const image = document.createElement("img");
    image.classList.add("poster");
    const title = document.createElement("p");

    title.textContent = movie.Title;
    image.src = movie.Poster ;

    
    list.appendChild(image);
    list.appendChild(title);
    movieCard.appendChild(list);
  });
}

showMovies();

function showRadioButtons() {
  radioButtons.forEach(radioBtn => {
    radioBtn.addEventListener("change", () => {
      showMovieChoice(event)
     
    });
  });
}

showRadioButtons();

const showMovieChoice = event => {
  switch (event.target.value) {
    case "batman":
      showMovies(filterMovies('Batman'))
      
      console.log("ik ben batman");
      break;
    case "avengers":
      filterMovies('Avengers')
     
      console.log("ík ben een Avenger");
      break
    case "x-men":
      filterMovies('X-Men')
      
      console.log("ik ben een x man");
      break
    case "princess":
      filterMovies('Princess')
      
      console.log("ik ben een princess");
      break
    case "newreleases":
      filterLatestMovies()

      console.log('ik ben willekeurig')
      break
  }
};

const filterMovies = (wordInMovieTitle) => {
  const result = movies.filter((item) => {
    return item.Title.includes(wordInMovieTitle);
  });
  showMovies(result);
  console.log(result)
};
    
// filterLatestMovies
const filterLatestMovies = () => {
  const result = movies.filter((movie) => {
    return parseInt(movie.Year) >= 2014;
  });
  showMovies(result);
  console.log(result)
};

