<template>
  <article>
    <nav>
      <h1>Концепт.Стратегия</h1>
      <span class="page" @click="$router.push({path: '/'})">Главная</span>
      <span class="fio">И.А.</span>
    </nav>

    <div class="hint">
      <div class="hint-section">
        <span class="hint-title">Подсказка!</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M11.9998 13.4L7.0998 18.3C6.91647 18.4834 6.68314 18.575 6.3998 18.575C6.11647 18.575 5.88314 18.4834 5.6998 18.3C5.51647 18.1167 5.4248 17.8834 5.4248 17.6C5.4248 17.3167 5.51647 17.0834 5.6998 16.9L10.5998 12L5.6998 7.10005C5.51647 6.91672 5.4248 6.68338 5.4248 6.40005C5.4248 6.11672 5.51647 5.88338 5.6998 5.70005C5.88314 5.51672 6.11647 5.42505 6.3998 5.42505C6.68314 5.42505 6.91647 5.51672 7.0998 5.70005L11.9998 10.6L16.8998 5.70005C17.0831 5.51672 17.3165 5.42505 17.5998 5.42505C17.8831 5.42505 18.1165 5.51672 18.2998 5.70005C18.4831 5.88338 18.5748 6.11672 18.5748 6.40005C18.5748 6.68338 18.4831 6.91672 18.2998 7.10005L13.3998 12L18.2998 16.9C18.4831 17.0834 18.5748 17.3167 18.5748 17.6C18.5748 17.8834 18.4831 18.1167 18.2998 18.3C18.1165 18.4834 17.8831 18.575 17.5998 18.575C17.3165 18.575 17.0831 18.4834 16.8998 18.3L11.9998 13.4Z" fill="#246983"/>
        </svg>
      </div>

      <div class="hint-section hint-section-body">
        <p>Это была одна из моих мантр – фокусирование и простота. Простое может быть сложнее, чем сложное: вам придется усердно работать, чтобы очистить свое мышление, чтобы сделать его простым. Но в конце концов оно того стоит, потому что, как только вы доберетесь до цели, вы сможете двигать горы.  - Стив Джобс</p>
        <button>Продолжить Шаг 3</button>
      </div>
    </div>

    <div class="section">
      <div class="section-left">
        <div class="methodology">
          <div class="methodology-header">
            <span class="methodology-header-title">Методология</span>
            <span class="methodology-pic">pic</span>
          </div>

          <h2 class="methodology-title">Концепт-стратегия онлайн</h2>

<!--          <div class="progress">-->
<!--            <div class="progress-text">30% пройдено</div>-->
<!--            <div class="progress-step">-->
<!--              <div class="step"></div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>

      <div class="section-right">
        <div class="lesson-step">
          <div @click="open1" class="lesson-step-header">
            <span class="lesson-step-title">step1_course1</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 22L17.99 16L14 12L17.99 7.99L18 2H6V8L10 12L6 15.99V22H18ZM8 7.5V4H16V7.5L12 11.5L8 7.5Z" fill="#246983"/>
            </svg>
            <svg v-if="!isOpen1" class="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 8L12 16L20 8" stroke="#246983" stroke-width="2" stroke-linecap="square"/>
            </svg>
            <svg v-else class="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 16L12 8L4 16" stroke="#246983" stroke-width="2" stroke-linecap="square"/>
            </svg>
          </div>

          <div v-if="isOpen1" class="lesson-step-body">
            <p>Step 1 Course 1</p>
            <div class="lesson-step-section">
              <img src="~/assets/images/lesson-map.png" alt="">
              <button>Продолжить шаг</button>
            </div>
          </div>
        </div>

        <div class="lesson-step">
          <div @click="open2" class="lesson-step-header">
            <span class="lesson-step-title">step2_course1</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 22L17.99 16L14 12L17.99 7.99L18 2H6V8L10 12L6 15.99V22H18ZM8 7.5V4H16V7.5L12 11.5L8 7.5Z" fill="#246983"/>
            </svg>
            <svg v-if="!isOpen2" class="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 8L12 16L20 8" stroke="#246983" stroke-width="2" stroke-linecap="square"/>
            </svg>
            <svg v-else class="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 16L12 8L4 16" stroke="#246983" stroke-width="2" stroke-linecap="square"/>
            </svg>
          </div>

          <div v-if="isOpen2" class="lesson-step-body">
            <p>Step 2 Course 1</p>
            <div class="lesson-step-section">
              <img src="~/assets/images/lesson-map.png" alt="">
              <button>Продолжить шаг</button>
            </div>
          </div>
        </div>

        <div class="lesson-step">
          <div @click="open3" class="lesson-step-header">
            <span class="lesson-step-title">step3_course1</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 22L17.99 16L14 12L17.99 7.99L18 2H6V8L10 12L6 15.99V22H18ZM8 7.5V4H16V7.5L12 11.5L8 7.5Z" fill="#246983"/>
            </svg>
            <svg v-if="!isOpen3" class="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 8L12 16L20 8" stroke="#246983" stroke-width="2" stroke-linecap="square"/>
            </svg>
            <svg v-else class="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 16L12 8L4 16" stroke="#246983" stroke-width="2" stroke-linecap="square"/>
            </svg>
          </div>

          <div v-if="isOpen3" class="lesson-step-body">
            <p>Step 3 Course 1</p>
            <div class="lesson-step-section">
              <img src="~/assets/images/lesson-map.png" alt="">
              <button>Продолжить шаг</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false
    }
  },
  methods: {
    open1() {
      this.isOpen1 = !this.isOpen1;
    },
    open2() {
      this.isOpen2 = !this.isOpen2;
    },
    open3() {
      this.isOpen3 = !this.isOpen3;
    }
  }
}
</script>

<style scoped>
article {
  padding-top: 12px;
  padding-bottom: 52px;
}

nav {
  display: flex;
  align-items: baseline;
}

nav h1 {
  flex: 1 1 auto;
}

nav .page {
  color: #246983;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

nav .fio {
  display: flex;
  width: 56px;
  height: 56px;
  padding: 16px 12px 16px 11px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 41px;
  background: #7CA5B5;
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  margin-left: 48px;
  margin-right: 12px;
  cursor: pointer;
}

.hint {
  border-radius: 16px;
  background: #F4F7F9;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 19px;
  padding-bottom: 15px;
  margin-top: 56px;
}

.hint-section {
  display: flex;
  justify-content: space-between;
}

.hint-section p {
  color: #246983;
  font-size: 12px;
  font-weight: 600;
  width: 60%;
}

.hint-section button {
  height: 42px;
  width: 300px;
}

.hint-title {
  color: #080705;
  font-size: 16px;
  font-weight: 700;
}

.hint-section-body {
  margin-top: 20px;
}

.section {
  display: flex;
  justify-content: space-between;
  margin-top: 56px;
}

.section-left {
  width: 25%;
}

.section-right {
  width: 60%;
}

.methodology {
  border-radius: 8px;
  background: #F4F7F9;
  padding: 24px;
}

.methodology-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.methodology-header-title {
  color: #080705;
  font-size: 16px;
  font-weight: 500;
}

.methodology-pic {
  display: inline-flex;
  padding: 12px 12px 12px 11px;
  justify-content: center;
  align-items: center;
  border-radius: 4.8px;
  background: #FFF;
  color: #CECECE;
  font-size: 16px;
  font-weight: 500;
}

.methodology-title {
  margin-top: 25px;
  color: #080705;
  font-size: 24px;
  font-weight: 700;
}

.progress {
  margin-top: 52px;
}

.progress-text {
  color: #080705;
  font-size: 16px;
  font-weight: 500;
}

.progress-step {
  display: flex;
}

.lesson-step-header {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.lesson-step {
  padding: 16px;
  border-bottom: 2px solid #F4F7F9;
}

.lesson-step-title {
  color: #000F07;
  font-size: 24px;
  font-weight: 700;
}

.ok {
  margin-left: 16px;
}

.arrow {
 margin-left: auto;
}

.lesson-step-body {
  margin-top: 16px;

}

.lesson-step-body {
  color: #246983;
  font-size: 16px;
  font-weight: 400;
}

.lesson-step-section {
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  align-items: flex-end;
}

.lesson-step-section img {
  width: 60%;
  border-radius: 20px;
}

.lesson-step-section button {
  width: 30%;
  height: 42px;
  border-radius: 12px;
  border: 2px solid #246983;
  color: #246983;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background: #fff;
  padding: 10px 16px;
}

.lesson-step-section button:hover {
  background: var(--btn-bg-color, #246983);
  color: #fff;
}
</style>
