import { transformName } from '@/utils';
import JSZip from 'jszip';

export default function useResize() {
  function resize(file, width) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;

        img.onload = function () {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          /**
           * Toma tu altura original. En nuestro ejemplo, será 1200 píxeles.
           * Toma la anchura original. Nuestra imagen tiene una anchura de 1600 píxeles.
           * Divide la altura por la anchura, por ejemplo, 1200 / 1600 = 0.75
           * Multiplica el cociente por la anchura preferida, por ejemplo, 0.75 × 300 = 225
           * La cifra resultante es tu nueva altura expresada en píxeles.
           */
          const height = (img.height / img.width) * width;
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(function (blob) {
            const newImage = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now(),
            });

            resolve(newImage);
          }, 'image/png');
        };
      };

      reader.onerror = function (error) {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  }

  function download(files, textToRemove = '') {
    const zip = new JSZip();

    if (files.length === 0) return;

    files.forEach((file) => {
      const filename = transformName(file.name, textToRemove);
      zip.file(`assets/${filename}`, file);
    });

    zip.generateAsync({ type: 'blob' }).then((content) => {
      const zipBlob = new Blob([content], { type: 'application/zip' });
      const zipUrl = URL.createObjectURL(zipBlob);
      const link = document.createElement('a');

      link.href = zipUrl;
      link.download = 'imagenes.zip';
      link.click();
    });
  }

  return { resize, download };
}
