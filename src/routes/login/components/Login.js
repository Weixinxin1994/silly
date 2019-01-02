import React, { Component } from 'react';
import { Row, Col, Form, Input, Button, Icon, Select } from 'antd';
import loginTopImg from '../assets/login-top.png';
import loginButtomImg from '../assets/login-buttom.png';
import '../login.css';
const FormItem = Form.Item;
class Login extends Component {

    constructor(props) {
        super(props);
        console.log(this)
        this.state = {
            username: '',
            password: ''
        }
    }

    //Input user name
    _usernameOnChangeEvent = (e) => {
        let value = e.target.value;
        this.setState({
            username: value,
            loginStatus: false
        });
    };
    _passwordOnChangeEvent = (e) => {
        this.setState({
            password: e.target.value,
            loginStatus: false
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={'login-main'}>
                {/*background*/}
                <img className={'login-top-bg'} src={loginTopImg} />
                <img className={'login-bottom-bg'} src={loginButtomImg} />
                {/*background end*/}

                {/*form*/}
                <div className={'login-content'}>
                    <i className={'login-logo'}></i>

                    <Form className="login-form">
                        <FormItem className="login-form-item">
                            {getFieldDecorator('username', {})(
                                <Input maxLength="30" autoComplete="off" onChange={(e) => { this._usernameOnChangeEvent(e) }} onPressEnter={() => { this._onLoginClickEvent() }} className="login-input" placeholder={'账号'} />
                            )}
                        </FormItem>
                        <FormItem className="login-form-item">
                            {getFieldDecorator('password', {})(
                                <Input maxLength="30" autoComplete="off" onChange={(e) => { this._passwordOnChangeEvent(e) }} onPressEnter={() => { this._onLoginClickEvent() }} className="login-input" type="password" placeholder={'密码'} />
                            )}
                        </FormItem>
                        <FormItem className="login-button-item">
                            {
                                this.state.loginErrMsg === ''
                                    ?
                                    null
                                    :
                                    <p className="errMsg">{this.state.loginErrMsg}</p>
                            }
                            <div className="login-button" onClick={() => { this._onLoginClickEvent() }}>
                                {
                                    this.state.loginStatus
                                        ?
                                        <span>
                                            <Icon type="loading" style={{ fontSize: 16, color: '#fff' }} />登录中...
                        </span>
                                        :
                                        <span>登录</span>
                                }
                            </div>
                        </FormItem>
                    </Form>
                </div>
                {/*form end*/}
            </div>
        );
    }
}
export default Form.create()(Login);