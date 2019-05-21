import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import {GitService} from '../../services/git.service'
import { User } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  searchForm: FormControl;
  results: User[] = [];
  totalCount: number;
  constructor(private gitAPI: GitService) { }

  ngOnInit() {
    this.searchForm = new FormControl('', Validators.required)
  }

  fetchResults() {
    const query = {
      q: this.searchForm.value
    }
    this.gitAPI.searchUSers(query).then((data: {items:User[], total_count: number, incomplete_results: boolean}) => {
        this.totalCount = data.total_count;
        this.results = data.items;
    }, error => {
      alert(error)
    })
    
  }

  goToProfile(login: string) {
    console.log(login)
  }

}
