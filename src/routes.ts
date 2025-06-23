import { NextFunction, Request, Response, Router } from "express";


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



/* ENTENDENDO MIDDLEWARES 
    - Está ali no meio após chamar a requisição e antes de chamar o callback
*/
router.use((req: Request, res: Response, next: NextFunction) => {
    console.log("Passou pelo MIDDLEWARE GLOBAL");

    return next();
})

//middleware
function checkTarefa(req: Request, res: Response, next: NextFunction) {
    if (!req.body.nome) {
        return res.status(400).json({ error: "Nome invalido / Faltando nome" })
    }

    return next();
}

function checkIndexTarefa(req: Request, res: Response, next: NextFunction) {
    const tarefa = tarefas[Number(req.params.index)];

    if (!tarefa) {
        return res.status(400).json({ error: "Tarefa nao encontrada!" })
    }

    return next();
}

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
router.post("/tarefas", checkTarefa, (req: Request, res: Response) => {
    const { nome } = req.body;

    if (!nome) {
        res.status(400).json({ message: "Erro ao cadastrar" })
        return;
    }

    tarefas.push(nome);

    res.json(tarefas)
});


//Atualizar tarefa
router.put("/tarefas/:index", checkTarefa, checkIndexTarefa, (req: Request, res: Response) => {
    const { index } = req.params;
    const { nome } = req.body;

    tarefas[Number(index)] = nome;

    res.json(tarefas);
});

//Deletar tarefa
router.delete("/tarefas/:index", checkIndexTarefa, (req: Request, res: Response) => {
    const { index } = req.params;

    tarefas.splice(Number(index), 1);

    res.json({ message: "Tarefa deletada com sucesso!" });
})

export { router }