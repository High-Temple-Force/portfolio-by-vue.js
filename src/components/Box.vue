<template>
  <div class='box'>
    <h2>{{item.name}}</h2>
    <p class="box-content">{{item.content}}</p>
  </div>
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
        height: 320px;

    }
    h2 {
        font-weight: 400;
    }
</style>
