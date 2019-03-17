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

    .contents p {
        padding: 40px;
        padding-top: 10px;
    }
    #homemes {
        padding: 40px;
    }
    .singlebox {
        display: inline-block;
        vertical-align: top;
        border-radius: 30px;
        position: relative;
        box-shadow: 0 0 20px 0 rgba(0,0,0,.1);
        width: 100%;
        height: 100%;
        max-height: 400px;
        flex: 1;
        margin-top: 20px;
    }
</style>
