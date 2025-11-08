document.addEventListener('DOMContentLoaded', function() {
    function loadData(callback) {
    fetch('./database/data.json')
        .then(res => res.json())
        .then(data => {
        window.data = data;
        callback(data);
        });
    }

    loadData(data => {
    console.log("載入完成：", data);
    });

    function showAlert(message, type = 'success') {
        const alertBox = document.getElementById('alertBox');
        alertBox.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
    }

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('inputUsername').value;
        const password = document.getElementById('inputPassword').value;

        const user = window.data.users.find(user => user.username === username && user.password === password);

        if (user) {
            showAlert('✅ 登入成功！即將跳轉...', 'success');
            setTimeout(() => window.location.href = 'dashboard.html', 1000);
        } else {
            showAlert('❌ 帳號或密碼錯誤，請再試一次。', 'danger');
        }
    });
});
