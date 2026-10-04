import { db } from './src/prisma/db.ts';

async function main() {
  const expenses = await db.orm.public.Expense.createAll([
    { "id": 1, "date": "2025-01-16", "description": "Example expense #1 from Alice", "payer": "Alice", "amount": 25.5 },
    { "id": 2, "date": "2025-01-15", "description": "Example expense #2 from Bob", "payer": "Bob", "amount": 35 },
    { "id": 3, "date": "2025-01-15", "description": "Example expense #3 from Alice", "payer": "Alice", "amount": 2 }
  ]);
  console.log(expenses);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });