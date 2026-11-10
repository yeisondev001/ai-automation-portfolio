# Fuente del CV

`cv-es.html` y `cv-en.html` generan `public/cv/YeisonRojasCV.pdf` y `public/cv/YeisonRojasCV-EN.pdf`. El botón de CV del portafolio descarga el del idioma activo.

Para regenerar un PDF después de editar el HTML:

```bash
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="public/cv/YeisonRojasCV-EN.pdf" "file:///$PWD/cv-source/cv-en.html"
```

Cambia los nombres de archivo para la versión en español. Revisa que siga cabiendo en una página.
