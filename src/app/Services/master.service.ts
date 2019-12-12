import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Message } from '../Libraries/Message';


const baseURL: string = "/";

@Injectable()
export class MasterService{

    constructor(private httpClient: HttpClient) { }


	get(url: string) : any{
		return this.httpClient.get(this.generateURL(url), this.getHeaders());
	}

	post(url: string, Body: any) {
		Message.clear();
		return this.httpClient.post(this.generateURL(url), Body, this.getHeaders());
	}

	put(url: string, Body: any) {
		Message.clear();
		return this.httpClient.put(this.generateURL(url), Body, this.getHeaders());
	}

	delete(url: string) {
		Message.clear();
		return this.httpClient.delete(this.generateURL(url), this.getHeaders());
	}
	

	generateURL(URL: string){

		return baseURL + URL.trim();
	}

    
	getHeaders() {
		const httpOptions = {
			headers: new HttpHeaders({
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/json',
				"Authorization": this.getToken()
			})
		};
		return httpOptions;
	}


	getToken() {
        return "Bearer " + localStorage.getItem('token');
	}
	
}
