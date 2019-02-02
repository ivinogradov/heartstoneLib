import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertCtrl: AlertController) { }

  /**
   * @method showAlert
   * @param message: string
   **/
  public async showAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: 'Heartstone Library',
      message,
      buttons: [ 'OK' ]
    });

    await alert.present();
  }
}
