import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password ='';
   includeLetters=false;
   includeNumbers=false;
   includeSymbols=false;
   length =0;


  onButtonClick(){
  const numbers='0123456789';
  const letters='abcdefghijklmnopqrstuvwxyz'
  const symbols ='!@#$%&&*()=+';
   let validChars='';

   if(this.includeLetters){
    validChars+=letters;
   }
   if(this.includeNumbers){
    validChars+=numbers;
   }

   if(this.includeSymbols){
    validChars+=symbols;
   }
   let generatedPassword='';
   for( let i=0;i<this.length;i++){
     const index=Math.floor(Math.random()*validChars.length)
      generatedPassword+=validChars[index];
       
    }
this.password=generatedPassword;

    
  }

  onChangeUseLetters(){
   this.includeLetters=!this.includeLetters;
  }

  onChangeUseNumbers(){
   this.includeNumbers=!this.includeNumbers;
  }

  onChangeUseSymbols(){
  this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event:any){
    let value=parseInt(event.value);
    if(! isNaN(value)){
      this.length=value;
    }

  }
}
