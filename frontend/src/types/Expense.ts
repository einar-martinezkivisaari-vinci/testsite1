import * as z from "zod";

export interface Expense {
  id: string;
  date: string;
  description: string;
  payer: number;
  amount: number;
}

export const ExpenseFormSchema = z.object({
  description: z.string().min(1, "Description is required"),
  payerId: z.number().int().positive("Payer ID must be a positive integer"),
  amount: z.number().positive("Amount must be positive"),
  date: z.string().min(1, "Date is required"),
});

export type ExpenseFormValues = z.infer<typeof ExpenseFormSchema>;

export type NewExpense = Omit<Expense, 'id'>;