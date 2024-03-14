import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDto } from '../dto/post.dto';

@Injectable({
  providedIn: 'root'
})
export class PostFetchService {
  public allPosts$: Observable<PostDto[]> = this.fetchAllPosts();

  public constructor(
    private http: HttpClient
  ) { }

  public fetchAllPosts(): Observable<PostDto[]> {
    return this.http.get<PostDto[]>('https://jsonplaceholder.typicode.com/posts');
  }
}