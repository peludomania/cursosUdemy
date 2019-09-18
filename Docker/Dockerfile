#Imagen de Apache + PHP + TLS/SSL
FROM centos:7

RUN \ 
	yum -y install httpd php:7.3 php:7.3-cli php:7.3-common

RUN echo "<?php phpinfo();?>" > /var/www/html/info.php

COPY startbootstrap-sb-admin-gh-pages /var/www/html

CMD apachectl -DFOREGROUND




