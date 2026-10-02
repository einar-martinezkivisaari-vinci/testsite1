export interface Expense {
  id: string;
  date: string;
  description: string;
  payer: string;
  amount: number;
}

export interface NewExpense {
  date: string;
  description: string;
  payer: string;
  amount: number;
}