import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/auth'; // URL de l'API pour l'authentification

  constructor(private http: HttpClient) {}

  // Méthode pour connecter l'utilisateur
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }

  // Méthode pour l'inscription des patients
  registerPatient(patientData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register/patient`, patientData);
  }

  // Méthode pour l'inscription des médecins
  registerDoctor(doctorData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register/doctor`, doctorData);
  }

  // Méthode pour déconnecter l'utilisateur
  logout(): void {
    // Logique de déconnexion, par exemple en supprimant le token du stockage local
    localStorage.removeItem('authToken');
  }

  // Méthode pour vérifier si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    // Logique pour vérifier si l'utilisateur est authentifié, par exemple en vérifiant le token
    return !!localStorage.getItem('authToken');
  }
}
