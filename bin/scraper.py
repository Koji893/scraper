from selenium import webdriver
driver = webdriver.Firefox()
page = input()
try:
    driver.get(page)
    driver.execute_script()
except:
    
