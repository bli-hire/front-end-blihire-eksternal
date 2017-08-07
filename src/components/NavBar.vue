<template>
 <div id ="NavBar">
  <nav class="navbar navbar-default navbar-fixed-top">
                  <div class="container">
                      <div class="navbar-header">
                          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                          </button>
                          <!-- <img class logo v-bind:src="'../assets/New-Blibli-Logo'" rel="stylesheet">  -->
                         <!--  <img :src="'../assets/New-Blibli-Logo.png'"> -->
                        <img class="logo" src="../assets/bliblilogo.png">
                      </div>
                      
                      <div class="collapse navbar-collapse" id="myNavbar">
                          <ul class="nav navbar-nav navbar-right">
                                <li><router-link to="/">Home</router-link></li>
                                <li><router-link to="/About">About</router-link></li>
                                <li><router-link to="/Jobs">Jobs</router-link></li>
                                <li><router-link to="/Tracks">Tracks</router-link></li>
                          </ul>
                      </div>
                  </div>
              </nav>
              
    <div class="jumbotron text-center">
      <br>
      <h1>You Can Make a Difference</h1>
      <div class="lookJob">
      <li v-on:click="chStatePageToHome()"><router-link to="/Jobs">Search for a job</router-link></li>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      statePage: 'Home'
    }
  }
}
</script>
<style scoped>
@media screen and (max-width: 480px) {
  .logo {
      font-size: 150px;
  }
}

.logo{
  height: 100px;
}
.navbar {
    margin-bottom: 0;
    background-color: rgb(255, 255, 255);
    z-index: 9999;
    border: 0;
    font-size: 12px !important;
    line-height: 1.42857143 !important;
    letter-spacing: 4px;
    border-radius: 0;
    font-family: Montserrat, sans-serif;
}
.navbar li a, .navbar .navbar-brand {
    color: rgb(0, 149, 218) !important;
}
.navbar-nav li a:hover, .navbar-nav li.active a {
    color: rgb(0, 120, 199) !important;
    background-color: #fff !important;
}
.navbar-default .navbar-toggle {
    border-color: transparent;
    color: #fff !important;
}
.wizard .nav-tabs {
    position: relative;
    margin: 40px auto;
    margin-bottom: 0;
    border-bottom-color: #e0e0e0;
}

</style>

