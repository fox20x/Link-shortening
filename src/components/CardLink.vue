<template>
  <div class="container container--small">
    <div class="ui-card">
      <h1 class="ui-title-3 center">Информация о ссылке</h1>
      <div class="changelog-item">
        <div class="ui-title-3">
          <span>1.0.1</span
          ><span class="text-hide">{{ new Date(dataLink.date).toDateString() }}</span>
        </div>
        <br />
        <div class="changelog-item__log">
          <div class="row">
            <div class="col-xs-5 grid-start">
              <span class="ui-label ui-label--success">Ваша ссылка</span>
            </div>
            <div class="col-xs-7 grid-start">
              <span class="ui-text-regular"><a :href="dataLink.to">{{ dataLink.to }}</a></span>
            </div>
          </div>
        </div>
        <br />
        <div class="changelog-item__log">
          <div class="row">
            <div class="col-xs-5 grid-start">
              <span class="ui-label ui-label--primary">Откуда</span>
            </div>
            <div class="col-xs-7 grid-start">
              <span class="ui-text-regular"><a :href="dataLink.from">{{ dataLink.from }}</a></span>
            </div>
          </div>
        </div>
        <br />
        <div class="changelog-item__log">
          <div class="row">
            <div class="col-xs-5 grid-start">
              <span class="ui-label ui-label--light">Кликов</span>
            </div>
            <div class="col-xs-7 grid-start">
              <span class="ui-text-regular">{{ dataLink.clicks }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataLink"],
};
</script>
