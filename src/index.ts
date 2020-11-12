import express, { Request, Response } from "express"

const app = express()

app.get("/healthcheck", (_req: Request, res: Response) => {
  res.json({ status: "ok" })
})

app.listen(80)
