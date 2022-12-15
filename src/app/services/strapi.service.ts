import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StrapiService {
  constructor(private http: HttpClient) {
  }

  private apiUrl: string = environment.apiUrl;

  getQuizzes(): Observable<any> {
    return this.http.get(this.apiUrl + '/quizzes');
  }

  getQuiz(id: number): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams
      .set('populate[0]', 'questions')
      .set('populate[1]', 'questions.type');

    return this.http.get(this.apiUrl + `/quizzes/${id}`, {params: queryParams});
  }
}
