<!-- eslint-disable max-len -->
<template>
    <!-- Luis -->
    <q-card class="q-my-xl">
        <q-img class="img-contact" src="../assets/luisContact.jpg"></q-img>

        <div class="content column justify-end items-center">
            <q-card-section class="text-center">
                <span class="text-h6">Luis Cañete</span><br>
                <span class="contact-cite text-subtitle1">Odio a Mario Bros</span>

                <q-card-actions class="justify-center">
                    <q-btn round dense unelevated href="https://github.com/Venserthesojourner" target="_blank"
                        icon="fa-brands fa-github" size=" 24px" />
                </q-card-actions>
            </q-card-section>
        </div>
    </q-card>
    <!-- Manuel -->
    <q-card class="q-my-xl">
        <q-img class="img-contact" src="../assets/manuContact.jpg"></q-img>

        <div class="content column justify-end items-center">
            <q-card-section class="text-center">
                <span class="text-h6">Manuel Ortiz</span><br>
                <span class="contact-cite text-subtitle1">Wakandaaaaaa</span>

                <q-card-actions class="justify-center">
                    <q-btn round dense unelevated href="https://github.com/hctmanuelortiz" target="_blank"
                        icon="fa-brands fa-github" size=" 24px" />
                </q-card-actions>
            </q-card-section>
        </div>
    </q-card>
    <!-- Marcos -->
    <q-card class="q-my-xl">
        <q-img class="img-contact" src="../assets/marcosContact.jpg"></q-img>

        <div class="content column justify-end items-center">
            <q-card-section class="text-center">
                <span class="text-h6">Marcos Travaglini</span><br>
                <span class="contact-cite text-subtitle1">Que interesante Marge</span>

                <q-card-actions class="justify-center">
                    <q-btn round dense unelevated href="https://github.com/Blackpachamame" target="_blank"
                        icon="fa-brands fa-github" size=" 24px" />
                </q-card-actions>
            </q-card-section>
        </div>
    </q-card>
</template>

<style lang="sass" scoped>
.q-card
    width: 250px
    height: 150px
    border-radius: 20px
    transition: 0.5s
    & .img-contact
        position: absolute
        left: 50%
        top: -50px
        transform: translateX(-50%)
        width: 100px
        height: 100px
        background: #fff
        border-radius: 20px
        box-shadow: 0 15px 50px rgba(0,0,0,0.35)
        transition: 0.5s
    & .content
        position: absolute
        width: 100%
        height: 100%
        overflow: hidden
        & .q-card__section
            width: 100%
            transition: 0.5s
            transform: translateY(75px)
            & .contact-cite
                color: $primary
    &:hover
        height: 280px
        & .img-contact
            width: 150px
            height: 150px
        & .q-card__section
            transform: translateY(0px)
</style>
