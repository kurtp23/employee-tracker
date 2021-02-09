const inquirer = require("inquirer");
function DigitalPal() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.outside = false;
  this.houseCondition = 100;
  this.feed = () => {
    if (this.hungry) {
      console.log("that was yummy!");
      this.hungry = false;
      this.sleepy = true;
    } else if (this.hungry === false) {
      console.log("no thanks im full");
    }
  };
  this.sleep = () => {
    if (this.sleepy) {
      console.log(`zzzzzzzz`);
      this.sleepy = false;
      this.bored = true;
      this.increaseAge();
    }
  };
  this.play = () => {
    if (this.bored) {
      console.log(`yay, lets play!`);
      this.bored = false;
      this.hungry = true;
    } else if (this.bored === false) {
      console.log(`not right now`);
    }
  };
  this.increaseAge = () => {
    this.age += 1;
    console.log(`happy birthday to me! I am ${this.age}`);
  };
  this.bark = () => {
    console.log(`woof!`);
  };
  this.goOutside = () => {
    if (this.outside === false) {
      console.log(`yay`);
      this.outside = true;
    } else if (this.outside) {
      console.log(`we are already outside`);
    }
  };
  this.goInside = () => {
    if (this.outside) {
      console.log(`okay`);
      this.outside = false;
    } else if (this.outside === false) {
      console.log(`im inside already`);
    }
  };
  this.meow = () => {
    console.log(`meow`);
  };
  this.ruinFurniture = () => {
    this.houseCondition = this.houseCondition - 10;
    console.log(`ahhhhhhhh get rekt furniture`);
    this.bored = false;
  };
  this.newFurniture = () => {
    this.houseCondition += 50;
    console.log(`are you sure?`);
  };
}

const dog = new DigitalPal();
// dog.goOutside();
// dog.play();
// dog.feed();
// dog.sleep();
// dog.newFurniture();
// dog.newFurniture();
// dog.newFurniture();
// console.log(dog);

// const cat = new DigitalPal();
// console.log(cat);

const inquirer = require("inquirer");
const questions = [
  {
    type: "list",
    name: "saveInfo",
    message: "Would you like to save this information?",
    choices: [
      "play",
      "feed",
      "go outside",
      "go inside",
      "play",
      "sleep",
      "Ruin Furiniture",
      "Buy Furniture",
    ],
  },
];
function handleAnswers(answers) {
  if (answers.saveInfo === "play") {
    dog.play();
    inquirer.prompt(questions).then(handleAnswers);
  }
  if (answers.saveInfo === "feed") {
    dog.feed();
    inquirer.prompt(questions).then(handleAnswers);
  }
  if (answers.saveInfo === "go outside") {
    dog.goOutside();
    inquirer.prompt(questions).then(handleAnswers);
  }
  if (answers.saveInfo === "go inside") {
    dog.goInside();
    inquirer.prompt(questions).then(handleAnswers);
  }
  if (answers.saveInfo === "sleep") {
    dog.sleep();
    inquirer.prompt(questions).then(handleAnswers);
  }
  if (answers.saveInfo === "Ruin Furniture") {
    dog.ruinFurniture();
    inquirer.prompt(questions).then(handleAnswers);
  }
  if (answers.saveInfo === "Buy Furniture") {
    dog.newFurniture();
    inquirer.prompt(questions).then(handleAnswers);
  }
}
inquirer.prompt(questions).then(handleAnswers);
