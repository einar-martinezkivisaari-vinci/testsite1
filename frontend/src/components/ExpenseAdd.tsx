import { useForm } from "react-hook-form";
import type { Expense } from "../types/Expense";

interface ExpenseAddProps {
  addFunction: (expense: Expense) => void;
}

const ExpenseAdd = ({ addFunction }: ExpenseAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    addFunction(data);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <select {...register("payer", { required: true })}>
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
          type="number"
          {...register("amount", { required: true })}
          placeholder="Enter amount"
        />
        {errors.amount && <span>Amount field is required</span>}
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default ExpenseAdd;
