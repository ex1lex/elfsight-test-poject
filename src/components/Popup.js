import Slider from "react-slick";

export default function Popup(props) {
  const openClass = props.selectedAlbum ? "dialog_show" : "";
  const items = props.selectedAlbum.photos;

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: props.selectedAlbum.id,
    adaptiveHeight: true,
  };

  //TODO initialSlide должно получаться из вне - т.к. открыта фотография

  const overlayClickHandle = (e) => {
    if (
      e.target.classList.contains("dialog") ||
      e.target.classList.contains("dialog__content-card")
    ) {
      props.onClose();
    }
  };

  if (items) {
    return (
      <div className={`dialog ${openClass}`} onClick={overlayClickHandle}>
        <div className="dialog__content-card">
          <div className="dialog__carousel">
            <Slider {...settings}>
              {items.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.url}
                    alt={item.title}
                    className="dialog__img"
                  />
                );
              })}
            </Slider>
          </div>
          <button
            type="submit"
            className="dialog__close-button dialog__close-button_card"
            onClick={props.onClose}
          ></button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
