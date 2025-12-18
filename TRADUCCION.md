****# Sistema de Traducción - next-intl

## 🌍 Idiomas Soportados
- **Español (es)** - Idioma por defecto
- **Inglés (en)**

## 📁 Estructura de Archivos

```****
/messages
  ├── es.json    # Traducciones en español
  └── en.json    # Traducciones en inglés

/i18n
  └── request.ts # Configuración de i18n

/app/[locale]    # Todas las rutas están dentro de [locale]
  ├── layout.tsx
  ├── page.tsx
  ├── api/
  ├── getToKnowMe/
  └── projects/
```

## 🚀 Cómo Usar las Traducciones

### En un Componente de Cliente

```tsx
'use client';

import { useTranslations } from 'next-intl';

export default function MiComponente() {
  const t = useTranslations('navbar'); // Usa la sección 'navbar' de los mensajes
  
  return (
    <div>
      <h1>{t('home')}</h1>
      <p>{t('about')}</p>
    </div>
  );
}
```

### En un Componente de Servidor

```tsx
import { useTranslations } from 'next-intl';

export default async function MiComponente() {
  const t = await useTranslations('hero');
  
  return (
    <div>
      <h1>{t('greeting')}</h1>
    </div>
  );
}
```

## 📝 Agregar Nuevas Traducciones

1. Abre `/messages/es.json` y `/messages/en.json`
2. Agrega tu nueva clave en ambos archivos:

```json
// es.json
{
  "miSeccion": {
    "titulo": "Mi Título",
    "descripcion": "Mi descripción"
  }
}

// en.json
{
  "miSeccion": {
    "titulo": "My Title",
    "descripcion": "My description"
  }
}
```

3. Úsala en tu componente:

```tsx
const t = useTranslations('miSeccion');
<h1>{t('titulo')}</h1>
```

## 🔄 Cambiar de Idioma

El selector de idioma (`LanguageSwitcher`) está integrado en el Navbar. Los usuarios pueden cambiar entre ES/EN en cualquier momento.

## 🌐 URLs

Las URLs ahora incluyen el prefijo del idioma:
- Español: `https://tudominio.com/es`
- Inglés: `https://tudominio.com/en`

El middleware automáticamente redirige `/` a `/es` (idioma por defecto).

## 📋 Componentes Actualizados

Los siguientes componentes ya usan traducciones:
- ✅ Navbar
- ✅ ContactForm
- ✅ LanguageSwitcher

## 🎨 Próximos Pasos

Para completar la traducción del sitio, actualiza estos componentes:
1. Hero
2. AboutMe
3. OurWork
4. MakeIdeasHappen
5. Footer

Ejemplo de cómo actualizar un componente:

```tsx
// Antes
<h1>Sobre Mí</h1>

// Después
'use client';
import { useTranslations } from 'next-intl';

const t = useTranslations('aboutMe');
<h1>{t('title')}</h1>
```
