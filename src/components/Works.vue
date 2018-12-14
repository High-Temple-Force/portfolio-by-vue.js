<template>
    <div class="mainview">
        <div class="concept">
            <transition >
            <p id="concept" v-show="show">Works</p> 
            </transition>

        </div>
        <div class="contents" >            
            <box :key='work.name' v-for='work in works' :item='work'>
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
            show: true,
            works: [
                {
                    name: '共同ポートフォリオ',
                    content: '同居人と作成しました。GCE上にLAMP環境を構築し、PHPで記述しています。',
                    url: 'https://github.com/High-Temple-Force/portFolio_forKoenji'
                },
                {
                    name: '絶対忘れないメモ',
                    content: 'メモ用LINE BOTです。Node.jsをHerokuで動かし、二時間おきにプッシュ通知しています。',
                    url: 'https://github.com/High-Temple-Force/linebot_memo2'
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
    .v-enter-active, .v-leave-active {
        transition: opacity 1s;
    }
    .v-enter, .v-leave-to {
        opacity: 1s;
    }
</style>
