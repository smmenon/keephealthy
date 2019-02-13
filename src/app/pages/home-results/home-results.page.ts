import { Component } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController } from '@ionic/angular';

// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { ImagePage } from './../modal/image/image.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';

@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage {
  searchKey = '';
  yourLocation = 'Bangalore';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  testsImg = 'assets/img/tests.png';
  reportsImg = 'assets/img/reports.png';
  hospNetImg = 'assets/img/icon-hospital.png';

  scrollViewOptions: any = {
    layout: 'fixed',
    itemWidth: 134,
    snap: false
}

newGames = [{
    image: 'https://img.mobiscroll.com/demos/worms3.png',
    title: 'Worms 3',
    dev: 'Team 17 Digital Limited',
    rank: 4.2
}, {
    image: 'https://img.mobiscroll.com/demos/candycrush.png',
    title: 'Candy Crush Saga',
    dev: 'King',
    rank: 4.3
}, {
    image: 'https://img.mobiscroll.com/demos/angrybirds.png',
    title: 'Angry Birds',
    dev: 'Rovino',
    rank: 4.4
}, {
    image: 'https://img.mobiscroll.com/demos/nfs.png',
    title: 'Need for Speed™ No Limits',
    dev: 'ELECTRONIC ARTS',
    rank: 4.3
}, {
    image: 'https://img.mobiscroll.com/demos/heartstone.png',
    title: 'Hearthstone',
    dev: 'Blizzard Entertainment Inc.',
    rank: 4.2
}, {
    image: 'https://img.mobiscroll.com/demos/fruitninja.png',
    title: 'Fruit Ninja',
    dev: 'Halfbrick Studios',
    rank: 4.3
}, {
    image: 'https://img.mobiscroll.com/demos/subwaysurf.png',
    title: 'Subway Surfers',
    dev: 'Kiloo',
    rank: 4.4
}, {
    image: 'https://img.mobiscroll.com/demos/templerun.png',
    title: 'Temple Run',
    dev: 'Imangi Studios',
    rank: 4.3
}, {
    image: 'https://img.mobiscroll.com/demos/minecraft.png',
    title: 'Minecraft: Pocket Edition',
    dev: 'Mojang ',
    rank: 4.4
}];

mediaVideo = [{
    image: 'https://img.mobiscroll.com/demos/vlc.png',
    title: 'VLC for Android',
    dev: 'Videolabs ',
    rank: 4.3
}, {
    image: 'https://img.mobiscroll.com/demos/realplayer.png',
    title: 'RealPlayer®',
    dev: 'RealNetworks, Inc.',
    rank: 4.3
}, {
    image: 'https://img.mobiscroll.com/demos/motogal.png',
    title: 'Motorola Gallery',
    dev: 'Motorola Mobility LLC. ',
    rank: 3.9
}, {
    image: 'https://img.mobiscroll.com/demos/revesemov.png',
    title: 'Reverse Movie FX',
    dev: 'Bizo Mobile',
    rank: 4.6
}, {
    image: 'https://img.mobiscroll.com/demos/sure.png',
    title: 'SURE Universal Remote',
    dev: 'Tekoia Ltd.',
    rank: 4.4
}, {
    image: 'https://img.mobiscroll.com/demos/ringdriod.png',
    title: 'Ringdroid',
    dev: 'Ringdroid Team ',
    rank: 4.4
}, {
    image: 'https://img.mobiscroll.com/demos/funny.png',
    title: 'Funny Camera - Video Booth Fun',
    dev: 'Kiloo',
    rank: 4.1
}, {
    image: 'https://img.mobiscroll.com/demos/gif.png',
    title: 'GIF Keyboard',
    dev: 'IRiffsy, Inc.',
    rank: 4.1
}, {
    image: 'https://img.mobiscroll.com/demos/bs.png',
    title: 'BSPlayer',
    dev: 'BSPlayer media',
    rank: 4.4
}, {
    image: 'https://img.mobiscroll.com/demos/vac.png',
    title: 'video audio cutter',
    dev: 'mytechnosound ',
    rank: 4.3
}];

newUpdated = [{
    image: 'https://img.mobiscroll.com/demos/netflix.png',
    title: 'Netflix',
    dev: 'Netflix, Inc. ',
    rank: 4.4
}, {
    image: 'https://img.mobiscroll.com/demos/colorfy.png',
    title: 'Colorfy - Coloring Book Free',
    dev: 'Fun Games For Free',
    rank: 4.7
}, {
    image: 'https://img.mobiscroll.com/demos/wego.png',
    title: 'Wego Flights & Hotels',
    dev: 'Wego.com',
    rank: 4.3
}, {
    image: 'https://img.mobiscroll.com/demos/ali.png',
    title: 'Alibaba.com B2B Trade App',
    dev: 'Alibaba.com Hong Kong Limited ',
    rank: 4.1
}, {
    image: 'https://img.mobiscroll.com/demos/5k.png',
    title: '5K Run: 5K Runner®',
    dev: 'Fitness22',
    rank: 4.4
}, {
    image: 'https://img.mobiscroll.com/demos/nuzzelnws.png',
    title: 'Nuzzel News',
    dev: 'Nuzzel, Inc.',
    rank: 4.3
}, {
    image: 'https://img.mobiscroll.com/demos/solarsysexpl.png',
    title: 'Solar System Explorer 3D',
    dev: 'Neil Burlock',
    rank: 4.5
}, {
    image: 'https://img.mobiscroll.com/demos/elevate.png',
    title: 'Elevate - Brain Training',
    dev: 'Elevate Labs',
    rank: 4.5
}, {
    image: 'https://img.mobiscroll.com/demos/deezer.png',
    title: 'Deezer Music',
    dev: 'Deezer Mobile',
    rank: 4.1
}];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) {

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  settings() {
    this.navCtrl.navigateForward('settings');
  }

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({
      header: 'Change Location',
      message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: async (data) => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

}
