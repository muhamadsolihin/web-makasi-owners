<template>
  <div class="row justify-content-center bg-transparent">
    <div class="col">
      <GoogleMap
        api-key=""
        style="width: 100%; height: 300px; border-radius: 20px;"
        :center="center"
        :zoom="15"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

const props = defineProps({
  latitude: {
    type: String,
    require: true,
  },
  longitude: {
    type: String,
    require: true,
  },
});

const center = computed(() => {
  if (props.latitude && props.longitude) {
    return {
      lat: parseFloat(props.latitude),
      lng: parseFloat(props.longitude),
    };
  }
  return { lat: 0, lng: -0 };
});
</script>
