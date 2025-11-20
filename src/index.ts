interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "email" | "password">; // pick lets you pick certain values/keys from interface which reduce redandancy(duplication)

type UpdatePropsOptional = Partial<UpdateProps>; // paritial(key?) is a utility which lets you make a key optional or here every key in UpdateProps is optional

function updateUser(props: UpdatePropsOptional) {
  //database call to update the user
}

updateUser({
  email: "jayvaidya30@gmail.com", // here I can use one key of User interface because the other keys are set to partial i.e means I can user only one key if i want to
});

