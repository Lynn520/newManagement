import React, { Component } from 'react'
import { Form, Input, Button, Select } from 'antd';
import styled, { withTheme } from 'styled-components';
const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
const ReportFilterStyled = styled.div`
    .ant-form-item-label > label{
        color: #fff;
    }
    
    .ant-input{
        color: #fff;
        border-radius: 100px;
        background: none;

    }
    .ant-select-selector,.ant-select-single:not(.ant-select-customize-input) .ant-select-selector{
        width: 300px;
        color: #fff;
        border-radius: 100px;
        background: none;
    }
`
class ReportFilter extends Component {
    formRef = React.createRef();

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

    render() {
        return (
            <ReportFilterStyled>
                <Form ref={this.formRef} name="control-ref" onFinish={this.onFinish} layout='inline'>
                    <Form.Item name="note" label="" rules={[{ required: false }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="note" label="" rules={[{ required: false }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="note" label="" rules={[{ required: false }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="companyName" label="行业" rules={[{ required: false }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="name" label="企业名称" rules={[{ required: false }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="role" label="预警时间" rules={[{ required: false }]}>
                        <Select
                            placeholder="Select a option and change input text above"
                            onChange={this.onGenderChange}
                            allowClear
                        >
                            <Option value="male">管理员1</Option>
                            <Option value="female">管理员2</Option>
                            <Option value="other">管理员3</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="state" label="级别" rules={[{ required: false }]}>
                        <Select
                            placeholder="Select a option and change input text above"
                            onChange={this.onGenderChange}
                            allowClear
                        >
                            <Option value="male">有效</Option>
                            <Option value="female">无效</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                    >
                        {({ getFieldValue }) => {
                            return getFieldValue('gender') === 'other' ? (
                                <Form.Item
                                    name="customizeGender"
                                    label="Customize Gender"
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            ) : null;
                        }}
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                        <Button htmlType="button" onClick={this.onReset}>
                            清空
                        </Button>

                    </Form.Item>
                </Form>
            </ReportFilterStyled>
        );
    }
}

export default ReportFilter