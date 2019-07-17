import { AbstractControl, ValidationErrors } from '@angular/forms';


export class OnlyNumbersValidators {
    static onlynumbers(control: AbstractControl) : ValidationErrors | null{
        if ((control.value as string).match('7')) {
            console.log('hie');
            return {alphabets: true}
        }
        return null;
    }
}