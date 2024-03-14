import { Component, inject } from '@angular/core';
import { PostDto } from '../../../dto/post.dto';
import { PostFetchService } from '../../../service/post-fetch.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  public posts$: Observable<PostDto[]> = this.postFetchService.allPosts$;

  public constructor(
    private postFetchService: PostFetchService
  ) { }
}
