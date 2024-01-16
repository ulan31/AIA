<template>
  <article>
    <h1>Концепт.Стратегия</h1>

    <figure>
      <img src="~/assets/images/main.png" alt="main-img"/>
      <figcaption class="bg-img">
        <h2 class="bg-img--header">Информация о продукте</h2>
        <p class="bg-img--text">Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
        <p class="bg-img--text">Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
        <p class="bg-img--text">Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
      </figcaption>
    </figure>

    <button @click="$router.push({path: '/application'})">Оставить заявку</button>
  </article>


</template>

<script></script>

<style scoped>
  article {
    padding-top: 12px;
    padding-bottom: 52px;
  }

  img {
    margin-top: 42px;
    margin-bottom: 24px;
    object-fit: contain;
    width: 100%;
  }

  .bg-img {
    border-radius: 16px;
    background: rgba(7, 84, 114, 0.06);
    padding: 18px 25px;
  }

  .bg-img h2 {
    color: #000F07;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }

  .bg-img p {
    color: #075472;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    margin-top: 20px;
  }

  button {
    margin-top: 32px;
  }
</style>
