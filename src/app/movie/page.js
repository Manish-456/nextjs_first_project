import React from "react";
import MovieCard from "../components/MovieCard";
import styles from '@/app/styles/common.module.css'
const page = async () => {
  const url = process.env.API_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "27ce0f111amsh3661104c6773b5bp1826bajsn07826971a3d7",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
        <h1>Series & Movie</h1>
        <div className={styles.card_section}>

      {main_data.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
        ))}
        </div>
        </div>
      </section>
    </>
  );
};

export default page;
