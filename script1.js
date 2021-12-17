
// var table=document.createElement('table');
// table.setAttribute('class','table');
// var thead=document.createElement('thead');
// thead.setAttribute('class','thead-dark');



// var tr=document.createElement('tr');
// var th1=createelement('th','first');
// var th2=createelement('th','last');
// tr.append(th1,th2);
// thead.append(tr);



// var tbody=document.createElement('tbody');
// var tr=document.createElement('tr');
// var td1=createelement('td','john');
// var td2=createelement('td','doe');

// tr.append(td1,td2);
//     tbody.append(tr);
//     table.append(thead,tbody);

    

    
// var tr1=document.createElement('tr');
// var td3=createelement('td','Larry');
// var td4=createelement('td','The Bird');
// tr1.append(td3,td4);
//     //thead.append(tr);
    

    
// var tr2=document.createElement('tr');
// var td5=createelement('td','jacob');
// var td6=createelement('td','Thoronton');

// tr2.append(td5,td6);
//     tbody.append(tr1,tr2);
//     table.append(thead,tbody);
//     document.body.append(table);






// //<div>this is div</div>
// function createelement(elename,value=""){
// var element=document.createElement(elename);
// element.innerHTML=value;
// console.log(element);
// {/*<th>First</th?*/}
// return element;

// }

// let button=document.createElement('button');
// button.innerHTML="Click me";
// button.addEventListener('click',foo);
// document.body.append(button);


// function foo(){ss
//     var div=document.createElement('div');
//     div.innerHTML="this is div";
//     div.style.color="green";
//     div.style.fontsize="32px";
//     document.body.append(div);
// }


// var span = document.createElement('span');
// span.innerHTML = "hover over this sentence to see the color charge";
// span.addEventListener('mouseover'foo');
// document.body.append(span);

// function foo(){
//  var res = document.querySelector('span');
//  res.style.color = "green";
// }



//ques4.
//document.querySelector('div').addEventListener('mouseover',foo);

// function foo(event){
    //console.log(event);
    //var p=document.createElement('p');
    //p.setAttribute('class','text-primary');
    //p.innerHTML=`client X:${event.clientX} and client Y:${event.clientY}`;
    //document.body.append(p);
//}

 


// var form=document.createElement('form');
// var div1=document.createElement('div')
// var label=document.createElement('label');
// label.setAttribute('for','FirstName');
// div1.append(label);
//  var input=document.createElement('input');
//  var div2=document.createElement('div')
//  input.setAttribute('type','text');
//  input.setAttribute('id','First Name');
//  div2.append(input);
//  form.append(div1,div2)

//  var label1=document.createElement('label');
//  var div3=document.createElement('div')
//  label1.setAttribute('for','Middle Name');
//  label1.innerHTML='Middle Name';
//  div3.append(label1);

//  var input1=document.createElement('input');
//  var div4=document.createElement('div')
//  input1.setAttribute('type','text');
//  input1.setAttribute('id','Middle Name');
//  div4.append(input1)
//  form.append(div3,div4);

//  var label2=document.createElement('label');
//  var div5=document.createElement('div');
//  label2.setAttribute('for','Last Name');
// label2.innerHTML='Last Name';
// div5.append(label2);

// var input2=document.createElement('input');
// var div6=document.createElement('div')
// input2.setAttribute('type','text');
// input2.setAttribute('id','Last Name');
// div6.append(input2);
// form.append(div5,div6)


// var label3=document.createElement('label');
//  var div7=document.createElement('div');
//  label3.setAttribute('for','Email');
// label3.innerHTML='Email';
// div7.append(label3);

// var input3=document.createElement('input');
// var div8=document.createElement('div')
// input3.setAttribute('type','Email');
// input3.setAttribute('id','Email');
// div8.append(input3);
// form.append(div7,div8)

// var input4=document.createElement('input');
// input4.setAttribute('type','submit');
// input4.setAttribute('id','sub');
// form.append(input4);
// document.body.append(form);
// let res=document.getElementById('sub').addEventListener('click'foo);

// function foo(){
//     let a=document.getElementById("First Name").value;
//     let b=document.getElementById("Middle Name").value;
//     let c=document.getElementById("Last Name").value;
//     let d=document.getElementById("Email").value;

//     console.log(a);
//     console.log(b)
//     console.log(a)
//     console.log(a)
    
// }

// var dateelement=document.createElement('input');
// dateelement.setAttribute('type','date');
// dateelement.setAttribute('id','date');
// document.body.append(dateelement);

// var button=document.createElement('button');
// button.innerHTML="Display data";
// button.className="btn btn-primary";
// button.setAttribute('type','button');
// button.addEventListener('click',displaydata);
// document.body.append(button);


// function displaydata(){
//     let input=document.getElementById("date").value;
//    if(Date.parse(input)){
//     var inputdate=new Date(input);
//     var currentdate=new Date();
//     // console.log(inputdate,currentdate);
//     var millisecdiff=currentdate.getTime()-inputdate.getTime();
//     console.log(millisecdiff);

//     var seconddiff=Math.floor(millisecdiff/1000);
//     console.log(seconddiff);
    
//     var minutediff=Math.floor(seconddiff/60);
//     console.log(minutediff);
//     var hoursdiff=Math.floor(minutediff/60);
//     console.log(hoursdiff);

//     var daydiff=Math.floor(hoursdiff/24);
//     console.log(daydiff);

//     var yeardiff=currentdate.getFullYear()-inputdate.getFullYear();
//     console.log(yeardiff);

//       console.log(currentdate.getMonth());
//     var monthdiff=(yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
//     console.log(monthdiff);

//    }
//    else{
//      console.log("give a proper valid date")  
//    }

// }

/////////////////// using html /////////////////////

var dateelement = document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','date');
document.body.append(dateelement);

var button = document.createElement('button');
button.innerHTML = "Display data";
button.className = "btn btn-primary";
button.setAttribute('type','button');
button.addEventListener('click',displaydata);
document.body.append(button);

function displaydata(){
    let input = document.getElementById("date").value;
    if (Date.parse(input)){
        var inputdate = new Date(input);
        var currentdate = new Date();
        //console.log(inputdate,currentdate);
        var millisecdiff = currentdate.getTime()-inputdate.getTime();
        console.log(millisecdiff);
         
        var seconddiff = Math.floor(millisecdiff/1000);
        console.log(seconddiff);

        var minutediff = Math.floor(seconddiff/60);
        console.log(minutediff);

        var hoursdiff = Math.floor(minutediff/60);
        console.log(hoursdiff);

        var daydiff = Math.floor(hoursdiff/24);
        console.log(daydiff);

        var yeardiff = currentdate.getFullYear() - inputdate.getFullYear();
        console.log(yeardiff);

        console.log(currentdate.getMonth());
        var monthdiff = (yeardiff*12) + (currentdate.getMonth()-inputdate.getMonth());
        console.log(monthdiff);
        
    }
    else{
        console.log("give a proper valid date")
    }
    var div=document.createElement('div');
    div.innerHTML = `millisecdiff: ${millisecdiff} <br>
    second diff: ${seconddiff} <br>
    minute diff: ${minutediff} <br>
    hours diff: ${hoursdiff} <br> 
    day diff: ${daydiff} <br>
    year diff: ${yeardiff} <br>
    month diff: ${monthdiff} <br>`

    document.body.append(div)

        }
    





 






