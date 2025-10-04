# -00042424_practica5_seccion1

¡Genial! Transformemos esas explicaciones en un formato **README** claro y conciso, perfecto para la documentación de un proyecto.

Este README cubre los conceptos de **`className`**, **`props`**, y sus limitaciones en React, que son la base de los ejercicios que has completado.

---

# Conceptos Fundamentales de React (Guía 5)

Este documento resume los aspectos clave de los componentes, propiedades (`props`) y convenciones de sintaxis utilizados en los ejercicios de la Guía 5.

---

## 1. ¿Qué es `className` en JSX?

`className` es el atributo que React (JSX) usa para aplicar **clases CSS** a los elementos HTML.

| Atributo | Uso | Razón |
| :--- | :--- | :--- |
| **`className`** (en React) | Se usa en lugar del atributo HTML `class`. | En JavaScript, `class` es una **palabra reservada** para definir clases de programación. React lo renombra para evitar conflictos. |
| **`class`** (en HTML final) | El navegador recibe el código donde React ha transformado `className` a `class`. | El navegador solo entiende el atributo estándar `class`. |

---

## 2. Límites y Definición de `Props`

Las **Props** (Propiedades) son la forma principal de pasar datos de un componente a otro.

### ¿Hay un Límite para las `Props`?

**No hay un límite técnico estricto.** Puedes pasar tantas `props` como necesites.

* **⚠️ Mala Práctica:** En la práctica, si un componente requiere demasiadas `props` o si las `props` tienen que pasar por muchos componentes intermedios (*Prop Drilling*), es una señal de que el diseño debe simplificarse.
* **Alternativas:** Para datos globales o complejos, es mejor usar la **Context API** o herramientas de gestión de estado (como Redux o Zustand).

### ¿Quién Define las `Props`?

Las `props` son siempre **definidas por el componente padre** que invoca al componente hijo.

| Rol | Componente | Acción |
| :--- | :--- | :--- |
| **Padre (Definidor)** | `Profile` | Decide qué datos enviar (ej: `size={100}`, `person={...}`). |
| **Hijo (Receptor)** | `Avatar` | Declara que recibirá esos datos en su función (ej: `function Avatar({ size, person })`). |

Las `props` fluyen en una sola dirección: **de padre a hijo**.
