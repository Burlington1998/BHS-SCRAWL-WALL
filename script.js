const set_pwd = document.getElementById("set-pwd");
const set_data = document.getElementById("set-data");
const pwd = document.getElementById("pwd");
const data = document.getElementById("data");
const emsg = document.getElementById("emsg");
const dmsg = document.getElementById("dmsg");

$("#encrypt").submit(function () {
  event.preventDefault();

  const encrypted = sjcl.encrypt(set_pwd.value, set_data.value);
  set_data.value = "";
  emsg.value = encrypted;
});

$("#decrypt").submit(function () {
  event.preventDefault();

  const decrypted = sjcl.decrypt(pwd.value, data.value);
  data.value = "";
  dmsg.value = decrypted;
});