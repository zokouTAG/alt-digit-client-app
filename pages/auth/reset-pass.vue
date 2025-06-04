<template>
  <b-col lg="4" class="mx-auto">
    <b-card no-body>
      <b-card-body class="p-0 bg-black auth-header-box rounded-top">
        <div class="text-center p-3">
          <NuxtLink to="/" class="logo logo-admin">
            <img :src="logoSm" height="50" alt="logo" class="auth-logo" />
          </NuxtLink>
          <h4 class="mt-3 mb-1 fw-semibold text-white fs-18">Reset Password</h4>
          <p class="text-muted fw-medium mb-0">Enter your Email and instructions will be sent to you!</p>
        </div>
      </b-card-body>
      <b-card-body class="pt-0">
        <b-form class="my-4" action="/">
          <b-form-group class="mb-2" label="Email" label-for="userEmail">
            <b-form-input type="email" name="Email" class="mb-2" placeholder="Enter Email Address" id="userEmail" />
          </b-form-group>

          <b-form-group class="mb-0 row">
            <b-col cols="12">
              <div class="d-grid mt-3">
                <b-button variant="primary" type="button">Reset <i class="fas fa-sign-in-alt ms-1"></i></b-button>
              </div>
            </b-col>
          </b-form-group>
        </b-form>
        <div class="text-center mb-2">
          <p class="text-muted">Remember It ? <NuxtLink to="/auth/login" class="text-primary ms-2">Sign in here </NuxtLink></p>
        </div>
      </b-card-body>
    </b-card>
  </b-col>
</template>
<script setup lang="ts">
import logoSm from '~/assets/images/logo-sm.png'

definePageMeta({
  layout: 'auth',
  title: 'Reset Password'
})
</script>
