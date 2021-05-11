class Err extends Error {
  constructor(message, status) {
    super();

    this.message = message;
    this.status = status;
    this.operational = true;
  }
}

export default Err;
