import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsuarioValidator {
  static noEspaciosEnBlanco(control: AbstractControl): ValidationErrors | null {
    //Verifica que si encuentra un ' ' espacio en la ultima posicion de la cadena
    if (control.value.indexOf(' ') !== -1) {
      return {
        noespaciosenblanco: true
      };
    }
  }
}
