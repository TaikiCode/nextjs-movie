import axios from "axios";

const BASE_URL = "http://localhost:3000";

// const CATEGORY_DATA = [
//   { id: "1", name: "全て" },
//   { id: "2", name: "ドラマ" },
//   { id: "3", name: "アクション" },
//   { id: "4", name: "アドベンチャー" },
//   { id: "5", name: "ファンタジー" },
// ];

// export const getCategories = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(CATEGORY_DATA);
//       }, 50);
//     });
//   };
  
  
export const getMovies = () => {
  return axios.get(`${BASE_URL}/api/v1/movies`).then((res) => res.data);
};
