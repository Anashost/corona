$.getJSON("https://corona.lmao.ninja/v2/ALL", function (data) {

    // get today date
    let d = new Date();
    let strDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    $('.date').append(strDate);

    // data as variables
    let total_confirmed = data.cases;
    let total_deaths = data.deaths;
    let new_confirmed = data.todayCases;
    let new_deaths = data.todayDeaths;
    let total_recovered = data.recovered;

    // let findIndex ;
    // for (let i = 0; i < data.length; i++) {
    //     if (data[i].countryInfo.iso2 === 'NL') {
    //         findIndex = i;
    //         break;
    //     }
    // }

    // let total_confirmed = data[findIndex].cases;
    // let total_deaths = data[findIndex].deaths;
    // let new_confirmed = data[findIndex].todayCases;
    // let new_deaths = data[findIndex].todayDeaths;
    // let total_recovered = data[findIndex].recovered;
    // let flag = data[findIndex].countryInfo.flag;

    // append data to html
    $('.total_confirmed').append(total_confirmed);
    $('.total_deaths').append(total_deaths);
    $('.total_recovered').append(total_recovered);
    $('.new_confirmed').append(new_confirmed);
    $('.new_deaths').append(new_deaths);

});

$.getJSON("https://corona.lmao.ninja/v2/countries/", function (data) {
    console.log(data);

    let default_flag = "noFlag";
    for (let i = 0; i < data.length; i++) {
        if (data[i].countryInfo.iso2 == null) {
            data[i].countryInfo.iso2 = default_flag;
        }

        let html_code =
            '<tr>\n' +
            '        <td><img class="flag-list" src="https://corona.lmao.ninja/assets/img/flags/' + data[i].countryInfo.iso2.toLowerCase() + '.png">' + data[i].country + '</td>' +
            '        <td>' + data[i].cases + '<p id="plus-cases" class="set-red">+ ' + data[i].todayCases + '</p></td>\n' +
            '        <td>' + data[i].recovered + '</td>\n' +
            '        <td>' + data[i].deaths + '<p class="set-red">+ ' + data[i].todayDeaths + '</p></td>\n' +
            '    </tr>';

        $(".table-data").append(html_code);


    }

});


function changeLanguage() {
    let a = document.getElementById("titlex");
    if (a.innerHTML === "احصائيات كورونا في العالم") {
        a.innerHTML = "Corona stats in the world";
    } else {
        a.innerHTML = "احصائيات كورونا في العالم";
    }

    let b = document.getElementById("stats");
    if (b.innerHTML === "مباشر") {
        b.innerHTML = "Live";
    } else {
        b.innerHTML = "مباشر";
    }

    let h = document.getElementById("lang-btn");
    if (h.innerHTML === "English") {
        h.innerHTML = "عربي";
    } else {
        h.innerHTML = "English";
    }

    let c = document.getElementsByClassName("t-country");
    if (c[0].innerHTML === "البلد") {
        c[0].innerHTML = "Country";
    } else {
        c[0].innerHTML = "البلد";
    }
    let d = document.getElementById("all-countries");
    if (d.innerHTML === "جميع دول العالم") {
        d.innerHTML = "All Countries";
    } else {
        d.innerHTML = "جميع دول العالم";
    }

    let e = document.getElementById("t-cases");
    if (e.innerHTML === "جميع الحالات") {
        e.innerHTML = "Total cases";
    } else {
        e.innerHTML = "جميع الحالات";
    }

    let f = document.getElementById("t-recovered");
    if (f.innerHTML === "المتعافين") {
        f.innerHTML = "Total Recovered";
    } else {
        f.innerHTML = "المتعافين";
    }

    let g = document.getElementById("t-deaths");
    if (g.innerHTML === "الوفيات") {
        g.innerHTML = "Total Deaths";
    } else {
        g.innerHTML = "الوفيات";
    }


    $("#all-ar").toggle();
    $("#all").toggle();
}
