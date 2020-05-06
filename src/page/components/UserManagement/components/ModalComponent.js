import React, { Component } from 'react'
import { Form, Input, Button, Select, Modal, Checkbox, Row, Col, Radio, } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class ModalComponent extends Component {
    formRef = React.createRef();
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        value: 1,
    };

    onGenderChange = value => {
        this.formRef.current.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };

    onFinish = values => {
        console.log(values);
    };

    onReset = () => {
        this.formRef.current.resetFields();
    };

    onFill = () => {
        this.formRef.current.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
        });
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
    onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    }
    radioOnChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        const { visible, confirmLoading, ModalText, value } = this.state
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <div>
                <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                    <p>基础信息</p>
                    <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="account" label="账号" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="phoneNum" label="联系电话" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label="邮箱" rules={[{ required: false }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="organization" label="所属机构" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select a option and change input text above"
                            onChange={this.onGenderChange}
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="password" label="登录密码" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="asurePassword" label="确认密码" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <p>权限配置</p>
                    <Form.Item name="role" label="关联角色" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select a option and change input text above"
                            onChange={this.onGenderChange}
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="addPrivilege" label="追加权限" >
                        <Button type="primary" onClick={this.showModal}>
                            <PlusOutlined />
                        </Button>
                    </Form.Item>
                    <Form.Item name="dataPrivilege" label="数据权限" rules={[{ required: true }]}>
                        <p>企业数据自动与管理机构关联</p>
                        <Radio.Group onChange={this.radioOnChange} value={value}>
                            <Radio style={radioStyle} value={1}>
                            所在机构及下级机构
                            </Radio>
                            <Radio style={radioStyle} value={2}>
                            所在机构
                            </Radio>
                            <Radio style={radioStyle} value={3}>
                            指定机构
                            </Radio>

                        </Radio.Group>
                    </Form.Item>
                    
                </Form>
                <Modal
                    title="追加权限"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <Checkbox.Group style={{ width: '100%' }} onChange={this.onChange}>
                        <Row>
                            <Col span={4}>
                                <span>信息总览</span>
                            </Col>
                            <Col span={4}>
                                <Checkbox value="A">查看</Checkbox>
                            </Col>


                        </Row>
                        <Row>
                            <Col span={4}>
                                <span>角色管理</span>
                            </Col>

                            <Col span={4}>
                                <Checkbox value="A">查看</Checkbox>
                            </Col>
                            <Col span={4}>
                                <Checkbox value="B">添加</Checkbox>
                            </Col>
                            <Col span={4}>
                                <Checkbox value="C">编辑</Checkbox>
                            </Col>
                            <Col span={4}>
                                <Checkbox value="D">删除</Checkbox>
                            </Col>
                            <Col span={4}>
                                <Checkbox value="E">停用/启用</Checkbox>
                            </Col>

                        </Row>
                    </Checkbox.Group>
                </Modal>
            </div>
        );
    }
}

export default ModalComponent