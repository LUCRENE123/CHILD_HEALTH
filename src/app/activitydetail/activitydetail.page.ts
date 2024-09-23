import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../service/activity.service';
import { NavController, AlertController } from '@ionic/angular'; // Import correct d'AlertController
@Component({
  selector: 'app-activity-detail',
  templateUrl: './activitydetail.page.html',
  styleUrls: ['./activitydetail.page.scss'],
})
export class ActivityDetailPage implements OnInit {
  activitydetail: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private activityService: ActivityService,
    private alertController: AlertController // Assurez-vous que alertController est injecté correctement
  ) {}

  ngOnInit() {
    const doctorId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.activityService.getActivity(doctorId).subscribe(
      (data) => {
        this.activitydetail = data;
      },
      (error) => {
        console.log('Error fetching doctor details:', error);
        this.presentErrorAlert(); // Afficher une alerte en cas d'erreur
      }
    );
  }

  async presentErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Erreur',
      message: 'Une erreur est survenue lors de la récupération des détails du médecin.',
      buttons: ['OK']
    });

    await alert.present();
  }
  consulterMedecin() {
    // la logique pour consulter le médecin:
    this.navCtrl.navigateForward('/consultation'); // Naviguer vers une page de consultation
    console.log('Consulter médecin clicked');
  }
}
