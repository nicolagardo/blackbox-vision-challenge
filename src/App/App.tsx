import * as React from "react";
import api from "../question/api";

import QuetionCard from "../question/components/QuetionCard";
import {Question} from "../question/types";
import Button from "../ui/controls/Button";

import styles from "./App.module.scss";

const App: React.FC = () => {
  const [questions, setQuestions] = React.useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
  const [points, setPoints] = React.useState<number>(0);
  const [status, setStatus] = React.useState<"pending" | "resolved" | "finish">("pending");
  const quest = questions[currentQuestion];

  function onAnswer(text: string) {
    if (quest.correct_answer === text) {
      switch (quest.type) {
        case "boolean":
          {
            setPoints((points) => points + 5);
            break;
          }
        case "multiple":
          {
            setPoints((points) => points + 10);
            break;
          }
        
      }
    }
    if (currentQuestion + 1 === questions.length) {
      setStatus("finish");
    }else{
      setCurrentQuestion((quest) => quest +1);
    }
  }

  React.useEffect(() => {
    api.list().then((questions) => {
      setQuestions(questions);
      setStatus("resolved");
    });
  }, []);

  if (status === "pending") {
    return <span>Loading...</span>;
  }
  if (status === "finish") {
    return <span>Ganaste {points} puntos</span>;
  }
  return (
    <main className={styles.container}>
      <QuetionCard
        footer={`${quest.category} - ${quest.difficulty}`}
        header={`${currentQuestion + 1}/${questions.length}`}
      >
        {`${quest.question}`}
      </QuetionCard>
      <nav className={styles.answers}>
        {[...quest.incorrect_answers, quest.correct_answer]
          .sort((a, b) => a.localeCompare(b))
          .map((answer) => (
            <Button key={answer} onClick={()=>onAnswer(answer)}>{answer}</Button>
          ))}
      </nav>
    </main>
  );
};

export default App;
