interface People {
  name: string;
  age: number;
  //greet: () => string;
}

class Manager implements People {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let user = new Manager("John", 30);
console.log(user.name);