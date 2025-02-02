import "./base.css";

const SocialMedia = () => {
  return (
    <>
      <ul class="wrapper">
        <li class="icon instagram">
          <span class="tooltip">Instagram</span>
          <span>
            <i class="fab fa-instagram"></i>
          </span>
        </li>
        <li class="icon github">
          <span class="tooltip">Github</span>
          <span>
            <i class="fab fa-github"></i>
          </span>
        </li>
      </ul>
    </>
  );
};

export default SocialMedia;
