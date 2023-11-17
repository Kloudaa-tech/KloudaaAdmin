function getUser(){
    var admin_username = 'Admin Username'
    var admin_profile = 'assets/avatar.png'
    $('#admin_username').text(admin_username)
    $('#admin_profile').attr('src', admin_profile)
}

getUser()

function logout(){
    console.log('logout')
}
