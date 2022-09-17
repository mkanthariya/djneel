import { Component, OnInit } from '@angular/core';
import { DjDataService } from '../dj-data.service';
@Component({
  selector: 'app-meet-the-dj',
  templateUrl: './meet-the-dj.component.html',
  styleUrls: ['./meet-the-dj.component.scss'],
  providers: [DjDataService]
})
export class MeetTheDjComponent implements OnInit {
  public image = "../../assets/images/dj-neel.jpeg"
  
  infodj1: string[]=[];

  getInfoFromService1(){
    this.infodj1=this.dservice.getInfo1();
  }
  constructor(private dservice:DjDataService) {}
   

  ngOnInit(): void {
    
  }
 
}
