import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent implements OnInit {

  enteredTitle: string = '';
  enteredContent: string = '';

  constructor(public postService: PostsService) { };

  ngOnInit(): void {
  };

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return
    };
    const newPost: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postService.addPost(newPost);
    form.resetForm();
  };

};
