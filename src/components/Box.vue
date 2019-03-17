<template>
  <div class='box'>
        <h2>{{item.name}}</h2>
        <span style="font-size: 30px;">
            <i :class='item.fabicon' size="5x"></i>       
        </span> 
        <p>{{item.content}}</p>
        <span style="font-size: 20px; color: grey;" >
            <a :href="item.url" v-if="item.url" target="_blank">
                <i class="fas fa-external-link-alt links"></i>           
            </a>
        </span>
  </div>
</template>


<script>
export default {
  name: 'box',
  props: ['item'],
  data () {
    return {
        show: true
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
    .links {
        color: gray;
    }
</style>
