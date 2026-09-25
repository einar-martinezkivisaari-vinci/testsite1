import ExpenseItem from "../components/ExpenseItem";
import ExpenseAdd from "../components/ExpenseAdd";
import useExpenses from "../hooks/useExpenses";

// const defaultList: Expense[] = [
//     {
//         id: "1",
//         date: Date.now().toString(),
//         description: "ballin but at what cost",
//         payer: "Derue Florian",
//         amount: 24
//     },
//     {
//         id: "2",
//         date: Date.now().toString(),
//         description: "ballin but at what cost",
//         payer: "Badjou Gabriel",
//         amount: 40
//     },
//     {
//         id: "3",
//         date: Date.now().toString(),
//         description: "ballin but at what cost",
//         payer: "Derue Florian Jr",
//         amount: 30
//     },
// ];

const Home = () => {
  const { expenses, loading, error, addExpense, resetExpenses } = useExpenses();
  return (
    <>
      {!loading || !error ? (
        expenses.map((expense, line) => {
          return (
            <div key={line}>
              <ExpenseItem expense={expense} />
              <br />
            </div>
          );
        })
      ) : error ? (
        <div>Loading Error</div>
      ) : (
        <div>Loading</div>
      )}

      <br />
      <ExpenseAdd addFunction={addExpense} />
      <button onClick={() => resetExpenses()}>Reset Data</button>
    </>
  );
};

export default Home;
