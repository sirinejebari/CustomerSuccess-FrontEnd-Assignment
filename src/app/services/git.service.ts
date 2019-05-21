import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { User } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) {}

  searchUSers(params: {q: string, order?:string, sort?:string}) : Promise<{items:User[], total_count: number, incomplete_results: boolean}> {
    return new Promise((resolve, reject) => {
      //${params.order? '+order='}+sort=${params.sort}
        this.http.get(`https://api.github.com/search/users?q=${params.q}`).subscribe((data: User[]) => {
          console.log(data)
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }
}
