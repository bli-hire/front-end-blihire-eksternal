<template>
  <div>
    <div class="jumbotron text-center">
      <br/>
      <h1>You Can Make a Difference</h1>
      <div class="lookJob">
        <a href="#">Search for a job</a>
      </div>
    </div>
    <div class="container-fluid">
      <div class="text-center">
        <form class="container-stt">
          <input type="email" class="form-control text-center" size="50" placeholder="Enter your UID here" required/>
          <br/>
          <div class="input-group-btn">
            <a href="alert1.html">
            <button type="button" class="btn btn-info">Tracking</button>
            </a>
          </div>
        </form>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <img class="col-lg-6 col-md-6 col-sm-12 col-xs-12" src="meeting.jpg"/>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <h2>A Career for a Purpose</h2>
          <br/>
          <p>Born as the pioneer in Indonesia’s e-commerce, Blibli.com has always believed in the sovereignty of local talents to empower our customers, partners and all generations in Indonesia. For that reason, we invite true creative problem solvers and passionate business builders to empower Indonesia with us. At Blibli.com, through endless opportunities, everyone is invited to solve real world problems and thus making differences every day and in every way for a better life.</p>
          <br/>
          <p >“Embrace a career for a purpose with us now!”</p>
        </div>
      </div>
    </div>
    <div id="job" class="container-fluid">
      <div class="text-center">
        <h2>JOBS</h2>
        <h4>What we need</h4>
      </div>
      <div>
        <div>
          <h4>Human Resources</h4>
          <div class="list-group">
            <a class="list-group-item" data-toggle="collapse" href="#tallent">Talent Acquisition Specialist</a>
          </div>
          <div id="tallent" class="collapse container">
            As the part of talent acquisition team, you’re charged with finding the most interesting candidates who bring impacts and make a difference to all they do. You’re responsible for guiding candidates through our hiring process and connecting them to the best experience of working at Blibli.com. You will do the recruitment and selection process through interview, psychological assessment, also discovering and utilizing innovative recruitment and sourcing methods.
            <br/>
            Qualifications:
            <ul>
              <li>Bachelor’s Degree in Psychology from reputable University (with GPA min 3.0)</li>
              <li>Minimum 2 years of working experience in recruiting</li>
              <li>Well-versed with the recruitment and selection process, through interview, psychological assessment, also discovering and utilizing innovative recruitment and sourcing methods would be an advantage</li>
              <li>Creative, proactive, able to work in team and be independent</li>
              <li>Good communication skills and pleasant personality</li>
              <li>Responsible, and having a desire to learn; fast learner, and hard worker</li>
              <li>Persistent and able to work under pressure</li>
            </ul>
            <div class="lookJob">
              <a href="resume.html">Apply Now</a>
            </div>
          </div>
        </div>
        <div>
          <h4>Technology</h4>
          <div class="list-group">
            <a class="list-group-item" data-toggle="collapse" href="#srsde">Sr. System Development Engineer</a>
            <div id="srsde" class="collapse container-fluid">
              As Sr System Development Engineer in Blibli.com, you will get a lot of chance to develop and implement the newest technologies that provide the best experience for Indonesian people in shopping online. You will responsible to researching, configuring, coding and testing of applications development.
              <br/>
              Qualifications:
              <ul>
                <li>Bachelor degree in Computer Science, Information Technology, Engineering or Science from a reputable university (with min GPA 3.0)</li>
                <li>Minimum 5 years or more of related experience</li>
                <li>Deep knowledge about OOP, Design Pattern, Software Design and Data Structure (Collection API)</li>
                <li>Good knowledge and strong hands-on experience in using Spring, Hibernate, Struts, GWT, EJB3 and Java Web technology</li>
                <li>Good knowledge about application integration (SOA) such as Webservice, RESTFul API, WSDL, JAX-WS, JAXB, JAX-RS, JAX-RPC and JSON</li>
                <li>Good knowledge about multi-threading, performance tuning, JDBC and Java Transaction API</li>
                <li>Good knowledge and hands-on experience on HTTP and TCP/IP protocol</li>
                <li>Good knowledge about building scalable application infrastructure and performance tuning to handle large volume of traffic</li>
                <li>Good knowledge about high availability, failover, clustering strategy and performance testing</li>
                <li>Basic understanding of UI technologies like Angular JS, Jquery, Ember JS would be a plus</li>
                <li>Good understanding and knowledge of relational database or non-sql databases – like memcache and redis</li>
                <li>Good troubleshooting and problem solving skills</li>
                <li>Ability to learn new technologies quickly and willingness to read and digest large existing source code and take ownership on complex component or subsystem</li>
                <li>Familiar with Linux</li>
              </ul>
              <div class="lookJob">
                <a href="#">Apply Now</a>
              </div>
            </div>
            <a class="list-group-item" data-toggle="collapse" href="#mobile">Mobile Development Engineer</a>
            <a class="list-group-item" data-toggle="collapse" href="#techsupport">Technical Support Staff</a>
            <a class="list-group-item" data-toggle="collapse" href="#sysdevtest">System Development Engineer Testing</a>
            <a class="list-group-item" data-toggle="collapse" href="#sysdeveng">System Development Engineer</a>
          </div>
        </div>
        <div>
          <h4>Operation</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
