import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { User, Repo } from '../interfaces/interfaces';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) {}

  searchUSers(params: {q: string, order?:string, sort?:string, page: number}) : Promise<{items:User[], total_count: number, incomplete_results: boolean}> {
    return new Promise((resolve, reject) => {
      //TODO ${params.order? '+order='}+sort=${params.sort}
        this.http.get(`https://api.github.com/search/users?q=${params.q}&per_page=20&page=${params.page}`).subscribe((data:{items:User[], total_count: number, incomplete_results: boolean}) => {
          resolve(data)
        }, error => {
          reject(error)
        })
    })
  }

  getUSerRepos(url :string): Promise<Repo[]> {
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: Repo[]) => resolve(data), error => reject(error))
    })
  }

  getUserById(id: number): Promise<User>{
    return new Promise((resolve, reject) => {
      this.http.get(`https://api.github.com/user/${id}`).subscribe((data: User) => resolve(data), error => reject(error))
    })
  }
}
