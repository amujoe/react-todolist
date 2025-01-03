import React from "react";

const LoginPage = () => {

    const handleLogin = () => {
        window.location.href = "/list";
    };

    return (
        <div>
        <h1>登录页面</h1>
        <button onClick={handleLogin}>登录</button>
        </div>
    );
};

export default LoginPage;
