export interface User {
    login: string,
      id: number,
      node_id: string,
      avatar_url: string,
      gravatar_id: string,
      url: string,
      html_url: string,
      followers_url: string,
      following_url: string,
      gists_url: string,
      starred_url: string,
      subscriptions_url: string,
      organizations_url: string,
      repos_url: string,
      events_url: string,
      received_events_url: string,
      type: string,
      site_admin: boolean,
      score: any
}

export interface SelectedUser {
  login: string;
  repos_url: string;
  avatar_url: string;
  id: number;
}

export interface Repo {
  id: number,
  node_id: string,
  name: string,
  full_name: string,
  private: boolean,
  owner: User,
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  forks_count: number;
  }

  export  interface MessageInterface {title: string; message: string; type: string, id: number}
