import { Person } from "./Person";

// TODO feedback:尽量使用export default 导出class
// eslint-disable-next-line import/prefer-default-export
export class Student extends Person {
  constructor(name, className) {
    super(name);
    this.className = className;
    this.study = this.study.bind(this);
  }

  study() {
    this.move();
    console.log(`${this.name} is studying in ${this.className}`);
  }
}
