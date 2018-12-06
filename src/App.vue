<template>
  <div id="app">
    <div>
      <div class="tab">
        <p id="name">MRHYT</p>
        <div class="tabs">
            <router-link to="/home">Home</router-link><br>
            <router-link to="/about">About</router-link><br>
            <router-link to="/languages">Languages</router-link><br>
            <router-link to="/frameworks">Frameworks</router-link><br>
            <router-link to="/works">Works</router-link><br>
            <router-link to="/contact">Contact</router-link><br>
        </div>
      </div>
  </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: 60px;
  margin-right: 60px;
  padding-top: 50px;
  display: flex;
}

.tab {
        width: 220px;
        padding-top: 120px;
        padding-bottom: 160px;
        margin-right: 60px;
    }
a {
        margin-bottom: 10px;
        text-decoration: none;
    }
.tabs {
        text-align: right;
        width: 100%;
     
    }
#name{
        margin-bottom: 60px;
        height: 1.4px;
        font-size: 28px;
        font: Avenir;
        font-weight: 500;
        text-align: right;
}
    .concept{
        padding: 40px;
        padding-top: 20px;
        margin-bottom: 40px;
        background-color: rgb(238, 238, 238);
        text-align: left;
    }
    #concept{
        margin-bottom: 30px;
        font-size: 24px;
        font: Avenir;
        font-weight: 500;
    }
    .content{
        height: 100%;
        min-height: 500px;
        background-color: rgb(247, 214, 219);


    }
    .content p {
        text-align: left;
    }
</style>
