import * as React from "react";

import QuetionCard from "../question/components/QuetionCard";
import { Question } from "../question/types";
import Button from "../ui/controls/Button";

import styles from "./App.module.scss";

const App: React.FC = () => {
  const [question, setQuestion] = React.useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0)
  const [points, setPoints] = React.useState<number>(0);
  const [status, setStatus] = React.useState<"pending"|"resolved"|"finish">("pending");
  const quest = question[currentQuestion];

  React.useEffect(() => {
    api.list().then((questions) => {
      setQuestion(questions);
      setStatus("resolved");
    });
   }, []);
  
  if (status === "pending") {
    return <span>Loading...</span>
  }
  
  return (
    <main className={styles.container}>

      
      <QuetionCard footer={`${quest.category }`} header={`${currentQuestion +1}/${quest.length}`}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, nisi eum! Eos, optio.
        Voluptatum eos, sequi, architecto fugiat eveniet iusto tempore, odit perferendis culpa quo
        quis. Quaerat quas ipsum ullam?

        
      </QuetionCard>
      <nav className={styles.answers}>
        <Button>Holis</Button>
        <Button>Holis</Button>
        <Button>Holis</Button>
        <Button>Holis</Button>
      </nav>
    </main>
  );
};

export default App;
