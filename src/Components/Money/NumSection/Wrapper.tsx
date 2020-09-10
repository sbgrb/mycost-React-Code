import styled from "styled-components";

const Wrapper = styled.section`
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
export {Wrapper}