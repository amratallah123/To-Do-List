class List {
  static count = 0;

  constructor() {
    this.id = List.count;
    this.counter = 0;

    List.count++;
  }

  setTask(task) {}
  getTask(index) {
    return this.tasks[0];
  }
  setState(state) {
    this.state = state;
  }
  getState() {
    return this.state;
  }
}
