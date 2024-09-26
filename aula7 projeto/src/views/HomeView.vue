<script setup lang="ts">
import {useRouter} from 'vue-router';
const router = useRouter();

const goToBuild = () => router.push('/build');

</script>

<template>
  <main>
    <div class="flex flex-row align-items-center justify-content-evenly">

      <section class="flex flex-column align-items-center "> 

        <h1> {{$t('HOME.TITLE')}}</h1>

        <button class='mt-4 app-dark-button' @click="goToBuild" id="order">{{$t('HOME.ORDER')}}</button>

      </section>

      <section> 
        <img src="/big-bot.png" alt="">
        



      </section>





      </div>
    
  </main>
</template>

<style scoped lang="scss">

h1{
  font-size:5rem;
  width:25rem;
  text-align: center;
}

#order {
  height: 3.2rem;
  width:20rem;

}


</style>