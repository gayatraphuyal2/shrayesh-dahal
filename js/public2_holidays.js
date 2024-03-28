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
var public2_holiday_url = 'https://gayatraphuyal2.github.io/shrayesh-dahal/data/public2_holidays.json';
var public2_holiday_req = new XMLHttpRequest();
var public2_holidays = JSON.parse("{}");
var public2_holidays_start_year = 2076;
var public2_holidays_end_year = 2081;

let public2_holiday_lang_en = false;
if (localStorage.config != null) {
  public2_holiday_lang_en = JSON.parse(localStorage.config)[7];
}

public2_holiday_req.open('GET', public2_holiday_url, true);
public2_holiday_req.onload = function () {
  public2_holidays = JSON.parse(this.response);
  public2_holidays_start_year = public2_holidays.start_year;
  public2_holidays_end_year = public2_holidays.end_year;
}
public2_holiday_req.send();

function show_public2_holidays(bs_year_start, bs_year_end, bs_month_start, bs_month_end) {
  console.info("Checking for Public Holidays...");
  if (bs_year_end < public2_holidays_start_year || bs_year_start > public2_holidays_end_year) {
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
      var public2_holidays_key = ph_month.toString().padStart(2, "0") + "-" + days.toString().padStart(2, '0');
      var complete_date = ph_year + "-" + public2_holidays_key;

      if (!document.getElementById(complete_date)) {
        continue;
      }

      if (public2_holidays[ph_year]) {
        if (public2_holidays[ph_year][public2_holidays_key]) {
          console.info("Public1 Holiday found for: ", complete_date);
          var holiday_cause = public2_holidays[ph_year][public2_holidays_key][0];
          var holiday_type = public2_holidays[ph_year][public2_holidays_key][1];
          var holiday_description = public2_holidays[ph_year][public2_holidays_key][1];

          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "hanuman-jayanti") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('hanuman-jayanti_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('hanuman-jayanti_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "ram-nawami") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('ram-nawami_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('ram-nawami_holiday');



              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "holi-pahad") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('holi-pahad_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('holi-pahad_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "holi-tarai") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('holi-tarai_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('holi-tarai_holiday');




              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "chaite-dashain") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('chaite-dashain_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('chaite-dashain_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "buddha-jayanti") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('buddha-jayanti_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('buddha-jayanti_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "janai-purnima") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('janai-purnima_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('janai-purnima_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "gaai-jatra") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('gaai-jatra_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('gaai-jatra_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "krishna-asthami") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('krishna-asthami_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('krishna-asthami_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "kuse-ausi") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('kuse-ausi_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('kuse-ausi_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "dar-khane-din") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('dar-khane-din_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('dar-khane-din_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "haritalika-tij") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('haritalika-tij_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('haritalika-tij_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "ganesh-chaturthi") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('ganesh-chaturthi_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('ganesh-chaturthi_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "ghatasthapana") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('ghatasthapana_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('ghatasthapana_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "fulpati") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('fulpati_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('fulpati_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "maha-astimi") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('maha-astimi_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('maha-astimi_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "bajaya-dasami") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('bajaya-dasami_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('bajaya-dasami_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "dashain-bida") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('dashain-bida_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('dashain-bida_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "dhan-trayodasi") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('dhan-trayodasi_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('dhan-trayodasi_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "kaag-tihar") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('kaag-tihar_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('kaag-tihar_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "laxmi-puja") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('laxmi-puja_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('laxmi-puja_holiday');


              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "tihar-bida") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('tihar-bida_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('tihar-bida_holiday');
            
            
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "goru-tihar") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('goru-tihar_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('goru-tihar_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "bhai-tika") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('bhai-tika_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('bhai-tika_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "tiharbida") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('tiharbida_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('tiharbida_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "chat-parba") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('chat-parba_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('chat-parba_holiday');
              
              
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "balachaturdasi") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('balachaturdasi_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('balachaturdasi_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "udhauliparba") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('udhauliparba_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('udhauliparba_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "crismasday") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('crismasday_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('crismasday_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "prithivijayanti") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('prithivijayanti_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('prithivijayanti_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "sahid-dibas") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('sahid-dibas_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('sahid-dibas_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "sonam-losar") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('sonam-losar_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('sonam-losar_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "prajatantra-dibas") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('prajatantra-dibas_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('prajatantra-dibas_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "shiva-ratri") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('shiva-ratri_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('shiva-ratri_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "ghode-jatra") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('ghode-jatra_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('ghode-jatra_holiday');
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "galpo-losar") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('galpo-losar_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('galpo-losar_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "international-laberday") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('international-laberday_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('international-laberday_holiday');
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "new-year") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('new-year_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('new-year_holiday');
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "saani-jayanti") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('saani-jayanti_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('saani-jayanti_holiday');
              
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "sita-jayanti") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('sita-jayanti_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('sita-jayanti_holiday');
              
              
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "ganatrantra-dibas") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('ganatrantra-dibas_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('ganatrantra-dibas_holiday');
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "ashad-pandra") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('ashad-pandra_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('ashad-pandra_holiday');
            
            
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "aama-akchaki") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('aama-akchaki_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('aama-akchaki_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "aama-shardha") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('aama-shardha_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('aama-shardha_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "sharwan-pandra") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('sharwan-pandra_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('sharwan-pandra_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "naag-panchami") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('naag-panchami_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('naag-panchami_holiday');
              
              
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "guru-purnima") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('guru-purnima_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('guru-purnima_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "tulasidas-jayanti") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('tulasidas-jayanti_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('tulasidas-jayanti_holiday');
              
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "biswakarma-puja") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('biswakarma-puja_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('biswakarma-puja_holiday');
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "sorashardha-suru") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('sorashardha-suru_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('sorashardha-suru_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "sambhidhan-dibas") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('sambhidhan-dibas_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('sambhidhan-dibas_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "nawami-sharadha") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('nawami-sharadha_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('nawami-sharadha_holiday');
              
              
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "pitri-bisarjan") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('pitri-bisarjan_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('pitri-bisarjan_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "ko-jagrat") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('ko-jagrat_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('ko-jagrat_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "mangalchu") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('mangalchu_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('mangalchu_holiday');
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "vibha-panchami") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('vibha-panchami_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('vibha-panchami_holiday');
              
              
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "shree-swasthini-start") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('shree-swasthini-start_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('shree-swasthini-start_holiday');
             
             
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "saraswati-puja") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('saraswati-puja_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('saraswati-puja_holiday');
            
            
              }
            }
          }
          if (holiday_type == "national") {
            document.getElementById(complete_date).parentNode.parentNode.classList.add('national_holiday');
          }

          else if (holiday_type == "shree-swasthini-end") {
            var date_node = document.getElementById(complete_date).parentNode.parentNode;

            // special case if specific holiday occurs on saturday
            if (date_node.classList.contains('')) {
              date_node.classList.add('national_holiday');
            }
            else {
              date_node.classList.add('shree-swasthini-end_holiday');
            }

            // special case if specific holiday occurs on sundaytrial (>=2079-02)
            if ((parseInt(complete_date.substring(0, 4)) == 2079 && parseInt(complete_date.substring(5, 7)) == 2)) {
              if (date_node.classList.contains('sundaytrial')) {
                date_node.classList.add('national_holiday');
              }
              else {
                date_node.classList.add('shree-swasthini-end_holiday');
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

function add_public2_holiday_info(complete_date, has_events) {
  document.getElementById('modal_title').classList.remove("national_holiday");
  document.getElementById('modal_title').classList.remove("akadashi_holiday");

  var public2_holidays_year = complete_date.toString().substr(0, 4);
  var public2_holidays_key = complete_date.toString().slice(5);
  var public2_holidays_info = "";

  if (public2_holidays_year < public2_holidays_start_year.toString() || public2_holidays_year > public2_holidays_end_year.toString()) {
    return public2_holidays_info;

  }

  return public2_holidays_info;
}

function add_public2_holiday_box(month, year) {
  // this lists public holidays in AD and Solar NS Calendar
  if (CALENDAR_MODE == 2) {
    console.info("Public Holidays' Info Integrated in Event Info Box itself.");
    return;
  }
  console.info("Creating Public Holiday Info Box...");

  let public2_holiday_list_html = "<span style='text-decoration: underline;' onclick='highlight_ph_events();' title='Click to Focus all Holidays'>सार्वजनिक बिदाहरू:</span><br />";
  if (public2_holiday_lang_en) {
    public2_holiday_list_html = "<span style='text-decoration: underline;' onclick='highlight_ph_events();' title='Click to Focus all Holidays'>Public Holidays:</span><br />";
  }
  let public2_holiday_box = document.getElementById("public2_holiday_box");
  let last_date = CALENDAR_MODE ? (CALENDAR_MODE == 1 ? get_last_date_ad(year, month) : get_last_date_bs(year, month)) : get_last_date_ns(year, month);
  let has_public2_holiday = false;

  for (var date = 1; date <= last_date; date++) {
    let bs_list = "";
    if (CALENDAR_MODE == 0) {
      bs_list = convert_ns_to_bs(year, month, date).split(" ");
    }
    else if (CALENDAR_MODE == 1) {
      bs_list = convert_ad_to_bs(year, month, date).split(" ");
    }
    else {
      console.error("Unexpected Error Occured in: make_public2_holiday_box()");
      return;
    }

    let bs_year = bs_list[0];
    let bs_month = bs_list[1];
    let bs_date = bs_list[2];

    let public2_holiday_key = bs_month.toString().padStart(2, '0') + "-" + bs_date.toString().padStart(2, '0')
    let public2_holiday_span_id = bs_year.toString() + "-" + public2_holiday_key + "_PH";
    if (public2_holidays.hasOwnProperty(bs_year)) {
      if (public2_holidays[bs_year].hasOwnProperty(public2_holiday_key)) {
        let holiday_name = public2_holidays[bs_year][public2_holiday_key][3];
        if (public2_holiday_lang_en) {
          holiday_name = public2_holidays[bs_year][public2_holiday_key][0];
        }
        public2_holiday_list_html += "<span id=" + public2_holiday_span_id + ">";
        let public2_holiday_list_span = CALENDAR_MODE ? date : arabic_number_to_nepali(date);
        public2_holiday_list_span += " - " + holiday_name;
        public2_holiday_list_html += public2_holiday_list_span + "</span><br />";
        console.info("Added to list: ", public2_holiday_list_span);
        has_public2_holiday = true;
      }
    }
  }

  public2_holiday_box.innerHTML = public2_holiday_list_html;

  const holidays_list = document.getElementById('public2_holiday_box').getElementsByTagName('span');
  for (var holiday of holidays_list) {
    var holiday_id = holiday.id.slice(5, 10);
    let bs_year = holiday.id.slice(0, 4);

    if (public2_holidays[bs_year] && public2_holidays[bs_year].hasOwnProperty(holiday_id)) {
      if (public2_holidays[bs_year][holiday_id][1] == 'national') {
        holiday.classList.add('national_holiday');
      }
      else if (public2_holidays[bs_year][holiday_id][1] == 'specific') {
        holiday.classList.add('specific_holiday');
      }
    }

    bs_date_today = bs_today_year + "-" + bs_today_month.padStart(2, "0") + "-" + bs_today_date.padStart(2, "0");
    holiday_date = holiday.id.slice(0, 10);
    if (holiday_date == bs_date_today) {
      holiday.classList.add('text-primary');
    }
  }
  public2_holiday_box.style.display = "block";
  if (!has_public2_holiday) {
    public2_holiday_box.style.display = "none";
  }
  highlight_holidays_in_adns_calendar();
  console.info("Creating Public Holiday Info Box... DONE!");
}
