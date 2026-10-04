import { Router } from "express";
import { addExpense, getAllExpenses, resetExpenses} from "../services/expenses.ts";
import type { NewExpense } from "../types/NewExpense.ts";

const router = Router();

router.get("/expenses", async (req, res) => {
    return res.json(await getAllExpenses());
});

router.post("/expenses", async (req, res) => {
    const body: unknown = req.body;
    if (
        !body ||
        typeof body !== "object"
    )
    return res.sendStatus(400);

    const { date, description, payer, amount} = req.body as NewExpense;

    const expense: NewExpense = {
        date,
        description,
        payer,
        amount
    };

    return res.json(await addExpense(expense));
})

router.post("/expenses/reset", async (req, res) => {
    return res.json(await resetExpenses());
})

export default router;