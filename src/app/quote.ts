

export class Quote {
  likes: number;
  dislikes: number;
  
  

  constructor(public id:number,public name:string,public title:string,public quote:string,public author:string, public datePosted: Date, public showInfo :boolean){ 

}

}
