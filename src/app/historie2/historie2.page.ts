import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historie2',
  templateUrl: './historie2.page.html',
  styleUrls: ['./historie2.page.scss'],
})
export class HISTORIE2Page implements OnInit {
    doctorHistory = [
      {
        date: '2024-06-20',
        patient: 'Jane Doe',
        notes: 'Consultation pour douleurs thoraciques. ECG normal.'
      },
      {
        date: '2024-05-15',
        patient: 'John Smith',
        notes: 'Traitement de l\'éruption cutanée avec crème stéroïde.'
      }
      // Ajoutez d'autres consultations ici
    ];
  
    ngOnInit() {
      this.loadDoctorHistory();
    }
  
    loadDoctorHistory() {
      // Chargez les consultations du médecin depuis un service ou une source de données
      // this.doctorHistory = this.myService.getDoctorHistory();
    }
  }
