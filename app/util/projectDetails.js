export default {
  project1: {
    title: "Tech Tinder app",
    description:
      "This is a personal project to play with react-native. I had lots of different ideas for this but the one that stuck was a swipe game for tech stack.",
    retro:
      "I encounter some weird incompatibility hell, ad-hock issues solved by a lot of trailing through StackOverflow. It was to be expected. It made me so grateful for developing normally with react. I know I'd be back to react-native again but with more of a keen eye for issues up front.",
    software: ["React Native", "Expo"],
    code: "https://github.com/dubhcait/TechTinder",
    url: "https://expo.io/@dubhcait/techtinder",
    img: "https://i.imgur.com/mziz9e1.jpg",
  },
  project2: {
    title: "Esmee Fairbairn Foundation Prototype",
    description:
      "Deciding where funding goes is a huge task. Many organisations apply to EFF, however, in some cases they didn't heed the guidelines. This can be a waste of the applicants resources even more than EFF.  This aim was to simplify the work-load for everyone involved and increase the overall quality of applications.",
    retro:
      "A requirement was to populate Salesforce with the applications. It was very interesting for a DevOps point of view and also in regards testing. The flow we created stored application and synced our database with heroku connect with SalesForce. Other improvements we made were, using the CharityBase API to pre-populate some questions and mading the eligibility criteria more transparent. ",
    software: [
      "React",
      "PostgresSQL",
      "Express",
      "Salesforce",
      "Heroku",
      "Heroku connect",
    ],
    code:
      "https://github.com/dubhcait/Esmee-Fairbairn-Foundation?organization=dubhcait&organization=dubhcait",
    url: "https://esmee-fairbairn-foundation.herokuapp.com/",
    img: "https://i.imgur.com/edRqeaz.png",
  },
  project3: {
    title: "Dish",
    description:
      "A food sharing app to bring people together and reduce food wastage. A FAC student project build.",
    retro:
      "My role was QA. I had to think about maintainability, readability and clean code. It's is not something that just happens, it needs love.  One key aide is agreeing on meaningful naming conventions. Another thing I learned was async testing when we introduced our database, one 'afterAll' script to close the database connection so the tests finished and we were laughing.",
    software: ["PostgreSQL", "Express", "Sass", "Codecov", "Jest.js"],
    code:
      "https://github.com/dubhcait/dish?organization=dubhcait&organization=dubhcait",
    url: "https://community-dish.herokuapp.com/",
    img: "https://i.imgur.com/TSLm7vn.jpg",
  },
  project4: {
    title: "Weather App",
    description:
      "Another Weather App, not as generic as a To Do App but not far off.  I wanted build OpenWeatherMap API as it was mentioned on different articles as a tech challenge. ",
    retro:
      "I decided to give it a shot over a limited time and was very happy with the results. I wanted to use javascript classes. I implemented data tracker class for calculating the stats. I got a good handle on classes as a result. ",
    software: ["React", "OpenWeatherMap API"],
    code: "https://github.com/dubhcait/weather-app",
    url: " https://master--wizardly-wescoff-4ecf4f.netlify.com/",
    img: "https://i.imgur.com/TGL28vT.png",
  },
  project5: {
    title: "LSX - Action Planner App",
    description:
      "A mobile-based app to help users create an action plan, to organise and facilitate change. This was designed with kids in mind as the main group that LSx is engaging with currently are school children.",
    retro:
      "When it comes to scrum we learn to 'Play our own game'.There is no perfect recipe when it comes to agile, figuring out a way that is best for your team and the given situation is the way to go. Don't make the process another job, make it work for you. Use stand-ups, backlogs and Github projects in a way that works for you, not against you.",
    software: ["Express", "Airtable", "ReactJest.js"],
    code: "https://github.com/dubhcait/LSx",
    url: "https://fac16-lsx-action-planner.herokuapp.com/",
    img: "https://i.imgur.com/I63HA3P.jpg",
  },
  project6: {
    title: "XOR with Tensorflow.js",
    description:
      "Machine Learning in the browser you say? I just couldn't resist having a play round with it.  I choose the Exclusive OR problem. So the correct match is the pair true, false or false, true and not true, true or false, false. Something that could be easily done with hard coded logic  but still. ",
    retro:
      "It was really interesting learning about layers, models, tensor flow and thinking about visually representing it. Something I'd like to play around with more after some thought about how it can be useful rather than theoretical.",
    software: ["tensorflow.js", "P5.js"],
    code: "https://github.com/dubhcait/XOR-Tensorflow.js",
    url: "https://dubhcait.github.io/XOR-Tensorflow.js/ ",
    img: "https://i.imgur.com/SEhDqhj.png",
  },
  project7: {
    title: "Nova Foundation App",
    description:
      "At the time of the project, this was a newly established organisation. Nova aims to help families that have experienced baby loss at any stage. In our project, we designed and developed an app with comfort and emotional support in mind. The app functions as a place to keep memories, learn about grief and trauma. We included breathing exercises and ways to track one's mood.",
    retro:
      "Working in a team with two new remote developers made this role more challenging than usual. Communication required a lot of care and attention. Keep the all the development team as well as the product owner (PO) in sync was a challenge. A key element was creating a decision matrix. Our PO took charge of rating them in relation to user value and we rated features in regards to technical difficulty. This made everything very visual and was an excellent reference point for everyone.",
    software: ["React", "Express", "MongoDB", "Cloudinary API", "Jasmine.js"],
    code: "https://github.com/dubhcait/Nova-Foundation",
    url: "https://nova-foundation-app.herokuapp.com/",
    img: "https://i.imgur.com/5PHOL9s.jpg",
  },
  project8: {
    title: "Cli to create Github issues",
    description:
      "I really enjoy being a scrum master in a team of developers but like with all things there is always an aspect that is the bad part. This is where the making of github issues comes in. They are so great when done well but the process of doing that for me is painful.",
    retro:
      "Making a CLI is awesome. There are so many ways and options to build them. I was considering building this in bash or python and in the future maybe I will. The initial idea was, for a CLI to wrap hub cli, so multiple issues can be made from a csv. I decided to make this more independent and to also include a selection of git hub templates.",
    software: ["node.js"],
    code: "https://github.com/dubhcait/cli",
    img: "https://i.imgur.com/z5ejMsI.png",
  },
  project9: {
    title: "",
    description: "",
    retro: "",
    software: "",
    code: "",
    url: "",
    img: "",
  },
};
