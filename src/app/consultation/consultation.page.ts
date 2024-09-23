import { Component } from '@angular/core';
import { ActivityService } from '../service/activity.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.page.html',
  styleUrls: ['./consultation.page.scss'],
})
export class ConsultationPage {

  consultation = {
    nomPrenomEnfant: '',
    ageEnfant: null,
    sexeEnfant: '',
    symptomesEnfant: ''
  };

  constructor(
    private consultationService: ActivityService,
    private navCtrl: NavController,
    private toastController: ToastController
  ) { }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }

  submitConsultation() {
    this.consultationService.sendConsultation(this.consultation).subscribe(
      (response) => {
        this.presentToast('Consultation envoyée avec succès !', 'success');
        this.navCtrl.navigateForward('/activitydetail')
      },
      (error) => {
        this.presentToast('Erreur lors de l\'envoi de la consultation.', 'danger');
        console.error('Erreur lors de l\'envoi de la consultation :', error);
      }
    );
  }
}
