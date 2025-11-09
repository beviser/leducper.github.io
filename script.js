// Data Storage
let users = JSON.parse(localStorage.getItem('users')) || {};
let currentUser = null;
let files = JSON.parse(localStorage.getItem('files')) || {};
let servers = JSON.parse(localStorage.getItem('servers')) || [];
let memberKeys = JSON.parse(localStorage.getItem('memberKeys')) || [];
let helpKeys = JSON.parse(localStorage.getItem('helpKeys')) || [];
let androidConfigs = JSON.parse(localStorage.getItem('androidConfigs')) || [];
let iosConfigs = JSON.parse(localStorage.getItem('iosConfigs')) || [];
let devices = JSON.parse(localStorage.getItem('devices')) || [];

// Admin credentials
const ADMIN_USERNAME = 'bevis';
const ADMIN_PASSWORD = 'leduc';
const ADMIN_INITIAL_BALANCE = 100000000;

// Initialize admin account
function initializeAdmin() {
    if (!users[ADMIN_USERNAME]) {
        users[ADMIN_USERNAME] = {
            username: ADMIN_USERNAME,
            password: ADMIN_PASSWORD,
            balance: ADMIN_INITIAL_BALANCE,
            type: 'admin',
            createdAt: new Date().toLocaleDateString('vi-VN')
        };
        saveUsers();
    }
}

// Save functions
function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

function saveFiles() {
    localStorage.setItem('files', JSON.stringify(files));
}

function saveServers() {
    localStorage.setItem('servers', JSON.stringify(servers));
}

function saveMemberKeys() {
    localStorage.setItem('memberKeys', JSON.stringify(memberKeys));
}

function saveHelpKeys() {
    localStorage.setItem('helpKeys', JSON.stringify(helpKeys));
}

function saveAndroidConfigs() {
    localStorage.setItem('androidConfigs', JSON.stringify(androidConfigs));
}

function saveIosConfigs() {
    localStorage.setItem('iosConfigs', JSON.stringify(iosConfigs));
}

function saveDevices() {
    localStorage.setItem('devices', JSON.stringify(devices));
}

// Show notification
function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    notificationText.innerHTML = message;
    notification.classList.add('show');
    if (isError) {
        notification.classList.add('error');
    } else {
        notification.classList.remove('error');
    }
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Switch to register form
function switchToRegister(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

// Switch to login form
function switchToLogin(e) {
    e.preventDefault();
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// Handle login
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!users[username]) {
        showNotification('Tài khoản không tồn tại!', true);
        return;
    }
    
    if (users[username].password !== password) {
        showNotification('Mật khẩu không chính xác!', true);
        return;
    }
    
    currentUser = username;
    localStorage.setItem('currentUser', username);
    
    showNotification('✓ Bạn đã đăng nhập thành công');
    
    setTimeout(() => {
        showDashboard();
    }, 500);
}

// Handle register
function handleRegister(e) {
    e.preventDefault();
    
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (username.length < 3) {
        showNotification('Tên tài khoản phải có ít nhất 3 ký tự!', true);
        return;
    }
    
    if (password.length < 6) {
        showNotification('Mật khẩu phải có ít nhất 6 ký tự!', true);
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Mật khẩu không khớp!', true);
        return;
    }
    
    if (users[username]) {
        showNotification('Tài khoản đã tồn tại!', true);
        return;
    }
    
    users[username] = {
        username: username,
        password: password,
        balance: 0,
        type: 'user',
        createdAt: new Date().toLocaleDateString('vi-VN')
    };
    
    saveUsers();
    showNotification('Tài khoản đã được tạo thành công! Vui lòng đăng nhập.');
    
    setTimeout(() => {
        switchToLogin({ preventDefault: () => {} });
        document.getElementById('registerUsername').value = '';
        document.getElementById('registerPassword').value = '';
        document.getElementById('confirmPassword').value = '';
    }, 1000);
}

// Show dashboard
function showDashboard() {
    document.getElementById('authSection').style.display = 'none';
    document.getElementById('dashboardSection').style.display = 'flex';
    
    updateHeader();
    
    const userType = users[currentUser].type;
    
    // Hide all menus first
    document.getElementById('userMenu').style.display = 'none';
    document.getElementById('memberMenu').style.display = 'none';
    document.getElementById('adminMenu').style.display = 'none';
    
    // Show appropriate menu based on user type
    if (userType === 'admin') {
        document.getElementById('adminMenu').style.display = 'block';
    } else if (userType === 'member') {
        document.getElementById('memberMenu').style.display = 'block';
    } else {
        document.getElementById('userMenu').style.display = 'block';
    }
    
    loadUsers();
    loadFiles();
    loadServers();
    loadMemberKeys();
}

// Update header
function updateHeader() {
    const user = users[currentUser];
    document.getElementById('headerUsername').textContent = currentUser;
    document.getElementById('headerBalance').textContent = user.balance.toLocaleString('vi-VN') + 'đ';
}

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

// Show home page
function showHome(e) {
    if (e) e.preventDefault();
    showPage('homePage');
}

// Show account page
function showAccount(e) {
    e.preventDefault();
    const user = users[currentUser];
    document.getElementById('accountUsername').textContent = user.username;
    document.getElementById('accountType').textContent = 
        user.type === 'admin' ? 'Admin' : user.type === 'member' ? 'Member' : 'User';
    document.getElementById('accountBalance').textContent = user.balance.toLocaleString('vi-VN') + 'đ';
    document.getElementById('accountCreated').textContent = user.createdAt;
    
    showPage('accountPage');
}

// Show deposit page
function showDeposit(e) {
    e.preventDefault();
    showPage('depositPage');
}

// Show history page
function showHistory(e) {
    e.preventDefault();
    showPage('historyPage');
}

// Show admin control
function showAdminControl(e) {
    e.preventDefault();
    showPage('adminPage');
}

// Show page
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Handle logout
function handleLogout(e) {
    e.preventDefault();
    currentUser = null;
    localStorage.removeItem('currentUser');
    
    document.getElementById('authSection').style.display = 'flex';
    document.getElementById('dashboardSection').style.display = 'none';
    
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('registerUsername').value = '';
    document.getElementById('registerPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    
    showNotification('Bạn đã đăng xuất');
}

// Admin functions
function switchAdminTab(tabName) {
    const tabs = document.querySelectorAll('.admin-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabName + 'Tab').classList.add('active');
    
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Load users
function loadUsers() {
    const usersList = document.getElementById('usersList');
    const userArray = Object.values(users);
    
    if (userArray.length === 0) {
        usersList.innerHTML = '<p>Chưa có người dùng nào</p>';
        return;
    }
    
    usersList.innerHTML = userArray.map(user => `
        <div class="user-item">
            <div>
                <strong>${user.username}</strong> - ${user.type} - ${user.balance.toLocaleString('vi-VN')}đ
            </div>
        </div>
    `).join('');
}

// Upload file
function uploadFile() {
    const fileNumber = document.getElementById('fileNumber').value;
    const fileName = document.getElementById('fileName').value;
    const fileContent = document.getElementById('fileContent').value;
    
    if (!fileNumber || !fileName || !fileContent) {
        showNotification('Vui lòng điền đầy đủ thông tin!', true);
        return;
    }
    
    files[fileNumber] = {
        number: fileNumber,
        name: fileName,
        content: fileContent
    };
    
    saveFiles();
    showNotification('File đã được upload thành công!');
    
    document.getElementById('fileNumber').value = '';
    document.getElementById('fileName').value = '';
    document.getElementById('fileContent').value = '';
    
    loadFiles();
}

// Load files
function loadFiles() {
    const filesListContent = document.getElementById('filesListContent');
    const fileArray = Object.values(files);
    
    if (fileArray.length === 0) {
        filesListContent.innerHTML = '<p>Chưa có file nào</p>';
        return;
    }
    
    filesListContent.innerHTML = fileArray.map(file => `
        <div class="file-item">
            <div>
                <strong>${file.number}. ${file.name}</strong><br>
                <small>${file.content.substring(0, 50)}...</small>
            </div>
            <button class="btn-delete" onclick="deleteFile('${file.number}')">Xóa</button>
        </div>
    `).join('');
}

// Delete file
function deleteFile(fileNumber) {
    delete files[fileNumber];
    saveFiles();
    showNotification('File đã được xóa!');
    loadFiles();
}

// Add server
function addServer() {
    const serverInput = document.getElementById('serverInput').value;
    
    if (!serverInput) {
        showNotification('Vui lòng nhập server!', true);
        return;
    }
    
    servers.push(serverInput);
    saveServers();
    showNotification('Server đã được thêm!');
    
    document.getElementById('serverInput').value = '';
    loadServers();
}

// Load servers
function loadServers() {
    const serversListContent = document.getElementById('serversListContent');
    
    if (servers.length === 0) {
        serversListContent.innerHTML = '<p>Chưa có server nào</p>';
        return;
    }
    
    serversListContent.innerHTML = servers.map((server, index) => `
        <div class="server-item" onclick="copyToClipboard('${server}')">
            <span>${index + 1}. ${server}</span>
            <button class="btn-copy">Copy</button>
        </div>
    `).join('');
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Đã sao chép!');
    });
}

// Create member key
function createMemberKey() {
    const duration = document.getElementById('keyDuration').value;
    const telegramId = document.getElementById('telegramId').value;
    
    if (!telegramId) {
        showNotification('Vui lòng nhập Telegram ID!', true);
        return;
    }
    
    const key = generateRandomKey();
    const backupKey = generateRandomKey();
    
    memberKeys.push({
        key: key,
        backupKey: backupKey,
        duration: duration,
        telegramId: telegramId,
        createdAt: new Date().toLocaleString('vi-VN'),
        used: false
    });
    
    saveMemberKeys();
    showNotification(`Key tạo thành công!<br>Key: ${key}<br>Backup: ${backupKey}`);
    
    document.getElementById('keyDuration').value = '1day';
    document.getElementById('telegramId').value = '';
    
    loadMemberKeys();
}

// Generate random key
function generateRandomKey() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let key = '';
    for (let i = 0; i < 10; i++) {
        key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return key;
}

// Load member keys
function loadMemberKeys() {
    const keysListContent = document.getElementById('keysListContent');
    
    if (memberKeys.length === 0) {
        keysListContent.innerHTML = '<p>Chưa có key nào</p>';
        return;
    }
    
    keysListContent.innerHTML = memberKeys.map((keyObj, index) => `
        <div class="key-item">
            <div>
                <strong>Key ${index + 1}</strong><br>
                <small>Key: ${keyObj.key}</small><br>
                <small>Backup: ${keyObj.backupKey}</small><br>
                <small>Thời hạn: ${keyObj.duration}</small><br>
                <small>Telegram: ${keyObj.telegramId}</small><br>
                <small>Tạo lúc: ${keyObj.createdAt}</small>
            </div>
            <button class="btn-delete" onclick="deleteMemberKey('${keyObj.key}')">Xóa</button>
        </div>
    `).join('');
}

// Delete member key
function deleteMemberKey(key) {
    memberKeys = memberKeys.filter(k => k.key !== key);
    saveMemberKeys();
    showNotification('Key đã được xóa!');
    loadMemberKeys();
}

// Add money to user
function addMoneyToUser() {
    const username = document.getElementById('userToAdd').value;
    const amount = parseInt(document.getElementById('amountToAdd').value);
    
    if (!username || !amount) {
        showNotification('Vui lòng điền đầy đủ thông tin!', true);
        return;
    }
    
    if (!users[username]) {
        showNotification('Tài khoản không tồn tại!', true);
        return;
    }
    
    users[username].balance += amount;
    saveUsers();
    showNotification(`Đã cộng ${amount.toLocaleString('vi-VN')}đ cho ${username}`);
    
    document.getElementById('userToAdd').value = '';
    document.getElementById('amountToAdd').value = '';
    
    updateHeader();
    loadUsers();
}

// User Functions - Get Files
function showGetFiles() {
    const content = `
        <div class="glass-card">
            <h2>Lấy File</h2>
            <div id="getFilesList" class="files-list">
                ${Object.values(files).length === 0 ? '<p>Chưa có file nào</p>' : 
                Object.values(files).map(file => `
                    <div class="file-item" onclick="downloadFile('${file.number}')">
                        <div>
                            <strong>${file.number}. ${file.name}</strong><br>
                            <small>${file.content.substring(0, 100)}...</small>
                        </div>
                        <button class="btn-copy">Lấy</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    showUserContent(content);
}

// Search File
function showSearchFile() {
    const content = `
        <div class="glass-card">
            <h2>Tìm Kiếm File</h2>
            <div class="form-group">
                <label>Nhập số file:</label>
                <input type="text" id="searchFileNumber" placeholder="Nhập số file">
                <button class="btn-primary" onclick="searchFile()">Tìm Kiếm</button>
            </div>
            <div id="searchFileResult" style="margin-top: 20px;"></div>
        </div>
    `;
    showUserContent(content);
}

function searchFile() {
    const fileNumber = document.getElementById('searchFileNumber').value;
    const resultDiv = document.getElementById('searchFileResult');
    
    if (!fileNumber) {
        showNotification('Vui lòng nhập số file!', true);
        return;
    }
    
    if (files[fileNumber]) {
        const file = files[fileNumber];
        resultDiv.innerHTML = `
            <div class="file-item">
                <div>
                    <strong>${file.number}. ${file.name}</strong><br>
                    <p>${file.content}</p>
                </div>
                <button class="btn-copy" onclick="copyToClipboard('${file.content}')">Copy</button>
            </div>
        `;
    } else {
        resultDiv.innerHTML = '<p style="color: #ef4444;">File không tồn tại!</p>';
    }
}

// Show Servers
function showServersUser() {
    const content = `
        <div class="glass-card">
            <h2>Danh Sách Server</h2>
            <div id="userServersList" class="servers-list">
                ${servers.length === 0 ? '<p>Chưa có server nào</p>' : 
                servers.map((server, index) => `
                    <div class="server-item" onclick="copyToClipboard('${server}')">
                        <span>${index + 1}. ${server}</span>
                        <button class="btn-copy">Copy</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    showUserContent(content);
}

// Show Online Server
function showOnlineServer() {
    const content = `
        <div class="glass-card">
            <h2>Server Online</h2>
            <div id="onlineServerList" class="servers-list">
                ${servers.length === 0 ? '<p>Chưa có server nào</p>' : 
                servers.slice(0, 50).map((server, index) => `
                    <div class="server-item" onclick="copyToClipboard('${server}')">
                        <span>${index + 1}. ${server}</span>
                        <button class="btn-copy">Copy</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    showUserContent(content);
}

// Show Shadowrocket
function showShadowrocket() {
    const content = `
        <div class="glass-card">
            <h2>Shadowrocket</h2>
            <div class="feature-grid">
                <div class="feature-item" onclick="showAndroidConfig()">
                    <h3>📱 Android</h3>
                    <p>Xem config cho Android</p>
                </div>
                <div class="feature-item" onclick="showIosConfig()">
                    <h3>🍎 iOS</h3>
                    <p>Xem config cho iOS</p>
                </div>
                <div class="feature-item" onclick="showDownloadShadowrocket()">
                    <h3>⬇️ Tải Shadowrocket</h3>
                    <p>Hướng dẫn tải ứng dụng</p>
                </div>
            </div>
        </div>
    `;
    showUserContent(content);
}

// Show Android Config
function showAndroidConfig() {
    const content = `
        <div class="glass-card">
            <h2>Config Android</h2>
            <div id="androidConfigList" class="servers-list">
                ${androidConfigs.length === 0 ? '<p>Chưa có config nào</p>' : 
                androidConfigs.map((config, index) => `
                    <div class="server-item" onclick="copyToClipboard('${config.content}')">
                        <span>${index + 1}. ${config.name}</span>
                        <button class="btn-copy">Copy</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    showUserContent(content);
}

// Show iOS Config
function showIosConfig() {
    const content = `
        <div class="glass-card">
            <h2>Config iOS</h2>
            <div id="iosConfigList" class="servers-list">
                ${iosConfigs.length === 0 ? '<p>Chưa có config nào</p>' : 
                iosConfigs.map((config, index) => `
                    <div class="server-item" onclick="copyToClipboard('${config.content}')">
                        <span>${index + 1}. ${config.name}</span>
                        <button class="btn-copy">Copy</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    showUserContent(content);
}

// Show Download Shadowrocket
function showDownloadShadowrocket() {
    const content = `
        <div class="glass-card">
            <h2>Tải Shadowrocket</h2>
            <div class="info-box">
                <h3>iOS</h3>
                <p>Mở App Store và tìm "Shadowrocket"</p>
                <p>Hoặc truy cập: <a href="https://apps.apple.com" target="_blank">App Store</a></p>
            </div>
            <div class="info-box">
                <h3>Android</h3>
                <p>Tải từ Google Play Store</p>
                <p>Hoặc truy cập: <a href="https://play.google.com" target="_blank">Google Play</a></p>
            </div>
        </div>
    `;
    showUserContent(content);
}

// Show Link
function showLink() {
    const content = `
        <div class="glass-card">
            <h2>Link Hỗ Trợ</h2>
            <div class="info-box">
                <p>Truy cập link sau để lấy hướng dẫn:</p>
                <a href="https://leducper.blogspot.com/2025/04/hdsd.html" target="_blank" class="btn-primary">
                    Mở Link Hướng Dẫn
                </a>
            </div>
        </div>
    `;
    showUserContent(content);
}

// Show Be Member
function showBeMember() {
    const content = `
        <div class="glass-card">
            <h2>Trở Thành Member</h2>
            <div class="info-box">
                <h3>Lợi Ích Của Member</h3>
                <ul style="text-align: left; margin: 20px 0;">
                    <li>✅ Tạo file chứng chỉ (.CRT)</li>
                    <li>✅ Tạo file (.P12)</li>
                    <li>✅ Tối ưu hóa cài đặt</li>
                    <li>✅ Hỗ trợ ưu tiên</li>
                    <li>✅ Truy cập tất cả tính năng</li>
                </ul>
            </div>
            <div class="info-box">
                <h3>Giá Cả</h3>
                <p>1 ngày: 50,000đ</p>
                <p>1 tuần: 150,000đ</p>
            </div>
            <div class="info-box">
                <p>Liên hệ admin @bevis1312 để mua key member</p>
            </div>
        </div>
    `;
    showUserContent(content);
}

// Show Buy Files
function showBuyFiles() {
    const content = `
        <div class="glass-card">
            <h2>Bảng Giá File</h2>
            <p>Xem bảng giá file tại link:</p>
            <a href="https://leducper.blogspot.com/2025/09/bang-gia-files-ios-va-android.html" target="_blank" class="btn-primary">
                Xem Bảng Giá
            </a>
        </div>
    `;
    showUserContent(content);
}

// Show Price
function showPrice() {
    showBuyFiles();
}

// Show User Content
function showUserContent(content) {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = content;
}

// Member Functions - Create Certificate
function showCreateCert() {
    const content = `
        <div class="glass-card">
            <h2>Tạo Chứng Chỉ</h2>
            <div class="feature-grid">
                <div class="feature-item" onclick="showCreateCRT()">
                    <h3>📄 Tạo .CRT</h3>
                    <p>Tạo file Certificate (.CRT) và (.PEM)</p>
                </div>
                <div class="feature-item" onclick="showCreateP12()">
                    <h3>���� Tạo .P12</h3>
                    <p>Tạo file (.P12) cho Android và iOS</p>
                </div>
            </div>
        </div>
    `;
    showUserContent(content);
}

// Show Create CRT
function showCreateCRT() {
    const content = `
        <div class="glass-card">
            <h2>Tạo File .CRT và .PEM</h2>
            <form onsubmit="createCRTFile(event)">
                <div class="form-group">
                    <label>Tên file:</label>
                    <input type="text" id="crtFileName" placeholder="Nhập tên file" required>
                </div>
                <div class="form-group">
                    <label>Tên sau khi cài vào cài đặt:</label>
                    <input type="text" id="crtCommonName" placeholder="Nhập tên" required>
                </div>
                <div class="form-group">
                    <label>Nước:</label>
                    <input type="text" id="crtCountry" placeholder="VN" required>
                </div>
                <div class="form-group">
                    <label>Khu vực:</label>
                    <input type="text" id="crtState" placeholder="Hà Nội" required>
                </div>
                <div class="form-group">
                    <label>Email:</label>
                    <input type="email" id="crtEmail" placeholder="email@example.com" required>
                </div>
                <div class="form-group">
                    <label>Tổ chức (bắt buộc: LDP COM):</label>
                    <input type="text" id="crtOrganization" value="LDP COM" readonly>
                </div>
                <div class="form-group">
                    <label>Dung lượng file (1-50 KB):</label>
                    <input type="number" id="crtSize" min="1" max="50" placeholder="Nhập dung lượng" required>
                </div>
                <div class="form-group">
                    <label>Chức năng tiêm vào file (nhập số, cách nhau bằng dấu cách):</label>
                    <div style="background: rgba(124, 58, 237, 0.1); padding: 10px; border-radius: 8px; margin: 10px 0;">
                        <p>1. addsensitivity</p>
                        <p>2. addnorecoil</p>
                        <p>3. addaimlock</p>
                        <p>4. addaimbot</p>
                        <p>5. addregbot</p>
                        <p>6. addlocktarget</p>
                        <p>7. add120hz</p>
                        <p>8. add90hz</p>
                        <p>9. addregedit</p>
                    </div>
                    <input type="text" id="crtFeatures" placeholder="Ví dụ: 1 6 2 5" required>
                </div>
                <button type="submit" class="btn-primary">Tạo File</button>
            </form>
        </div>
    `;
    showUserContent(content);
}

function createCRTFile(event) {
    event.preventDefault();
    showNotification('Đang tiêm file, vui lòng chờ...');
    
    setTimeout(() => {
        showNotification('Đang built file...');
    }, 1000);
    
    setTimeout(() => {
        showNotification('✓ Đã tiêm chức năng thành công! File đã được tạo.');
    }, 2000);
}

// Show Create P12
function showCreateP12() {
    const content = `
        <div class="glass-card">
            <h2>Tạo File .P12</h2>
            <form onsubmit="createP12File(event)">
                <div class="form-group">
                    <label>Tên chứng chỉ:</label>
                    <input type="text" id="p12Name" placeholder="Nhập tên chứng chỉ" required>
                </div>
                <div class="form-group">
                    <label>Tên sau khi cài vào cài đặt:</label>
                    <input type="text" id="p12CommonName" placeholder="Nhập tên" required>
                </div>
                <div class="form-group">
                    <label>Nước:</label>
                    <input type="text" id="p12Country" placeholder="VN" required>
                </div>
                <div class="form-group">
                    <label>Khu vực:</label>
                    <input type="text" id="p12State" placeholder="Hà Nội" required>
                </div>
                <div class="form-group">
                    <label>Email:</label>
                    <input type="email" id="p12Email" placeholder="email@example.com" required>
                </div>
                <div class="form-group">
                    <label>Tổ chức:</label>
                    <input type="text" id="p12Organization" placeholder="LDP COM" required>
                </div>
                <div class="form-group">
                    <label>Key (viết hoa chữ cái đầu):</label>
                    <input type="text" id="p12Key" placeholder="Nhập key" required>
                </div>
                <div class="form-group">
                    <label>Dung lượng file (1-50 KB):</label>
                    <input type="number" id="p12Size" min="1" max="50" placeholder="Nhập dung lượng" required>
                </div>
                <button type="submit" class="btn-primary">Tạo File</button>
            </form>
        </div>
    `;
    showUserContent(content);
}

function createP12File(event) {
    event.preventDefault();
    showNotification('Đang tạo file .P12, vui lòng chờ...');
    
    setTimeout(() => {
        showNotification('✓ File .P12 đã được tạo thành công!');
    }, 2000);
}

// Admin Help Key Functions
function createHelpKey() {
    const key = prompt('Nhập key muốn tạo:');
    if (!key) return;
    
    helpKeys.push({
        key: key,
        createdAt: new Date().toLocaleString('vi-VN'),
        usedBy: []
    });
    
    saveHelpKeys();
    showNotification(`Key đã được tạo: ${key}`);
}

function checkHelpKey() {
    let content = '<div class="glass-card"><h2>Danh Sách Help Key</h2>';
    
    if (helpKeys.length === 0) {
        content += '<p>Chưa có key nào</p>';
    } else {
        content += '<div class="keys-list">';
        helpKeys.forEach((keyObj, index) => {
            content += `
                <div class="key-item">
                    <div>
                        <strong>Key ${index + 1}: ${keyObj.key}</strong><br>
                        <small>Tạo lúc: ${keyObj.createdAt}</small><br>
                        <small>Được dùng bởi: ${keyObj.usedBy.length > 0 ? keyObj.usedBy.join(', ') : 'Chưa ai'}</small>
                    </div>
                </div>
            `;
        });
        content += '</div>';
    }
    
    content += '</div>';
    showUserContent(content);
}

// Check Device
function checkDevice() {
    const deviceInfo = {
        username: currentUser,
        device: navigator.userAgent,
        deviceId: generateRandomKey(),
        timestamp: new Date().toLocaleString('vi-VN')
    };
    
    devices.push(deviceInfo);
    saveDevices();
    
    const content = `
        <div class="glass-card">
            <h2>Thông Tin Thiết Bị</h2>
            <div class="info-box">
                <p><strong>THIẾT BỊ CỦA BẠN:</strong> ${deviceInfo.device}</p>
                <p><strong>ID CỦA BẠN:</strong> ${currentUser}</p>
                <p><strong>ID DEVICE:</strong> ${deviceInfo.deviceId}</p>
                <p><strong>NGÀY CHECK:</strong> ${deviceInfo.timestamp}</p>
                <p style="color: var(--accent-color); margin-top: 20px;">✓ THÔNG TIN CỦA BẠN ĐÃ ĐƯỢC GỬI LÊN HỆ THỐNG ADMIN</p>
            </div>
        </div>
    `;
    showUserContent(content);
}

// Help Center
function showHelpCenter() {
    const content = `
        <div class="glass-card">
            <h2>Help Center</h2>
            <div class="feature-grid">
                <div class="feature-item" onclick="showAndroidDPI()">
                    <h3>📱 Android DPI</h3>
                    <p>Lấy DPI cho thiết bị Android</p>
                </div>
                <div class="feature-item" onclick="showIphoneDPI()">
                    <h3>🍎 iPhone DPI</h3>
                    <p>Lấy DPI cho thiết bị iPhone</p>
                </div>
                <div class="feature-item" onclick="showResetSettings()">
                    <h3>⚙️ Reset Settings</h3>
                    <p>Hướng dẫn reset cài đặt</p>
                </div>
                <div class="feature-item" onclick="showResetShadowrocket()">
                    <h3>🔄 Reset Shadowrocket</h3>
                    <p>Hướng dẫn reset Shadowrocket</p>
                </div>
            </div>
        </div>
    `;
    showUserContent(content);
}

function showAndroidDPI() {
    const content = `
        <div class="glass-card">
            <h2>Android DPI</h2>
            <div class="info-box">
                <p>Link 1: <a href="https://ibb.co/kssWXGDv" target="_blank">Mở Link 1</a></p>
                <p>Link 2: <a href="https://ibb.co/fY1TM5Hg" target="_blank">Mở Link 2</a></p>
            </div>
        </div>
    `;
    showUserContent(content);
}

function showIphoneDPI() {
    const content = `
        <div class="glass-card">
            <h2>iPhone DPI</h2>
            <div class="info-box">
                <h3>DPI V1</h3>
                <a href="https://youtube.com/shorts/Ui9Unf1NnEM?si=naYgj8DxYOFQ_Kai" target="_blank" class="btn-primary">Xem Video</a>
            </div>
            <div class="info-box">
                <h3>DPI V2</h3>
                <a href="https://youtube.com/shorts/Deg5tGwSH1s?si=OkyDftF2e-rpF_pt" target="_blank" class="btn-primary">Xem Video</a>
            </div>
        </div>
    `;
    showUserContent(content);
}

function showResetSettings() {
    const content = `
        <div class="glass-card">
            <h2>Reset Settings</h2>
            <a href="https://youtube.com/shorts/zFTtJAiMJAg?si=58aiKM-Wf3YEDf37" target="_blank" class="btn-primary">Xem Hướng Dẫn</a>
        </div>
    `;
    showUserContent(content);
}

function showResetShadowrocket() {
    const content = `
        <div class="glass-card">
            <h2>Reset Shadowrocket</h2>
            <a href="https://youtube.com/shorts/uLA77oBORjQ?si=-TADQNlJtlBc5tDR" target="_blank" class="btn-primary">Xem Hướng Dẫn</a>
        </div>
    `;
    showUserContent(content);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    initializeAdmin();
    
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser && users[savedUser]) {
        currentUser = savedUser;
        showDashboard();
    }
});
