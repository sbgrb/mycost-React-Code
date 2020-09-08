import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
require('Icons/money.svg');
require('Icons/labels.svg')
require('Icons/statistics.svg')


const Wrapper = styled.nav`
    line-height: 24px;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    >ul{
         display : flex;
     > li{
        width : 33.33333%;
        text-align : center;
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
`;

const Nav = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <svg className='icons'>
                        <use xlinkHref='#money'/>
                    </svg>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <svg className='icons'>
                        <use xlinkHref='#labels'/>
                    </svg>
                    <Link to="/tags">标签</Link>
                </li>
                <li>
                    <svg className='icons'>
                        <use xlinkHref='#statistics'/>
                    </svg>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Nav;