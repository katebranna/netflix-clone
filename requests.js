const API_KEY = "7c4cb64d9286773c19fa57246c55786e";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres99`,
}

export default requests;