<template>

 <div class="Alert">

 <div class="alert alert-success" align="center">
    <strong>Success!</strong> Your CV has been Submitted
  </div>
  <div class="text-center">
    <h2>Your Apply Number :</h2>
  </div>

  <div class="track-code text-center">
    <a href="alert1.html">#324AB32</a>
  </div>

    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'Alert',
  data () {
    return {
      statePage: 'Alert'
    }
  },
  methods: {
    chStatePageToResume () {
      this.statePage = 'Alert'
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
