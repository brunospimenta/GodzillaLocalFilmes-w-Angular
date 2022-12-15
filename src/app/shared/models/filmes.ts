import { SafeResourceUrl } from "@angular/platform-browser";

export class Filmes{
    id: string;
    titulo: string;
    diretor: string;
    dataDeLancamento: string;
    imageUrl: string;
    urlSafe: SafeResourceUrl;
}