"""
Step 1: Create images from imported exercise video
"""
import cv2
from pathlib import Path
import os
import torch
import warnings
warnings.filterwarnings('ignore')

# Set up CUDA GPU
os.environ['CUDA_VISIBLE_DEVICES'] = "0"
torch.multiprocessing.set_sharing_strategy('file_system')
torch.backends.cudnn.benchmark = True
torch.cuda.set_device(0)

# Set path to save
save_loc = Path('./data/source/')
save_loc.mkdir(exist_ok=True)
img_loc = save_loc.joinpath('images')
img_loc.mkdir(exist_ok=True)

# Split images
if len(os.listdir('./data/source/images')) < 100:
	video_capture = cv2.VideoCapture(str(save_loc.joinpath('source.mp4')))
	num = 0
	print('Generating images now...')

	while (video_capture.isOpened()):
		flag, frame = video_capture.read()
		if flag == False or num >= 1000:
			break
		cv2.imwrite(str(img_loc.joinpath('{:05}.png'.format(num))), frame)
		num += 1

	print('Generated %d pics' % num)

"""
Step 2: Use Pose images to create estimated images (use pre-trained weights)
"""
import numpy as np
import matplotlib.pyplot as plt
import sys
from tqdm import tqdm

openpose_dir = Path('./src/PoseEstimation/')
sys.path.append(str(openpose_dir))
sys.path.append('./src/utils')

from evaluate.coco_eval import get_multiplier, get_outputs
from network.rtpose_vgg import get_model
from openpose_utils import remove_noise, get_pose

pretrained_weights = './src/PoseEstimation/network/weight/pose_model.pth'

# Feed model weights
model = get_model('vgg19')
model.load_state_dict(torch.load(pretrained_weights))
model = torch.nn.DataParallel(model).cuda()
model.float()
model.eval()

"""
Step 3: Use Pose images to create estimated images (use pre-trained weights)
"""
source_img_loc = save_loc.joinpath('source_img')
source_img_loc.mkdir(exist_ok=True)
source_label_loc = save_loc.joinpath('source_label_ori')
source_label_loc.mkdir(exist_ok=True)

# Now, draw the skeletons
for idx in tqdm(range(len(os.listdir(str(img_loc))))):
	img_path = img_loc.joinpath('{:05}.png'.format(idx))
	img = cv2.imread(str(img_path))
	shape_dst = np.min(img.shape[:2])
	oh = (img.shape[0] - shape_dst) // 2
	ow = (img.shape[1] - shape_dst) // 2

	img = img[oh:oh + shape_dst, ow:ow + shape_dst]
	img = cv2.resize(img, (512, 512))
	multiplier = get_multiplier(img)

	with torch.no_grad():
		paf, heatmap = get_outputs(multiplier, img, model, 'rtpose')
	r_heatmap = np.array([remove_noise(ht) for ht in heatmap.transpose(2, 0, 1)[:-1]]).transpose(1, 2, 0)
	heatmap[:, :, :-1] = r_heatmap
	param = {'thre1': 0.1, 'thre2': 0.05, 'thre3': 0.5}

	label, coord = get_pose(param, heatmap, paf)

	cv2.imwrite(str(source_img_loc.joinpath('{:05}.png'.format(idx))), img)
	cv2.imwrite(str(source_label_loc.joinpath('{:05}.png'.format(idx))), label)

torch.cuda.empty_cache()