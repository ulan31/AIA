<template>
  <div class="auth">
    <h1>Концепт.Стратегия</h1>
    <div class="auth-modal">
      <header>
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
