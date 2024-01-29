import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(userList: any[], term: string): any[] {
return userList.filter((item)=> item.firstName.includes(term)); 
}

}
