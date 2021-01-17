import os
import cv2
from skimage import measure

# https://www.pyimagesearch.com/2017/06/19/image-difference-with-opencv-and-python/
# Make sure to greyscale
def compare_images(img1, img2):
	image1 = cv2.cvtColor(cv2.imread(img1), cv2.COLOR_BGR2GRAY)
	image2 = cv2.cvtColor(cv2.imread(img2), cv2.COLOR_BGR2GRAY)
	score = measure.compare_ssim(image1, image2, multichannel=True)

	return score

def compare_workout():
	youtube_folder = "../vid/youtube_images"
	youtube_images = sorted([image for image in os.listdir(youtube_folder) if image.endswith(".png")])

	personal_folder = "../vid/personal_images"	
	personal_images = sorted([image for image in os.listdir(personal_folder) if image.endswith(".png")])

	cumulative_score = 0
	total_images = min(len(youtube_images), len(personal_images))

	for i in range(total_images):
		yt_dir = f"{youtube_folder}/{youtube_images[i]}"
		per_dir = f"{personal_folder}/{personal_images[i]}"
		cumulative_score += compare_images(yt_dir, per_dir)

	return str(round(cumulative_score / total_images, 2) * 100)

# score = compare_workout()
# print(score)