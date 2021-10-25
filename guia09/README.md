# Guía 9

Los proyectos para esta guía corresponden de la siguiente manera
- **sitios**: Desarrollo de guía 9
- **WebView local**: Discución de resultados

Para probar el proyecto *sitios*

1. Descargar el repo
2. yarn install
3. yarn start

Para probar el proyecto *webviewlocal*

1. Descargar el repo
2. yarn install
3. npx react-native run-android


---

## sitios

captura 1|captura 2
:---------:|:---------:
![captura 1](./_capturas/desa1.png)|![captura 2](./_capturas/desa2.png)
![captura 1](./_capturas/desa3.jpeg)|![captura 2](./_capturas/desa4.jpeg)

---
## WebView Local

Para poder cargar HTML de manera local en el componente WebView se ha creado un nuevo proyecto, pero nativo de android con **react-native init my-app**. Desde android se lee este tipo de archivos locales desde la siguiente ruta ***webviewlocal>android>app>src>main>assets>local.html*** 

![captura 2](./_capturas/discu1.png)

fuente: https://aboutreact.com/load-local-html-file-url-using-react-native-webview/