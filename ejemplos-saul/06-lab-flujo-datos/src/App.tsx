
import './App.css';
import { useState } from 'react';
import ClickCounterButton from './components/ClickCounterButton';

function App() {
  const [totalClicks, setTotalClicks] = useState(0)

  const handleChildClickCountChange = (totalClicksFromChild: number) => {
    setTotalClicks(totalClicksFromChild)
  }

  return (
    <div>
      <h1>Flujo de datos</h1>
      <p>Total de clicks (padre): {totalClicks}</p>

      <ClickCounterButton
        onClickCountChange={handleChildClickCountChange}
      />
    </div>
  )
}

export default App;
