import Layout from "../Components/Layout";
import React from "react";
import styled from "styled-components";

const TagsSection = styled.section`
  background: #ffffff; padding: 12px 16px;
  flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
  > ol{
    margin: 0  -12px;
    > li{
      background: #d9d9d9; border-radius: 18px; display: inline-block;
      padding: 3px 18px; font-size: 14px; margin: 8px 12px;
    }
  }
  > button{
  background: none; border: none; padding: 2px 4px;
  border-bottom: 1px solid #333; color: #666;
  margin-top: 8px;
  }
`

const NoteSection = styled.section`
    background: #f5f5f5;
    padding: 0 16px;
    font-size: 14px;
    > label{
    display:flex;
    align-items: center;
      > span{
        margin-right: 16px;
        white-space: nowrap;
      }
      > input{
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
      }
    }
`

const CatSection = styled.section`
  font-size: 24px;
  > ul{
  display:flex;
  background: #c4c4c4;
   > li{
    width: 50%;
    text-align: center;
    padding: 16px 0;
    position: relative;
      &.selected::after{
        content: '';
        display:block;
        height: 3px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
   }
  }
`

const NumSection = styled.section`
   display:flex;
   flex-direction: column;
   font-size: 18px;
   > .output{
     font-size: 36px;
     line-height: 72px;
     text-align: right;
     padding: 0 16px;
     box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                 inset 0 5px 5px -5px rgba(0,0,0,0.25);
   }
   > .pad{
        > button{
        float: left;
        width: 25%;
        border: none;
        height: 64px;
         &.ok{
          height: 128px;
          float: right;
         }
         &.zero{
         width: 50%;
         }
         &:nth-child(1){
         background: greenyellow;
         }
      }
   }
`

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`

function Money() {
    return (
        <MyLayout>
            <TagsSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NoteSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder='在这里添加备注'/>
                </label>
            </NoteSection>
            <CatSection>
                <ul>
                    <li className='selected'>支出</li>
                    <li>输入</li>
                </ul>
            </CatSection>
            <NumSection>
                <div className='output'>
                    0
                </div>
                <div className='pad clearfix'>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className='ok'>OK</button>
                    <button className='zero'>0</button>
                    <button>.</button>
                </div>
            </NumSection>
        </MyLayout>
    );
}

export default Money;