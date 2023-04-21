# Ejercicio práctico front-end My music app

Tu misión es desarrollar una aplicación web responsive con tecnologías front-end vigentes y consumiendo la API de Spotify

## Prerrequisitos

- [Leer estándar Front-End](https://yellowshoe.com.au/standards/)

## Objetivo

Aplicar y asimilar conceptos de:

- Implementación responsive
- Frameworks vigentes front-end
- Interacción de información entre componentes
- Consumo de servicios externos (APIs) o locales (localStorage, IndexedDB, etc...)
- Versionamiento de código
- Pruebas unitarias\*

## Descripción general
Desarrollo de una web responsive que consuma la [API de Spotify](https://developer.spotify.com/documentation/web-api), para traer una lista de canciones. Un usuario, luego de registrarse y loguearse, podrá ver la lista de canciones y podrá agregar las que más le gusten a sus favoritos.

## Inventario del sitio

Páginas:

- **Registro + Login**: con campos de e-mail de usuario, contraseña, validaciones respectivas según tipo y botones ‘**Registrarse**’ / ‘**Entrar**’
- **Home**: muestra un **header** y una **lista de canciones** de la API de Spotify
- **Tus favoritos**: muestra las canciones que el usuario ha agregado a favoritos

Header:

- **Logo** de My Music App con enlace al Home
- Enlace a **Tus favoritos**
- **Nombre de usuario logueado**
- Botón **Salir** para cerrar sesiónº

## Consideraciones técnicas

- La aplicación debe ser **responsive**. Se debe pensar en [mobile first](https://www.initcoms.com/que-es-mobile-first-posicionamiento/).
- La mínima resolución para una buena visualización de la información es de **320 pixeles de ancho**.
- El desarrollo debe tener soporte para las **últimas versiones de Google Chrome y Firefox**.
- El sitio debe estar desarrollado sobre **React** o **Angular (v7+)**.
- Solicitar al master del equipo de desarrollo o líder de capacidad, la creación de un **nuevo repositorio** en GitLab (con el nombre **Capacitacion_nombre.apellido**), y el permiso adecuado como desarrollador en el mismo. En este repositorio se versionará el proyecto.

## Enlaces de guia

- [API Spotify](https://developer.spotify.com/documentation/web-api/)

- [Angular setup](https://angular.io/guide/setup-local)

- [React](https://es.reactjs.org/docs/create-a-new-react-app.html)

- [Presentación GIT](https://wiki.pragma.com.co/git-galaxy)
