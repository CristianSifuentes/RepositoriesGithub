import { Follower } from "@/interfaces/follower.github.interface";
import { Following } from "@/interfaces/following.github.interfaces";

export class GithubMapper {
  static mapFollowing(followers: Following): Follower[] {
    return followers.map((f: any) => ({
      login: f.login,
      avatar_url: f.avatar_url,
      html_url: f.html_url,
      id: f.id
    }));
   }
  }
