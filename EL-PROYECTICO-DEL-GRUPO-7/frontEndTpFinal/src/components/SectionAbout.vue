<!-- eslint-disable max-len -->
<template>
    <section id="about">
        <div class="top-division col-12"></div>
        <div class="row justify-center items-center">
            <div class="col-12 col-md-5">
                <div class="row justify-center">
                    <img src="../assets/car-reserva2.png" alt="car reserva"
                        style="height: auto; min-width: 200px; max-width: 500px;">
                </div>
            </div>
            <div class="col-12 col-md-5 text-white q-px-md">
                <p class="text-h3">About</p>
                <p>Nuestra plataforma esta diseñada para que le sirva particularmente a cada uno de los establecimientos
                    a administrar los servicios de estacionamiento que proveen así como una herramienta
                    para que los usuarios que deseen estacionar puedan hacerlo de manera más fácil y rápida.</p>
                <!-- Botones para display mayores que xs -->
                <div class="q-mt-lg gt-xs">
                    <q-btn to="register" push color="positive" size="lg"
                        class="q-px-lg q-py-xs q-mr-md q-mb-md border-radius-inherit" label="Registrarse" no-caps />
                    <q-btn to="mobile" push color="secondary" size="lg" target="blank"
                        class="q-px-lg q-py-xs q-mb-md border-radius-inherit" no-caps>
                        <q-icon left size="1.3em" name="fa-brands fa-google-play" />
                        <div>Google Play</div>
                    </q-btn>
                </div>
                <!-- Botones para display menores que sm -->
                <div class="q-mt-lg q-mb-lg lt-sm">
                    <q-btn to="register" push color="positive" size="lg"
                        class="q-mb-md full-width border-radius-inherit" label="Registrarse" no-caps />
                    <q-btn to="mobile" push color="secondary" size="lg" target="blank"
                        class="full-width border-radius-inherit" no-caps>
                        <q-icon left size="1.3em" name="fa-brands fa-google-play" />
                        <div>Google Play</div>
                    </q-btn>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="sass" scoped>
@media(max-width: 1024px)
    section > div > div
        text-align: center
@media(max-width: 600px)
    .text-h3
        font-size: 2rem
#about
    background: $primary
    background-image: url(../assets/separator-bottom.svg), linear-gradient($primary, $primary)
    background-repeat: no-repeat
    background-size: 100% 100px, 100%
    background-position: bottom center, 50%
    padding: 0 0 100px 0
.top-division
    padding: 0
    height: 100px
    background-image: url(../assets/separator-bottom.svg)
    background-repeat: no-repeat
    background-size: 100% 100px
    background-position: bottom center
    -webkit-transform: rotate(180deg)
    -moz-transform: rotate(180deg)
    -ms-transform: rotate(180deg)
    -o-transform: rotate(180deg)
    transform: rotate(180deg)
</style>
