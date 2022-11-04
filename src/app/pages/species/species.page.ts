import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-species',
  templateUrl: './species.page.html',
  styleUrls: ['./species.page.scss'],
})
export class SpeciesPage implements OnInit {

  species : Observable<any>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.species = this.http.get('https://swapi.dev/api/species');
  }

  openDetails(specimen) {
    let split = specimen.url.split('/');
    let specimenId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/specimen/${specimenId}`);
    }

}
