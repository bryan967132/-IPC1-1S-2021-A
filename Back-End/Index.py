#Importaciones de Flask

from flask import Flask,request,jsonify
from flask_cors import CORS

#Crear la app

app = Flask(__name__)
app.config["DEBUG"] = True

CORS(app)

@app.route('/',methods=['GET'])
def home():
    return 'SERVER IS WORKING!!!!'

#Iniciar el Servidor

if __name__ == "__main__":
    app.run(host="0.0.0.0",debug=True)