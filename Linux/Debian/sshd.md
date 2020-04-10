# ssh 无法登录
Permission denied, please try again. // 错误

在/etc/ssh/ssh_config中没有PermitRootLogin yes选项

service ssh restart


1. vim /etc/ssh/sshd_config 

2. 将#PasswordAuthentication no的注释去掉，并且将NO修改为YES  //我的kali中默认是yes，密码验证

3. 将#PermitRootLogin yes的注释去掉 //我的kali中默认去掉了注释，允许root登陆

4. 启动SSH服务，命令为：/etc/init.d/ssh start // 或者service ssh start

5. 验证SSH服务状态，命令为：/etc/init.d/ssh status

6. 添加开机自启动   update-rc.d ssh enable

7. 关闭则为：
update-rc.d ssh disabled
