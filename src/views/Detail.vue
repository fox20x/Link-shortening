<template>
  <div class="row grid-center">
    <br />
    <Loader v-if="loader" />
    <div class="col-xs-12" v-if="!loader">
      <div class="grid-example-block">
        <br />
        <CardLink :dataLink="dataLink"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CardLink from '@/components/CardLink'

export default {
  data() {
    return {
      loader: true,
      dataLink: null
    };
  },
  computed: {
    idPage() {
      return this.$route.params.id;
    },
  },
  methods: {
    ...mapActions(["getLinkById"]),
    
  },
  async mounted() {
    this.dataLink = await this.getLinkById(this.idPage)
    setTimeout(() => {
      this.loader = false;
    }, 1000);
  },
  components: {
    CardLink
  }
};
</script>
