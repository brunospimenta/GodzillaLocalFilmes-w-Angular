import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FilmesService } from 'src/app/shared/service/filmes.service';
import { Filmes } from 'src/app/shared/models/filmes';

@Component({
  selector: 'app-filmes-list',
  templateUrl: './filmes-list.component.html',
  styleUrls: ['./filmes-list.component.css']
})
export class FilmesListComponent implements OnInit {

  filmes: Filmes[];


  constructor(
    public filmesService: FilmesService,
    public sanitizer: DomSanitizer
  ) { }



  ngOnInit(): void {
    this.getFilmes();
  }

getFilmes(){
  this.filmesService.getFilmes().subscribe(
    data => {
      this.filmes = data.content;
      this.filmes.forEach(filme =>{
        filme.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(filme.imageUrl)
      });
    }
  )
}

}
