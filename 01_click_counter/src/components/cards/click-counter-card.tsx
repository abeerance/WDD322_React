import { useState } from "react";
import AppButton from "../common/buttons/app-button";
import "./click-counter-card.css";

/* INFO TO PROPPING */
// 1. Definieren von der prop (Property die vererbt wird, im Parent, in diesem Beispiel title)
// 2. Definieren von dem Typ der prop (in diesem Beispiel string), weil die ComponentName ClickCounterCard ist,
// heißt die prop ClickCounterCardProps
// 3. Verlinkung der ComponentProps mit der ComponentName (in diesem Beispiel ClickCounterCardProps)
// 4. Prop-Description (in diesem Beispiel title)
// 5. Einsetzen des Props in die Component (in diesem Beispiel title)

type ClickCounterCardProps = {
  title: string;
};

const ClickCounterCard: React.FC<ClickCounterCardProps> = ({ title }) => {
  // const [charName, setCharName] = useState("Luffy");
  // const [age, setAge] = useState(20);
  const [currentCount, setCurrentCount] = useState(0);

  return (
    <div className='card'>
      <div className='card--content'>
        <h3 className='card--title'>{title}</h3>
        <p className='card--description'>
          This is just a simple click counter card
        </p>
        <p className='card--curent-count'>Current count: {currentCount}</p>
        <div className='card--button-container'>
          <AppButton
            content='+'
            onClick={() => {
              setCurrentCount(currentCount + 1);
            }}
          />
          <AppButton
            content='-'
            isMinus
            onClick={() => {
              setCurrentCount(currentCount - 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ClickCounterCard;
