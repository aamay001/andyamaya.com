import imNextLogo from '../assets/imnextlogo.png';
import tellMeOnDateLogo from '../assets/tellmeondatelogo.png';
import resumeJsLogo from '../assets/resumejslogo.png';
import citiDashBoardLogo from '../assets/citidashboardlogo.png';
import portfolioLogo from '../assets/portfolioicon.png';
import spoidsLogo from '../assets/spoidsLogo.png';

export default {
  landing: {
    title:'\'Andy Amaya\';',
    phrase: 'Full Stack JavaScript Developer',
    menuOptions: [
      'about',
      'projects',
      'other',
      'contact'
    ]
  },
  about: {
    firstName: 'Andy',
    middleName: 'Steve',
    lastName: 'Amaya',
    birthDate: '05/02/1988',
    location: 'Greater Los Angeles',
    brief: `Hi, I'm Andy! Thanks for stopping by my portfolio page! A bit about me: I've been working in I.T. for over
    8 years. I was previously a Database Analyst and decided that it was time to pursue my dream of becoming
    a software developer. To gain the knowledge I needed to fulfill this dream, I recently graduated from Thinkful,
    an online coding boot camp where I spent about 6 months sharpening my JavaScript and web development skills.
    Software and technology are what I do as a professional; personally, you will likely find me at home playing
    my Nintendo Switch or just hanging out on the couch with my two dogs and my wife. I also enjoy traveling and
    occasionally playing my trumpet (I'm what they call a natural; I'll prove it!). Anyhow, I hope you're enjoying
    my portfolio; it's a bit more creative than my other work.`
  },
  contact : {
    message: 'Thanks again for checking out my portfolio! Here\'s how you can get in touch with me.',
    email: 'contact@andyamaya.com',
    linkedIn: 'https://linkedin.com/in/andyamaya',
    gitHub: 'https://github.com/aamay001',
    twitter: 'https://twitter.com/aamay001',
    instagram: 'https://instagram.com/aamay001'
  },
  other: {
    varName: 'spoids',
    image: spoidsLogo,
    imageAlt: 'Spoids video game logo.',
    message: `'Spoids is a cool project that I worked on several years ago. It's a tower defense game that takes place in space.
    This project took about 2 years to complete with just two team members; myself included. Each of us wore several
    hats for this project but my main hat was the tools development hat. I designed and developed a handful of tools
    to manage our assets and game content. Check it out and see if you can defeat the Spoids!'`,
    type: `'Video Game'`,
    otherString1VarName: 'platform',
    otherString1: `['Xbox 360', 'PC']`,
    website: 'http://spoidsgame.com',
    otherString2VarName: 'get',
    otherString2: 'https://goo.gl/EQ3DzF'
  },
  projects: [
    {
      name: 'imNext.online',
      scope: 'Full Stack',
      stack: 'MongoDB, Express, React + Redux, Node',
      devOps: 'Travis CI, GitHub, Netlify, Heroku, Mocha, Chai, Jest, Babel',
      description: 'imNext is an appointment scheduling system. It features an automated availability generator, self-service appointment scheduling, two-step human validation for appointments and registration, and a mobile centric minimal design focused on functionality.',
      apis: 'Twilio SMS, Google reCAPTCHA2',
      image: imNextLogo,
      imageAlt: `The imNext logo.`,
      livePage: 'https://imNext.online',
      serverRepo: 'https://git.io/vF1Dn',
      clientRepo: 'https://git.io/vF1DC',
    },
    {
      name: 'resumeJS',
      scope: 'Front End',
      stack: 'React + Redux',
      devOps: 'Travis CI, GitHub, Netlify, Jest, Enzyme',
      description: 'resumeJS is a client side application that helps users create their resume using JavaScript and JSON. It features a simplistic layout to make creating a resume much easier. The resume can be reordered and customized with different fonts.',
      apis: 'Local Storage',
      image: resumeJsLogo,
      imageAlt: `The resumeJS logo.`,
      livePage: 'https://resumejs.netlify.com/',
      projectRepo: 'https://git.io/vF1D8',
    },
    {
      name: 'TellMeonDate',
      scope: 'Full Stack',
      stack: 'MongoDB, Express, jQuery, Node',
      devOps: 'Travis CI, GitHub, Heroku, Mocha, Chai',
      description: 'TellMeonDate is a reminder application. User\'s can register for an account and create reminders. The user will receive a text message with the reminder text at the time to be reminded.',
      apis: 'Twilio SMS, Google reCAPTCHA2',
      image: tellMeOnDateLogo,
      imageAlt: `The TellMeonDate logo.`,
      livePage: 'http://tellmeon.date',
      projectRepo: 'https://git.io/vF1DB',
    },
    {
      name: 'City Dashboard',
      scope: 'Front End',
      stack: 'HTML, JavaScript, CSS, jQuery',
      devOps: 'GitHub, GitHub Pages',
      description: 'City Dashboard is an informational page that allows users discover points of interest for any city in the world. With the use of several API\'s, the application quickly presents the user with a great selection of information and displays it using a beautiful Material design.',
      apis: 'Local Storage, Geolocation, AccuWeather, FourSquare, Google Maps, Google Places, Materialize, Unsplash',
      image: citiDashBoardLogo,
      imageAlt: `The City Dashboard logo.`,
      livePage: 'https://aamay001.github.io/city-dashboard/',
      projectRepo: 'https://git.io/vF1DR',
    },
    {
      name: 'JavaScript Portfolio',
      scope: 'Front End',
      stack: 'React + Redux',
      devOps: 'GitHub, Netlify, Netlify CI',
      description: 'This entry is for the website you are currently on. This was a small project to create a portlofio. I decided to use React & Redux to develop this portfolio and created it with a profile object that can easily be replaced to make it your own.',
      apis: 'History, Typed.js',
      image: portfolioLogo,
      imageAlt: `The City Dashboard logo.`,
      livePage: 'https://andyamaya.com',
      projectRepo: 'https://git.io/vF1ST',
    }
  ],
  footer: {
    linkedIn: 'https://linkedin.com/in/andyamaya',
    gitHub: 'https://github.com/aamay001/andyamaya.com'
  }
}