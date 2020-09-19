import React from "react";
import {useTags} from "useTags";
import {useParams} from 'react-router-dom'
import Layout from "Components/Layout";
import Icon from "Components/Icon";
import {Button} from "../Components/Button";
import styled from "styled-components";

type Params = {
    id: string
}

const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  line-height: 20px;
  align-items: center;  padding: 14px; background-color: white;
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
        <div>
            <label>
                <span>备注</span>
                <input type="text" placeholder='标签名'/>
            </label>
        </div>
        <div>
            <Button>删除标签</Button>
        </div>
        </Layout>
    )
}

export {Tag}