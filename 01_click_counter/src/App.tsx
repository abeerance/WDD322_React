import "./App.css";
import ClickCounterCard from "./components/cards/click-counter-card";

// normale Funcktionschreibweise
// function App() {
//   return <></>;
// }

// Arrow Function mit named export
// export const App = () => {
//   return <></>;
// };

// Arrow Function
// const App = () => {
//   return <></>;
// };

// Arrow Function mit Typisierung
const App: React.FC = () => {
  return (
    <div>
      <h1>My very first React App</h1>
      <h2>This will be a simple click counter</h2>
      <ClickCounterCard title='A simple click counter card' />
    </div>
  );
};

export default App;
