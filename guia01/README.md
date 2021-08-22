
## Desarrollo de Guía 1 Git
</br>

- Se creó un directorio por guía hasta la 10, agregando un archivo **.gitkeep** para que se pudiera commitear, ya que son directorios vacíos.

---

- Se realizaron cambios al archivo *primeraversion.html* desde dos colaboradores diferentes y el conflicto observado se encuentra en la captura de la carpeta guia01. </br>
Esto es debido a que no se habían descargado todos los cambios antes de intentar subir uno nuevo desde la local del otro colaborador.

---

- Se crearon las ramas 
  - desarrollo
  - pruebas
  - producción
Y se clonó el archivo *primeraversion.html* en la carpeta de guia02 subiendolo a la rama <ins>desarrollo</ins> con un nuevo párrafo. </br>
Luego haciendo para pasar los cambios de rama a rama desde <ins>pruebas</ins> hasta <ins>producción</ins> se realizó lo siguiente:</br>
```
git checkout <nombre de rama a la que quiero pasar los cambios>
git merge <nombre de rama desde la que quiero los cambios>
git commit -m "nombre del commit"
git push
```