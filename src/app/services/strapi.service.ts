import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StrapiService {
  constructor(private http: HttpClient) {}

  private apiUrl: string = environment.apiUrl;

  getQuizzes(): Observable<any> {
    return this.http.get(this.apiUrl + '/quizzes');
  }

  getQuiz(id: number): Observable<any> {
    return this.http.get(this.apiUrl + `/quizzes/${id}`);
  }
}
