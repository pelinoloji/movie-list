import axios from "axios";

// All of your API requests should be in this file
// i.e.
// export const getMovieGenres = async () => {

// };

export const getMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=248dc9b40688a8465ea9fe1b81ae549c";
  const data = await axios.get(url);
  return data;
};

export const getMovieGenres = async () => {
  const url1 =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=248dc9b40688a8465ea9fe1b81ae549c";
  const data1 = await axios.get(url1);
  return data1;
};

// PELIN export const getMovies = async () => {
//   let res = await axios.get(
//     "https://api.themoviedb.org/3/discover/movie?api_key=248dc9b40688a8465ea9fe1b81ae549c"
//   );
//   let { data } = res.data;
//   this.setState({ movies: data });
// };

// PELIN getMovies = () => {
//   const url =
//     "https://api.themoviedb.org/3/discover/movie?api_key=248dc9b40688a8465ea9fe1b81ae549c";
//   axios
//     .get(url)
//     .then(data => this.setState({ movies: this.state.data }))
//     .catch(err => {
//       console.log(err);
//       return null;
//     });
// };
