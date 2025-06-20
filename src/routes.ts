import { Request, Response, Router } from "express";


const router = Router();

// Route Params /tarefas/2
// Request Body { "nome": "Comprar Pao", "usuario": 123 }

//Exemplo: http://localhost:3333/tarefas
// router.get("/tarefas", (req: Request, res: Response) => {
//     // res.send("My first api");
//     res.json({ message: "My first api" });
// });

// export { router }


// Query Params ?nome=Comprar Pao
router.get("/tarefas", (req: Request, res: Response) => {
    const nome = req.query.nome;

    res.json({ tarefas: nome });
});

export { router }