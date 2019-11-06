FROM centos:latest 

LABEL version=1.0
LABEL description="This is an apache image"

RUN yum -y install httpd

WORKDIR /var/www

COPY beryllium html/

#ADD http://www.marca.com/ /var/www/html

#define una variable
#ENV contenido prueba

#RUN echo "$contenido" > /var/www/html/prueba.html

RUN echo "$(whoami)" > html/user1.html

#a partir de aqui se utiliza el usuario alberto, lo anterior lo ejecutó root
RUN useradd alberto
#le damos permisos al nuevo usuario alberto para que pueda hacer cosas en la carpeta html
#RUN chown alberto /var/www/html

USER alberto

RUN echo "$(whoami)" > /tmp/user2.html

#persistencia de datos dentro de la carpeta indicada
#VOLUME /var/www/html

USER root

RUN cp /tmp/user2.html /var/www/html/user2.html

# con esta orden cargamos el apache de forma manual
#CMD apachectl -DFOREGROUND

# con esta orden cargamos el apache ejecutando un script
COPY run.sh /run.sh
CMD sh /run.sh
