import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { CountryServiceService } from 'src/app/services/country-service.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  public countries: any;
  public states: any;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public countryService: CountryServiceService,
    ) { 
      this.countryService.getCountries().subscribe((data) => {
        console.log("what is in the data ", data);
        this.countries = data;
      }); 
    }

  ngOnInit() {
  }

  filterStates(param: any): void {
    let val: string = param;
    // if(val.trim() !== ''){
    //   var temp: string = this.countries.filter((item) => {
    //     return item.country.toLowerCase().indexOf(val.toLowerCase()) > -1;
    //   })
    // }
    for (let index = 0; index < this.countries.length; index++) {
      // console.log("what is in the country ", this.countries[index].country);
      if (this.countries[index].country === val) {
        this.states = this.countries[index].states;
        // console.log("what is in the states ", this.countries[index].states);
      }
    }
    // console.log("what is in the states ", this.states);
  }

  async sendData() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        cssClass: 'bg-profile',
        message: 'Your Data was Edited!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      this.navCtrl.navigateForward('/home-results');
    });
  }

}
