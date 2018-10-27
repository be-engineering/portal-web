/**
 * Copyright 2018 Be Engineering srl
 *
 * @author: Christian Chiama
 * @author: Gabriele Pettinato
 * 
 * 
 * @version: 1.0.0
 * @since:2018
 * @see:http://be-engineering.cloud
 *
 * 
 * 
 */
/*****************************************

    TABLE OF CONTENTS
    ---------------------------
        1. Loader
        2. Counter
        3. Subscribe
        4. Open & Close content
        5. Text Type

 *****************************************/

$(window).on('load', function() {
    'use strict';

    /******************************************************************
    *******************************     1. LOADER
    ******************************************************************/
        
        setTimeout( function() {
            $("html").addClass('ss-preload');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function() {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            }); 
            
            // for hero content animations 
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');
        }, 3000);

    /******************************************************************
    *******************************     2. COUNTER
    ******************************************************************/

        var Month       = counter.setMonth;
        var Day         = counter.setDay;
        var Year        = counter.setYear;
        var target_date = new Date(Month +','+ Day +','+ Year).getTime();
         
        var days, hours, minutes, seconds;
         
        var countdownDays    = document.getElementById("days");
        var countdownHours   = document.getElementById("hours");
        var countdownMinutes = document.getElementById("minutes");
        var countdownSeconds = document.getElementById("seconds");

        setInterval(function () {
         
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;

            days = seconds_left / 86400;
            days = parseInt(days, 10);
            seconds_left = seconds_left % 86400;

            hours = seconds_left / 3600;
            hours = parseInt(hours, 10);
            seconds_left = seconds_left % 3600;

            minutes = seconds_left / 60;
            minutes = parseInt(minutes, 10);
            seconds = seconds_left % 60;
            seconds = parseInt(seconds, 10);


            days    = (String(days).length >= 2) ? days : '0' + days;
            hours   = (String(hours).length >= 2) ? hours : '0' + hours;
            minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
            seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;

            countdownDays.innerHTML = days;
            countdownHours.innerHTML = hours;
            countdownMinutes.innerHTML = minutes;
            countdownSeconds.innerHTML = seconds;

         
        }, 1000);

    /******************************************************************
    *******************************     3. SUBSCRIBE
    ******************************************************************/

        // Event on submit subscribe form
        $('.subscribe-submit').on('click', function() {

            // Get value from input field
            var email = $('.subscribe-email').val(),
            emailTo = '',
            apiKey = '',
            listID = '',
            is_email_enabled = false,
            is_mailchimp_enabled = false;

            // Subscribe via email
            if( subscribe.emailTo ) {
                is_email_enabled = true;
                emailTo = subscribe.emailTo;
            }
            // Subscribe via mailchimp
            if( subscribe.apiKey && subscribe.listID ) {
                is_mailchimp_enabled = true;
                apiKey = subscribe.apiKey;
                listID = subscribe.listID;
            }

            // Ajax request for sending mails
            $.ajax({
                type: 'POST',
                url: 'assets/subscribe.php',
                data: {
                // Mailchimp service
                via_mailchimp: is_mailchimp_enabled,
                // Subscribe via email service
                via_email: is_email_enabled,
                // Field value
                email: email,
                // Your email
                email_to: emailTo,
                // Mailchimp api key
                api_key: apiKey,
                // Mailchimp list id
                list_id: listID,
                // Server success message
                success_msg: subscribe.successMsg
                },
                dataType: 'json',
                success: function(json) {
                    console.log(json);
                    if(json.valid === 0) {
                        var response = "Email is invalid";
                        $('.subscribe-message').text(response);
                    } else {
                        var response = json.message;

                        $('.subscribe-message').text(response);

                        setTimeout(function() {
                            $('.subscribe-message').text('');
                        }, 4000);

                    }

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                }

            });

            return false;

        });

    /******************************************************************
    *******************************     4. OPEN & CLOSE CONTENT
    ******************************************************************/

        //open/close lateral navigation
        $('.info-toggle').on('click', function(event) {
            event.preventDefault();
            $('body').toggleClass('info-is-visible');

        });
        
    /******************************************************************
    *******************************     5. TEXT TYPE
    ******************************************************************/

        var TxtRotate = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtRotate.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

            var that = this;
            var delta = 300 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function() {
                that.tick();
            }, delta);
        };

        var elements = document.getElementsByClassName('txt-rotate');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
});


