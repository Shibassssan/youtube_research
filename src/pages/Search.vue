<template>
<div id="search">
    <div class="search_re">
        <h1>Youtube ReSearch</h1>
        <p>Youtubeで検索したい動画をキーワードで検索してみよう！</p>
        <br>
        <div class="search_youtube">
            <input v-model="keyword" placeholder="検索キーワードを入力してください" type="text" id="keyword">
            <button @click="searchMovies" id="searchbtn">検索</button>
        </div>
    </div>
    <div class="columns is-mobile" v-for= "result in results" v-bind:key="result.id" >
        <div class="card">
            <div class="card-divider">
                {{ result.snippet.title}}
            </div>
            <a v-bind:href="'https://www.youtube.com/watch?v='+ result.id.videoId">
            <img width="320" height="180" v-bind:src="result.snippet.thumbnails.medium.url">
            </a>
            <div class="card-content">
                <div class="content">
                    <p>{{ result.snippet.description }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://apis.google.com/js/client.js?onload=googleApiClientReady"></script>
<script>
import axios from 'axios';
const api_key = "--------------------------------------";
const url =  "https://www.googleapis.com/youtube/v3/search";


export default{
    name:"Search",
    data: function(){
        return {
            results: [],
            keyword: "",
            params:{
                q: '',
                part:"id, snippet",
                type: 'video',
                maxResults: '50',
                key: api_key,
                description:"String"
            }
        };
    },
    methods:{
        searchMovies:function(){
            if(this.keyword === ''){
                this.resutls = '';
                return;
            }
            this.params.q = this.keyword;
            var vm = this;
            axios.get(url,{
                params: this.params
            })
            .then(function(response){
                vm.results = response.data.items;
            })
            .catch(function(error){
                console.log(error);
            })
        }
    }
};

</script>

<style style="scss">

body{
    background-color: #fff;
}
h1{
    color: skyblue;
    font-size: 40px;
    font-style: bold;
}
#keyword{
    font-size: 15px;
    width:50%;
    height: 30px;
    padding: 18px 15px;
    border-radius: 10px;
    -webkit-box-shadow: 0 2px 8px rgba(32, 32, 36,.28);
    box-shadow: 0 2px 8px rgba(32, 32, 36, .28);
    cursor:text;
    margin: 15px 5px;
}
#searchbtn{
    width: 80px;
    height: 35px;
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #668ad8;/*ボタン色*/
    color: #FFF;
    border-bottom: solid 4px #627295;
    border-radius: 3px;
}
#search:active{
    -webkit-transform: translateY(4px);
    transform: translateY(4px);/*下に動く*/
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);/*影を小さく*/
    border-bottom: none;
}
.search_youtube{
    margin-bottom: 50px;
}
.card{
    padding: 10px 20px 20px 50px;
    text-align: center;
    margin-right: 10%;
    margin-left: 15%;
    margin-top: 5px;
    border-radius: 18px;
}
</style>
