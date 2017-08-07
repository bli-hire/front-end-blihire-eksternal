<template>

 <div class="Alert">

 <div class="alert alert-success" align="center">
    <strong>Success!</strong> Your CV has been Submitted
  </div>
  <div class="text-center">
    <h2>Your Apply Number :</h2>
  </div>
        {{this.uid}}
  </div>

</template>

<script>
export default {
  name: 'Alert',
  data () {
    return {
      resultContent: {
        resultCV: {}
      },
      uid: ''
    }
  },
  beforeMount () {
    var self = this
    self.uid = self.$route.query.uid
    // var self = this
    // self.$http.get('http://localhost:7777/cv', {}, {
    // }).then(response => {
    //   if (response.data.data === '[]') {
    //     this.resultContent.resultCV = null
    //   } else {
    //     var cv = JSON.stringify(response.data)
    //     var _uid = JSON.stringify(response.data.data[response.data.totalData - 1].uid)
    //     this.uid = _uid
    //     this.resultContent.resultCV = cv
    //   }
    // })
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
