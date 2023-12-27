import { useState } from "react";
import NewsCard from "./Components/NewsCard";
import NewsNav from "./Components/NewsNav";

function App() {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <NewsNav setCategory={setCategory} />
      <NewsCard category={category} />
    </div>
  );
}

export default App;
