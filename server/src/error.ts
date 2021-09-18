export class MyDatabaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MyDatabaseError";
  }
}
