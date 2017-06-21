<template>

 <div class="TracksStatus">

 <div class="alert alert-success" align="center">
    <strong>Status</strong> 
  </div>
  <div class="text-center">
    <h2>Your Apply Number :</h2>
  </div>

  <div class="track-code text-center">
    <h4>#324AB32</h4>
  </div>
   <div class="container-fluid">
      <div class="text-center">
      <form class="container-stt">
        <img src="../assets/tracking.png">
        <!-- <img class=""  alt=""> -->
        </img>
      </form>
      </div>
  </div>

    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'TracksStatus',
  data () {
    return {
      statePage: 'TracksStatus'
    }
  },
  methods: {
    chStatePageToResume () {
      this.statePage = 'TracksStatus'
      console.log(this.statePage)
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


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
