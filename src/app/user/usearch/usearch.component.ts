import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usearch',
  templateUrl: './usearch.component.html',
  styleUrls: ['./usearch.component.scss']
})
export class UsearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goMainMenu(){
    this.router.navigate(['menu/books']);

  }
}
