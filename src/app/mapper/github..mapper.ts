import { Following } from "@/interfaces/following.github.interfaces";

export class GithubMapper {
  static mapFollowing(following: any): Following[] {
    return following.map((f: any) => ({
      login: f.login,
      id: f.id,
      node_id: f.node_id,
      avatar_url: f.avatar_url,
      gravatar_id: f.gravatar_id,
      url: f.url,
      html_url: f.html_url,
      followers_url: f.followers_url,
      following_url: f.following_url,
      gists_url: f.gists_url,
      starred_url: f.starred_url,
      subscriptions_url: f.subscriptions_url,
      organizations_url: f.organizations_url,
      repos_url: f.repos_url,
      events_url: f.events_url,
      received_events_url: f.received_events_url,
      type: f.type,
      user_view_type: f.user_view_type,
      site_admin: f.site_admin
    }));
  }
  }
