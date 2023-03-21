import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConvertBase64 {
  public convertBase64(file: any): Observable<string | ArrayBuffer> {
    return new Observable((observer) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        const base64String = fileReader.result as string;
        console.log(base64String);

        const base64Data = base64String.substring(23);
        observer.next(base64Data);
        observer.complete();
      };

      file.onerror = (error: any) => {
        observer.error(error);
      };
    });
  }
}
