import React, { useEffect, useRef, useState } from "react";
import Button from "../Interfaces/Button/Button";

import classes from "./ImageInput.module.css";

const ImageInput = (props) => {
  const {onInput} = props
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    onInput( pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <>
      <input
        // id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={classes.ImgWrapper}>
        {previewUrl && (
          <div className={classes["image-upload__preview"]}>
            {previewUrl && <img src={previewUrl} alt="Preview" />}
          </div>
        )}
        {!previewUrl && <small>Please pick an image.</small>}
        <Button className={classes.ImgButton} W-200 type="button" clicked={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
    </>
  );
};

export default ImageInput;
