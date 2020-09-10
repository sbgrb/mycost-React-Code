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
            <NumSection/>
        </MyLayout>
    );
}

export default Money;