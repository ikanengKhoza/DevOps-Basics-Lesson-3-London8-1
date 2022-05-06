let request_number = 0;

const indexHandler = (req, res) => {
  var current_time = new Date();
  request_number += 1;

  res.send(
    `Hello! The current server time in is ${current_time}. The server has responded to ${request_number} requests since it started.`
  );
  console.log(current_time, request_number);
};

const sayHelloHandler = (req, res) => {
  var time = new Date();
  const name = req.params.name || "person";

  res.send(`Hello ${name}!`);
  console.log( time, "Lebo");
};


module.exports = { indexHandler, sayHelloHandler };
