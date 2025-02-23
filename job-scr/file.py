# import csv

def save_to_file(file_name,jobs):
  
  file = open(f"{file_name}.csv", 'w')
  # print(file)
  
  file.write("Position, Company, region, URL \n")
  
  for job in jobs:
    file.write(
      f"{job['position']}, {job['company']}, {job['region']}, {job['link']}, {job['site']} "
    )
  file.close()
    