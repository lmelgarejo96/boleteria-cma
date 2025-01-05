<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-9.png'
import avatar4 from '@images/avatars/avatar-4.png'
import { useSession } from '@/composables/useSession'

const { usuario, asignacion, loadSession } = useSession()

loadSession()

const accountData = {
  avatarImg: avatar1,
  avatarSecondaryImg: avatar4,
  country: 'Perú',
  timezone: '(GMT-05:00) Lima'
}

const accountDataLocal = ref(structuredClone(accountData))

const timezones = [
  '(GMT-11:00) International Date Line West',
  '(GMT-11:00) Midway Island',
  '(GMT-10:00) Hawaii',
  '(GMT-09:00) Alaska',
  '(GMT-08:00) Pacific Time (US & Canada)',
  '(GMT-08:00) Tijuana',
  '(GMT-07:00) Arizona',
  '(GMT-07:00) Chihuahua',
  '(GMT-07:00) La Paz',
  '(GMT-07:00) Mazatlan',
  '(GMT-07:00) Mountain Time (US & Canada)',
  '(GMT-06:00) Central America',
  '(GMT-06:00) Central Time (US & Canada)',
  '(GMT-06:00) Guadalajara',
  '(GMT-06:00) Mexico City',
  '(GMT-06:00) Monterrey',
  '(GMT-06:00) Saskatchewan',
  '(GMT-05:00) Bogota',
  '(GMT-05:00) Eastern Time (US & Canada)',
  '(GMT-05:00) Indiana (East)',
  '(GMT-05:00) Lima',
  '(GMT-05:00) Quito',
  '(GMT-04:00) Atlantic Time (Canada)',
  '(GMT-04:00) Caracas',
  '(GMT-04:00) La Paz',
  '(GMT-04:00) Santiago',
  '(GMT-03:30) Newfoundland',
  '(GMT-03:00) Brasilia',
  '(GMT-03:00) Buenos Aires',
  '(GMT-03:00) Georgetown',
  '(GMT-03:00) Greenland',
  '(GMT-02:00) Mid-Atlantic',
  '(GMT-01:00) Azores',
  '(GMT-01:00) Cape Verde Is.',
  '(GMT+00:00) Casablanca',
  '(GMT+00:00) Dublin',
  '(GMT+00:00) Edinburgh',
  '(GMT+00:00) Lisbon',
  '(GMT+00:00) London'
]
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard class="mb-4" title="Detalles de la cuenta">

        <VDivider />

        <VCardText>
          <!-- 👉 Form -->
          <VForm v-if="usuario" class="mt-6">
            <VRow>
              <!-- 👉 Full Name -->
              <VCol md="12" cols="12">
                <VTextField
                  v-model="usuario.USUUsuario"
                  placeholder="John"
                  label="Nombre completo"
                  readonly
                />
              </VCol>

              <!-- 👉 Usuario -->
              <VCol cols="12" md="6">
                <VTextField
                  v-model="usuario.USUCodigo"
                  label="Código Usuario"
                  placeholder=""
                  readonly
                />
              </VCol>

              <!-- 👉 Last Name -->
              <VCol md="6" cols="12">
                <VTextField
                  v-model="usuario.PERDescripcion"
                  placeholder=""
                  label="Perfil"
                  readonly
                />
              </VCol>

              <!-- 👉 Organization -->
              <VCol cols="12" md="6">
                <VTextField v-model="usuario.USUDocIde" label="Documento" placeholder="" readonly />
              </VCol>

              <!-- 👉 Timezone -->
              <VCol cols="12" md="6">
                <VSelect
                  v-model="accountDataLocal.timezone"
                  label="Zona Horaria"
                  placeholder="Select Timezone"
                  :items="timezones"
                  :menu-props="{ maxHeight: 200 }"
                  readonly
                />
              </VCol>

              <VCol md="6" cols="12">
                <VTextField
                  v-model="usuario.USUUsuId"
                  placeholder=""
                  label="Identificador"
                  readonly
                />
              </VCol>

              <VCol md="6" cols="12">
                <VTextField
                  v-model="usuario.USUFecCreacion"
                  placeholder=""
                  label="Fecha Creación"
                  readonly
                />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>

      <VCard v-if="asignacion" title="Detalles de la asignación">
        
        <VDivider />

        <VCardText>
          <VForm class="mt-6">
            <VRow>
              <VCol md="6" cols="12">
                <VTextField
                  v-model="asignacion.ABIdAsi"
                  placeholder=""
                  label="ID Asignación"
                  readonly
                />
              </VCol>
              <VCol md="6" cols="12">
                <VTextField
                  v-model="asignacion.ABFecAsi"
                  placeholder=""
                  label="Fecha Asignación"
                  readonly
                />
              </VCol>
              <VCol md="6" cols="12">
                <VTextField
                  v-model="asignacion.BODesBol"
                  placeholder=""
                  label="Estación Asignada"
                  readonly
                />
              </VCol>
              <VCol md="6" cols="12">
                <VTextField
                  v-model="asignacion.BOIPEstacion"
                  placeholder=""
                  label="IP Estación"
                  readonly
                />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
