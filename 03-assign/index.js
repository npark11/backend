import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'

const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.get('/users', (req, res) => {
  const users = [
    {
      email: "user01@email.com",
      name: "Olivia",
      phone: "2345678901",
      sin: "111-222-333",
      prefer: "https://www.google.com"
    },
    {
      email: "user02@email.com",
      name: "Nick",
      phone: "7890123456",
      sin: "222-333-444",
      prefer: "https://www.google.com"
    },
    {
      email: "user03@email.com",
      name: "Judy",
      phone: "3456789012",
      sin: "333-444-555",
      prefer: "https://www.google.com"
    },
    {
      email: "user04@email.com",
      name: "Anna",
      phone: "4567890123",
      sin: "444-555-666",
      prefer: "https://www.google.com"
    },
    {
      email: "user05@email.com",
      name: "Elsa",
      phone: "5678901234",
      sin: "555-666-777",
      prefer: "https://www.google.com"
    },
  ]

  res.send(users)
});

app.get('/starbucks', (req, res) => {
 const menu = [
  { name: 'Americano', kcal: 5 },
  { name: 'Latte', kcal: 140 },
  { name: 'Cold Brew', kcal: 1 },
  { name: 'Coffee Mocha', kcal: 141 },
  { name: 'Mocha Latte', kcal: 220 },
  { name: 'Caramel Latte', kcal: 220 },
  { name: 'Vanilla Latte', kcal: 230 },
  { name: 'Espresso', kcal: 1 },
  { name: 'Cappuccino', kcal: 118 },
  { name: 'Hot Chocolate', kcal: 282 },
 ]

 res.send(menu)
});


app.listen(3000, () => {
  console.log("listening on port 3000!")
})