import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calc="";
  isClear=false;
  isAnd=false;
  inputCal(text:string){
    if(!this.isClear){
       this.calc+=text;
    }else{
      this.isClear=false;
      if(this.isAnd){
      	 this.calc+=text;
          this.isAnd=false;
      }else{
      this.calc=text;
      
      }
    }
  }
  deleteCal(){
  	this.calc=this.calc.slice(0,-1);

  }
  clearCal(){
      this.calc="";
  }
  getValue(){
  	this.isClear=true;
  	var value;
  	try  {
      value=eval(this.calc);
    
      if ( isFinite(value)) {
     	this.calc=value;
     }else{
     	alert("被除数不能为零！");
     	 this.calc="";
     }





     }

    catch(exception) {
     alert("输入有误，请重新输入！");
       this.calc="";
     }
  	
  	
  }
  andCal(){
  	if(this.isClear){
      this.isAnd=true;
  	}
  }
}
