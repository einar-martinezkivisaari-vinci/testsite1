import { useForm } from "react-hook-form";
import type { Expense } from "../types/Expense";

interface ExpenseAddProps{
    addFunction:(expense:Expense) => void;
}

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();

const onSubmit = (data: any) => console.log(data);

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Name:
                <select {...register("name", { required: true })}>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>
            <label>
                Date:
                <input type="date" {...register('Date', { required: true })} placeholder="Select date" />
                {errors.date && <span>Date field is required</span>}
            </label>
            <label>
                Description:
                <input {...register('description', { required: true })} placeholder="Enter a description" />
                {errors.description && <span>Description field is required</span>}
            </label>
            <label>
                Amount:
                <input type="number" {...register('amount', { required: true })} placeholder="Enter amount" />
                {errors.amount && <span>Amount field is required</span>}
            </label>
            <button type="submit">Add</button>
        </form>
    )
}

export default ExpenseAdd;