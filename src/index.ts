//readonly

type User = {
  name: string;
  age: number;
  readonly email: string
};

const user: User = { // Readonly<User> i.e makes whole object readonly
  name: "jay",        
  age: 21,
  email: "jay@gmail.com"
};

user.age = 13; // here it is allowing me to change the value of internal
user.email = "test@gmail.com"; // here Typescript shows an error cause the email key is readonly and cannot be changed
