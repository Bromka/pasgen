window.onload=function(){
    document.getElementById('formControlRange').oninput = function(){
 
        document.getElementById('passlenghtout').innerHTML = this.value;
        
    }

    function generatearr(minkeykode, maxkeykode, flag){
        var temp = [];
        var str1 = "";
        for (var i = minkeykode; i<maxkeykode+1; i++){
            str1 = String.fromCharCode(i);
            if (flag == 1) str1 = str1.toLowerCase();
            temp.push(str1);
        }
     
        return temp;
    }

    var array2 = generatearr(65, 90);
    var array1 = generatearr(48, 57);
    var array3 = generatearr(65, 90, 1)
    var array4 = ['!', '@','#','$','%','^','&','*','(',')','-','=','+','_','?','/']

    function generatepas(){
        var check = 0;
        var mass = new Array;
        if (document.getElementById('defaultCheck1').checked) mass.push(array1);
        if (document.getElementById('defaultCheck2').checked) mass.push(array2);
        if (document.getElementById('defaultCheck3').checked) mass.push(array3);
        if (document.getElementById('defaultCheck4').checked) mass.push(array4);
        var pas = ""
        var tempnum = 0;
        var tempnum2 = 0;

        for (var i=0; i<document.getElementById('formControlRange').value; i++){
           tempnum = getRandomInt(0, mass.length);
           tempnum2 = mass[tempnum].length;
           pas += mass[tempnum][getRandomInt(0, tempnum2)];
        }
        return pas;
        console.log (pas);
    }
    
    document.getElementById('generate').onclick = function(){
       /*  generatepas(); */
       document.getElementById('outpass').innerHTML = "";
        for (var i=0; i<10; i++){
            document.getElementById('outpass').insertAdjacentHTML('beforeend', '<li>' + generatepas() + '</li>')
        }
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

}