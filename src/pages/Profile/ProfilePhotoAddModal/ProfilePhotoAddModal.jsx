import styles from "./ProfilePhotoAddModal.module.css";
import {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import {profile} from "../../../service/profile.js";
import photo from "../public/cloud-computing.png";
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop, {centerCrop, convertToPixelCrop, makeAspectCrop} from "react-image-crop";
import setCanvasPreview from './setCanvasPreview.js'

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 150;

export default function ProfilePhotoAddModal(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const dialogRef = useRef();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState();
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (props.open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [props.open]);

  function closeButton() {
    props.setOpen();
    setImgSrc("");
  }

  async function submitPhoto(avatar) {
    await profile.upPhoto(user, file, avatar);
    await closeButton()
  }

  const onSelectFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imageElement = new Image();
      const imageUrl = reader.result?.toString() || "";
      imageElement.src = imageUrl;

      imageElement.addEventListener("load", (e) => {
        if (error) setError("");
        const {naturalWidth, naturalHeight} = e.currentTarget;
        if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
          setError("Image must be at least 150 x 150 pixels.");
          return setImgSrc("");
        }
      });
      setImgSrc(imageUrl);
    });
    reader.readAsDataURL(file);
  };

  const onImageLoad = (e) => {
    const {width, height} = e.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

    const crop = makeAspectCrop(
      {
        unit: "%",
        width: cropWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  function onChangeCrop(crop, percentCrop) {
    setCrop(percentCrop)
  }

  async function avatarButtonClick() {
    let canvas = document.getElementById('canvas')
    if (!canvas) {
      return
    } // ЕСЛИ НЕ СДИВНУТЬ ОБЛАСТЬ, НИЧЕГО НЕ ДОБАВИТСЯ
    await setCanvasPreview(
      imgRef.current, // HTMLImageElement
      previewCanvasRef.current, // HTMLCanvasElement
      convertToPixelCrop(
        crop,
        imgRef.current.width,
        imgRef.current.height
      )
    )
    canvas.toBlob((blob) => {
        let file = new File([blob], "fileName.jpg", {type: "image/jpeg"})
        setFile(file)
      },
      'image/jpeg'
    );
    // const data = previewCanvasRef.current.toDataURL();
    // submitPhoto(data)
  }

  return createPortal(
    <dialog ref={dialogRef} className={styles.modal_dialog}>
      <nav className={styles.modal_dialog_header}>
        <p>Фотография для вашего профиля</p>
        <button onClick={closeButton} className={styles.close_button}>
          X
        </button>
      </nav>

      {imgSrc ? (
        <div className={styles.modal_avatar_block}>
          <p>Выделенная область будет показываться в вашем профиле.
            <br/>Вы можете установить фото как аватар или добавить его в свой профиль.
          </p>
          <div className={styles.modal_avatar_container}>
            <ReactCrop
              crop={crop}
              keepSelection
              aspect={ASPECT_RATIO}
              minWidth={MIN_DIMENSION}
              ruleOfThirds
              onChange={onChangeCrop}
              onComplete={avatarButtonClick}
            >
              <img
                alt="Выбранное фото"
                ref={imgRef}
                src={imgSrc}
                className={styles.modal_chosen_avatar}
                onLoad={onImageLoad}
              />
            </ReactCrop>
          </div>


          <section className={styles.modal_avatar_button_section}>
            <button onClick={() => submitPhoto('avatar')}
                    className={styles.modal_avatar_button}
                    id='modal_avatar_button'>
              Установить как аватар
            </button>
            <button onClick={() => submitPhoto('profileImg')} className={styles.modal_avatar_button}>
              Добавить фото в профиль
            </button>
          </section>
          {crop &&
            <canvas
              id={'canvas'}
              ref={previewCanvasRef}
              className={styles.preview}
            />
          }
        </div>
      ) : (
        <div className={styles.modal_content}>
          <label htmlFor="file" className={styles.modal_content_label}>
            <span>
              <img
                className={styles.modal_content_label_picture}
                src={photo}
                alt="Upload"
              />
            </span>
            <p>
              Выберете файл формата <br /> jpeg или png
            </p>
          </label>
          <form>
            <input
              name="file"
              id="file"
              type="file"
              onChange={onSelectFile}
              className={styles.modal_content_input}
              accept=".jpg, .png, .jpeg"
            />
          </form>
        </div>
      )}
    </dialog>,
    document.getElementById("modal")
  );
}
