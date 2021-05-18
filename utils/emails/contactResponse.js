const contactResponseEmail = (data) => `
    <body style="display: flex; height: 100vh">
      <div
      style="
          text-align: left;
          margin: auto;
          width: 80%;
          height: auto;
          background-color: #FFFFFF;
          padding: 20px;
          border-radius: 15px;
          background-size: 137%;
      "
      >
        <h3>${data.name} seu contato foi enviado com sucesso, em breve retornaremos.</h3>
      </div>
    </body>
`
export default contactResponseEmail;
