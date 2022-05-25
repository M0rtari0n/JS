// Скрипт должен на вход принимать строку. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.

function str_test(str){
    let length = str.length;
    let lower = /[a-zA-Z]/
    let top = /[A-Z]/
    let symbol = /[@]/
    let num = /[0-9]/
    if(typeof str == "string"){
}else {
    console.log('Не является строкой')
    return false;
    }
    if (str != null){                                       // Строка не должна быть пустой
        str = str.trim();
    }if(!str){
        console.log('Строка не должна быть пустой')
        return false;
    }
    if(length>=5){                                          // Минимум 5 символов в строке
}else{
        console.log('Минимум 5 символов')
        return false;
    }
    if(length<=64){                                         // Максимум 64 символа в строке
}else{
        console.log('Максимум 64 символа')
        return false;
    }
    if(str.match(num)){                                     // Должна быть хотя бы одна цифра
}else{
        console.log('Строка должна содержать хотя бы 1 цифру')
    }
    if(str.match(lower)){                                   // В строке должны быть буквы
}else{
        console.log('Строка должна содержать хотя бы 1 букву')
    }
    if(str.match(top)){                                     // Должна быть хотя бы одна буква в верхнем регистре
}else{
        console.log('Строка должна содержать хотя бы 1 заглавную букву')
    }
    if(str.match(symbol)){                                  // Должна быть хотя бы одна @
}else{
        console.log('Строка должна содержать хотя бы 1 знак "@"')
    }
};

str_test('111111A@');