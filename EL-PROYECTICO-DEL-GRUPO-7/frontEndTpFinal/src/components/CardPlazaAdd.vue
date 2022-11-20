<!-- eslint-disable max-len -->
<template>
    <q-card dark class="q-ma-sm row justify-center items-center" style="height: 250px; width: 200px">
        <q-card-section>
            <q-btn-group push>
                <q-btn color="positive" outline round icon="add" size="25px" @click="agregarPlaza()" />
            </q-btn-group>
        </q-card-section>
    </q-card>
</template>

<script>

export default { props: { agregarPlaza: Function } };

</script>

<style lang="sass" scoped>
.q-card
    border: 2px dashed $positive
</style>
