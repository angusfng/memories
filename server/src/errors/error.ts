export class PgError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PgError";
  }
}
