const initialState = [
    {
        id: 'dienAnh',
        countRow: 1,
        listNews: [
            {
                id: 'news1',
                arrayItemNews: [
                    {
                        img: 'images/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056938333773.jpg',
                        title: '“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành',
                        description: 'Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360 Giải Phóng!',
                        like: 0,
                        comment: 1,
                    },
                    {
                        img: 'images/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png',
                        title: 'Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu',
                        description: 'Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng của tác phẩm.',
                        like: 2,
                        comment: 1
                    },
                    {
                        img: 'images/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg',
                        title: 'NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN',
                        description: 'Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng VINAMAN với tổng',
                        like: 2,
                        comment: 0
                    },
                    {
                        img: 'images/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png',
                        title: '[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng',
                        description: 'Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác hẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante',
                        like: 1,
                        comment: 1
                    },
                    [
                        {
                            img: 'images/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png',
                            title: 'Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch'
                        },
                        {
                            img: 'images/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503793246.png',
                            title: 'Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan'
                        },
                        {
                            img: 'images/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png',
                            title: "Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn"
                        },
                        {
                            img: 'images/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png',
                            title: '6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood'
                        }
                    ]
                ]
            },
            {
                id: 'news2',
                arrayItemNews: [
                    {
                        img: 'images/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049872311.jpg',
                        title: '[Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm động của Khả Như và Kiều Minh Tuấn',
                        description: 'Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.',
                        like: 2,
                        comment: 0,
                    },
                    {
                        img: 'images/review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than-15832047938817.jpg',
                        title: '[Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân',
                        description: 'Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và cảm xúc về tình cảm gia đình.',
                        like: 1,
                        comment: 0
                    },
                    {
                        img: 'images/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio-15959331487131.png',
                        title: '5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ Pinocchio',
                        description: 'Không chỉ chuyển tải được giá trị của tác phẩm gốc, “Cậu Bé Người Gỗ Pinocchio” của năm 2020 còn thành công chinh phục thế hệ khán giả hiện đại với một trải nghiệm điện ảnh đầy sắc màu nhưng cũng vô cùng mới lạ. Cùng điểm qua 5 lý do khiến bộ phim đặc biệt đến vậy nhé!',
                        like: 0,
                        comment: 0
                    },
                    {
                        img: 'images/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png',
                        title: 'TENET công bố ngày khởi chiếu chính thức tại Việt Nam',
                        description: 'Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.',
                        like: 1,
                        comment: 1
                    },
                    [
                        {
                            img: 'images/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943684395106.jpg',
                            title: 'Khi phụ nữ không còn ở thế trốn chạy của nạn nhân'
                        },
                        {
                            img: 'images/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937527518432.png',
                            title: 'Gerard Butler cùng bồ cũ Deadpool tham gia Greenland'
                        },
                        {
                            img: 'images/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png',
                            title: "Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn"
                        },
                        {
                            img: 'images/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png',
                            title: '6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood'
                        }
                    ]
                ]
            },
            {
                id: 'news3',
                arrayItemNews: [
                    {
                        img: 'images/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio-15959331487131.png',
                        title: '[Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm động của Khả Như và Kiều Minh Tuấn',
                        description: 'Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.',
                        like: 2,
                        comment: 0,
                    },
                    {
                        img: 'images/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png',
                        title: '[Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân',
                        description: 'Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và cảm xúc về tình cảm gia đình.',
                        like: 1,
                        comment: 0
                    },
                    {
                        img: 'images/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg',
                        title: '5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ Pinocchio',
                        description: 'Không chỉ chuyển tải được giá trị của tác phẩm gốc, “Cậu Bé Người Gỗ Pinocchio” của năm 2020 còn thành công chinh phục thế hệ khán giả hiện đại với một trải nghiệm điện ảnh đầy sắc màu nhưng cũng vô cùng mới lạ. Cùng điểm qua 5 lý do khiến bộ phim đặc biệt đến vậy nhé!',
                        like: 0,
                        comment: 0
                    },
                    {
                        img: 'images/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png',
                        title: 'TENET công bố ngày khởi chiếu chính thức tại Việt Nam',
                        description: 'Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.',
                        like: 1,
                        comment: 1
                    },
                    [
                        {
                            img: 'images/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943684395106.jpg',
                            title: 'Khi phụ nữ không còn ở thế trốn chạy của nạn nhân'
                        },
                        {
                            img: 'images/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937527518432.png',
                            title: 'Gerard Butler cùng bồ cũ Deadpool tham gia Greenland'
                        },
                        {
                            img: 'images/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png',
                            title: "Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn"
                        },
                        {
                            img: 'images/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png',
                            title: '6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood'
                        }
                    ]
                ]
            }
        ]
    },
    {
        id: 'review',
        countRow: 1,
        listNews: [
            {
                id: 'news1',
                arrayItemNews: [
                    {
                        img: 'images/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png',
                        title: 'Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết',
                        description: 'ểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám',
                        like: 0,
                        comment: 3,
                    },
                    {
                        img: 'images/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png',
                        title: 'Review: Dinh Thự Oan Khuất (Ghost Of War)',
                        description: 'Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!',
                        like: 1,
                        comment: 1
                    },
                    {
                        img: 'images/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png',
                        title: '‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh',
                        description: 'Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng VINAMAN với tổng',
                        like: 2,
                        comment: 0
                    },
                    {
                        img: 'images/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png',
                        title: '[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng',
                        description: 'Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác hẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante',
                        like: 2,
                        comment: 1
                    },
                    [
                        {
                            img: 'images/review-spider-man-into-the-spider-vesre-15886520889426.png',
                            title: 'Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch'
                        },
                        {
                            img: 'images/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg',
                            title: 'Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan'
                        },
                        {
                            img: 'images/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png',
                            title: "Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn"
                        },
                        {
                            img: 'images/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png',
                            title: '6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood'
                        }
                    ]
                ]
            },
            {
                id: 'news2',
                arrayItemNews: [
                    {
                        img: 'images/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049872311.jpg',
                        title: '[Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm động của Khả Như và Kiều Minh Tuấn',
                        description: 'Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.',
                        like: 2,
                        comment: 0,
                    },
                    {
                        img: 'images/review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than-15832047938817.jpg',
                        title: '[Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân',
                        description: 'Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và cảm xúc về tình cảm gia đình.',
                        like: 1,
                        comment: 0
                    },
                    {
                        img: 'images/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio-15959331487131.png',
                        title: '5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ Pinocchio',
                        description: 'Không chỉ chuyển tải được giá trị của tác phẩm gốc, “Cậu Bé Người Gỗ Pinocchio” của năm 2020 còn thành công chinh phục thế hệ khán giả hiện đại với một trải nghiệm điện ảnh đầy sắc màu nhưng cũng vô cùng mới lạ. Cùng điểm qua 5 lý do khiến bộ phim đặc biệt đến vậy nhé!',
                        like: 0,
                        comment: 0
                    },
                    {
                        img: 'images/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png',
                        title: 'TENET công bố ngày khởi chiếu chính thức tại Việt Nam',
                        description: 'Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.',
                        like: 1,
                        comment: 1
                    },
                    [
                        {
                            img: 'images/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943684395106.jpg',
                            title: 'Khi phụ nữ không còn ở thế trốn chạy của nạn nhân'
                        },
                        {
                            img: 'images/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937527518432.png',
                            title: 'Gerard Butler cùng bồ cũ Deadpool tham gia Greenland'
                        },
                        {
                            img: 'images/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png',
                            title: "Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn"
                        },
                        {
                            img: 'images/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png',
                            title: '6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood'
                        }
                    ]
                ]
            },
            {
                id: 'news3',
                arrayItemNews: [
                    {
                        img: 'images/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio-15959331487131.png',
                        title: '[Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm động của Khả Như và Kiều Minh Tuấn',
                        description: 'Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.',
                        like: 2,
                        comment: 0,
                    },
                    {
                        img: 'images/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png',
                        title: '[Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân',
                        description: 'Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và cảm xúc về tình cảm gia đình.',
                        like: 1,
                        comment: 0
                    },
                    {
                        img: 'images/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg',
                        title: '5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ Pinocchio',
                        description: 'Không chỉ chuyển tải được giá trị của tác phẩm gốc, “Cậu Bé Người Gỗ Pinocchio” của năm 2020 còn thành công chinh phục thế hệ khán giả hiện đại với một trải nghiệm điện ảnh đầy sắc màu nhưng cũng vô cùng mới lạ. Cùng điểm qua 5 lý do khiến bộ phim đặc biệt đến vậy nhé!',
                        like: 0,
                        comment: 0
                    },
                    {
                        img: 'images/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png',
                        title: 'TENET công bố ngày khởi chiếu chính thức tại Việt Nam',
                        description: 'Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.',
                        like: 1,
                        comment: 1
                    },
                    [
                        {
                            img: 'images/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943684395106.jpg',
                            title: 'Khi phụ nữ không còn ở thế trốn chạy của nạn nhân'
                        },
                        {
                            img: 'images/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937527518432.png',
                            title: 'Gerard Butler cùng bồ cũ Deadpool tham gia Greenland'
                        },
                        {
                            img: 'images/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png',
                            title: "Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn"
                        },
                        {
                            img: 'images/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png',
                            title: '6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood'
                        }
                    ]
                ]
            }
        ]
    },
    {
        id: 'khuyenMai',
        countRow: 1,
        listNews: [
            {
                id: 'news1',
                arrayItemNews: [
                    {
                        img: 'images/bhd-59k-ve-ca-tuan-16088081864967.jpg',
                        title: 'BHD 59K/VÉ CẢ TUẦN !!!',
                        description: 'Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.',
                        like: 3,
                        comment: 1,
                    },
                    {
                        img: 'images/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg',
                        title: 'TIX 1K/VÉ NGẠI CHI GIÁ VÉ',
                        description: 'Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga',
                        like: 2,
                        comment: 2
                    },
                    {
                        img: 'images/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png',
                        title: '‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh',
                        description: 'Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng VINAMAN với tổng',
                        like: 2,
                        comment: 0
                    },
                    {
                        img: 'images/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg',
                        title: '[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng',
                        description: 'Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác hẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante',
                        like: 1,
                        comment: 1
                    },
                    [
                        {
                            img: 'images/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png',
                            title: 'Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch'
                        },
                        {
                            img: 'images/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg',
                            title: 'Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan'
                        },
                        {
                            img: 'images/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg',
                            title: "Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn"
                        },
                        {
                            img: 'images/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg',
                            title: '6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood'
                        }
                    ]
                ]
            },
            {
                id: 'news2',
                arrayItemNews: [
                    {
                        img: 'images/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio-15959331487131.png',
                        title: '[Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm động của Khả Như và Kiều Minh Tuấn',
                        description: 'Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.',
                        like: 2,
                        comment: 0,
                    },
                    {
                        img: 'images/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043752411629.png',
                        title: '[Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân',
                        description: 'Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và cảm xúc về tình cảm gia đình.',
                        like: 1,
                        comment: 0
                    },
                    {
                        img: 'images/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041597587981.jpg',
                        title: '5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ Pinocchio',
                        description: 'Không chỉ chuyển tải được giá trị của tác phẩm gốc, “Cậu Bé Người Gỗ Pinocchio” của năm 2020 còn thành công chinh phục thế hệ khán giả hiện đại với một trải nghiệm điện ảnh đầy sắc màu nhưng cũng vô cùng mới lạ. Cùng điểm qua 5 lý do khiến bộ phim đặc biệt đến vậy nhé!',
                        like: 0,
                        comment: 0
                    },
                    {
                        img: 'images/tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam-15959320391357.png',
                        title: 'TENET công bố ngày khởi chiếu chính thức tại Việt Nam',
                        description: 'Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường bên ngoài Bắc Mỹ, trong đó có Việt Nam.',
                        like: 1,
                        comment: 1
                    },
                    [
                        {
                            img: 'images/khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan-15943684395106.jpg',
                            title: 'Khi phụ nữ không còn ở thế trốn chạy của nạn nhân'
                        },
                        {
                            img: 'images/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937527518432.png',
                            title: 'Gerard Butler cùng bồ cũ Deadpool tham gia Greenland'
                        },
                        {
                            img: 'images/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122262210.png',
                            title: "Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn"
                        },
                        {
                            img: 'images/6-da-o-die-n-ti-do-lam-nen-thanh-cong-cua-nhu-ng-bom-ta-n-di-nh-da-m-nha-t-hollywood-15966023547553.png',
                            title: '6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood'
                        }
                    ]
                ]
            },
            {
                id: 'news3',
                arrayItemNews: [
                    {
                        img: 'images/bhd-59k-ve-ca-tuan-16088081864967.jpg',
                        title: 'BHD 59K/VÉ CẢ TUẦN !!!',
                        description: 'Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.',
                        like: 3,
                        comment: 1,
                    },
                    {
                        img: 'images/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg',
                        title: 'TIX 1K/VÉ NGẠI CHI GIÁ VÉ',
                        description: 'Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga',
                        like: 2,
                        comment: 2
                    },
                    {
                        img: 'images/dong-gia-1k-ve-khi-mua-ve-qua-tix-16010092946804.png',
                        title: '‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh',
                        description: 'Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng VINAMAN với tổng',
                        like: 2,
                        comment: 0
                    },
                    {
                        img: 'images/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg',
                        title: '[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng',
                        description: 'Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác hẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante',
                        like: 1,
                        comment: 1
                    },
                    [
                        {
                            img: 'images/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889408112010.png',
                            title: 'Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch'
                        },
                        {
                            img: 'images/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746757294099.jpg',
                            title: 'Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan'
                        },
                        {
                            img: 'images/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439018211.jpg',
                            title: "Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn"
                        },
                        {
                            img: 'images/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg',
                            title: '6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood'
                        }
                    ]
                ]
            }
        ]
    }
]
const newsReducer = (state = initialState, action) => {
    const { type, payload, more } = action;
    switch (type) {
        case "READ_MORE":
            if (more) {
                const data = payload;
                // có nút xem thêm tức là countRow < 3
                document.getElementById(
                    `${data.id}-${data.listNews[data.countRow].id}`
                ).style.display = "flex";
                data.countRow++;
            }

            else {
                // collapse
                const data = payload;
                while (data.countRow > 1) {
                    data.countRow--;
                    document.getElementById(
                        `${data.id}-${data.listNews[data.countRow].id}`
                    ).style.display = "none";
                }



            }
            return [...state];
        default: return [...state];


    }

}
export default newsReducer;