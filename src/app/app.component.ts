import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // urllink:string = "assets/images/3.jpg";
  // selectFile(event:any){
  //   if(event.target.files){
  //     var reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);
  //     reader.onload = (event:any) => {
  //       this.urllink = event.target.result;
  //     }
  //   }
  // }
  title = 'router-task3';
}
