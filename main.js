$(function(){

    var vehicles = {
        '123456789ABC': {
            year: '2001',
            make: 'Chevrolet',
            model: 'tahoe',
            type: 'suv'
        },
        '123456789DEF': {
            year: '2010',
            make: 'chevrolet',
            model: 'tahoe',
            type: 'SUV'
        },
        '123456789GHI': {
            year: '2008',
            make: 'GMC',
            model: 'Surburban',
            type: 'SUV'
        },
        '123456789JKL': {
            year: '2003',
            make: 'Chevrolet',
            model: 'Silverado',
            type: 'Truck'
        },
        '123456789MNO': {
            year: '2004',
            make: 'Cadillac',
            model: 'CTX',
            type: 'car'
        },
        '123456789PQR': {
            year: '2007',
            make: 'GMC',
            model: 'Sierra',
            type: 'truck'
        },
        '123456789STU': {
            year: '2010',
            make: 'Chevrolet',
            model: 'Corvette',
            type: 'Car'
        }
    };

    function compare_search_term_to_result_set_name(input_val, key){
        // Compare search term to each result set name, e.g. 123456789ABC

        console.log('Input val -> ' + input_val);

        if (key.toLowerCase().indexOf(input_val.toLowerCase()) >= 0){
            $('.results').append($('<li class="match">').append(key));
        }
    }

    function compare_search_term_to_result_set_values(input_val, value){
        // Compare search term to each result set name, e.g. 123456789ABC
    }

    function search_autocomplete(){
        // Search the list of vehicles and autocomplete the search term

        var key_event = event.which;
        var input_val = $(this).val();
        var regx = /^[A-Za-z0-9]+$/;
        
        console.log(key_event);
        
        if (!(key_event > 47 && key_event < 58 || key_event > 64 && key_event < 91 || key_event == 8)) { 
            // Early exit if key event is not alphanumeric or backspace
            return false;
        }

        // Clear list of results
        $('.match').remove();

        jQuery.each(vehicles, function(key, value){
            // Compare the search term to the result set name, then every value of each result set

            // Compare search term to result set name
            compare_search_term_to_result_set_name(input_val, key);

            // Compare search term to result set values
            compare_search_term_to_result_set_values(input_val, value);
        });
    }

    // Add event handler to the input field
    $('.search_term').on('keyup blur change paste cut reset submit', search_autocomplete);

});
/*
   Given the below JSON object, construct a live search filter module
       - Begin with no results
       - As the user types, display a list of matches below the line in real time
*/


/*//--- SPECS -------------------------
describe("Live Search", function() {
    
    it("Specifies a JSON Object", function() {
        expect(vehicles).toBeDefined();
    });
    
});*/
