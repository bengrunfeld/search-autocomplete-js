/*
   Given the below JSON object, construct a live search filter module
       - Begin with no results
       - As the user types, display a list of matches below the line in real time
*/

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


//--- SPECS -------------------------
describe("Live Search", function() {
    
    it("Specifies a JSON Object", function() {
        expect(vehicles).toBeDefined();
    });
    
});