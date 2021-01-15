let email;
let password;
let email_login = document.forms['login']['email'].value;
let email_daftar = document.forms['daftar']['email'].value;
let password_login = document.forms['login']['password'].value;
let password_daftar = document.forms['daftar']['password'].value;
let re_password = document.forms['daftar']['re_password'].value;
let login_btn = document.querySelector('#login_btn');
let daftar_btn = document.querySelector('#daftar_btn');
let modal = document.querySelector('.modal');
let ok_btn = document.querySelector('#ok-modal');

$(daftar_btn).click(function() {
    if (re_password == password_daftar || email_daftar != "") {
        email = email_daftar;
        password = password_daftar;
        document.querySelector('.modal-header').innerHTML = 'Daftar Berhasil!';
        $(modal).addClass('show');
        $(ok_btn).click(function() {
            $(modal).removeClass('show');
        })
    }
    else {
        document.querySelector('.modal-header').innerHTML = 'Password tidak sama!';
        $(modal).addClass('show');
        $(ok_btn).click(function() {
            $(modal).removeClass('show');
        })
    }
})

$(login_btn).click(function() {
    if (email_login == email && password_login == password || email_login != "") {
        document.querySelector('.modal-header').innerHTML = 'Login Berhasil!';
        $(modal).addClass('show');
        $(ok_btn).click(function() {
            window.location.href = "sd_index.html";
            // $('body').load('sd_index.html');
        })
    }
    else {
        document.querySelector('.modal-header').innerHTML = 'Username atau Password Salah!';
        $(modal).addClass('show');
        $(ok_btn).click(function() {
            $(modal).removeClass('show');
        })
    }
})