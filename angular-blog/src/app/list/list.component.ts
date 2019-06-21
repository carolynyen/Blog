import { Component, OnInit } from '@angular/core';
import { Post, BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts: Post[];
  private username: string;
  constructor(private blogService: BlogService,
              private router: Router) { }

  ngOnInit() {
      this.username = this.getUsername();
      this.posts = this.blogService.getPosts(this.username);
  }

  newPost(): void {
		let new_post = this.blogService.newPost(this.username);
		this.router.navigate(['/edit/' + new_post.postid]);
	}

  getUsername(){
      let cookie = document.cookie;
      let token = this.parseJWT(cookie);
      if (token){
         return token.usr;
      } else {
         return "No user found";
      }
  }

  parseJWT(token) {
      if (token){
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(atob(base64));
      }
  }

}
