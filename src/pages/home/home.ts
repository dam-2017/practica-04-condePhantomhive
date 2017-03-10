import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
//Integrantes:
/* Jonatan Omar Camarena Ortega
   César Antonio Pérez González
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public resultado:string;
  public n1:number;
  public n2:number;
  public op:string="";
  public isReadonly=true;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.resultado="";
    this.n1 = 0;
    this.n2 = 0;
    
  }
  suma(){
    if((this.n1)+""=="" || (this.n2)+""==""){this.showAlert("CAMPO VACÍO O DATO INVÁLIDO");return;}
    this.resultado = (+this.n1 + +this.n2)+"";
    this.op="+";
  }
  resta(){
    if((this.n1)+""=="" || (this.n2)+""==""){this.showAlert("CAMPO VACÍO O DATO INVÁLIDO");return;}
    this.resultado = (+this.n1 - +this.n2)+"";
    this.op="-";
  }
  division(){
    if((this.n1)+""=="" || (this.n2)+""==""){this.showAlert("CAMPO VACÍO O DATO INVÁLIDO");return;}
    if(this.n2==0){this.showAlert("DIVISIÓN POR 0");return;}
    this.resultado = (+this.n1 / +this.n2)+"";
    this.op="/";
  }
  multiplicacion(){
    if((this.n1)+""=="" || (this.n2)+""==""){this.showAlert("CAMPO VACÍO O DATO INVÁLIDO");return;}
    this.resultado = (+this.n1 * +this.n2)+"";
    this.op="*";
  }
  modulo(){
    if((this.n1)+""=="" || (this.n2)+""==""){this.showAlert("CAMPO VACÍO O DATO INVÁLIDO");return;}
    this.resultado = (+this.n1 % +this.n2)+"";
    this.op="%";
  }
  
  showAlert(errors) {
    let alert = this.alertCtrl.create({
      title: 'ERRORES',
      subTitle: errors,
      buttons: ['OK']
    });
    alert.present();
  }
}
