import { Injectable } from '@angular/core';
import{ HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private apiUrl = 'http://localhost:3000/activities';// Exemple d'URL de votre API
  constructor(private httpClient: HttpClient) { }
 
  // Envoie la consultation au backend
  sendConsultation(consultationData: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, consultationData);
  }
  // Exemple pour récupérer toutes les consultations (peut être nécessaire pour la liste des médecins)
  getConsultations(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }
  // Récupère une consultation spécifique par son ID
  getConsultationById(consultationId: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/${consultationId}`);
  }

  // Met à jour une consultation (exemple : marquer comme vue ou répondue)
  updateConsultation(consultationId: string, updatedData: any): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}/${consultationId}`, updatedData);
  }
  // Approuve la consultation
  approveConsultation(consultationId: string): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${consultationId}/approve`, {});
  }

  // Rejette la consultation
  rejectConsultation(consultationId: string): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${consultationId}/reject`, {});
  }
  getActivity(activityId: string){
    return this.httpClient.get(API+"/"+activityId);
  }

  getActivities(){
    return this.httpClient.get(API);
  }
}

const API ="http://localhost:3000/activities"

