export class Quote {
  showDetails: boolean;
  constructor(public name: string, public sentence: string, public upVotes: number, public downVotes: number, public published: number) {
    this.showDetails = false;
  }
}
