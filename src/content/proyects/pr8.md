---
fecha: "2026-Oct-17"
title: "Vault — Motor de Descubrimiento Multimodal"
fondo: "/proyecto7/vaultportada2.png"
descripcion: "Plataforma de almacenamiento y recuperación inteligente de contenido multimedia que integra inteligencia artificial, embeddings textuales y visuales, búsqueda semántica y recuperación por similitud de imágenes. Permite subir y organizar imágenes, videos y otros archivos multimedia en colecciones públicas y privadas protegidas mediante PIN. Implementa un pipeline de análisis automatizado que transforma el contenido multimedia en representaciones vectoriales y metadatos útiles para facilitar su clasificación, indexación y recuperación. El sistema combina una interfaz interactiva desarrollada con React y TypeScript, un backend en Python basado en FastAPI y arquitectura hexagonal, y PostgreSQL con pgvector para la persistencia y búsqueda vectorial. El proyecto integra modelos open source de procesamiento de lenguaje y representación visual, junto con servicios de AWS para el almacenamiento y despliegue de la aplicación."
imagenes: ["/proyecto7/vaultportada2.png"]

caracteristicas:
  - name: "Gestión de almacenamiento multimedia"
    descri: "Sistema de carga, almacenamiento, visualización y organización de imágenes, videos y otros archivos multimedia. Permite administrar el contenido mediante colecciones, consultar los archivos almacenados y acceder a una interfaz de visualización multimedia mediante un modal interactivo."

  - name: "Colecciones públicas y privadas"
    descri: "Implementación de colecciones con diferentes niveles de visibilidad y acceso. Las colecciones privadas requieren validación mediante PIN de seis dígitos, con verificación en el backend y controles de autorización para proteger el acceso al contenido restringido."

  - name: "Análisis automatizado de contenido mediante IA"
    descri: "Pipeline de procesamiento que genera información descriptiva y etiquetas para facilitar la organización de los archivos multimedia. El análisis permite enriquecer los metadatos del contenido y reducir la dependencia de la clasificación manual, preparando la información para los mecanismos de búsqueda y recuperación."

  - name: "Embeddings textuales"
    descri: "Generación de representaciones vectoriales del contenido textual asociado a los archivos y sus etiquetas mediante el modelo open source paraphrase-multilingual-MiniLM-L12-v2. Los vectores de 384 dimensiones permiten representar la información semántica y recuperar contenido relacionado a partir del significado de las consultas, en lugar de depender exclusivamente de coincidencias literales."

  - name: "Embeddings visuales y similitud de imágenes"
    descri: "Integración de OpenCLIP con la variante ViT-B-32 y los pesos laion2b_s34b_b79k para generar representaciones visuales de 512 dimensiones. Estos embeddings permiten comparar imágenes mediante similitud vectorial y recuperar contenido visualmente relacionado, incluso cuando los archivos tienen nombres o etiquetas diferentes."

  - name: "Búsqueda semántica"
    descri: "Motor de recuperación que utiliza embeddings textuales para encontrar contenido relacionado con la intención y el significado de una consulta. Permite explorar la biblioteca multimedia mediante descripciones y conceptos, ofreciendo una alternativa a las búsquedas convencionales basadas únicamente en nombres de archivos o palabras exactas."

  - name: "Búsqueda visual por similitud"
    descri: "Sistema de recuperación de imágenes basado en embeddings visuales y comparación de vectores. Permite localizar archivos visualmente similares y explorar relaciones entre elementos de la biblioteca multimedia a partir de sus características representadas por el modelo."

  - name: "Recuperación vectorial y arquitectura RAG"
    descri: "Implementación de una base de recuperación basada en embeddings, indexación vectorial y consultas por similitud semántica y visual. El flujo combina la preparación de los datos, la generación de representaciones y su recuperación contextual. Constituye una base para sistemas de recuperación aumentada por información, o RAG, sin depender exclusivamente de una búsqueda textual tradicional."

  - name: "Persistencia y búsqueda con PostgreSQL y pgvector"
    descri: "Almacenamiento de entidades, colecciones, metadatos y representaciones vectoriales mediante PostgreSQL y su extensión pgvector. La persistencia de embeddings textuales y visuales permite centralizar la información y ejecutar consultas de similitud para los distintos mecanismos de recuperación."

  - name: "Interfaz de usuario interactiva"
    descri: "Desarrollo de una interfaz con React, TypeScript y Vite, enfocada en la exploración visual de la biblioteca multimedia. Incluye colecciones, tarjetas de contenido, visualización multimedia mediante modal y vistas específicas para hacer visibles y accesibles las funciones de búsqueda semántica y recuperación visual."

  - name: "Backend modular con arquitectura hexagonal"
    descri: "Backend desarrollado en Python con FastAPI, organizado mediante arquitectura hexagonal para separar la lógica de negocio de los mecanismos externos de persistencia, procesamiento y acceso a datos. Esta estructura facilita el mantenimiento, las pruebas y la evolución independiente de los componentes del sistema."

  - name: "Despliegue e infraestructura en AWS"
    descri: "Integración con servicios de Amazon Web Services para la infraestructura de almacenamiento y despliegue. El proyecto contempla el uso de instancias EC2 para ejecutar los componentes de la aplicación y servicios de almacenamiento de objetos para los archivos multimedia, manteniendo separada la referencia al archivo de sus metadatos y representaciones vectoriales."

tecnologias:
  - name: "Frontend:"
    descri: "React, TypeScript, Vite y Tailwind CSS."

  - name: "Backend:"
    descri: "Python, FastAPI, Uvicorn y Poetry."

  - name: "Arquitectura:"
    descri: "Arquitectura hexagonal, separación de responsabilidades y organización modular de la lógica de negocio."

  - name: "Base de datos:"
    descri: "PostgreSQL y pgvector para persistencia relacional, almacenamiento de embeddings y recuperación por similitud vectorial."

  - name: "Inteligencia artificial:"
    descri: "Sentence Transformers, paraphrase-multilingual-MiniLM-L12-v2, OpenCLIP, CLIP ViT-B-32 y representaciones vectoriales de texto e imágenes."

  - name: "Búsqueda y recuperación:"
    descri: "Embeddings de 384 dimensiones para texto, embeddings visuales de 512 dimensiones, búsqueda semántica, similitud visual y fundamentos de recuperación aumentada por información (RAG)."

  - name: "Infraestructura y DevOps:"
    descri: "AWS EC2, almacenamiento de objetos S3 en AWS y configuración del entorno de ejecución de la aplicación."

conclusion: "Vault demuestra la integración de ingeniería de software e inteligencia artificial en un sistema funcional de almacenamiento y recuperación multimedia. El proyecto aborda el ciclo completo desde la carga y persistencia del contenido hasta su análisis, representación vectorial, indexación y recuperación semántica o visual. Su principal aporte es combinar una experiencia de usuario orientada a la exploración multimedia con una arquitectura backend modular y modelos open source capaces de representar información textual y visual. El desarrollo permite aplicar conocimientos de procesamiento de datos multimodales, embeddings, búsqueda vectorial, diseño de APIs, control de acceso y despliegue de aplicaciones en la nube, estableciendo una base extensible para sistemas inteligentes de gestión de contenido."
motion: True  
link: "no disponible"
motions: ["/proyecto7/motion/gif5.mp4","/proyecto7/motion/gif2.mp4","/proyecto7/motion/gif3.mp4","/proyecto7/motion/gif4.mp4","/proyecto7/motion/gif1.mp4"]
tag: "Motor Multimodal"
categoria: "Exploración Semántica y Visual"
subcategoria: "Inteligencia artificial multimodal y recuperación semántica"
---