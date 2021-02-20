<template>
  <div class="row grid-center grid-middle">
    <div class="col-xs-6 col-md-4">
      <div class="ui-card ui-card--shadow">
        <p class="ui-title-2 grid-start">Сократи Ссылку</p>
        <p class="ui-title-3 grid-start">Авторизация</p>
        <br />
        <form @submit.prevent="onSubmit">
          <input 
            id="emailField"
            type="email"
            placeholder="Введите Email"
            v-model="email"
            :class="{inputError: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
           />
           <div 
           class="input-description"
           v-if="$v.email.$dirty && !$v.email.required"
           >Введите Email</div>
           <div 
           class="input-description"
           v-if="$v.email.$dirty && !$v.email.email"
           >Неверный Email</div>

          <input 
            id="PassField" 
            type="password" 
            placeholder="Введите пароль"
            v-model="password"
            :class="{inputError: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
           />
           <div 
           class="input-description"
           v-if="$v.password.$dirty && !$v.password.required"
           >Введите Пароль</div>
           <div 
           class="input-description"
           v-if="$v.password.$dirty && !$v.password.minLength"
           >Минимальная длинна пароля {{ $v.password.$params.minLength.min }}</div>
        
          <div class="row grid-center">
            <div class="col-xs-6">
              <input type="submit" value="Войти" class="button button--plain button-success" @click="onSignIn">
            </div>
            <div class="col-xs-6">
              <input type="button" value="Регистрация" class="button button--plain button-primary" @click="onSignUp">
            </div>
            <div class="col-xs-12"></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { minLength, required, email } from "vuelidate/lib/validators";
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: null
    }
  },
  validations: {
    email: { email, required },
    password: { minLength:minLength(6), required }
  },
  methods: {
    ...mapActions(['register', 'login']),
    async onSubmit() {},
    async onSignIn() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      try {
        const status = await this.login({
          email: this.email,
          password: this.password
        }) || false
        if (status) {
          console.log('Sign IN');
          this.$router.push('/')
        }
      } catch (e) {throw e}
    },
    async onSignUp() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      try {
        const status = await this.register({
          email: this.email,
          password: this.password
        }) || false
        if (status) {
          console.log('Created');
          this.$router.push('/created')
        }
      } catch (e) {throw e}
    }
  }
};
</script>

<style scoped>
form input {
  transition: .5s ease;
}
.inputError {
  border: 1px solid red;
  color: red;
}
.input-description {
  color: red;
  text-align: left;
  position: relative;
  top: -12px;
  left: 1em;
  font-size: 0.8em;
  transition: .5s ease;
}
</style>