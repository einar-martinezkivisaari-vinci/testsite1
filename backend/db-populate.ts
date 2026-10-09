import { db } from './src/prisma/db.ts';

async function main() {
  const users = await db.orm.public.User.createAll([
  {"name": "Alice", "email": "alice@alice.alice"},
  {"name": "Bob", "email": "bob@bob.bob"}
  ]);
  const expenses = await db.orm.public.Expense.createAll([
    { "date": "2025-01-16", "description": "Example expense #1 from Alice", "payerId": users[0].id, "amount": 25.5 },
    { "date": "2025-01-15", "description": "Example expense #2 from Bob", "payerId": users[1].id, "amount": 35 },
    { "date": "2025-01-15", "description": "Example expense #3 from Alice", "payerId": users[0].id, "amount": 2 }
  ]);
  console.log(expenses);  
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });