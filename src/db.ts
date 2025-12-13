import { Client } from "pg";
//Using test url / connection string
const pgClient = new Client(
  "postgresql://neondb_owner:npg_UoZI0Fbak4DO@ep-polished-art-adi2517i-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
);

// const pgClient = new Client({
//   user: "neondb_owner",
//   password: "npg_UoZI0Fbak4DO",
//   port: 5432,
//   host: "ep-polished-art-adi2517i-pooler.c-2.us-east-1.aws.neon.tech",
//   database: "neondb",
//   ssl: true,
// });

async function main() {
  await pgClient.connect();
  const response = await pgClient.query("SELECT * FROM users;");
  console.log(response);
}

main();
