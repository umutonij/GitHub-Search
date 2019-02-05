import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {environment} from '../../environments/environment';
import {Repository} from '../repository';


@Injectable({
  providedIn: 'root' 
})

export class ProfileService {
  repository: Repository; 
    user: User;

  private username: string;
  items;
  constructor(private http:HttpClient) { 
    console.log ("service is now ready!");
    this.username = 'umutonij';
    this.user = new User (' ','',0,0,0, new Date());
    this.repository = new Repository (' ', ' ', ' ', ' ', ' ');
  }
  getProfileInfo(username){
    interface ApiResponse {
      username: string;
      login: string;
      public_repository: number;
      followers: number;
      following: number;
      created_at: Date;

  }
  const promise = new Promise((resolve, reject) => {
    this.http.get<ApiResponse>( + username + environment.apikey).toPromise().then(profile => {
        this.user.login = profile.login;
        this.user.public_repository = profile.public_repository
        this.user.followers = profile.followers;
        this.user.following = profile.following;
        // this.user.created_at = profile.Date;

        console.log(profile);
         resolve();
    },
    
    );
});
return promise;
}
getRepositoryInfo(username) {
  interface ApiResponse {
    name: string;
    homepage: string;
    description: string;
    html_url: string;
    clone_url: string;
}
this.http.get<ApiResponse>(environment.apiUrl + username + environment.apiRepositorykey).subscribe(response => {
  
    this.items = response;  
  });
}
}
