import { useForm } from "react-hook-form";
import { ExpenseFormSchema, type ExpenseFormValues, type NewExpense } from "../types/Expense";
import { zodResolver } from "@hookform/resolvers/zod";

interface ExpenseAddProps {
  addFunction: (expense: NewExpense) => void;
}

const ExpenseAdd = ({ addFunction }: ExpenseAddProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ExpenseFormValues>({
    resolver: zodResolver(ExpenseFormSchema),
  });

  const onSubmit = async (data: ExpenseFormValues) => {
    console.log("asdadas1");
    const newExpense: NewExpense = {
      description: data.description,
      payer: data.payerId,
      amount: data.amount,
      date: data.date,
    };
    console.log("asdad");
    await addFunction(newExpense);
    reset(); // clear the form
  };

  return (
    <div>
      <h2>Add expense</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("description")} placeholder="Description" />
        {errors.description && <span>{errors.description.message}</span>}
        <input type="number" {...register("payerId", { valueAsNumber: true })} placeholder="Payer ID" />
        {errors.payerId && <span>{errors.payerId.message}</span>}
        <input type="number" step="0.01" {...register("amount", { valueAsNumber: true })} placeholder="Amount" />
        {errors.amount && <span>{errors.amount.message}</span>}
        <input type="date" {...register("date")} placeholder="Date" />
        {errors.date && <span>{errors.date.message}</span>}
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <select {...register("payerId", { required: true })}>
            <option value="1">Alice</option>
            <option value="2">Bob</option>
          </select>
        </label>
        <label>
          Date:
          <input
            type="date"
            {...register("date", { required: true })}
            placeholder="Select date"
          />
          {errors.date && <span>Date field is required</span>}
        </label>
        <label>
          Description:
          <input
            {...register("description", { required: true })}
            placeholder="Enter a description"
          />
          {errors.description && <span>Description field is required</span>}
        </label>
        <label>
          Amount:
          <input
            type="number" step="0.01"
            {...register("amount", { valueAsNumber: true })}
            placeholder="Enter amount"
          />
          {errors.amount && <span>Amount field is required</span>}
        </label>
        <button type="submit" className="btn btn-primary">Add</button>
      </form> */}
    </div>
  );
};

export default ExpenseAdd;
