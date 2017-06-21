<template>

  <div class="Tracks">

     <div class="container-fluid">
          <div class="text-center">
            <form class="container-stt">
              <input type="email" class="form-control text-center" size="50" placeholder="Enter your UID here" required>
              <br/>                   
               <div class="btn btn-info">
                   <router-link to="/TracksStatus">Track</router-link>
                </div>
            </form>
          </div>
      </div>
 

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Tracks',
  data () {
    return {
      msg: 'Welcome to Tracks'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
