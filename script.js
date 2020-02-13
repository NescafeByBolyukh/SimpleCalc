function getId(a) {
    return document.getElementById(a);
}
// ------to open dialog modal-------
getId('main-btn-open').addEventListener('click', function () {
    getId('main-page-container').style.display = 'none';
    getId('modal-page').style.display = 'block';
})
// --------to change bg color when checkbox is checked for 1 line----
getId('checkbox1').addEventListener('click', function () {
    if (this.checked) {
        getId('tr-color1').style.backgroundColor = '#1b8220';
    } else {
        getId('tr-color1').style.backgroundColor = '#fbffd4';
        getId('form1').reset();
        getId('result1').innerHTML = '0';
    }
})
// --------to change bg color when checkbox is checked for 2 line----
getId('checkbox2').addEventListener('click', function () {
    if (this.checked) {
        getId('tr-color2').style.backgroundColor = '#1b8220';
    } else {
        getId('tr-color2').style.backgroundColor = '#fbffd4';
        getId('form2').reset();
        getId('result2').innerHTML = '0';
    }
})
// --------to change bg color when checkbox is checked for 3 line----
getId('checkbox3').addEventListener('click', function () {
    if (this.checked) {
        getId('tr-color3').style.backgroundColor = '#1b8220';
    } else {
        getId('tr-color3').style.backgroundColor = '#fbffd4';
        getId('form3').reset();
        getId('result3').innerHTML = '0';
    }
})


// --------to sum inputs when checkbox is checked----
getId('modal-btn-sum').addEventListener('click', function () {
    let input1Val = getId('input-number1').value;
    let input2Val = getId('input-number2').value;
    let input3Val = getId('input-number3').value;
    let input4Val = getId('input-number4').value;
    let input5Val = getId('input-number5').value;
    let input6Val = getId('input-number6').value;
    let input7Val = getId('input-number7').value;
    let input8Val = getId('input-number8').value;
    let input9Val = getId('input-number9').value;
    let sum;
    if (getId('checkbox1').checked) {
        sum = +input1Val + +input2Val + +input3Val;
        getId('result1').innerHTML = sum;
    }
    if (getId('checkbox2').checked) {
        sum = +input4Val + +input5Val + +input6Val;
        getId('result2').innerHTML = sum;
    }
    if (getId('checkbox3').checked) {
        sum = +input7Val + +input8Val + +input9Val;
        getId('result3').innerHTML = sum;
    }
})
// --------to multiply inputs when checkbox is checked----
getId('modal-btn-multiply').addEventListener('click', function () {
    let input1Val = getId('input-number1').value;
    let input2Val = getId('input-number2').value;
    let input3Val = getId('input-number3').value;
    let input4Val = getId('input-number4').value;
    let input5Val = getId('input-number5').value;
    let input6Val = getId('input-number6').value;
    let input7Val = getId('input-number7').value;
    let input8Val = getId('input-number8').value;
    let input9Val = getId('input-number9').value;
    let sum;
    if (getId('checkbox1').checked) {
        if(!input1Val){
            input1Val=1;
        }
        if(!input2Val){
            input2Val=1;
        }
        if(!input3Val){
            input3Val=1;
        }
        sum = +input1Val * +input2Val * +input3Val;
        getId('result1').innerHTML = sum;
    }
    if (getId('checkbox2').checked) {
        if(!input4Val){
            input4Val=1;
        }
        if(!input5Val){
            input5Val=1;
        }
        if(!input6Val){
            input6Val=1;
        }
        sum = +input4Val * +input5Val * +input6Val;
        getId('result2').innerHTML = sum;
    }
    if (getId('checkbox3').checked) {
        if(!input7Val){
            input7Val=1;
        }
        if(!input8Val){
            input8Val=1;
        }
        if(!input9Val){
            input9Val=1;
        }
        sum = +input7Val * +input8Val * +input9Val;
        getId('result3').innerHTML = sum;
    }
})
// ------to close dialog modal---------------
getId('modal-btn-close').addEventListener('click', function () {
    getId('main-page-container').style.display = 'block';
    getId('modal-page').style.display = 'none';
})
