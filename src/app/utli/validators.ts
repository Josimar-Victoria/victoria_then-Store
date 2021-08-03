import { AbstractControl } from '@angular/forms'

export class MyValidator {

    static isPriceValid(control: AbstractControl){
        const value = control.value;
        console.log(value);
        
            if (value > 10000){
                return {price_invariant: true}
            }else{
                return null
            }
    }
}