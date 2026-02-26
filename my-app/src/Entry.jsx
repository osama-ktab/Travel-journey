function Entry(props) {
  return (
    <article className="main-content">
      <img src={props.entry.img.src} alt={props.entry.img.alt} />
      <div className="parents">
        <div className="location">
          <span className="small">{props.entry.country}</span>
          <a href={props.entry.googleMapsLink} className="small">
            View on Google Maps
          </a>
          <h3>{props.entry.title}</h3>
        </div>
        <div>
          <p className="trip-date">{props.entry.dates}</p>
          <p className="entry-text small">{props.entry.text}</p>
        </div>
      </div>
    </article>
  );
}

export default Entry;
