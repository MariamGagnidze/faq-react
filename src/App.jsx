import { useState } from "react";
import { data } from "./Components/data";
import AccordionItem from "./Components/Accordion";
import { Header } from "./Components/Header";
import { Image } from "./Components/Image";
import "./App.css";

function App() {
  const [showItem, setShowItem] = useState(0);

  return (
   <div className="outter">
     <div className="main">
        <div className="image">
      <Image src="src/Images/Group 4.png" alt="image" />
      </div>
      <div className="questions">
      <Header />
      
    
      {data.map((item) => {
        return (
          <AccordionItem
            showItem={showItem}
            setShowItem={setShowItem}
            number={item.number}
            question={item.question}
            answer={item.answer}
          />
        );
      })}
      </div>
    </div>
   </div>
  );
}

export default App;
