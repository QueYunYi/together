<template>
  <div>
    <!-- 学生端登录按钮 -->
    <button @click="openLoginModal" class="login-btn">学生端登录</button>
    <button @click="openLoginModal" class="login-btn">教师端登录</button>

    <!-- 登录弹窗 -->
    <div v-if="isLoginModalOpen" class="modal-overlay" @click="closeLoginModal">
      <div class="modal-content" @click.stop>
        <h2>登录</h2>
        <form @submit.prevent="handleLogin">
          <div class="input-group">
            <label for="login-name">用户名</label>
            <input type="text" id="login-name" v-model="name" placeholder="请输入用户名" />
          </div>
          <div class="input-group">
            <label for="login-password">密码</label>
            <input type="password" id="login-password" v-model="password" placeholder="请输入密码" />
          </div>

          <!-- 记住密码勾选框 -->
          <div class="remember-me">
            <input type="checkbox" id="remember" v-model="remember" />
            <label for="remember" class="remember-label">记住密码</label>
            <span @click="openRegisterModal" class="register-link">注册</span>
          </div>

          <button type="submit" class="submit-btn">登录</button>
          
          <!-- 显示响应结果 -->
          <div v-if="response">
            <pre>{{ response }}</pre>
          </div>
          <div v-if="error">
            <p>{{ error.message }}</p>
          </div>
          
          <!-- 用户协议和须知 -->
          <div class="agreement-text">
            <div class="agreement-checkbox">
              <input type="checkbox" id="agree" v-model="isAgreed" />
              <span>
                <a href="#" class="agreement-link">《用户使用协议》</a> 和
                <a href="#" class="agreement-link">《用户使用须知》</a>
              </span>
            </div>
          </div>
        </form>
        <button class="close-btn" @click="closeLoginModal">关闭</button>
      </div>
    </div>

    <!-- 注册弹窗 -->
    <div v-if="isRegisterModalOpen" class="modal-overlay" @click="closeRegisterModal">
      <div class="modal-content" @click.stop>
        <button class="return-btn" @click="openLoginModal(); closeRegisterModal()">返回登录</button>
        <h2>注册</h2>
        <form @submit.prevent="handleRegister">
          <div class="input-group">
            <label for="register-phone">用户名</label>
            <input type="text" id="register-phone" v-model="registerName" placeholder="请输入用户名" />
          </div>
          <div class="input-group">
            <label for="register-password">密码</label>
            <input type="password" id="register-password" v-model="registerPassword" placeholder="请输入密码" />
          </div>
          
          <!-- 新增的确认密码输入框 -->
          <div class="input-group">
            <label for="confirm-password">确认密码</label>
            <input type="password" id="confirm-password" v-model="confirmPassword" placeholder="请确认密码" />
          </div>

          <button type="submit" class="submit-btn">提交</button>
        </form>
        <button class="close-btn" @click="closeRegisterModal">关闭</button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      phone: '', // 登录手机号
      password: '', // 登录密码
      remember: false, // 用于存储复选框状态
      isAgreed: false, // 用户协议同意状态
      isLoginModalOpen: false, // 控制登录弹窗的显示与隐藏
      isRegisterModalOpen: false, // 控制注册弹窗的显示与隐藏
      registerPhone: '', // 注册手机号
      registerPassword: '', // 注册密码
      confirmPassword: '', // 确认密码
      response: null,
      error: null,
    };
  },
  methods: {
    openLoginModal() {
      this.isLoginModalOpen = true; // 打开登录弹窗
    },
    closeLoginModal() {
      this.isLoginModalOpen = false; // 关闭登录弹窗
    },
    openRegisterModal() {
      this.isRegisterModalOpen = true; // 打开注册弹窗
      this.closeLoginModal(); // 关闭登录弹窗
    },
    closeRegisterModal() {
      this.isRegisterModalOpen = false; // 关闭注册弹窗
    },
    async handleLogin() {
      console.log("用户名:", this.phone);
      console.log("密码:", this.password);
      console.log("记住密码:", this.remember);
      
      // 在这里执行登录请求
      try {
        const res = await axios.post('服务器网址/login', {
          phone: this.phone,
          password: this.password,
        });
        if (res.data.success) {
          // 假设响应包含一个角色字段 role（'student' 或 'teacher'）
          const role = res.data.role;
          this.$router.push(`/${role}`); // 跳转到学生端或教师端
          this.closeLoginModal(); // 关闭登录弹窗
        } else {
          alert('登录失败，请检查用户名和密码');
        }
      } catch (err) {
        console.error(err);
        alert('登录失败，请稍后再试');
      }
    },
    async handleRegister() {
      // 判断密码和确认密码是否一致
      if (this.registerPassword !== this.confirmPassword) {
        alert('密码和确认密码不一致，请重新输入。');
        return;
      }
      
      console.log("注册用户名:", this.registerPhone);
      console.log("注册密码:", this.registerPassword);
      console.log("确认密码:", this.confirmPassword);
      
      // 在这里执行注册请求
      try {
        const res = await axios.post('服务器网址/register', {
          phone: this.registerPhone,
          password: this.registerPassword,
        });
        if (res.data.success) {
          alert('注册成功！请登录');
          this.closeRegisterModal();
          this.openLoginModal();
        } else {
          alert('注册失败，请稍后再试');
        }
      } catch (err) {
        console.error(err);
        alert('注册失败，请稍后再试');
      }
    },
  }
};
</script>


<style scoped>
/* 按钮样式 */
.login-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.login-btn:hover {
  background-color: #0056b3;
}

/* 弹窗遮罩层样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* 弹窗内容样式 */
.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-content h2 {
  font-size: 18px;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
}

.input-group input {
  width: calc(100% - 20px); /* 使输入框宽度略小于弹窗 */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box; /* 确保输入框宽度计算包含padding */
}

/* 记住密码勾选框样式 */
.remember-me {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.remember-me input {
  margin-right: 5px;
}

.remember-label {
  font-size: 14px;
  color: #666;
}

.register-link {
  margin-left: auto;
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
}

.register-link:hover {
  color: #0056b3;
}

/* 提交按钮样式 */
.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-btn:hover {
  background-color: #0056b3;
}

/* 关闭按钮样式 */
.close-btn {
  margin-top: 10px;
  padding: 8px;
  background-color: #ccc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.retrun-btn {
  margin-top: 10px;
  padding: 8px;
  background-color: #ccc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.close-btn:hover {
  background-color: #888;
}

/* 用户协议文本样式 */
.agreement-text {
  font-size: 12px;
  color: #666;
  margin-top: 10px;
  text-align: center;
}

.agreement-checkbox {
  display: flex;
  align-items: center;
  justify-content: center; /* 使勾选框和文本水平排列 */
  gap: 5px; /* 适当增加勾选框与文本之间的间隔 */
}

.agreement-checkbox input {
  margin: 0;
}

.agreement-link {
  color: #007bff;
  text-decoration: none;
}

.agreement-link:hover {
  text-decoration: underline;
}
</style>
