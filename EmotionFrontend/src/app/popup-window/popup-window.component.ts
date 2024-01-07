import { Component, OnInit , TemplateRef, ViewChild } from '@angular/core';
import { DialogService, ModalService } from 'ng-devui/modal';
import {FormLayout} from "ng-devui";
import _default from "chart.js/dist/plugins/plugin.tooltip";
import {EmoReadWrite} from "../services/emotion";
import type = _default.defaults.animations.numbers.type;
import {EmotionService} from "../services/emotion.service";
@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css']
})
export class PopupWindowComponent implements OnInit {
  layoutDirection: FormLayout = FormLayout.Columns;
  isShow = false;
  color = ['#fac20a','#beccfa','#fac20a','#c7000b'];
  constructor(private emotionService: EmotionService) { }
  ngOnInit(): void {

  }
  radioOptions = [{
    id: 0,
    label: "No, I don't fell anything"
  }, {
    id: 1,
    label: 'Yes, I feel a certain emotion'
  }];


  emotionOptions = [
    {
      id : '1',
      name: 'Joyful 😃',
      value: 0,
    },
    {
      id : '2',
      name: 'Curious 😳',
      value: 0,
    },
    {
      id : '3',
      name: 'Surprised 😲',
      value: 0,
    },
    {
      id : '4',
      name: 'Confused 😕',
      value: 0,
    },
    {
      id : '5',
      name: 'Anxious 😰',
      value: 0,
    },
    {
      id : '6',
      name: 'Frustrated 😣',
      value: 0,
    },
    {
      id : '7',
      name: 'Bored 🥱',
      value: 0,
    }
  ];
  select1:any[]=[];
  radioValue={};
  fisrtChange(item: string): void {
    console.log(Number(item));
    if (Number(item)==0){
      this.isShow=false;
    }else {
      this.isShow=true;
    }
  }


  secondChange(item: string): void {
    console.log(item);
    console.log(this.select1);
    console.log(this.select1.length);
  }


  submitForm({}) {
    const formData={
      noteID:"noteID123",
      author:"auther",
      noEmotion:this.radioValue,
      emotions:this.select1,
    }
    console.log(formData);
    this.emotionService.addEmoReadWrite(formData).subscribe(EmoReadWrite => {
      console.log(EmoReadWrite);
    });
  }
  // submitForm({}) {
  //   const formData={
  //     id:"noteID123",
  //     userID:"userID123",
  //     author:"auther",
  //     noEmotion:this.radioValue,
  //     emotions:this.select1,
  //   }
  //   console.log(formData);
  //   this.emotionService.addEmotion(formData).subscribe(Emotion => {
  //     console.log(Emotion);
  //   });
  // }
}

