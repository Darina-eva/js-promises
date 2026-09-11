import GameSavingLoader from '../game-saving-loader';
import GameSaving from '../game-saving';
import read from '../reader';
import json from '../parser';

const expected = {
  id: 9,
  created: 1546300800,
  userInfo: {
    id: 1,
    name: 'Hitman',
    level: 10,
    points: 2000,
  },
};

test('should read buffer', async () => {
  const buffer = await read();

  expect(buffer).toBeInstanceOf(ArrayBuffer);
});

test('should parse buffer to string', async () => {
  const buffer = await read();
  const data = await json(buffer);

  expect(JSON.parse(data)).toEqual(expected);
});

test('should create game saving from data', () => {
  const saving = GameSaving.from(expected);

  expect(saving).toBeInstanceOf(GameSaving);
  expect(saving).toEqual(expected);
});

test('should load game saving', async () => {
  const saving = await GameSavingLoader.load();

  expect(saving).toBeInstanceOf(GameSaving);
  expect(saving).toEqual(expected);
});
