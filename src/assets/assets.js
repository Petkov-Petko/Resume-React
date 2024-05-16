import profilePhoto from './IMG_3688.jpg';
import franchelli from './Franchelli.png';
import quizApp from './quizApp.png';
import weatherApp from './weatherApp.png';
import imageSearch from './imageSearch.png';
import calculator from './Calculator.png';
import reactHub from './ReactHub.png';

export const assets = {
    profilePhoto,
  };
  
export const projects = [
  {
    title: 'ReactHub',
    description: 'This is a forum website built with React and Firebase database.',
    img: reactHub,
    url: `https://reactduo-forumproject.web.app/`,
    github: `https://github.com/React-Duo/Forum-Project`
  },
    {
      title: 'Franchelli',
      description: 'React-based food website.Current version focuses on the front end, future updates will include backend functionality',
      img: franchelli,
      url: `https://petkov-petko.github.io/Franchelli/`,
      github: `https://github.com/Petkov-Petko/Franchelli`
    },
    {
      title: 'Quiz App',
      description: 'Quiz App. Learn everything for your Front End interview',
      img: quizApp,
      url: `https://petkov-petko.github.io/quizApp2/`,
      github: `https://github.com/Petkov-Petko/quizApp2`
    },
    {
      title: 'Weather App',
      description: 'This is a simple weather app that retrieves weather data from the OpenWeather API based on user input.',
      img: weatherApp,
      url: `https://petkov-petko.github.io/Weather-conditions/`,
      github: `https://github.com/Petkov-Petko/Weather-conditions`
    },
    {
      title: 'Image Search',
      description: 'Simple photo searcher using Unsplash API.',
      img: imageSearch,
      url: `https://petkov-petko.github.io/Image-Search/`,
      github: `https://github.com/Petkov-Petko/Image-Search`
    },
    {
      title: 'Calculator',
      description: 'Web Calculator',
      img: calculator,
      url: `https://petkov-petko.github.io/Calculator/`,
      github: `https://github.com/Petkov-Petko/Calculator`
    },
   
]