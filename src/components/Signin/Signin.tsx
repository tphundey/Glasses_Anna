import "./Signin.css"
import { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const clientId = "617522400337-v8petg67tn301qkocslk6or3j9c4jjmn.apps.googleusercontent.com"

const Signin = () => {

  const navigate = useNavigate();
  const onSuccess = (res: any) => {
    console.log("Login Success", res.profileObj);
    localStorage.setItem('isLoggedIn', 'true');
    toast.success('Đăng nhập thành công!', {
      className: 'thongbaothanhcong',
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000, // Thời gian tự động biến mất sau 3 giây
    });

    setTimeout(() => {
      navigate('/')
      location.reload()
    }, 3000);

  }

  const onFailure = (res: any) => {
    console.log("Login Fail", res);
    alert('Không thành công')
  }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  })
  
  return (
    <div className="container_signin">
      <div className="wrapper_signin">
        <div className="signin_left">
          <div className="img">
            <img src="../../../public/img/img_signin.jpg" alt="" />
          </div>
        </div>
        <div className="signin_right">
          <div className="title_signin">
            <h3>Đăng nhập</h3>
            <p>Hãy đăng nhập để được hưởng đặc quyền riêng dành cho bạn</p>
          </div>
          <form action="" className="form_login">
            <div className="controll">
              <label className="tk_pas">TÀI KHOẢN *</label> <br />
              <input type="text" />
            </div>
            <div className="controll">
              <label className="tk_pas">MẬT KHẨU *</label> <br />
              <input type="text" />
            </div>
            <div className="luu">
              <input type="radio" name="" id="" />
              <div className="text_luu">
                Lưu tài khoản
              </div> <br />
            </div>
            <button className="btn-signin">Đăng nhập</button>
            <br />
            <div className="passs">

              <a href="" className="quen_pass">Quên mật khẩu</a>
            </div>
            <br />
            <button className="signin_facebook">
              <div className="icon"></div>
              <div className="text">Đăng nhập bằng facebook</div>
            </button>
            <br />
            <button className="signin_google">
              <div className="icon"></div>
              <GoogleLogin
                clientId={clientId} // Thay thế YOUR_GOOGLE_CLIENT_ID bằng Client ID của bạn
                buttonText="Đăng nhập bằng Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />

            </button>
          </form>
          <div className="signin_left-bottom">
            <p>Bạn chưa có tài khoản</p>
            <a href="./signup" className="dangkingay">Đăng kí ngay</a>
          </div>
        </div>
      </div>
      {/* Component ToastContainer để hiển thị thông báo */}
      <ToastContainer />
    </div>
  );
};

export default Signin;
