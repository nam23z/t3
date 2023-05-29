import { styled } from "styled-components";
import PicLogIn from "assets/image/PicLogin.svg";
import Logo from "component/Logo";
import Button from "component/Button";
import { ReactComponent as ToggleEyes } from "assets/image/toggleEyes.svg";
import { ReactComponent as Google } from "assets/image/Google.svg";
import { ReactComponent as Github } from "assets/image/Github.svg";
import { ReactComponent as Facebook } from "assets/image/Facebook.svg";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
const StyledLogIn = styled.div`
  background-image: linear-gradient(90deg, #ffffff 0%, #bbaaff 100%);
  width: 100%;
  height: 100vh;
  font-family: "Poppins";
  .imgRight {
    float: right;
    width: 854px;
    height: 100vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const StyledFormLog = styled.div`
  width: 480px;
  display: inline-block;
  margin-top: 258px;
  margin-left: 238px;
  h1 {
    margin-top: 0;
    font-size: 56px;
    font-family: "Poppins";
    line-height: 84px;
    margin-bottom: 20px;
  }
  label {
    display: inline-block;
    font-size: 16px;
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    height: 46px;
    background-color: rgba(187, 170, 255, 0.5);
  }
  p {
    display: inline-block;
  }
  a {
    font-size: 14px;
    display: inline-block;
  }
  .lb1 {
    width: 100%;
  }
  .lb2 {
    width: 69%;
  }
  .showpw {
    position: relative;
  }
  .spw {
    cursor: pointer;
    position: absolute;
    right: 4%;
    top: 31%;
  }
  .btnLog {
    width: 480px;
    text-align: center;
    margin-top: 46px;
  }
  .loginDif {
    text-align: center;
    p {
      color: #5429ff;
    }
  }
  .lgdf {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .gg {
    cursor: pointer;
    width: 126px;
    border-radius: 40px;
    border: 1px solid #5429ff;
    padding: 12px 0 8px 0;
  }
  .signup {
    text-align: center;
    p {
      padding-right: 15px;
    }
    a {
      text-decoration: none;
      color: #5429ff;
    }
  }
`;

const onSubmit = async values => {
    if (values.username !== 'congnam') {
      return { username: 'Unknown username' }
    }
    if (values.password !== 'finalform') {
      return { [FORM_ERROR]: 'Login Failed' }
    }
    window.alert('LOGIN SUCCESS!')
  }

const LogIn = () => {
  return (
    <StyledLogIn>
      <StyledFormLog>
        <Logo className="lg"></Logo>
        <h1>Log In</h1>
        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Required";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          render={({
            submitError,
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
          }) => (
            <form onSubmit={handleSubmit}>
              <Field name="username">
                {({ input, meta }) => (
                  <div>
                    <label for="Username" className="lb1">
                      Username
                    </label>
                    <input
                      {...input}
                      type="text"
                      name="username"
                      placeholder="Username"
                    />
                    {(meta.error || meta.submitError) && meta.touched && (
                      <span>{meta.error || meta.submitError}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <label for="Password" className="lb2">
                      Password
                    </label>
                    <p>Forgot Password?</p>
                    <div className="showpw">
                      <div className="spw" onclick="tog()">
                        <ToggleEyes></ToggleEyes>
                      </div>
                      <input
                        {...input}
                        type="password"
                        placeholder="Password"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  </div>
                )}
              </Field>
              {submitError && <div className="error">{submitError}</div>}
              <div className="btnLog">
                <Button
                  type="submit"
                  bgColor={"#5429FF"}
                  textColor={"#FFFFFF"}
                  fontFami={"DM Sans"}
                  fontSize={"16px"}
                  width={"126px"}
                  height={"37px"}
                  disabled={submitting}
                >
                  Login
                </Button>
              </div>
              {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            </form>
          )}
        />
        <div className="loginDif">
          <p>or continue with</p>
          <div className="lgdf">
            <div className="gg">
              <Google></Google>
            </div>
            <div className="gg">
              <Github></Github>
            </div>
            <div className="gg">
              <Facebook></Facebook>
            </div>
          </div>
        </div>
        <div className="signup">
          <p>Don't have an account yet?</p>
          <a href="/" className="sup">
            Sign up for free
          </a>
        </div>
      </StyledFormLog>
      <div className="imgRight">
        <img src={PicLogIn} alt="PictureLogin" />
      </div>
    </StyledLogIn>
  );
};

export default LogIn;
