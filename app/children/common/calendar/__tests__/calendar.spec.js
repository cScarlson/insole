
import { Calendar } from '../calendar.js';

describe("Calendar", () => {
    var calendar = new Calendar();
    
    it("returns a date", () => {
        var date = calendar.getDate();
        expect(date).toBeTruthy();
    });
});
