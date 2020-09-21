import Layout from "../Components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {NumSection} from "../Components/Money/NumSection";
import {NoteSection} from "../Components/Money/NoteSection";
import {CatSection} from "../Components/Money/CatSection";
import {TagsSection} from "../Components/Money/TagsSection";
import {useRecords} from "../Hooks/useRecords";

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
const CatSectionWrapper = styled.div`
 background: #c4c4c4;
`

type Catgory = '-' | '+'

const defaultFormData = {
    tagIds: [] as number[],
    note : '',
    category: '-' as Catgory,
    amount: 0
}


function Money() {
    const [selected,setSelected] = useState(defaultFormData)
    const onChange = (obj: Partial<typeof selected>) =>{
        setSelected({...selected, ...obj})
    }
    const {addRecord} = useRecords()
    const submit =() =>{
        if (addRecord(selected)){
            alert('保存成功')
            setSelected(defaultFormData)
        }
    }
    return (
        <MyLayout>
            <TagsSection value={selected.tagIds}
                onChange={tagIds => onChange({tagIds})}/>
            <NoteSection value={selected.note}
                onChange={note => onChange({note})}/>
            <CatSectionWrapper>
            <CatSection value={selected.category}
                onChange={category => onChange({category})}/>
            </CatSectionWrapper>
            <NumSection value={selected.amount}
                onChange={amount =>onChange({amount})}
                        onOk={submit}
            />
        </MyLayout>
    );
}

export default Money;