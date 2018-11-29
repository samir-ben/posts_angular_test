import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postName: string;
  @Input() postContent: string;
  @Input() postLike: number;
  @Input() postDate: Date;

  // Coloration en fonction du nombre de 'like'. Si + de 0 alors vert, sinon rouge
  getColor(){
    if(this.postLike > 0){
      return "green"
    } else if (this.postLike < 0){
      return "red"
    } else{
      return null
    }
  }

  // Ajoute 1 à la variable postLike (+ 1 à la valeur de la clé 'loveIts' du tableau 'posts' )
  addALike(){
    this.postLike += 1;
  }

  // Soustrait 1 à la variable postLike (- 1 à la valeur de la clé 'loveIts' du tableau 'posts' )
  removeALike(){
    this.postLike -= 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
