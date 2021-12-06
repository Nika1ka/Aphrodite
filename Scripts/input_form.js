function storage_available() {
	try {
		var storage = window.localStorage;
		storage.setItem('storage', 'test_text');
		storage.removeItem('storage');
		return true;
	}
	catch(e) {
		return false;
	}
}

function surname_imput() {
    if (document.getElementById("surname_imput").value == '') {
        document.getElementById("surname_imput").style.background = "rgba(255, 40, 40, 0.5)";
        document.getElementById("surname_imput").placeholder = '*Обязательное поле*';
        document.getElementById("text_mistake_surname").style.display = 'none';
        return false;
    }
    if (!document.getElementById("surname_imput").value.match(/[0-9]/)) {
        document.getElementById("surname_imput").style.background = "white";
        document.getElementById("surname_imput").placeholder = '';
        document.getElementById("text_mistake_surname").style.display = 'none';
        return true;
    }
    document.getElementById("surname_imput").style.background = "rgba(255, 40, 40, 0.5)";
    document.getElementById("text_mistake_surname").style.display = 'block';
    return false;
}
function name_imput() {
    if (document.getElementById("name_imput").value == '') {
        document.getElementById("name_imput").style.background = "rgba(255, 40, 40, 0.5)";
        document.getElementById("name_imput").placeholder = '*Обязательное поле*';
        document.getElementById("text_mistake_name").style.display = 'none';
        return false;
    }
    if (!document.getElementById("name_imput").value.match(/[0-9]/)) {
        document.getElementById("name_imput").style.background = "white";
        document.getElementById("name_imput").placeholder = '';
        document.getElementById("text_mistake_name").style.display = 'none';
        return true;
    }
    document.getElementById("name_imput").style.background = "rgba(255, 40, 40, 0.5)";
    document.getElementById("text_mistake_name").style.display = 'block';
    return false;
}
function patronymic_imput() {
    if (!document.getElementById("patronymic_imput").value.match(/[0-9]/)) {
        document.getElementById("text_mistake_patronymic").style.display = 'none';
        return true;
    }
    document.getElementById("text_mistake_patronymic").style.display = 'block';
    return false;
}
function phone_imput() {
    if (document.getElementById("phone_imput").value == '') {
        document.getElementById("phone_imput").style.background = "rgba(255, 40, 40, 0.5)";
        document.getElementById("phone_imput").placeholder = '*Обязательное поле*';
        return false;
    }
    if (!document.getElementById("phone_imput").value.match(/[A-ZА-Я]/g)) {
        document.getElementById("phone_imput").style.background = "white";
        document.getElementById("phone_imput").placeholder = '';
        document.getElementById("text_mistake_patronymic").style.display = 'none';
        return true;
    }
    document.getElementById("phone_imput").style.background = "rgba(255, 40, 40, 0.5)";
    document.getElementById("text_mistake_patronymic").style.display = 'block';
    return false;
}
function date_imput() {
    if (document.getElementById("date_imput").value == '') {
        document.getElementById("date_imput").style.background = "rgba(255, 40, 40, 0.5)";
        return false;
    }
    document.getElementById("date_imput").style.background = "white";
    return true;
}
function time_imput() {
    if (document.getElementById("time_imput").value == '') {
        document.getElementById("time_imput").style.background = "rgba(255, 40, 40, 0.5)";
        document.getElementById("time_imput").placeholder = '*Обязательное поле*';
        return false;
    }
    document.getElementById("time_imput").style.background = "white";
    document.getElementById("time_imput").placeholder = '';
    return true;
}
function service_imput() {
    if (document.getElementById("service_imput").value == '') {
        document.getElementById("service_imput").style.background = "rgba(255, 40, 40, 0.5)";
        document.getElementById("service_imput").placeholder = '*Обязательное поле*';
        return false;
    }
    document.getElementById("service_imput").style.background = "white";
    document.getElementById("service_imput").placeholder = '';
    return true;
}
function staff_imput() {
    if (document.getElementById("staff_imput").value == '') {
        document.getElementById("staff_imput").style.background = "rgba(255, 40, 40, 0.5)";
        document.getElementById("staff_imput").placeholder = '*Обязательное поле*';
        return false;
    }
    document.getElementById("staff_imput").style.background = "white";
    document.getElementById("staff_imput").placeholder = '';
    return true;
}

function reset(){
    document.getElementById("surname_imput").style.background = "white";
    document.getElementById("surname_imput").placeholder = '';
    document.getElementById("surname_imput").value = '';

    document.getElementById("name_imput").style.background = "white";
    document.getElementById("name_imput").placeholder = '';
    document.getElementById("name_imput").value = '';

    document.getElementById("patronymic_imput").value = '';

    document.getElementById("phone_imput").style.background = "white";
    document.getElementById("phone_imput").placeholder = "8-800-555-35-35";
    document.getElementById("phone_imput").value = '';

    document.getElementById("date_imput").style.background = "white";
    document.getElementById("date_imput").value = '';

    document.getElementById("time_imput").style.background = "white";
    document.getElementById("time_imput").placeholder = "Выберите время";
    document.getElementById("time_imput").value = '';

    document.getElementById("service_imput").style.background = "white";
    document.getElementById("service_imput").placeholder = "Выберите услугу";
    document.getElementById("service_imput").value = '';

    document.getElementById("staff_imput").style.background = "white";
    document.getElementById("staff_imput").placeholder = "Выберите мастера";
    document.getElementById("staff_imput").value = '';

    localStorage.clear();
}

window.onload = function(){
    if(localStorage.getItem('surname')) {
        document.getElementById("surname_imput").value=localStorage.getItem('surname');
    }
    if(localStorage.getItem('name')) {
        document.getElementById("name_imput").value=localStorage.getItem('name');
    }
    if(localStorage.getItem('patronymic')) {
        document.getElementById("patronymic_imput").value=localStorage.getItem('patronymic');
    }
    if(localStorage.getItem('phone')) {
        document.getElementById("phone_imput").value=localStorage.getItem('phone');
    }
    if(localStorage.getItem('date')) {
        document.getElementById("date_imput").value=localStorage.getItem('date');
    }
    if(localStorage.getItem('time')) {
        document.getElementById("time_imput").value=localStorage.getItem('time');
    }
    if(localStorage.getItem('service')) {
        document.getElementById("service_imput").value=localStorage.getItem('service');
    }
    if(localStorage.getItem('staff')) {
        document.getElementById("staff_imput").value=localStorage.getItem('staff');
    }
}

function cheak_info() {
    if(surname_imput() && name_imput() && patronymic_imput() && phone_imput() 
    && date_imput() && time_imput() && service_imput() && staff_imput()) {
        document.getElementById("html_blur").style.display = 'block';
        document.getElementById("html_blur_window").style.display = 'block';
        if (storage_available() && window.confirm("Сохранить введённую информацию на устройстве?")) {
            localStorage.clear();
            localStorage.setItem('surname', document.getElementById("surname_imput").value);
            localStorage.setItem('name', document.getElementById("name_imput").value);
            localStorage.setItem('patronymic', document.getElementById("patronymic_imput").value);
            localStorage.setItem('phone', document.getElementById("phone_imput").value);
            localStorage.setItem('date', document.getElementById("date_imput").value);
            localStorage.setItem('time', document.getElementById("time_imput").value);
            localStorage.setItem('service', document.getElementById("service_imput").value);
            localStorage.setItem('staff', document.getElementById("staff_imput").value);
        }
    }
}

function close_window() {
    document.getElementById("html_blur").style.display = 'none';
    document.getElementById("html_blur_window").style.display = 'none';

    document.getElementById("submit_1").style.display = 'none';
    document.getElementById("submit_2").style.display = 'none';

    document.getElementById("surname_imput").disabled = true;
    document.getElementById("name_imput").disabled = true;
    document.getElementById("patronymic_imput").disabled = true;
    document.getElementById("phone_imput").disabled = true;
    document.getElementById("date_imput").disabled = true;
    document.getElementById("time_imput").disabled = true;
    document.getElementById("service_imput").disabled = true;
    document.getElementById("staff_imput").disabled = true;
}