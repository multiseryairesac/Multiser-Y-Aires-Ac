import { useState } from "react";
import InfoBoxComponent from "./components/infoBoxComponent";
import ContentControlComponent from "./components/ContentControlComponent";

function App() {
  const [currentWindow, setCurrentWindow] = useState("devInfo");

  return (
    <main>
      <ContentControlComponent
        currentWindow={currentWindow}
        setCurrentWindow={setCurrentWindow}
      />
      <InfoBoxComponent currentWindow={currentWindow} />
    </main>
  );
}

export default App;
