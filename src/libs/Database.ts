// import { error } from "console";
// import dotenv from "dotenv";
// import { Pool } from "pg";

// dotenv.config({ path: "../.env" });

// class Database {
//   private pool: Pool;

//   constructor() {
//     this.pool = new Pool({
//       connectionString: process.env.DATABASE_URL,
//     });

//     this.connect();
//   }

//   private connect(): void {
//     this.pool.connect((err, client, release) => {
//       if (err) {
//         console.error("Erreur de connexion à la base de données", err.stack);
//       } else {
//         console.log("connecté à la base de données");
//         client?.release();
//       }
//     });
//   }
// }
