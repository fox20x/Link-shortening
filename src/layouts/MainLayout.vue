<template>
  <div>
    <div class="wrapper">
      <header>
        <Navbar />
      </header>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
  mounted() {},
  components: {
    Navbar
  }
};
</script>