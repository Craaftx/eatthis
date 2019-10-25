import reviewplaceholder from "../reviewplaceholder.jpg"

export default class Review {
  constructor(data) {
    this._id = data.id;
    this._name = data.name;
    this._imageUrl = data.imageUrl ? data.imageUrl : reviewplaceholder;
    this._rating = data.rating;
    this._text = data.text;
    this._timeCreated = data.timeCreated;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get imageUrl() {
    return this._imageUrl;
  }

  get rating() {
    return this._rating;
  }

  get text() {
    return this._text;
  }

  get timeCreated() {
    return this._timeCreated;
  }
}
