import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import {User} from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[ProfileService]
})
export class ProfileComponent implements OnInit {
  user: User;
  
 constructor(private profileService: ProfileService, public repoService: ProfileService) { 
 this.user = this.profileService.user;
 }
  ngOnInit() {
    this.user = this.profileService.user;

  }

}