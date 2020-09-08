import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
import Icon from "./Icon";


const Wrapper = styled.nav`
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    >ul{
         display : flex;
     > li{
        width : 33.33333%;
        text-align : center;
        > a{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4px 0;
        .icons{
          width: 24px;
          height: 24px;
        }
        }
        }     
     }
`;

const Nav = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <Link to="/money">
                        <Icon name='money'/>
                        记账</Link>
                </li>
                <li>
                    <Link to="/tags">
                        <Icon name='tags'/>标签</Link>
                </li>
                <li>
                    <Link to="/statistics">
                        <Icon name='statistics'/>统计</Link>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Nav;