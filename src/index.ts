//records and maps

//Record make syntax more clearer

type Users = Record<string, { age: number; name: string }>;

const users = {
  jay: { age: 19, name: "jay" },
  test: { age: 100, name: "test" },
};

//Maps
type AdminType = {
  age: number;
  name: string;
}

const admins = new Map<string, AdminType>(); // enforcing a type to Map

admins.set("jay", { age: 19, name: "jay" });

const admin = admins.get("jay");
admins.delete("jay")

//maps is also one of the way to store key value pairs