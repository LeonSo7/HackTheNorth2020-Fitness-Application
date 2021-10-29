# WEE FIT
_Track and analyze your workout form from your own home_

Read more about WEE FIT on Devpost: https://devpost.com/software/wee-fit
See a recorded demo of the app: https://www.youtube.com/watch?v=ofP6BuLzO7c&feature=youtu.be&ab_channel=Fort%C3%A9

## Inspiration
The pandemic has sparked more people to exercise more than ever. Many people have started following workout videos on YouTube but is it safe? Doing exercises incorrectly could be very harmful to your body. Our project analyses your form while performing exercises to help you have better form and reduce the potential of bodily harm through exercising.

## What it does
Our landing page features 4 different exercise options you can select from: push ups, squats, sit ups and planks. If you proceed, you will be brought to a page where your webcam access will be requested in order to record _your_ personal workout video to analysis.

While performing a proper exercise real time with a YouTube video, all you have to worry about is your own form! Afterwards, our backend will do a comparison of your workout with the YouTube workout, and give you a score based on your form!

There is also a history and leaderboard feature which allows you to track your own progress, and also compete with your friends!

## How we built it
- **Front end:** built with React.js and a crap ton of Stack OverFlow 🔥
- **Back end:** built with Python, Flask (and originally PyTorch but we had to scrap the ML part, more on that below)
- **Database:** we used CockroachDB (which was great until the servers failed but s/o to Richard to saving everyone in the morning)

## Challenges
- **Cross-Origin Resource Sharing (CORS)**: 😭 x 10
- **Integrating our ML model:** nobody wanted to put their credit card info (cause nobody wants to be *potentially* billed 🙃) into GCP so we were not able to train our model in a feasible amount of time after the user has uploaded their images (read: < 1 minute)) since there would be no GPU to train our model (and also no way to invoke the model to begin training to begin with, since we did our training on Google Colab). The purpose of our model was to generate skeleton images of the user doing the workout (effectively wiping out the background images, while stream lining the colour) so that when we do a structural similarity index (SSIM) calculation, we are only comparing body movement and nothing else. If we had known this was the case, we wouldn't have spent time training our models to begin with...
  
![ShootMe](/readme-images/sideBySide.png)
<div align="center">The original image vs. standardized skeleton image that we trained</div>


## Accomplishments
We were able to get our project completed and sleep a bit!

## What we learned
- How to use hooks ⚓, Axios, and a graphing library 📈
- Writing Flask API
- Training ML models to generate skeleton images

## What's next
- Select your own video (right now, we have pre-selected 4 workout videos, but ideally user should be able to choose their own)
- Real time analysis on specific flaws in user's exercise form and other stuff (like how Strava analyzes your workout routine)
- Detailed improvment points to add to a user's score on the leaderboard
