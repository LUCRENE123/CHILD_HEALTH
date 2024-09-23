
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivityService } from '../service/activity.service';
@Component({
  selector: 'app-consultation-detail-modal',
  templateUrl: './consultation-detail-modal.component.html',
  styleUrls: ['./consultation-detail-modal.component.scss'],
})
export class ConsultationDetailModalComponent {

  @Input() consultation: any;

  constructor(
    private modalController: ModalController,
    private activityService: ActivityService
  ) {}

  approve() {
    this.activityService.approveConsultation(this.consultation.id).subscribe(
      (response) => {
        this.modalController.dismiss({ approved: true, consultation: this.consultation });
      },
      (error) => {
        console.error('Erreur lors de l\'approbation de la consultation :', error);
      }
    );
  }

  reject() {
    this.activityService.rejectConsultation(this.consultation.id).subscribe(
      (response) => {
        this.modalController.dismiss({ approved: false, consultation: this.consultation });
      },
      (error) => {
        console.error('Erreur lors du rejet de la consultation :', error);
      }
    );
  }

  close() {
    this.modalController.dismiss();
  }
}


