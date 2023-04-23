<template>
    <div class="gallery"> 
        <h1>{{title}}</h1>
        <div class="column">
    <img src="https://media.comicbook.com/2017/02/onepiece-231827.jpg">
    <img src="https://featuredanimation.com/wp-content/uploads/2021/09/Gintama-anime-final-season-artowrk-with-all-characters.jpg">
    <img src="https://images.saymedia-content.com/.image/t_share/MTc1MTEyNjc3MzMzMTQ5NTA4/anime-genre-list.jpg">
    <img src="https://cdn.vox-cdn.com/thumbor/cxwHHlhVEceldYqaZKc9a67s1qk=/0x0:2040x1360/2400x1356/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19661987/acastro_190807_3592_best_anime_2019_0001__1_.jpg">
  </div>
    </div>
</template>

<script> 
    export default{
        name: 'gallery', 
        data (){
            return {
                title: 'Gallery'
        }
    }
}
</script>

<style scoped>
* {
    background-color: antiquewhite;
}
h1 {
    text-align: center;
}

img{
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.gallery {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}



/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}

</style>