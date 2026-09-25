import type { Expense } from "../types/Expense";

interface ExpanseItemProps {
    expense: Expense;
}

const ExpenseItem = ({expense} : ExpanseItemProps) => {
    return (
        <>
            <div>date: {expense.date}</div>
            <div>description: {expense.description}</div>
            <div>payer: {expense.payer}</div>
            <div>amount: ${expense.amount.toFixed(2)}</div>
        </>
    )
}

export default ExpenseItem;