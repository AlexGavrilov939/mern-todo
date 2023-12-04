export default class ViolationError extends Error {
  defaultErrorMsg: string;
  status: string;
  fields: { [key: string]: string };
  payload?: { [key: string]: Record<string, any> };

  constructor(
    message: string,
    status: string,
    fields: { [key: string]: string },
    payload?: { [key: string]: Record<string, any> }
  ) {
    super("Submit Validation Failed");
    this.defaultErrorMsg = message;
    this.status = status;
    this.fields = fields;
    this.payload = payload;
  }
}
