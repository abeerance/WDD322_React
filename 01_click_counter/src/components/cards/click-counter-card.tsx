import MinusButton from "../common/buttons/minus-button";
import PlusButton from "../common/buttons/plus-button";
import "./click-counter-card.css";

const ClickCounterCard: React.FC = () => {
  return (
    <div className='card'>
      <div className='card--content'>
        <h3 className='card--title'>A simple click counter</h3>
        <p className='card--description'>
          This is just a simple click counter car
        </p>
        <p className='card--curent-count'>Current count:</p>
        <div className='card--button-container'>
          <PlusButton />
          <MinusButton />
        </div>
      </div>
    </div>
  );
};

export default ClickCounterCard;
