from flask import Flask
from flask import render_template
from flask import request
from extractors.remote import extract_jobs_remote #remote-job
from extractors.wwr import extract_jobs_wwr   # wwr -jobs
from file import save_to_file                 # save_to_file

app = Flask("Jobs_scrapper")

@app.route("/")
def home():
  return render_template("index.html")

@app.route('/search')
def search():
  keyword = request.args.get("keyword")
  indeed = extract_jobs_remote(keyword)
  wwr = extract_jobs_wwr(keyword)
  jobs = indeed + wwr
  
  print(sum)
  return render_template("search.html",keyword=keyword,jobs=jobs)
  
app.run("127.0.0.1")