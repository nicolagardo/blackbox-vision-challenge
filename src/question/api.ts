import {Question} from "./types";

export default {
  list: (): Promise<Question[]> =>
    Promise.resolve([
      {
        category: "Entertainment: Books",
        type: "multiple",
        difficulty: "easy",
        question: "Who wrote the novel &#39;Fear And Loathing In Las Vegas&#039;?",
        correct_answer: "Hunter S. Thompson",
        incorrect_answers: ["F. Scott Fitzgerald", "Henry Miller", "William S. Burroughs"],
      },
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "medium",
        question:
          "Irish musician Hozier released a music track in 2013 titled, &quot;Take Me to ______&quot;",
        correct_answer: "Church",
        incorrect_answers: ["Mosque", "Synagogue", "Temple"],
      },
      {
        category: "Entertainment: Video Games",
        type: "multiple",
        difficulty: "medium",
        question: "What was the name of the Secret Organization in the Hotline Miami series? ",
        correct_answer: "50 Blessings",
        incorrect_answers: ["American Blessings", "50 Saints", "USSR&#039;s Blessings"],
      },
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "medium",
        question: "Which of these artists has NOT been a member of dancehall group Major Lazer?",
        correct_answer: "Skrillex",
        incorrect_answers: ["Diplo", "Jillionaire", "Walshy Fire"],
      },
      {
        category: "Entertainment: Television",
        type: "multiple",
        difficulty: "medium",
        question:
          "In the Netflix show, Stranger Things, what song would Will sing to himself as he was missing?",
        correct_answer: "Should I Stay or Should I Go?",
        incorrect_answers: ["Love Will Tear Us Apart", "This Charming Man", "Africa"],
      },
      {
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "medium",
        question:
          "In Riot Games &quot;League of Legends&quot; the name of Halloween event is called &quot;The Reckoning&quot;.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Politics",
        type: "multiple",
        difficulty: "medium",
        question: "Who became Prime Minister of the United Kingdom in July 2016?",
        correct_answer: "Theresa May",
        incorrect_answers: ["Boris Johnson", "David Cameron", "Tony Blair"],
      },
      {
        category: "Entertainment: Music",
        type: "multiple",
        difficulty: "medium",
        question:
          "Which of these Johns was murdered by gunshots outside the Dakota in New York in 1980?",
        correct_answer: "John Lennon",
        incorrect_answers: ["Johnny Thunders", "John Denver", "John Cascella"],
      },
      {
        category: "History",
        type: "multiple",
        difficulty: "medium",
        question: "Which Louis was known as &#039;The Sun King of France&#039;?",
        correct_answer: "Louis XIV",
        incorrect_answers: ["Louis XIII", "Louis XV", "Louis XVI"],
      },
      {
        category: "Entertainment: Comics",
        type: "multiple",
        difficulty: "medium",
        question: "In Bionicle, who was formerly a Av-Matoran and is now the Toa of Light?",
        correct_answer: "Takua",
        incorrect_answers: ["Jaller", "Vakama", "Tahu"],
      },
    ]),
};
