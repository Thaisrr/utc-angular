import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {
  catchError, debounceTime,
  distinct, distinctUntilChanged,
  filter, finalize, fromEvent,
  interval,
  map,
  Observable,
  of,
  Subscription,
  take,
  tap,
  toArray
} from "rxjs";

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, AfterViewInit, OnDestroy{

  @ViewChild('search_value') input!: ElementRef;
  // input : la balise input

  my_observable = new Observable<string>((obs) => {
    obs.next('Hello');
    obs.next('Coucou');
    obs.next('Ça va ?');
    obs.next('Moi nickel !');
    obs.error('BOOM !'); // stop les souscriptions
    obs.complete(); // stop les souscriptions
    obs.next('Ce message ne sera jamais reçu, c très triste');
  });
  message?: string;

  interval$ = interval(1000);
  // Timer qui s'incrémente et renvoie sa valeur toutes le 1s
  // Souscrire dans le ngOnInit
  // Afficher la nouvelle valeur du compteur
  // Afficher "fin du compteur" au complete
  // Jouer avec l'appli -> Que se passe-t-il ?

  subscription?: Subscription;

  api_response$ = of({
    status: 200,
    headers: {},
    data: {
      candies: ["M&M's", 'Maoms', 'Dragibus', 'Langues de chat', 'Smarties']
    }
  });

  books$ = of(
    {title: 'Frankenstein', author: 'Mary Shelley', dispo: true},
    {title: 'Frankenstein', author: 'Mary Shelley', dispo: true},
    {title: 'Bilbo le Hobbit', author: 'Tolkien', dispo: false},
    {title: 'Le Silmarillion', author: 'Tolkien', dispo: true},
    {title: "L'Assassin Royal", author: 'Robin Hobb', dispo: true},
    {title: 'Frankenstein', author: 'Marie Shelley', dispo: true},
    {title: 'Livre chiant 1', author: 'Marie Shelley', dispo: true},
    {title: 'Livre chiant 2', author: 'Marie Shelley', dispo: true},
    {title: 'Livre chiant 3', author: 'Marie Shelley', dispo: true},
    {title: 'Livre chiant 4', author: 'Marie Shelley', dispo: true},
    {title: 'Livre chiant 5', author: 'Marie Shelley', dispo: true},
    {title: 'Livre chiant 6', author: 'Marie Shelley', dispo: true},
  )

  ngOnInit() {
    // Syntaxe 1 : subscribe prend la callback du next en param
    this.my_observable.subscribe(data => {
      console.log('Data received : ', data);
      this.message = data;
    });

    // Syntaxe 2: subscribe prend un objet en param
    this.my_observable.subscribe({
      next: (data) => console.log('2eme subscribe : ' ,data),
      error: (err) => console.log('Erreur : arrêt de la souscription, cause : ', err),
      complete: () => console.log('Observable complété sans erreur')
    });

    /*
    this.subscription = this.interval$.subscribe({
      next: (count) => console.log('[Counter]', count),
      complete: () => console.log('Fin du timer')
    });

     */

    // Appel du service dans le onInit
    this.myService().subscribe(res => console.log('[Subscribe] ', res));

    this.books$.pipe(
      take(6),
      filter(book => book.dispo), // arrête les obs qui ne répondent pas à la condition
      distinct(book => book.title && book.author), // Filtre ceux qui ont le même titre
      map(book => `"${book.title}", by ${book.author}`),
      toArray(), // créer un tableau avec tous les observables renvoyés
      finalize(() => console.log(`Fin de l'observable ( error ou complete )`))
    ).subscribe(res => console.log('[Books : ]', res));
  } // fin du ngOnInit

  //dans le faux service
  myService(): Observable<string[]> {
    return this.api_response$.pipe(
      tap((res) => console.log('[tap] ', res)), // pour agir sur la réponse avant le subscribe
      map((res) => res.data.candies), // pour modifier la réponse
      tap((candies) => console.log('[tap 2] ', candies)),
      catchError((err) => {throw new Error('Mon message d\'erreur user friendly')}),
      catchError((err) => {
        // gérer l'erreur puis
        return of([])
      })
    )
  }

  ngAfterViewInit() {
    // fromEvent ( element Html à surveiller, événement )
    this.subscription = fromEvent<any>(this.input.nativeElement, 'input').pipe(
      map(event => event.target.value),
      map(value => value.trim()),
      debounceTime(1000),
      distinctUntilChanged(),
      filter(val => val),
    ).subscribe(val => console.log('Recherche : ', val))
  }

  ngOnDestroy() {
    console.log('Destruction du composant');
    this.subscription?.unsubscribe();
  }

}
