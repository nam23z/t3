import '../../App.css'
import { Widget } from 'component/Widget/Widget';
import { TopCreate } from 'component/TopCreate/TopCreate';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="App">
        <header className="App-header">
        <Widget percent={12.3} nameETH={"Revenue"} typeETH={"ETH"} numETH={"5.00"}></Widget>
        <Widget percent={8.1} nameETH={"Spending"} typeETH={"ETH"} numETH={"2.00"}></Widget>
        <Widget percent={-5.1} nameETH={"ROI"} typeETH={"%"} numETH={"14.02"}></Widget>
        <Widget percent={3.2} nameETH={"Estimated"} typeETH={"ETH"} numETH={"7.00"}></Widget>
        </header>
        <TopCreate ></TopCreate>
        <nav>
            <Link to="/about">About</Link>
        </nav>
        </div>
    );
}

export default Home;