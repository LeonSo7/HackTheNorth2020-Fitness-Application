from pytube import YouTube

urls = [
'https://www.youtube.com/watch?v=rjc0O7OXS3g&ab_channel=DoctorOz',
'https://www.youtube.com/watch?v=1fbU_MkV7NE&ab_channel=LIVESTRONG.COM',
'https://www.youtube.com/watch?v=B296mZDhrP4&ab_channel=LivestrongWoman',
'https://www.youtube.com/watch?v=YaXPRqUwItQ&ab_channel=MindBodySoul'
]

vid_name = [
    'pushup',
    'situp',
    'plank',
    'squat'
]

for i, url in enumerate(urls):
    YouTube(url).streams.first().download(output_path='./vid', filename=vid_name[i])