<template>
  <div class="row mt-5 justify-content-center bg-transparent">
    <div class="col-md-5 ml-5 "

    >
      <GoogleMap
        api-key="AIzaSyAC1LXjnlql-0uZ3D8J9jLF9PO1_LF0nxA"
        style="width: 100%; height: 300px; margin-left: 10px; border-radius: 20px;"
        :center="center"
        :zoom="15"
        
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
    </div>
    <div class="col-md-5 bg-white"
    style="margin-left:1em"
    >
      <CardBalance />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import CardBalance from "./CardBalance.vue";

export default defineComponent({
  components: { GoogleMap, Marker, CardBalance },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };

    return { center };
  },
});
</script>
