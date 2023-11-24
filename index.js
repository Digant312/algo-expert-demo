const express = require("express");
const app = express();
const port = 3002;

function authCheck(req, res, next) {
  console.log("auth check middleware called");
  next();
}

function inputValidation(req, res, next) {
  console.log("inputValidation middleware called");
  next();
}

app.get("/auth-test", authCheck, inputValidation, (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// questionList.forEach(async (question, index) => {
//   await getQuestionAndSave(question.name);
// });
// console.log("questionList[0]", questionList[0]);
// updateQuestionFetchStatusInLocal(questionList[0]);

// const { data } = require("./config/questionData");

// const question = data.questions[0];

// console.log("question: ", question.name);

// (async function () {
//   let counter = 0,
//     error = false;
//   while (counter < 160 && !error) {
//     try {
//       let currentQuestion = await getQuestionListLocal({
//         _limit: 1,
//         fetched: false,
//       });
//       await getQuestionAndSave(currentQuestion[0].name);
//       counter++;
//       console.log("question fetched successfully--->>>: ", counter);
//     } catch (err) {
//       console.log("ERROR: ", err);
//       error = true;
//     }
//   }
// })();
