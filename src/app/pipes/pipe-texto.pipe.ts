import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTexto'
})
export class PipeTextoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value.length == 0) {
      return 'No se ha encontrado el texto, revise el codigo'
    };
    return value;
  }

}
