import { Component } from '@angular/core';
import {Article} from "../../utils/types/Article";
import {Panier} from "../../utils/types/Panier";

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  is_logged = true;
  role? : 'ADMIN' | 'USER' | 'SUPER' = 'ADMIN';
  //name: string | undefined;
  name?: string;
  //name!: string;

  produits = ['Ordinateur', 'Choucroute', 'Pantoufles', 'Canapé'];

  all_articles: Article[] = [
    {id: 1, title: 'Galette Frangipane', description: `C'est bon`, quantity: 15},
    {id: 2, title: 'Galette Pommes Caramélisées', description: 'Ça croustille', quantity: 0},
    {id: 3, title: 'Galette Compote de Coings', description: 'Ça croustille', quantity: 10},
    {id: 4, title: 'Galette Noisettes', description: 'Ça croustille', quantity: 0},
    {id: 5, title: 'Galette Framboise Rhubarbe', description: 'Ça croustille', quantity: 15},
  ];

  my_panier: Panier = {products: [], total: 0}

  article_filter: 'all' | 'dispo' = 'all';
  recherche = '';

  message = 'HelLO wOrLd';
  pi = Math.PI;
  today = new Date();



  login() {
    this.is_logged = !this.is_logged;
    if(!this.is_logged) {
      this.role = undefined;
    }
  }

  addToPanier(new_article: Article) {
    const copy = {...new_article};
    this.my_panier.products.push(copy);
    this.my_panier.total += 20;
    new_article.quantity--;
    if(new_article.quantity <= 0) {
      // pour forcer la màj du pipe filter
      this.all_articles = [...this.all_articles];
    }
  }

  get filteredArticle() {
    console.log('in get filtered article');
    return this.all_articles.filter(a => a.quantity > 0);
  }

  handleInput(event: Event) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
    this.recherche = input.value;
  }

}
