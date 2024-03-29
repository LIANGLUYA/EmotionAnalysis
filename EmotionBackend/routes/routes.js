import express from "express";
import {Test, EmoReadWrite, EmoReg, EmoSurvey, Emotion,EmoLogData} from "../model/model.js";
const APIrouter = express.Router();

APIrouter.get("/newtest", (req, res) => {
  const newTest = new Test({
    testID: "liang"+Date.now(),
  });
  newTest
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

APIrouter.get("/emolog", (req, res) => {
  EmoLogData.find()
    .then((found) => {
      res.send(found);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

APIrouter.get("/tests", (req, res) => {
  Test.find()
    .then((found) => {
      res.send(found);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

// //Post Method

APIrouter.post("/addEmotion", (req, res) => {
  console.log(req.body);
  console.log("456");
  const newEmotion = new Emotion({
    id: req.body.id,
    name: req.body.name,
  });
  newEmotion
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});
APIrouter.post("/addEmoReadWrite", (req, res) => {
  console.log(req.body);
  console.log(req.body.NoteTitle);
  console.log("789");
  const newEmoReadWrite = new EmoReadWrite({
    UserID: req.body.UserID,
    NoteID: req.body.NoteID,
    NoteTitle: req.body.NoteTitle,
    Timestamp:req.body.Timestamp,
    ActionType:req.body.ActionType,
    Joyful:req.body.Joyful,
    Curious:req.body.Curious,
    Surprised:req.body.Surprised,
    Confused:req.body.Confused,
    Anxious:req.body.Anxious,
    Frustrated:req.body.Frustrated,
    Bored:req.body.Bored,
    NoEmotion:req.body.NoEmotion,
    Joyful_Intensity:req.body.Joyful_Intensity,
    Curious_Intensity:req.body.Curious_Intensity,
    Surprised_Intensity:req.body.Surprised_Intensity,
    Confused_Intensity:req.body.Confused_Intensity,
    Anxious_Intensity:req.body.Anxious_Intensity,
    Frustrated_Intensity:req.body.Frustrated_Intensity,
    Bored_Intensity:req.body.Bored_Intensity
  });
  newEmoReadWrite
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});
APIrouter.post("/addReg", (req, res) => {
  console.log(req.body);
  console.log("1112");
  const newReg = new EmoReg({
    UserID: req.body.UserID,
    Timestamp: req.body.Timestamp,
    GroupMembers: req.body.GroupMembers,
    Visualization: req.body.Visualization,
    Challenges: req.body.Challenges,
    ImprovementWays: req.body.ImprovementWays,
    PositivePlan: req.body.PositivePlan,
    Action: req.body.Action,
  });
  newReg
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});
APIrouter.post("/addEmoSurvey", (req, res) => {
  const newEmoSurvey = new EmoSurvey({
    Timestamp:req.body.Timestamp,
    Joyful:req.body.Joyful,
    Curious:req.body.Curious,
    Surprised:req.body.Surprised,
    Confused:req.body.Confused,
    Anxious:req.body.Anxious,
    Frustrated:req.body.Frustrated,
    Bored:req.body.Bored,
    Inconducive:req.body.Inconducive,
    Reason:req.body.Reason,
    Remarks:req.body.Remarks,
  });
  newEmoSurvey
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});


//
// //Get all Method
APIrouter.get("/findAllEmoReadWrite", (req, res) => {
  console.log("123");
  EmoReadWrite.find()
    .then((found) => {
      res.send(found);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

APIrouter.get("/findAllEmoReg", (req, res) => {
  console.log("findAllEmoReg");
  EmoReg.find()
    .then((found) => {
      res.send(found);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

APIrouter.get("/findAllEmoSurvey", (req, res) => {
  console.log("findAllEmoSurvey");
  EmoSurvey.find()
    .then((found) => {
      res.send(found);
    })
    .catch((err) => {
      console.log(err);
      res.send(err.message);
    });
});

//
// //Get by ID Method
// APIrouter.get("/user/:username", (req, res) => {
//   User.findOne({ username: req.params.username })
//     .then((found) => {
//       if (found === null) {
//         res.send("Null");
//       } else {
//         res.send(found);
//       }
//     })
//     .catch((err) => {
//       res.send("User not found");
//     });
// });
//
// //Get by email Method
// APIrouter.get("/user/getByEmail/:email", (req, res) => {
//   User.findOne({ email: req.params.email })
//     .then((found) => {
//       if (found === null) {
//         res.send("Null");
//       } else {
//         res.send(found);
//       }
//     })
//     .catch((err) => {
//       res.send("User not found");
//     });
// });
//
// //Get by Gmail inside Google Data Object
// APIrouter.get("/user/googledata/:gmail", (req, res) => {
//   User.findOne({ "google_data.email": req.params.gmail })
//     .then((found) => {
//       if (found === null) {
//         res.send("Null");
//       } else {
//         res.send(found);
//       }
//     })
//     .catch((err) => {
//       res.send("User not found");
//     });
// });
//
// //Get by Strava athlete id
// APIrouter.get("/user/stravadata/:stravaid", (req, res) => {
//   User.findOne({ "strava_data.athlete.id": parseInt(req.params.stravaid, 10) })
//     .then((found) => {
//       if (found === null) {
//         res.send("Null");
//       } else {
//         res.send(found);
//       }
//     })
//     .catch((err) => {
//       res.send("User not found");
//     });
// });
//
// //Update by ID Method
// APIrouter.patch("/update/:username", (req, res) => {
//   User.updateOne(
//     { username: req.params.username },
//     {
//       $set: {
//         username: req.body.username,
//         password: req.body.password,
//       },
//     }
//   )
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
//
// //Delete by ID Method
// APIrouter.delete("/delete/:username", (req, res) => {
//   User.deleteOne({ username: req.params.username })
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err.message);
//     });
// });
//
// //Delete by email Method
// APIrouter.delete("/deleteByEmail/:email", (req, res) => {
//   User.deleteOne({ email: req.params.email })
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err.message);
//     });
// });
//
// //Update macros-limit method
// APIrouter.patch("/updateLimits/:email", (req, res) => {
//   const limitsData = req.body.newLimits;
//
//   User.findOneAndUpdate(
//     { email: req.params.email },
//     {
//       $set: {
//         macros_setting: limitsData,
//       },
//     },
//     { returnOriginal: false }
//   )
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err.message);
//     });
// });
//
// //Add meal method
// APIrouter.post("/addMeal/:email", (req, res) => {
//   const mealData = {
//     foodName: req.body.foodName,
//     calorie: req.body.calorie,
//     protein: req.body.protein,
//     carbohydrate: req.body.carbohydrate,
//     fat: req.body.fat,
//     mealType: req.body.mealType,
//     createdAt: new Date(),
//   };
//
//   User.findOneAndUpdate(
//     { email: req.params.email },
//     {
//       $push: {
//         meals: mealData,
//       },
//     },
//     {
//       returnOriginal: false,
//     }
//   )
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
//
// //Update meal method
// APIrouter.patch("/updateMeal/:username", (req, res) => {});
//
// //Delete meal method
// APIrouter.post("/deleteMeal/:email", (req, res) => {
//   User.findOneAndUpdate(
//     { email: req.params.email },
//     {
//       $pull: {
//         meals: {
//           createdAt: new Date(req.body.createdAt),
//         },
//       },
//     },
//     {
//       returnOriginal: false,
//     }
//   )
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
//
// //Add exercise method
// APIrouter.post("/addExercise/:username", (req, res) => {
//   const exerciseData = req.body.exerciseData;
//
//   User.findOneAndUpdate(
//     { username: req.params.username },
//     {
//       $push: {
//         workouts: { $each: exerciseData },
//       },
//     },
//     {
//       new: true,
//     }
//   )
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
//
// //Update exercise method
// APIrouter.patch("/updateExercise/:username", (req, res) => {
//   const exerciseDate = req.body.date;
//   User.findOneAndUpdate(
//     {
//       username: req.params.username,
//       "workouts.createdAt": exerciseDate,
//     },
//     {
//       $set: {
//         "workouts.$.isCompleted": true,
//       },
//     },
//     { returnOriginal: false }
//   )
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err.message);
//     });
// });
//
// //Edit exercise description method
// APIrouter.patch("/editExercise/:username", (req, res) => {
//   const exerciseDate = req.body.date;
//   User.findOneAndUpdate(
//     {
//       username: req.params.username,
//       "workouts.createdAt": exerciseDate,
//     },
//     {
//       $set: {
//         "workouts.$.name": req.body.title,
//         "workouts.$.description": req.body.description,
//       },
//     },
//     { returnOriginal: false }
//   )
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err.message);
//     });
// });
//
// //Delete exercise method
// APIrouter.post("/deleteExercise/:email", (req, res) => {
//   User.findOneAndUpdate(
//     { email: req.params.email },
//     {
//       $pull: {
//         workouts: {
//           createdAt: req.body.date,
//         },
//       },
//     },
//     {
//       returnOriginal: false,
//     }
//   )
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });
//
// //PATCH update user settings by email
// APIrouter.patch("/updateUserSettings/:email", (req, res) => {
//   const data = req.body.newSettings;
//
//   User.findOneAndUpdate(
//     { email: req.params.email },
//     {
//       $set: {
//         username: data.username,
//         age: data.age,
//         weight: data.weight,
//         height: data.height,
//       },
//     },
//     { returnOriginal: false }
//   )
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err.message);
//     });
// });
//
// //PATCH update user settings by email
// APIrouter.patch("/updateUserPassword/:email", (req, res) => {
//   User.findOneAndUpdate(
//     { email: req.params.email },
//     {
//       $set: {
//         password: req.body.newPassword,
//       },
//     },
//     { returnOriginal: false }
//   )
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err.message);
//     });
// });
//
// //GET to get reset password
// APIrouter.get("/resetUserPassword/:email", async (req, res) => {
//   const user = await User.findOne({ email: req.params.email });
//   if (!user) {
//     res.send("Null");
//   } else {
//     let token = await Token.findOne({ userID: user._id });
//     if (token) {
//       await token.deleteOne();
//     }
//     let resetToken = crypto.randomBytes(32).toString("hex");
//
//     await new Token({
//       userID: user._id,
//       token: resetToken,
//       createdAt: Date.now(),
//     }).save();
//
//     res.send({
//       token: resetToken,
//       id: user._id,
//     });
//   }
// });
//
// //GET to get token
// APIrouter.get("/getToken/:token", (req, res) => {
//   Token.findOne({ token: req.params.token })
//     .then((found) => {
//       if (found === null) {
//         res.send("Null");
//       } else {
//         res.send(found);
//       }
//     })
//     .catch((err) => {
//       res.send("User not found");
//     });
// });
//
// //GET to get token
// APIrouter.get("/getUserByOId/:id", (req, res) => {
//   User.findById(req.params.id)
//     .then((found) => {
//       if (found === null) {
//         res.send("Null");
//       } else {
//         res.send(found);
//       }
//     })
//     .catch((err) => {
//       res.send("User not found");
//     });
// });
//
// //POST reset password
// APIrouter.post("/resetPassword/:id", (req, res) => {
//   User.findByIdAndUpdate(req.params.id, { password: req.body.newPassword })
//     .then((result) => {
//       Token.findOneAndDelete({ token: req.body.token })
//         .then((result) => {
//           res.send(result);
//         })
//         .catch((err) => {
//           res.send(err.message);
//         });
//     })
//     .catch((err) => {
//       res.send(err.message);
//     });
// });
//
// APIrouter.get("/test", (req, res) => {
//   res.send(req.header);
// });
//
// //POST profile pic
// APIrouter.patch("/uploadProfilePic/:username", (req, res) => {
//   const profilepic = req.body.profilepic;
//   User.findOneAndUpdate(
//     {
//       username: req.params.username,
//     },
//     {
//       $set: {
//         profilePic: profilepic,
//       },
//     },
//     { returnOriginal: false }
//   )
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err.message);
//     });
// });
//
// //PATCH refresh Strava
// APIrouter.patch("/refreshStrava/:email", (req, res) => {
//   User.findOneAndUpdate(
//     { email: req.params.email },
//     {
//       $set: {
//         strava_data: {
//           accessToken: req.body.accessToken,
//           expiresAt: req.body.expiresAt,
//           expiresIn: req.body.expiresIn,
//           refreshToken: req.body.refreshToken,
//         },
//       },
//     },
//     { returnOriginal: false }
//   )
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       res.send(err.message);
//     });
// });

export { APIrouter };
