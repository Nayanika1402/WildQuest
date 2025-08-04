import React from "react";
import Crossword from "@jaredreisinger/react-crossword";

const data = {
  across: {
    1: { clue: "Large mammal known for its tusks, threatened by poaching.", answer: "ELEPHANT", row: 0, col: 0 },
    4: { clue: "Striped big cat that is critically endangered.", answer: "TIGER", row: 2, col: 4 },
    6: { clue: "Bird that symbolizes wisdom and faces habitat loss.", answer: "OWL", row: 4, col: 1 },
    8: { clue: "Largest living primate, endangered due to deforestation.", answer: "GORILLA", row: 6, col: 3 },
    10: { clue: "Marine mammal hunted for its blubber.", answer: "WHALE", row: 8, col: 0 },
  },
  down: {
    1: { clue: "Black and white bear native to China.", answer: "PANDA", row: 0, col: 0 },
    2: { clue: "Flightless bird from the Antarctic facing climate change threats.", answer: "PENGUIN", row: 0, col: 2 },
    3: { clue: "Horned mammal targeted by poachers.", answer: "RHINO", row: 0, col: 5 },
    5: { clue: "Sea creature known for its long lifespan, affected by plastic pollution.", answer: "TURTLE", row: 3, col: 7 },
    7: { clue: "Big cat native to the Americas, also called a puma.", answer: "COUGAR", row: 5, col: 4 },
    9: { clue: "Colorful tropical bird often illegally traded as a pet.", answer: "MACAW", row: 7, col: 6 }
  }
};

const CrosswordGame = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1 style={{ color: "#2c3e50", fontSize: "40px", fontWeight: "bold" }}>Wildlife Conservation Crossword 🐾</h1>
      <Crossword data={data} />
    </div>
  );
};

export default CrosswordGame;
