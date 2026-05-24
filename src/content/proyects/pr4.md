---
fecha: "2024-Mayo-20"
title: "Traking Aot red social de hábitos y metas personales"
fondo: "/proyecto4/fondo1.png"
descripcion: "Esta aplicación móvil combina la gestión de hábitos y actividades con una experiencia social interactiva.
Los usuarios pueden crear publicaciones relacionadas con sus metas personales, dar “me gusta”, comentar, seguir a otros usuarios y guardar publicaciones, similar a redes como Instagram o TikTok.
También incluye un historial de actividades, un sistema de búsqueda de publicaciones y perfiles, así como notificaciones dinámicas que fomentan la interacción y la constancia en el seguimiento de objetivos.

El sistema cuenta con autenticación completa, gestión de perfiles, y un backend robusto conectado a una base de datos relacional.
Todas las imágenes y archivos se almacenan en la nube utilizando AWS S3, garantizando rendimiento y escalabilidad."
imagenes: ["/proyecto4/fondo1.png","/proyecto1/foto2.png","/proyecto1/foto3.png"]
caracteristicas: [
                  {"name": "Autenticación y gestión de usuarios ", "descri": ""},
                  {"name": "Publicaciones con imágenes, likes, comentarios y guardados.", "descri" : ""},
                  {"name": "Buscador de usuarios y publicaciones ", "descri": ""},
                  {"name": "Notificaciones de seguidores y likes ", "descri": ""},
                  {"name": "Almacenamiento en la nube con AWS S3 " , "descri": ""},
                  {"name": "Compatibilidad multiplataforma (Android / iOS).", "descri": ""},                 
                  {"name": "Interfaz limpia y fluida con diseño oscuro (Dark Mode)", "descri": ""}                                            
                    ]
tecnologias: [{"name": "Backend: "  ,"descri": "Node js, Express JS y Sequelize Mysql"},               
              {"name": "Fronted: "  ,"descri": "React Native, Expo/React Navigation y CSS"},
              {"name": "DevOps: ","descri": "AWS EC2"},   
              {"name": "Desafíos técnicos: ", "descri": "Manejo de relaciones complejas en Sequelize (usuarios ↔ publicaciones ↔ likes ↔ comentarios),
              sincronización entre el estado de React Native y los datos del backend e implementación del historial de actividades,
              A la hora de subir la app se encontro un muro por ser una aplicacion nativa en js puro.   "}          
            ]
conclusion: "Este proyecto representa un salto técnico y creativo significativo: fue mi primera aplicación desarrollada en React Native y también mi primera experiencia integrando un backend completo con Sequelize, Node.js y AWS.
Desarrollarlo implicó comprender a fondo el manejo de relaciones en bases de datos relacionales, la estructura cliente-servidor y los flujos de datos entre API y frontend móvil.
El resultado es una aplicación social sólida, escalable y con un diseño atractivo, que demuestra habilidades full stack mobile, dominio en arquitectura backend, y capacidad de despliegue en entornos cloud."
link: "https://appetize.io/app/b_2covr2g34wuhl6iewoh7aargc4"
---