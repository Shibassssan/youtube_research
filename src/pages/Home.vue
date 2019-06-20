<template>
<div id="app">
    <div id="home">
        <h1>Home</h1>
        <section>
            <h2>Youtubeでみたい動画をキーワードで検索、リスト化できる</h2>
            <br>
            <p>
                Youtube data APIを使って、Youtubeにある動画を検索できるシステムです。
                <br>
                VueCliを使ってSPAサイトにしました。
            </p>
        </section>
        <br>
        <img class="background_image" src="https://kabekin.com/uploads/converted/15/06/29/3906386503-marmoleda-nature-hd-wallpaper-1920x1080-47114-qxy3-1440x900-MM-100.jpg"/>
    </div>
</div>
</template>

<style lang="scss">
#app{
    #home{
        background-color:rgb(255, 255, 255);
        padding-bottom: 300px;
        border-radius: 10px;
        margin: 0 15px;
        padding-top: 10px;
        h1{
            font-size: 60px;
            color: skyblue;
        }
        section{
            h2{
                font-size: 20px;
            }
            p{
                margin: 10px 15px 15px 5px;
                padding: 30px 15px 25px;
                background-color: rgb(235, 235, 235);
                border-radius: 10px;
                font-size:20px;
            }
        }
    }
}

.background_image{
    width: 95%;
    height: 500px;
    border-radius: 10px;
    margin-top: 25px;
}

</style>