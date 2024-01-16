<template>
  <div class="auth">
    <h1>Концепт.Стратегия</h1>
    <div class="auth-modal">
      <header class="auth-modal-header">
        <h2>Авторизация</h2>
        <svg class="auth-modal-close" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M6.9998 8.40005L2.0998 13.3C1.91647 13.4834 1.68314 13.575 1.3998 13.575C1.11647 13.575 0.883138 13.4834 0.699804 13.3C0.516471 13.1167 0.424805 12.8834 0.424805 12.6C0.424805 12.3167 0.516471 12.0834 0.699804 11.9L5.5998 7.00005L0.699804 2.10005C0.516471 1.91672 0.424805 1.68338 0.424805 1.40005C0.424805 1.11672 0.516471 0.883382 0.699804 0.700048C0.883138 0.516715 1.11647 0.425049 1.3998 0.425049C1.68314 0.425049 1.91647 0.516715 2.0998 0.700048L6.9998 5.60005L11.8998 0.700048C12.0831 0.516715 12.3165 0.425049 12.5998 0.425049C12.8831 0.425049 13.1165 0.516715 13.2998 0.700048C13.4831 0.883382 13.5748 1.11672 13.5748 1.40005C13.5748 1.68338 13.4831 1.91672 13.2998 2.10005L8.3998 7.00005L13.2998 11.9C13.4831 12.0834 13.5748 12.3167 13.5748 12.6C13.5748 12.8834 13.4831 13.1167 13.2998 13.3C13.1165 13.4834 12.8831 13.575 12.5998 13.575C12.3165 13.575 12.0831 13.4834 11.8998 13.3L6.9998 8.40005Z" fill="#7F675B"/>
        </svg>
      </header>
      <input type="text" v-model="login" placeholder="Логин">
      <input type="password" v-model="password" placeholder="Пароль">
      <button @click="$router.push({path: '/step'})" class="my-btn" :class="{'my-ok': isOk}">Войти</button>
      <p>Забыли логин или пароль? Написать администратору</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: '',
      login: '',
      password: ''
    }
  },
  computed: {
    isOk() {
      console.log('dsads')
      if(this.login && this.password) {
        return true;
      }
      return  false;
    }
  },
}
</script>

<style scoped>
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.auth-modal {
  margin-top: 100px;
  border-radius: 16px;
  background: #F4F7F9;
  /*box-shadow: 13px 16px 32px 0px rgba(7, 84, 114, 0.10);*/
  box-shadow: -3px -29px 35px rgba(255, 255, 255, 1), 1px 32px 32px rgba(255, 255, 255, 1);
  /*box-shadow: 8px 8px 8px 0px rgba(36, 105, 131, 0.08);*/
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: center;
  align-items: center;
  width: 30%;
}

.auth-modal header {
  display: flex;
  align-items: baseline;
}

.auth-modal-close {
  margin-left: 180px;
}

.auth-modal p {
  color: #246983;
  text-align: center;
  font-size: 10px;
  font-weight: 700;
}

.auth-modal button {
  margin-top: 12px;
  margin-bottom: 12px;
}

.my-btn {
  background: #303030;
}

.my-ok {
  background: #246983;
}

</style>
