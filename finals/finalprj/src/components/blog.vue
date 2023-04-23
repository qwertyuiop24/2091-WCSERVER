<template>
    <div class="blog"> 
        <h1>{{title}}</h1>
        <img src="https://media.philstar.com/images/articles/angeles1_2018-10-13_15-19-27.jpg" alt="My Image">
        <p>Angeles City is a highly urbanized city in the province of Pampanga, located in the Central Luzon region of the Philippines. It is approximately 83 kilometers north of Manila and is considered a part of the Greater Manila Area. The city has a rich history and culture, having been a former US military base during the early 20th century and a significant site during World War II. Today, it is a bustling city known for its vibrant nightlife, shopping centers, and cuisine. Angeles City is also home to the Clark Freeport and Special Economic Zone, which houses various industries, commercial and leisure facilities, and an international airport.</p>
    </div>
</template>

<script> 
    export default{
        name: 'blog', 
        data (){
            return {
                title: 'Blog'
        }
    }
}
</script>
<style scoped>
*{
    background-color: antiquewhite;
}
h1{
    text-align: center;
}
img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%
}
p{
    text-align: justify;
    margin: 50px;
}
</style>