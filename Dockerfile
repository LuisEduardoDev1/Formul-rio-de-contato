# Use uma imagem base com Nginx
FROM nginx:alpine

# Copie os arquivos HTML para o diretório do Nginx
COPY ./views/index.html /usr/share/nginx/html

# Expõe a porta 80 para acesso HTTP
EXPOSE 80
