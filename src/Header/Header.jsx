import React from 'react';
import GECOLogo from '../assets/GECO.png';
import {Header, HeaderContainer, HeaderLogo} from './HeaderStyleElements';

const HeaderCalculator = () => {
    return(
        <>
           <Header>
              <HeaderContainer>
                 <HeaderLogo><img src={GECOLogo} alt="GECO Logo" className="GECO-logo"></img></HeaderLogo>
              </HeaderContainer>
           </Header>
        </>
    )
}

export default HeaderCalculator;