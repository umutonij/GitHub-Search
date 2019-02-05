export class User {
    constructor( 
        public username: string,
        public login: string, 
        public public_repository:number,
        public followers: number, 
        public following: number,
        public html_url: string,
        public avatar_url: string,  
        public  created_at: Date) {
    }
  
}