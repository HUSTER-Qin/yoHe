# NFS

## NFS主服务：
1、产看NFS主服务：
-----------------------------------------------------------
root@debian:~# systemctl status nfs-kernel-server.service
-----------------------------------------------------------
nfs-kernel-server.service和nfs-server.service是一个，查看那个都可以

2、查看rpcbind服务
---------------------------------------------------
root@debian:~# systemctl status rpcbind.service
---------------------------------------------------
如果上面的服务没有启动手动进行启动

3、设置NFS主程序开机启动
------------------------------------------------------------
root@debian:~# systemctl enable nfs-kernel-server.service
------------------------------------------------------------
正常安装完程序后会启动服务并添加开机启动。

4、设置rpcbind主程序开机启动
------------------------------------------------
root@debian:~# systemctl enable rpcbind.service
------------------------------------------------


## exportfs
```sh
root@debian:~# exportfs -v        #产看所以共享目录
root@debian:~# exportfs -rv       #使/etc/exports更改的配置生效
root@debian:~# exportfs -au       #取消当前所有的共享目录
root@debian:~# exportfs -av       #只查看/etc/exports中共享的目录同时恢复取消的共享目录
root@debian:~# exportfs -o rw,async 192.168.2.100:/mnt     #添加共享目录/mnt,注意命令格式-o参数后面是权限，多个权限用逗号分开，权限后面是可以访问的主机或网段，后面是共享的目录，主机和共享目录之间有冒号（:）并且不可以有空格。
```