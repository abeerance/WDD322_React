import { useEffect, useState } from "react";

type ComponentNameProps = {
  // props
};

// Base structure of a React Component
// ComponentName is ALWAYS PascalCase
const ComponentName: React.FC<ComponentNameProps> = () => {
  // base structure of useState
  const [state, setState] = useState<string>("initialState");

  // base structure of useEffect
  useEffect(() => {}, []);

  return (
    <>
      {/* the return has only one root element
  if there are more elements then the elemnts are wrapped inside () */}
    </>
  );
};

export default ComponentName;

{
  /*
  There are 2 ways to create a dynamic expression in JSX:

  1. (You are not able to debug it properly with console.log)
  {allAnswers.map((answer: string) => (
    <AnswerCard key ={answer} answer={answer}/>
  )}

  2. (you are able to debug it with console.log, but it needs and explicit return)
  {allAnswers.map((answer: string) => {
    console.log(answer)
    return (
      <Box>
        <AnswerCard key ={answer} answer={answer}/>
      </Box>
      )
  })}

*/
}

{
  /*
  Ternary operators are really important in react

  1st example:
  {checkAnswer === false ? null : (
    <Typography>Check Answer</Typography>
  )}

  is the same as :
  if(checkAnswer === false) {
    return null
  } else {
    return <Typography>Check Answer</Typography>
  }

  2nd example:
  {rightAnswer === 'test ? 'test' : rightAnswer === 'test2' ? 'test2' : 'test3'}

  is the same as :
  if(rightAnswer === 'test') {
    return 'test'
  } else if(rightAnswer === 'test2') {
    return 'test2'
  } else {
    return 'test3'
  }

  3rd example (if you do not want an else returnred):
  {rightAnswer === 'test' && 'test'}

  is the same as :
  if(rightAnswer === 'test') {
    return 'test'
  }

*/
}

{
  /*
  Array mapping

  1. The first child always need a key prop, so that react can keep track of the elements
  2. you can extend the prop inside the map function, so that you can select the properties inside the object, z.B.:
    {triviaQuestions.map(
    (question: {
      correct_answer: string;
      difficulty: string;
      incorrect_answers: string[];
      question: string;
      type: string;
    }) => {
      return (
        <TriviaQuestion
          key={question.question}
          difficulty={question.difficulty}
          type={question.type}
          question={question.question}
          correctAnswer={question.correct_answer}
          incorrectAnswers={question.incorrect_answers}
        />
      );
    }
  )}
*/
}
