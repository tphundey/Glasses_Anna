import "./Signin.css"
const Signin = () => {
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
            <input type="radio" name="" id="" /> Lưu tài khoản <br />
            <button className="btn-signin">Đăng nhập</button>
            <br />
            <a href="" className="quen_pass">Quên mật khẩu</a>
            <br />
            <button className="signin_facebook">
              <div className="icon"></div>
              <div className="text">Đăng nhập bằng facebook</div>
            </button>
            <br />
            <button className="signin_google">
              <div className="icon"></div>
              <div className="text">Đăng nhập bằng Google</div>
            </button>
          </form>
          <div className="signin_left-bottom">
            <p>Bạn chưa có tài khoản</p>
            <a href="./signup" className="dangkingay">Đăng kí ngay</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
