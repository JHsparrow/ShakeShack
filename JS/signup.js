const num_auth = document.querySelector(".tel-input");
const order_btn = document.querySelector(".signup-button");
const id = document.querySelector(".id");
const pw = document.querySelector(".pw");
const pw2 = document.querySelector(".pw2");
const username = document.querySelector(".name")
const tel = document.querySelector(".tel")


num_auth.addEventListener('click', function() {
    alert('인증번호는 4564입니다.')
})

order_btn.addEventListener('click', function() {
    //아이디 체크
    if(!id.value.replace(/ /g,"")) {
        alert("아이디를 입력해주세요!")
        return false;
    } else {
    if (!idCheck(id.value.replace(/ /g,""))) {
        alert("중복된 아이디 입니다!")
        return false;
    } else {
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
            if (!username.value.replace(/ /g,"")) {
                alert("이름을 입력해주세요");
                return false;
        } else {
            if (!tel.value.replace(/ /g,"")) {
                alert("핸드폰 번호를 입력해주세요")
                return false;
        } else {
            if (!telCheck(tel.value.replace(/ /g,""))) {
                alert("휴대폰 번호 형식이 맞지 않습니다");
                return false;
        } else {
            
        
        
}}}}}}}}}}})
   

alert('회원가입이 완료되었습니다. \n확인 버튼을 누르시면 메인 홈페이지로 이동합니다.')
newPage()


const newPage = function () {
    window.location.href = './main.html'
}


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

  
  function emailCheck(email) {
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
  }
