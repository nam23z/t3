import { Widget } from 'component/Widget/Widget';
import { TopCreate } from 'component/TopCreate/TopCreate';
import PrimaryLayout from 'component/Layout';
import { styled } from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Button from 'component/Button';
import bgBanner from 'assets/image/bgBanner.svg';
import bgBanner2 from 'assets/image/banner2.jpg';
import TrendingArt from 'component/TrendingArt';
import Art1 from 'assets/image/art1.svg';
import Art2 from 'assets/image/Art2.svg';
import Avt1 from 'assets/image/avt1.svg';
import Avt2 from 'assets/image/avt2.svg';
const StyledHome = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    width: 100%;
    text-align: center;
`;

const StyledBannerA = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    .crs{
        width: 66%;
        height: 354px;
        padding-bottom: 50px;
    }
    
`;

const StyledBannerAA = styled.div`
    background: url(${props => props.imge}) center center/ 100% no-repeat;
    width: 716px;
    height: 354px;
    h1{
        width: 550px;
        text-align: left;
        line-height: 65px;
        word-wrap: break-word;
        padding-top: 77px;
        margin-top: 0;
        margin-left: 60px;
        color: #FFFFFF;
        font-family: 'Epilogue';
        font-size: 54px;
    }
`;
const StyledButtonBanner = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 60px;
    width: 270px;
`;

const StyledWidgett = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 348px;
`;
const StyledTrendingAuction = styled.div`
    display: flex;
    width: 100%;
`
const StyledTrending = styled.div`
    width: 716px;
`
const StyledHeaderTrending = styled.div`
    display: flex;
    justify-content: space-between;
    h3{
        margin-top: 0;
    }
    .menu{
        display: flex;
    }
`
const StyledContentArt = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 716px;
`
const fakedatawidget = [
    {
        title: "Revenue",
        percent: 12.3,
        type: "ETH",
        number: 5.00
    },
    {
        title: "Spending",
        percent: 8.1,
        type: "ETH",
        number: 2.00
    },
    {
        title: "ROI",
        percent: -5.1,
        type: "%",
        number: 14.02
    },
    {
        title: "Estimated",
        percent: 3.2,
        type: "ETH",
        number: 7.00
    },
]
const fakedataTrendingArt = [
    {
        art: Art1,
        name: "Ape In Love",
        likes: "21,5K",
        avt: Avt1,
        email: "@johnti60",
        numETH: 9.10
    },
    {
        art: Art2,
        name: "Smiling Ape",
        likes: "21,5K",
        avt: Avt2,
        email: "@m_alisson",
        numETH: 6.12
    },
    {
        art: Art1,
        name: "Ape In Love",
        likes: "21,5K",
        avt: Avt1,
        email: "@johnti60",
        numETH: 9.10
    },
    {
        art: Art2,
        name: "Smiling Ape",
        likes: "21,5K",
        avt: Avt2,
        email: "@m_alisson",
        numETH: 6.12
    }
]
const BannerA = ({imge,imge2}) => {
    return(
        <StyledBannerA>
            <Carousel className='crs' autoPlay={true} showStatus={false} showArrows={false} showIndicators={true}>
                <StyledBannerAA imge={imge}>
                    <h1>Discover, Create and Sell Your Own NFT.</h1>
                    <StyledButtonBanner>
                        <Button
                            bgColor={"#FFFFFF"}
                            textColor={"#5429FF"}
                            fontSize={"16px"}
                            fontFami={"DM Sans"}
                        >
                            Discover
                        </Button>
                        <Button
                            bgColor={"transparent"}
                            textColor={"#FFFFFF"}
                            boderColor={"#FFFFFF"}
                        >
                            Create
                        </Button>
                    </StyledButtonBanner>
                </StyledBannerAA>
                <StyledBannerAA imge={imge}>
                <h1>This is Your Second Banner</h1>
                    <StyledButtonBanner>
                        <Button
                            bgColor={"#FFFFFF"}
                            textColor={"#5429FF"}
                            fontSize={"16px"}
                            fontFami={"DM Sans"}
                        >
                            Discover
                        </Button>
                        <Button
                            bgColor={"transparent"}
                            textColor={"#FFFFFF"}
                            boderColor={"#FFFFFF"}
                        >
                            Create
                        </Button>
                    </StyledButtonBanner>
                </StyledBannerAA>
            </Carousel>
            <StyledWidgett>
                {fakedatawidget.map((item)=>{return <Widget percent={item.percent} nameETH={item.title} typeETH={item.type} numETH={item.number}></Widget>})}
            </StyledWidgett>
        </StyledBannerA>
    );
}

const TrendingAuction = () =>{
    return(
        <StyledTrendingAuction>
            <StyledTrending>
                <StyledHeaderTrending>
                    <div>
                        <h3>Trending Auctions</h3>
                    </div>
                    <div className='menu'>
                        <div>
                            <Button textColor={"#5429FF"} width={"45px"} height={"28px"} bgColor={"rgba(84, 41, 255, 0.1)"}>Art</Button>
                        </div>
                        <div>
                            <Button textColor={"#7A797D"} width={"64px"} bgColor={"transparent"}>Music</Button>
                        </div>
                        <div>
                            <Button textColor={"#7A797D"} width={"103px"} bgColor={"transparent"}>Collectibles</Button>
                        </div>
                        <div>
                            <Button textColor={"#7A797D"} width={"64px"} bgColor={"transparent"}>Utility</Button>
                        </div>
                    </div>
                </StyledHeaderTrending>
                <StyledContentArt>
                    {fakedataTrendingArt.map((item)=>{return <TrendingArt imge={item.art} name={item.name} likes={item.likes} avt={item.avt} email={item.email} numETH={item.numETH}>
                    </TrendingArt>})}
                </StyledContentArt>
            </StyledTrending>
            <TopCreate></TopCreate>
        </StyledTrendingAuction>
    )
}
const Home = () => {
    return (
        <PrimaryLayout>
            <StyledHome>
                <BannerA imge={bgBanner} imge2={bgBanner2}></BannerA>
                <TrendingAuction></TrendingAuction>
            </StyledHome>
        </PrimaryLayout>
    );
}

export default Home;