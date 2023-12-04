export default class ContextError extends Error {
  description: string;
  title: string;

  constructor(title: string, description: string) {
    super(description);
    this.title = title;
    this.description = description;
  }
}
