// the place where the DB connect to the app
import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  // console.log("try!!!!!!!!!!! dbg")
  conn = await client.connect();
  // console.log("after try!!!!!!!!!!! dbg")

} catch(e) {
  // console.log("inside!!!! dbg")
  console.error(e);
  // console.log("after!!!! dbg")

}

let db = conn.db("PotteryApp");
// console.log("Conected to: " + conn.db.name)
export default db;