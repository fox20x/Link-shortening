<template>
  <div>
    <div class="row grid-center">
      <div class="col-xs-6">
        <div class="grid-example-block">
          <br />
          <h1 class="ui-title-1">Домашняя Страница</h1>
          <router-link to="/create">
            <div class="button button--plain button-default">
              Go to &#10230;
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
