import './asideadmin.css'

const Aside = () => {
  return (
    <div>
      <div className="aside"><br />
        <div className="qlsp-text"><img src="https://cdn.icon-icons.com/icons2/259/PNG/96/ic_dashboard_128_28270.png" alt="" />Dashboard</div>
        <div className="qlsp">
        <br />
          <span>QUẢN LÝ</span>
          <ul>
            <li><a href="/admin">Quản lý sản phẩm</a></li>
            <li><a href="/admin/category">Quản lý danh mục</a></li>
            <li><a href="/admin/user">Quản lý người dùng</a></li>
            <li><a href="/admin/donhang">Quản lý đơn hàng</a></li>
          </ul>
          <br />
          <span>THỐNG KÊ</span>
          <ul>
            <li><a href="">Thống kê đơn hàng</a></li>
            <li><a href="">Thống kê doanh thu</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aside