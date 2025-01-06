<script setup lang="ts">
import { useTheme } from 'vuetify'
import logo from '@images/logo-b.svg?raw'
import authV1MaskDark from '@images/pages/auth-v1-mask-dark.png'
import authV1MaskLight from '@images/pages/auth-v1-mask-light.png'
import authV1Tree2 from '@images/pages/auth-v1-tree-2.png'
import authV1Tree from '@images/pages/auth-v1-tree.png'
import { useLogin } from '@/composables/useLogin'
import { VCardText } from 'vuetify/lib/components/index.mjs'
import { useSession } from '@/composables/useSession'
import { useRoute, useRouter } from 'vue-router'

const { numeroIp } = useSession()
const { signInData, signInError, loading, login } = useLogin()

const vuetifyTheme = useTheme()
const route = useRoute()
const router = useRouter()

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
})

onBeforeMount(() => {
  if (route.query?.error) {
    signInError.value.message = route.query?.error as string
  }
  router.replace({ query: {} })
})
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->

  <section class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard class="auth-card pa-4 pt-7" max-width="448">
      <VCardItem class="justify-center">
        <RouterLink to="/" class="d-flex align-center gap-3">
          <!-- eslint-disable vue/no-v-html -->
          <div class="d-flex w-80" v-html="logo" />
        </RouterLink>
      </VCardItem>

      <VCardText class="pt-2">
        <h4 class="text-h4 mb-1 text-center">Sistema de Boleteria</h4>
        <!-- <p class="mb-0 text-center">Boleteria no registrada</p> -->
        <p class="mb-0 text-center">
          IP: <span>{{ numeroIp }}</span>
        </p>
      </VCardText>

      <VCardText>
        <v-alert v-if="signInError.message" :text="signInError.message" type="error"></v-alert>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="login">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField v-model="signInData.username" label="Usuario" type="text" />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="signInData.password"
                label="Contraseña"
                placeholder="············"
                :type="signInData.isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="
                  signInData.isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'
                "
                @click:append-inner="signInData.isPasswordVisible = !signInData.isPasswordVisible"
              />
            </VCol>
            <VCol cols="12">
              <!-- login button -->
              <VBtn
                class="text-uppercase btnLogin"
                block
                type="submit"
                :loading="loading"
                :disabled="loading"
              >
                Ingresar
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VImg class="auth-footer-start-tree d-none d-md-block" :src="authV1Tree" :width="250" />

    <VImg :src="authV1Tree2" class="auth-footer-end-tree d-none d-md-block" :width="350" />

    <!-- bg img -->
    <VImg class="auth-footer-mask d-none d-md-block" :src="authThemeMask" />
  </section>
</template>

<style lang="scss">
@use '@core/scss/template/pages/page-auth';
.w-80 {
  width: 150px;
  justify-content: center;
}
.btnLogin {
  background: #2e3e53 !important;
}
</style>
