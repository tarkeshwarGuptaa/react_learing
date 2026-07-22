export default function Header() {
  return (
    <div id="header">
      <img
        id="logo"
        src="https://livewire.thewire.in/wp-content/uploads/2021/02/myntra.png"
      />
      <div id="option">
        <a href="#" className="options">
          MEN
        </a>
        <a href="#" className="options">
          WOMEN
        </a>
        <a href="#" className="options">
          KIDS
        </a>
        <a href="#" className="options">
          HOME
        </a>
        <a href="#" className="options">
          BEAUTY
        </a>
        <a href="#" className="options">
          GENZ
        </a>
        <a href="#" className="options">
          STUDIO <sup id="power">NEW</sup>
        </a>
      </div>
      <div id="desktop-search">
        <span>
          <i className="fa-brands fa-sistrix srch-icon"></i>
        </span>
        <input
          className="srchInput"
          placeholder="Search for products, brands and more"
        ></input>
      </div>
      <div id="desktop-action">
        <div className="desktop-action-options">
          <i className="fa-regular fa-user action-icon"></i>
          <div>Profile</div>
        </div>
        <div className="desktop-action-options">
          <i className="fa-regular fa-heart action-icon"></i>
          <div>Wishlist</div>
        </div>
        <div className="desktop-action-options">
          <i className="fa-solid fa-bag-shopping action-icon"></i>
          <div>Bag</div>
        </div>
      </div>
    </div>
  );
}
