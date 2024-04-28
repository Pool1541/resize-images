/* eslint-disable react-hooks/exhaustive-deps */
import { Tooltip, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function ImagePreview({ imageFile }) {
  const [fileDataURL, setFileDataURL] = useState(null);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    const reader = new FileReader();
    let isCancel = false;

    setFileName(imageFile.name);

    reader.onload = (e) => {
      const { result } = e.target;
      if (result && !isCancel) {
        setFileDataURL(result);
      }
    };

    reader.readAsDataURL(imageFile);

    return () => {
      isCancel = true;
      if (reader && reader.readyState === 1) {
        reader.abort();
      }
    };
  }, []);

  return (
    <div className="basis-60 flex flex-col items-center justify-center">
      <Tooltip
        content={fileName}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
        className="bg-gray-700"
      >
        <Typography
          variant="h2"
          className="text-[#333333] mb-1 text-sm truncate w-20 text-center"
        >
          {fileName}
        </Typography>
      </Tooltip>
      <div className="h-20 w-20 overflow-hidden bg-blue-gray-50">
        <img
          src={fileDataURL}
          alt={fileName}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
