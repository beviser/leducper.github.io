# LDP TOOLS - Bot Hỗ Trợ Game

Một web bot hỗ trợ share file, tăng nhạy, và hỗ trợ kéo tâm game Free Fire.

## 🎮 Tính Năng Chính

### 1. **Hệ Thống Đăng Nhập/Đăng Ký**
- Giao diện glass morphism với hiệu ứng ánh sáng chạy
- Đăng ký tài khoản mới
- Đăng nhập với tài khoản hiện có
- Tài khoản admin mặc định: `bevis` / `leduc`

### 2. **Loại Tài Khoản**
- **Admin**: Có quyền truy cập tất cả chức năng, quản lý website
- **Member**: Người dùng đã mua key member
- **User**: Người dùng bình thường

### 3. **Quản Lý Tài Khoản**
- Xem thông tin tài khoản
- Kiểm tra số dư
- Lịch sử mua hàng
- Nạp tiền (liên hệ admin)

### 4. **Admin Control Panel**
- **Quản Lý Người Dùng**: Xem danh sách tất cả người dùng
- **Quản Lý File**: Upload, xóa file
- **Quản Lý Server**: Thêm, xóa server
- **Quản Lý Key**: Tạo, xóa key member
- **Quản Lý Tiền**: Cộng tiền cho người dùng

## 🚀 Cách Sử Dụng

### Mở Ứng Dụng
1. Mở file `index.html` trong trình duyệt
2. Giao diện sẽ hiển thị trang đăng nhập

### Đăng Nhập Admin
- Tên tài khoản: `bevis`
- Mật khẩu: `leduc`
- Số dư: 100,000,000đ

### Tạo Tài Khoản Mới
1. Bấm "Bấm vào đây để tạo tài khoản"
2. Nhập tên tài khoản (tối thiểu 3 ký tự)
3. Nhập mật khẩu (tối thiểu 6 ký tự)
4. Xác nhận mật khẩu
5. Bấm "Tạo tài khoản ngay"

### Quản Lý File (Admin)
1. Đăng nhập với tài khoản admin
2. Bấm "Control Panel" ở sidebar
3. Chọn tab "Quản Lý File"
4. Nhập số file, tên file, nội dung/link
5. Bấm "Upload File"

### Quản Lý Server (Admin)
1. Chọn tab "Quản Lý Server"
2. Nhập server IP/Domain
3. Bấm "Thêm Server"
4. Người dùng có thể copy server bằng cách bấm vào

### Tạo Key Member (Admin)
1. Chọn tab "Quản Lý Key"
2. Chọn thời hạn key
3. Nhập Telegram ID (@username)
4. Bấm "Tạo Key"
5. Hệ thống sẽ tạo key chính và key dự phòng

### Cộng Tiền (Admin)
1. Chọn tab "Quản Lý Tiền"
2. Nhập tên tài khoản
3. Nhập số tiền
4. Bấm "Cộng Tiền"

## 💾 Lưu Trữ Dữ Liệu

Ứng dụng sử dụng **localStorage** để lưu trữ dữ liệu:
- Tài khoản người dùng
- File
- Server
- Key member

Dữ liệu sẽ được lưu trên máy tính của bạn và không bị mất khi tắt trình duyệt.

## 🎨 Giao Diện

### Màu Sắc
- **Màu chính**: Tím (#7c3aed)
- **Màu phụ**: Xanh lam (#06b6d4)
- **Nền**: Đen tím với hiệu ứng ánh sáng chạy

### Hiệu Ứng
- Ánh sáng chạy từ trái sang phải
- Glass morphism cho các card
- Transition mượt mà
- Responsive design

## 📱 Responsive

Ứng dụng hỗ trợ:
- Desktop (1920x1080 trở lên)
- Tablet (768px - 1024px)
- Mobile (dưới 768px)

## 🔐 Bảo Mật

- Mật khẩu được lưu trữ (lưu ý: trong ứng dụng thực tế nên mã hóa)
- Chỉ admin có thể truy cập control panel
- Mỗi key member chỉ dùng được cho 1 tài khoản

## 📝 Ghi Chú

- Tài khoản mới tạo sẽ có loại "User" và số dư 0đ
- Admin có thể cộng tiền cho bất kỳ tài khoản nào
- Key member có thể được tạo với các thời hạn khác nhau
- Dữ liệu sẽ bị xóa nếu xóa cache trình duyệt

## 🛠️ Phát Triển Tiếp Theo

Các tính năng có thể thêm:
- Kết nối với Telegram Bot API
- Tạo file chứng chỉ (.crt, .p12)
- Hệ thống thanh toán
- Database backend
- Xác thực hai yếu tố (2FA)
- Lịch sử giao dịch chi tiết

## 📞 Liên Hệ

Liên hệ admin để được hỗ trợ hoặc báo cáo lỗi.

---

**Phiên bản**: 1.0  
**Cập nhật lần cuối**: 2025
