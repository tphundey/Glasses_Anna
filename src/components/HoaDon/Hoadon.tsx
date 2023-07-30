import "./Hoadon.css"

const Hoadon = () => {
  return (
    <div className="container">
        <div className="wrapper_hoadon">
            <div className="hoadon_top" style={{textAlign:"center"}}>
                <img src="../../../public/img/thankyou.png" alt="" /> <br />
                <br />
                <br />
                <h3>Cảm ơn ! Đơn hàng của bạn đã được đặt thành công</h3>
            </div>
            <hr />
            <div className="hoadon_info">
                <table>
                    <tr>
                        <th>PRODUCT</th>
                        <th>TOTAL</th>
                    </tr>
                    <tr>
                        <td>GK - 380CK076 x 1</td>
                        <td>342,000₫</td>
                    </tr>
                    <tr>
                        <td>Tổng số phụ:</td>
                        <td>342,000₫</td>
                    </tr>
                    <tr>
                        <td>Phương thức thanh toán:</td>
                        <td>Trả tiền mặt khi nhận hàng</td>
                    </tr>
                    <tr>
                        <td>Tổng cộng:</td>
                        <td>342,000₫</td>
                    </tr>
                    
                </table>
            </div>
        </div>
    </div>
  )
}

export default Hoadon