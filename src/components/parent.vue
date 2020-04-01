<template>
<v-card>
<HelloBtn/>
</v-card>
    
</template>

<script>
import HelloBtn from './btn'
export default {
    components: {
        HelloBtn
    }
}
</script>

<style scoped>
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined){
    background-color: red;
    color:#fff;
}
</style>