function checkFirstName(){
    var firstname = $('#firstname').val();
    var reg = /^[a-zA-Z -.]{2,10}$/;
    if(reg.test(firstname)){

        $('#firstNameError').text('');
        return true;
    }else{
        $('#firstNameError').text('Only Character');
        return false;
    }
}



$('#firstname').keyup(function(){
    checkFirstName();
});


function checkLastName() {
    var lastname = $('#lastname').val();
    var reg = /^[a-zA-Z -.]{2,10}$/;
    if(reg.test(lastname)){

        $('#lastNameError').text('');
        return true;
    }else{
        $('#lastNameError').text('Only Character');
        return false;
    }

}

$('#lastname').keyup(function(){
    checkLastName();
});


function checkEmailAddress() {
    var emailaddress = $('#emailaddress').val();
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;

    if(reg.test(emailaddress)){

        $('#emailAddressError').text('');
        return true;
    }else{
        $('#emailAddressError').text('Enter valid Email Address');
        return false;
    }

}

$('#emailaddress').keyup(function(){
    checkEmailAddress();
});


function checkPassword() {
    var password = $('#password').val();
    var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(reg.test(password)){

        $('#passwordError').text('');
        return true;
    }else{
        $('#passwordError').text('Password must contain 1 lower case, 1 UPPERCASE, 1 number and 1 special character')
        return false;
    }
}


$('#password').keyup(function(){
    checkPassword();
});

function checkConfirmPassword (){
    var password = $('#confirmpassword').val();
    var confirmPassword = $('#confirmpassword').val();

    if(password == confirmPassword){

        $('#confirmPasswordErrorpasswordError').text('');

        return true;
    }else{
        $('#confirmPasswordError').text('Password Doesnt match');
        return false;
    }
}


$('#confirmpassword').blur(function(){
    checkConfirmPassword();
});

$('#showHide').click(function(){
    var attrValue = $('#password').attr('type');
    if (attrValue == 'password'){
        $('#password').attr('type','text');

    } else {
        $('#password').attr('type','password');
    }
});




function checkGenderInfo() {
    var genderInfo = $('input[type="radio"]:checked').val();
    if (genderInfo == 'male' || genderInfo == 'female'){
        $('#genderError').text(' ');
        return true;
    }else{$('#genderError').text('Please select appropriate gender info');
        return false;
    }
}


function checkDistrictName(){
    var districtValue = $('#district').val();
    if (districtValue == ' '){
        $('#districtError').text('Please Select a District');
        return false;
    }else{
      $('#districtError').text (' ');
        return true;
    }
}

$('#form').submit(function () {
   if (checkFirstName()== true && checkLastName()== true && checkEmailAddress()== true && checkPassword()== true && checkConfirmPassword()== true && checkGenderInfo()== true && checkDistrictName()== true){
       alert('submitted');
       return true;

   }
   else {
       alert('test');
       return false;
   }
});

// $('#btn').click(function(){
//     checkGenderInfo()
//     checkDistrictName()
// });




$(window).scroll(function () {

    var winScroll = $(window).scrollTop();
    var menuScroll = $('#menu').position();

    if(winScroll >= menuScroll.top){
        $('#menuUl').css({
            'position' : 'fixed',
            'top' : '0px',
            'width' : '100%'
        });

    }else {
        $('#menuUl').css({
            'position' : 'relative',
            'top' : '0px'
        });
    }
})