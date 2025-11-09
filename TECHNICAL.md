# 🔧 Tài Liệu Kỹ Thuật - LDP TOOLS

## 📋 Tổng Quan

LDP TOOLS là một ứng dụng web single-page (SPA) được xây dựng bằng:
- **HTML5**: Cấu trúc
- **CSS3**: Giao diện (Glass Morphism, Gradient, Animation)
- **JavaScript (Vanilla)**: Logic và tương tác
- **LocalStorage**: Lưu trữ dữ liệu

## 🏗️ Kiến Trúc

```
┌─────────────────────────────────────┐
│         HTML (index.html)           │
│  - Auth Section (Login/Register)    │
│  - Dashboard Section                │
│    - Sidebar Navigation             │
│    - Header                         │
│    - Main Content (Pages)           │
└─────────────────────────────────────┘
         ↓
┌─────────────────────────────────────┐
│         CSS (styles.css)            │
│  - Global Styles                    │
│  - Component Styles                 │
│  - Animations & Effects             │
│  - Responsive Design                │
└─────────────────────────────────────┘
         ↓
┌─────────────────────────────────────┐
│      JavaScript (script.js)         │
│  - Data Management                  │
│  - User Authentication              │
│  - Event Handlers                   │
│  - UI Updates                       │
└─────────────────────────────────────┘
         ↓
┌─────────────────────────────────────┐
│    LocalStorage (Browser)           │
│  - Users Data                       │
│  - Files Data                       │
│  - Servers Data                     │
│  - Member Keys Data                 │
└─────────────────────────────────────┘
```

## 📁 Cấu Trúc File

```
ldp-tools-bot/
├── index.html              # File HTML chính
├── styles.css              # File CSS
├── script.js               # File JavaScript
├── package.json            # Thông tin dự án
├── README.md               # Hướng dẫn chung
├── INSTALLATION.md         # Hướng dẫn cài đặt
├── ADMIN_GUIDE.md          # Hướng dẫn admin
├── USER_GUIDE.md           # Hướng dẫn người dùng
└── TECHNICAL.md            # File này
```

## 🎨 Giao Diện

### Màu Sắc

```css
--primary-color: #7c3aed;      /* Tím */
--secondary-color: #1e1b4b;    /* Đen tím */
--accent-color: #06b6d4;       /* Xanh lam */
--text-light: #f0f0f0;         /* Chữ sáng */
--text-dark: #1a1a1a;          /* Chữ tối */
--glass-bg: rgba(255, 255, 255, 0.1);
--glass-border: rgba(255, 255, 255, 0.2);
```

### Hiệu Ứng

1. **Background Light Effect**
   - Ánh sáng chạy từ trái sang phải
   - Animation: 8 giây
   - Gradient: Tím → Xanh → Tím

2. **Glass Morphism**
   - Backdrop filter: blur(10px)
   - Border: rgba(255, 255, 255, 0.2)
   - Background: rgba(255, 255, 255, 0.1)

3. **Animations**
   - slideIn: 0.5s
   - fadeIn: 0.3s
   - lightSlide: 8s infinite

## 💾 Dữ Liệu

### Cấu Trúc LocalStorage

#### Users
```javascript
{
  "username": {
    "username": "string",
    "password": "string",
    "balance": "number",
    "type": "admin|member|user",
    "createdAt": "string"
  }
}
```

#### Files
```javascript
{
  "fileNumber": {
    "number": "string",
    "name": "string",
    "content": "string"
  }
}
```

#### Servers
```javascript
[
  "103.223.532",
  "192.168.1.1",
  "example.com"
]
```

#### Member Keys
```javascript
[
  {
    "key": "string",
    "backupKey": "string",
    "duration": "string",
    "telegramId": "string",
    "createdAt": "string",
    "used": "boolean"
  }
]
```

## 🔐 Xác Thực

### Admin Credentials
```javascript
const ADMIN_USERNAME = 'bevis';
const ADMIN_PASSWORD = 'leduc';
const ADMIN_INITIAL_BALANCE = 100000000;
```

### Loại Tài Khoản
- **admin**: Quyền truy cập tất cả
- **member**: Quyền truy cập member
- **user**: Quyền truy cập user

## 🔧 Hàm Chính

### Xác Thực
```javascript
handleLogin(e)              // Xử lý đăng nhập
handleRegister(e)           // Xử lý đăng ký
handleLogout(e)             // Xử lý đăng xuất
```

### Quản Lý D��� Liệu
```javascript
saveUsers()                 // Lưu người dùng
saveFiles()                 // Lưu file
saveServers()               // Lưu server
saveMemberKeys()            // Lưu key member
```

### Giao Diện
```javascript
showDashboard()             // Hiển thị dashboard
showPage(pageId)            // Hiển thị trang
showNotification(msg, err)  // Hiển thị thông báo
```

### Admin
```javascript
uploadFile()                // Upload file
deleteFile(fileNumber)      // Xóa file
addServer()                 // Thêm server
createMemberKey()           // Tạo key member
deleteMemberKey(key)        // Xóa key member
addMoneyToUser()            // Cộng tiền
```

### Tiện Ích
```javascript
generateRandomKey()         // Tạo key ngẫu nhiên
copyToClipboard(text)       // Copy vào clipboard
```

## 📱 Responsive Design

### Breakpoints
```css
Desktop:  >= 1024px
Tablet:   768px - 1023px
Mobile:   < 768px
```

### Thay Đổi Responsive
- Sidebar: Fixed → Overlay
- Header: Flex → Column
- Grid: Multi-column → Single column

## 🚀 Tối Ưu Hóa

### Performance
- Sử dụng vanilla JavaScript (không cần library)
- LocalStorage cho dữ liệu nhỏ
- CSS animations thay vì JavaScript
- Lazy loading cho hình ảnh

### Bảo Mật
- Mật khẩu lưu plain text (cần mã hóa trong production)
- Không có HTTPS (cần trong production)
- Không có xác thực backend (cần trong production)

## 🔄 Luồng Dữ Liệu

### Đăng Nhập
```
User Input → handleLogin() → Validate → Save currentUser → showDashboard()
```

### Upload File
```
Admin Input → uploadFile() → Validate → Save to files → loadFiles()
```

### Tạo Key
```
Admin Input → createMemberKey() → Generate Key → Save → loadMemberKeys()
```

## 🐛 Debugging

### Console Commands
```javascript
// Xem tất cả người dùng
console.log(users);

// Xem tất cả file
console.log(files);

// Xem tất cả server
console.log(servers);

// Xem tất cả key
console.log(memberKeys);

// Xóa tất cả dữ liệu
localStorage.clear();

// Xem người dùng hiện tại
console.log(currentUser);
```

## 📊 Thống Kê

### Số Lượng Dòng Code
- HTML: ~300 dòng
- CSS: ~600 dòng
- JavaScript: ~400 dòng
- **Tổng**: ~1300 dòng

### Kích Thước File
- index.html: ~15 KB
- styles.css: ~20 KB
- script.js: ~15 KB
- **Tổng**: ~50 KB

## 🔮 Phát Triển Tiếp Theo

### Tính Năng Mới
- [ ] Kết nối Telegram Bot API
- [ ] Tạo file chứng chỉ (.crt, .p12)
- [ ] Hệ thống thanh toán
- [ ] Database backend (MongoDB, PostgreSQL)
- [ ] Xác thực hai yếu tố (2FA)
- [ ] Lịch sử giao dịch chi tiết
- [ ] Export/Import dữ liệu
- [ ] Dark/Light mode

### Cải Thiện
- [ ] Mã hóa mật khẩu (bcrypt)
- [ ] HTTPS/SSL
- [ ] Backend API (Node.js, Python)
- [ ] Database
- [ ] Email verification
- [ ] Rate limiting
- [ ] Logging & Monitoring
- [ ] Unit tests

## 🛠️ Công Cụ Phát Triển

### Khuyến Nghị
- **Editor**: VS Code
- **Browser**: Chrome DevTools
- **Version Control**: Git
- **Package Manager**: npm

### Extensions
- Live Server
- Prettier
- ESLint
- Thunder Client

## 📚 Tài Liệu Tham Khảo

### HTML5
- https://developer.mozilla.org/en-US/docs/Web/HTML

### CSS3
- https://developer.mozilla.org/en-US/docs/Web/CSS
- https://css-tricks.com/

### JavaScript
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://javascript.info/

### LocalStorage
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

## 📞 Hỗ Trợ

Nếu gặp vấn đề kỹ thuật:

1. Kiểm tra console (F12)
2. Xem error message
3. Thử xóa cache
4. Liên hệ nhà phát triển

## 🎉 Hoàn Tất

Bây giờ bạn đã hiểu rõ về cấu trúc kỹ thuật của LDP TOOLS!

---

**Phiên bản**: 1.0  
**Cập nhật lần cuối**: 2025
