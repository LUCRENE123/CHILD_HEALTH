import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss']
})
export class Tab2Page implements OnInit {

  patientHistory = [
    {
      date: '2024-06-20',
      doctor: 'Dr. Modibo Dicko',
      specialty: 'pediatre',
      notes: 'Patient présenté des douleurs thoraciques, ECG normal.'
    },
    {
      date: '2024-05-15',
      doctor: 'Dr. Fatoumata Ndjaye',
      specialty: 'Dermatologie',
      notes: 'Éruption cutanée traitée avec une crème stéroïde.'
    }
    // Ajoutez d'autres consultations ici
  ]

  ngOnInit(): void{
    console.log('Page Tab2 initialisée');
  }

  }

