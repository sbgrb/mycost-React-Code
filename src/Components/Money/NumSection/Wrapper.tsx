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
        background: rgba(0,0,0,0.1);
        > button{
        float: left;
        width: 25%;
        border: none;
        height: 64px;
        background: white;
        margin-top: 2px;
        border-radius: 16px;
         &.ok{
          height: 128px;
          float: right;
          background: #f60;
         }
         &.zero{
         width: 50%;
         }
         &:nth-child(4),&:nth-child(8){
         background:grey;
         }
         &:nth-child(1),&:nth-child(2),&:nth-child(3),&:nth-child(4){
         margin-top: 0;
         }
      }
   }
`
export {Wrapper}