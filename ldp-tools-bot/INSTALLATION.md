# 📋 Hướng Dẫn Cài Đặt LDP TOOLS

## 🖥️ Yêu Cầu Hệ Thống

- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Không cần cài đặt thêm gì

## 📥 Cách Cài Đặt

### Phương Pháp 1: Mở Trực Tiếp (Đơn Giản Nhất)

1. Tải toàn bộ thư mục `ldp-tools-bot`
2. Mở file `index.html` bằng trình duyệt
3. Ứng dụng sẽ chạy ngay lập tức

### Phương Pháp 2: Sử Dụng Python Server (Khuyến Nghị)

**Trên Windows:**
```bash
cd ldp-tools-bot
python -m http.server 8000
```

Sau đó mở trình duyệt và truy cập: `http://localhost:8000`

**Trên Mac/Linux:**
```bash
cd ldp-tools-bot
python3 -m http.server 8000
```

Sau đó mở trình duyệt và truy cập: `http://localhost:8000`

### Phương Pháp 3: Sử Dụng Node.js

Nếu bạn có Node.js cài đặt:

```bash
cd ldp-tools-bot
npx http-server
```

## 🚀 Khởi Động Ứng Dụng

### Lần Đầu Tiên

1. Mở ứng dụng
2. Bạn sẽ thấy trang đăng nhập
3. Đăng nhập với tài khoản admin:
   - **Tên tài khoản**: `bevis`
   - **Mật khẩu**: `leduc`

### Tạo Tài Khoản Mới

1. Bấm "Bấm vào đây để tạo tài khoản"
2. Điền thông tin:
   - Tên tài khoản (tối thiểu 3 ký tự)
   - Mật khẩu (tối thiểu 6 ký tự)
   - Xác nhận mật khẩu
3. Bấm "Tạo tài khoản ngay"
4. Đăng nhập với tài khoản vừa tạo

## 📁 Cấu Trúc Thư Mục

```
ldp-tools-bot/
├── index.html          # File HTML chính
├── styles.css          # File CSS (giao diện)
├── script.js           # File JavaScript (logic)
├── package.json        # Thông tin dự án
├── README.md           # Hướng dẫn sử dụng
└── INSTALLATION.md     # File này
```

## 🔧 Cấu Hình

### Thay Đổi Tài Khoản Admin

Mở file `script.js` và tìm dòng:

```javascript
const ADMIN_USERNAME = 'bevis';
const ADMIN_PASSWORD = 'leduc';
```

Thay đổi thành tên tài khoản và mật khẩu mong muốn.

### Thay Đổi Số Dư Admin

Tìm dòng:

```javascript
const ADMIN_INITIAL_BALANCE = 100000000;
```

Thay đổi số tiền mong muốn.

## 💾 Dữ Liệu

Tất cả dữ liệu được lưu trữ trong **localStorage** của trình duyệt:

- Tài khoản người dùng
- File
- Server
- Key member

### Xóa Dữ Liệu

Để xóa tất cả dữ liệu:

1. Mở Developer Tools (F12)
2. Vào tab "Application" hoặc "Storage"
3. Chọn "Local Storage"
4. Xóa tất cả entries

Hoặc sử dụng console:

```javascript
localStorage.clear();
```

## 🐛 Khắc Phục Sự Cố

### Ứng Dụng Không Tải

- Kiểm tra xem tất cả 3 file (index.html, styles.css, script.js) có trong cùng thư mục không
- Thử xóa cache trình duyệt (Ctrl+Shift+Delete)
- Thử mở bằng trình duyệt khác

### Mất Dữ Liệu

- Dữ liệu được lưu trong localStorage, nếu xóa cache sẽ mất
- Sao lưu dữ liệu bằng cách export từ console

### Không Thể Đăng Nhập

- Kiểm tra tên tài khoản và mật khẩu
- Thử xóa cache trình duyệt
- Tạo tài khoản mới

## 📱 Sử Dụng Trên Mobile

Ứng dụng hỗ trợ mobile:

1. Mở file `index.html` trên điện thoại
2. Hoặc truy cập qua địa chỉ IP nếu dùng server

## 🔐 Bảo Mật

⚠️ **Lưu ý Quan Trọng:**

- Đây là ứng dụng web đơn giản, không nên dùng cho dữ liệu nhạy cảm
- Mật khẩu được lưu dưới dạng plain text (không mã hóa)
- Đ��� sử dụng trong production, cần:
  - Mã hóa mật khẩu
  - Sử dụng backend server
  - Sử dụng HTTPS
  - Xác thực người dùng

## 📞 Hỗ Trợ

Nếu gặp vấn đề:

1. Kiểm tra lại hướng dẫn
2. Xóa cache trình duyệt
3. Thử trình duyệt khác
4. Liên hệ admin

## 🎉 Hoàn Tất

Chúc mừng! Bạn đã cài đặt thành công LDP TOOLS. Bây giờ bạn có thể:

- ✅ Đăng nhập/đăng ký
- ✅ Quản lý tài khoản
- ✅ Quản lý file (admin)
- ✅ Quản lý server (admin)
- ✅ Quản lý key member (admin)
- ✅ Cộng tiền (admin)

Hãy bắt đầu sử dụng ứng dụng ngay!

---

**Phiên bản**: 1.0  
**Cập nhật lần cuối**: 2025
