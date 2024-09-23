import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page implements OnInit {

  registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    licenseNumber: '',
    specialty: '',
    hospital: '',
    yearsOfExperience: null
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  async onRegister() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Erreur',
        message: 'Les mots de passe ne correspondent pas.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const doctorData = {
      name: this.registerData.name,
      email: this.registerData.email,
      password: this.registerData.password,
      licenseNumber: this.registerData.licenseNumber,
      specialty: this.registerData.specialty,
      hospital: this.registerData.hospital,
      yearsOfExperience: this.registerData.yearsOfExperience
    };

    this.authService.registerDoctor(doctorData).subscribe(
      async (response) => {
        const alert = await this.alertController.create({
          header: 'Succès',
          message: 'Inscription réussie ! Veuillez vous connecter.',
          buttons: ['OK']
        });
        await alert.present();
        this.goToLogin('doctor');
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
    this.navCtrl.navigateForward(['/acceuil2'], { state: { userType } });
  }

  ngOnInit() {}
}
