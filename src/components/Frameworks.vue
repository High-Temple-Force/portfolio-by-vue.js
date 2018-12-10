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
                    content: 'GCE, GAE, Datastore, Loadbalancerを使用しました。'
                },
                {
                    name: 'Heroku',
                    content: 'LINE BOTの運用のため使用しました。'
                },
                {
                    name: 'MySQL /PostgresSQL',
                    content: 'ポートフォリオサイト作成時とLINE BOT作成時に、双方のDBを使用しました。'
                },
                {
                    name: 'Node.js',
                    content: 'LINE BOT作成時に使用しました。'
                },
                {
                    name: 'Vue.js',
                    content: 'このサイトを作成するため使用しました。'
                },
                {
                    name: 'Github',
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
    .contents p {
        padding: 40px;
    }
</style>
