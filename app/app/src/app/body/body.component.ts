import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  posts: any;

  constructor() { }

  onLoad(){
    fetch('http://localhost:5000/p/all/62111d5140917259fff64658', {method:"post"})
    .then(res => res.json())
    .then(data => this.posts = data);
  }

  ngOnInit(): void {
    this.onLoad();
  }

}
