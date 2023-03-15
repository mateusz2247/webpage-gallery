<template>
<v-app>
  <SideBar @select-option="onSelectOption"></SideBar>
  <v-main>
    <ImageGallery :isWithColor="isWithColor">

    </ImageGallery>
  </v-main>
</v-app>
</template>
<script setup>
import SideBar from './components/SideBar.vue';
import ImageGallery from './components/ImageGallery.vue';
import { ref } from 'vue';
const isWithColor=ref(true)
const onSelectOption= (isColor) =>{
  isWithColor.value =isColor
}

</script>