<template>

 <div class="TracksStatus">

 <div class="alert alert-success" align="center">
    <strong>Status</strong>
  </div>
  <div class="text-center">
    <h2>Your Apply Number :</h2>
  </div>
  <!--   {{ uid }} -->
  <div class="track-code text-center">
    <h4>{{uid}}</h4>
  </div>
  <br/><br/></br>


  <div v-if="applicantStat === 'CV Received'">
  <div class="stepwizard">
    <div class="stepwizard-row">
        <div class="stepwizard-step">
            <button type="button" class="btn btn-primary btn-circle" disabled="disabled">1</button>
            <p>CV Received</p>
        </div>
        <div class="stepwizard-step">
            <button type="button" class="btn btn-default btn-circle" disabled="disabled">2</button>
            <p>Process</p>
        </div>
        <div class="stepwizard-step">
            <button type="button" class="btn btn-default btn-circle" disabled="disabled">3</button>
            <p>Accepted/ Rejected</p>
        </div>
    </div>
</div>
</div>

<div v-else-if="applicantStat === 'Process' || applicantStat === 'interview1' || applicantStat === 'interview2' || applicantStat === 'technicalTest' || applicantStat === 'psikoTest' || applicantStat === 'medicalCheckup'">
 <div class="stepwizard">
    <div class="stepwizard-row">
        <div class="stepwizard-step">
            <button type="button" class="btn btn-default btn-circle" disabled="disabled">1</button>
            <p>CV Received</p>
        </div>
        <div class="stepwizard-step">
            <button type="button" class="btn btn-primary btn-circle" disabled="disabled">2</button>
            <p>Process</p>
        </div>
        <div class="stepwizard-step">
            <button type="button" class="btn btn-default btn-circle" disabled="disabled">3</button>
            <p>Accepted/ Rejected</p>
        </div>
    </div>
</div>
</div>

<div v-else-if="applicantStat === 'accepted'">
 <div class="stepwizard">
    <div class="stepwizard-row">
        <div class="stepwizard-step">
            <button type="button" class="btn btn-default btn-circle" disabled="disabled">1</button>
            <p>CV Received</p>
        </div>
        <div class="stepwizard-step">
            <button type="button" class="btn btn-default btn-circle" disabled="disabled">2</button>
            <p>Process</p>
        </div>
        <div class="stepwizard-step">
            <button type="button" class="btn btn-primary btn-circle" disabled="disabled">3</button>
            <p>Accepted</p>
        </div>
    </div>
</div>
</div>

<div v-else-if="applicantStat === 'Rejected'">
   <div class="stepwizard">
    <div class="stepwizard-row">
        <div class="stepwizard-step">
            <button type="button" class="btn btn-default btn-circle" disabled="disabled">1</button>
            <p>CV Received</p>
        </div>
        <div class="stepwizard-step">
            <button type="button" class="btn btn-default btn-circle" disabled="disabled">2</button>
            <p>Process</p>
        </div>
        <div class="stepwizard-step">
            <button type="button" class="btn btn-primary btn-circle" disabled="disabled">3</button>
            <p>Rejected</p>
        </div>

    </div>
</div>
</div>

<div v-else class="text">
<h3>Uid is invalid</h3>
</div>
  </div>

</template>

<script>
export default {
  name: 'TracksStatus',
  data () {
    return {
      resultContent: {
        resultCV: {}
      },
      uid: '',
      applicantStat: ''
    }
  },
  beforeMount () {
    var self = this
    self.uid = self.$route.query.uid
    if (self.uid === '') {
    } else {
      self.$http.get('http://localhost:8080/cv/getCVByUid', {headers: {'uid': self.uid}},
    {}, {
    }).then(response => {
      if (response.data.data === '[]') {
        self.resultContent.resultCV = null
      } else {
        var _appStats = JSON.stringify(response.data.data[response.data.totalData - 1].applicantStatus)
        self.applicantStat = JSON.parse(_appStats)
      }
    })
    }
  }
}
</script>

<style>

body{margin:40px;}

.stepwizard-step p {
    margin-top: 10px;
}

.stepwizard-row {
    display: table-row;
}

.stepwizard {
    display: table;
    width: 100%;
    position: relative;
}

.stepwizard-step button[disabled] {
    opacity: 1 !important;
    filter: alpha(opacity=100) !important;
}

.stepwizard-row:before {
    top: 14px;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 100%;
    height: 1px;
    background-color: #ccc;
    z-order: 0;

}

.stepwizard-step {
    display: table-cell;
    text-align: center;
    position: relative;
    width: 33%;
}

.btn-circle {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}
h1, h2 {
  font-weight: normal;
}
.text {
  color: red;
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
