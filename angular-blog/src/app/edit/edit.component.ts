import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post, BlogService } from '../blog.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  post: Post;
  private username: string;
  private change: boolean;
  constructor(private blogService: BlogService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
      this.username = this.blogService.getUsername();
      this.change = false;
  }

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(() => this.getPost());
      this.router.events.subscribe(() => this.saveForm());
  }

  ngOnDestroy(): void {
  }

  @HostListener('window:beforeunload') onUnload() {
      if (this.post != null) {
          this.saveForm();
      }
  }
  saveForm(): void{
      if (this.change){
          this.save();
          this.change = false;
      }
  }
  handleChange(): void{
      this.change = true;
  }

  getPost(): void {
      var postid = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
      if (isNaN(postid)){
          alert("postid has to be a number");
          return;
      }
      this.blogService.subscribe(posts => this.post = posts.filter(post => post.postid == postid)[0]);
      this.post = this.blogService.getPost(this.username, postid);
  }

  save(): void {
      this.blogService.updatePost(this.username, this.post);
  }

  preview(): void {
      this.blogService.updatePost(this.username, this.post);
      this.router.navigate(['/preview/' + this.post.postid]);
  }

  delete(): void {
      this.blogService.deletePost(this.username, this.post.postid);
      this.post == null;
      this.router.navigate(['/']);
  }

}
