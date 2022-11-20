<template>
  <q-page class="window-height row justify-center items-center">
    <div class="column justify-center items-center" style="min-width: 300px">
      <capacitor-google-map id="map" ref="map"></capacitor-google-map>
      <q-list style="min-width: 320px">
        <!-- Primer Patente -->
        <q-item clickable v-ripple :active="active === 'primera'" @click="active = 'primera'" active-class="bg-grey-2">
          <q-item-section>Estacionamiento numero 0 </q-item-section>

          <q-item-section side>
            <q-btn size="12px" round dense flat unelevated icon="local_parking" color="negative" />
          </q-item-section>
        </q-item>
        <!-- Aca hay que meter todos los estacionamientos cercanos -->
        <q-item clickable v-ripple :active="active === 'segunda'" @click="active = 'segunda'" active-class="bg-grey-2">
          <q-item-section>Estacionamiento numero 1</q-item-section>

          <q-item-section side>
            <q-btn size="12px" round dense flat unelevated icon="local_parking" color="negative" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple :active="active === 'tercera'" @click="active = 'tercera'" active-class="bg-grey-2">
          <q-item-section>Estacionamiento numero 2</q-item-section>

          <q-item-section side>
            <q-btn size="12px" round dense flat unelevated icon="local_parking" color="negative" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { GoogleMap } from "@capacitor/google-maps";
import { Geolocation } from '@capacitor/geolocation';
import { ref, onMounted, onUnmounted, computed } from "vue";
import axios from 'axios';
import datosTest from "./tests.json"
export default {
  setup() {
    const cantidadPatentes = ref(1);
    let map = ref(null);
    let coords = ref({ latitude: 0, longitude: 0 });
    let watcher = null;
    const locations = [
      {
        lat: -38.95301138636936,
        lng: -68.0215979364961,
      },
      {
        lat: -38.96196458229248,
        lng: -68.02457523815261,
      },
      {
        lat: -38.959461832522436,
        lng: -68.01440430156816,
      },
    ]
    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
      coords.value.latitude = coordinates.coords.latitude
      coords.value.longitude = coordinates.coords.longitude
    };
    const createMap = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
      const mapRef = document.getElementById("map");
      const newMap = await GoogleMap.create({
        id: "my-map", // Unique identifier for this map instance
        element: mapRef, // reference to the capacitor-google-map element
        apiKey: "AIzaSyDNTB4niPc8g6uZVTcTzDMzBKi-Vy_HciY", // Your Google Maps API Key
        config: {
          center: {
            // The initial position to be rendered by the map
            lat: coordinates.coords.latitude,
            lng: coordinates.coords.longitude,
          },
          zoom: 10, // The initial zoom level to be rendered by the map
        },
      });
      for (let index = 0; index < locations.length; index++) {
        await newMap.addMarker({
          coordinate: {
            lat: locations[index].lat,
            lng: locations[index].lng,
          },
          tittle: "you are here bitch!",
        });
      }
      await newMap.setOnMarkerClickListener(() => {
        alert("hi bitch");
      });
      await newMap.addMarker({
        coordinate: {
          lat: coords.value.latitude,
          lng: coords.value.longitude,
        },
        tittle: "you are here bitch!",
      });
    };

    const cargarEstacionamientos = () => {
      axios.get('')
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    };

    onMounted(() => {
      printCurrentPosition();
      if (!(coords.value.latitude === undefined) || !(coords.value.longitude === undefined)) {
        createMap();
        cargarEstacionamientos();
      }
    });
    onUnmounted(() => {
      if (watcher) navigator.geolocation.clearWatch(watcher);
    });
    return {
      coords,
      active: ref('primera'),
      cantidadPatentes,
    };
  },
};
</script>

<style>
.my-card {
  width: 100%;
}

.card-list {
  width: 100%
}

capacitor-google-map {
  width: 320px;
  height: 50vh;
}
</style>