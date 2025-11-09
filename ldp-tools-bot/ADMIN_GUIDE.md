# 👨‍💼 Hướng Dẫn Admin - LDP TOOLS

## 🔑 Đăng Nhập Admin

**Tài khoản mặc định:**
- Tên tài khoản: `bevis`
- Mật khẩu: `leduc`
- Số dư: 100,000,000đ

## 📊 Control Panel

Sau khi đăng nhập, bấm "⚙️ Control Panel" ở sidebar để truy cập các chức năng quản lý.

### 1️⃣ Quản Lý Người Dùng

**Chức năng:**
- Xem danh sách tất cả người dùng
- Xem loại tài khoản (Admin, Member, User)
- Xem số dư của mỗi người dùng

**Cách sử dụng:**
1. Bấm tab "Quản Lý Người Dùng"
2. Xem danh sách người dùng
3. Thông tin hiển thị: Tên tài khoản, loại, số dư

### 2️⃣ Quản Lý File

**Chức năng:**
- Upload file mới
- Xem danh sách file
- Xóa file

**Cách Upload File:**

1. Bấm tab "Quản Lý File"
2. Điền thông tin:
   - **Số file**: Nhập số (ví dụ: 1, 2, 3...)
   - **Tên file**: Nhập tên file (ví dụ: "FILE V1", "CONFIG GAME")
   - **Nội dung/Link**: Nhập link hoặc nội dung file
3. Bấm "Upload File"

**Ví dụ:**
```
Số file: 1
Tên file: FILE V1
Nội dung/Link: https://example.com/file1.zip
```

**Xóa File:**
- Bấm nút "Xóa" bên cạnh file muốn xóa

### 3️⃣ Quản Lý Server

**Chức năng:**
- Thêm server mới
- Xem danh sách server
- Xóa server

**Cách Thêm Server:**

1. Bấm tab "Quản Lý Server"
2. Nhập server IP/Domain (ví dụ: 103.223.532)
3. Bấm "Thêm Server"

**Ví dụ Server:**
```
103.223.532
192.168.1.1
example.com
```

**Xóa Server:**
- Bấm nút "Xóa" bên cạnh server muốn xóa

### 4️⃣ Quản Lý Key Member

**Chức năng:**
- Tạo key member mới
- Xem danh sách key
- Xóa key

**Cách Tạo Key Member:**

1. Bấm tab "Quản Lý Key"
2. Chọn thời hạn key:
   - 1 giờ
   - 2 giờ
   - 1 ngày
   - 2 ngày
   - 1 tuần
   - 2 tuần
   - 1 tháng
   - 2 tháng
   - Không giới hạn
3. Nhập Telegram ID (ví dụ: @bevis1312)
4. Bấm "Tạo Key"

**Kết Quả:**
- Hệ thống sẽ tạo 2 key:
  - **Key chính**: Dùng để đăng nhập
  - **Key dự phòng**: Dùng nếu key chính bị lỗi

**Ví dụ:**
```
Thời hạn: 1 tuần
Telegram ID: @bevis1312
Key: 3NSQ0EQHS2
Backup: 7KLM9PQRST
```

**Xóa Key:**
- Bấm nút "Xóa" bên cạnh key muốn xóa
- Member sẽ không thể dùng key đó nữa

### 5️⃣ Quản Lý Ti���n

**Chức năng:**
- Xem số dư admin
- Cộng tiền cho người dùng

**Cách Cộng Tiền:**

1. Bấm tab "Quản Lý Tiền"
2. Nhập tên tài khoản người dùng
3. Nhập số tiền muốn cộng
4. Bấm "Cộng Tiền"

**Ví dụ:**
```
Tài khoản: user123
Số tiền: 50000
```

**Lưu ý:**
- Số dư admin ban đầu: 100,000,000đ
- Admin có thể tự cộng tiền cho mình
- Người dùng mới tạo sẽ có số dư 0đ

## 📋 Các Loại Tài Khoản

### Admin
- Có quyền truy cập tất cả chức năng
- Có thể quản lý website
- Số dư: 100,000,000đ

### Member
- Người dùng đã mua key member
- Có quyền sử dụng các tính năng member
- Số dư: Tùy theo nạp tiền

### User
- Người dùng bình thường
- Chỉ có quyền xem file, server
- Số dư: 0đ (trừ khi admin cộng tiền)

## 🎯 Quy Trình Làm Việc

### 1. Tạo Key Member Cho Người Dùng

```
1. Bấm "Quản Lý Key"
2. Chọn thời hạn (ví dụ: 1 tuần)
3. Nhập Telegram ID của người dùng
4. Bấm "Tạo Key"
5. Gửi key cho người dùng
```

### 2. Upload File Cho Người Dùng

```
1. Bấm "Quản Lý File"
2. Nhập số file (ví dụ: 1)
3. Nhập tên file (ví dụ: "FILE V1")
4. Nhập link hoặc nội dung
5. Bấm "Upload File"
6. Người dùng có thể tìm kiếm file bằng số
```

### 3. Thêm Server Cho Người Dùng

```
1. Bấm "Quản Lý Server"
2. Nhập server IP/Domain
3. Bấm "Thêm Server"
4. Người dùng có thể copy server
```

### 4. Cộng Tiền Cho Người Dùng

```
1. Bấm "Quản Lý Tiền"
2. Nhập tên tài khoản
3. Nhập số tiền
4. Bấm "Cộng Tiền"
5. Số dư người dùng sẽ được cập nhật
```

## 💡 Mẹo Sử Dụng

### Tạo Key Hiệu Quả
- Tạo key với thời hạn phù hợp
- Ghi chú Telegram ID chính xác
- Lưu lại key dự phòng

### Quản Lý File
- Đặt tên file rõ ràng
- Sử dụng số thứ tự liên tục
- Xóa file cũ không dùng

### Quản Lý Server
- Kiểm tra server hoạt động trước khi thêm
- Xóa server chết
- Cập nhật server mới

### Quản Lý Tiền
- Kiểm tra tên tài khoản trước khi cộng tiền
- Ghi chú lý do cộng tiền
- Cộng tiền đúng số lượng

## 🔐 Bảo Mật

### Bảo Vệ Tài Khoản Admin
- Đổi mật khẩu admin thường xuyên
- Không chia sẻ tài khoản admin
- Kiểm tra hoạt động thường xuyên

### Quản Lý Key
- Không chia sẻ key với người khác
- Xóa key hết hạn
- Tạo key dự phòng

### Dữ Liệu
- Sao lưu dữ liệu thường xuyên
- Không xóa dữ liệu quan trọng
- Kiểm tra dữ liệu định kỳ

## 📞 Hỗ Trợ

Nếu gặp vấn đề:

1. Kiểm tra lại hướng dẫn
2. Xóa cache trình duyệt
3. Thử đăng nhập lại
4. Liên hệ nhà phát triển

## 🎉 Bắt Đầu

Bây giờ bạn đã sẵn sàng quản lý LDP TOOLS!

**Các bước tiếp theo:**
1. ✅ Đăng nhập với tài khoản admin
2. ✅ Tạo key member cho người dùng
3. ✅ Upload file
4. ✅ Thêm server
5. ✅ Quản lý tiền

Chúc bạn thành công! 🚀

---

**Phiên bản**: 1.0  
**Cập nhật lần cuối**: 2025
