import {Page, ViewController, NavController, Modal} from 'ionic-angular';
import { SliderPage } from '../slider/slider';


@Page({
  templateUrl: 'build/pages/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
	static get parameters() {
    return [[NavController], [ViewController]];
  }

	constructor(nav, view) {
    this.nav = nav;
    this.view = view;
  }

	openModal () {
    let modal = Modal.create(SliderPage);
    this.nav.present(modal);
	}
}
