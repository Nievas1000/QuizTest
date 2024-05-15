const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const data = [
  {
    question:
      "¿Qué método se utiliza para seleccionar un elemento del DOM por su ID?",
    answers: [
      "querySelector()",
      "getElementByClass()",
      "getElementById()",
      "selectElementById()",
    ],
    correctAnswer: "getElementById()",
  },
  {
    question: "¿Cuál es el operador de igualdad estricta en JavaScript?",
    answers: ["===", "=", "==", "!=="],
    correctAnswer: "===",
  },
  {
    question:
      "¿Qué método se utiliza para agregar un elemento al final de un array en JavaScript?",
    answers: ["unshift()", "add()", "insert", "push()"],
    correctAnswer: "push()",
  },
  {
    question:
      "¿Cuál es el método utilizado para obtener la longitud de un array en JavaScript?",
    answers: ["size()", "count()", "sizeOf()", "length"],
    correctAnswer: "length",
  },
  {
    question: "¿Cómo se define una función anónima en JavaScript?",
    answers: [
      "function(){..}",
      "anonymusFunction()",
      "function myFunction(){..}",
      "(function(){...})",
    ],
    correctAnswer: "function(){..}",
  },
];

app.get("/quiz", async (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
