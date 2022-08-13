const teamdata = [


    {
        userImage : "assets/images/team/ahmed.jpeg",
        userName : "AhmedRaza",
        userRole : "Team Leader",
        userFb : "https://www.facebook.com/profile.php?id=100011855118755",
        userWhatsapp : "//api.whatsapp.com/send?phone=923352847389",
        userInsta : "https://www.instagram.com"

    },

    {
        userImage : "assets/images/team/jerry.jpeg",
        userName : "Jahanzaib",
        userRole : "Team Member",
        userFb : "https://www.facebook.com/JerryCsGamer25",
        userWhatsapp : "//api.whatsapp.com/send?phone=923352847389",
        userInsta : "https://www.instagram.com"

    },

    {
        userImage : "assets/images/team/usama.jpeg",
        userName : "Usama",
        userRole : "Team Member",
        userFb : "https://www.facebook.com/usama.smart.39",
        userWhatsapp : "//api.whatsapp.com/send?phone=923362407389",
        userInsta : "https://www.instagram.com"

    },

    {
        userImage : "assets/images/team/ahsan.jpeg",
        userName : "Ahsan",
        userRole : "Team Member",
        userFb : "https://www.facebook.com/ahsan.asif.547727",
        userWhatsapp : "//api.whatsapp.com/send?phone=923310256237",
        userInsta : "https://www.instagram.com"

    },

    {
        userImage : "assets/images/team/ruhaifa.jpeg",
        userName : "Ruhaifa",
        userRole : "Team Member",
        userFb : "https://www.facebook.com/profile.php?id=100011855118755",
        userWhatsapp : "//api.whatsapp.com/send?phone=923352847389",
        userInsta : "https://www.instagram.com"

    },


]

document.getElementById("team-container").innerHTML =
`
<h2 class="title text-center mb-4">Meet Our Team</h2><!-- End .title text-center mb-2 -->

                        <div class="row">

${teamdata.map(function(teamdata){

    return `
    <div class="col-sm-6 col-lg-3">
                                <div class="member member-2 text-center">
                                    <figure class="member-media">
                                        <img src="${teamdata.userImage}" alt="member photo">

                                        <figcaption class="member-overlay">
                                            <div class="social-icons social-icons-simple">
                                                <a href="${teamdata.userFb}" class="social-icon" title="Facebook" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
                                                <a href="${teamdata.userWhatsapp}" class="social-icon" title="Whatsapp" target="_blank"><ion-icon name="logo-whatsapp"></ion-icon></a>
                                                <a href="${teamdata.userInsta}" class="social-icon" title="Instagram" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                                            </div><!-- End .soial-icons -->
                                        </figcaption><!-- End .member-overlay -->
                                    </figure><!-- End .member-media -->
                                    <div class="member-content">
                                        <h3 class="member-title">${teamdata.userName}<span>${teamdata.userRole}</span></h3><!-- End .member-title -->
                                    </div><!-- End .member-content -->
                                </div><!-- End .member -->
                            </div><!-- End .col-lg-3 -->
    
    `

}).join('')}
<div class="container">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1">
                            <div class="brands-text text-center mx-auto mb-2  mt-5">
                                <h2 class="title text-thrift " >Thrift fashion store established in 2022 is one of Pakistan's top one-stop fashion online store which is home to the country's finest designer and print wear. Our goal is to host a large number of collections to choose from under one banner of Highway plus fashion. </p>
                            </div><!-- End .brands-text -->
                                                           </div><!-- End .row -->
                            </div><!-- End .brands-display -->
                        </div><!-- End .col-lg-10 offset-lg-1 -->
                    </div>
</div>


`