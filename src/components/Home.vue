<template>
    <div class="mainview">
        <div class="concept">
            <p id="concept">Home</p> 
        </div>
        <div class="contents">
            <p>Describing about what I have made, used and who I am.</p>
        </div>
    </div>
</template>

<style>
    .mainview{
        flex:1;
        height: 100%;
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
    .contents {
        margin-bottom: 40px;
        height: 500px;
        background-color: rgb(247, 214, 219);
    }
    .contents p {
        padding: 40px;
        text-align: left;
    }
</style>
