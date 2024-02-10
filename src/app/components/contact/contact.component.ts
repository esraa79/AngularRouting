import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  UserName:string='UserName';
  UserAge:string='UserAge';
  UserEmail:string='UserEmail';
  UserPsw:string='UserPassword';
  setName:boolean=false;
  setAge:boolean=false;
  setEmail:boolean=false;
  setPsw:boolean=false;
  
  contactForm:FormGroup = new FormGroup({
    name:new FormControl (null),
    age:new FormControl (null),
    email:new FormControl (null),
    psw:new FormControl (null) })

  setInputName(){   
    
   
   if(this.contactForm.value['name']=='')
   {
    this.setName=false;
   }
   else
   {
    this.setName=true
   }
    

  }

  setInputAge(){   
    
   console.log(this.contactForm.value['age'])
    if(this.contactForm.value['age']==null)
    {
     this.setAge=false;
    }
    else
    {
     this.setAge=true
    }
     
 
   }
   setInputEmail(){   
    
   
    if(this.contactForm.value['email']=='')
    {
     this.setEmail=false;
    }
    else
    {
     this.setEmail=true
    }
     
 
   }

   setInputPsw(){   
    
   
    if(this.contactForm.value['psw']=='')
    {
     this.setPsw=false;
    }
    else
    {
     this.setPsw=true
    }
     
 
   }


}
