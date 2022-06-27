import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit, OnDestroy {

  posts!: Post[];
  private postsSubscription!: Subscription;

  constructor(public postService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.postsSubscription = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  };

  ngOnDestroy(): void {
    this.postsSubscription.unsubscribe();
  };

};
