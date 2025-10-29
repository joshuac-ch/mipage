---
fecha: "2025-Julio-13"
title: "Spotify Clone"
fondo: "/proyecto3/foto1.png"
descripcion: "AI ninolisten es una plataforma de Streaming musical inspirada en
              Spotify, desarrollado usando el stack MERN y potenciada con un
              microservicio de IA que recomienda canciones a los usuarios segun
              los gustos de los usuarios. El proyecto combina un fronted
              Interactivo + Backend escalable y un modelo de recomendacion de IA
              desde cero ofreciendo una mejor experiencia para el usuario"
imagenes: ["/proyecto3/foto1.png","/proyecto3/foto2.png","/proyecto3/foto3.png"]
caracteristicas: [
                    {"name": "Recomendador inteligente de canciones ", "descri": " Sistema de IA basado en analisis de tags, generos y similitud de
                  caracteristicas entre canciones. Entrenado con datos reales, genera
                  una lista “Para Ti” que se actualiza dinamicamente segun el historial
                  de reproduccion del usuario."},
                  {"name": "Tendencias y Top Global: ", "descri" : "Algoritmo de ranking que muestra las canciones mas reproducidas
                  a nivel global y local, calculado en tiempo real a partir de los
                  registros de reproduccion."},
                  {"name": "Gestion multimedia avanzada: ", "descri": "Integracion con Cloudinary para almacenar y servir imagenes, albumes
                  y GIFs animados que acompañan la experiencia del usuario en el
                  reproductor.Los GIFs se muestran como animaciones ligeras mientras
                  suena una cancion, simulando visualizaciones parecidas a Spotify."},
                  {"name": "Gestion completa de canciones y albumes: ", "descri": " Sistema de administracion que permite subir, editar y eliminar
                  canciones, portadas y albumes directamente desde el panel del artista
                  o administrador."},
                  {"name": "Microservicio de IA separado con FastAPI: " , "descri": "Arquitectura modular donde el motor de recomendacion corre como
                  un microservicio independiente en Python (FastAPI + scikit-learn),
                  comunicado con el backend Node.js mediante peticiones REST."},
                  {"name": "Despliegue: ", "descri": "AWS EC2 (backend +
                IA) y almacenamiento de archivos multimedia en AWS S3 y Cloudinary."},                                            
                    ]
tecnologias: [{"name": "Backend: "  ,"descri": "Nodejs,
                  Express, Mongo y Python"},
              {"name": "Fronted: "  ,"descri": "React,
                  Context Api, Tailenwind y CSS"},
              {"name": "Authentication: " ,"descri": "Clerk"},
              {"name": "DevOps: ","descri": "AWS EC2,
                  S3, Cloudnary"},
              {"name": "Integraciones Extra:", "descri": "Socket Client y Socket IO"}     
            ]
conclusion: " Este proyecto demuestra mi capacidad para diseñar y desarrollar
            arquitecturas fullStack, implementar modelos de recomendación con IA
            basadas en microservicios de IA, integrar servicios en la nube y
            construir un frontend atractivo y profesional conectado a un backend
            real desplegado en la nube utilizando servicios de AWS EC2 y S3"
---