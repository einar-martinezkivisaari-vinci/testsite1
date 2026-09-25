import { Router } from "express";
import { addExpense, getAllExpenses} from "../services/expenses.ts";
import type { Expense } from "../types/Expense.ts";

const router = Router();

router.get("/expenses", async (req, res) => {
    return res.json(getAllExpenses());
});

router.post("/expenses", (req, res) => {
    const body: unknown = req.body;
    if (
        !body ||
        typeof body !== "object"
    )
    return res.sendStatus(400);

    const { id, date, description, payer, amount} = req.body as Expense;

    const expense: Expense = {
        id,
        date,
        description,
        payer,
        amount
    };

    return res.json(addExpense(expense));
})

// router.post("/expenses/reset", (req, res) => {
//     return res.json(resetExpenses());
// })

export default router;