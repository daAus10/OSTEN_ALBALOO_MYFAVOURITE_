import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../../helper-files/Pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getContent(): Observable<Pokemon[]> {
    console.log("Getting the content from the server");
    return this.http.get<Pokemon[]>("api/content");
  }

  addContent(newContentItem: Pokemon): Observable<Pokemon>{
    console.log("Adding a new pokemon: ", newContentItem);
    return this.http.post<Pokemon>("api/content", newContentItem, this.httpOptions);
  }

  // content item needs to have the id set correctly
  updateContent(contentItem: Pokemon): Observable<any>{
    return this.http.put("api/content", contentItem,  this.httpOptions);
  }
  getContentItem(id: number): Observable<Pokemon>{
    console.log("Retrieving OBSERVABLE content item");
    return this.http.get<Pokemon>("api/content/" + id);
  }
}
