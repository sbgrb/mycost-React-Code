import Layout from "Components/Layout";
import React from "react";
import {useTags} from "useTags";
import styled from "styled-components";
import Icon from "Components/Icon";
import {Link} from "react-router-dom";
import {Button} from "Components/Button";
import {Center} from "Components/Center";


const TagList = styled.ol`
  font-size: 16px;
  background: white;
   > li{
    border-bottom: 1px solid #d5d5d5;
    line-height: 20px;
    margin-left: 16px; 
     > a{
       padding: 12px 16px 12px 0;
       display:flex;
       justify-content: space-between;
       align-items: center;
     }
   }
`


const Space = styled.div`
  height: 16px;
`

function Tags() {
    const {tags,addTag} = useTags()
    return (
        <Layout>
           <TagList>
               {tags.map(tag => <li key={tag.id}>
                   <Link to={'/tags/' + tag.id}>
                   <span  className='oneLine' >{tag.name}</span>
               <Icon name='right'/>
                   </Link>
               </li>)}
           </TagList>
            <Center>
                <Space/>
            <Button onClick={addTag}>新增标签</Button>
            </Center>
        </Layout>
    );
}

export  default Tags;