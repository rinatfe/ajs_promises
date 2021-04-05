import read from './read';
import json from './json';
import GameSaving from './GameSaving';
// import { reject, resolve } from "core-js/fn/promise";
export default class GameSavingLoader {
  static load() {
    return read().then((result) => json(result).then((item) => new GameSaving(JSON.parse(item))));
  }
}
