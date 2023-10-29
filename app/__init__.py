from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from config import Config
from app.extensions import db
# app = Flask(__name__)
# app.config.from_object(Config)
# db = SQLAlchemy(app)
bcrypt = Bcrypt()
login_manager = LoginManager()

def create_app(config_class=Config):
    app = Flask(__name__)
   
    
    # Load configuration from a config file or environment variables
    app.config.from_object(config_class)
    # print("APP CONFIG: ", app.config)
    # db.init_app(app)
    # db = SQLAlchemy(app)
    db.init_app(app)

    # Adding all models here
    from app.models import User,Video,Like,Share,Comment
    
    with app.app_context():
        db.create_all()
    

    bcrypt.init_app(app)
    login_manager.init_app(app)

    from app.routes import bp
    app.register_blueprint(bp)
    
    # from app import routes  # Import the routes here
    
    return app
