import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="banquyen">
                    <h3>BẢN QUYỀN</h3>
                    <div>
                        NgườiYêuĐẹp.com © 2019               <br />
                        Điều khoản sử dụng <br />
                        Một dự án của <br />
                        <img src="https://giaitridep.com/logos/giaitridep-logo.png" alt="logo" />
                    </div>
                </div>
                <div className="chungtoi">
                    <h3>CHÚNG TÔI</h3>
                    <div>
                        Người Yêu Đẹp đang xây dựng đội ngũ PG/PB hẹn hò!<br />
                        Người Yêu Đẹp tiếp tục xây dựng đội ngũ ứng viên trẻ, năng động, yêu nghề và hiểu nghề. 
                        Đội ngũ Người Yêu Đẹp luôn lắng nghe, cảm thông, và chia sẻ mọi vấn đề trong cuộc sống với khách hàng của mình.&nbsp;
                    </div>
                </div>
                <div className="xemthem">
                    <h3>XEM THÊM TRÊN</h3>
                    <div>
                        {/* <i class="fab fa-facebook"></i> */}
                        <i class="fad fa-webcam"></i>
                    </div>
                    <div>
                        <img src="https://nguoiyeudep.com/sites/default/files/default_images/googleplay.png" alt="ggplay" />
                        <img src="https://nguoiyeudep.com/sites/default/files/default_images/applestore.png" alt="aaple" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;