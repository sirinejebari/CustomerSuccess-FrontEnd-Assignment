import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import {GitService} from '../../services/git.service'
import { User } from 'src/app/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { SelectedUser } from '../../interfaces/interfaces'
import * as Actions from '../../store/actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss'],
  host: {
    'class': 'width80'
  }
})
export class SearchContainerComponent implements OnInit {

  searchForm: FormGroup;
  results: User[] = [];
  page: number = 1;
  numberOfPages = 0;
  loading: boolean = false
  hasPagination: boolean = false
  totalCount: number;
  selectedUSer: Observable<SelectedUser[]>;
  constructor(private gitAPI: GitService, private fb: FormBuilder, private store: Store<AppState>,
    private router: Router) {
    
   }

  ngOnInit() {
    this.searchForm = this.fb.group({'query': ['', Validators.required ]})
  }

  fetchResults() {
    this.loading = true;
    const query = {
      q: this.searchForm.get('query').value,
      page: this.page
    }
    this.gitAPI.searchUSers(query).then((data: {items:User[], total_count: number, incomplete_results: boolean}) => {
        this.totalCount = data.total_count;
        this.hasPagination = this.totalCount > 20
        this.numberOfPages = this.totalCount / 20 + 1;
        this.results = data.items;
        this.loading = false;

    }, error => {
      this.loading = false;
      this.store.dispatch(new Actions.addMessage({message: error.error.message || 'An error occurred', id:0, title:'Could not fetch results', type:'is-danger'}) )
    })
    
  }

  goToProfile(user: User) {
    this.router.navigate([`/${user.id}/repos`])
    this.store.dispatch(new Actions.selectUser({login: user.login, avatar_url: user.avatar_url, repos_url: user.repos_url, id: user.id}) )
  }

  goToPreviousPage(){
    this.page--;
    this.fetchResults()
  }

  goToNextPage(){
    this.page++;
    this.fetchResults()
  }

}
