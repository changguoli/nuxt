<template>
  <div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">{{ isLogin ? 'Sign in' : 'Sign up'}}</h1>
        <p class="text-xs-center">
          <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
          <nuxt-link v-else to="/login">Have an account?</nuxt-link>
        </p>

        <ul class="error-messages">
          <li>That email is already taken</li>
        </ul>

        <form @submit.prevent="onSubmit">
          <fieldset v-if="!isLogin" class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Your Name" required>
          </fieldset>
          <fieldset class="form-group">
            <input v-model="user.email" type="email" class="form-control form-control-lg" placeholder="Email" required>
          </fieldset>
          <fieldset class="form-group">
            <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password" required>
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            {{ isLogin ? 'Sign in' : 'Sign up'}}
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { login } from '@/api/user'
export default {
    name: 'LoginIndex',
    data() {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      async onSubmit() {
        const { data } = await login({
            user: this.user
        })
        console.log(data, '11')
        // 保存用户的登录状态

        // 跳转到首页
        this.$router.push('/')
      }
    },
    computed: {
        isLogin () {
            return this.$route.name === 'login'
        }
    }

}
</script>

<style>

</style>