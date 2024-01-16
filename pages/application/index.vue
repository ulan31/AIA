<template>
  <article>
    <h1>Концепт.Стратегия</h1>

    <div class="main">
      <div class="main-left">
        <img src="~/assets/images/Yuriy.png" class="main-img" alt="yuri">
        <h2 class="main-header">Юрий Данилевский</h2>
        <p class="main-text">Старший консультант Института Адизеса (Senior Adizes Symbergetic™ Consultant) в области организационного развития
          Партнер компании abc Адизес Бизнес Консалтинг https://adizes.ru</p>
        <p class="main-text">Окончил 1-й Ленинградский медицинский институт им.акад. И.П.Павлова и клиническую ординатуру в ВНИИ пульмонологии.
          В течение 18 лет работал в крупнейших международных фармацевтических компаниях (Merck Sharp & Dohme; Abbott), где прошел путь от представителя до директора бизнес единиц в России/СНГ. Работал в составе международных групп по развитию инновационных продуктов.</p>
        <p class="main-text">Имеет большой опыт в области управления программами по достижению коммерческого совершенства (Commercial Excellence), что позволяло представительствам глобальных компаний завоевывать 1 место по росту продаж и прибыли.</p>
        <p class="main-text">После решения об окончании карьеры в операционном бизнесе работал самостоятельным бизнес-консультантом. Осуществил успешные трансформации компаний в клиент-ориентированные организации, разрабатывая и внедряя программы развития эффективности управления маркетингом и продажами.</p>
        <p class="main-text">В качестве лидера проектов и бизнес консультанта Института Адизеса проводил трансформацию систем менеджмента компаний в различных индустриях: телекоммуникации; логистика; производство и продажа: сельскохозяйственной продукции, дизайнерской одежды и аксессуаров, ювелирной продукции; мебели; оборудования для строительства; оптовая и розничная торговля: строительными материалами, FMCG; девелоперские и строительные компании; банки; железнодорожные и автомобильные перевозки; общественное питание и др. в России, Казахстане, Азербайджане, Украине, Грузии.</p>
        <p class="main-text">Программа трансформации включает диагностику, создание системы управления изменениями, разработку стратегии, изменение организационной структуры, структуры полномочий и вознаграждения, разработку бизнес-процессов и информационной системы организаций.</p>
        <p class="main-text">Проводил семинары в правительствах регионов Российской Федерации. Разработал и проводит семинары для владельцев и генеральных директоров компаний.
          Проходил обучение по программам Executive Education. Владеет русским и английским языками.</p>
      </div>
      <div class="main-right">
        <form class="main-form">
          <h2 class="main-form-header">Оставить заявку</h2>

          <h3 class="main-form-sub-header">Личные данные</h3>
          <input type="text" placeholder="Фамилия">
          <input type="text" placeholder="Имя">
          <input type="text" placeholder="Почта">
          <input type="number" placeholder="Контактный номер">

          <h3 class="main-form-sub-header">Данные о компании</h3>
          <input type="text" placeholder="Название">
          <input type="text" placeholder="Сфера">
          <input type="number" placeholder="Количество сотрудников">
          <input type="number" placeholder="Оборот">

          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  </article>
</template>

<style scoped>
  article {
    padding-top: 12px;
    padding-bottom: 52px;
    padding-left: 20px;
    padding-right: 20px;
  }

  img {
    border-radius: 16px;
    background: lightgray 50% / cover no-repeat;
    mix-blend-mode: luminosity;
    object-fit: contain;
    width: 100%;
  }

  .main {
    display: flex;
    justify-content: space-between;
    margin-top: 47px;
  }

  .main-header {
    margin-top: 30px;
    color: #000F07;
    font-size: 32px;
    font-weight: 700;
  }

  .main-left {
    width: 50%;
  }

  .main-text:first-child {
    margin-top: 32px;
  }

  .main-text {
    margin-top: 38px;
    color: #075472;
    font-size: 12px;
    font-weight: 600;
  }

  .main-right {
    width: 40%;
  }

  .main-img {
    width: 409px;
    height: 479px;
  }

  .main-form {
    border-radius: 16px;
    background: #F4F7F9;
    padding: 16px;
  }

  .main-form-header {
    color: #246983;
    text-align: center;
    font-size: 32px;
    font-weight: 600;
  }

  .main-form-sub-header {
    color: #246983;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  button[type="submit"] {
    margin-top: 23px;
  }
</style>
