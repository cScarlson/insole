
import { SpeciatedCalendar } from '../speciated-calendar.js';

describe("Speciated Calendar", () => {
    var calendar = new SpeciatedCalendar();
    
    it("returns a date", () => {
        var date = calendar.getDate();
        
        console.log('@speciated-calendar.spec.js', date);
        expect(date).toContain('Speciated-Date');
    });
});
