<template>
  <div class="auth">
    <h1>Концепт.Стратегия</h1>
    <div class="auth-modal">
      <p v-for="user in users" :key="user.id">ID: {{ user.id }} 👉 {{ user.name }}</p>      <header>
        <h2>Авторизация</h2>
        <span>X</span>
      </header>
      <input type="text" placeholder="Логин">
      <input type="password" placeholder="Пароль">
      <button>Войти</button>
      <p>Забыли логин или пароль? Написать администратору</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: '',
    }
  },
  async mounted() {
    this.users = await $fetch('https://jsonplaceholder.typicode.com/users')
    this.login();
  },
  methods: {
    async login() {
      try {
        const response = await $fetch('http://localhost/api/v1/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: 'test',
            password: '123',
          }),
        });

        // Обработка ответа, например, сохранение токена
        console.log('Login response:', response);

        // Далее вы можете перенаправить пользователя или обновить компонент
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  }
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
  border-radius: 16px;
  background: #F4F7F9;
  box-shadow: 13px 16px 32px 0px rgba(7, 84, 114, 0.10);
  display: flex;
  flex-direction: column;
  padding: 16px;
  justify-content: center;
  align-items: center;
}

.auth-modal header {
  display: flex;
  align-items: center;
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
</style>
