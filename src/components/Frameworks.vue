<template>
    <div class="mainview">
        <div class="concept">
            <p id="concept">Frameworks & Tools</p> 
        </div>
        <div class="contents">
                <box :key='framework.name' v-for='framework in frameworks' :item='framework'>
                </box>
        </div>
    </div>
</template>

<script>
import box from './Box'
export default {
    components: {
        box
    },
    data() {
        return {
            frameworks: [
                {
                    name: 'GCP',
                    fabicon: 'fab fa-google',
                    content: 'GCE, GAE, Datastore, Loadbalancerを使用しました。'
                },
                {
                    name: 'Heroku',
                    fabicon: 'fab fa-hire-a-helper',
                    content: 'LINE BOTの運用のため使用しました。'
                },
                {
                    name: 'MySQL /PostgresSQL',
                    fabicon: 'fas fa-database',
                    content: 'ポートフォリオサイト作成時とLINE BOT作成時に、双方のDBを使用しました。'
                },
                {
                    name: 'Node.js',
                    fabicon: 'fab fa-node-js',
                    content: 'LINE BOT作成時に使用しました。'
                },
                {
                    name: 'Vue.js',
                    fabicon: 'fab fa-vuejs',
                    content: 'このサイトを作成するため使用しました。'
                },
                {
                    name: 'Github',
                    fabicon: 'fab fa-github',
                    content: '開発用に。複数人での開発経験もあります。'
                }
            ]
        }
    }
    
}
</script>

<style>
    .mainview{
        flex:1;
        height: 100%;
    }
    .contents {
        margin-bottom: 40px;
        height: 780px;
    }
</style>
