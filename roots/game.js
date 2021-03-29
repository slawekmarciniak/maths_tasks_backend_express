function gameRoutes(app) {
  let points = 0;
  let isGameOver = false;
  let winner = false;

  const question = [
    {
      question: "ile to jest 2 + 2",
      answers: [4, 1, 2, 0],
      correctAnswer: 0,
    },
    {
      question: "ile to jest 5 * 5",
      answers: [30, 11, 25, 0],
      correctAnswer: 2,
    },
    {
      question: "ile to jest 10 / 10",
      answers: [5, 1, 10, 150],
      correctAnswer: 1,
    },
    {
      question: "ile to jest 8 * 8",
      answers: [80, 62, 68, 64],
      correctAnswer: 3,
    },
    {
      question: "ile to jest 12 * 13",
      answers: [152, 156, 162, 164],
      correctAnswer: 1,
    },
  ];

  app.get("/question", (req, res) => {
    winner = false;
    const currentQuestion = question[points];
    res.json({ currentQuestion, points });
  });

  app.post("/answer/:index", (req, res) => {
    const { index } = req.params;
    const currentQestion = question[points];
    const isGoodAnswer = currentQestion.correctAnswer === Number(index);

    if (isGoodAnswer) {
      points++;
    } else {
      points = 0;
    }

    if (points === 5) {
      winner = true;
      points = 0;
    }
    res.json({
      correct: isGoodAnswer,
      winner: winner,
      points: points,
    });
  });
}

module.exports = gameRoutes;
