export default class Validator {
  constructor(name) {
    this.username = name;
  }

  validateUsername() {
    const positive = /^[a-zA-Z\d\-\_]+$/.test(this.username);
    const negative = /(\d{4,})|([\d\-\_]$)|(^[\d\-\_])/.test(this.username);
    return positive && !negative;
  }
}
