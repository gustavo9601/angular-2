import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pipePersonalizado'
})
export class PipePersonalizadoPipe implements PipeTransform {

  transform(value: string, limite?: any): any {
    console.log('string > 500', value);
    // En caso que sea null
    if (!value) {
      return null;
    }
    console.log('limite', limite);
    if (value.length > (limite ? limite : 100)) {
      return value.substr(0, (limite ? limite : 100)) + '[...]';
    } else {
      return value;
    }
  }

}
