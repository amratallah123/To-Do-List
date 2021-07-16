class Element {
  static count;
  constructor() {
    this.id = Element.count;
    Element.count++;
  }
}
