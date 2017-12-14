
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
//
import { Director } from './director';
import { Sandbox } from './sandbox';

console.log('@app.js', new Sandbox(new Director()), jQuery.extend({ jQuery: true }, { working: true }));

var app = new class App {
    init(x) {
        console.log(`run on port ${x}`);
        return `${x}`;
    }
};

export { app as default, app };
