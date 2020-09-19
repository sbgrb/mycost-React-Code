import React from "react";
import {useTags} from "useTags";
import {useParams} from 'react-router-dom'
import Layout from "Components/Layout";
import Icon from "Components/Icon";
import {Button} from "../Components/Button";
import styled from "styled-components";
import {Input} from "../Components/Input";
import {Center} from "../Components/Center";

type Params = {
    id: string
}

const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  line-height: 20px;
  align-items: center;  padding: 14px; background-color: white;
`
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`
const Space = styled.div`
  height: 16px;
`

const Tag: React.FC = () => {
    const {findTag} = useTags()
    const {id} = useParams<Params>()
    const tag = findTag(parseInt(id))
    return(
        <Layout>
            <Topbar>
                <Icon name='left'/>
                <span>编辑标签</span>
                <Icon/>
            </Topbar>
        <InputWrapper>
            <Input label='标签名' type='text' placeholder='标签名' value={tag.name} />
        </InputWrapper>
        <Center>
            <Space/>
            <Space/>
            <Space/>
            <Button>删除标签</Button>
        </Center>
        </Layout>
    )
}

export {Tag}