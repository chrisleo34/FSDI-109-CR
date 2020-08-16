// tslint:disable-next-line: quotemark
import { DataService } from "./../service/data.service";
// tslint:disable-next-line: quotemark
import { Component } from "@angular/core";
// tslint:disable-next-line: quotemark
import { Post } from "../models/post";

@Component({
  // tslint:disable-next-line: quotemark
  selector: "app-tab1",
  // tslint:disable-next-line: quotemark
  templateUrl: "tab1.page.html",
  // tslint:disable-next-line: quotemark
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  allPosts: Post[] = [];

  constructor(private data: DataService) {}

  // fn get called every time user navigates to tab1
  ionViewDidEnter() {
    this.data.getAllPosts().subscribe((list) => {
      console.log("exc subscription", list);

      // sot the array
      // tslint:disable-next-line: only-arrow-functions
      this.allPosts = list.sort(function (left, right) {
        if (left.timeStamp > right.timeStamp) {
          return -1;
        } 
        
        else {
          return 1;
        }
      });
    });
  }
}
