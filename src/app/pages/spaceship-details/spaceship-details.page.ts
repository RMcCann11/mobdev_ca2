import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spaceship-details',
  templateUrl: './spaceship-details.page.html',
  styleUrls: ['./spaceship-details.page.scss'],
})
export class SpaceshipDetailsPage implements OnInit {

  spaceship: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://swapi.dev/api/starships/${id}`).subscribe((res) => {
      this.spaceship = res;
    });
  }

}
