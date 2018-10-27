// SINGLE IMAGE CONFIG OBJECT
// --------------------------

var image = {

    // PATH TO YOUR IMAGE 
    // ------------------
    // BACKGROUND : STRING

    background:'assets/images/1.jpg'
}



// INITIALIZE SINGLE IMAGE BACKGROUND 
// ----------------------------------

$('#background-effect').css({
    backgroundImage:'url(' + image.background + ')'
});



// COUNTER CONFIG OBJECT
// ---------------------

var counter = {

    // SET MONTH
    // ---------
    // SET MONTH : STRING[option]
    //
    // OPTIONS:"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"

    setMonth: 'September',



    // SET DAY
    // -------
    // SET DAY : INTEGER[ 1 - 31 ]

    setDay: 17,



    // SET YEAR
    // --------
    // SET YEAR : INTEGER

    setYear: 2019
}



// SUBSCRIBE CONFIG OBJECT
// ----------------------
// CHOOSE BEETWEN MAILCHIMP AND SIMPLE SUBSCRIBE VIA EMAIL, ALSO YOU CAN KEEP BOTH. 

var subscribe = {

    // DELETING OPTIONS BELOW OR LEAVE IT BLANK YOU WILL DISABLE OPTION TO SUBSCRIBE USER VIA MAILCHIMP

        // MAILCHIMP API KEY WHICH WILL BE USED TO CONNECT YOUR SUBSCRIBE FORM AND MAILCHIM ACCOUNT
        // ----------------------------------------------------------------------------------------
        // EMAIL : STRING

        apiKey: '81b53389c017c5ae5ac817bb52a4bfc4-us15',



        // MAILCHIMP LIST ID WHICH WILL BE USED TO INSERT NEW USER TO YOUR SUBSCRIBE LIST
        // -------------------------------------------------------------------------------
        // EMAIL : STRING

        listID: 'b205354f06',



        // RESPONSE MESSAGE IF EMAIL IS VALID AND SENT TO YOUR SYSTEM
        // ----------------------------------------------------------
        // MESSAGE : STRING

        successMsg: 'Thanks for your interest!',



    // DELETING OPTION BELOW OR LEAVE IT BLANK YOU WILL DISABLE OPTION TO SUBSCRIBE USER VIA EMAIL

        // EMAIL ADDRESS WHICH WILL BE USED TO NOTIFY YOU WHEN NEW USER SUBSCRIBE ON YOUR SYSTEM
        // -------------------------------------------------------------------------------------
        // EMAIL : STRING

        emailTo: 'yallowina.themes@gmail.com',

}

