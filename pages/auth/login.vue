<template>
  <b-col lg="4" class="mx-auto">
    <b-card no-body>
      <b-card-body class="p-0 bg-black auth-header-box rounded-top">
        <div class="text-center p-3">
          <NuxtLink to="/" class="logo logo-admin">
            <img :src="logoSm" height="50" alt="logo" class="auth-logo" />
          </NuxtLink>
          <h4 class="mt-3 mb-1 fw-semibold text-white fs-18">Let's Get Started Rizz</h4>
          <p class="text-muted fw-medium mb-0">Sign in to continue to Rizz.</p>
        </div>
      </b-card-body>
      <b-card-body class="pt-0">
        <b-form class="my-4" @submit.prevent="handleLogin">
          <b-form-group class="mb-2" label="Username" label-for="username">
            <b-form-input type="text" placeholder="Enter username" id="username" v-model="v.email.$model" />
            <div v-if="v.email.$error" class="text-danger">
              <span v-for="(err, idx) in v.email.$errors" :key="idx">
                {{ err.$message }}
              </span>
            </div>
          </b-form-group>

          <b-form-group class="mb-2" label="Password" label-for="userpassword">
            <b-form-input type="password" placeholder="Enter password" id="userpassword" v-model="v.password.$model" />
            <div v-if="v.password.$errors" class="text-danger">
              <span v-for="(err, idx) in v.password.$errors" :key="idx">
                {{ err.$message }}
              </span>
            </div>
          </b-form-group>

          <div class="form-group row mt-3">
            <b-col sm="6">
              <div class="form-switch-success">
                <b-form-checkbox switch>Remember me</b-form-checkbox>
              </div>
            </b-col>
            <b-col sm="6" class="text-end">
              <NuxtLink to="/auth/reset-pass" class="text-muted font-13"><i class="dripicons-lock"></i> Forgot password?</NuxtLink>
            </b-col>
          </div>

          <b-form-group class="mb-0 row">
            <b-col cols="12">
              <div class="d-grid mt-3">
                <b-button variant="primary" type="submit">Log In <i class="fas fa-sign-in-alt ms-1"></i></b-button>
              </div>
            </b-col>
          </b-form-group>
        </b-form>
        <div class="text-center mb-2">
          <p class="text-muted">
            Don't have an account ?
            <NuxtLink to="/auth/register" class="text-primary ms-2"> Free Resister </NuxtLink>
          </p>
          <h6 class="px-3 d-inline-block">Or Login With</h6>
        </div>
        <div class="d-flex justify-content-center">
          <a href="" class="d-flex justify-content-center align-items-center thumb-md bg-blue-subtle text-blue rounded-circle me-2">
            <i class="fab fa-facebook align-self-center"></i>
          </a>
          <a href="" class="d-flex justify-content-center align-items-center thumb-md bg-info-subtle text-info rounded-circle me-2">
            <i class="fab fa-twitter align-self-center"></i>
          </a>
          <a href="" class="d-flex justify-content-center align-items-center thumb-md bg-danger-subtle text-danger rounded-circle">
            <i class="fab fa-google align-self-center"></i>
          </a>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import { reactive, computed } from 'vue'
import logoSm from '~/assets/images/logo-sm.png'
import { required, email } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

definePageMeta({
  layout: 'auth',
  title: 'Sign In'
})

const credentials = reactive({
  email: 'user@email.com',
  password: 'password'
})

const vuelidateRules = computed(() => ({
  email: { required, email },
  password: { required }
}))

const v = useVuelidate(vuelidateRules, credentials)

const { query } = useRoute()

const handleLogin = async () => {
  const result = await v.value.$validate()

  if (result) {
    try {
      // validate user on backend
      const user = useCookie('__rizz_user__')
      user.value = credentials.email
      redirectUser()
    } catch (e: any) {}
  }
}

const redirectUser = () => {
  if (query.redirectedFrom) {
    return navigateTo(`${query.redirectedFrom}`)
  }
  return navigateTo('/')
}
</script>
