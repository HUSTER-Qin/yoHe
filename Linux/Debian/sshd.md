# ssh 无法登录
Permission denied, please try again. // 错误

在/etc/ssh/ssh_config中没有PermitRootLogin yes选项

service ssh restart


[cloud]
comment = cloud;
path = /mnt/cloud;   
browseable = yes;
writable = yes;       
read only = yes;      
valid users = yohe;  
write list = yohe;      
public = no;    
create mask = 0700;
directory mask = 0700;