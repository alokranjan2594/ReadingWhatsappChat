// chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//   demo = document.getElementById("demo");
//   demo.innerHTML = tabs[0].url;
//   alert(tabs[0].url);
//   console.log("hi");
var parg = document.getElementsByTagName("span");
setInterval(() => {
  setTimeout(() => {
    //   for (i = 21; i < 35; i++) {
    //     parg[i].style.color = "red";
    //   }

    $(document).ready(function () {
      $('div[data-testid="chat-list"] div')
        .first()
        .children()
        .each(function () {
          var attrNew = parseInt($(this).css("transform").split(",")[5]);
          //   var newContact = document.getElementById("contactName");
          //   var newMessage = document.getElementById("contactMsg");
          // console.log(attrNew);
          if (attrNew === 0) {
            var nameContact = $(this)
              .find('div[data-testid="cell-frame-title"]')
              .text();
            var msgContact = $(this)
              .find(
                'div[data-testid="cell-frame-secondary"] span[data-testid="last-msg-status"]'
              )
              .text();
            // newContact.innerText = nameContact;
            // newMessage.innerText = msgContact;
            // $("#contactName").text(nameContact);
            // $("#contactMsg").text(msgContact);
            localStorage.setItem("Whatsapp Contact Name", nameContact);
            localStorage.setItem("Whatsapp contact Message", msgContact);
            // console.log(
            //   "local storage dat1 :===>",
            //   localStorage.getItem("Whatsapp Contact Name")
            // );
            // console.log(
            //   "local storage dat2 :===>",
            //   localStorage.getItem("Whatsapp contact Message")
            // );
            $("#contactName")
              .addClass("testName")
              .text(localStorage.getItem("Whatsapp Contact Name"));
            $("#contactMsg").text(
              localStorage.getItem("Whatsapp contact Message")
            );

            console.log(
              "New message name is: " + nameContact,
              "\nNew Message is:" + msgContact
            );
          }
        });
      // window.location.href = "https://web.whatsapp.com/send?phone=9928826417";
    });
  }, 5000);
}, 20000);

// });
