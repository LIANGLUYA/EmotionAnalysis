import mongoose, { Schema } from "mongoose";
const EmoReadWriteSchema = new mongoose.Schema({
  UserID: String,
  NoteID: String,
  NoteTitle: String,
  NoteContent: String,
  Views: String,
  ActionType: {               
    type: String,
    default: 'Reading'
  },
  Timestamp: String,
  NoEmotion:{
    type: Number,
    default: 1
  },
  Joyful:{
    type: Number,
    default: 0
  },
  Curious:{
    type: Number,
    default: 0
  },
  Surprised:{
    type: Number,
    default: 0
  },
  Confused:{
    type: Number,
    default: 0
  },
  Anxious:{
    type: Number,
    default: 0
  },
  Frustrated:{
    type: Number,
    default: 0
  },
  Bored:{
    type: Number,
    default: 0
  },
  Joyful_Intensity:{
    type: Number,
    default: 0
  },
  Curious_Intensity:{
    type: Number,
    default: 0
  },
  Surprised_Intensity:{
    type: Number,
    default: 0
  },
  Confused_Intensity:{
    type: Number,
    default: 0
  },
  Anxious_Intensity:{
    type: Number,
    default: 0
  },
  Frustrated_Intensity:{
    type: Number,
    default: 0
  },
  Bored_Intensity:{
    type: Number,
    default: 0
  }
});

const EmoSurveySchema = new mongoose.Schema({
  UserID:String,
  Timestamp: String,
  Joyful:{
    type: Number,
    default: 0
  },
  Curious:{
    type: Number,
    default: 0
  },
  Surprised:{
    type: Number,
    default: 0
  },
  Confused:{
    type: Number,
    default: 0
  },
  Anxious:{
    type: Number,
    default: 0
  },
  Frustrated:{
    type: Number,
    default: 0
  },
  Bored:{
    type: Number,
    default: 0
  },
  Inconducive: String,
  Reason: String,
  Remarks: String,
});

const EmoRegSchema = new mongoose.Schema({
  UserID: String,
  GroupMembers:String,
  Timestamp:String,
  Visualization:String,
  Challenges:String,
  ImprovementWays:String,
  PositivePlan:String,
  Action:String,
});

const EmoLogDataSchema = new mongoose.Schema({
  UserID: String,
  Timestamp:String,
  InteractedElement:String,
  ActionType:String,
  Output:String,
  Title:String,
  Authors:String,
  Body:String,
  Scaffolds:String,
  Created:String,
  Views:String,
  Buildson:String,
  EditBy:String,
  ReadBy:String,
  LastEditedAt:String
});


const TestSchema = new mongoose.Schema({
  testID: String,
});

const EmotionSchema = new mongoose.Schema({
  id: String,
  name:String
});


const EmoReadWrite = mongoose.model('EmoReadWrite', EmoReadWriteSchema, 'EmoReadWrite');
const EmoSurvey = mongoose.model('EmoSurvey', EmoSurveySchema, 'EmoSurvey');
const EmoReg = mongoose.model('EmoReg', EmoRegSchema, 'EmoReg');
const Test = mongoose.model('Test', TestSchema, 'Test');

const EmoLogData = mongoose.model('EmoLogData', EmoLogDataSchema, 'EmoLogData');

const Emotion = mongoose.model('Emotion', EmotionSchema, 'Emotion');

export { EmoReadWrite,EmoSurvey,EmoReg ,Test,Emotion,EmoLogData};
