<script setup lang="ts">

import {changeLanguage,type AvailableLanguages,i18nApplication} from '@/i18n/i18n'; //importando changeLanguage
import {type Ref,ref,computed} from 'vue';//ref é ele quem faz a magica toda, que deixa a variavel reativa(script comunicando html e vice versa) 
// Ref maiusculo é um serviço do vue, explicando para o type, oq é o ref.


const currentLanguage: Ref<AvailableLanguages> = 
    ref(i18nApplication.global.locale.value);
    const changeImg = ()=> {
    if(currentLanguage.value == 'br'){
        changeLanguage('en');        
    }
    else{
        changeLanguage('br');
    }
    currentLanguage.value = i18nApplication.global.locale.value;
}
const flag = computed(()=> currentLanguage.value == 'br'?  'brazilflag.png' : 'euaflag.png');
</script>


<template> 

<header class="flex flex-row align-items-center justify-content-start"> 

    <img src="/build-a-bot-logo.png"/>
    <nav class="ml-5">
    <RouterLink  class='m-4' to="/">Home</RouterLink>

    <RouterLink class='m-4' to="/cart">cart</RouterLink>
    <RouterLink  class='m-4' to="/Build">build</RouterLink>
    <img id='flag' :src="flag" alt="flaglanguage" @click="changeImg">

  </nav>



</header>
</template>



<style scoped lang="scss">

header{
    height: 5rem;
    width:45rem;
    img {
        margin-left: 4rem;
        height: 4rem;
         //width:3rem;
}
    a{
        text-decoration: none;
        color: var(--app-dark-text-color);
        font-size: 1.5rem;
        
    }
    .router-link-exact-active {
        font-weight: bold;
    }

    #flag{
        width:2.5rem;
        height: 3.5rem;
        cursor:pointer;
        
    }

}



</style>