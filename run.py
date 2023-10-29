from app import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)

# https://stackoverflow.com/questions/77215107/importerror-cannot-import-name-url-decode-from-werkzeug-urls
# https://stackoverflow.com/questions/61541835/missing-userloader-or-request-loader-error
# 