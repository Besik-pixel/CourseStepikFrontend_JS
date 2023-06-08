let message;

let login = 'Сотрудник';

(login == 'Сотрудник') ? message = 'Привет' :
    (login == 'Директор') ? message = 'Здравствуйте' :
    (login == '') ? message = 'Нет логина' : 
        message = '';
alert(message);