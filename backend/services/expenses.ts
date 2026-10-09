import path from "path";
import type { NewExpense } from "../types/NewExpense.ts";
import { db } from "../src/prisma/db.ts";
import type { Expense } from "../types/Expense.ts";

const jsonDbPath = path.join("./data/expenses.json");
const initJsonDbPath = path.join("./data/expenses.init.json");


export const getAllExpenses = async (): Promise<Expense[]> => {
    const expdbo = await db.orm.public.Expense.all();
    const expenses: Expense[] = [];
    expdbo.map((e) => {
        expenses.push({
            id: `${e.id}`,
            date: e.date,
            description: e.description,
            payer: e.payerId,
            amount: e.amount
        })
    })
    return expenses;
}

export const addExpense = async (expense:NewExpense): Promise<Expense> => {
    const ret = await db.orm.public.Expense.create({
        description:expense.description,
        amount:expense.amount,
        date:expense.date,
        payerId:expense.payer,
    });
    return {
        id: ret.id.toString(),
        date:ret.date,
        description:ret.description,
        payer:ret.payerId,
        amount:ret.amount,
    };
}

export const resetExpenses = async(): Promise<Expense[]> => {
    await db.orm.public.Expense.where((p) => p.id.gt(0)).deleteAll();
    const expdbo = await db.orm.public.Expense.createAll([
        { "date": "2025-01-16", "description": "Example expense #1 from Alice", "payerId": 1, "amount": 25.5 },
        { "date": "2025-01-15", "description": "Example expense #2 from Bob", "payerId": 2, "amount": 35 },
        { "date": "2025-01-15", "description": "Example expense #3 from Alice", "payerId": 1, "amount": 2 }
    ]);
    const expenses: Expense[] = [];
    expdbo.map((e) => {
        expenses.push({
            id: `${e.id}`,
            date: e.date,
            description: e.description,
            payer: e.payerId,
            amount: e.amount
        })
    })
    return expenses;
}