import { useEffect, useState } from "react";

function App() {

  document.body.style.padding = 0;
  document.body.style.margin = 0;
  document.body.style.boxSizing = "border-box";
  document.body.style.background = "black";


  const [fibonacci, setFibonacci] = useState([]);
  const [factorial, setFactorial] = useState([]);

  useEffect(() => {
    const calculateFibonacci = (n) => {
      if (n === 0) return [0];
      if (n === 1) return [0, 1];

      let a = 0;
      let b = 1;
      const result = [0, 1];

      for (let i = 2; i <= n; i++) {
        const nextFib = a + b;
        result.push(nextFib);
        a = b;
        b = nextFib;
      }
      return result; 
    }

    const calculateFactorial = (n) => {
      const result = [];
      let factorial = 1;
      for (let i = 1; i <= n; i++) {
        factorial *= i;
        result.push(factorial);
      }
      return result;
    }

    const fibonacciResult = calculateFibonacci(10); 
    const factorialResult = calculateFactorial(10);
    setFibonacci(fibonacciResult);
    setFactorial(factorialResult);
  }, []);

  return (
    <div style={{ backgroundColor: "#003",
                  color:"white",
                  padding:"20px",
     }}>
      <div style={{ backgroundColor: "#900000 ", color:"white",padding:"20px",}}>
      <h2>Fibonacci</h2>
        <div style={{display:'flex',flexWrap:'wrap'}}>
              {fibonacci.map((item, index) => (
                 <div key={index} style={{padding:"0px"}}>{item}{index === fibonacci.length - 1 ? " " : "__"}</div>))
              }
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ backgroundColor: "#007050 ", color:"white",padding:"20px"}}>
        <h2>Factorial</h2>
        {
            factorial.map((item,index)=>(
                <div key={index}>{index+1 +"! = "+item}</div>
            ))
        }
      </div>
    </div>
  );
}

export default App;
