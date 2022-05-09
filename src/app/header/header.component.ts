import { Component, OnInit } from '@angular/core';
import { OrganicrouteService } from '../organicroute.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private routing: OrganicrouteService){ }

  ngOnInit(): void {
  }

  logout(){
    this.routing.gotoLogin();
  }

}
