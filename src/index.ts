interface User {
  name: string,
  age: number
}

interface Manager {
  name: string,
  age: number
  address: string 
}

type UserAndManager = User | Manager;
