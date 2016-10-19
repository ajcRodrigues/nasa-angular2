import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class CarouselService {

  private HEADERS = new Headers({'Content-Type': 'application/json'});
  private API_KEY = 'n215fKTdRiirfSckV35Vz7dcTHIpXPrJwy4aFK6E';
  private NASA_BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';

  constructor(private http: Http) { 

  }

  getMarsAlbums(date) : Promise<any[]> {
    let url = this.NASA_BASE_URL + 'earth_date=' + date + '&api_key=' + this.API_KEY;
    
    // let url = 'https://jsonplaceholder.typicode.com/posts/1';
    // console.log(url);

    return this.http.get(url, this.HEADERS)
              .toPromise()
              .then(response => response.json().photos as any[] )
              .catch( this.handleError );
  }

  private handleError(error: any) : Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
