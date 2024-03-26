from flask import Flask
from flask import render_template
from database import get_all_movies

app = Flask(__name__)

@app.route('/')
def index():
    data = get_all_movies()
    return render_template('index.html', data=data)


if __name__ == '__main__':
    app.run()