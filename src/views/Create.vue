<template>
  <div class="row grid-center">
    <div class="col-xs-6">
      <div class="grid-example-block">
        <br />
        <form @submit.prevent="onHandler">
          <label for="link">Поле для вашей ссылки</label>
          <input
            id="link"
            type="text"
            placeholder="Вставте ссылку"
            v-model="link"
          />
          <div class="ui-checkbox-wrapper">
            <input
              class="button button--plain button-primary"
              type="submit"
              value="Сократить"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      link: "",
    };
  },
  methods: {
    ...mapActions(["linkGenerate"]),
    async onHandler() {
      const response = await this.linkGenerate({ dataReq: {from: link.value} })
      if (response.link._id) {
        this.$router.push('/detail/' + response.link._id)
      }
    },
  },
};
</script>
