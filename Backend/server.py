from flask import Flask, jsonify
import csv
import json

app = Flask(__name__)


@app.route("/data")
def index():
    with open('./static/test_data.csv', encoding='utf-8') as csv_file:
        csvReader = csv.DictReader(csv_file)

        jsonData = []

        for row in csvReader:
            print(row)
            jsonData.append(row)
    return jsonify(jsonData)


if __name__ == "__main__":
    app.run()
