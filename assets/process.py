import glob
import cv2

for fn in glob.glob("./assets/images/raw/*.jpg"):
    img = cv2.imread(fn)
    # scale the image so the shortest side is 400px
    scale = 400.0 / min(img.shape[0], img.shape[1])
    img = cv2.resize(img, None, fx=scale, fy=scale)
    cv2.imwrite(fn.replace("raw", "downscaled"), img)
    print("\""+fn.replace('raw', 'downscaled').replace('\\', '/', )+"\",")