<script>
export default{
  data(){
    return{
      imageCaption: 'text to display on hover',
      showCaption: false
    }
  },
  methods: {
    about(){
        this.$router.push({ name: 'contact'})
    },
    home(){
        this.$router.push({name:"home"})
    },
    showText() {
      this.showCaption = true;
    },
    hideText() {
      this.showCaption = false;
    }
  }
}
</script>

<template>
    <div>
      <ul>
        <h1 id = "h1">Boeing: the future of flight</h1>
        <li @click="home"><a>Historical context</a></li>
    <li><a href="news.asp">News</a></li>
    <li @click="about"><a>Contact</a></li>
    <li><a href="about.asp">About</a></li>
    </ul>
  </div>
  <div>
    <div id="prec">
        <div class = "paragraph">
          <h1>Historical Context</h1>  
       <img src="https://cdn.discordapp.com/attachments/1008557119173308476/1065447979898642557/Arc_Beautiful_picture_for_an_Aircraft_made_by_Boeing_uiuxuiuxwe_da2375c4-e61d-451b-be6e-223c5a9ee61d.png" id="img1">
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere distinctio porro minus eos accusantium voluptatibus maiores delectus amet. Quis maxime dolorum, aspernatur eveniet minus itaque natus quidem commodi? Perferendis, ipsa!        </div>
    </div>
    <div id = "prec2">
        <div class = "paragraph">
          <h1>Preceding Events</h1>  
       <img src="https://cdn.discordapp.com/attachments/1008557119173308476/1065447979898642557/Arc_Beautiful_picture_for_an_Aircraft_made_by_Boeing_uiuxuiuxwe_da2375c4-e61d-451b-be6e-223c5a9ee61d.png" id="img1" @mouseover="showText" @mouseleave="hideText">
       <p  id = "Capt"></p>  
       The Seattle manufacturing powerhouse was created by William E. Boeing in 1916 and is one of the most well-known industries in the world and goes by the name.... 
          </div>
    </div>
  </div>
</template>

<style scoped>
#capt{
  position: absolute;
  top: 10%;
}
#text{
  position: absolute;
}
#back{
 width: 300px;
}
#img1{
  display: block;
  width: 50%;
  margin-left: 30%;
}
#back:hover{
  display: block;
  width: 300px;
  margin-left: 29.5%;
}
#h1{
  text-align: center;
  color: white;
  font-size: 150%;

}
.paragraph{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 50%;
  border-radius: 20px;
  background-color: rgb(171, 224, 208);
}
.paragraph:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
#img1:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  opacity: 80%;
}
 
body{
  text-align: center;
  font-family: Arial, sans-serif;
  background: linear-gradient(90deg, rgb(8, 235, 197) 0%, rgb(87, 189, 236) 35%, rgb(72, 204, 46) 100%);
}
ul {
  border-radius: 20px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: linear-gradient(90deg, rgb(8, 152, 235) 0%, rgb(87, 189, 236) 35%, rgb(246, 252, 248) 100%);
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: white;
  color: black;
}
#prec{
  position: relative;
  background-color: rgb(87, 185, 231);
  display: inline;
  text-align: center;
  height: 50%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 30%;
  border-radius: 20px;
  left: 25%;
}
#prec2{
  position: relative;
  background-color: rgb(87, 231, 219);
  display: inline;
  text-align: center;
  height: 50%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 30%;
  border-radius: 20px;
  top: 80%;
  left: 25%;
}
</style>
