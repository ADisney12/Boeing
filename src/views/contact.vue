<script>
export default{
  data(){

  },
  methods: {
    about(){
        this.$router.push({ name: 'contact'})
    },
    home(){
        this.$router.push({name:"home"})
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
     <div id="Contact">
    <h1 id = "contactH">
      Contact us
    </h1>
    <div>
      <div>
        Jai: 
      </div>
      <input id = "email" placeholder="Email">
      
    </div>
  </div>
</template>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
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
  background-color: rgb(224, 224, 224);
  color: black;
}
body{
    font-family: Arial, sans-serif;
    background-color: rgb(27, 190, 212); /* For browsers that do not support gradients */
    background-image: linear-gradient(to right, rgb(0, 162, 255) , rgb(71, 195, 245));
}
#Contact{
    position: absolute;
    text-align: center;
    height: 0%;
    top: 100%;
    border-radius: 20px;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 40%;
    left: 30%;
    margin-top: 2%;
}
#email{
  border-radius: 20px;
}
body{
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: rgb(27, 154, 212); /* For browsers that do not support gradients */
  background-image: linear-gradient(to right, rgb(0, 162, 255) , rgb(71, 195, 245));
}
ul {
  border-radius: 20px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: linear-gradient(90deg, rgb(8, 152, 235) 0%, rgb(87, 189, 236) 35%, rgb(246, 252, 248) 100%);
}
</style>