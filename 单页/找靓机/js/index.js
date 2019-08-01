// window.onload = function () {
//   // // document.getElementById('total_num');
//   // var initCount = 15077596
//   // var clearTime=setInterval(() => {
//   //   var count = initCount += 1000000;
//   //   var currentCount = formartNumber(count);
//   //   document.getElementById('total_num').innerHTML = currentCount;
//   // }, 30);
//   // setTimeout(() => {
//   //   clearInterval(clearTime)
//   // }, 2000);

//   document.onscroll=function(){
//     // if(document.body.scrollTop+document.documentElement.scrollTop>=800){

//     // }
//     // var mainOffsetTop = $("pinzhibaozheng").offset().top;
//   }
// }

// function formartNumber(count) {
//   // 15077596
//   var strCount = String(count);
//   var strLen = strCount.length;
//   var ys = strLen % 3;
//   var arr = [];
//   if (ys == 0) {
//     let tempCount = "";
//     for (let index = 0; index < strLen; index++) {
//       const item = strCount[index];
//       if (index != 0 && (index + 1) % 3 == 0) {
//         tempCount += item;
//         arr.push(tempCount);
//         tempCount = "";
//       } else {
//         tempCount += item;
//       }
//     }
//     return arr.join(',');
//   } else {
//     var head = strCount.substr(0, ys);
//     let tempCount = "";
//     var strLen = strCount.length;
//     for (let index = 0; index < strLen; index++) {
//       const item = strCount[index];
//       if (index != 0 && (index + 1) % 3 == 0) {
//         tempCount += item;
//         arr.push(tempCount);
//         tempCount = "";
//       } else {
//         tempCount += item;
//       }
//     }
//     arr.unshift(head)
//     return arr.join(',');
//   }
// }

$(document).ready(function () {
  document.onscroll = function () {
    var mainOffsetTop = $("#pinzhibaozheng").offset().top;
    var windowScrollTop = $(window).scrollTop();
    if (mainOffsetTop <= windowScrollTop + 400) {
      $("#pinzhi-title-font").css("top", "0px")
      $($(".pinzhi-content-row-1")[0]).css("top", "0px")
      setTimeout(() => {
        $($(".pinzhi-content-row-1")[1]).css("top", "0px")
      }, 100)
    }
  }
})