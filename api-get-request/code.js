$(document).ready(() => {

    $('#input_form').submit((e) => {

        e.preventDefault();
        let from_amnt = $('#amnt').val();
        let from_curr = $('#from-curr-input').val().toUpperCase();

        let to_curr = $('#to-curr-input').val().toUpperCase();

        console.log(from_amnt, from_curr, to_curr)

        send_req(from_curr, to_curr, from_amnt);



    })


})


function send_req(from, to, amnt) {
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://alpha-vantage.p.rapidapi.com/query?from_currency=" + from + "&function=CURRENCY_EXCHANGE_RATE&to_currency=" + to,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "717bc4398emsh195cd9359c535d0p1ed9ddjsn02504a60da43",
            "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com"
        }
    };

    let r8 = $.ajax(settings).done(function (response) {
        // console.log(response["Realtime Currency Exchange Rate"]["5. Exchange Rate"])

        let rate = response["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        // console.log(rate)
        calculate(rate, amnt)
    });

    //rate1 = r8["Realtime Currency Exchange Rate"]["5. Exchange Rate"];

    // console.log(r8["responseJSON"]["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);

    // let final = r8 * amnt;

    // console.log(final);

    // $("#box").innerHTML = "<p>"+final+"</p>";

}

function calculate(rate, amount) {
    rate_num = parseFloat(rate);
    final = rate_num * amount;

    // $("#box").innerHTML = ;
    $('#box').html(`<div id = box>  ${final}   </div>`)
    $('#box').css({"border":"none", "min-height":"24px", paddingtop:"2px"})
    console.log(final, typeof (final))
}