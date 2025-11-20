interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "age" | "password">;

function displayProfile(props: UpdateProps) {
  console.log(`Name: ${props.name} and Age: ${props.age}`);
}
