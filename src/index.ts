// Array in TS

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function isLegal(users: User[]) {
  return users.filter(user => user.age > 18);
}

const filterUser = isLegal([
  {
    firstName: "jay",
    lastName: "vaidya",
    age: 19,
  },
  {
    firstName: "sam",
    lastName: "vaidya",
    age: 20,
  },
  {
    firstName: "Hari",
    lastName: "vaidya",
    age: 17,
  }
]);

console.log(filterUser);
