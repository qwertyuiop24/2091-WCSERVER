<template>
    <div class="contact"> 
        <h1>{{title}}</h1>
        <img src="../assets/about.jpg" alt="My Image">
        <p>Aron Layson</p>
        <p>Contact No: 09202206277</p>
        <p>Facebook: facebook.com/aron.layson</p>
        <p>Email: aronlayson79@gmail.com</p>
    </div>
</template>

<script>
    export default{
        name: 'contact', 
        data (){
            return {
                title: 'Contact'
        }
    }
}
</script>
<style scoped>
* {
    background-color: antiquewhite;
}

p {
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
}

h1 {
    text-align: center;
}

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
}

</style>