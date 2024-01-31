import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EmotionService} from "../services/emotion.service";
import {EmoReadWrite, EmoSurvey} from "../services/emotion";
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-emotion-rating',
  templateUrl: './emotion-rating.component.html',
  styleUrl: './emotion-rating.component.css'
})
export class EmotionRatingComponent {
  title: string = '';
  datasetLabel: string = '';

  constructor(private route: ActivatedRoute,
    private emotionService: EmotionService,
    private timeService: TimeService) { }

  // Assuming you have a property to store the filtered data
  filteredEmoReadWrite: EmoReadWrite[] = [];
  ngOnInit() {
    // Subscribe to changes in the route parameters
    this.route.queryParams.subscribe(params => {
      // Retrieve the 'title' parameter from the query parameters
      this.title = params['title'];
      this.datasetLabel = params['datasetLabel'];

      // Check if 'title' parameter exists before using it
    if (this.title) {
      // Call the function to filter EmoSurvey objects based on the 'title'
      this.getEmoReadWriteByEmotionTitle(this.title, this.datasetLabel).then(filteredData => {
        // Store the filtered data in the component property
        this.filteredEmoReadWrite = filteredData;
      });
    }
    });
  }

  currentSectionNumber: number = 1;

    
  public getEmoReadWriteByEmotionTitle(emotionTitle: string, emotionLabel: string): Promise<EmoReadWrite[]> {
    return new Promise<EmoReadWrite[]>(resolve => {
      this.emotionService.getEmoReadWrite().subscribe(emoReadWriteList => {
        // Filter the list based on the emotion title and any emotion having a value of 1
        const filteredList = emoReadWriteList.filter(emoReadWrite => {
          emoReadWrite.Timestamp = this.timeService.convertToDate(Number(emoReadWrite.Timestamp)*1000);
          const hasEmotionWithValueOne = Object.keys(emoReadWrite).some((key: string) => {
            const typedKey = key as keyof EmoReadWrite;  // Type assertion
          
            if (typedKey.toLowerCase() == emotionTitle.toLowerCase() && typeof emoReadWrite[typedKey] === 'number' && emoReadWrite.ActionType == emotionLabel ) {
              return emoReadWrite[typedKey] == 1;
            }
            return false;
          });
          
  
          return hasEmotionWithValueOne;
        });
  
        resolve(filteredList);
      });
    });
  }
  
  
}
