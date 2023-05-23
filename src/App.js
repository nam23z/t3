import './App.css';
import { Button } from 'component/Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button percent={12.3} nameETH={"Revenue"} typeETH={"ETH"} numETH={"5.00"}></Button>
        <Button percent={8.1} nameETH={"Spending"} typeETH={"ETH"} numETH={"2.00"}></Button>
        <Button percent={-5.1} nameETH={"ROI"} typeETH={"%"} numETH={"14.02"}></Button>
        <Button percent={3.2} nameETH={"Estimated"} typeETH={"ETH"} numETH={"7.00"}></Button>
      </header>
    </div>
  );
}

export default App;
