
import { Calendar } from '../common/calendar/calendar';

class SpeciatedCalendar extends Calendar {
    getDate() {
        var d = super.getDate(), d = `Speciated-Date --${d}--`;
        // var d = new Date();
        return d;
    }
}

export { SpeciatedCalendar as default, SpeciatedCalendar };
