import Layout from "../Components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {NumSection} from "../Components/Money/NumSection";
import {NoteSection} from "../Components/Money/NoteSection";
import {CatSection} from "../Components/Money/CatSection";
import {TagsSection} from "../Components/Money/TagsSection";

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`

type Catgory = '-' | '+'

function Money() {
    const [selected,setSelected] = useState({
        tagIds: [] as number[],
        note : '',
        category: '-' as Catgory,
        amount: 0
    })
    const onChange = (obj: Partial<typeof selected>) =>{
        setSelected({...selected, ...obj})}
    return (
        <MyLayout>
            <TagsSection value={selected.tagIds}
                onChange={tagIds => onChange({tagIds})}/>
            <NoteSection value={selected.note}
                onChange={note => onChange({note})}/>
            <CatSection value={selected.category}
                onChange={category => onChange({category})}/>
            <NumSection value={selected.amount}
                onChange={(amount) =>onChange({amount})}
                        onok={() => {}}/>
        </MyLayout>
    );
}

export default Money;