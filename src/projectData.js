let seekrImage = require('./Components/images/seekr-vector.png')
let pupquizImage = require('./Components/images/pupquiz-vector.png')
let juiceryImage = require('./Components/images/juicery-vector.png')
let vacayImage = require('./Components/images/travel-app-vector.png')

const data = {
  'seekr': {
    id: 'seekr',
    projectImage: seekrImage,
    projectTitle: 'seekr',
    projectDescription: 'A PWA that allows candidates and recruiters to connect',
    tech: ['JavaScript', 'React', 'Redux', 'Node', 'Express', 'PostgreSQL'],
    projectLink: "https://seekr-job-app.herokuapp.com/",
    youtubeLink: "https://www.youtube.com/watch?v=ByWsbggwCiM&list=PLx0iOsdUOUml9uxVlTFGdM_l9MC2GqwBA&index=7",
    githubLink: "https://github.com/mackenziekroon/job-app",
    addInfoHeading: 'This app was designed mobile first',
    addInfoContent: 'For optimal user experience, please view on a mobile device'
  },
  'Pup Quiz': {
    id: 'pupquiz',
    projectImage: pupquizImage,
    projectTitle: 'Pup Quiz',
    projectDescription: `A mobile app that tests users' knowledge of dog breeds`,
    tech: ['React Native', 'JavaScript', 'Node', 'Express', 'PostgreSQL'],
    githubLink: 'https://github.com/mackenziekroon/stackathon_project'
  },
  'Fruitify Juicery': {
    id: 'juicery',
    projectImage: juiceryImage,
    projectTitle: 'Fruitify Juicery',
    projectDescription: 'A mock e-commerce web application that sells juices',
    tech: ['JavaScript', 'React', 'Redux', 'Node', 'Express', 'PostgreSQL'],
    projectLink: 'https://graceshopper-juicify.herokuapp.com/',
    githubLink: 'https://github.com/grace-shopper-fruit-for-loops/graceshopper'
  },
  'Vacay': {
    id: 'vacay',
    projectImage: vacayImage,
    projectTitle: 'Vacay',
    projectDescription: 'A website that helps you choose your next travel destination',
    tech: ['JavaScript', 'HTML', 'CSS'],
    projectLink: 'https://mackenziekroon.github.io/travel-app/',
    githubLink: 'https://github.com/mackenziekroon/travel-app',
  }
}

export default  data
