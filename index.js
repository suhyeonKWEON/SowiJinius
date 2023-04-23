let db;

db = 70; // 임의로 테스트를 위해 db 라는 변수를 70으로 설정
// 이 값을 70 미만으로 바꾸면 alert라는 문구 안 나올거임

if (db>=70){ // 만약 db이 70이상이라면
    console.log("alert, 소음 발생!"); // alert라는 문구를 console창에 띄워줘!
    /* console 창이란 크롬 기준 F12를 누르면 개발자 도구가 뜨는데
        거기서 console이라는 곳에 console.log라는 애를 쓰면 괄호안에
        있는 문구나 값이 출력됨!
    */
}

function toggleBtn1() {
  
    // 보이게할 부분인 hosil
    const hosil1 = document.getElementById('hosil1');
    
    // hosil1 보이기 (display: block)
    hosil1.style.display = 'block';
    
}

function toggleBtn2() {
  
    // 안보이게할 부분인 hosil
    const hosil1 = document.getElementById('hosil1');
    
    // hosil1 숨기기 (display: none)
    hosil1.style.display = 'none';
    
}

function addressKindChange(e) {
    var ilcheung = ["101호", "102호", "103호", "104호"];
    var echeung = ["201호", "202호", "203호"];
    var samsheung = ["301호", "302호", "303호"];
    var target = document.getElementById("addressKindD");

    if(e.value == "a") var d = ilcheung;
    else if(e.value == "b") var d = echeung;
    else if(e.value == "c") var d = samsheung;

    target.options.length = 0;

    for (x in d) {
        var opt = document.createElement("option");
        opt.value = d[x];
        opt.innerHTML = d[x];
        target.appendChild(opt);
    }   
}