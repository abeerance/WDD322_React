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
