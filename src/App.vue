<link rel='stylesheet' href='./assets/css.css'></link>
<template>
<div>
  <nav class="navbar navbar-default navbar-fixed-top">
                  <div class="container">
                      <div class="navbar-header">
                          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                              <span class="icon-bar"></span>
                          </button>
                            <img class="logo" src="./assets/New-Blibli-Logo.png" alt=""/>
                           <router-link activeclass="active" to="/Navbar">a</router-link>
                         
                      </div>
                      <div class="collapse navbar-collapse" id="myNavbar">
                          <ul class="nav navbar-nav navbar-right">
                              <li><router-link activeclass="active" to="#/home" data-target="#home">HOME</router-link></li>
                              <li><router-link activeclass="active" to="#/about" data-target="#about">ABOUT</router-link></li>
                              <li><router-link activeclass="active" to="#/jobs" data-target="#jobs">JOBS</router-link></li>
                              <li><router-link activeclass="active" to="#/track" data-target="#track">TRACK</router-link></li>
                          </ul>
                      </div>
                  </div>
              </nav>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>
