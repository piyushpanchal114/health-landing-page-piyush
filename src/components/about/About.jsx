import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://media.istockphoto.com/photos/your-care-is-my-number-one-concern-picture-id1063592596?k=20&m=1063592596&s=612x612&w=0&h=_MGPj8lVJlSMyT8lE2bEIxKTbMjvF-U48oaAxubyP6c="
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Director Message</h1>
        <p className="a-sub">
        I welcome all the visitors to the official portal of Life Care Hospital.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Best Hospital Award 2022</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
