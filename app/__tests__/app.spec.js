

// import '../../node_modules/jquery/dist/jquery.js';
// import '../../node_modules/bootstrap/dist/js/bootstrap.js';

import { app } from '../app.js';

console.log('@app.spec.js', app);

describe("The Application", () => {
    var x = app.init(9090);
    
    it("runs a port number from its init method", () => {
        expect(+x).toBe(9090);
    });
});
