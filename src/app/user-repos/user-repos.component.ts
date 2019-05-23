import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { SelectedUser, User, Repo } from '../interfaces/interfaces'
import { Observable, Subscription } from 'rxjs';
import { GitService } from '../services/git.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as Actions from '../store/actions'
@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss'],
  host: {
    'class': 'width80'
  }
})
export class UserReposComponent implements OnInit {

  selectedUSer: Observable<SelectedUser>;
  subscription: Subscription
  user: SelectedUser;
  repos: Repo[] = [];
  constructor(private store: Store<AppState>,
    private gitService: GitService,
    private router: Router,
    private route: ActivatedRoute) {
    this.selectedUSer = store.select('selectedUser');
  }

  ngOnInit() {
    this.subscription = this.selectedUSer.subscribe(data => {
      this.user = data;
      if (this.user.repos_url) {
        this.getUSerRepos()
      } else {
        this.gitService.getUserById(this.route.snapshot.params.id).then(data => {
          this.user = data;
          this.getUSerRepos()
        }, error => {
          this.store.dispatch(new Actions.addMessage({message: error.error.message, id:0, title:'Could not get user', type:'is-danger'}) )
        })
      }
    })
  }
  getUSerRepos() {
    this.gitService.getUSerRepos(this.user.repos_url).then((data: Repo[]) => {
      this.repos = data
    }, error => {
      this.store.dispatch(new Actions.addMessage({message: error.error.message, id:0, title:'Could not get user', type:'is-danger'}) )
    })
  }

  goBack(){
    this.router.navigate([''])
  }

  goToRepo(html_url: string){
    let win = window.open(html_url, '_blank');
    win.focus();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
