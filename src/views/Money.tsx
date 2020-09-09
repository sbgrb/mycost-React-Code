import Layout from "../Components/Layout";
import React from "react";
import styled from "styled-components";
import {NumSection} from "../Components/Money/NumSection";
import {NoteSection} from "../Components/Money/NoteSection";
import {CatSection} from "../Components/Money/CatSection";
import {TagsSection} from "../Components/Money/TagsSection";

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`

function Money() {
    return (
        <MyLayout>
            <TagsSection/>
            <NoteSection/>
            <CatSection/>
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