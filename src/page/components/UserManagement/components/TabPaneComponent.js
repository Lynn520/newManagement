import React, { Component } from 'react';
import { Layout, Button, Modal, } from 'antd';
import styled, { withTheme } from 'styled-components';
import ModalComponent from './ModalComponent'
import UserManagementTable from './UserManagementTable'
import SearchComponent from './SearchComponent'
import { PlusCircleOutlined, EllipsisOutlined, } from '@ant-design/icons';

const TabPaneComponentStyled = styled.div`
    .addBtnDiv{
        border-bottom: 1px solid #454DA8;
    }
    .addBtn{
        margin-bottom: 20px;
        width: 160px;
        height: 64px;
        border: 0;
        box-shadow: none;
        background: none;
        img{
            margin-right: 20px;
        }
    }
    .searchTableBox{
        margin: 0 auto;
        width: 88%;
    }
    .titleBox{
        margin-bottom: 20px;
    }
    .ant-modal-content{
        border: 1px solid #99CCFF;
        box-shadow: inset 0px 0px 10px 10px rgba(33,64,208,0.25);
        background: rgba(14,25,43,0.8)
    }
`

class TabPaneComponent extends Component {
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };

    render() {
        const { theme, userListDispatch, } = this.props
        const { visible, confirmLoading, ModalText } = this.state
        return (
            <TabPaneComponentStyled>
                <div className={`titleBox`}>
                    <div className='addBtnDiv'>
                        <p>添加新用户</p>
                        <Button className="addBtn" type="primary" onClick={this.showModal}>
                            <img src={theme.images.addBtn} />
                            <img src={theme.images.addBtnEllipse} />
                            {/** 
                            <PlusCircleOutlined />
                            <EllipsisOutlined />
                            */}
                        </Button>
                        <Modal
                            className="userManagementModal"
                            title="添加用户"
                            visible={visible}
                            onOk={this.handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={this.handleCancel}
                        >
                            <ModalComponent />
                        </Modal>


                    </div>
                </div>
                <div className="searchTableBox">
                    <SearchComponent />
                    <UserManagementTable userListDispatch={userListDispatch}/>
                </div>

            </TabPaneComponentStyled>
        )
    }
}

export default TabPaneComponent