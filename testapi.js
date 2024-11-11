async function fetchMovies() {
    try {
      const response = await fetch('http://www.omdbapi.com/?s=matrix&apikey=88f5d95f');
      const data = await response.json();
  
      if (data && data.Search) {
        console.log("Movie ID and Title:");
        data.Search.forEach(movie => {
          console.log(`ID: ${movie.imdbID}, Title: ${movie.Title}`);
        });
      } else {
        console.log("No movies found.");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
  
  fetchMovies();
  