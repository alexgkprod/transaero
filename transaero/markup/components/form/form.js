import 'jquery-validation';

$(document).ready(function () {
    $('#form-sign-in').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            email: 'Напишите правильно Ваш e-mail',
            password: {
                required: 'Напишите пароль',
                minlength: 'Напишите не менее 5 символов'
            }
        }
    });
});