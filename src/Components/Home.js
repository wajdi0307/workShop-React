import styled from "styled-components";
import {Link} from "react-router-dom";

const HeaderFrame = styled.div`
  min-height: 50px;
  min-width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;

  & > ul {
    list-style: none;
    display: flex;

    & > li:not(:nth-child(1)) {
      margin-left: 10px;
    }
  }
`;
const WelcomeWrapper = styled.div`
  text-align: center;
  display: flex;
`;
const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

function Home() {
    return (

        <WelcomeWrapper>
            <HeaderFrame>
                <ul id="nav">
                    <li>
                    <Link to={"/"}>Welcome</Link></li>
                   <li><Link to={"/product"}> Products</Link></li>

                </ul>
            </HeaderFrame>
        </WelcomeWrapper>
    )
}

export default Home