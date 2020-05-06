import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'
const LoadingStyled = styled.div`
position:relative;
width:100%;
z-index:999;
    .ant-spin{
        position:absolute;
        left:50%;
        top:30px;
        transform:translate(-50%,0);
    }
`
export default ({ loading, size = 'large' }) => {
    return <LoadingStyled>
        <Spin spinning = { loading } size = { size } />
    </LoadingStyled>
}