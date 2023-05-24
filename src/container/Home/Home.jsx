import { Widget } from 'component/Widget/Widget';
import { TopCreate } from 'component/TopCreate/TopCreate';
import PrimaryLayout from 'component/Layout';
import { styled } from 'styled-components';

const StyledHome = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    width: 36%;
    text-align: center;
`

const Home = () => {
    return (
        <PrimaryLayout>
            <StyledHome>
                <Widget percent={12.3} nameETH={"Revenue"} typeETH={"ETH"} numETH={"5.00"}></Widget>
                <Widget percent={8.1} nameETH={"Spending"} typeETH={"ETH"} numETH={"2.00"}></Widget>
                <Widget percent={-5.1} nameETH={"ROI"} typeETH={"%"} numETH={"14.02"}></Widget>
                <Widget percent={3.2} nameETH={"Estimated"} typeETH={"ETH"} numETH={"7.00"}></Widget>
                <TopCreate ></TopCreate>
            </StyledHome>
        </PrimaryLayout>
    );
}

export default Home;