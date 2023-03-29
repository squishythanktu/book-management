import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ConvertUrlToBase64 {
  constructor(private http: HttpClient) {}

  getImageBase64(url: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.http.get(url, { responseType: 'blob' }).subscribe(
        (blob: Blob) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            resolve(reader.result.toString());
          };
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
