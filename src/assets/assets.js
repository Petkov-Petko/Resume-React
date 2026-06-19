import franchelli from './Franchelli.png';
import quizApp from './quizApp.png';
import weatherApp from './weatherApp.png';
import imageSearch from './imageSearch.png';
import calculator from './Calculator.png';
import reactHub from './ReactHub.png';
import calendra from './calendra.png';
import estato from './canvaestate.png'
import profilePhoto from './profile.webp'
import flirty from './flirty.png'
import nightlife from "./nightlife.webp";

export const assets = {
  profilePhoto,
};

// Returns a dynamic "Built X ago" string based on the project's build date.
export const buildAgo = (dateStr) => {
  const then = new Date(dateStr);
  const now = new Date();

  let months =
    (now.getFullYear() - then.getFullYear()) * 12 +
    (now.getMonth() - then.getMonth());
  // Subtract a month if we haven't reached the build day-of-month yet.
  if (now.getDate() < then.getDate()) months--;
  if (months < 0) months = 0;

  if (months === 0) return "Built less than a month ago";

  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  const parts = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (remMonths > 0)
    parts.push(`${remMonths} month${remMonths > 1 ? "s" : ""}`);

  return `Built ${parts.join(" and ")} ago`;
};

export const projects = [
  {
    title: "Nightlife",
    description:
      "NightLife is a modern event platform built with Next.js and Supabase, allowing users to discover events, connect with others, and share unforgettable nightlife experiences through a fast, secure, and responsive interface.",
    img: nightlife,
    url: `https://nightlife-platform-five.vercel.app/`,
    date: "2026-05-19",
  },
  {
    title: "Flirty",
    description:
      "Flirty is a modern dating app built with TypeScript, Firebase, and React, offering a fully responsive experience for mobile users. Easily slide through profiles, match, and chat in a fast, secure, and seamless environment.",
    img: flirty,
    url: `https://datingapp-8e4ad.web.app`,
    github: `https://github.com/Petkov-Petko/Dating`,
    date: "2024-09-13",
  },
  {
    title: "Calendra",
    description:
      "An Event Calendar Website using React and Firebase for efficient, scalable event management with a clear, intuitive, and fully responsive interface.",
    img: calendra,
    url: `https://event-calendar-c74a9.web.app/`,
    github: `https://github.com/React-Duo/Event-Calendar`,
    date: "2024-06-12",
  },
  {
    title: "ReactHub",
    description:
      "This is a forum website built with React and Firebase database.",
    img: reactHub,
    url: `https://reactduo-forumproject.web.app/`,
    github: `https://github.com/React-Duo/Forum-Project`,
    date: "2024-05-13",
  },
  {
    title: "Estato",
    description:
      "Real estate platform using React, TypeScript, and Firebase for renting and buying properties. Currently under development.",
    img: estato,
    url: `https://realestate-dcdcb.web.app`,
    github: `https://github.com/Petkov-Petko/RealEstate`,
    date: "2024-08-06",
  },
  {
    title: "Franchelli",
    description:
      "React-based food website.Current version focuses on the front end, future updates will include backend functionality",
    img: franchelli,
    url: `https://petkov-petko.github.io/Franchelli/`,
    github: `https://github.com/Petkov-Petko/Franchelli`,
    date: "2024-04-24",
  },
  {
    title: "Quiz App",
    description: "Quiz App. Learn everything for your Front End interview",
    img: quizApp,
    url: `https://petkov-petko.github.io/quizApp2/`,
    github: `https://github.com/Petkov-Petko/quizApp2`,
    date: "2024-04-20",
  },
  {
    title: "Weather App",
    description:
      "This is a simple weather app that retrieves weather data from the OpenWeather API based on user input.",
    img: weatherApp,
    url: `https://petkov-petko.github.io/Weather-conditions/`,
    github: `https://github.com/Petkov-Petko/Weather-conditions`,
    date: "2024-04-01",
  },
  {
    title: "Image Search",
    description: "Simple photo searcher using Unsplash API.",
    img: imageSearch,
    url: `https://petkov-petko.github.io/Image-Search/`,
    github: `https://github.com/Petkov-Petko/Image-Search`,
    date: "2024-03-31",
  },
  {
    title: "Calculator",
    description: "Web Calculator",
    img: calculator,
    url: `https://petkov-petko.github.io/Calculator/`,
    github: `https://github.com/Petkov-Petko/Calculator`,
    date: "2023-10-01",
  },
];