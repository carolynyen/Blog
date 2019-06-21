import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: Post[] = [];
  private http: XMLHttpRequest = new XMLHttpRequest();
  private user: string;
  private callback = null;
  constructor(private router: Router) {
      this.user = this.getUsername();
      this.fetchPosts(this.user);
  }

  subscribe(callback): void {
      this.callback = callback;
  }

  fetchPosts(username: string): void {
      let each_post: Post;
      this.http.responseType = 'json';
      this.http.open("GET", "http://localhost:3000/api/" + username);
      this.http.onreadystatechange = () => {
          if (this.http.readyState != 4) return;
          if (this.http.status != 200) {
              if (this.http.status == 401){
                  window.location.href = "http://localhost:3000/login?redirect=/editor/";
                  return;
              }
          } else {
              let results = this.http.response;
              if (results) {
                  for (var i = 0; i < results.length; i++){
                      each_post = {
                          postid: results[i].postid,
                          created: results[i].created,
                          modified: results[i].modified,
                          title: results[i].title,
                          body: results[i].body
                      };
                      this.posts.push(each_post);
                  }
                  if (this.callback){
                      this.callback(this.getPosts(username));
                  }
              }
          }
      }
      this.http.send(null);
  }

  getPosts(username: string): Post[] {
      return this.posts;
  }

  getPost(username: string, id: number): Post {
      return this.posts.find(post => post.postid == id);
  }

  newPost(username: string): Post {
      let new_post = {postid: 0, created: new Date(), modified: new Date(), title: "", body: ""};
      if (this.posts.length > 0){
          new_post.postid = this.posts.reduce((p1, p2) => p1.postid > p2.postid ? p1 : p2).postid + 1;
      } else {
          new_post.postid = 1;
      }
      this.http.onreadystatechange = () => {
          if (this.http.readyState != 4) return;
          if (this.http.status != 201){
              this.posts.splice(this.posts.length - 1, 1);
              alert("Error making new post!");
              this.router.navigate(['/']);
              return;
          }
      }
      this.http.open("POST", "http://localhost:3000/api/"+username+"/"+new_post.postid);
      this.http.setRequestHeader("Content-type", "application/json");
      this.http.send(JSON.stringify(new_post));
      this.posts.push(new_post);
      return new_post;
  }

  updatePost(username: string, post: Post): void {
      let old_post = this.posts.find(old => old.postid == post.postid);
      if (old_post){
          let index_post = this.posts.indexOf(old_post);
          this.posts[index_post].title = post.title;
          this.posts[index_post].body = post.body;
          this.posts[index_post].modified = new Date();
          this.http.onreadystatechange = () => {
              if (this.http.readyState != 4) return;
              if (this.http.status != 200) {
                  if (this.http.status == 401){
                      window.location.href = "http://localhost:3000/login?redirect=/editor/";
                      return;
                  } else {
                      alert('Update posts failed');
                      this.router.navigate(['/edit/'+post.postid]);
                      return;
                 }
              }
          }
          this.http.open("PUT", "http://localhost:3000/api/"+username+"/"+post.postid);
          this.http.setRequestHeader("Content-type", "application/json");
          this.http.send(JSON.stringify(this.posts[index_post]));
          return;
      } else {
          return;
      }
  }

  deletePost(username: string, postid: number): void {
      let delete_post = this.posts.find(del => del.postid == postid);
      if (delete_post){
          let index_post = this.posts.indexOf(delete_post);
          this.http.onreadystatechange = () => {
              if (this.http.readyState != 4) return;
              if (this.http.status != 204) {
                  alert('Delete posts failed');
                  this.router.navigate(['/']);
                  return;
              } else {
                  this.posts.splice(index_post, 1);
              }
          }
          this.http.open("DELETE", "http://localhost:3000/api/"+username+"/"+postid);
          this.http.send(null);
          return;
      } else {
          return;
      }
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

export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;
}
