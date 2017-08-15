<template>
  <div class="Jobs">
<div id="job" class="container-fluid">
    <div class="text-center">
        <h2>JOBS</h2>
        <h4>What we need</h4>
    </div>
    <div>
      <h4>Human Resource</h4>
      <div v-for="job in jobs">
        <div class="" :id="job.department" v-if="(job.department === 'HumanResource') && (job.ammount > 0)">
            <span hidden="true">{{isNullJob.HumanResource = false}}</span>
            <div class="list-group">
                <a class="list-group-item" data-toggle="collapse" :href="'#' + job.department + job.id">{{job.position}}</a>
            </div>
            <div align="left" v-bind:id="job.department + job.id" class="collapse container">
                <div class="lookJob">
                    <li v-on:click="goToResume()">
                        Apply Now
                    </li>
                </div>
            </div>
        </div>

      </div>
      <div class="" v-if="isNullJob.HumanResource === true">
        <div class="list-group">
          <div class="list-group-item not-available">No Job Available</div>
        </div>
      </div>

      <h4>Product Management</h4>
      <div v-for="job in jobs">
        <div class="" :id="job.department" v-if="job.department === 'ProductManagement'  && (job.ammount > 0)">
          {{isNullJob.ProductManagement = false}}
            <div class="list-group">
                <a class="list-group-item" data-toggle="collapse" :href="'#' + job.department + job.id">{{job.position}}</a>
            </div>
            <div align="left" v-bind:id="job.department + job.id" class="collapse container">
                <div class="lookJob">
                    <li v-on:click="goToResume()">
                        Apply Now
                    </li>
                </div>
            </div>
        </div>
      </div>
      <div class="" v-if="isNullJob.ProductManagement === true">
        <div class="list-group">
            <div class="list-group-item not-available">No Job Available</div>
        </div>
      </div>

      <h4>Project Management</h4>
      <div v-for="job in jobs">
        <div class="" :id="job.department" v-if="job.department === 'ProjectManagement'  && (job.ammount > 0)">
          <span hidden="true">{{isNullJob.ProjectManagement = false}}</span>
            <div class="list-group">
                <a class="list-group-item" data-toggle="collapse" :href="'#' + job.department + job.id">{{job.position}}</a>
            </div>
            <div align="left" v-bind:id="job.department + job.id" class="collapse container">
                <div class="lookJob">
                    <li v-on:click="goToResume()">
                        Apply Now
                    </li>
                </div>
            </div>
        </div>
      </div>
      <div class="" v-if="isNullJob.ProjectManagement === true">
        <div class="list-group">
          <div class="list-group-item not-available">No Job Available</div>
        </div>
      </div>

      <h4>Business Development</h4>
      <div v-for="job in jobs">
        <div class="" :id="job.department" v-if="job.department === 'BusinessDevelopment' && (job.ammount > 0)">
          <span hidden="true">{{isNullJob.BusinessDevelopment = false}}</span>
            <div class="list-group">
                <a class="list-group-item" data-toggle="collapse" :href="'#' + job.department + job.id">{{job.position}}</a>
            </div>
            <div align="left" v-bind:id="job.department + job.id" class="collapse container">
                <div class="lookJob">
                    <li v-on:click="goToResume()">
                        Apply Now
                    </li>
                </div>
            </div>
        </div>
      </div>
      <div class="" v-if="isNullJob.BusinessDevelopment === true">
        <div class="list-group">
          <div class="list-group-item not-available">No Job Available</div>
        </div>
      </div>

      <h4>Operation</h4>
      <div v-for="job in jobs">
        <div class="" :id="job.department" v-if="job.department === 'Operation' && (job.ammount > 0)">
          <span hidden="true">{{isNullJob.Operation = false}}</span>
            <div class="list-group">
                <a class="list-group-item" data-toggle="collapse" :href="'#' + job.department + job.id">{{job.position}}</a>
            </div>
            <div align="left" v-bind:id="job.department + job.id" class="collapse container">
                <div class="lookJob">
                    <li v-on:click="goToResume()">
                        Apply Now
                    </li>
                </div>
            </div>
        </div>
      </div>
      <div class="" v-if="isNullJob.Operation === true">
        <div class="list-group">
          <div class="list-group-item not-available">No Job Available</div>
        </div>
      </div>

      <h4>Trade Partnership</h4>
      <div v-for="job in jobs">
        <div class="" :id="job.department" v-if="job.department === 'TradePartnership' && (job.ammount > 0)">
          <span hidden="true">{{isNullJob.TradePartnership = false}}</span>
            <div class="list-group">
                <a class="list-group-item" data-toggle="collapse" :href="'#' + job.department + job.id">{{job.position}}</a>
            </div>
            <div align="left" v-bind:id="job.department + job.id" class="collapse container">
                <div class="lookJob">
                    <li v-on:click="goToResume()">
                        Apply Now
                    </li>
                </div>
            </div>
        </div>
      </div>
      <div class="" v-if="isNullJob.TradePartnership === true">
        <div class="list-group">
          <div class="list-group-item not-available">No Job Available</div>
        </div>
      </div>

      <h4>Marketing</h4>
      <div v-for="job in jobs">
        <div class="" :id="job.department" v-if="job.department === 'Marketing' && (job.ammount > 0)">
            <span hidden="true">{{isNullJob.Marketing = false}}</span>
            <div class="list-group">
                <a class="list-group-item" data-toggle="collapse" :href="'#' + job.department + job.id">{{job.position}}</a>
            </div>
            <div align="left" v-bind:id="job.department + job.id" class="collapse container">
                <div class="lookJob">
                    <li v-on:click="goToResume()">
                        Apply Now
                    </li>
                </div>
            </div>
        </div>
      </div>
      <div class="" v-if="isNullJob.Marketing === true">
        <div class="list-group">
          <div class="list-group-item not-available">No Job Available</div>
        </div>
      </div>

      <h4>Technology</h4>
      <div v-for="job in jobs">
        <div class="" :id="job.department" v-if="job.department === 'Technology' && (job.ammount > 0)">
            <span hidden="true">{{isNullJob.Technology = false}}</span>

            <div class="list-group">
                <a class="list-group-item" data-toggle="collapse" :href="'#' + job.department + job.id">{{job.position}}</a>
            </div>
            <div align="left" v-bind:id="job.department + job.id" class="collapse container">
                <div class="lookJob">
                    <li v-on:click="goToResume()">
                        Apply Now
                    </li>
                </div>
            </div>
        </div>
      </div>
      <div class="" v-if="isNullJob.Technology === true">
        <div class="list-group">
          <div class="list-group-item not-available">No Job Available</div>
        </div>
      </div>

      <h4>Finance</h4>
      <div v-for="job in jobs">
        <div class="" :id="job.department" v-if="job.department === 'Finance' && (job.ammount > 0)">
            <span hidden="true">{{isNullJob.Finance = false}}</span>

            <div class="list-group">
                <a class="list-group-item" data-toggle="collapse" :href="'#' + job.department + job.id">{{job.position}}</a>
            </div>
            <div align="left" v-bind:id="job.department + job.id" class="collapse container">
                <div class="lookJob">
                    <li v-on:click="goToResume()">
                        Apply Now
                    </li>
                </div>
            </div>
        </div>
      </div>
      <div class="" v-if="isNullJob.Finance === true">
        <div class="list-group">
          <div class="list-group-item not-available">No Job Available</div>
        </div>
      </div>

        <!-- <div>
            <h4>Human Resources</h4>
            <div class="list-group">
                <a class="list-group-item" data-toggle="collapse" href="#tallent">Talent Acquisition Specialist</a>
            </div>
            <div align="left" id="tallent" class="collapse container">
                As the part of talent acquisition team, you’re charged with finding the most interesting candidates who bring impacts and make a difference to all they do. You’re responsible for guiding candidates through our hiring process and connecting them to the best experience of working at Blibli.com. You will do the recruitment and selection process through interview, psychological assessment, also discovering and utilizing innovative recruitment and sourcing methods.
                <br> Qualifications:
                <ul class="b">
                    <li>Bachelor’s Degree in Psychology from reputable University (with GPA min 3.0)</li>
                    <li>Minimum 2 years of working experience in recruiting</li>
                    <li>Well-versed with the recruitment and selection process, through interview, psychological assessment, also discovering and utilizing innovative recruitment and sourcing methods would be an advantage</li>
                    <li>Creative, proactive, able to work in team and be independent</li>
                    <li>Good communication skills and pleasant personality</li>
                    <li>Responsible, and having a desire to learn; fast learner, and hard worker</li>
                    <li>Persistent and able to work under pressure</li>
                </ul>
                <div class="lookJob">
                    <li v-on:click="goToResume()">
                        Apply Now
                    </li>
                </div>
            </div>
        </div>
        <div>
            <h4>Technology</h4>
            <div class="list-group">
                <a class="list-group-item" data-toggle="collapse" href="#srsde">Sr. System Development Engineer</a>
                <div align="left" id="srsde" class="collapse container-fluid">
                    As Sr System Development Engineer in Blibli.com, you will get a lot of chance to develop and implement the newest technologies that provide the best experience for Indonesian people in shopping online. You will responsible to researching, configuring, coding and testing of applications development.
                    <br> Qualifications:
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
                        <li v-on:click="goToResume()">
                            Apply Now
                        </li>
                    </div>
                </div>

                <a class="list-group-item" data-toggle="collapse" href="#mobiledev">Mobile Development Engineer</a>
                <div align="left" id="mobiledev"  class="collapse container-fluid">
                  We strive to enable users on any platform to access Blibli.com. as a Mobile Development Engineer, you’ll get to work and collaborate with other passionate mobile developers to bring the most delightful and useful services and apps to life. You will be responsible for researching, configuring, coding and developing network-based mobile applications for mobile platforms.
                   <br/>
                   <strong>Qualifications:</strong>
                   <ul>
                    <li>Bachelor degree in Computer Science, Information Technology, Engineering or Science from a reputable university (with min GPA 3.0)</li>
                    <li>Minimum 2 years or more of related experience</li>
                    <li>Java/Android experience from commercial, an University or independent development</li>
                    <li>Internet product development experience is a plus</li>
                    <li>Live Android application on the Android Market or Apps Store is desired</li>
                    <li>Solid experience with Android Application Development (from start to deployment)</li>
                    <li>Experience with Android Middleware, System Architecture and Source Code</li>
                    <li>At least one Android Application published in the App Store</li>
                    <li>Strong UI Design/Development</li>
                    <li>Experience with Multi-threaded applications</li>
                    <li>Experience with iOS or Flash is a plus</li>
                    <li>Expertise in C++, Java and JavaScript </li>
                    <li>Experience with Objective-C, XCode, Cocoa, Interface Builder</li>
                    <li>Experience with various J2EE framework and webapp</li>
                    <li>SQL experience</li>
                    <li>REST based web services-xml/json</li>
                </ul>
                    <div class="lookJob">
                       <li v-on:click="goToResume()">
                        Apply Now
                       </li>
                    </div>
                </div>

                <a class="list-group-item" data-toggle="collapse" href="#technicalsupp">Technical Support Staff</a>
                <div align="left" id="technicalsupp" class="collapse container-fluid">
                    IT User Support Specialist will closely engage with User to support them using IT Solutions effectively. You will have various job from provisioning new computer and troubleshoot Software/Application installation to establish New Office and even research New IT Solutions that support User Productivity.
                    <br> <strong>Qualifications:</strong>
                    <ul>
                        <li>Bachelor degree in Information Engineering/Management from a reputable university (with min GPA 2.7)</li>
                        <li>Professionally able to utilize PC platform and its applications, especially Windows 7 and Productivity suite (MS Office, Word, Excel PowerPoint, Outlook and Access)</li>
                        <li>Have some basic configuration of hardware, LAN, and WAN</li>
                        <li>Must show samples of work demonstrating experience with developing research plans for product teams</li>
                        <li>Good troubleshooting and problem solving skills</li>
                        <li>Able to work as a team as well as individually</li>
                    </ul>
                    <div class="lookJob">
                        <li v-on:click="goToResume()">
                        Apply Now
                        </li>
                    </div>
                </div>

                <a class="list-group-item" data-toggle="collapse" href="#sysdevenginetest">Software Development Engineer Testing</a>
                <div align="left" id="sysdevenginetest" class="collapse container-fluid">
                  You are going to be part of a dynamic team in Blibli.com technology in an effort to provide our customers with the best e-commerce experience in Indonesia.  You will work closely with program managers, UX designers, software developers and other quality engineers to deliver secure, high performance and high availability products that exceed users’ quality standards. You will be responsible to design and maintain test plans and test cases based on product and design specifications, set up testing environments, execute test cases, and collect test results or key metrics on various configurations. You also will responsible for automation test suite development, execution and debugging, and running regression tests as part of on-going agile development.
                    <br> <strong>Qualifications:</strong>
                    <ul>
                        <li>Bachelor degree in Computer Science, Information Technology, Engineering or Science from a reputable university (with min GPA 3.0)</li>
                        <li>Strong analytical and problem solving skills</li>
                        <li>Meticulous person with high attention to details
                            <ul>
                                <li>Able to work as a team as well as individually</li>
                                <li>Persistent and able to work well under pressure</li>
                            </ul>
                        </li>
                        <li>Experience in testing software products in Web and/or Mobile environment</li>
                        <li>Good working knowledge of Windows, Linux and database technologies</li>
                        <li>Preferences will be given for those who have strong knowledge in quality assurance</li>
                    </ul>
                     <div class="lookJob">
                        <li v-on:click="goToResume()">
                        Apply Now
                         </li>
                    </div>
                </div>

                <a class="list-group-item" data-toggle="collapse" href="#sysdevengine">Software Development Engineer</a>
                <div align="left" id="sysdevengine" class="collapse container-fluid">
                   As a System Development Engineer, you will be responsible for researching, configuring, coding and testing of applications development within the company.
                    <br> Qualifications:
                    <ul>
                        <li>Deep knowledge about OOP, Design Pattern, Software Design and Data Structure (Collection API)</li>
                        <li>Good knowledge and strong hands-on experience in using Spring, Hibernate, Struts, GWT, EJB3 and Java Web technology</li>
                        <li>Good knowledge about application integration (SOA) such as Webservice, RESTFul API, WSDL, JAX-WS, JAXB, JAX-RS, JAX-RPC and JSON</li>
                        <li>Good knowledge and hands-on experience on HTTP and TCP/IP protocol· Good troubleshooting and problem solving skills</li>
                        <li>Ability to learn new technologies quickly and willingness to read and digest large existing source code and take ownership on complex component or subsystem</li>
                        <li>Familiar with Linux</li>
                    </ul>
                    <div class="lookJob">
                        <li v-on:click="goToResume()">
                        Apply Now
                        </li>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h4>Operation</h4>
                 <a class="list-group-item" data-toggle="collapse" href="#seniorexp">Senior Experience Solution Manager</a>
                <div align="left" id="seniorexp" class="collapse container-fluid">
                   The purpose of this role is to implement the strategic customer plan to improve the end to end customer experience. The Senior Experience Solution Manager will be responsible for creating strategy and design solutions through key improvement work streams with a key focus to address root causes and design and communicate a clear view of the end to end customer outcomes they need to achieve. Lead continuous improvement activity to reduce the number of complaints and increase overall customer satisfaction.
                    <br> Qualifications:
                    <ul>
                        <li>4-5 years relevant experience managing Complaint Department</li>
                        <li>Strong oral (speaking, listening, interpretation) and written communication skills</li>
                        <li>Absolute passion for ensuring a great customer experience with every contact</li>
                        <li>Strong technical analysis skills</li>
                        <li>Fluent english skills are required</li>
                    </ul>
                    <div class="lookJob">
                        <li v-on:click="goToResume()">
                        Apply Now
                        </li>
                    </div>
                </div>

                <a class="list-group-item" data-toggle="collapse" href="#seniorexp">Inventory Control & Asset Recovery (Return) Staff</a>
                <div align="left" id="seniorexp" class="collapse container-fluid">
                  The job holder will manage the planning, organizing, and implementation of product that returned to our warehouse, keep a detailed record of each returned product as it enters or leaves a warehouse, and maximizing the value of assets through liquidation.Prior experience managing and coordinating work across multiple discipline/organizations/vendor in inventory/warehouse management.
                    <br> Qualifications:
                    <ul>
                        <li>Bachelor degree, preferably business or Industrial Engineering</li>
                        <li>Working Experience 1-3 years, preferably at claim process / asset recovery</li>
                        <li>Ability to manage conflict, can work with conflicting priorities, preffered for someone who have experience in undertaking investigation, analysis, reporting findings, claim process to insurance, and asset management</li>
                    </ul>
                    <div class="lookJob">
                        <li v-on:click="goToResume()">
                        Apply Now
                        </li>
                    </div>
                </div>

                <a class="list-group-item" data-toggle="collapse" href="#internalquality">Internal Quality Management</a>
                <div align="left" id="internalquality" class="collapse container-fluid">
                  <p>Blibli.com is proud of our service quality, not only to our external customer but also to our internal departments, thus, To ensure our internal process is well maintain and 100% in excellent running condition, we have our own Internal Quality Management unit. The candidate in this unit will oversee all activities and tasks needed to maintain a desired level of excellence in Operations area, Analyze performance in each unit of operations and gives recommendations to improve performance in order to be more effective and efficient.</p>
                    <br> Qualifications:
                    <ul>
                        <li>Bachelor’s Degree in Economics with GPA min. 3.25</li>
                        <li>Minimum 1 year of working experience in internal audit or related field</li>
                        <li>Fresh Graduates are welcome to apply</li>
                        <li>Passionate in research and data analysis/data mining</li>
                        <li>Strong analytic thinking and communication skill</li>
                        <li>Must be capable of managing multiple tasks under time constraints and working effectively as a team player in a professional office environment</li>
                        <li>Must possess the ability to solve practical problems and deal with a variety of specific variables in situations</li>
                        <li>Proficient in English, both written and oral</li>
                        <li>Possess a solid knowledge of Microsoft office application (MS Word, MS Excel, and MS PowerPoint)</li>
                    </ul>
                    <div class="lookJob">
                        <li v-on:click="goToResume()">
                        Apply Now
                        </li>
                    </div>
                </div>

                <a class="list-group-item" data-toggle="collapse" href="#blitscollege">BLITS College Assistant Manager</a>
                <div align="left" id="blitscollege" class="collapse container-fluid">
                  <p>Blibli.com is currently looking for BLITS College Assistant Manager. BLITS College is the place where forward-thinking talent developers synergize to disrupt traditional notions in developing BLITS (Blibli Loyalty Team Service) representatives across multiple contact media (chat, phone, email, and social media).</p>
                  <p>Successful candidate will embrace a journey in a team of highly energize people to develop and maintain the development of our BLITS representatives.</p>
                  <p>As a BLITS College Assistant Manager, you will be responsible to deliver training and coaching to BLITS representatives, monitor and review the progress of learners, able to adjust and improve training techniques and programs according to learners’ needs, manage cross functional projects from initiations to evaluation related to people development and retentions, develop and maintain a user-friendly knowledge management center for our BLITS representatives.</p>
                    <br> Qualifications:
                    <ul>
                        <li>A bachelor degree in a relevant field or equivalent hands-on experience. Bachelor degree in Psychology is preferred.</li>
                        <li>Having 5 years of experience in Learning Development, 1 year of experience as Assistant Manager is preferred</li>
                        <li>Excellence in verbal and written skills</li>
                        <li>High interpersonal skills and excel in heavy collaboration environment</li>
                        <li>Fluency in Microsoft Office, Microsoft Power Point, and Microsoft Excel</li>
                        <li>Able to prioritize in a complex, fast-changing environment</li>
                        <li>Able to work in a highly confidential environment</li>
                        <li>Able to work in a highly integrated and multi-tasked environment</li>
                    </ul>
                    <div class="lookJob">
                        <li v-on:click="goToResume()">
                        Apply Now
                        </li>
                    </div>
                </div>

                <a class="list-group-item" data-toggle="collapse" href="#srfleet">Sr. Fleet Management Specialist <br/>(To be Located in Bandung)</a>
                <div align="left" id="srfleet" class="collapse container-fluid">
                   <p>You will be responsible to evaluating data that is essential in BES (Blibli Express Service) daily operation’s process. Analyze real time data for lead measurement capability and being able to anticipate operational issues based on data analytics. Ensuring the right process and SOP being implemented in the most effective and efficient way. Process improvement through Kaizen methodology. This position also responsible to evaluate and manage overall cash flow for operational needs.</p>
                    <br> Qualifications:
                    <ul>
                        <li>Bachelor or Diploma Degree from all subject are welcomed</li>
                        <li>Experienced min 5 years in Transportation or Logistic Industry</li>
                        <li>Good computer literate</li>
                        <li>Demonstrated problem solving and analytical skills</li>
                        <li>AAble to work under pressure</li>
                        <li>Attention to details, highly motivated and flexible</li>
                    </ul>
                    <div class="lookJob">
                        <li v-on:click="goToResume()">
                        Apply Now
                        </li>
                    </div>
                </div>

                <a class="list-group-item" data-toggle="collapse" href="#srfleet">Fleet Management Specialist <br/>(To be Located in Bandung) </a>
                <div align="left" id="srfleet" class="collapse container-fluid">
                  <p>You will be responsible to processing data that is essential in BES (Blibli Express Service) daily operation’s process. Ensuring the maintenance schedule of operational equipment and assets are on time. Ensuring the right process and SOP being implemented in the most effective and efficient way. Process improvement through Kaizen methodology. This position also responsible as a checker of cash flow reports for operational needs.</p>
                    <br> Qualifications:
                    <ul>
                        <li>Bachelor or Diploma Degree from all subject are welcomed</li>
                        <li>Experienced min 3 years in Transportation or Logistic Industry</li>
                        <li>Good computer literate</li>
                        <li>Able to work under pressure</li>
                        <li>Attention to details, highly motivated and flexible</li>
                    </ul>
                    <div class="lookJob">
                        <li v-on:click="goToResume()">
                        Apply Now
                        </li>
                    </div>
                </div>

                <a class="list-group-item" data-toggle="collapse" href="#processimprovement">Process Improvement and Reengineering Specialist</a>
                <div align="left" id="processimprovement" class="collapse container-fluid">
                    <p>Blibli.com is currently seeking a Process improvement and reengineering specialist. You will be responsible to understand business processes in a wide range of organizational areas and to use structured process improvement and problem solving methods that will sustainably add value. This position will also work cooperatively with cross functional teams and departments to seek improvements and solve specific problems.</p>
                    <br> Qualifications:
                    <ul>
                        <li>Bachelor degree in Industrial Engineering from reputable University (With GPA min 3.3)</li>
                        <li>Minimum 3 years of working experience of Project management and Reengineering</li>
                        <li>Possess a solid knowledge of Microsoft office application (MS Word, MS Excel, and MS PowerPoint)</li>
                        <li>Knowledge of organizational efficiency and process improvement management</li>
                        <li>Excellent Analytic and Problem Solving Skill</li>
                        <li>Excellent Writing and Communication Skills</li>
                        <li>Persistent and able to work well under pressure</li>
                    </ul>
                    <div class="lookJob">
                        <li v-on:click="goToResume()">
                        Apply Now
                        </li>
                    </div>
                </div>

                <h4>Business Development</h4>

                <a class="list-group-item" data-toggle="collapse" href="#prodmanage">Product Manager</a>
                <div align="left" id="prodmanage" class="collapse container-fluid">
                    <br> <strong>Requirement</strong>:
                    <ul>
                        <li>Bachelor degree in any discipline from a reputable University (with GPA min 3.0)</li></br>
                        <li>Min 3 years of experience in the same field</li></br>
                        <li>Strong in marketing channel and sourcing product</li></br>
                        <li>Preferably female</li></br>
                        <li>Deep knowledge about fashion and cosmetics</li></br>
                        <li>Strong in making plan</li></br>
                        <li>Have previous experience as manager assistant or senior staff</li></br>
                    </ul>
                    <div class="lookJob">
                        <li v-on:click="goToResume()">
                        Apply Now
                        </li>
                    </div>
                </div>

                <h4>Marketing</h4>

                <a class="list-group-item" data-toggle="collapse" href="#srcost">Sr. Consumer Market Insight Analyst</a>
                <div align="left" id="srcost" class="collapse container-fluid">
                   <strong>Job Summary:</strong>
                 <ul>
                    <li>Support the organization with consumer insight and analytics relative to consumers and markets of Blibli.com products, services, and experiences</li>
                    <li>Utilize various tools to pull and integrate data from relevant sources to aid in identifying challanges, opportunities, and implications for achieving Blibli.com business goals.</li>
                    <li>Effectively analyze and distill vast amounts of data into patterns, trends, insights and meaning. Develop clear and concise communications related to both insight coming from data and implications</li>
                    <li>Responsible for performing research (online and offline research) providing insights regarding the market, trends, competitors and potential and existing costumers and current campaigns.</li>
                </ul>
                <p><strong>Education Required:</strong></p>
                <ul>
                    <li>Bachelor’s Degree or Master’s Degree (preferred) required in a Science, Technology, Engineering, Math or Statistic or a business administration, marketing, market research, or related field.</li>
                </ul>
                <p><strong>Qualifications:</strong></p>
                <ul>
                    <li>Position requires a minimum of 3 years of business analysis experience with specific emphasis on business/marketing analytics and consumer, (e)retail and market isnights. Experience in ecommerce industry is a plus.</li>
                    <li>Demonstrated ability to conduct, manage and synthesize vast amounts of consumer, (e)retail and market data and deliver strategic insights supporting overarching corporate strategies.</li>
                    <li>Demonstrated experience in integrating disparate sources of information into patterns and trends that support to coherent “story” that answers specific business hypotheses.</li>
                    <li>Proficiency conducting Qualitative &amp; quantitative research by utilizing FGD, deep dive/involvement, and data sampling both offline and online research method.</li>
                    <li>Strong technical skill across multiple software platforms</li>
                    <li>Proficiency using site reporting/analytic tools for web analytic, mobile analytic and social media analytic, such as Hootsuites, Google Analytic, comScore, etc.</li>
                    <li>A true team spirit who thrives on working as part of an enthusiastic and energetic team, and inspiring others; demonstrating a collaborative approach to achieving results and encouraging the inputs and ideas of others.</li>
                    <li>Ability to influence across the organization at multiple levels and build collaborative, productive relationships with internal business partners and external vendors.</li>
                    <li>Good SGL knowledge is a big plus</li>
                </ul>
                    <div class="lookJob">
                        <li v-on:click="goToResume()">
                        Apply Now
                        </li>
                    </div>
                </div>

                <a class="list-group-item" data-toggle="collapse" href="#perform">Performance Advertising Analyst</a>
                <div align="left" id="perform" class="collapse container-fluid">
                   <p>As Performance Advertising Analyst, you will be part of Digital Marketing team who run performance-based advertising to increase brand awareness, promote products campaigns or services and to drive prospects to conversions:</p>
                    <br> Qualifications:
                    <ul>
                        <li>Plan &amp; execute a variety of performance advertising campaigns across a range of digital channel (e.g. display ads, search ads, social media ads, mobile ads) to ensure the quality of delivery &amp; performance on a regular basis</li>
                        <li>Analyze, evaluate, and optimize digital marketing campaign performance to make sure all the investment is effective and efficient</li>
                        <li>Work with creative team to write engaging copy for adverts and make creative suggestions which works best for the campaigns</li>
                        <li>Work together with technology team to ensure availability and reliability of performance advertising platform (i.e. technical implementation, data tracking and platform deliverability)</li>
                        <li>Produce detailed analysis and reports of campaigns</li>
                    </ul>
                    <div class="lookJob">
                        <li v-on:click="goToResume()">
                        Apply Now
                        </li>
                    </div>
                </div>

                <h4>Product Management</h4>

                <a class="list-group-item" data-toggle="collapse" href="#srdesign">Sr. UX Designer</a>
                <div align="left" id="srdesign" class="collapse container-fluid">
                   <p>Sr. UX Designer will Collaborate with product managers, technology and marketing on conceptual models, process flows, user scenarios &amp; tasks, and UI design. Translate user requirements and complex business processes into highly usable, highly interactive applications by applying a user-centric approach to design, and balancing the end-user experience with the stated business purpose. Contribute towards user requirements gathering for new product releases. Conceive, document, and evangelize user interface guidelines and design patterns. Work across various lifecycle stages of a product, from new products to continuous product improvements through agile (scrum) process. Inspire the team to execute your UX vision</p>
                    <br> <strong>Desired Skills and Experience</strong>
                    <ul>
                       <li>Bachelor in Design, Information Technology, Computer Science, Visual Communication Design, Phsychology or related field from top universities.</li>
                        <li>Minimum of 5 years of related work experience</li>
                        <li> Experience in developing the design for new user experiences, creating concepts, designing mockups and  specifications,and representing the designs to the product team</li>
                        <li> Demonstrable leadership, organizational and communication skills</li>
                        <li> A team player who is willing to learn and collaborate with others</li>
                        <li>Ability to analyze problem from end to end and looking to solve the bigger picture</li>
                        <li>Portfolio is a must</li>
                    </ul>
                    <div class="lookJob">
                        <li v-on:click="goToResume()">
                        Apply Now
                        </li>
                    </div>
                </div>

                <a class="list-group-item" data-toggle="collapse" href="#uxcopywriter">UX Copywriter</a>
                <div align="left" id="uxcopywriter" class="collapse container-fluid">
                  <p>The career path of UX copywriter or writer can come from variety of writing background. However, It’s:</p>
                    <br> Qualifications:
                    <ul>
                        <li>Recommended to look for a writer with travel or documentation writing background, as he or she typically</li>
                        <li>Experience with complicated procedures or logistics. However, never underestimate a skill of a writer who is</li>
                        <li>Strong in one area as they can also quickly pick up new skills.</li>
                    </ul>
                    <p><strong>Short Overview</strong></p>
                    <ul>
                        <li>Writing persuasive, clear and concise copy that serves our consumers and increases click through rates</li>
                        <li>Collaborating with UX team in the making of a smooth and communicative product that caters to users’ needs, at the same time achieves business goals</li>
                        <li>Providing understandable context and story to be translated to foreign languages</li>
                        <li>Improving product copy and simultaneously maintaining consistency across all interfaces and platforms</li>
                    </ul>

                    <p><strong>Basic Qualifications</strong></p>

                    <ul>
                        <li>BA/BS degree or equivalent practical experience</li>
                        <li>Experience in online content development, UX writing and/or user experience principle</li>
                    </ul>

                    <p><strong>Requirements</strong></p>

                    <ul>
                        <li>At least 2-3 years of experience in e-commerce copywriting or digital products</li><br/>
                        <li>Fluency in English is a must</li><br/>
                        <li>Have a strong capacity of empathy in understanding online consumer behaviour</li><br/>
                        <li>Attention to detail with critical eye</li><br/>
                        <li>You are self-motivated, agile and full of initiative. You regularly push your comfort zone to stretch and improve yourself and the team</li><br/>
                        <li>Comfortable working in tight deadlines, a high demanding environment with minimum supervision</li>
                    </ul>

                    <div class="lookJob">
                        <li v-on:click="goToResume()">
                        Apply Now
                        </li>
                    </div>
                </div>

                <h4>Trade Partnership</h4>

                <a class="list-group-item" data-toggle="collapse" href="#digitalimg">Digital Imaging</a>
                <div align="left" id="digitalimg" class="collapse container-fluid">
                    As Sr System Development Engineer in Blibli.com, you will get a lot of chance to develop and implement the newest technologies that provide the best experience for Indonesian people in shopping online. You will responsible to researching, configuring, coding and testing of applications development.
                    <br> Qualifications:
                    <ul>
                        <li>Collect, edit and process digital image from photography picture, including on figure, special laydown, and photography for marketing purpose</li>
                        <li>Responsible for processing and ensuring the accuracy of all photographs</li>
                        <li>Possess experience in Quality Assurance and Color Analysis</li>
                        <li>Have good color vision, and the ability to assess the color accurately, density and contrast level of images</li>
                        <li>Work closely with photographer, stylist, make-up artist, on-stage related staff</li>
                        <li>Proficient in using editing software, Adobe, Product Retouch, Color  Correcting, and Digital Photography</li>
                        <li>Experience in using Mac OS</li>
                    </ul>
                    <p><strong>Qualifications:</strong></p>
                    <ul>
                        <li>Have a good Eye of color vision, density and contrast level of images</li>
                        <li>Have excellent skill of Adobe photoshop and creative</li>
                        <li>Be skilled in image-manipulation and image management</li>
                        <li>Have a good math skill and understanding geometric and ratio</li>
                        <li>Have a keen interest in photography and strong visual</li>
                        <li>Pay close attention in detail and dateline</li>
                        <li>Minimal experience 3 years</li>
                    </ul>
                    <div class="lookJob">
                        <li v-on:click="goToResume()">
                        Apply Now
                        </li>
                    </div>
                </div>
        </div> -->
    </div>

</div>
  </div>
</template>

<script>
export default {
  name: 'Jobs',
  data () {
    return {
      statePage: 'Jobs',
      jobs: [],
      isNullJob: {
        HumanResource: true,
        Technology: true,
        Finance: true,
        Marketing: true,
        TradePartnership: true,
        Operation: true,
        ProjectManagement: true,
        ProductManagement: true,
        BusinessDevelopment: true
      },
      counter: 1
    }
  },
  beforeMount () {
    var self = this
    self.$http.get('http://localhost:8080/jobVacancy/getAll', {}, {
      headers: {

      }
    }).then(response => {
      if (response.data.data === '[]') {
      } else {
        // var job = JSON.stringify()
        // this.jobs = JSON.stringify(response.data.data)
        this.jobs = response.data.data
        // alert(job)
      }
    })
  },
  methods: {
    chStatePageToResume () {
      this.statePage = 'Jobs'
      console.log(this.statePage)
    },
    goToResume () {
      window.location.href = '/Resume'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul.b {list-style-type: square;}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.not-available {
  color: red;
}
</style>
