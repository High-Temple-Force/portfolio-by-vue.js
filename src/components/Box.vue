<template>
<transition appear>

  <div class='box'>
        <h2>{{item.name}}</h2>
        <p>{{item.content}}</p>
  </div>
</transition>

</template>


<script>
export default {
  name: 'box',
  props: ['item'],
  data () {
    return {
    }
  }
}
</script>

<style>
    .box {
        display: inline-block;
        vertical-align: top;
        margin: 20px;
        border-radius: 30px;
        position: relative;
        box-shadow: 0 0 20px 0 rgba(0,0,0,.1);
        width: 260px;
        height: 300px;

    }
    h2 {
        font-weight: 400;
    }

.v-enter-active, .v-leave-active {
  transition: opacity .10s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
