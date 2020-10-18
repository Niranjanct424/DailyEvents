import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, sName: string): any {
    if(sName === "")
    {
      return value;
    }
    const eventArray:any[] = [];

    for (let i = 0; i < value.length; i++) {
      const eventName:string = value[i].name.toLowerCase();
      if(eventName.startsWith(sName))
      {
        eventArray.push(value[i])
      }
    }
    return eventArray;
  }
}
