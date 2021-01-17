import cv2
import os
import torch
import pytube
import numpy as np
from tqdm import tqdm
from pathlib import Path

def storeImages(folderName, videoName):
	save_loc = Path('../vid/')
	save_loc.mkdir(exist_ok=True)
	img_loc = save_loc.joinpath(folderName)
	img_loc.mkdir(exist_ok=True)

	# Split images
	if len(os.listdir(f'../vid/{folderName}')) < 100:
		video_capture = cv2.VideoCapture(str(save_loc.joinpath(videoName)))
		num = 0
		print('Generating images now...')

		while (video_capture.isOpened()):
			flag, frame = video_capture.read()
			if flag == False or num >= 1000:
				break
			cv2.imwrite(str(img_loc.joinpath('{:05}.png'.format(num))), frame)
			num += 1

		print('Generated %d pics' % num)

	# Now, draw the skeletons
	for idx in tqdm(range(len(os.listdir(str(img_loc))))):
		img_path = img_loc.joinpath('{:05}.png'.format(idx))
		img = cv2.imread(str(img_path))
		shape_dst = np.min(img.shape[:2])
		oh = (img.shape[0] - shape_dst) // 2
		ow = (img.shape[1] - shape_dst) // 2

		img = img[oh:oh + shape_dst, ow:ow + shape_dst]
		img = cv2.resize(img, (512, 512))

		cv2.imwrite(str(img_loc.joinpath('{:05}.png'.format(idx))), img)

storeImages('personal_images', 'personal.mp4')
storeImages('youtube_images', 'youtube.mp4')