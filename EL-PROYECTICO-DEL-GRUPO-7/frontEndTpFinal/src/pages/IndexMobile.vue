<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <img src="../assets/logo.png" alt="logo" style="width: 100px;">
      <p class="title text-weight-bold text-uppercase text-primary">Park-Our</p>
      <div class="q-mt-md q-gutter-y-md" style="min-width: 300px">
        <q-btn to="mobile/index" push color="primary" size="lg" class="full-width border-radius-inherit" label="Login"
          no-caps />
        <q-btn to="register" push color="accent" size="lg" class="full-width border-radius-inherit" label="Registrarse"
          no-caps />
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>
p.title
    font-family: $ff-chichilo
    font-size: 36px
</style>