export class Profile {
    constructor(public login: string,
                public id: number,
                public avatar_url: string, 
                public name: string,
                public location: string,
                public email: string,
                public bio: string
            ) {
    }
  }