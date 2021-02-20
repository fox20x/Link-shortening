<template>
  <div class="row grid-center">
    <br />
    <div class="col-xs-8">
      <div class="grid-example-block ">
        <table class="ui-table ui-table--hover">
          <thead>
            <tr>
              <th><span>№</span></th>
              <th><span>Оригинал</span></th>
              <th><span>Сокращенная</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) of links" :key="item._id">
              <td><span class="ui-text-regular">{{ index }}</span></td>
              <td><span class="ui-text-regular">{{ item.from }}</span></td>
              <td><span class="ui-text-regular">{{ item.to }}</span></td>
              <td><router-link :to="`/detail/${item._id}`">Открыть</router-link></td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      links: []
    }
  },
  methods: {
    ...mapActions(['getLinks'])
  },
  async mounted() {
    this.links = await this.getLinks()

    setTimeout(() => {
      this.loader = false;
    }, 1000);
  }
}
</script>
