import cors from "cors";
import 'dotenv/config';
import express from "express";
import { routes } from "./routes";

const app = express();
// app.use(cors(
//   origin: `${process.env.PUBLIC_SITE_URL}` || 'http://localhost:3000'
// ));
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("Server running in port 3333");
});
