import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-connecter',
  templateUrl: './connecter.page.html',
  styleUrls: ['./connecter.page.scss'],
})
export class ConnecterPage  implements OnInit {
  email: string | undefined;
  password: string | undefined;
  userType: string | undefined;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  ionViewWillEnter() {
    this.userType = history.state.userType;
  }

  async login() {
    if (!this.email || !this.password) {
      const alert = await this.alertController.create({
        header: 'Erreur',
        message: 'Veuillez entrer votre email et mot de passe.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.authService.login(this.email, this.password).subscribe(
      async (response) => {
        // Sauvegarder le token d'authentification
        localStorage.setItem('authToken', response.token);

        const alert = await this.alertController.create({
          header: 'Succès',
          message: 'Connexion réussie !',
          buttons: ['OK']
        });
        await alert.present();

        // Redirection en fonction du type d'utilisateur
        if (this.userType === 'patient') {
          this.navCtrl.navigateForward('/tab1');
        } else if (this.userType === 'Medecin') {
          this.navCtrl.navigateForward('/acceuil2');
        }
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Erreur',
          message: 'Email ou mot de passe incorrect.',
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }

  ngOnInit() {}
}
