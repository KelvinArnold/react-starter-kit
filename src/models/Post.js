export default class Post {
  constructor() {
    this._title = '';
    this._categories = '';
    this._content = '';
  }
  get title() { return this._title };
  get categories() { return this._categories };
  get content() { return this._content };
}