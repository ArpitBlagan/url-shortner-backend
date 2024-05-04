import express, { Request, Response } from "express";
import dotenv from "dotenv";
import shortid from "shortid";
import { DB } from "./db";
dotenv.config();
const app = express();
app.use(express.json());

app.post("/short", async (req: Request, res: Response) => {
  const { url } = req.body;
  const short_code = shortid.generate();
  try {
    const result = await DB.getInstance().record.create({
      data: {
        original_url: url,
        short_code: short_code,
        visits: Date.now(),
        createAt: Date.now(),
      },
    });
    console.log(result);
    res.status(202).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
});

app.get(":code", async (req: Request, res: Response) => {
  const { code } = req.params;
  if (!code) {
    res.status(404).json({ message: "code is required" });
  }
  try {
    const result = await DB.getInstance().record.find({
      where: {
        short_code: code,
      },
    });
    console.log(result);
    res.status(200).redirect(result.original_url);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something went wrong" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
