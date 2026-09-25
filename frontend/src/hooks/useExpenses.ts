import { useEffect, useState } from "react";
import type { Expense } from "../types/Expense";

const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const host = import.meta.env.VITE_API_URL || 'http://unknown-api-url.com';

  useEffect(() => {
    getExpenses();
  }, []);

  const getExpenses = async () => {
    try {
      const response = await fetch(`${host}/api/expenses`);
      if (!response.ok)
        throw new Error(
          `getExpenses error : ${response.status} : ${response.statusText}`,
        );
      setExpenses(await response.json());
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  const addExpense = async (newExpense: Expense) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(newExpense),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(`${host}/api/expenses`, options);
      if (!response.ok)
        throw new Error(
          `addExpense error: ${response.status} : ${response.statusText}`,
        );
      setExpenses([...expenses, await response.json()]);
    } catch (err) {
      console.error(err);
    }
  };

  const resetExpenses = async () => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(`${host}/api/expenses/reset`, options);
      if (!response.ok)
        throw new Error(
          `resetExpenses error: ${response.status} : ${response.statusText}`,
        );
      setExpenses(await response.json());
    } catch (err) {
      console.error(err);
    }
  };

  return {expenses, loading, error, addExpense, resetExpenses};
};

export default useExpenses;