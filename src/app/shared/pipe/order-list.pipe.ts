import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@app/core/models/track.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, arg: string | null = null, sort: string = 'asc'): TrackModel[] {
    try {
      
      if (!arg) {
        return value;
      
      } else {
        const tempList = value.sort((a, b) => {
          const propA = arg.split('.').reduce((obj, key) => obj?.[key], a);
          const propB = arg.split('.').reduce((obj, key) => obj?.[key], b);
          if (propA > propB) {
            return 1;
          }
          if (propA < propB) {
            return -1;
          }
          return 0;
        });

        return (sort === 'asc') ? tempList : tempList.reverse();
      }

    } catch (error) {
      console.error('Error in orderList pipe:', error);
      return value;
    }
  }
}
