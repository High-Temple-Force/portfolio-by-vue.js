<template>
    <div class="mainview">
        <div class="concept">
            <p id="concept">Languages</p>
        </div>
        <div class="contents">
            <div class="languages">
                <box v-bind:key='language.name' v-for='language in languages' v-bind:item='language'>
                    <div class='box'>
                        <h2>{{language.name}}</h2>
                        <p class="box-content">{{language.content}}</p>
                    </div>
                </box>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                languages: [
                    {
                        name: 'Python',
                        content: '初めて学んだ言語です。業務効率化と、機械学習のさわりを勉強しました。それまで３日かかっていた業務を、１５分に短縮しました。',
                    },
                    {
                        name: 'HTML&CSS',
                        content: 'ポートフォリオサイトを２つ作るにあたって使用しました。'
                    },
                    {
                        name: 'Javascript',
                        content: 'ポートフォリオサイト、LINE BOTを作成するにあたって使用しました。'
                    },
                    {
                        name: 'PHP',
                        content: '同居人で共同のポートフォリオサイトを作成した際に使用しました。'
                    },
                    {
                        name: 'English',
                        content: 'TOEIC 930点。カナダのカルガリーに留学&ワーキングホリデーしていました。'
                    },
                    {
                        name: 'TTL',
                        content: 'Tera Termマクロ用言語です。サーバー操作を自動化するため勉強しました。'
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
        background-color: rgb(247, 214, 219);
    }
    .contents p {
        padding: 40px;
    }
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
