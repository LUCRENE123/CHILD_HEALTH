import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  async onRegister() {
    if (!this.registerData.name || !this.registerData.email || !this.registerData.password || !this.registerData.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Erreur',
        message: 'Veuillez remplir tous les champs obligatoires.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
  
    if (this.registerData.password !== this.registerData.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Erreur',
        message: 'Les mots de passe ne correspondent pas.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.authService.registerPatient(this.registerData).subscribe(
      async (response) => {
        const alert = await this.alertController.create({
          header: 'Succès',
          message: 'Inscription réussie ! Veuillez vous connecter.',
          buttons: ['OK']
        });
        await alert.present();
        this.goToLogin('patient');
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Erreur',
          message: 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.',
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }

  goToLogin(userType: string) {
    this.navCtrl.navigateForward(['/tab1'], { state: { userType } });
  }

  ngOnInit() {}
}
