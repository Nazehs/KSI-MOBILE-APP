import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { UserData } from "./user-data";

@Injectable({
  providedIn: "root"
})
export class KsiSampleData {
  data: any;
  baseUrl: any = "http://sixslatekays.com/dashboardksi/api";

  constructor(public http: HttpClient, public user: UserData) {}

  load(): Observable<any> {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http.get(`${this.baseUrl}/posts`).pipe(
        map(response => {
          return this.processPostData(response["data"]);
        })
      );
    }
  }

  //process post
  processPostData(data: any) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions
    this.data = data;
    console.log(data);

    // this.data.tracks = [];

    // loop through each post in the posts
    this.data.forEach((post: any) => {
      // console.log(post);
    });

    return this.data;
  }

  getTimeline(
    dayIndex: number,
    queryText = "",
    excludeTracks: any[] = [],
    segment = "all"
  ) {
    console.log("day index", dayIndex);
    return this.load().pipe(
      map((data: any) => {
        const day = data;
        console.log("posts day: ", day);
        // console.log("data: ", data.posts);

        day.shownSessions = 0;
        console.log("value of day ", day);

        queryText = queryText.toLowerCase().replace(/,|\.|-/g, " ");
        const queryWords = queryText.split(" ").filter(w => !!w.trim().length);

        day.forEach((post: any) => {
          post.hide = true;
          // check if this post should show or not
          this.filterPosts(post, queryWords, excludeTracks, segment);
          console.log("INSIDE POSTS ", segment);
          if (!post.hide) {
            // if this session is not hidden then this group should show
            post.hide = false;
            day.shownSessions++;
            console.log("session", day.shownSessions);
          }
        });
        // console.log("loggin day:", day);
        return day;
      })
    );
  }

  filterPosts(
    posts: any,
    queryWords: string[],
    excludeTracks: any[],
    segment: string
  ) {
    console.log("posts ", posts);
    var matchesQueryText = false;
    if (queryWords.length) {
      // of any query word is in the session name than it passes the query test
      queryWords.forEach((queryWord: string) => {
        if (
          posts.title.toLowerCase().indexOf(queryWord) > -1 ||
          posts.author.toLowerCase().indexOf(queryWord) > -1
        ) {
          matchesQueryText = true;
        }
      });
    } else {
      // if there are no query words then this session passes the query test
      matchesQueryText = true;
    }

    // if any of the sessions tracks are not in the
    // exclude tracks then this session passes the track test
    let matchesTracks = false;
    console.log("posts for looping ", posts);

    // posts.forEach((trackName: string) => {
    if (excludeTracks.indexOf(posts.title) === -1) {
      matchesTracks = true;
    }
    // });

    // if the segement is 'favorites', but session is not a user favorite
    // then this session does not pass the segment test
    let matchesSegment = false;
    console.log("favorites ent");
    if (segment === "favorites") {
      if (this.user.hasFavorite(posts.title)) {
        matchesSegment = true;
        console.log("favorites");
      }
    } else {
      matchesSegment = true;
    }

    // all tests must be true if it should not be hidden
    posts.hide = !(matchesQueryText && matchesTracks && matchesSegment);
  }

  getPosts() {
    return this.load().pipe(
      map((data: any) => {
        return data.posts.sort((a: any, b: any) => {
          const aName = a.date.split(" ").pop();
          const bName = b.date.split(" ").pop();
          return aName.localeCompare(bName);
        });
      })
    );
  }
}
