import { Request, Response, Router } from "express";


const router = Router();

//Exemplo: http://localhost:3333/tarefas
router.get("/tarefas", (req: Request, res: Response) => {
    // res.send("My first api");
    res.json({ message: "My first api" });
});

export { router }