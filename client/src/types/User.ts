export class User {
  public "@id"?: string;

  constructor(
    _id?: string,
    public id?: string,
    public firstName?: string,
    public lastName?: string,
    public email?: string
  ) {
    this["@id"] = _id;
  }
}
