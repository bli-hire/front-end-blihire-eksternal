<template>
 <div class= "Resume">
  <div class="container-fluid">
        <div class="row">
            <h1>Pengisian Form</h1>
            <section>
                <div class="wizard">
                    <div class="wizard-inner">
                        <div class="connecting-line"></div>
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active">
                                <a href="#step1" data-toggle="tab" aria-controls="step1" role="tab" title="Step 1">
                                    <span class="round-tab">
                                         <i class="glyphicon glyphicon-folder-open"></i>
                                    </span>

                                </a>
                            </li>
                            <li role="presentation" class="disabled">
                                <a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" title="Step 2">
                                    <span class="round-tab">
                              <i class="glyphicon glyphicon-pencil"></i>
                          </span>
                                </a>
                            </li>
                            <li role="presentation" class="disabled">
                                <a href="#step3" data-toggle="tab" aria-controls="step3" role="tab" title="Step 3">
                                    <span class="round-tab">
                              <i class="glyphicon glyphicon-picture"></i>
                          </span>
                                </a>
                            </li>
                            <li role="presentation" class="disabled">
                                <a href="#step4" data-toggle="tab" aria-controls="step4" role="tab" title="Step 4">
                                    <span class="round-tab">
                              <i class="glyphicon glyphicon-picture"></i>
                          </span>
                                </a>
                            </li>
                            <li role="presentation" class="disabled">
                                <a href="#step5" data-toggle="tab" aria-controls="step5" role="tab" title="Step 5">
                                    <span class="round-tab">
                              <i class="glyphicon glyphicon-picture"></i>
                          </span>
                                </a>
                            </li>
                            <li role="presentation" class="disabled">
                                <a href="#step6" data-toggle="tab" aria-controls="step6" role="tab" title="Step 6">
                                    <span class="round-tab">
                              <i class="glyphicon glyphicon-picture"></i>
                          </span>
                                </a>
                            </li>

                            <li role="presentation" class="disabled">
                                <a href="#complete" data-toggle="tab" aria-controls="complete" role="tab" title="Complete">
                                    <span class="round-tab">
                              <i class="glyphicon glyphicon-ok"></i>
                          </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <form role="form">
                        <div class="tab-content">
                            <div class="tab-pane active textkiri" role="tabpanel" id="step1">
                                <h3>I. DATA PRIBADI</h3>
                                <h3>PERSONAL DATA</h3>

                                <form class="form-horizontal">
                                    <div class="form-group">
                                        <label for="title">Title:</label>
                                        <div>
                                            <select class="form-control" id="sel1" v-model="title">
                                                <option value="" disabled selected>Silahkan Pilih</option>
                                                <option>Professionals</option>
                                                <option>Students and Graduates</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Job Title:</label>
                                        <div>
                                            <select class="form-control" id="sel2" v-model="jobTitle">
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
                                            <input type="text" class="form-control" id="nama" v-model="fullName" placeholder="Nama Lengkap (Full Name)">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="ttl">Tempat/Tanggal Lahir (Place/ Date of Birth :)</label>
                                        <div>
                                            <input type="text" class="form-control" id="ttl" v-model="placeDateOfBirth" placeholder="Tempat/Tanggal Lahir (Place/ Date of Birth :)">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="noktp">No KTP (ID Card Number)</label>
                                        <div>
                                            <input type="text" class="form-control" id="noktp" v-model="idCardNumber" placeholder="No KTP (ID Card Number)">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="noktp">SIM (Driving License)</label>
                                        <div>
                                            <input type="checkbox" id="C" v-model="drivingLicense" value="C">
                                            <label for="C">C</label>
                                            <br>
                                            <input type="checkbox" id="A" v-model="drivingLicense" value="A">
                                            <label for="A">A</label>
                                            <br>
                                            <input type="checkbox" id="B1" v-model="drivingLicense" value="B1">
                                            <label for="B1">B1</label>
                                            <br>
                                           <!--  <span>drivingLicense: {{ drivingLicense }}</span> -->
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="email">Alamat Email/ (Email address:)</label>
                                        <div>
                                            <input type="email" class="form-control" id="email" v-model="emailAddress" placeholder="Email">
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
                                            <input type="text" class="form-control" id="twitter" v-model="twitter" placeholder="Twitter">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="facebook">Facebook</label>
                                        <div>
                                            <input type="text" class="form-control" id="facebook" v-model="facebook" placeholder="Facebook">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="LinkedIn">LinkedIn</label>
                                        <div>
                                            <input type="text" class="form-control" id="LinkedIn" v-model="linkedIn" placeholder="LinkedIn">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="Blog">Blog</label>
                                        <div>
                                            <input type="text" class="form-control" id="Blog" v-model="blog" placeholder="Blog">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="telp">Telp / (Handphone:)</label>
                                        <div>
                                            <input type="text" class="form-control" id="telp" v-model="handphone" placeholder="087xxx">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="agama">Agama / Religion:</label>
                                        <div>
                                            <input type="text" class="form-control" id="agama" v-model="religion" placeholder="Agama">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="sukubangsa">Suku Bangsa</label>
                                        <div>
                                            <input type="text" class="form-control" id="sukubangsa" v-model="ethnicty" placeholder="Suku Bangsa">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="statuspernikahan">Status Pernikahan</label>
                                        <div>
                                            <input type="radio" id="Lajang" v-model="maritalStatus" value="Lajang">
                                            <label for="Lajang">Lajang</label>
                                            <br>
                                            <input type="radio" id="Menikah" v-model="maritalStatus" value="Menikah">
                                            <label for="Menikah">Menikah</label>
                                            <br>
                                            <input type="radio" id="Janda" v-model="maritalStatus" value="Janda">
                                            <label for="Janda">Janda</label>
                                            <br>
                                            <input type="radio" id="Duda" v-model="maritalStatus" value="other">
                                            <label for="Duda">Duda</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="alamatsaatini">Alamat Saat ini (Current Address)</label>
                                        <div>
                                            <input type="text" class="form-control" id="alamatsaatini" v-model="currentAddress" placeholder="Alamat saat ini (Current Address)">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="alamatasal">Alamat Asal (Home Address)</label>
                                        <div>
                                            <input type="text" class="form-control" id="alamatasal" v-model="homeAddress" placeholder="Alamat Asal">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="teleponrumah">Telepon Rumah (Home Phone)</label>
                                        <div>
                                            <input type="text" class="form-control" id="teleponrumah" v-model="homePhone" placeholder="Telepon Rumah">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="kontakdarurat">Kontak Darurat/ Emergency Call</label>
                                        <div>
                                            <input type="text" class="form-control" id="kontakdarurat" v-model="emergencyCall" placeholder="Kontak Darurat (Emergency Call)">
                                        </div>
                                    </div>
                                    <ul class="list-inline pull-right">
                                        <li>
                                            <button type="button" class="btn btn-primary next-step" v-on:click="inputcv()">Save and continue</button>
                                        </li>
                                    </ul>

                                </form>

                            </div>
                            <div class="tab-pane textkiri" role="tabpanel" id="step2">
                                <h3>II. LATAR BELAKANG KELUARGA</h3>
                                <h3>FAMILY BACKGROUND</h3>

                                <div class="form-group">
                                    <div>
                                        <h3>Ayah</h3>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="namaayah">Nama (Name)</label>
                                    <div>
                                        <input type="text" class="form-control" id="namaayah" placeholder="Nama (Name)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="tanggallahirayah">Tanggal Lahir (Birthday)</label>
                                    <div>
                                        <input type="text" class="form-control" id="tanggallahirayah" placeholder="Tanggal Lahir (Birthday)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="pendidikanterakhir">Pendidikan Terakhir (Latest Education)</label>
                                    <div>
                                        <input type="text" class="form-control" id="pendidikanterakhir" placeholder="Pendidikan Terakhir (Latest Education)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="pekerjaan">Pekerjaan</label>
                                    <div>
                                        <input type="text" class="form-control" id="pekerjaan" placeholder="Pekerjaan (Current Job)">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div>
                                        <h3>Ibu</h3>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="namaibu">Nama (Name)</label>
                                    <div>
                                        <input type="text" class="form-control" id="namaibu" placeholder="Nama (Name)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="tanggallahiribu">Tanggal Lahir (Birthday)</label>
                                    <div>
                                        <input type="text" class="form-control" id="tanggallahiribu" placeholder="Tanggal Lahir (Birthday)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="pendidikanterakhir">Pendidikan Terakhir (Latest Education)</label>
                                    <div>
                                        <input type="text" class="form-control" id="pendidikanterakhir" placeholder="Pendidikan Terakhir (Latest Education)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="pekerjaan">Pekerjaan</label>
                                    <div>
                                        <input type="text" class="form-control" id="pekerjaan" placeholder="Pekerjaan (Current Job)">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div>
                                        <h3>Saudara</h3>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="namasaudara1">Nama (Name)</label>
                                    <div>
                                        <input type="text" class="form-control" id="namasaudara1" placeholder="Nama (Name)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="tanggallahirsaudara1">Tanggal Lahir (Birthday)</label>
                                    <div>
                                        <input type="text" class="form-control" id="tanggallahirsaudara1" placeholder="Tanggal Lahir (Birthday)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="pendidikanterakhirsaudara1">Pendidikan Terakhir (Latest Education)</label>
                                    <div>
                                        <input type="text" class="form-control" id="pendidikanterakhirsaudara1" placeholder="Pendidikan Terakhir (Latest Education)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="pekerjaansaudara1">Pekerjaan</label>
                                    <div>
                                        <input type="text" class="form-control" id="pekerjaansaudara1" placeholder="Pekerjaan (Current Job)">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div>
                                        <h3>Saudara ke 2</h3>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="namasaudara2">Nama (Name)</label>
                                    <div>
                                        <input type="text" class="form-control" id="namasaudara2" placeholder="Nama (Name)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="tanggallahirsaudara1">Tanggal Lahir (Birthday)</label>
                                    <div>
                                        <input type="text" class="form-control" id="tanggallahirsaudara2" placeholder="Tanggal Lahir (Birthday)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="pendidikanterakhirsaudara2">Pendidikan Terakhir (Latest Education)</label>
                                    <div>
                                        <input type="text" class="form-control" id="pendidikanterakhirsaudara2" placeholder="Pendidikan Terakhir (Latest Education)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="pekerjaansaudara2">Pekerjaan</label>
                                    <div>
                                        <input type="text" class="form-control" id="pekerjaansaudara2" placeholder="Pekerjaan (Current Job)">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div>
                                        <h2>Jika sudah menikah</h2>
                                        <h2>if married already</h2>
                                        <h3>Pasangan</h3>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="namapasangan">Nama (Name)</label>
                                    <div>
                                        <input type="text" class="form-control" id="namapasangan" placeholder="Nama (Name)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="tanggallahirpasangan">Tanggal Lahir (Birthday)</label>
                                    <div>
                                        <input type="text" class="form-control" id="tanggallahirpasangan" placeholder="Tanggal Lahir (Birthday)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="pendidikanterakhirpasangan">Pendidikan Terakhir (Latest Education)</label>
                                    <div>
                                        <input type="text" class="form-control" id="pendidikanterakhirpasangan" placeholder="Pendidikan Terakhir (Latest Education)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="pekerjaanpasangan">Pekerjaan</label>
                                    <div>
                                        <input type="text" class="form-control" id="pekerjaanpasangan" placeholder="Pekerjaan (Current Job)">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div>

                                        <h3>Anak</h3>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="namaanak">Nama (Name)</label>
                                    <div>
                                        <input type="text" class="form-control" id="namaanak" placeholder="Nama (Name)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="tanggallahiranak">Tanggal Lahir (Birthday)</label>
                                    <div>
                                        <input type="text" class="form-control" id="tanggallahiranak" placeholder="Tanggal Lahir (Birthday)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="pendidikanterakhiranak">Pendidikan Terakhir (Latest Education)</label>
                                    <div>
                                        <input type="text" class="form-control" id="pendidikanterakhiranak" placeholder="Pendidikan Terakhir (Latest Education)">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="pekerjaananak">Pekerjaan</label>
                                    <div>
                                        <input type="text" class="form-control" id="pekerjaananak" placeholder="Pekerjaan (Current Job)">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Apakah saat ini Anda memiliki tanggungan selain anak dan istri ?</label>
                                    <div>

                                        <textarea class="form-control" rows="5" id="comment" placeholder="Ya, Sebutkan"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Bentuk tanggungan ?</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <ul class="list-inline pull-right">
                                    <li>
                                        <button type="button" class="btn btn-default prev-step">Previous</button>
                                    </li>
                                    <li>
                                        <button type="button" class="btn btn-primary next-step">Save and continue</button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-pane textkiri" role="tabpanel" id="step3">
                                <h3>III. LATAR BELAKANG PENDIDIKAN DAN KEMAMPUAN BERBAHASA</h3>
                                <h3>EDUCATIONAL BACKGROUND AND LANGUAGE COMPETENCIES</h3>

                                <div class="form-group">
                                    <div>
                                        <h3>1. Pendidikan Formal (Formal Education)</h3>
                                        <h4>SLTA (High School)</h4>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Sekolah/Perguruan Tinggi (School/University)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Jurusan (Major)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Kota (City)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Periode (Periode)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">IPK (GPA)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div>

                                        <h4>Diploma (Diploma)</h4>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Sekolah/Perguruan Tinggi (School/University)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Jurusan (Major)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Kota (City)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Periode (Periode)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">IPK (GPA)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div>

                                        <h4>S1 (Bachelor)</h4>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Sekolah/Perguruan Tinggi (School/University)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Jurusan (Major)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Kota (City)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Periode (Periode)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">IPK (GPA)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div>

                                        <h4>S2 (Master)</h4>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Sekolah/Perguruan Tinggi (School/University)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Jurusan (Major)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Kota (City)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Periode (Periode)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">IPK (GPA)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for=""> Apa alasan Anda memilih jurusan pada Perguruan Tinggi tersebut? (What’s the reason you chose that major?)</label>
                                    <div>
                                        <textarea class="form-control" rows="5" id="alasan"></textarea>
                                    </div>
                                </div>
                                <br>

                                <div class="form-group">
                                    <label for=""> Apa judul karya tulis ilmiah/skripsi/thesis Anda? (What’s the title of your final paper or thesis?)</label>
                                    <div>
                                        <textarea class="form-control" rows="5" id="jdlskripsi"></textarea>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <h3>2. Pendidikan Non Formal (Kursus, Pelatihan, Seminar, Lokakarya, dll)
                     Non Formal Education (Courses, Trainings, Seminar, Workshops, etc)</h3>
                                </div>

                                <h5>Data ke 1</h5>
                                <div class="form-group">
                                    <label for="">Nama Kursus atau Pelatihan Name of Course or Training</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Penyelenggara Organizer</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Tahun Year</label>
                                    <div>

                                        <select name="tahun">
                                            <option value="">1996</option>
                                            <option value="">1997</option>
                                            <option value="">1998</option>
                                            <option value="">1999</option>
                                            <option value="">2000</option>
                                            <option value="">2001</option>
                                            <option value="">2002</option>
                                            <option value="">2003</option>
                                            <option value="">2004</option>
                                            <option value="">2005</option>
                                            <option value="">2006</option>
                                            <option value="">2007</option>
                                            <option value="">2008</option>
                                            <option value="">2009</option>
                                            <option value="">2010</option>
                                            <option value="">2011</option>
                                            <option value="">2012</option>
                                            <option value="">2013</option>
                                            <option value="">2014</option>
                                            <option value="">2015</option>
                                            <option value="">2016</option>
                                            <option value="">2017</option>
                                        </select>
                                        <br>
                                        <br>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Keterangan Notes</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Nama Kursus atau Pelatihan Name of Course or Training</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <h5>Data ke 2</h5>
                                <div class="form-group">
                                    <label for="">Nama Kursus atau Pelatihan Name of Course or Training</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Penyelenggara Organizer</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Tahun Year</label>
                                    <div>

                                        <select name="tahun">
                                            <option value="">1996</option>
                                            <option value="">1997</option>
                                            <option value="">1998</option>
                                            <option value="">1999</option>
                                            <option value="">2000</option>
                                            <option value="">2001</option>
                                            <option value="">2002</option>
                                            <option value="">2003</option>
                                            <option value="">2004</option>
                                            <option value="">2005</option>
                                            <option value="">2006</option>
                                            <option value="">2007</option>
                                            <option value="">2008</option>
                                            <option value="">2009</option>
                                            <option value="">2010</option>
                                            <option value="">2011</option>
                                            <option value="">2012</option>
                                            <option value="">2013</option>
                                            <option value="">2014</option>
                                            <option value="">2015</option>
                                            <option value="">2016</option>
                                            <option value="">2017</option>
                                        </select>
                                        <br>
                                        <br>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Keterangan Notes</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <h5>Data ke 3</h5>
                                <div class="form-group">
                                    <label for="">Nama Kursus atau Pelatihan Name of Course or Training</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Penyelenggara Organizer</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Tahun Year</label>
                                    <div>

                                        <select name="tahun">
                                            <option value="">1996</option>
                                            <option value="">1997</option>
                                            <option value="">1998</option>
                                            <option value="">1999</option>
                                            <option value="">2000</option>
                                            <option value="">2001</option>
                                            <option value="">2002</option>
                                            <option value="">2003</option>
                                            <option value="">2004</option>
                                            <option value="">2005</option>
                                            <option value="">2006</option>
                                            <option value="">2007</option>
                                            <option value="">2008</option>
                                            <option value="">2009</option>
                                            <option value="">2010</option>
                                            <option value="">2011</option>
                                            <option value="">2012</option>
                                            <option value="">2013</option>
                                            <option value="">2014</option>
                                            <option value="">2015</option>
                                            <option value="">2016</option>
                                            <option value="">2017</option>
                                        </select>
                                        <br>
                                        <br>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Keterangan Notes</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <h5>Data ke 3</h5>
                                <div class="form-group">
                                    <label for="">Nama Kursus atau Pelatihan Name of Course or Training</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Penyelenggara Organizer</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Keterangan Notes</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <h3>3. Kegiatan Sosial Social Activity</h3>
                                </div>

                                <div class="form-group">
                                    <label for="">Nama Organisasi Name of Organization</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Bidang Field of Organization</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for=""> Periode Keikutsertaan Attendance Period</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for=""> Keterangan Notes </label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <h3>4. Penghargaan Achievements</h3>
                                </div>
                                <h5>Data ke 1</h5>
                                <div class="form-group">
                                    <label for="">Penghargaan Achievement </label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Tahun Year</label>
                                    <div>

                                        <select name="tahun">
                                            <option value="">1996</option>
                                            <option value="">1997</option>
                                            <option value="">1998</option>
                                            <option value="">1999</option>
                                            <option value="">2000</option>
                                            <option value="">2001</option>
                                            <option value="">2002</option>
                                            <option value="">2003</option>
                                            <option value="">2004</option>
                                            <option value="">2005</option>
                                            <option value="">2006</option>
                                            <option value="">2007</option>
                                            <option value="">2008</option>
                                            <option value="">2009</option>
                                            <option value="">2010</option>
                                            <option value="">2011</option>
                                            <option value="">2012</option>
                                            <option value="">2013</option>
                                            <option value="">2014</option>
                                            <option value="">2015</option>
                                            <option value="">2016</option>
                                            <option value="">2017</option>
                                        </select>
                                        <br>
                                        <br>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Keterangan Notes </label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <h5>Data ke 2</h5>
                                <div class="form-group">
                                    <label for="">Penghargaan Achievement </label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Tahun Year</label>
                                    <div>

                                        <select name="tahun">
                                            <option value="">1996</option>
                                            <option value="">1997</option>
                                            <option value="">1998</option>
                                            <option value="">1999</option>
                                            <option value="">2000</option>
                                            <option value="">2001</option>
                                            <option value="">2002</option>
                                            <option value="">2003</option>
                                            <option value="">2004</option>
                                            <option value="">2005</option>
                                            <option value="">2006</option>
                                            <option value="">2007</option>
                                            <option value="">2008</option>
                                            <option value="">2009</option>
                                            <option value="">2010</option>
                                            <option value="">2011</option>
                                            <option value="">2012</option>
                                            <option value="">2013</option>
                                            <option value="">2014</option>
                                            <option value="">2015</option>
                                            <option value="">2016</option>
                                            <option value="">2017</option>
                                        </select>
                                        <br>
                                        <br>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Keterangan Notes </label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <h5>Data ke 3</h5>
                                <div class="form-group">
                                    <label for="">Penghargaan Achievement </label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Tahun Year</label>
                                    <div>

                                        <select name="tahun">
                                            <option value="">1996</option>
                                            <option value="">1997</option>
                                            <option value="">1998</option>
                                            <option value="">1999</option>
                                            <option value="">2000</option>
                                            <option value="">2001</option>
                                            <option value="">2002</option>
                                            <option value="">2003</option>
                                            <option value="">2004</option>
                                            <option value="">2005</option>
                                            <option value="">2006</option>
                                            <option value="">2007</option>
                                            <option value="">2008</option>
                                            <option value="">2009</option>
                                            <option value="">2010</option>
                                            <option value="">2011</option>
                                            <option value="">2012</option>
                                            <option value="">2013</option>
                                            <option value="">2014</option>
                                            <option value="">2015</option>
                                            <option value="">2016</option>
                                            <option value="">2017</option>
                                        </select>
                                        <br>
                                        <br>

                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Keterangan Notes </label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Keterangan:</label>
                                    <div>

                                        <h5>    Berikan tanda checklist (√) sesuai dengan kemampuan berbahasa Anda
                     Please give checklist (√) based on your language competencies</h5>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Bahasa Inggris</label>
                                    <div>
                                        <label for="">Lisan Spoken</label>
                                        <input type="checkbox" name="vehicle" value="">Active
                                        <br>
                                        <input type="checkbox" name="vehicle" value="">Passive
                                        <br>
                                        <label for="">Tulisan Written</label>
                                        <input type="checkbox" name="vehicle" value="">Active
                                        <br>
                                        <input type="checkbox" name="vehicle" value="">Passive
                                        <br>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Bahasa</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                        <label for="">Lisan Spoken</label>
                                        <input type="checkbox" name="vehicle" value="">Active
                                        <br>
                                        <input type="checkbox" name="vehicle" value="">Passive
                                        <br>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Bahasa</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                        <label for="">Lisan Spoken</label>
                                        <input type="checkbox" name="vehicle" value="">Active
                                        <br>
                                        <input type="checkbox" name="vehicle" value="">Passive
                                        <br>
                                    </div>
                                </div>
                                <ul class="list-inline pull-right">
                                    <li>
                                        <button type="button" class="btn btn-default prev-step">Previous</button>
                                    </li>
                                    <li>
                                        <button type="button" class="btn btn-default next-step">Skip</button>
                                    </li>
                                    <li>
                                        <button type="button" class="btn btn-primary btn-info-full next-step">Save and continue</button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-pane textkiri" role="tabpanel" id="step4">
                                <h3>IV. PENGALAMAN KERJA</h3>
                                <h3>WORK EXPERIENCE</h3>

                                <div class="form-group">
                                    <label for="">1.</label>
                                    <div>

                                        <h5>    Mohon diisi, dimulai dari pekerjaan terakhir!
                           Please fill it descending from your current/latest employment!</h5>
                                    </div>
                                </div>

                                <h5>Data ke 1</h5>

                                <div class="form-group">
                                    <label for="">Nama Perusahaan Company name </label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Bidang Usaha Company Field</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Jabatan Position</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Periode Period</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Deskripsi Pekerjaan Job Description </label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Alasan Berhenti Reason to Leave </label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Referensi (Reference): </label>
                                    <div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Nama (Name)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Jabatan Position</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">No Telepon Phone Number</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">1.</label>
                                    <div>

                                        <h5>     Mohon gambarkan posisi terakhir Anda dalam struktur organisasi! STRUKTUR ORGANISASI
                         Please describe your last position in organizational chart!
                       </h5>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="cv">Upload gambar struktur organisasi(organizational chart):</label>
                                    <div>
                                        <label class="btn btn-default btn-file">
                                            Browse
                                            <input type="file" style="display: none;">
                                        </label>
                                    </div>
                                </div>

                                <h5>Data ke 2</h5>

                                <div class="form-group">
                                    <label for="">Nama Perusahaan Company name </label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Bidang Usaha Company Field</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Jabatan Position</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Periode Period</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Deskripsi Pekerjaan Job Description </label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Alasan Berhenti Reason to Leave </label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Referensi (Reference): </label>
                                    <div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">Nama (Name)</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">Jabatan Position</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="">No Telepon Phone Number</label>
                                    <div>
                                        <input type="text" class="form-control" id="">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="">1.</label>
                                    <div>

                                        <h5>     Mohon gambarkan posisi terakhir Anda dalam struktur organisasi! STRUKTUR ORGANISASI
                         Please describe your last position in organizational chart!
                       </h5>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="cv">Upload gambar struktur organisasi(organizational chart):</label>
                                    <div>
                                        <label class="btn btn-default btn-file">
                                            Browse
                                            <input type="file" style="display: none;">
                                        </label>
                                    </div>
                                </div>
                                <ul class="list-inline pull-right">
                                    <li>
                                        <button type="button" class="btn btn-default prev-step">Previous</button>
                                    </li>
                                    <li>
                                        <button type="button" class="btn btn-default next-step">Skip</button>
                                    </li>
                                    <li>
                                        <button type="button" class="btn btn-primary btn-info-full next-step">Save and continue</button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-pane textkiri" role="tabpanel" id="step5">
                                <h3>V. MINAT DAN KONSEP PRIBADI</h3>
                                <h3>INTEREST AND PERSONAL CONCEPT</h3>

                                <div class="form-group">
                                    <label class="control-label col-sm-10" for="">Mengapa Anda berminat bekerja di PT. Global Digital Niaga (blibli.com)? Why are you interested in working at PT. Global Digital Niaga (blibli.com)?</label>
                                    <div class="form-essay col-sm-12">
                                        <textarea class="control-label form-control" rows="5" id=""></textarea>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="question-form-essay col-sm-9" for="">Mengapa Anda ingin bekerja pada jabatan yang Anda lamar? Why do you want to work in the position that you are applying?</label>
                                    <div class="form-essay col-sm-12">
                                        <textarea class="control-label form-control" rows="5" id=""></textarea>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="question-form-essay col-sm-9" for="">Faktor apa yang akan mendorong Anda untuk bertahan dalam suatu pekerjaan? What factors would encourage you to stay on the job?</label>
                                    <div class="form-essay col-sm-12">
                                        <textarea class="control-label form-control" rows="5" id=""></textarea>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="question-form-essay col-sm-9" for="">Lingkungan kerja seperti apa yang Anda harapkan? What kind of work environment do you expect?</label>
                                    <div class="form-essay col-sm-12">
                                        <textarea class="control-label form-control" rows="5" id=""></textarea>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="question-form-essay col-sm-9" for=""> Tuliskan value hidup anda! Please write down your life value!</label>
                                    <div class="form-essay col-sm-12">
                                        <textarea class="control-label form-control" rows="5" id=""></textarea>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="question-form-essay col-sm-9" for="">Sebutkan keterampilan khusus yang Anda miliki! Please mention some specific skills that you have!</label>
                                    <div class="form-essay col-sm-12">
                                        <textarea class="control-label form-control" rows="5" id=""></textarea>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="question-form-essay col-sm-9" for="">Sebutkan hobi / kegemaran Anda! Please mention your hobbies/interest!</label>
                                    <div class="form-essay col-sm-12">
                                        <textarea class="control-label form-control" rows="5" id=""></textarea>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="question-form-essay col-sm-9" for="">Deskripsikan informasi lain mengenai diri Anda pada kolom ini! Contoh : kepribadian Anda, ciri khas Anda atau apapun tentang diri Anda yang perlu kami tahu. Please describe another information about you Ex: your personality, your characteristic, or anything that we need to know.</label>
                                    <div class="form-essay col-sm-12">
                                        <textarea class="control-label form-control" rows="9" id=""></textarea>
                                    </div>
                                </div>
                                <ul class="list-inline pull-right">
                                    <li>
                                        <button type="button" class="btn btn-default prev-step">Previous</button>
                                    </li>
                                    <li>
                                        <button type="button" class="btn btn-default next-step">Skip</button>
                                    </li>
                                    <li>
                                        <button type="button" class="btn btn-primary btn-info-full next-step">Save and continue</button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-pane textkiri" role="tabpanel" id="step6">
                                <h3> VI. LAIN-LAIN</h3>
                                <h3>OTHERS</h3>

                                <div class="form-group">
                                    <label class="question-form-essay col-sm-9" for="">Dimana Anda memperoleh informasi mengenai lowongan pekerjaan di PT. Global Digital Niaga (blibli.com)? Where did you find the information about job vacancies at PT. Global Digital Niaga (blibli.com)?</label>
                                    <div class="form-essay col-sm-12">
                                        <textarea class="control-label form-control" rows="5" id=""></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="question-form-essay col-sm-9" for="">Apakah Anda memiliki keluarga, kerabat, atau teman yang bekerja di PT. Global Digital Niaga (blibli.com)? Sebutkan! Do you have any relatives working in PT. Global Digital Niaga (blibli.com)? Please mention!</label>
                                    <div class="form-essay col-sm-12">
                                        <textarea class="control-label form-control" rows="5" id=""></textarea>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="question-form-essay col-sm-9" for="">Apakah Anda pernah melamar ke PT. Global Digital Niaga (blibli.com) sebelumnya? Jika ya, kapan dan untuk posisi apa? Have you applied for any employment in PT. Global Digital Niaga (blibli.com) before? If yes, when and what position?</label>
                                    <div class="form-essay col-sm-12">
                                        <textarea class="control-label form-control" rows="5" id=""></textarea>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="question-form-essay col-sm-9" for=""> Apakah Anda memiliki pekerjaan sampingan/part time? Sebutkan! Do you have any other jobs/part time job now? Please mention!</label>
                                    <div class="form-essay col-sm-12">
                                        <textarea class="control-label form-control" rows="5" id=""></textarea>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="question-form-essay col-sm-9" for=""> Jika Anda diterima, kapan Anda dapat mulai bekerja? If you are accepted, when can you start to work?</label>
                                    <div class="form-essay col-sm-12">
                                        <textarea class="control-label form-control" rows="5" id=""></textarea>
                                    </div>
                                </div>

                                <div class="form-essay col-sm-12">
                                    <p>Dengan ini Saya menyatakan bahwa semua data yang Saya tuliskan di dalam form ini adalah benar. Saya menyadari bahwa ketidakjujuran mengenai data-data di atas dapat mengakibatkan pembatalan atau pemutusan hubungan kerja dari pihak perusahaan. (I declare that all information given herein is true and correct. I understand that any misrepresentation or omission of facts will be sufficient cause for cancellation of consideration for employment or dismissal from the Company’s service if I have been employed.)</p>
                                    <ul class="list-inline pull-right">
                                        <li>
                                            <button type="button" class="btn btn-default prev-step">Previous</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-default next-step">Skip</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-primary btn-info-full next-step">Save and continue</button>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div class="tab-pane" role="tabpanel" id="complete">
                                <h3>Complete</h3>
                                <p>You have successfully completed all steps.</p>
                                 <div class="btn btn-primary btn-info-full next-step">
                                    <router-link to="/Alert">Done</router-link>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </div>

   
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'cv',
  data () {
    return {
      msg: 'cv',
      fullName: '',
      title: '',
      jobTitle: '',
      placeDateOfBirth: '',
      idCardNumber: '',
      drivingLicense: [],
      emailAddress: '',
      uploadCV: '',
      twitter: '',
      facebook: '',
      linkedIn: '',
      blog: '',
      handphone: '',
      religion: '',
      ethnicty: '',
      maritalStatus: '',
      currentAddress: '',
      homeAddress: '',
      homePhone: '',
      emergencyCall: '',
      fatherName: '',
      fatherBirthday: '',
      fatherLatestEducation: '',
      fatherCurrentJob: '',
      motherName: '',
      motherBirthday: '',
      motherLatestEducation: '',
      motherCurrentJob: '',
      spouseName: '',
      spousebirthDay: '',
      spouseLatestEducation: '',
      spouseCurrentJob: '',
      responsibilities: '',
      responsibilitiesType: '',
      reasonMajor: '',
      titleThesis: '',
      nameOfOrganization: '',
      fieldOfOrganization: '',
      attendancePeriod: '',
      notes: '',
      achievement: '',
      yearAchievement: '',
      notesAchievement: '',
      reasonInterestedInGDN: '',
      reasonApplyOnThatPosition: '',
      factorEncaurageYouOnThatJob: '',
      kindOfEnvirontment: '',
      lifeValue: '',
      spesificSkill: '',
      hobbies: '',
      describeAboutYou: '',
      placeGetInformationGDN: '',
      relativeWorkingOnGDN: '',
      haveAppliedOnGDN: '',
      havePartTimeJob: '',
      timeStartWork: '',
      cv: null
    }
  },
  methods: {
    inputcv () {
      var self = this
      self.$http.post('http://localhost:7777/cv/add', {
        fullName: self.fullName,
        title: self.title,
        jobTitle: self.jobTitle,
        placeDateOfBirth: self.placeDateOfBirth,
        idCardNumber: self.idCardNumber,
        drivingLicense: self.drivingLicense,
        emailAddress: self.emailAddress,
        uploadCV: self.uploadCV,
        twitter: self.twitter,
        facebook: self.facebook,
        linkedIn: self.linkedIn,
        blog: self.blog,
        homeAddress: self.homeAddress,
        homePhone: self.homePhone,
        handphone: self.handphone,
        emergencyCall: self.emergencyCall,
        ethnicty: self.ethnicty,
        maritalStatus: self.maritalStatus,
        religion: self.religion,
        fatherName: self.fatherName,
        fatherBirthday: self.fatherBirthday,
        fatherLatestEducation: self.fatherLatestEducation,
        fatherCurrentJob: self.fatherCurrentJob,
        motherName: self.motherName,
        motherBirthday: self.motherBirthday,
        motherCurrentJob: self.motherCurrentJob,
        motherLatestEducation: self.motherLatestEducation,
        spouseName: self.spouseName,
        spousebirthDay: self.spousebirthDay,
        spouseCurrentJob: self.spouseCurrentJob,
        spouseLatestEducation: self.spouseLatestEducation,
        responsibilities: self.responsibilities,
        responsibilitiesType: self.responsibilitiesType,
        reasonMajor: self.reasonMajor,
        titleThesis: self.titleThesis,
        nameOfOrganization: self.nameOfOrganization,
        fieldOfOrganization: self.fieldOfOrganization,
        attendancePeriod: self.attendancePeriod,
        notes: self.notes,
        achievement: self.achievement,
        yearAchievement: self.yearAchievement,
        notesAchievement: self.notesAchievement,
        reasonInterestedInGDN: self.reasonInterestedInGDN,
        reasonApplyOnThatPosition: self.reasonApplyOnThatPosition,
        factorEncaurageYouOnThatJob: self.factorEncaurageYouOnThatJob,
        kindOfEnvirontment: self.kindOfEnvirontment,
        lifeValue: self.lifeValue,
        spesificSkill: self.spesificSkill,
        hobbies: self.hobbies,
        describeAboutYou: self.describeAboutYou,
        placeGetInformationGDN: self.placeGetInformationGDN,
        relativeWorkingOnGDN: self.relativeWorkingOnGDN,
        haveAppliedOnGDN: self.haveAppliedOnGDN,
        havePartTimeJob: self.havePartTimeJob,
        timeStartWork: self.timeStartWork}, (json) => {
          window.sessionStorage.setItem('cv', json)
          this.cv = json
          alert(this.cv)
        })
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
