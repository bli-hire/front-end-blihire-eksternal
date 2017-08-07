<template>

 <div class="Home">
<!--  <h1>.</h1>
<h1>.</h1>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2> -->

      <div class="container-fluid">
        <div class="row">
          <img class="col-lg-6 col-md-6 col-sm-12 col-xs-12" src="../assets/meeting.jpg">
            <!-- <img class=""  alt=""> -->
          </img>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <h2>A Career for a Purpose</h2><br>
            <p>Born as the pioneer in Indonesia’s e-commerce, Blibli.com has always believed in the sovereignty of local talents to empower our customers, partners and all generations in Indonesia. For that reason, we invite true creative problem solvers and passionate business builders to empower Indonesia with us. At Blibli.com, through endless opportunities, everyone is invited to solve real world problems and thus making differences every day and in every way for a better life.</p><br>
            <p style="font-style: italic">“Embrace a career for a purpose with us now!”</p>
          </div>
        </div>
      </div>


<!-- Container (Services Section) -->



  </div>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      statePage: 'Home'
    }
  },
  methods: {
    chStatePageToResume () {
      this.statePage = 'Resume'
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
