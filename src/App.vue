<template>
  <div id="app">
    <div>
      <div class="tab">
        <p id="name">MRHYT</p>
        <transition name='page-fade' mode='out-in'>
            <div class="tabs">
                <router-link to="/home">Home</router-link><br>
                <router-link to="/about">About</router-link><br>
                <router-link to="/languages">Languages</router-link><br>
                <router-link to="/frameworks">Frameworks</router-link><br>
                <router-link to="/works">Works</router-link><br>
                <router-link to="/contact">Contact</router-link><br>
            </div>
        </transition>

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
        padding-top: 150px;
        padding-bottom: 160px;
        margin-right: 60px;
    }
a {
        margin-bottom: 10px;
        text-decoration: none;
        color: #2c3e50;
    }
a:visited {
        color: #2c3e50;
    }
a:hover {
        text-decoration: #2c3e50;
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
    .content p {
        text-align: left;
    }
    .page-fade-enter-active,
    .page-fade-leave-active {
	   transition: opacity 0.3s ease;
    }
    .page-fade-enter,
    .page-fade-leave-to {
	    opacity: 0;
    }
</style>
