class Err extends Error {
  constructor(message, status) {
    super();

    this.message = message;
    this.status = status;
  }
}

export default Err;
