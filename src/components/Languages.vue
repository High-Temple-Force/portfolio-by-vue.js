<template>
    <div class="mainview">
        <div class="concept">
            <p id="concept">Languages</p>
        </div>

        <div class="contents">
            <box :key='language.name' v-for='language in languages' :item='language'></box>
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
                languages: [
                    {
                        name: 'Python',
                        fabicon: 'fab fa-python',
                        content: '初めて学んだ言語です。業務効率化と、機械学習のさわりを勉強しました。それまで３日かかっていた業務を、１５分に短縮しました。',
                    },
                    {
                        name: 'HTML&CSS',
                        fabicon: 'fab fa-html5',
                        content: 'ポートフォリオサイトを２つ作るにあたって使用しました。'
                    },
                    {
                        name: 'Javascript',
                        fabicon: 'fab fa-js-square',
                        content: 'ポートフォリオサイト、LINE BOTを作成するにあたって使用しました。'
                    },
                    {
                        name: 'PHP',
                        fabicon: 'fab fa-php',
                        content: '同居人で共同のポートフォリオサイトを作成した際に使用しました。'
                    },
                    {
                        name: 'English',
                        fabicon: 'fab fa-erlang',
                        content: 'TOEIC 930点。カナダのカルガリーに留学&ワーキングホリデーしていました。'
                    },
                    {
                        name: 'TTL',
                        fabicon: 'fab fa-medium',
                        content: 'Teratermマクロを使用するため勉強しました。'
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
        height: 100%;
        min-height: 500px;
    }
    
</style>
