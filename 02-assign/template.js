function getWelcomeTemplate() {
  const template =`
    <html>
      <body>
        <h1>Welcome, Olivia!!</h1>
        <hr />
        <div>Name : Olivia</div>
        <div>Email : user01@email.com</div>
        <div>Phone : 2345678901</div>
        <div>My Favorite WebSite : apple.com</div>
      </body>
    </html>
  `

  return template
}

console.log(getWelcomeTemplate())