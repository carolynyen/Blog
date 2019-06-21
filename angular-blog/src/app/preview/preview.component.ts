import { Component, OnInit } from '@angular/core';
import { Parser, HtmlRenderer } from 'commonmark';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Post, BlogService } from '../blog.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  post: Post;
  parser: Parser = new Parser();
  renderer: HtmlRenderer = new HtmlRenderer();
  title_html: string;
  body_html: string;
  username: string;
  constructor(private blogService: BlogService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.username = this.blogService.getUsername();
    this.activatedRoute.paramMap.subscribe(() => this.getPost());
  }

  ngOnInit() {
  }

  edit(): void {
      this.router.navigate(['/edit/'+this.post.postid]);
  }

  getPost(): void {
      var postid = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
      if (isNaN(postid)){
          alert("postid has to be a number");
          return;
      }
      this.blogService.subscribe(posts => {this.post = posts.filter(post => post.postid == postid)[0];
        this.title_html = this.renderer.render(this.parser.parse(this.post.title));
        this.body_html = this.renderer.render(this.parser.parse(this.post.body));;}
        );
      this.post = this.blogService.getPost(this.username, postid);
      if (this.post){
          this.title_html = this.renderer.render(this.parser.parse(this.post.title));
          this.body_html = this.renderer.render(this.parser.parse(this.post.body));;
      }
  }

}
