<template>
 <div class= "Resume">


    <div class="container-fluid">
      <div class="row">
        <br>
        <br>
     
   <h1>Pengisian Form</h1>
  <section>
          <div class="wizard">
            <div class="wizard-inner">
              <div class="connecting-line"></div>
              <ul class="nav nav-tabs" role="tablist">

                  <li role="presentation" class="active">
                      <a href="" data-toggle="tab" aria-controls="step1" role="tab" title="Step 1">
                          <span class="round-tab">
                              <i class="glyphicon glyphicon-folder-open"></i>
                          </span>
                      </a>
                  </li>

                  <li role="presentation" class="disabled">
                      <a href="" data-toggle="tab" aria-controls="step2" role="tab" title="Step 2">
                          <span class="round-tab">
                              <i class="glyphicon glyphicon-pencil"></i>
                          </span>
                      </a>
                  </li>
                  <li role="presentation" class="disabled">
                      <a href="" data-toggle="tab" aria-controls="step3" role="tab" title="Step 3">
                          <span class="round-tab">
                              <i class="glyphicon glyphicon-picture"></i>
                          </span>
                      </a>
                  </li>
                  <li role="presentation" class="disabled">
                      <a href="" data-toggle="tab" aria-controls="step4" role="tab" title="Step 4">
                          <span class="round-tab">
                              <i class="glyphicon glyphicon-picture"></i>
                          </span>
                      </a>
                  </li>
                  <li role="presentation" class="disabled">
                      <a href="" data-toggle="tab" aria-controls="step5" role="tab" title="Step 5">
                          <span class="round-tab">
                              <i class="glyphicon glyphicon-picture"></i>
                          </span>
                      </a>
                  </li>
                  <li role="presentation" class="disabled">
                      <a href="" data-toggle="tab" aria-controls="step6" role="tab" title="Step 6">
                          <span class="round-tab">
                              <i class="glyphicon glyphicon-picture"></i>
                          </span>
                      </a>
                  </li>

                  <li role="presentation" class="disabled">
                      <a href="" data-toggle="tab" aria-controls="complete" role="tab" title="Complete">
                          <span class="round-tab">
                              <i class="glyphicon glyphicon-ok"></i>
                          </span>
                      </a>
                  </li>
              </ul>
            </div>
          </div>
         </section>
         

          <form class="form-horizontal">
                <div class="form-group">
                    <label for="title">Title:</label>
                    <div>
                        <select class="form-control" id="sel1">
                            <option value="" disabled selected>Silahkan Pilih</option>
                            <option>Professionals</option>
                            <option>Students and Graduates</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="pwd">Job Title:</label>
                    <div>
                        <select class="form-control" id="sel2">
                            <option value="" disabled selected>Silahkan Pilih</option>
                            <option value="Talent Acquisition Specialist">Talent Acquisition Specialist</option>
                            <option value="Sr. System Development Engineer">Sr. System Development Engineer</option>
                            <option value="Mobile Development Engineer">Mobile Development Engineer</option>
                            <option value="Technical Support Staff">Technical Support Staff</option>
                            <option value="System Development Engineer Testing">System Development Engineer Testing</option>
                            <option value="System Development Engineer">System Development Engineer</option>
                            <option value="Finance Administrator">Finance Administrator</option>
                            <option value="Business Development Administrator">Business Development Administrator</option>
                            <option value="Process Improvement and Reengineering Specialist">Process Improvement and Reengineering Specialist</option>
                            <option value="Assistant Merchandiser">Assistant Merchandiser</option>
                            <option value="System Development Engineer">System Development Engineer</option>
                            <option value="Sr. Fleet Management Specialist">Sr. Fleet Management Specialist</option>
                            <option value="Fleet Management Specialist">Fleet Management Specialist</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="nama">Nama Lengkap (Full Name) :</label>
                    <div>
                        <input type="text" class="form-control" id="nama" placeholder="Nama Lengkap (Full Name)">
                    </div>
                </div>
                <div class="form-group">
                    <label for="ttl">Tempat/Tanggal Lahir (Place/ Date of Birth :)</label>
                    <div>
                        <input type="text" class="form-control" id="ttl" placeholder="Tempat/Tanggal Lahir (Place/ Date of Birth :)">
                    </div>
                </div>
                <div class="form-group">
                    <label for="noktp">No KTP (ID Card Number)</label>
                    <div>
                        <input type="text" class="form-control" id="noktp" placeholder="No KTP (ID Card Number)">
                    </div>
                </div>

                <div class="form-group">
                    <label for="noktp">No KTP (ID Card Number)</label>
                    <div>
                        <input type="checkbox" name="vehicle" value="C">C
                        <br>
                        <input type="checkbox" name="vehicle" value="A">A
                        <br>
                        <input type="checkbox" name="vehicle" value="B1">B1
                        <br>
                    </div>
                </div>

                <div class="form-group">
                    <label for="email">Alamat Email/ (Email address:)</label>
                    <div>
                        <input type="email" class="form-control" id="email" placeholder="Email">
                    </div>
                </div>
                <div class="form-group">
                    <label for="cv">Upload CV (pdf):</label>
                    <div>
                        <label class="btn btn-default btn-file">
                            Browse
                            <input type="file" style="display: none;">
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="twitter">Twitter</label>
                    <div>
                        <input type="text" class="form-control" id="twitter" placeholder="Twitter">
                    </div>
                </div>
                <div class="form-group">
                    <label for="facebook">Facebook</label>
                    <div>
                        <input type="text" class="form-control" id="facebook" placeholder="Facebook">
                    </div>
                </div>
                <div class="form-group">
                    <label for="LinkedIn">LinkedIn</label>
                    <div>
                        <input type="text" class="form-control" id="LinkedIn" placeholder="LinkedIn">
                    </div>
                </div>
                <div class="form-group">
                    <label for="Blog">Blog</label>
                    <div>
                        <input type="text" class="form-control" id="Blog" placeholder="Blog">
                    </div>
                </div>
                <div class="form-group">
                    <label for="telp">Telp / (Handphone:)</label>
                    <div>
                        <input type="text" class="form-control" id="telp" placeholder="087xxx">
                    </div>
                </div>
                <div class="form-group">
                    <label for="agama">Agama / Religion:</label>
                    <div>
                        <input type="text" class="form-control" id="agama" placeholder="Agama">
                    </div>
                </div>
                <div class="form-group">
                    <label for="sukubangsa">Suku Bangsa</label>
                    <div>
                        <input type="text" class="form-control" id="sukubangsa" placeholder="Suku Bangsa">
                    </div>
                </div>

                <div class="form-group">
                    <label for="statuspernikahan">Status Pernikahan</label>
                    <div>
                        <input type="radio" name="gender" value="male"> Lajang (Single)
                        <br>
                        <input type="radio" name="gender" value="female"> Menikah (Married)
                        <br>
                        <input type="radio" name="gender" value="other"> Janda (Widow)
                        <br>
                        <input type="radio" name="gender" value="other"> Duda (Widower)
                    </div>
                </div>
                <div class="form-group">
                    <label for="alamatsaatini">Alamat Saat ini (Current Address)</label>
                    <div>
                        <input type="text" class="form-control" id="alamatsaatini" placeholder="Alamat saat ini (Current Address)">
                    </div>
                </div>
                <div class="form-group">
                    <label for="alamatasal">Alamat Asal (Home Address)</label>
                    <div>
                        <input type="text" class="form-control" id="alamatasal" placeholder="Alamat Asal">
                    </div>
                </div>
                <div class="form-group">
                    <label for="teleponrumah">Telepon Rumah (Home Phone)</label>
                    <div>
                        <input type="text" class="form-control" id="teleponrumah" placeholder="Telepon Rumah">
                    </div>
                </div>
                <div class="form-group">
                    <label for="kontakdarurat">Kontak Darurat/ Emergency Call</label>
                    <div>
                        <input type="text" class="form-control" id="kontakdarurat" placeholder="Kontak Darurat (Emergency Call)">
                    </div>
                </div>
                <ul class="list-inline pull-right">
                    <li>
                        <button type="button" class="btn btn-primary next-step">Save and continue</button>
                    </li>
                </ul>

            </form>

    </div>
  </div>
    
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data () {
    return {
      msg: 'Welcome to Resume'
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
