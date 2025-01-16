import React from "react";
import { Button, Checkbox, message, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './login.scss';

const LoginPage = () => {
    const navigate = useNavigate();
    const errorMessages = [
        "账户或密码错误，重新尝试吧。",
        "别再试了，你的密码就是不对。",
        "这是最后一次机会，别让我失望。",
        "密码错了，你能不能认真点。",
        "再错一次就真的没机会了。",
        "你是不是忘记密码了？",
        "重新输入，给你最后一次机会。",
        "你就不能记得密码吗？",
        "我劝你放弃，输入正确密码吧。",
        "密码错误，不是开玩笑。",
        "错了，不要再试第二次了。",
        "你就不能用点心？",
        "你已经错了好几次，是不是不想登录了？",
        "不管怎么试，都不能逃过这一关。",
        "不对，重新输入。",
        "这个密码你确定没错？",
        "不要再浪费时间了，输入正确密码吧。",
        "还有机会，但最后一次了。",
        "当心，机会已经不多了。",
        "继续错误，账户会被锁定！"
    ];
    /** 提交 */
    const handleLogin = (values) => {
        console.log('values', values)
        if(values.accout === '123' && values.password === '321') {
            message.open({
                type: 'success',
                content: '欢迎主人回来',
                duration: 3,
            });
            /** 跳转到列表 */
            navigate('/list');
        } else {
            const randomIndex = Math.floor(Math.random() * errorMessages.length);
            message.open({
                type: 'error',
                content: errorMessages[randomIndex],
                duration: 3,
            });
        }
    };


    /**按钮 */
    const ErrorTip = () => {
        message.open({
            type: 'error',
            content: '滚犊子',
            duration: 3,
        });
    };

    return (
        <div className="login-box">
            <div className="title-box">
                {
                    "TODO LIST".split('').map((item, index) => {
                        return <div className="title-item" key={index}>{item}</div>;
                    })
                }
            </div>
            {/* desc */}
            <div className="desc-box">
                {
                    "帮主的小本本，为便捷而生".split('').map((item, index) => {
                        return <div className="desc-item" key={index}>{item}</div>;
                    })
                }
            </div>

            <Form name="normal_login" className="login-form" onFinish={handleLogin} >
                {/* 账号 */}
                <Form.Item label="暗号" name="accout" rules={[{ required: true,  message: '你是骗子吧？出门左拐，缩成球，滚蛋' }]}>
                    <Input placeholder="还记得那天你对我说的话嘛？"/>
                </Form.Item>

                {/* 密码 */}
                <Form.Item  label="解药" name="password" rules={[{ required: true, message: '你一定是不爱我了，解药都不知道吗？' }]}>
                    <Input.Password placeholder="怕不怕再也离不开我？" />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" label={null}>
                    <Checkbox>记住密码？无所谓，反正下次还要输入</Checkbox>
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        小指一敲，就知道是敌是友
                    </Button>
                    <Button onClick={ErrorTip} className="m-l-10">
                        你干点我，我就敢骂你
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;
