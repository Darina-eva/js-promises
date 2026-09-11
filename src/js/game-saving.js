export default class GameSaving {
  constructor(id, created, userInfo) {
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }

  static from(data) {
    return new GameSaving(data.id, data.created, data.userInfo);
  }
}
