import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createConnection(process.env.DATABASE_URL);

db.connect((err) => {
  if (err) console.error("❌ Erreur connexion MySQL :", err);
  else console.log("✅ Connecté à MySQL");
});