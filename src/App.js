import { useEffect,useState } from "react";

function App(){

  const [count, setCount] = useState(0);

  useEffect(() => {
   const timeout= setTimeout(() => {
      setCount(c=>c+1);
    }, 1000);
// the use Effect neers to return a functionn to clear the effect
// which is no longer needed
    return () => {
      clearTimeout(timeout);
    };
  },[]);

  return <h1>I've rendered {count} times!</h1>;

}

export default App;