import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';
import { Post } from './post.model';
@Component({
  selector: 'app-httpwithoutservice',
  templateUrl: './httpwithoutservice.component.html',
  styleUrls: ['./httpwithoutservice.component.css']
})
export class HttpwithoutserviceComponent implements OnInit {
  loadedPosts:Post[] = [];
  isFeatching=false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }
  onCreatePost(postData:Post) {
    // Send Http request
    console.log(postData);
      this.http.post<{name:string}>
      ('firebaseurl/posts.json',postData).subscribe((res)=>{
         console.log(res)
      })
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }
  onClearPosts() {
    // Send Http request
  }
  private fetchPosts(){
    this.isFeatching=true;
    this.http
    .get<{[key:string]:Post}>('firebaseurl/posts.json')
    .pipe(map((responseData)=>{
      const postArray:Post[]=[];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postArray.push({...responseData[key],id:key})
        }
        return postArray;
      }
    }))
    .subscribe(getData=>{
      this.isFeatching=false;
      this.loadedPosts=getData;
    })
  }
}
