    //   $(document).ready(function () {
    //     function title() {
    //       //實際台數
    //       let shouldVehicle =
    //         Number($('.todayVehicle').val()) -
    //         Number($('.yesterdayVehicle').val()) -
    //         Number($('.ownVehicle').val())

    //       const title = $('.title')

    //       // 獲取當前日期
    //       const currentDate = new Date()
    //       const year = currentDate.getFullYear() - 1911
    //       const month = currentDate.getMonth() + 1 // getMonth() 返回值範圍為 0-11
    //       const date = currentDate.getDate()
    //       const dayIndex = currentDate.getDay() // getDay() 返回值範圍為 0-6

    //       // 轉換星期索引為中文
    //       const daysOfWeek = ['日', '一', '二', '三', '四', '五', '六']
    //       const dayOfWeek = daysOfWeek[dayIndex]

    //       // 格式化日期字串
    //       const formattedDate = ` ${year} 年 ${month} 月 ${date} 日 <${dayOfWeek}> ${shouldVehicle} 台`

    //       // 顯示日期
    //       title.text('').text(formattedDate)
    //     }
    //     title()
    //     function calculate() {
    //       //主程式
    //       let basicAmount1 = $('.basicVehicle1').val() * $('.basicPricing1').val()
    //       $('.basicAmount1').text('').text(basicAmount1)
    //       let basicAmount2 = $('.basicVehicle2').val() * $('.basicPricing2').val()
    //       $('.basicAmount2').text('').text(basicAmount2)

    //       let coatingAmount1 = $('.coatingVehicle1').val() * $('.coatingPricing1').val()
    //       $('.coatingAmount1').text('').text(coatingAmount1)
    //       let coatingAmount2 = $('.coatingVehicle2').val() * $('.coatingPricing2').val()
    //       $('.coatingAmount2').text('').text(coatingAmount2)

    //       let nanometerAmount1 = $('.nanometerVehicle1').val() * $('.nanometerPricing1').val()
    //       $('.nanometerAmount1').text('').text(nanometerAmount1)
    //       let nanometerAmount2 = $('.nanometerVehicle2').val() * $('.nanometerPricing2').val()
    //       $('.nanometerAmount2').text('').text(nanometerAmount2)

    //       //統計台數
    //       let statisticsVehicle =
    //         Number($('.basicVehicle1').val()) +
    //         Number($('.basicVehicle2').val()) +
    //         Number($('.coatingVehicle1').val()) +
    //         Number($('.coatingVehicle2').val()) +
    //         Number($('.nanometerVehicle1').val()) +
    //         Number($('.nanometerVehicle2').val()) +
    //       $('.statisticsVehicle').text('').text(statisticsVehicle)

    //       //實際台數
    //       let shouldVehicle =
    //         Number($('.todayVehicle').val()) -
    //         Number($('.yesterdayVehicle').val()) -
    //         Number($('.ownVehicle').val())
    //       $('.shouldVehicle').text('').text(shouldVehicle)

    //       //標題台數
    //       title()

    //       //pricingMessage
    //       let pricingMessage = '結算中...'
    //       if (shouldVehicle > statisticsVehicle) {
    //         //實際台數 > 統計台數
    //         let vehicle = shouldVehicle - statisticsVehicle
    //         pricingMessage = `
    //                         <div class="alert alert-danger" role="alert">
    //                           少貼 ${vehicle} 個磁鐵
    //                         </div><br><p style="font-size: 14px"class="text-center">實際台數 > 統計台數<p>`
    //       } else if (shouldVehicle < statisticsVehicle) {
    //         //實際台數 < 統計台數
    //         let vehicle = statisticsVehicle - shouldVehicle
    //         pricingMessage = `
    //                         <div class="alert alert-warning" role="alert">
    //                           多貼 ${vehicle} 個磁鐵
    //                         </div><br><p style="font-size: 14px"class="text-center">實際台數 < 統計台數<p>`
    //       } else if (shouldVehicle == statisticsVehicle) {
    //         //實際台數 == 統計台數
    //         pricingMessage = `
    //                         <div class="alert alert-success text-center" role="alert">
    //                           台數正確
    //                         </div><br><p style="font-size: 14px" class="text-center">實際台數 = 統計台數<p>`
    //       }

    //       $('.pricingMessage').html('').html(pricingMessage)

    //       //統計總金額
    //       let statisticalTotalAmount =
    //         basicAmount1 +
    //         basicAmount2 +
    //         coatingAmount1 +
    //         coatingAmount2 +
    //         nanometerAmount1 +
    //         nanometerAmount2
    //       $('.statisticalTotalAmount').text('').text(statisticalTotalAmount)

    //       //統計金額
    //       let statisticalAmount =
    //         statisticalTotalAmount -
    //         Number($('.lunchFee').val()) -
    //         Number($('.otherFee').val())
    //       $('.statisticalAmount').text('').text(statisticalAmount)

    //       //amountMessage
    //       let shouldAmount = Number($('.shouldAmount').val())
    //       let amountMessage = '結算中...'
    //       if (shouldAmount > statisticalAmount) {
    //         //實際金額 > 統計金額
    //         let amount = shouldAmount - statisticalAmount
    //         amountMessage = `
    //                         <div class="alert alert-danger" role="alert">
    //                           ${amount}，少貼磁鐵
    //                         </div><br><p style="font-size: 14px"class="text-center">實際金額 > 統計金額<p>`
    //       } else if (shouldAmount < statisticalAmount) {
    //         //實際金額 < 統計金額
    //         let amount = statisticalAmount - shouldAmount
    //         amountMessage = `
    //                         <div class="alert alert-warning" role="alert">
    //                           ${amount}，多貼磁鐵
    //                         </div><br><p style="font-size: 14px"class="text-center">實際金額 < 統計金額<p>`
    //       } else if (shouldAmount == statisticalAmount) {
    //         //實際金額 == 統計金額
    //         amountMessage = `
    //                         <div class="alert alert-success text-center" role="alert">
    //                           金額正確
    //                         </div><br><p style="font-size: 14px" class="text-center">實際金額 = 統計金額<p>`
    //       }

    //       $('.amountMessage').html('').html(amountMessage)
    //     }

    //     $(
    //       `.calculate,
    //        .basicVehicle1, .basicVehicle2,
    //        .coatingVehicle1, .coatingVehicle2,
    //        .nanometerVehicle1, .nanometerVehicle2,
    //        .todayVehicle, .yesterdayVehicle, .ownVehicle,
    //        .lunchFee, .otherFee, .shouldAmount`,
    //     ).on('change click', calculate)

    //     // 清空被點擊的輸入框的值
    //     $('input[type="text"]').click(function () {
    //       $(this).val("");
    //       calculate();
    //     });

    //   })


$(document).ready(function () {

  function getShouldVehicle() {
    return Number($('.todayVehicle').val() || 0)
      - Number($('.yesterdayVehicle').val() || 0)
      - Number($('.ownVehicle').val() || 0);
  }

  function updateTitle(shouldVehicle) {
    const title = $('.title');
    const currentDate = new Date();
    const year = currentDate.getFullYear() - 1911;
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const dayOfWeek = ['日','一','二','三','四','五','六'][currentDate.getDay()];
    title.text(`${year} 年 ${month} 月 ${date} 日 (${dayOfWeek}) ${shouldVehicle} 台`);
  }

  function calculateAmounts() {
    const sections = ['basic', 'coating', 'nanometer'];
    let totalVehicles = 0;
    let totalAmount = 0;

    sections.forEach(section => {
      [1,2].forEach(i => {
        const vehicles = Number($(`.${section}Vehicle${i}`).val() || 0);
        const price = Number($(`.${section}Pricing${i}`).val() || 0);
        const amount = vehicles * price;
        $(`.${section}Amount${i}`).text(amount);
        totalVehicles += vehicles;
        totalAmount += amount;
      });
    });

    $('.statisticsVehicle').text(totalVehicles);

    const shouldVehicle = getShouldVehicle();
    $('.shouldVehicle').text(shouldVehicle);

    updateTitle(shouldVehicle);

    // 台數訊息
    let vehicleMsg = '';
    if (shouldVehicle > totalVehicles) {
      vehicleMsg = `<div class="alert alert-danger">少貼 ${shouldVehicle - totalVehicles} 個磁鐵</div>`;
    } else if (shouldVehicle < totalVehicles) {
      vehicleMsg = `<div class="alert alert-warning">多貼 ${totalVehicles - shouldVehicle} 個磁鐵</div>`;
    } else if (shouldVehicle == 0 && totalVehicles == 0) {
      vehicleMsg = `<div class="alert alert-secondary text-center">統計台數</div>`;
    } else {
      vehicleMsg = `<div class="alert alert-success text-center">台數正確</div>`;
    }
    $('.pricingMessage').html(vehicleMsg);

    // 統計金額
    const addOnAmount = Number($('.addOnAmount').val() || 0);
    const lunchFee = Number($('.lunchFee').val() || 0);
    const otherFee = Number($('.otherFee').val() || 0);
    const statisticalAmount = addOnAmount + totalAmount - lunchFee - otherFee;

    $('.statisticalTotalAmount').text(totalAmount);
    $('.statisticalAmount').text(statisticalAmount);

    // 金額訊息
    const shouldAmount = Number($('.shouldAmount').val() || 0);
    let amountMsg = '';
    if (shouldAmount > statisticalAmount) {
      amountMsg = `<div class="alert alert-danger">${shouldAmount - statisticalAmount}，少貼磁鐵</div>`;
    } else if (shouldAmount < statisticalAmount) {
      amountMsg = `<div class="alert alert-warning">${statisticalAmount - shouldAmount}，多貼磁鐵</div>`;
    } else if (shouldAmount == 0 && statisticalAmount == 0) {
      amountMsg = `<div class="alert alert-secondary text-center">計算金額</div>`;
    } else {
      amountMsg = `<div class="alert alert-success text-center">金額正確</div>`;
    }
    $('.amountMessage').html(amountMsg);
  }

  // 綁定事件
  $('.calculate, .basicVehicle1, .basicVehicle2, .coatingVehicle1, .coatingVehicle2, .nanometerVehicle1, .nanometerVehicle2, .todayVehicle, .yesterdayVehicle, .ownVehicle, .lunchFee, .otherFee, .shouldAmount')
    .on('change click', calculateAmounts);

  // 點擊清空欄位
  $('input[type="text"]').click(function () {
    $(this).val('');
    calculateAmounts();
  });

  // 初始化
  calculateAmounts();
});

let currentTarget = null;
let expression = '';

// 綁定所有 input 觸發 modal
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('click', function () {
        currentTarget = this; // 記錄點擊的目標
        expression = '';
        document.getElementById('display').value = expression;
        const modal = new bootstrap.Modal(document.getElementById('calculatorModal'));
        modal.show();
    });
});

// 數字輸入
function press(num) {
    expression += num;
    document.getElementById('display').value = expression;
}

// 刪除最後一個字
function backspace() {
    expression = expression.slice(0, -1);
    document.getElementById('display').value = expression;
}

// 帶入結果並關閉 modal
function sendToTarget() {
    if (currentTarget) currentTarget.value = expression;
    const modalEl = document.getElementById('calculatorModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();
    calculateAmounts();
}
