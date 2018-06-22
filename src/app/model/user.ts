export class User {
        firstName:  string;
        lastName: string;
        gender:   string;
        dob: Date;
        email: string;
        startDate: Date;
        endDate: Date;
        ethnicity: string;
        fromPlace: string;
        toPlace: string;

        constructor(values: Object = {}) {
            /*Constructor initialization*/
            Object.assign(this, values);
        }
    }

    
