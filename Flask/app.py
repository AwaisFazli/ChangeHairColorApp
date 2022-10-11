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


def predict_label(img_path):
    test_pic = cv2.imread(img_path)
    test = resize(test_pic, (224, 224, 3), mode="reflect")
    pred = resize(test_pic, (224, 224, 1), mode="reflect")
    x = tf.keras.utils.img_to_array(pred)
    x = np.expand_dims(x, axis=0)
    pr = model.predict(x)
    prt = (pr > 0.4).astype(np.uint8)
    prt = np.squeeze(prt)
    return prt


# routes


@app.route('/', methods=['GET', 'POST'])
def main():
    return render_template("index.html")


@app.route('/submit', methods=['GET', 'POST'])
def get_hours():
    if request.method == "POST":
        img = request.files["my_image"]
        img_path = "static/"+img.filename
        img.save(img_path)
        p = predict_label(img_path)
        plt.imsave(img_path, p)

    return render_template("index.html", prediction=p, img_path=img_path)


if __name__ == '__main__':
    app.run(debug=True)
