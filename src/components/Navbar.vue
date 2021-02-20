<template>
    <div class="navbar navbar--black">
      <div class="container">
        <div class="navbar-content">
          <router-link
          to="/"
          class="header-logo white-text"
          >
            <h1>Сократи Ссылку</h1
          ></router-link>
          <div class="button-burger">
            <span class="line line-1"></span
            ><span class="line line-2"></span
            ><span class="line line-3"></span>
          </div>
          <div class="navbar-list__wrapper">
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link of links" :key="link.path">
                <router-link
                :to="link.path"
                class="navbar-link"
                active-class="active-link"
                :exact = link.exact
                >
                {{ link.name }}
                </router-link>
              </li>
              <li class="navbar-item">
                  <div class="button button-light" @click="onLogout">Выход</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      links: [
        { path: '/create', name: 'Создать', exact: false},
        { path: '/links', name: 'Ссылки', exact: false},
      ]
    }
  },
  methods: {
    ...mapActions(['logout']),
    async onLogout() {
      await this.logout()
      await this.$router.push('/auth')
    }
  },
  mounted() {
    import('uimini/dist/js/uimini')
  }
}
</script>
