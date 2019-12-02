export class Quote {
  showDetails: boolean;
  constructor(public name: string, public sentence: string, public published: Date) {
    this.showDetails = false;
  }
}
