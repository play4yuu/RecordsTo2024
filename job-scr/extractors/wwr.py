from requests import get
from bs4 import BeautifulSoup

def extract_jobs_wwr(keyword):
  results=[]
  
  base_url = "https://weworkremotely.com/remote-jobs/search?utf8=%E2%9C%93&term="
  search_term = keyword
  response = get(f"{base_url}{search_term}")
  
  if response.status_code != 200:
      print("ERROR!")
  else:
      results=[]
      soup = BeautifulSoup(response.text, "html.parser")
      jobs = soup.find_all('section',class_="jobs")
  
      for job_section in jobs:
          job_posts = job_section.find_all('li')
          job_posts.pop(-1) #마지막에 있는 view_all을 제거
  
          for post in job_posts:
              anchors = post.find_all('a') #모든 a클래스를 찾아서 anchors 에 저장함
              anchor = anchors[1]
              
              link = anchor['href']
              company, kind, region = anchor.find_all('span',class_='company')
              title = anchor.find('span',class_='title')
  
              job_data={ #dic 만들기
                  'site':"wwr",
                  'company':company.string, 
                  'region' : region.string, #지역
                  'position' : title.string, #공고이름
                  'kind' : kind.string, #근무시간
                  'link' : f"https://weworkremotely.com{link}" #링크
              }
              results.append(job_data)
      # print(results)
  return results
      # print(type(results))