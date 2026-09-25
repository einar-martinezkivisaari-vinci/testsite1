import path from "path";
import type { Expense } from "../types/Expense.ts";
import fs from "fs";

const jsonDbPath = path.join("./data/expenses.json");
const initJsonDbPath = path.join("./data/expenses.init.json");


export const getAllExpenses = (): Expense[] => {
    return JSON.parse(fs.readFileSync(jsonDbPath, "utf-8"))
}

export const addExpense = (expense:Expense): Expense => {
    const expenses = getAllExpenses();
    expenses.push(expense);
    fs.writeFileSync(jsonDbPath, JSON.stringify(expenses));
    return expense;
}

export const resetExpenses = (): Expense[] => {
    fs.writeFileSync(jsonDbPath, fs.readFileSync(initJsonDbPath));
    return getAllExpenses();
}