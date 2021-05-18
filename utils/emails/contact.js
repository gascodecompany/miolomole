const contactEmail = (data) => `
    <body style="display: flex; height: 100vh">
      <div
      style="
          text-align: center;
          margin: auto;
          width: 80%;
          height: auto;
          background-color: #FFFFFF;
          padding: 20px;
          border-radius: 15px;
          background-size: 137%;
      "
      >
        <h2>Nome: ${data.name}</h2>
        <h2>Email: ${data.email}</h2>
        <p><b>Mensagem:</b> ${data.message}</p>
      </div>
    </body>
`
export default contactEmail;
