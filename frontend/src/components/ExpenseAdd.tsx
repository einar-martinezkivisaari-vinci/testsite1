import type { Expense } from "../types/Expense";

interface ExpenseAddProps{
    addFunction:(expense:Expense) => void;
}

const ExpenseAdd = ({addFunction}:ExpenseAddProps) => {
    const id = Date.now()
    const payer = ["Alice", "Bob"][id % 2 == 0 ? 0 : 1]
    const nexpense = {
        id: id.toString(),
        date: new Date().toString(),
        description: `New expense ${id}`,
        payer: payer,
        amount: Number.parseFloat((Math.random()*100).toFixed(2))
    }
    return (
        <button onClick={() => addFunction(nexpense)}>Add</button>
    )
}

export default ExpenseAdd;