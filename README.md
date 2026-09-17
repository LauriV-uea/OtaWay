#OtaWay
# OtaWay 🗺️

**OtaWay** es una aplicación móvil turística enfocada en facilitar el acceso a información sobre sitios turísticos, gastronomía y actividades culturales de **Otavalo, Ecuador**.

## 🎯 Objetivo

Ayudar a turistas nacionales, extranjeros y habitantes locales a encontrar información organizada sobre lugares turísticos, ubicaciones, horarios y recomendaciones.

## 📱 Funcionalidades

* 🏞️ Consulta de sitios turísticos.
* 🍽️ Información gastronómica.
* 🎭 Actividades culturales.
* 🗺️ Ubicación de lugares mediante mapas.
* ❤️ Guardado de sitios favoritos.
* ⭐ Comentarios y calificaciones.
* 👤 Registro e inicio de sesión.

## 🛠️ Tecnologías

* **Flutter / Dart** — Aplicación móvil.
* **Python** — Backend.
* **API REST** — Comunicación entre aplicación y backend.
* **MySQL** — Base de datos relacional.
* **Keycloak / OAuth** — Autenticación.
* **Git / GitHub** — Control de versiones.

## 🏗️ Arquitectura

```text
Flutter (App móvil)
        │
        ▼
    API REST
        │
        ▼
     Backend
        │
        ▼
      MySQL
```

## 🔐 Autenticación

La aplicación contempla autenticación mediante **Keycloak/OAuth** y diferencia entre rutas públicas y protegidas.

## 🚀 Ejecución

Instalar las dependencias de Flutter:

```bash
flutter pub get
```

Verificar el entorno:

```bash
flutter doctor
```

Ejecutar la aplicación:

```bash
flutter run
```

La URL del backend debe configurarse mediante variables de entorno.

## 📂 Estructura

```text
lib/
├── models/
├── pages/
├── services/
├── providers/
├── routes/
└── main.dart
```

## 🚧 Estado

Proyecto académico **en desarrollo**. Se continúa trabajando en la integración entre la aplicación móvil, backend, autenticación, base de datos y funcionalidades turísticas.

## 👨‍💻 Autor

**Lauri Leonor Vera Quiróz**
Universidad Estatal Amazónica
