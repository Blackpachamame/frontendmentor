<!-- eslint-disable max-len -->
<template>
  <section id="bienvenida" class="q-mt-sm q-mb-xl">
    <div class="row justify-center items-center">
      <div class="col-12 text-center q-px-md">
        <h1 class="text-h1">Bienvenidos</h1>
      </div>
      <div class="col-12 col-sm-8 col-md-5 text-center q-px-md">
        <p>Si deseas mejorar la gestión de tu estacionamiento,
          registrate para obtener acceso a nuestra plataforma,
          la misma te permitirá establecer una centralización de la actividad,
          generando un estándar de manejo del negocio y de las características
          funcionales de la misma actividad.</p>
        <p>Para agilizar el encuentro de esta clase de establecimientos,
          y consumir dichos servicios descarga nuestra app desde google play.</p>
        <!-- Botones para display mayores que xs -->
        <div class="q-mt-lg gt-xs">
          <q-btn to="register" push color="accent" size="lg"
            class="q-px-lg q-py-xs q-mr-md q-mb-md border-radius-inherit" label="Registrarse" no-caps />
          <q-btn to="mobile" push color="primary" size="lg" target="blank"
            class="q-px-lg q-py-xs q-mb-md border-radius-inherit" no-caps>
            <q-icon left size="1.3em" name="fa-brands fa-google-play" />
            <div>Google Play</div>
          </q-btn>
        </div>
        <!-- Botones para display menores que sm -->
        <div class="q-mt-lg lt-sm">
          <q-btn to="register" push color="accent" size="lg" class="q-mb-md full-width border-radius-inherit"
            label="Registrarse" no-caps />
          <q-btn to="mobile" push color="primary" size="lg" target="blank" class="full-width border-radius-inherit"
            no-caps>
            <q-icon left size="1.3em" name="fa-brands fa-google-play" />
            <div>Google Play</div>
          </q-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.text-h1
  margin-top: 0px
  margin-bottom: 16px
@media(max-width: 600px)
    .text-h1
        font-size: 3rem
</style>
