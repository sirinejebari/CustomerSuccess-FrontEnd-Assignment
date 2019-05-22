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
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  searchForm: FormGroup;
  results: User[] = [];
  totalCount: number;
  selectedUSer: Observable<SelectedUser[]>;
  constructor(private gitAPI: GitService, private fb: FormBuilder, private store: Store<AppState>,
    private router: Router) {
    
   }

  ngOnInit() {
    this.searchForm = this.fb.group({'query': ['', Validators.required ]})
  }

  fetchResults() {
    const query = {
      q: this.searchForm.get('query').value
    }
    this.gitAPI.searchUSers(query).then((data: {items:User[], total_count: number, incomplete_results: boolean}) => {
        this.totalCount = data.total_count;
        this.results = data.items;
    }, error => {
      this.store.dispatch(new Actions.addMessage({message: '', msgKey:'', title:'Could not fetch results', type:'is-danger'}) )

      console.log(error)
    })
    
  }

  goToProfile(user: User) {
    this.router.navigate([`/${user.id}/repos`])
    this.store.dispatch(new Actions.selectUser({login: user.login, avatar_url: user.avatar_url, repos_url: user.repos_url, id: user.id}) )
    
  }

}
