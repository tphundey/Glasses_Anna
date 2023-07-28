import "./Signup.css"
const Signup = () => {
  return (
    <div className="container">
      <div className="container_signup">
      <div className="wrapper_signup">
        <div className="signin_left">
          <div className="img">
            <img src="../../../public/img/img_signup.jpg" alt="" />
          </div>
        </div>
        <div className="signin_right">
          <div className="title_signup">
            <h3>Đăng ký email</h3>
            <p>Hãy đăng ký để được hưởng nhiều đặc quyền riêng dành cho bạn</p>
          </div>
          <form action="" className="form_login">
            <div className="controll">
              <input type="text" placeholder="Họ và tên" />
            </div>
            <div className="controll">
              <input type="text" placeholder="Địa chỉ mail"/>
            </div>
            <div className="controll">
              <input type="text" placeholder="Mật Khẩu"/>
            </div>
            <p className="text_form">Thông tin của bạn sẽ được bảo mật theo chính sách riêng tư của chúng tôi</p>
            <button className="btn-signup">Đăng ký ngay</button>
            <br />
            <p style={{textAlign:"center" ,marginTop:"10px"}}>Hoặc</p>
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
            <p>Bạn đã có tài khoản ?</p>
            <a href="./signin" className="dangkingay">Đăng nhập ngay</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Signup;
