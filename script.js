// 等待页面加载完毕再执行代码
document.addEventListener('DOMContentLoaded', function() {
    // 获取表单元素
    const phoneForm = document.getElementById('phone-form');

    // 监听表单的提交事件
    phoneForm.addEventListener('submit', function(e) {
        // 阻止表单默认的提交行为（默认会刷新页面）
        e.preventDefault();

        // 获取输入框里的手机号
        const phoneInput = document.getElementById('phone');
        const phoneNumber = phoneInput.value;

        // 简单的手机号格式验证（1开头的11位数字）
        const phonePattern = /^1[3-9]\d{9}$/;
        if (!phonePattern.test(phoneNumber)) {
            alert('请输入正确的11位手机号码！');
            return; // 如果格式不对，就停止执行后面的代码
        }

        // 找到按钮，并改变它的文字和状态，提示用户正在操作
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.textContent = '领取中...';
        submitBtn.disabled = true;

        // 模拟一个网络延迟（2秒），让体验更真实
        setTimeout(function() {
            // 2秒后，跳转到警告页面，并通过URL参数把手机号带过去
            window.location.href = `warning.html?phone=${encodeURIComponent(phoneNumber)}`;
        }, 2000);
    });
});