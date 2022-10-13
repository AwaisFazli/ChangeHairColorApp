from flask import Flask, render_template, request
from keras.models import load_model
from keras.preprocessing import image
import cv2
from skimage.transform import resize
import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt


app = Flask(__name__)

model = load_model("model.h5")
model.make_predict_function()


def predict_segmetation(input_image):
    img_train = cv2.imread(input_image)
    img_train = cv2.cvtColor(img_train, cv2.COLOR_BGR2RGB)
    img_train = resize(img_train, (224, 224, 3), mode="reflect")
    plt.imsave("static/img.jpg",
               np.squeeze((img_train*255).astype(np.uint8)))
    img_train = resize(img_train, (224, 224, 1), mode="reflect")

    x = tf.keras.utils.img_to_array(img_train)
    x = np.expand_dims(x, axis=0)
    pr = model.predict(x)
    prt = (pr > 0.4).astype(np.uint8)
    plt.imsave("static/mask.jpg", np.squeeze(prt),  cmap="gray")
    plt.show()
    return "han done he"


def color_change():
    img_file = "static/img.jpg"
    mask_file = "static/mask.jpg"

    img = cv2.imread(img_file, 1)
    mask = cv2.imread(mask_file, 0)
    contours, heirarchy = cv2.findContours(
        mask, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    cv2.drawContours(img, contours, 1, (0, 0, 255), 1)
    img = img[:, :, ::-1]
    img[..., 2] = np.where(mask == 255, 255, img[..., 2])
    plt.imsave("./templates/public/result.jpg", img)


# routes


# @app.route('/', methods=['GET', 'POST'])
# def main():
#     return render_template("public/index.html")


@app.route('/submit', methods=['GET', 'POST'])
def get_hours():
    if request.method == "POST":
        img = request.files["my_image"]
        img_path = "static/"+img.filename
        img.save(img_path)
        predict_segmetation(img_path)
        color_change()

    return render_template("public/index.html")


if __name__ == '__main__':
    app.run(debug=True)
