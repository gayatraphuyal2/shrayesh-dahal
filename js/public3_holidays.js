/**
 * Retrieves Public Holidays and marks them in calendar (part of Brihat Calendar)
 * Copyright (C) 2022  Brihat Ratna Bajracharya
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * pradosh
**/

// GET PUBLIC HOLIDAYS
var public3_holiday_url = 'https://gayatraphuyal2.github.io/shrayesh-dahal/data/public3_holidays.json';
var public3_holiday_req = new XMLHttpRequest();
var public3_holidays = JSON.parse("{}");
var public3_holidays_start_year = 2076;
var public3_holidays_end_year = 2081;

let public3_holiday_lang_en = false;
if (localStorage.config != null) {
    public3_holiday_lang_en = JSON.parse(localStorage.config)[7];
}

public3_holiday_req.open('GET', public3_holiday_url, true);
public3_holiday_req.onload = function () {
    public3_holidays = JSON.parse(this.response);
    public3_holidays_start_year = public3_holidays.start_year;
    public3_holidays_end_year = public3_holidays.end_year;
}
public3_holiday_req.send();

function show_public3_holidays(bs_year_start, bs_year_end, bs_month_start, bs_month_end) {
    console.info("Checking for Public Holidays...");
    if (bs_year_end < public3_holidays_start_year || bs_year_start > public3_holidays_end_year) {
        return;
    }

    var start_index = bs_year_start.toString() + "-" + bs_month_start.toString().padStart(2, '0');
    var end_index = bs_year_end.toString() + "-" + bs_month_end.toString().padStart(2, '0');

    var failsafe = 0;
    var ph_year = bs_year_start;
    var ph_month = bs_month_start;

    for (var index = start_index; index <= end_index;) {
        for (var days = 1; days <= BS_CALENDAR_DATA[ph_year][ph_month - 1]; days++) {
            // console.log(ph_year, " ", ph_month, " ", days);

            failsafe++;
            var public3_holidays_key = ph_month.toString().padStart(2, "0") + "-" + days.toString().padStart(2, '0');
            var complete_date = ph_year + "-" + public3_holidays_key;

            if (!document.getElementById(complete_date)) {
                continue;
            }

            if (public3_holidays[ph_year]) {
                if (public3_holidays[ph_year][public3_holidays_key]) {
                    console.info("public3 Holiday found for: ", complete_date);
                    var holiday_cause = public3_holidays[ph_year][public3_holidays_key][0];
                    var holiday_type = public3_holidays[ph_year][public3_holidays_key][1];
                    var holiday_description = public3_holidays[ph_year][public3_holidays_key][1];

                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "pratipada") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('pratipada_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('pratipada_holiday');


                            }
                        }
                    }
                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "dutiya") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('dutiya_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('dutiya_holiday');



                            }
                        }
                    }
                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "tritiya") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('tritiya_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('tritiya_holiday');


                            }
                        }
                    }
                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "chaturthi") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('chaturthi_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('chaturthi_holiday');
                            }
                        }
                    }
                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "panchami") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('panchami_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('panchami_holiday');
                            }
                        }
                    }
                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "pasthai") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('pasthai_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('pasthai_holiday');
                            }
                        }
                    }
                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "saptami") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('saptami_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('saptami_holiday');
                            }
                        }
                    }
                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "astami") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('astami_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('astami_holiday');
                            }
                        }
                    }
                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "nawami") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('nawami_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('nawami_holiday');
                            }
                        }
                    }
                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "dasami") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('dasami_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('dasami_holiday');
                            }
                        }
                    }
                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "akadashi") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('akadashi_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('akadashi_holiday');
                            }
                        }
                    }
                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "duwadasi") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('duwadasi_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('duwadasi_holiday');
                            }
                        }
                    }
                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "trayodasi") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('trayodasi_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('trayodasi_holiday');
                            }
                        }
                    }
                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "chaturdasi") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('chaturdasi_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('chaturdasi_holiday');
                            }
                        }
                    }
                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "purnima") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('purnima_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('purnima_holiday');
                            }
                        }
                    }
                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "ausi") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('ausi_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('ausi_holiday');
                            }
                        }
                    }
                    if (holiday_type == "national") {
                        document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
                    }

                    else if (holiday_type == "aus") {
                        var date_node = document.getElementById(complete_date).parentNode.parentNode;

                        // special case if specific holiday occurs on saturday
                        if (date_node.classList.contains('')) {
                            date_node.classList.add('national_holiday');
                        }
                        else {
                            date_node.classList.add('ausi_holiday');
                        }

                        // special case if specific holiday occurs on sundaytrial (>=2079-02)
                        if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
                            if (date_node.classList.contains('sundaytrial')) {
                                date_node.classList.add('national_holiday');
                            }
                            else {
                                date_node.classList.add('ausi_holiday');
                            }
                        }
                    }
                }
            }
        }

 if (failsafe > 65) {
            console.warn("Failsafe triggered");
            break;
        }
        ph_month++;
        if (ph_month > 12) {
            ph_month = 1;
            ph_year++;
        }
        index = ph_year.toString() + "-" + ph_month.toString().padStart(2, '0');
    }
    console.info("Checking for Public Holidays... DONE!");
}

function add_public3_holiday_info(complete_date, has_events) {
    document.getElementById('modal_title').classList.remove("national_holiday");
    document.getElementById('modal_title').classList.remove("akadashi_holiday");

    var public3_holidays_year = complete_date.toString().substr(0, 4);
    var public3_holidays_key = complete_date.toString().slice(5);
    var public3_holidays_info = "";

    if (public3_holidays_year < public3_holidays_start_year.toString() || public3_holidays_year > public3_holidays_end_year.toString()) {
        return public3_holidays_info;

    }

    return public3_holidays_info;
}

function add_public3_holiday_box(month, year) {
    // this lists public holidays in AD and Solar NS Calendar
    if (CALENDAR_MODE == 2) {
        console.info("Public Holidays' Info Integrated in Event Info Box itself.");
        return;
    }
    console.info("Creating Public Holiday Info Box...");

    let public3_holiday_list_html = "<span style='text-decoration: underline;' onclick='highlight_ph_events();' title='Click to Focus all Holidays'>सार्वजनिक बिदाहरू:</span><br />";
    if (public3_holiday_lang_en) {
        public3_holiday_list_html = "<span style='text-decoration: underline;' onclick='highlight_ph_events();' title='Click to Focus all Holidays'>Public Holidays:</span><br />";
    }
    let public3_holiday_box = document.getElementById("public3_holiday_box");
    let last_date = CALENDAR_MODE ? (CALENDAR_MODE == 1 ? get_last_date_ad(year, month) : get_last_date_bs(year, month)) : get_last_date_ns(year, month);
    let has_public3_holiday = false;

    for (var date = 1; date <= last_date; date++) {
        let bs_list = "";
        if (CALENDAR_MODE == 0) {
            bs_list = convert_ns_to_bs(year, month, date).split(" ");
        }
        else if (CALENDAR_MODE == 1) {
            bs_list = convert_ad_to_bs(year, month, date).split(" ");
        }
        else {
            console.error("Unexpected Error Occured in: make_public3_holiday_box()");
            return;
        }

        let bs_year = bs_list[0];
        let bs_month = bs_list[1];
        let bs_date = bs_list[2];

        let public3_holiday_key = bs_month.toString().padStart(2, '0') + "-" + bs_date.toString().padStart(2, '0')
        let public3_holiday_span_id = bs_year.toString() + "-" + public3_holiday_key + "_PH";
        if (public3_holidays.hasOwnProperty(bs_year)) {
            if (public3_holidays[bs_year].hasOwnProperty(public3_holiday_key)) {
                let holiday_name = public3_holidays[bs_year][public3_holiday_key][3];
                if (public3_holiday_lang_en) {
                    holiday_name = public3_holidays[bs_year][public3_holiday_key][0];
                }
                public3_holiday_list_html += "<span id=" + public3_holiday_span_id + ">";
                let public3_holiday_list_span = CALENDAR_MODE ? date : arabic_number_to_nepali(date);
                public3_holiday1_list_span += " - " + holiday_name;
                public3_holiday1_list_html += public3_holiday_list_span + "</span><br />";
                console.info("Added to list: ", public3_holiday_list_span);
                has_public3_holiday = true;
            }
        }
    }

    public3_holiday_box.innerHTML = public3_holiday_list_html;

    const holidays_list = document.getElementById('public3_holiday_box').getElementsByTagName('span');
    for (var holiday of holidays_list) {
        var holiday_id = holiday.id.slice(5, 10);
        let bs_year = holiday.id.slice(0, 4);

        if (public3_holidays[bs_year] && public3_holidays[bs_year].hasOwnProperty(holiday_id)) {
            if (public3_holidays[bs_year][holiday_id][1] == 'national') {
                holiday.classList.add('national_holiday');
            }
            else if (public3_holidays[bs_year][holiday_id][1] == 'specific') {
                holiday.classList.add('specific_holiday');
            }
        }

        bs_date_today = bs_today_year + "-" + bs_today_month.padStart(2, "0") + "-" + bs_today_date.padStart(2, "0");
        holiday_date = holiday.id.slice(0, 10);
        if (holiday_date == bs_date_today) {
            holiday.classList.add('text-primary');
        }
    }
    public3_holiday_box.style.display = "block";
    if (!has_public3_holiday) {
        public3_holiday_box.style.display = "none";
    }
    highlight_holidays_in_adns_calendar();
    console.info("Creating Public Holiday Info Box... DONE!");
}
