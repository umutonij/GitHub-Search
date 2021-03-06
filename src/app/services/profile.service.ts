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
    this.user = new User (' ','',0,0,0, '','',new Date());
    this.repository = new Repository ('','',0,0,0, '','',new Date);
  }
  getProfileInfo(username){
    console.log(username);
    interface ApiResponse {
      username: string;
      login: string;
      public_repos: number;
      followers: number;
      following: number;
      html_url: string
      created_at: Date;
      avatar_url: string;
  }
  const promise = new Promise((resolve, reject) => {
    this.http.get<ApiResponse>( 'https://api.github.com/users/'+ username + "?access_token=4e506891c065d69bf641bbe51727e32d407658e2 ").toPromise().then(profile => {
        this.user.login = profile.login;
        this.user.public_repository = profile.public_repos
        this.user.followers = profile.followers;
        this.user.following = profile.following;
        this.user.created_at = profile.created_at;
        this.user.html_url = profile.html_url;
        this.user.avatar_url = profile.avatar_url;
        // console.log(profile);
         resolve();
    },
    
    );
});
return promise;
}
getRepositoryInfo(username) {
  console.log(username);
  interface ApiResponse {
    username: string;
      login: string;
      public_repository: number;
      followers: number;
      following: number;
      created_at: Date;
}
this.http.get<ApiResponse>('https://api.github.com/users/' + username + "/repos?access_token=4e506891c065d69bf641bbe51727e32d407658e2").subscribe(response => {
  
    this.items = response;  
  });
}
}
