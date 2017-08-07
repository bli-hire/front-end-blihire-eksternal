<template>

  <div class="Tracks">
     <div class="container-fluid">
          <div class="text-center">
            <form class="container-stt">
              <input type="email" class="form-control text-center" size="50" placeholder="Enter your UID here" required v-model="uid">
              <br/>     
               <!-- <div class="btn btn-info">
                   <router-link to="/TracksStatus">Track</router-link>
                </div> -->
                <div class="btn btn-info ">
                 <div class="text">
                   <router-link :to="{ path: '/TrackStatus', query:{uid: this.uid}}"><font color="white">Track</font></router-link>
                   </div>
                </div>
            </form>
          </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Tracks',
  data () {
    return {
      msg: 'Welcome to Tracks',
      uid: ''
    }
  },
  methods: {
    chStatePageToResume () {
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.text {
  color: white;
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
