import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profils2',
  templateUrl: './profils2.page.html',
  styleUrls: ['./profils2.page.scss'],
})
export class Profils2Page implements OnInit {

  doctorProfile = {
    name: '',
    hospital: '',
    experience: null as number | null, // Déclarer 'experience' comme pouvant être un nombre ou null
    specialty: '',
    photo: ''
  };

  constructor() {}

  ngOnInit() {
    this.loadDoctorProfile();
  }

  loadDoctorProfile() {
    // Simuler le chargement des informations du médecin depuis une source de données
    this.doctorProfile = {
      name: 'Dr. Aminata Traore',
      hospital: 'Gabriel Toure',
      experience: 10, // Assigner un nombre à 'experience'
      specialty: 'Pediatre',
      photo: 'assets/doctor-photo.jpg'
    };
  }
}
