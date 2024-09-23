import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { ActivityService } from '../service/activity.service';
import { ConsultationDetailModalComponent } from '../consultation-detail-modal/consultation-detail-modal.component';

@Component({
  selector: 'app-consultation-management',
  templateUrl: './consultation-management.page.html',
  styleUrls: ['./consultation-management.page.scss'],
})
export class ConsultationManagementPage implements OnInit {

  consultations: any[] = [];

  constructor(
    private activityService: ActivityService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private alertController: AlertController // Injectez AlertController
  ) { }

  ngOnInit() {
    this.loadConsultations();
  }

  loadConsultations() {
    this.activityService.getConsultations().subscribe(
      (data: any[]) => {
        this.consultations = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des consultations :', error);
      }
    );
  }

  async handleConsultation(consultation: any) {
    const modal = await this.modalController.create({
      component: ConsultationDetailModalComponent,
      componentProps: { consultation }
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        const { approved, consultation } = data.data;
        if (approved) {
          console.log('Consultation approuvée :', consultation);
          this.updateConsultationStatus(consultation.id, 'approved');
          // Naviguer vers le chat vidéo après approbation
          this.navigateToVideoChat(consultation.id);
        } else {
          console.log('Consultation rejetée :', consultation);
          this.updateConsultationStatus(consultation.id, 'rejected');
          this.presentDoctorBusyAlert(); // Afficher l'alerte de médecin occupé
        }
      }
    });

    return await modal.present();
  }

  updateConsultationStatus(consultationId: string, status: string) {
    const consultation = this.consultations.find(c => c.id === consultationId);
    if (consultation) {
      consultation.status = status;
    }
  }

  navigateToVideoChat(consultationId: string) {
    // Ici, remplacer 'remote-peer-id' par l'ID réel du pair distant obtenu du backend
    const remotePeerId = 'remote-peer-id';
    this.navCtrl.navigateForward(`/video-chat/${remotePeerId}`);
  }

  async presentDoctorBusyAlert() {
    const alert = await this.alertController.create({
      header: 'Médecin Occupé',
      message: 'Le médecin est actuellement occupé. Veuillez réessayer plus tard.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
