class Queue {

  /// Private 
  #body = [];

  /// Public
  get Head() {
    return this.#body[0];
  }

  get Tail() {
    if(this.#body.length)
      return this.#body[this.#body.length - 1];
    return null;
  }
  
  get empty() {
    return (this.#body.length === 0)
  }
  
  push(element) {
    this.#body.push(element);
  }

  pop() {
    if(this.#body.length) return this.#body.shift();
  }

}

export default Queue;
