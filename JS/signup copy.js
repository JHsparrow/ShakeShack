const num_auth = document.querySelector(".tel-input");
const signup_btn = document.querySelector(".submit");
const back_btn = document.querySelector(".back")
const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
const pw2 = document.querySelector(".pw2");
const username = document.querySelector(".name");
const sex = document.querySelector("#sex");
const year = document.querySelector(".year");
const month = document.querySelector("#month");
const day = document.querySelector(".day");
const tel = document.querySelector(".tel");
const tel2 = document.querySelector(".tel2");
const newPage = function () {
    window.location.href = './main.html'
   }
const prevPage = function () {
    window.location.href = './main.html'
}

num_auth.addEventListener('click', function() {
    alert('인증번호는 4564입니다.')
})

signup_btn.addEventListener('click', function() {
    //아이디 체크
    if(!id.value.replace(/ /g,"")) {
        alert("아이디를 입력해주세요!")
        return false;
    } else {
    if (!idCheck(id.value.replace(/ /g,""))) {
        alert("중복된 아이디 입니다!")
        return false;
    } else {
        //비밀번호 체크
    if (!pw.value.replace(/ /g,"")) {
            alert("비밀번호를 입력해주세요!")
            return false;
    } else {
    if (!pwdCheck(pw.value.replace(/ /g,""))) {
            alert("특수문자, 문자,숫자 포함한 8~15자리 이내의 비밀번호를 입력해주세요!")
            return false;
    } else {
    if (!pwdCheck(pw2.value.replace(/ /g,""))) {
                alert("특수문자, 문자,숫자 포함한 8~15자리 이내의 비밀번호를 입력해주세요!")
                return;
    } else {
        if(pw.value.replace(/ /g,"") && pw2.value.replace(/ /g,"")) {
        if(pw.value.replace(/ /g,"") !== pw2.value.replace(/ /g,"")) {
            alert("비밀번호가 서로 일치하지 않습니다. 다시 입력해주세요.")
            return false;
        } else {
            //이름 체크
            if (!username.value.replace(/ /g,"")) {
                alert("이름을 입력해주세요");
                return false;
        } else {
            //성별 체크
            if (sex.value == 0) {
            alert("성별을 체크해주세요");
            return false;
        } else {
            //생년월일 체크
            if (!year.value.replace(/ /g,"")) {
                alert("출생년도를 입력해주세요");
                return false;
        } else {
            if (month.value == 0) {
                alert("출생한 월을 선택해주세요");
                return false;
        } else {
            if (!day.value.replace(/ /g,"")) {
                alert("출생한 날을 입력해주세요");
                return false;
        } else {
            //휴대폰 번호 체크
            if (!tel.value.replace(/ /g,"")) {
                alert("휴대폰 번호를 입력해주세요")
                return false;
        } else {
            if (!telCheck(tel.value.replace(/ /g, ""))) {
                    alert("휴대폰 번호 형식이 맞지 않습니다.");
                    return false;
        } else {
            //인증번호 체크
            if (!tel2.value.replace(/ /g,"")) {
                    alert("인증번호를 입력해주세요")
                    return false;
        } else {
            if(num_auth.value.replace(/ /g,"") && tel2.value.replace(/ /g,"")) {
            if(num_auth.value.replace(/ /g,"") !== tel2.value.replace(/ /g,"")) {
                    alert("인증번호를 다시 입력해주세요")
                    return false;
        }}}}}}}}}}}}}}}}}
        //회원가입 완료 문구
        alert('회원가입이 완료되었습니다. \n확인 버튼을 누르시면 메인 홈페이지로 이동합니다.')
        newPage()})

// 이전 페이지로 돌아가기
back_btn.addEventListener('click', function() {
    prevPage()
})



//중복된 아이디 체크
function idCheck(id) {
    const reg = /^[a-zA-Z0-9!@#$%^&*()?_~]{6,20}$/
    return reg.test(id);
  }
  
  function pwdCheck(pwd) {
    //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return reg.test(pwd);
  }

  //핸드폰 정규식
  function telCheck(tel) {
    var reg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    return reg.test(tel);
  }