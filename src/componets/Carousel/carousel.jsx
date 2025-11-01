import React, { useRef } from "react";
import styles from "./carousel.module.css";
import { movies } from "../../data/movies";
import Card from "../Card/Card";

const Carousel = () => {
  const carruselRef = useRef(null);

  const scrollLeft = () => {
    carruselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carruselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.titulo}>Destacados</h2>
      <div className={styles.nav}>
        <button onClick={scrollLeft} className={styles.flecha}>
          ‹
        </button>
        <div className={styles.carrusel} ref={carruselRef}>
          {movies.map((movie) => (
            <Card
              key={movie.id}
              image={movie.image}
              title={movie.title}
              description={movie.description}
            />
          ))}
        </div>
        <button onClick={scrollRight} className={styles.flecha}>
          ›
        </button>
      </div>
    </div>
  );
};

export default Carousel;
