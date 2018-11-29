import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Tableau d'objets comprenants tous les posts
  posts = [
    {
      name: 'Mon premier post',
      content: "Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire.Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av.J.- C., le rendant vieux de 2000 ans.Un professeur du H.",
      loveIts: 1,
      created_at: new Date()

    },
    {
      name: 'Mon deuxième post',
      content: "ampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum.",
      loveIts: -1,
      created_at: new Date()
    },
    {
      name: 'Un autre post',
      content: "l provient en fait des sections 1.10.32 et 1.10.33 du De Finibus Bonorum et Malorum (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique.",
      loveIts: 0,
      created_at: new Date()
    }
  ]

}
