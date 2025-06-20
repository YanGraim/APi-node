import { Request, Response, Router } from "express";


const router = Router();
const tarefas = ["Estudar Node JS", "Estudar JavaScript"];
// Request Body { "nome": "Comprar Pao", "usuario": 123 }

//Exemplo: http://localhost:3333/tarefas
// router.get("/tarefas", (req: Request, res: Response) => {
//     // res.send("My first api");
//     res.json({ message: "My first api" });
// });

// export { router }


// Query Params ?nome=Comprar Pao
// router.get("/tarefas", (req: Request, res: Response) => {
//     const nome = req.query.nome;

//     res.json({ tarefas: nome });
// });

// export { router }


// Route Params /tarefas/2
// router.get("/tarefas/:id", (req: Request, res: Response) => {
//     const id = req.params.id;

//     res.json({ tarefas: `Tarefa com id: ${id}` });
// })

// export { router }


//Listar todas as tarefas
router.get("/tarefas", (req: Request, res: Response) => {
    res.json(tarefas)
})

//Listar unica tarefa
router.get("/tarefas/:index", (req: Request, res: Response) => {
    const index = req.params.index;

    res.json({ tarefa: tarefas[Number(index)] })

})


//Cadastrar nova tarefa
router.post("/tarefas", (req: Request, res: Response) => {
    const { nome } = req.body;

    if (nome === "") {
        res.status(400).json({ message: "Erro ao cadastrar" })
    }

    tarefas.push(nome);

    res.json(tarefas)
})

export { router }