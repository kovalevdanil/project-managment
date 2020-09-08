import React from 'react';
import { Form, Input, Tooltip, DatePicker, Button, Tabs } from 'antd';
import 'antd/dist/antd.css';
import '../../styles/components/AuthForm.scss';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function AuthForm(props) {
  return (
    <div className="auth-form">
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Log In" key="1">
          <Form
            {...layout}
            name="auth"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
                { type: 'email' }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Log In
          </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="Registration" key="2">
          <Form
            {...layout}
            name="auth"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
                { type: 'email' }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="nickname"
              label={
                <span>
                  Username&nbsp;
            <Tooltip title="What do you want others to call you?">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Full Name"
              name="full-name"
              rules={[
                {
                  required: true,
                  message: 'Please input your full name!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item 
              name="date-picker" 
              label="Date of Birth" 
              rules={[
                {
                  type: 'object',
                  required: true,
                  message: 'Please select darw!',
                },
              ]}
            >
              <DatePicker format={'DD.MM.YYYY'}/>
            </Form.Item>

            <Form.Item name="comment" label="Comment about you">
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Confirm password"
              name="сonfirm-password"
              rules={[
                {
                  required: true,
                  message: 'Please сonfirm password!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Log In
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default AuthForm;