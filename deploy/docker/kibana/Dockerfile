FROM openjdk:8-jdk

MAINTAINER MacArthur Lab

ENV KIBANA_VERSION="6.3.2"

# create user 'kibana'
RUN useradd -ms /bin/bash kibana

# download and install kibana
RUN cd /usr/local \
  && wget -nv https://artifacts.elastic.co/downloads/kibana/kibana-${KIBANA_VERSION}-linux-x86_64.tar.gz \
  && tar xzf /usr/local/kibana-${KIBANA_VERSION}-linux-x86_64.tar.gz \
  && rm /usr/local/kibana-${KIBANA_VERSION}-linux-x86_64.tar.gz \
  && chown -R kibana /usr/local/kibana-${KIBANA_VERSION}-linux-x86_64

# environment and config
ARG KIBANA_SERVICE_PORT
ENV KIBANA_SERVICE_PORT=$KIBANA_SERVICE_PORT

EXPOSE $KIBANA_SERVICE_PORT

COPY kibana.yml /usr/local/kibana-${KIBANA_VERSION}-linux-x86_64/config/kibana.yml
COPY entrypoint.sh /

CMD [ "/entrypoint.sh" ]
