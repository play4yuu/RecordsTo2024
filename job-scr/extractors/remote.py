from bs4 import BeautifulSoup
from requests import get

def extract_jobs_remote(keyword):
  url = f"https://remoteok.com/remote-{keyword}-jobs"
  request = get(url, headers={"User-Agent": "Kimchi"})
  
  if request.status_code == 200:
    result=[]
    soup = BeautifulSoup(request.text, "html.parser")

    # write your ✨magical✨ code here
    link_remote="https://remoteok.com"

    ones = soup.find_all('table',id='jobsboard')

    for one in ones:
      twos = one.find_all('td','company position company_and_position')
      twos.pop(0)

      for two in twos:
        threes = two.find_all('a','preventLink')

        links = two.find_all('a')  #링크 = link
        for a in links:            # OK
            link = a.attrs['href']
            
        titles = two.find('h2') #하는일 = title
        title = titles.string    # OK
        title = title.strip()

        comps = two.find('h3') #회사이름 = comp
        if type!=None:
            com = comps.string
        com = com.string
        com = com.strip()
    
        locals = two.find('div', class_="location")
        local = locals.string # 일하는장소 local OK

        job_data={
            'site':"remote",
            'company':com,
            'region':local,
            'position':title,
            'link':f"{link_remote}{link}"
        }
        result.append(job_data)
        
    # print(result,"\n\n\n\n indeed == \n")

    # print(type(result))
    return result


  else:
    print("Can't get jobs.")

# extract_jobs_indeed()