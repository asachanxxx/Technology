import { Component, OnInit, ViewChild } from '@angular/core';
import { Queue, Demo } from '../Queue';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(public _hhtp: HttpClient, public _router:Router) {
    //this.sendDictionary();
    var y = [];
    // var x = '{"state":'california'}' 
    //y.push({'state':'california'});
    //y.push(JSON.parse(x));

    let cityfacts: { [id: string]: string; } = { "p1": "Asanga", "p2": "Chan" };
    y.push(cityfacts)
    console.log("persons :", y);
  }

  @ViewChild('contactForm') contactForm;

  ngOnInit() {
    let Qu: Queue<Demo> = new Queue<Demo>();
    Qu.push({ val1: 1, val2: "Asanga1" });
    Qu.push({ val1: 2, val2: "Asanga2" });

    console.log(Qu.pop());
  }
  message: any;
  message1: any;
  message2: any;
  message3: any;

  getMailSender(message) {
    console.log("message  ", message)
    if (this.contactForm.valid) {
      console.log("this.contactForm  ", this.contactForm)
    }
  }

  sendDictionary() {
    var x = "{'state':california'}"
    let cityfacts: { [id: string]: string; } = { "p1": "Asanga", "p2": "Chan" };
    this._hhtp.post("http://localhost:8055/jsontest/QUE53352597/", cityfacts).subscribe(
      data => {
        console.log(data);
      }
    )
  }

  GetDictionary() {
    var x = "{'state':california'}"
    let cityfacts: { [id: string]: string; } = { "p1": "Asanga", "p2": "Chan" };
    this._hhtp.get("http://localhost:8055/jsontest/FilterJson/?id=1", cityfacts).subscribe(
      data => {
        console.log(data);
      }
    )
    this._router.navigate(['/test2']);
  }


}



