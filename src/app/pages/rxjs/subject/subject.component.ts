import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{

  ngOnInit() {
    this.createSubject();
    this.createBehaviorSubject();
    this.createReplaySubject();
  }

  createSubject() {
    const subject = new Subject<string>();

    subject.next('Jamais lu car pas de souscription')

    // Ailleurssss, dans une galaxie lointaine
    const souscription = subject.subscribe((value) => {
      console.log('[Subject]', value);
    });
    //
    subject.next('Hello');
    subject.next('World');
    souscription.unsubscribe();
    subject.next('Bye');
  }

  createBehaviorSubject() {
    const subject = new BehaviorSubject<string>('Default');
    subject.next('Hello');
    const souscription = subject.subscribe((value) => {
      console.log('[BehaviorSubject]', value);
    });
    subject.next('World');
    souscription.unsubscribe();
  }

  createReplaySubject() {
    const subject = new ReplaySubject<string>(2);
    subject.next('Hello'); // pas lu
    subject.next('World');
    subject.next('Bye');
    const souscription = subject.subscribe((value) => {
      console.log('[ReplaySubject]', value);
    });
    subject.next('Toujours deboutssss');
    subject.next('Toujours vivantssssss');
    souscription.unsubscribe();
    subject.next('plus maintenant'); // pas lu
  }
}
