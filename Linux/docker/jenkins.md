

--link gitlab:yohe.gitlab.com


docker run -u root -d -p 8080:8080 -p 50000:50000 --link gitlab:yohe.gitlab.com --name jenkins -v jenkins-data:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean


# 源码管理选择http