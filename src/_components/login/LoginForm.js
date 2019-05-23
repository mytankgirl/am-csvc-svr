import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "_asset/css/style.css";

const LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <div className="login_wrapper">
      <div className="login_container">
        <h1>Welcome H-GMS</h1>
        <form className="form">
          <Field
            component="input"
            className="basic"
            type="text"
            title="E-mail 주소를 입력하세요."
            placeholder="E-mail"
          />
          <input
            className="basic"
            type="password"
            title="비밀번호를 입력하세요."
            placeholder="Password"
          />
          <button type="submit" id="login-button" title="로그인">
            로그인
          </button>
          <div className="etc_area">
            <div className="alias_id">
              <input type="checkbox" id="AliasName" />
              <label for="AliasName" title="이메일 주소 저장">
                이메일 주소 저장
              </label>
              <ul className="find_area">
                <li>
                  <a href="" title="이메일 찾기">
                    이메일 찾기
                  </a>
                </li>
                <li>
                  <a href="" title="비밀번호 찾기">
                    비밀번호 찾기
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "login"
})(LoginForm);
