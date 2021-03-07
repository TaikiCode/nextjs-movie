import { useState } from "react";
import { getMovies, getCategories } from "../lib";
import Carousel from "../components/Carousel";
import MovieList from "../components/MovieList";
import SideMenu from "../components/SideMenu";

export default function Home({ movies, images }) {
  const [filter, setFilter] = useState("全て");
  const [categories, setCategories] = useState([
    "全て",
    "ドラマ",
    "アクション",
    "アドベンチャー",
    "ファンタジー",
  ]);

  // カテゴリー選択
  const changeCategory = (category) => {
    setFilter(category);
  };

  // 選択したカテゴリーの映画だけ表示
  const filterMovies = (movies) => {
    if (filter === "全て") {
      return movies;
    }
    return movies.filter((movie) => {
      return movie.genre && movie.genre.includes(filter);
    });
  };

  return (
    <div>
      <div className="container ">
        <Carousel images={images} />
        <div className="row">
          <div className="col-lg-3">
            <SideMenu
              filter={filter}
              categories={categories}
              changeCategory={changeCategory}
            />
          </div>
          <div className="col-lg-9">
            <div className="row">
              <MovieList movies={filterMovies(movies)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const movies = await getMovies();
  // const categories = await getCategories();
  const images = movies.map((movie) => ({
    id: `image-${movie.id}`,
    url: movie.cover,
    name: movie.name,
  }));
  return {
    props: { movies, images },
  };
}
