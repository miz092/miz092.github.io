//import pictures
import moviePic from "../assets/movie.png";
import landingpage from "../assets/Tasktiger.png";
import uml from "../assets/src.png";

export const ProjectList = [
  {
    name: "'Movie picker' app",
    image: moviePic,
    description:
      "The movie picker application is a web-based tool built with JavaScript, React, and CSS, that utilizes the IMDB API to allow users to search for movies. It features a user-friendly interface with search and filter options based on movie release date, IMDB rating, number of ratings, and genre. This makes it easy for users to find movies based on their specific requirements. Additionally, when a user clicks on a movie card, the app displays movie details, including cast and similar movies.",
    skills: "React, JS, CSS, API",
  },
  {
    name: "Business landing page",
    image: landingpage,
    description:
      "A simple, responisve landing page for a business where we can acquire basic information about the companies function, contact information and vision. This is a one page app with links on top to scroll smoothly to the desired content.",
    skills: "React, CSS",
  },
  {
    name: "Backend for handyman finder app",
    image: uml,
    skills: "Spring, JPA",
  },
];
