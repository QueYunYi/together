<template>
  <div v-if="isLoginDialogVisible" class="login-dialog-overlay" @click="closeLoginDialog">
    <div class="login-dialog" @click.stop>
      <div class="login-dialog-header">
        <h3>登录</h3>
      </div>

      <div class="login-content">
        <div class="qr-code">
          <img src="https://via.placeholder.com/150" alt="扫码登录" />
          <p>扫码登录</p>
        </div>

        <div class="login-form">
          <input v-model="username" type="tel" placeholder="请输入用户名" />
          <input v-model="password" type="password" placeholder="请输入密码" />
          
          <button class="forgot-password" @click="handleForgotPassword">忘记密码？</button>
          <button class="login-btn" @click="handleLogin">登录</button>

          <div class="extra-options">
            <label>
              <input type="checkbox" v-model="rememberMe" /> 记住密码
            </label>
            <span class="register" @click="handleRegister">新用户注册</span>
          </div>

          <p class="agreement">
            点击同意 <span class="agreement-link">《用户隐私协议》</span> 和
            <span class="agreement-link">《用户使用通知》</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoginDialogVisible: false,  // 控制登录弹窗显示
      username: '',                 // 用户名输入框
      password: '',                 // 密码输入框
      rememberMe: false,            // 记住密码勾选框
    };
  },
  methods: {
    // 打开登录弹窗
    showLoginDialog() {
      this.isLoginDialogVisible = true;
    },

    // 关闭登录弹窗
    closeLoginDialog() {
      this.isLoginDialogVisible = false;
    },

    // 忘记密码功能
    handleForgotPassword() {
      alert('忘记密码功能还未实现');
    },

    // 用户注册
    handleRegister() {
      alert('新用户注册功能还未实现');
    },

    // 登录功能
    handleLogin() {
      if (this.username && this.password) {
        // 假设：用户名为 "student" 时为学生角色，用户名为 "teacher" 时为教师角色
        const role = this.username === 'student' ? 'student' : this.username === 'teacher' ? 'teacher' : null;

        if (role) {
          // 登录成功，触发父组件的登录成功事件，传递角色信息
          this.$emit('login-success', role);
          this.closeLoginDialog();  // 关闭弹窗
        } else {
          alert('用户名或密码错误');
        }
      } else {
        alert('请填写用户名和密码');
      }
    }
  }
};
</script>

<style scoped>

</style>

