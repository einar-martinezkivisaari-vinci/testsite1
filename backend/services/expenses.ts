import path from "path";
import type { Expense } from "../types/Expense.ts";
import fs from "fs";
import { db } from "../src/prisma/db.ts";

const jsonDbPath = path.join("./data/expenses.json");
const initJsonDbPath = path.join("./data/expenses.init.json");


export const getAllExpenses = async (): Promise<Expense[]> => {
    const expdbo = await db.orm.public.Expense.all()
    const expenses: Expense[] = []
    expdbo.map((e) => {
        expenses.push({
            id: `${e.id}`,
            date: e.date,
            description: e.description,
            payer: e.payer,
            amount: e.amount
        })
    })
    return expenses;
}

export const addExpense = async (expense:Expense): Promise<Expense> => {
    await db.orm.public.Expense.create(expense);
    return expense;
}

// export const resetExpenses = (): Expense[] => {
//     fs.writeFileSync(jsonDbPath, fs.readFileSync(initJsonDbPath));
//     return getAllExpenses();
// }