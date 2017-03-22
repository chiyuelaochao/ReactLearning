/**
 * Created by wei.cai on 2017/3/17.
 */

function checkStart() {
    check(registerForm);
}
function check(form) {
    for (i = 0; i < form.length; i++) {
        let ele = form.elements[i];
        let msg = ele.getAttribute('message');
        if (msg && ele.value == "") {
            alert(msg + " can't be null!");
            form.elements[i].focus();
            return false;
        }
    }
    form.submit();
}