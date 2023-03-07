import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  
  title = 'calculator';

  screen="";
  a:any;
  b:any;
  c:any;
  d="";
  e="";

  ngOnInit(): void {
    
  }

  //Calculadora
  enterValue(value:string){
    if ((this.b=="+") || (this.b=="-")|| (this.b=="*") || (this.b=="/")){
      this.d = this.d + value;
      this.screen = this.screen + value;
      this.c = this.d;

    }else{

      this.screen = this.screen + value;
      this.a=this.screen;

    }
  }

condition(value: string){

  this.screen=this.screen + value;
  this.b = value;
}

clear(){

  this.screen ="";
  this.a = "";
  this.b = "";
  this.c = "";
  this.d = "";
}

result(){

  if (this.b=='+'){
    this.screen = `${this.screen} = ${(parseInt(this.a) + parseInt(this.c)).toString()}`;
    this.screen = (parseInt(this.screen)+parseInt(this.c)).toString();

  }
  if (this.b=='-'){
    this.screen = `${this.screen} = ${(parseInt(this.a) - parseInt(this.c)).toString()}`;
    this.screen = (parseInt(this.screen)-parseInt(this.c)).toString();
  }
  if (this.b=='*'){
    this.screen = `${this.screen} = ${(parseInt(this.a) * parseInt(this.c)).toString()}`;
    this.screen = (parseInt(this.screen)*parseInt(this.c)).toString();
  }
  if (this.b=='/'){
    this.screen = `${this.screen} = ${(parseInt(this.a) / parseInt(this.c)).toString()}`;
    this.screen = (parseInt(this.screen)/parseInt(this.c)).toString();

  }
}

}