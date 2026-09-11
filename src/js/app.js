import GameSavingLoader from './game-saving-loader';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  console.error(error);
});
