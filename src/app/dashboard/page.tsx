"use client";
import { useStore } from "@/utils/Store";
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  trendingMovies,
} from "../tmdbResponse";
import { useEffect } from "react";
import { FaPlay } from "react-icons/fa6";
import { IoInformationCircleSharp } from "react-icons/io5";

export default function Dashboard() {
  const userName = useStore((state) => state.userName);
  useEffect(() => {
    console.log(
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upcomingMovies,
      trendingMovies,
      nowPlayingMovies?.results[0]?.id
    );
  }, []);
  // const videourl = `https://api.themoviedb.org/3/movie/${nowPlayingMovies.results[0].id}/videos?language=en-US`;

  // useEffect(() => {
  //   console.log(nowPlayingMovies.results);
  // });
  // const nowPlayingMovieURL =
  //   "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  // const popularMovieURL =
  //   "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  // const topRatedMovieURL =
  //   "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  // const upcomingMovieURL =
  //   "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
  // const trendingMovieURL =
  //   "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

  // For youtube movie - `https://www.youtube.com/watch?v=${movieVideo object where key where type: "Trailer"}`
  // For youtube movie - `https://www.youtube.com/watch?v=rUSdnuOLebE`
  // const options = {
  //   method: "GET",
  //   headers: {
  //     accept: "application/json",
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzI4ZjA0ODcyYmMyYzAwZDkxNzA5OTY3ZDczYWFkNSIsIm5iZiI6MTczMjIzMzg1NS4wMDEsInN1YiI6IjY3M2ZjYTdlYWUxMmJhZmZmNTc1NGE1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d34O2BpngmuqFy_QSMxOmVOFp4JkcPxJBpFZQy7Tmmg",
  //   },
  // };

  // useEffect(() => {
  //   const fetchVideo = async () => {
  //     try {
  //       const response = await fetch(videourl, options);
  //       const json = await response.json();
  //       console.log(JSON.stringify(json));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchVideo();
  // }, []);
  // useEffect(() => {
  //   const fetchTMDB_MoviesResponse = async () => {
  //     try {
  //       const nowPlayingResponse = await fetch(nowPlayingMovieURL, options);
  //       const popularResponse = await fetch(popularMovieURL, options);
  //       const topRatedResponse = await fetch(topRatedMovieURL, options);
  //       const upcomingResponse = await fetch(upcomingMovieURL, options);
  //       const trendingResponse = await fetch(trendingMovieURL, options);

  //       const nowPlayingjson = await nowPlayingResponse.json();
  //       const popularjson = await popularResponse.json();
  //       const topRatedjson = await topRatedResponse.json();
  //       const upcomingjson = await upcomingResponse.json();
  //       const trendingjson = await trendingResponse.json();

  //       console.log(`nowPlaying : ${JSON.stringify(nowPlayingjson)}`);
  //       console.log(`popular : ${JSON.stringify(popularjson)}`);
  //       console.log(`topRated : ${JSON.stringify(topRatedjson)}`);
  //       console.log(`upcoming : ${JSON.stringify(upcomingjson)}`);
  //       console.log(`trending : ${JSON.stringify(trendingjson)}`);
  //     } catch (error) {
  //       console.error("Error fetching TMDB movies : " + error);
  //     }
  //   };
  //   fetchTMDB_MoviesResponse();
  // }, []);

  // Netflix

  // Search Icon - Search Text
  // Home Icon - Home Text
  // Trending Icon - Trending Text
  // Movies Icon - Movies Text
  // Shows Icon - Shows Text

  // Arrow Right Icon - Make like youtube???

  // TMDB

  // Movie Lists
  // Now Playing - Get a list of movies that are currently in theatres.
  // Popular - Get a list of movies ordered by popularity.
  // Top Rated - Get a list of movies ordered by rating.
  // Upcoming - Get a list of movies that are being released soon.

  // Movies
  // Similar - Get the similar movies based on genres and keywords.

  // Trending
  // All - Movies - TV

  // TV Series Lists
  // Airing Today - Get a list of TV shows airing today.
  // On The Air - Get a list of TV shows that air in the next 7 days.
  // Popular - Get a list of TV shows ordered by popularity.
  // Top Rated - Get a list of TV shows ordered by rating.

  // TV Series
  // Similar - Get the similar TV shows.

  return (
    <div className="mx-2 px-2">
      <div className="w-full aspect-video absolute top-0 left-0 -z-10">
        <iframe
          className="w-full h-full @apply shadow-[0px_10px_15px_black_inset,0px_-10px_15px_black_inset] grayscale-25 contrast-125 brightness-90"
          src="https://www.youtube.com/embed/rUSdnuOLebE?autoplay=1&mute=1&modestbranding=1&showinfo=0&controls=0&rel=0&fs=0&loop=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="flex flex-col justify-center text-white w-5/12 pt-80 px-8">
        <h1 className="text-6xl font-bold">
          {nowPlayingMovies?.results[0]?.title}
        </h1>
        <p className="text-lg py-2 my-2">
          {nowPlayingMovies?.results[0]?.overview}
        </p>
        <div className="flex flex-row justify-start text-lg">
          <button className="bg-netflixRed text-white p-3 px-4 rounded-md font-semibold flex justify-center items-center mr-4">
            <FaPlay />
            &nbsp;Play
          </button>
          <button className="bg-white text-black p-3 px-4 rounded-md font-semibold flex justify-center items-center ml-4">
            <IoInformationCircleSharp />
            &nbsp;More Information
          </button>
        </div>
      </div>
      <h1>Dashboard</h1>
      <br />
      <h1>Welcome {userName || "Guest"} !</h1>
    </div>
  );
}
